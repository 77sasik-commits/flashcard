import requests, csv
from io import StringIO

def get_cards():
    url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSozv-4I1UpYFS1Z0-zQe4tXbufmrG2MHNFCMlPa9tEcaX6YzOzvdh-kU1MOIeqM0jJe4GvmkR6MQ8z/pub?output=csv"
    response = requests.get(url)
    response.encoding = "utf-8"   # 한글 깨짐 방지
    f = StringIO(response.text)
    reader = csv.DictReader(f)

    # 키워드가 비어 있지 않은 행만 필터링
    cards = [row for row in reader if row['키워드'].strip()]
    return cards
