from flask import Flask, render_template
import requests
import csv
import random

app = Flask(__name__)

CSV_URL = "https://docs.google.com/spreadsheets/d/시트ID/export?format=csv"

def fetch_cards():
    response = requests.get(CSV_URL)
    response.encoding = "utf-8"
    cards = []
    reader = csv.reader(response.text.splitlines())
    for row in reader:
        if len(row) >= 2:
            cards.append({"question": row[0], "answer": row[1]})
    return cards

@app.route("/")
def index():
    cards = fetch_cards()
    return render_template("index.html", cards=cards)

if __name__ == "__main__":
    app.run(debug=True)
