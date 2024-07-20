from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

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
