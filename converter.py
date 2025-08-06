import csv
import json

items = []
with open('data.csv', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=';')
    for idx, row in enumerate(reader, start=1):

        start_time, end_time = {
            'tv': (" 1:00", " 21:00"),
            'books': (" 13:00", " 12:00")
        }.get(row["group"], ("", ""))

        start = f'{row["start"]}{start_time}' if row["start"] else None
        end = f'{row["end"]}{end_time}' if row["end"] else (row["start"] + " 23:59")

        note = ""
        if row["note"]:
            if row["note"] == "DNF":
                note += " dnf"
            if "B" in row["note"]:
                note += " break"
            if "R" in row["note"]:
                note += " return"

        items.append({
            "id": idx,
            "content": row["content"],
            "start": start,
            "end": end,
            "group": row["group"],
            "subgroup": row["subgroup"],
            "url": row["url"] or None,
            "className": row["subgroup"] + note,
            "title": row["content"]
        })

with open('timeline-items.js', 'w', encoding='utf-8') as jsonfile:
    jsonfile.write("const items = new vis.DataSet(")
    json.dump(items, jsonfile, ensure_ascii=False, indent=4)
    jsonfile.write(");")
