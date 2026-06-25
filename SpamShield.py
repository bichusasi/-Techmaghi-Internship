from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

spam_words = [
    "win",
    "winner",
    "prize",
    "lottery",
    "free",
    "money",
    "offer",
    "urgent",
    "click",
    "claim",
    "cash",
    "gift",
    "congratulations",
    "limited",
    "bonus"
]

@app.route("/")
def home():
    return render_template("SpamShield.html")


@app.route("/detect", methods=["POST"])
def detect():

    data = request.get_json()

    message = data["message"].lower()

    spam_score = 0

    detected_words = []

    for word in spam_words:
        if word in message:
            spam_score += 1
            detected_words.append(word)

    if spam_score >= 2:
        result = "🚫 Spam Message"
    else:
        result = "✅ Not Spam"

    return jsonify({
        "result": result,
        "score": spam_score,
        "words": detected_words
    })


if __name__ == "__main__":
    app.run(debug=True)