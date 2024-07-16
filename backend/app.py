from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

questions = [
    {
        "id": 1,
        "question": "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
        "options": ["Don’t dare to interrupt them", "Think it’s more important to give them some of your time; work can wait", "Listen, but with only with half an ear", "Interrupt and explain that you are really busy at the moment"]
    },
    {
        "id": 2,
        "question": "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
        "options": ["Look at your watch every two minutes", "Bubble with inner anger, but keep quiet", "Explain to other equally impatient people in the room that the doctor is always running late", "Complain in a loud voice, while tapping your foot impatiently"]
    },
    {
        "id": 3,
        "question": "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
        "options": ["Don’t dare contradict them", "Think that they are obviously right", "Defend your own point of view, tooth and nail", "Continuously interrupt your colleague"]
    },
    {
        "id": 4,
        "question": "You are taking part in a guided tour of a museum. You:",
        "options": ["Are a bit too far towards the back so don’t really hear what the guide is saying", "Follow the group without question", "Make sure that everyone is able to hear properly", "Are right up the front, adding your own comments in a loud voice"]
    }
]

@app.route('/questions', methods=['GET'])
def get_questions():
    return jsonify(questions)

@app.route('/submit', methods=['POST'])
def submit_answers():
    answers = request.json.get('answers')
    introvert_score = answers.count(0) + answers.count(1)
    extrovert_score = answers.count(2) + answers.count(3)
    result = "Introvert" if introvert_score >= extrovert_score else "Extrovert"
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)
