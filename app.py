from flask import Flask, request, jsonify, render_template
from deep_translator import GoogleTranslator
from flask_cors import CORS

app = Flask(__name__, template_folder='templates', static_folder='static')
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate():
    data = request.get_json()
    text = data.get('text')

    try:
        translations = {
            'en': GoogleTranslator(source='auto', target='en').translate(text),
            'tr': GoogleTranslator(source='auto', target='tr').translate(text),
            'de': GoogleTranslator(source='auto', target='de').translate(text)
        }

        return jsonify({
            'detected': 'auto',
            'translations': translations
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
