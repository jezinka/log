const dataSource = [
    {
        "id": 1,
        "startDate": "2024-11-05",
        "endDate": "2024-12-07",
        "title": "Wybrani",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 2,
        "startDate": "2024-12-03",
        "endDate": "2024-12-07",
        "title": "Atak Tytanów T.30",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 3,
        "startDate": "2024-12-08",
        "endDate": "2024-12-12",
        "title": "Gender Queer",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 4,
        "startDate": "2024-12-07",
        "endDate": "2024-12-07",
        "title": "Dziki robot",
        "group": "tv",
        "subgroup": "cinema"
    },
    {
        "id": 5,
        "startDate": "2024-12-06",
        "endDate": "2024-12-06",
        "title": "Król Lew",
        "group": "tv",
        "subgroup": "movie"
    },
    {
        "id": 6,
        "startDate": "2024-12-10",
        "endDate": "2024-12-19",
        "title": "Tulsa King s.2",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 7,
        "startDate": "2024-12-13",
        "endDate": "2024-12-14",
        "title": "Atak Tytanów T.31",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 8,
        "startDate": "2024-12-15",
        "endDate": "2024-12-17",
        "title": "Atak Tytanów T.32",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 9,
        "startDate": "2024-12-18",
        "endDate": "2024-12-19",
        "title": "Atak Tytanów T.33",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 10,
        "startDate": "2024-12-20",
        "endDate": "2024-12-21",
        "title": "Atak Tytanów T.34",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 11,
        "startDate": "2024-12-08",
        "endDate": "2024-12-09",
        "title": "Money Electric: The Bitcoin Mystery",
        "group": "tv",
        "subgroup": "movie"
    },
    {
        "id": 12,
        "startDate": "2024-12-20",
        "endDate": "2024-12-21",
        "title": "John Wick",
        "group": "tv",
        "subgroup": "movie"
    },
    {
        "id": 13,
        "startDate": "2024-12-28",
        "endDate": "2024-12-29",
        "title": "John Wick 2",
        "group": "tv",
        "subgroup": "movie"
    },
    {
        "id": 14,
        "startDate": "2024-12-30",
        "endDate": "2025-01-01",
        "title": "John Wick 3",
        "group": "tv",
        "subgroup": "movie"
    },
    {
        "id": 15,
        "startDate": "2024-12-21",
        "endDate": "2024-12-30",
        "title": "Queer Eye s.9",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 16,
        "startDate": "2024-12-22",
        "endDate": "2024-12-27",
        "title": "Pjongjang",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 17,
        "startDate": "2024-12-28",
        "endDate": "2024-12-29",
        "title": "Nie zapomnij mnie",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 18,
        "startDate": "2024-12-30",
        "endDate": "2025-01-05",
        "title": "Strefa Gazy: Przypisy",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 19,
        "startDate": "2025-01-06",
        "endDate": "2025-01-09",
        "title": "Siddhartha",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 20,
        "startDate": "2025-01-10",
        "endDate": "2025-01-14",
        "title": "Hałas",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 21,
        "startDate": "2025-01-15",
        "endDate": "2025-01-16",
        "title": "Lżejsza od swojego cienia",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 22,
        "startDate": "2025-01-17",
        "endDate": "2025-01-22",
        "title": "Habibi",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 23,
        "startDate": "2025-01-25",
        "endDate": "2025-01-30",
        "title": "Normalni ludzie",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 24,
        "startDate": "2025-02-02",
        "endDate": "2025-02-03",
        "title": "Ghost world",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 25,
        "startDate": "2025-02-04",
        "endDate": "2025-02-06",
        "title": "Daytripper",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 26,
        "startDate": "2025-02-07",
        "endDate": "2025-02-14",
        "title": "Histeria Sztuki",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 27,
        "startDate": "2025-02-15",
        "endDate": "2025-02-22",
        "title": "Nie opuszczaj mnie",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 28,
        "startDate": "2025-02-25",
        "endDate": "2025-03-02",
        "title": "Czarna ziemia",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 29,
        "startDate": "2025-03-03",
        "endDate": "2025-03-04",
        "title": "Full Metal Alchemist",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 30,
        "startDate": "2025-03-19",
        "endDate": "2025-03-20",
        "title": "Do poprawki",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 31,
        "startDate": "2025-03-05",
        "endDate": "2025-03-18",
        "title": "Genialna przyjaciólka",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 32,
        "startDate": "2025-01-02",
        "endDate": "2025-01-04",
        "title": "John Wick 4",
        "group": "tv",
        "subgroup": "movie"
    },
    {
        "id": 33,
        "startDate": "2025-01-05",
        "endDate": "2025-01-11",
        "title": "Squid game",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 34,
        "startDate": "2025-01-06",
        "endDate": "2025-01-06",
        "title": "My happy marriage",
        "group": "anime",
        "subgroup": "alone"
    },
    {
        "id": 35,
        "startDate": "2025-01-13",
        "endDate": "2025-01-13",
        "title": "My happy marriage",
        "group": "anime",
        "subgroup": "alone"
    },
    {
        "id": 36,
        "startDate": "2025-01-20",
        "endDate": "2025-01-20",
        "title": "My happy marriage",
        "group": "anime",
        "subgroup": "alone"
    },
    {
        "id": 37,
        "startDate": "2025-01-27",
        "endDate": "2025-01-27",
        "title": "My happy marriage",
        "group": "anime",
        "subgroup": "alone"
    },
    {
        "id": 38,
        "startDate": "2025-02-04",
        "endDate": "2025-02-04",
        "title": "My happy marriage",
        "group": "anime",
        "subgroup": "alone"
    },
    {
        "id": 39,
        "startDate": "2025-02-10",
        "endDate": "2025-02-10",
        "title": "My happy marriage",
        "group": "anime",
        "subgroup": "alone"
    },
    {
        "id": 40,
        "startDate": "2025-02-17",
        "endDate": "2025-02-17",
        "title": "My happy marriage",
        "group": "anime",
        "subgroup": "alone"
    },
    {
        "id": 41,
        "startDate": "2025-02-24",
        "endDate": "2025-02-24",
        "title": "My happy marriage",
        "group": "anime",
        "subgroup": "alone"
    },
    {
        "id": 42,
        "startDate": "2025-03-03",
        "endDate": "2025-03-03",
        "title": "My happy marriage",
        "group": "anime",
        "subgroup": "alone"
    },
    {
        "id": 43,
        "startDate": "2025-03-10",
        "endDate": "2025-03-10",
        "title": "My happy marriage",
        "group": "anime",
        "subgroup": "alone"
    },
    {
        "id": 44,
        "startDate": "2025-03-17",
        "endDate": "2025-03-17",
        "title": "My happy marriage",
        "group": "anime",
        "subgroup": "alone"
    },
    {
        "id": 45,
        "startDate": "2025-03-23",
        "endDate": "2025-03-23",
        "title": "My happy marriage",
        "group": "anime",
        "subgroup": "alone"
    },
    {
        "id": 46,
        "startDate": "2025-04-28",
        "endDate": "2025-04-28",
        "title": "My happy marriage",
        "group": "anime",
        "subgroup": "alone"
    },
    {
        "id": 47,
        "startDate": "2025-01-09",
        "endDate": "2025-01-11",
        "title": "Dziecko czy oszustka: Przypadek Natalii Grace",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 48,
        "startDate": "2025-01-12",
        "endDate": "2025-01-19",
        "title": "Penguin",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 49,
        "startDate": "2025-01-20",
        "endDate": "2025-01-29",
        "title": "Dzień Szakala",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 50,
        "startDate": "2025-01-30",
        "endDate": "2025-01-31",
        "title": "Szakal",
        "group": "tv",
        "subgroup": "movie"
    },
    {
        "id": 51,
        "startDate": "2025-01-28",
        "endDate": "2025-01-30",
        "title": "Ukochane dziecko",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 52,
        "startDate": "2025-01-30",
        "endDate": "2025-01-30",
        "title": "Mianujom mie Hanka",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 53,
        "startDate": "2025-02-02",
        "endDate": "2025-02-09",
        "title": "Śleboda",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 54,
        "startDate": "2025-02-11",
        "endDate": "2025-02-23",
        "title": "Krucjata s.2",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 55,
        "startDate": "2025-02-11",
        "endDate": "2025-02-28",
        "title": "Neon Genesis Evangelion",
        "group": "anime",
        "subgroup": ""
    },
    {
        "id": 56,
        "startDate": "2025-03-12",
        "endDate": "2025-03-12",
        "title": "End of Evangelion",
        "group": "anime",
        "subgroup": ""
    },
    {
        "id": 57,
        "startDate": "2025-02-24",
        "endDate": "2025-02-27",
        "title": "Ocet jabłkowy",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 58,
        "startDate": "2025-02-25",
        "endDate": "2025-03-01",
        "title": "Kibic",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 59,
        "startDate": "2025-03-02",
        "endDate": "2025-03-13",
        "title": "Zbrodnie po sąsiedzku",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 60,
        "startDate": "2025-03-14",
        "endDate": "2025-03-14",
        "title": "Ponyo",
        "group": "anime",
        "subgroup": ""
    },
    {
        "id": 61,
        "startDate": "2025-03-15",
        "endDate": "2025-03-15",
        "title": "Daredevil",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 62,
        "startDate": "2025-02-23",
        "endDate": "2025-02-23",
        "title": "W pułapce myśli",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 63,
        "startDate": "2025-07-25",
        "endDate": "2025-07-25",
        "title": "Dear Zachary",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 64,
        "startDate": "2025-02-24",
        "endDate": "2025-02-24",
        "title": "Sound of sch",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 65,
        "startDate": "2025-03-21",
        "endDate": "2025-03-22",
        "title": "Marka osobista w branży IT",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 66,
        "startDate": "2025-03-23",
        "endDate": "2025-03-29",
        "title": "Potwory",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 67,
        "startDate": "2025-03-31",
        "endDate": "2025-04-05",
        "title": "Lockerbie",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 68,
        "startDate": "2025-04-06",
        "endDate": "2025-04-16",
        "title": "Reacher",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 69,
        "startDate": "2025-04-17",
        "endDate": "2025-04-24",
        "title": "Black Mirror",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 70,
        "startDate": "2025-04-27",
        "endDate": "2025-05-02",
        "title": "Slow horses",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 71,
        "startDate": "2025-04-27",
        "endDate": "2025-05-06",
        "title": "Severance",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 72,
        "startDate": "2025-05-05",
        "endDate": "2025-05-07",
        "title": "Demon w rodzinie: Sprawa Ruby Franke",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 73,
        "startDate": "2025-03-30",
        "endDate": "2025-04-02",
        "title": "Ścieżka",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 74,
        "startDate": "2025-03-16",
        "endDate": "2025-03-19",
        "title": "Dojrzewanie",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 75,
        "startDate": "2025-03-20",
        "endDate": "2025-03-30",
        "title": "Dexter: Original sin",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 76,
        "startDate": "2025-04-03",
        "endDate": "2025-04-07",
        "title": "Śmieci",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 77,
        "startDate": "2025-04-08",
        "endDate": "2025-04-11",
        "title": "Ocean na końcu drogi",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 78,
        "startDate": "2025-04-12",
        "endDate": "2025-04-21",
        "title": "Historia nowego nazwiska",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 79,
        "startDate": "2025-04-22",
        "endDate": "2025-04-27",
        "title": "Powolna produktywność",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 80,
        "startDate": "2025-04-28",
        "endDate": "2025-05-11",
        "title": "Historia ucieczki",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 81,
        "startDate": "2025-05-03",
        "endDate": "2025-05-13",
        "title": "Bosch: Legacy",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 82,
        "startDate": "2025-05-14",
        "endDate": "2025-05-26",
        "title": "Silos",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 83,
        "startDate": "2025-05-27",
        "endDate": "2025-06-04",
        "title": "Mythic Quest",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 84,
        "startDate": "2025-05-12",
        "endDate": "2025-05-13",
        "title": "PTSD",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 85,
        "startDate": "2025-05-14",
        "endDate": "2025-05-16",
        "title": "Powolna produktywność",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 86,
        "startDate": "2025-02-22",
        "endDate": "2025-02-22",
        "title": "Jerry Springer: Kłótnie, kamera, akcja",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 87,
        "startDate": "2025-05-15",
        "endDate": "2025-05-15",
        "title": "Sprzątaczka",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 88,
        "startDate": "2025-06-13",
        "endDate": "2025-06-13",
        "title": "Sprzątaczka",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 89,
        "startDate": "2025-05-17",
        "endDate": "2025-05-20",
        "title": "Weź się w garść",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 90,
        "startDate": "2025-05-21",
        "endDate": "2025-05-31",
        "title": "Historia zaginionej dziewczynki",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 91,
        "startDate": "2025-06-01",
        "endDate": "2025-06-11",
        "title": "Kwiaty dla Algernona",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 92,
        "startDate": "2025-06-12",
        "endDate": "2025-06-16",
        "title": "Umowa z Bogiem",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 93,
        "startDate": "2025-06-14",
        "endDate": "2025-06-26",
        "title": "Zakłamane życie dorosłych",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 94,
        "startDate": "2025-06-05",
        "endDate": "2025-06-13",
        "title": "Last of us",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 95,
        "startDate": "2025-06-24",
        "endDate": "2025-06-29",
        "title": "Umowa z Bogiem",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 96,
        "startDate": "2025-06-14",
        "endDate": "2025-06-29",
        "title": "George and Mandy first marriage",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 97,
        "startDate": "2025-06-30",
        "endDate": "2025-07-05",
        "title": "Squid game",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 98,
        "startDate": "2025-07-13",
        "endDate": "2025-07-16",
        "title": "Proces",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 99,
        "startDate": "2025-07-01",
        "endDate": "2025-07-10",
        "title": "Wodnikowe wzgórze",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 100,
        "startDate": "2025-07-14",
        "endDate": "2025-07-16",
        "title": "Wodnikowe wzgórze",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 101,
        "startDate": "2025-07-11",
        "endDate": "2025-07-12",
        "title": "Czas porzucenia",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 102,
        "startDate": "2025-07-17",
        "endDate": "2025-07-19",
        "title": "Przyjaciele, kochankowie i ta wielka straszna rzecz",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 103,
        "startDate": "2025-08-01",
        "endDate": "2025-08-03",
        "title": "Przyjaciele, kochankowie i ta wielka straszna rzecz",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 104,
        "startDate": "2025-07-06",
        "endDate": "2025-07-06",
        "title": "Zwierzogród",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 105,
        "startDate": "2025-07-07",
        "endDate": "2025-07-07",
        "title": "Epoka lodowcowa",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 106,
        "startDate": "2025-07-08",
        "endDate": "2025-07-08",
        "title": "Droga do Eldorado",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 107,
        "startDate": "2025-07-09",
        "endDate": "2025-07-09",
        "title": "Turbo",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 108,
        "startDate": "2025-07-10",
        "endDate": "2025-07-10",
        "title": "Ruchomy zamek Hauru",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 109,
        "startDate": "2025-07-13",
        "endDate": "2025-07-22",
        "title": "The Bear",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 110,
        "startDate": "2025-07-23",
        "endDate": "2025-07-29",
        "title": "Przesmyk",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 111,
        "startDate": "2025-07-30",
        "endDate": "2025-07-30",
        "title": "Sandman",
        "group": "tv",
        "subgroup": "alone"
    },
    {
        "id": 112,
        "startDate": "2025-07-31",
        "endDate": "2025-08-06",
        "title": "Dzikość",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 113,
        "startDate": "2025-07-30",
        "endDate": "2025-07-30",
        "title": "Sandman",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 114,
        "startDate": "2025-02-24",
        "endDate": "2025-02-24",
        "title": "Ocet jabłkowy",
        "group": "tv",
        "subgroup": "series"
    },
    {
        "id": 115,
        "startDate": "2025-08-03",
        "endDate": "2025-08-04",
        "title": "Winland Saga",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 116,
        "startDate": "2025-07-19",
        "endDate": "2025-07-20",
        "title": "Winland Saga",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 117,
        "startDate": "2025-08-04",
        "endDate": "2025-08-05",
        "title": "Eden",
        "group": "books",
        "subgroup": "comics"
    },
    {
        "id": 118,
        "startDate": "2025-07-21",
        "endDate": "2025-07-30",
        "title": "Wodnikowe wzgórze",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 119,
        "startDate": "2025-06-21",
        "endDate": "2025-06-21",
        "title": "Lilo i Stitch",
        "group": "tv",
        "subgroup": "cinema"
    },
    {
        "id": 120,
        "startDate": "2025-08-06",
        "endDate": "2025-08-10",
        "title": "Milczące bliźniaczki",
        "group": "books",
        "subgroup": "book"
    },
    {
        "id": 121,
        "startDate": "2025-08-07",
        "endDate": "2025-08-07",
        "title": "Upadek",
        "group": "tv",
        "subgroup": "series"
    }
];