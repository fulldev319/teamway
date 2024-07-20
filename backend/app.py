from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# questions = [
#     {
#         "id": 1,
#         "question": "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
#         "options": ["Don’t dare to interrupt them", "Think it’s more important to give them some of your time; work can wait", "Listen, but with only with half an ear", "Interrupt and explain that you are really busy at the moment"]
#     },
#     {
#         "id": 2,
#         "question": "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
#         "options": ["Look at your watch every two minutes", "Bubble with inner anger, but keep quiet", "Explain to other equally impatient people in the room that the doctor is always running late", "Complain in a loud voice, while tapping your foot impatiently"]
#     },
#     {
#         "id": 3,
#         "question": "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
#         "options": ["Don’t dare contradict them", "Think that they are obviously right", "Defend your own point of view, tooth and nail", "Continuously interrupt your colleague"]
#     },
#     {
#         "id": 4,
#         "question": "You are taking part in a guided tour of a museum. You:",
#         "options": ["Are a bit too far towards the back so don’t really hear what the guide is saying", "Follow the group without question", "Make sure that everyone is able to hear properly", "Are right up the front, adding your own comments in a loud voice"]
#     }
# ]

# Configure the PostgreSQL database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://orion:@localhost:5432/personality_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define your models here
class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(200), nullable=False)
    options = db.Column(db.JSON, nullable=False)

class Answer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.Integer, db.ForeignKey('question.id'), nullable=False)
    answer = db.Column(db.String(200), nullable=False)

# Create the database tables
@app.before_request
def create_tables():
    print('--- pre-action ---')
    db.create_all()

@app.route('/questions', methods=['POST'])
def add_question():
    data = request.get_json()
    new_question = Question(question=data['question'], options=data['options'])
    db.session.add(new_question)
    db.session.commit()
    return jsonify({'message': 'Question added successfully!'}), 201

@app.route('/questions', methods=['GET'])
def get_questions():
    questions = Question.query.all()
    output = []
    for question in questions:
        question_data = {'id': question.id, 'question': question.question, 'options': question.options}
        output.append(question_data)
    return jsonify(output), 200

@app.route('/submit', methods=['POST'])
def submit_answers():
    answers = request.json.get('answers')
    introvert_score = answers.count(0) + answers.count(1)
    extrovert_score = answers.count(2) + answers.count(3)
    result = "Introvert" if introvert_score >= extrovert_score else "Extrovert"
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)
