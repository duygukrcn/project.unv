md
🎤 Multilingual Voice Translator
A simple web-based voice translator that recognizes spoken input and translates it into Turkish, English, and German in real time.

Built using:

Flask (Python) – Backend server and translation logic
JavaScript – Browser-based speech recognition
HTML/CSS – Frontend interface
deep-translator – API for multilingual translation
🚀 Features
🎙️ Voice input recognition using browser's SpeechRecognition API
🌍 Translates into 3 languages at once: English (EN), Turkish (TR), and German (DE)
🔄 Real-time processing with instant output display
⚠️ Graceful error handling for recognition or translation issues
🧩 Cross-platform, no installation required (runs in browser)
📁 Project Structure
/project-root
│
├── app.py                 # Flask backend
├── requirements.txt       # Python dependencies
│
├── /templates
│   └── index.html         # Main frontend page
│
├── /static
│   └── script.js          # JS for voice recognition and fetch logic
▶️ How to Run
Install dependencies
pip install flask deep-translator flask-cors
Run the Flask server
python app.py
Visit in browser
Go to http://localhost:5000 and click “Start Speaking” to begin.

📝 Notes
Voice recognition works best in Google Chrome.
Ensure microphone access is allowed in your browser.
For production deployment, debug=True should be removed from app.py.
📜 License
This project is built for educational and demonstration purposes. No commercial use is intended.

🙏 Acknowledgment
Special thanks to our mentor Cliff for his guidance throughout the project, and to Near East University for providing us with this internship opportunity.

