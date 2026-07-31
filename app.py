from flask import Flask, render_template
from utils.fetch_csv import get_cards

app = Flask(__name__)

@app.route("/")
def index():
    cards = get_cards()
    return render_template("index.html", cards=cards)

if __name__ == "__main__":
    app.run(debug=True)