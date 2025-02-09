from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from React

@app.route('/api/message', methods=['GET'])  # Must match frontend URL
def get_message():
    return jsonify({"message": "Hello from Python Backend!"})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
