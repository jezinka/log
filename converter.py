import csv
import json

items = []
with open('data.csv', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=';')
    for idx, row in enumerate(reader, start=1):

        items.append({
            "id": idx,
            "startDate": row["start"],
            "endDate": row["end"] if row["end"] else row["start"],
            "title": row["content"],
            "group": row["group"],
            "subgroup": row["subgroup"]
        })

with open('static/items.js', 'w', encoding='utf-8') as jsonfile:
    jsonfile.write("const dataSource = ")
    json.dump(items, jsonfile, ensure_ascii=False, indent=4)
    jsonfile.write(";")
