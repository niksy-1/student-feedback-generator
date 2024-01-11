# This is an example using Flask in Python
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/generate_feedback', methods=['POST'])
def generate_feedback():
    data = request.json
    # Construct the prompt based on the grades received
    prompt = f"Please provide feedback for the student based on the following grades: "\
             f"Knowledge and Understanding: {data['knowledgeUnderstanding']}, "\
             f"Investigation: {data['investigation']}, "\
             f"Communication: {data['communication']}, "\
             f"Critical Thinking: {data['criticalThinking']}."

    # Make the request to the OpenAI API
    response = requests.post(
        'https://api.openai.com/v1/engines/davinci/completions',
        headers={
            'Authorization': f'Bearer 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',
            'Content-Type': 'application/json'
        },
        json={
            'prompt': prompt,
            'temperature': 0.7,
            'max_tokens': 150
        }
    )
    response_data = response.json()
    
    # Send back the completion text as feedback
    return jsonify({'feedback': response_data['choices'][0]['text'].strip()})

if __name__ == '__main__':
    app.run()
