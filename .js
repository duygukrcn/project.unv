document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startBtn");
    const output = document.getElementById("output");

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = "tr-TR";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    startBtn.addEventListener("click", () => {
        recognition.start();
        output.textContent = "🎧 Listening...";
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        output.textContent = `You said: ${transcript}\n\n🔄 Translating...`;

        fetch("/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: transcript })
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                output.textContent = "⚠️ Error: " + data.error;
            } else {
                const { detected, translations } = data;
                let result = `🌍 Detected Language: ${detected}\n\n`;
                for (let lang in translations) {
                    result += `➡️ ${lang.toUpperCase()}: ${translations[lang]}\n`;
                }
                output.textContent = result;
            }
        });
    };

    recognition.onerror = (e) => {
        output.textContent = "⚠️ Error during recognition: " + e.error;
    };
});
