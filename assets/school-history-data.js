/*
 * ACC Jr. High Wrestling — school-by-school placement history.
 * Source: Daniel Emmons' ACC results spreadsheet (Sep 2026), covering
 * 2024, 2025, 2026 individual placements (Champion/Runner-Up/3rd-8th).
 * Keyed by the same slug used in schools.js. Consumed by schools.js to
 * render the click-to-expand history modal.
 *
 * TO UPDATE: add a new { year, place, name, weight } entry to the
 * relevant school's array. Entries are pre-sorted newest-year-first,
 * champion-to-8th within a year -- keep new entries sorted the same
 * way, or call the render function's sort logic will just re-sort
 * on load anyway (see PLACE_ORDER in schools.js).
 */
const SCHOOL_HISTORY = {
  "avonworth": [
    {
      "year": 2026,
      "place": "Runner-Up",
      "name": "Drew Brady",
      "weight": 155
    },
    {
      "year": 2026,
      "place": "7",
      "name": "Quentin Krul",
      "weight": 101
    },
    {
      "year": 2026,
      "place": "7",
      "name": "Harper Winghart",
      "weight": 170
    },
    {
      "year": 2026,
      "place": "8",
      "name": "Carson Stroyne",
      "weight": 170
    },
    {
      "year": 2025,
      "place": "Champion",
      "name": "Logan Krul",
      "weight": 145
    },
    {
      "year": 2025,
      "place": "Champion",
      "name": "Xavier Harding",
      "weight": 210
    },
    {
      "year": 2025,
      "place": "3",
      "name": "Robert Huffmyer",
      "weight": 170
    },
    {
      "year": 2025,
      "place": "5",
      "name": "Braylen Brown",
      "weight": 190
    },
    {
      "year": 2024,
      "place": "Champion",
      "name": "Gavin McDowell",
      "weight": 155
    },
    {
      "year": 2024,
      "place": "5",
      "name": "Logan Krul",
      "weight": 122
    }
  ],
  "baldwin-whitehall": [
    {
      "year": 2026,
      "place": "3",
      "name": "Austin Alex",
      "weight": 101
    },
    {
      "year": 2026,
      "place": "4",
      "name": "Brayden Hopfer",
      "weight": 80
    },
    {
      "year": 2026,
      "place": "4",
      "name": "Ezra Guth",
      "weight": 210
    },
    {
      "year": 2026,
      "place": "6",
      "name": "Logan Herrington",
      "weight": 87
    },
    {
      "year": 2025,
      "place": "3",
      "name": "Shamil Islamov",
      "weight": 101
    },
    {
      "year": 2025,
      "place": "4",
      "name": "Akhmed Yusupov",
      "weight": 108
    },
    {
      "year": 2024,
      "place": "Champion",
      "name": "Shamil Islamov",
      "weight": 87
    },
    {
      "year": 2024,
      "place": "4",
      "name": "Jordan Lapen",
      "weight": 130
    },
    {
      "year": 2024,
      "place": "5",
      "name": "Teague Toki",
      "weight": 108
    },
    {
      "year": 2024,
      "place": "6",
      "name": "Aiden Guthrie",
      "weight": 101
    }
  ],
  "bethel-park": [
    {
      "year": 2026,
      "place": "Runner-Up",
      "name": "Michael Tomaino",
      "weight": 190
    },
    {
      "year": 2026,
      "place": "Runner-Up",
      "name": "Jack Kareis",
      "weight": 210
    },
    {
      "year": 2026,
      "place": "3",
      "name": "Marino Monz",
      "weight": 155
    },
    {
      "year": 2026,
      "place": "8",
      "name": "Luca Mccann",
      "weight": 87
    },
    {
      "year": 2025,
      "place": "Runner-Up",
      "name": "Lucas Skerbetz",
      "weight": 155
    },
    {
      "year": 2025,
      "place": "3",
      "name": "Luca Mccann",
      "weight": 80
    },
    {
      "year": 2025,
      "place": "5",
      "name": "Carson Elder",
      "weight": 122
    },
    {
      "year": 2025,
      "place": "6",
      "name": "Brody Kunkle",
      "weight": 115
    },
    {
      "year": 2024,
      "place": "Runner-Up",
      "name": "Lucas Skerbertz",
      "weight": 130
    },
    {
      "year": 2024,
      "place": "4",
      "name": "Matthew McGrail",
      "weight": 190
    }
  ],
  "carlynton": [
    {
      "year": 2026,
      "place": "4",
      "name": "Cavin Mulkerrin",
      "weight": 108
    },
    {
      "year": 2026,
      "place": "5",
      "name": "Deandre Peterson",
      "weight": 190
    },
    {
      "year": 2024,
      "place": "3",
      "name": "Dominic Cisnero Torres",
      "weight": 170
    }
  ],
  "chartiers-valley": [
    {
      "year": 2026,
      "place": "Champion",
      "name": "Brody Brown",
      "weight": 115
    },
    {
      "year": 2026,
      "place": "Champion",
      "name": "Islam Sadyrbekov",
      "weight": 130
    },
    {
      "year": 2026,
      "place": "3",
      "name": "Christian Ibrahim",
      "weight": 170
    },
    {
      "year": 2026,
      "place": "4",
      "name": "Marco Modelo",
      "weight": 190
    },
    {
      "year": 2026,
      "place": "5",
      "name": "Noah Kerestes",
      "weight": 87
    },
    {
      "year": 2026,
      "place": "8",
      "name": "Mason Brignoni",
      "weight": 94
    },
    {
      "year": 2025,
      "place": "Runner-Up",
      "name": "Brody Brown",
      "weight": 108
    },
    {
      "year": 2025,
      "place": "4",
      "name": "Ahmed Altam",
      "weight": 250
    },
    {
      "year": 2024,
      "place": "Champion",
      "name": "Musabek Sadyrbekov",
      "weight": 170
    }
  ],
  "elizabeth-forward": [
    {
      "year": 2026,
      "place": "Champion",
      "name": "Michael Trumpie",
      "weight": 138
    },
    {
      "year": 2026,
      "place": "4",
      "name": "Ryan Jellison",
      "weight": 155
    },
    {
      "year": 2026,
      "place": "5",
      "name": "Liam Smiley",
      "weight": 145
    },
    {
      "year": 2026,
      "place": "6",
      "name": "Jackson Kline",
      "weight": 145
    },
    {
      "year": 2025,
      "place": "Runner-Up",
      "name": "Michael Trumpie",
      "weight": 115
    }
  ],
  "fox-chapel": [
    {
      "year": 2026,
      "place": "Runner-Up",
      "name": "Hamed Rahmani",
      "weight": 115
    },
    {
      "year": 2026,
      "place": "Runner-Up",
      "name": "Chase Gaston-Henderson",
      "weight": 170
    },
    {
      "year": 2026,
      "place": "4",
      "name": "Vincent Godber",
      "weight": 250
    },
    {
      "year": 2026,
      "place": "5",
      "name": "Levi Hovis",
      "weight": 108
    },
    {
      "year": 2026,
      "place": "7",
      "name": "Kameron Johnson",
      "weight": 155
    },
    {
      "year": 2025,
      "place": "Champion",
      "name": "Hamed Rahmani",
      "weight": 108
    },
    {
      "year": 2025,
      "place": "Champion",
      "name": "Olympic Serrao",
      "weight": 130
    },
    {
      "year": 2025,
      "place": "4",
      "name": "Chase Rapp",
      "weight": 210
    },
    {
      "year": 2025,
      "place": "5",
      "name": "Max Gallagher",
      "weight": 145
    },
    {
      "year": 2025,
      "place": "6",
      "name": "John Daniels",
      "weight": 155
    },
    {
      "year": 2024,
      "place": "Champion",
      "name": "Olympic Serrao",
      "weight": 101
    },
    {
      "year": 2024,
      "place": "3",
      "name": "Logan Shirk",
      "weight": 145
    },
    {
      "year": 2024,
      "place": "6",
      "name": "Luke Krushinski",
      "weight": 115
    },
    {
      "year": 2024,
      "place": "6",
      "name": "Dominic Rothmeyer",
      "weight": 138
    }
  ],
  "gateway": [
    {
      "year": 2026,
      "place": "3",
      "name": "Connor Deluco",
      "weight": 115
    },
    {
      "year": 2026,
      "place": "3",
      "name": "Malik Blake",
      "weight": 210
    },
    {
      "year": 2026,
      "place": "7",
      "name": "Colton Steinkopf",
      "weight": 138
    },
    {
      "year": 2026,
      "place": "8",
      "name": "Weston Boden",
      "weight": 80
    },
    {
      "year": 2025,
      "place": "Champion",
      "name": "Jahari Scott",
      "weight": 155
    },
    {
      "year": 2025,
      "place": "Champion",
      "name": "Andrew Gabriel",
      "weight": 250
    },
    {
      "year": 2025,
      "place": "Runner-Up",
      "name": "Envy Cook",
      "weight": 138
    },
    {
      "year": 2025,
      "place": "6",
      "name": "Joseph Thompson",
      "weight": 145
    },
    {
      "year": 2024,
      "place": "Runner-Up",
      "name": "Andrew Gabriel",
      "weight": 250
    },
    {
      "year": 2024,
      "place": "3",
      "name": "Maddox Steele",
      "weight": 138
    },
    {
      "year": 2024,
      "place": "6",
      "name": "Everett Kuehn",
      "weight": 87
    }
  ],
  "hampton": [
    {
      "year": 2026,
      "place": "Runner-Up",
      "name": "Brecken Postler",
      "weight": 145
    },
    {
      "year": 2026,
      "place": "Runner-Up",
      "name": "Eli Hunkele",
      "weight": 250
    },
    {
      "year": 2026,
      "place": "6",
      "name": "Adam Stover",
      "weight": 108
    },
    {
      "year": 2026,
      "place": "7",
      "name": "Collin Felton",
      "weight": 122
    },
    {
      "year": 2026,
      "place": "8",
      "name": "Luke Grejda",
      "weight": 190
    },
    {
      "year": 2025,
      "place": "3",
      "name": "Jay Carroll",
      "weight": 115
    },
    {
      "year": 2025,
      "place": "3",
      "name": "Brecken Postler",
      "weight": 122
    },
    {
      "year": 2025,
      "place": "6",
      "name": "Adam Stover",
      "weight": 94
    },
    {
      "year": 2024,
      "place": "Runner-Up",
      "name": "Cayden Barry",
      "weight": 80
    },
    {
      "year": 2024,
      "place": "4",
      "name": "Jay Carroll",
      "weight": 94
    }
  ],
  "highlands": [
    {
      "year": 2026,
      "place": "8",
      "name": "Eli Belfield",
      "weight": 130
    },
    {
      "year": 2026,
      "place": "8",
      "name": "John Ross-Brandan",
      "weight": 210
    },
    {
      "year": 2025,
      "place": "3",
      "name": "Thomas Naviglia",
      "weight": 145
    },
    {
      "year": 2025,
      "place": "4",
      "name": "Seth Naviglia",
      "weight": 80
    },
    {
      "year": 2025,
      "place": "4",
      "name": "Landon Syput",
      "weight": 190
    },
    {
      "year": 2024,
      "place": "Champion",
      "name": "Bryce Tavarez",
      "weight": 130
    },
    {
      "year": 2024,
      "place": "Runner-Up",
      "name": "Thomas Naviglia",
      "weight": 122
    },
    {
      "year": 2024,
      "place": "3",
      "name": "Logan Thies",
      "weight": 190
    },
    {
      "year": 2024,
      "place": "5",
      "name": "Achilles Anger-Youngblood",
      "weight": 170
    }
  ],
  "keystone-oaks": [
    {
      "year": 2026,
      "place": "Runner-Up",
      "name": "Kellen Mcpeake",
      "weight": 138
    },
    {
      "year": 2026,
      "place": "8",
      "name": "Bak Gharwall",
      "weight": 250
    }
  ],
  "mckeesport": [
    {
      "year": 2026,
      "place": "6",
      "name": "Orlando Stanford",
      "weight": 138
    },
    {
      "year": 2026,
      "place": "7",
      "name": "Josiah Jefferson",
      "weight": 190
    },
    {
      "year": 2026,
      "place": "8",
      "name": "Evan Durst",
      "weight": 108
    },
    {
      "year": 2025,
      "place": "6",
      "name": "Jamal Hafiz",
      "weight": 122
    },
    {
      "year": 2024,
      "place": "6",
      "name": "Jaelynn Linnen",
      "weight": 210
    }
  ],
  "montour": [
    {
      "year": 2026,
      "place": "5",
      "name": "Nico Schneider",
      "weight": 80
    },
    {
      "year": 2026,
      "place": "6",
      "name": "Owen Lugaila",
      "weight": 115
    },
    {
      "year": 2026,
      "place": "6",
      "name": "Carter Alston",
      "weight": 130
    },
    {
      "year": 2026,
      "place": "7",
      "name": "Cameron Rihn",
      "weight": 115
    },
    {
      "year": 2026,
      "place": "8",
      "name": "Rocco Platt",
      "weight": 138
    },
    {
      "year": 2025,
      "place": "3",
      "name": "David Long",
      "weight": 87
    },
    {
      "year": 2025,
      "place": "4",
      "name": "Archie Collins",
      "weight": 155
    },
    {
      "year": 2025,
      "place": "6",
      "name": "Zeke Ballantine",
      "weight": 80
    },
    {
      "year": 2024,
      "place": "Champion",
      "name": "Ricky Herman",
      "weight": 210
    },
    {
      "year": 2024,
      "place": "Runner-Up",
      "name": "Archie Collins",
      "weight": 138
    },
    {
      "year": 2024,
      "place": "Runner-Up",
      "name": "Liam Hovanic",
      "weight": 145
    },
    {
      "year": 2024,
      "place": "3",
      "name": "Reese Lugaila",
      "weight": 94
    }
  ],
  "moon": [
    {
      "year": 2026,
      "place": "Champion",
      "name": "James Tisak",
      "weight": 190
    },
    {
      "year": 2026,
      "place": "Champion",
      "name": "Jeffery Tisak",
      "weight": 210
    },
    {
      "year": 2026,
      "place": "3",
      "name": "Noah Lauck",
      "weight": 250
    },
    {
      "year": 2026,
      "place": "4",
      "name": "Nate Olenik",
      "weight": 170
    },
    {
      "year": 2026,
      "place": "5",
      "name": "Max Morosetti",
      "weight": 94
    },
    {
      "year": 2026,
      "place": "5",
      "name": "Akobir Asatullaev",
      "weight": 138
    },
    {
      "year": 2026,
      "place": "6",
      "name": "Ryan Degori",
      "weight": 101
    },
    {
      "year": 2026,
      "place": "6",
      "name": "Aslamjon Asatullaev",
      "weight": 122
    },
    {
      "year": 2025,
      "place": "Runner-Up",
      "name": "Max Morosetti",
      "weight": 80
    },
    {
      "year": 2025,
      "place": "3",
      "name": "Jeffery Tisak",
      "weight": 190
    },
    {
      "year": 2025,
      "place": "4",
      "name": "Tristan Esken",
      "weight": 101
    },
    {
      "year": 2025,
      "place": "4",
      "name": "Guage Robles",
      "weight": 138
    },
    {
      "year": 2025,
      "place": "6",
      "name": "Noah Lauck",
      "weight": 250
    },
    {
      "year": 2024,
      "place": "Runner-Up",
      "name": "Tristan Esken",
      "weight": 87
    },
    {
      "year": 2024,
      "place": "Runner-Up",
      "name": "Karsten Kirchner",
      "weight": 94
    },
    {
      "year": 2024,
      "place": "4",
      "name": "Max Gould",
      "weight": 155
    },
    {
      "year": 2024,
      "place": "6",
      "name": "Roman Markovich",
      "weight": 108
    }
  ],
  "mt-lebanon": [
    {
      "year": 2026,
      "place": "Champion",
      "name": "Koby Collins",
      "weight": 101
    },
    {
      "year": 2026,
      "place": "Runner-Up",
      "name": "Calvin Kocher",
      "weight": 101
    },
    {
      "year": 2026,
      "place": "4",
      "name": "Samson Grove",
      "weight": 115
    },
    {
      "year": 2026,
      "place": "7",
      "name": "Kole Collins",
      "weight": 80
    },
    {
      "year": 2026,
      "place": "7",
      "name": "Michael Kiley",
      "weight": 87
    },
    {
      "year": 2025,
      "place": "Champion",
      "name": "Camilla Hathaway",
      "weight": 138
    },
    {
      "year": 2025,
      "place": "Runner-Up",
      "name": "Koby Collins",
      "weight": 87
    },
    {
      "year": 2025,
      "place": "Runner-Up",
      "name": "Calvin Kocher",
      "weight": 94
    },
    {
      "year": 2025,
      "place": "Runner-Up",
      "name": "Isla Silva",
      "weight": 101
    },
    {
      "year": 2025,
      "place": "Runner-Up",
      "name": "Monty Patriquin",
      "weight": 170
    },
    {
      "year": 2025,
      "place": "3",
      "name": "Ewan Keplar",
      "weight": 108
    },
    {
      "year": 2024,
      "place": "Champion",
      "name": "Isla Silva",
      "weight": 94
    },
    {
      "year": 2024,
      "place": "Runner-Up",
      "name": "Liam Mooney",
      "weight": 155
    },
    {
      "year": 2024,
      "place": "3",
      "name": "Vince Pietragallo",
      "weight": 87
    },
    {
      "year": 2024,
      "place": "4",
      "name": "Carly Jox",
      "weight": 80
    },
    {
      "year": 2024,
      "place": "4",
      "name": "John Kail",
      "weight": 115
    },
    {
      "year": 2024,
      "place": "6",
      "name": "Jackson Bucek",
      "weight": 145
    }
  ],
  "north-allegheny": [
    {
      "year": 2026,
      "place": "Champion",
      "name": "James Sowa",
      "weight": 87
    },
    {
      "year": 2026,
      "place": "Champion",
      "name": "Isaac Anderson",
      "weight": 155
    },
    {
      "year": 2026,
      "place": "3",
      "name": "Gavin Schomburg",
      "weight": 108
    },
    {
      "year": 2026,
      "place": "3",
      "name": "Noel Risacher",
      "weight": 122
    },
    {
      "year": 2026,
      "place": "4",
      "name": "Austin Orlando",
      "weight": 145
    },
    {
      "year": 2026,
      "place": "5",
      "name": "Evan Clark",
      "weight": 115
    },
    {
      "year": 2026,
      "place": "8",
      "name": "Owen Peters",
      "weight": 101
    }
  ],
  "north-hills": [
    {
      "year": 2026,
      "place": "Champion",
      "name": "Michael Thomas",
      "weight": 250
    },
    {
      "year": 2026,
      "place": "Runner-Up",
      "name": "Dekota Towler",
      "weight": 87
    },
    {
      "year": 2026,
      "place": "Runner-Up",
      "name": "Daylen Amman",
      "weight": 94
    },
    {
      "year": 2026,
      "place": "3",
      "name": "Will Hilegas",
      "weight": 130
    },
    {
      "year": 2026,
      "place": "4",
      "name": "Kam Rohaly",
      "weight": 101
    },
    {
      "year": 2026,
      "place": "6",
      "name": "Jackie Hayward",
      "weight": 210
    },
    {
      "year": 2026,
      "place": "7",
      "name": "Jaden Sponseller",
      "weight": 94
    },
    {
      "year": 2025,
      "place": "Runner-Up",
      "name": "Michael Thomas",
      "weight": 210
    },
    {
      "year": 2025,
      "place": "4",
      "name": "Daylen Amman",
      "weight": 87
    },
    {
      "year": 2025,
      "place": "6",
      "name": "Ronald Kunesky",
      "weight": 130
    },
    {
      "year": 2024,
      "place": "Champion",
      "name": "Shaun Murphy",
      "weight": 122
    },
    {
      "year": 2024,
      "place": "Champion",
      "name": "Hunter Nestor",
      "weight": 138
    },
    {
      "year": 2024,
      "place": "Runner-Up",
      "name": "Cam Healy",
      "weight": 170
    },
    {
      "year": 2024,
      "place": "Runner-Up",
      "name": "Cj Harris",
      "weight": 190
    },
    {
      "year": 2024,
      "place": "4",
      "name": "Eddie Spontak",
      "weight": 138
    },
    {
      "year": 2024,
      "place": "4",
      "name": "Henry Nosko",
      "weight": 250
    },
    {
      "year": 2024,
      "place": "5",
      "name": "Asher Morvay",
      "weight": 130
    },
    {
      "year": 2024,
      "place": "6",
      "name": "Jayden Mitchell",
      "weight": 155
    }
  ],
  "penn-hills": [
    {
      "year": 2026,
      "place": "3",
      "name": "Zion Smith",
      "weight": 190
    },
    {
      "year": 2025,
      "place": "5",
      "name": "Jacoury Parks",
      "weight": 155
    }
  ],
  "pine-richland": [
    {
      "year": 2026,
      "place": "Champion",
      "name": "Rockson Ryer",
      "weight": 145
    },
    {
      "year": 2026,
      "place": "4",
      "name": "Chase Kosher",
      "weight": 87
    },
    {
      "year": 2026,
      "place": "5",
      "name": "Gage Ryer",
      "weight": 130
    },
    {
      "year": 2026,
      "place": "5",
      "name": "John Pelusi",
      "weight": 170
    },
    {
      "year": 2026,
      "place": "5",
      "name": "Carter Giammatteo",
      "weight": 250
    },
    {
      "year": 2025,
      "place": "Runner-Up",
      "name": "Matt Jones",
      "weight": 130
    },
    {
      "year": 2025,
      "place": "5",
      "name": "Rokson Ryer",
      "weight": 138
    }
  ],
  "plum": [
    {
      "year": 2026,
      "place": "6",
      "name": "Cade Grazulis",
      "weight": 170
    },
    {
      "year": 2026,
      "place": "6",
      "name": "Antonio Thompson",
      "weight": 190
    },
    {
      "year": 2026,
      "place": "7",
      "name": "Darryn Lang",
      "weight": 250
    },
    {
      "year": 2026,
      "place": "8",
      "name": "Michael Fentross",
      "weight": 122
    },
    {
      "year": 2025,
      "place": "Champion",
      "name": "Paxton Simonson",
      "weight": 170
    },
    {
      "year": 2025,
      "place": "3",
      "name": "Caleb Kodman",
      "weight": 94
    },
    {
      "year": 2025,
      "place": "3",
      "name": "Braden Watters",
      "weight": 138
    },
    {
      "year": 2025,
      "place": "4",
      "name": "Kenneth Smith",
      "weight": 145
    },
    {
      "year": 2025,
      "place": "5",
      "name": "Daniel Parsons",
      "weight": 80
    },
    {
      "year": 2024,
      "place": "3",
      "name": "Brenden Knighton",
      "weight": 250
    },
    {
      "year": 2024,
      "place": "4",
      "name": "Colt Knapp",
      "weight": 87
    },
    {
      "year": 2024,
      "place": "4",
      "name": "Garett Huff",
      "weight": 170
    },
    {
      "year": 2024,
      "place": "5",
      "name": "Daniel Parsons",
      "weight": 80
    },
    {
      "year": 2024,
      "place": "5",
      "name": "Cole Laero",
      "weight": 138
    },
    {
      "year": 2024,
      "place": "5",
      "name": "Maxsim Batman",
      "weight": 190
    },
    {
      "year": 2024,
      "place": "6",
      "name": "Joel Kline",
      "weight": 122
    }
  ],
  "quaker-valley": [
    {
      "year": 2026,
      "place": "6",
      "name": "Zaid Awad",
      "weight": 94
    },
    {
      "year": 2025,
      "place": "4",
      "name": "Jake Neff",
      "weight": 170
    },
    {
      "year": 2025,
      "place": "6",
      "name": "Lukas Cevarr",
      "weight": 190
    },
    {
      "year": 2024,
      "place": "Champion",
      "name": "Brennan Breisinger",
      "weight": 190
    },
    {
      "year": 2024,
      "place": "4",
      "name": "Brendan Fitzgerald",
      "weight": 108
    }
  ],
  "riverview": [
    {
      "year": 2026,
      "place": "Champion",
      "name": "Brayden Walsh",
      "weight": 170
    },
    {
      "year": 2025,
      "place": "Runner-Up",
      "name": "Cody Mizak",
      "weight": 250
    },
    {
      "year": 2024,
      "place": "Champion",
      "name": "Pierce Colvin",
      "weight": 250
    },
    {
      "year": 2024,
      "place": "4",
      "name": "Cody Mizak",
      "weight": 210
    },
    {
      "year": 2024,
      "place": "5",
      "name": "John Moses",
      "weight": 155
    }
  ],
  "shaler-area": [
    {
      "year": 2026,
      "place": "Champion",
      "name": "Arian Jackson",
      "weight": 108
    },
    {
      "year": 2026,
      "place": "5",
      "name": "Briana Stetson",
      "weight": 101
    },
    {
      "year": 2026,
      "place": "6",
      "name": "Patrick Morrow",
      "weight": 80
    },
    {
      "year": 2026,
      "place": "7",
      "name": "Neeson Aleski",
      "weight": 108
    },
    {
      "year": 2026,
      "place": "7",
      "name": "Michael Crawford",
      "weight": 130
    },
    {
      "year": 2026,
      "place": "8",
      "name": "Hunter Dembowski",
      "weight": 145
    },
    {
      "year": 2025,
      "place": "Runner-Up",
      "name": "Makar Kolkov",
      "weight": 190
    },
    {
      "year": 2025,
      "place": "5",
      "name": "Tommy Bursick",
      "weight": 94
    },
    {
      "year": 2025,
      "place": "6",
      "name": "Arian Jackson",
      "weight": 101
    },
    {
      "year": 2025,
      "place": "6",
      "name": "Kayden Kushik",
      "weight": 138
    },
    {
      "year": 2025,
      "place": "6",
      "name": "Enzo Zottola",
      "weight": 170
    },
    {
      "year": 2024,
      "place": "Runner-Up",
      "name": "Sami Tapu",
      "weight": 210
    },
    {
      "year": 2024,
      "place": "3",
      "name": "Ty Yost-Hart",
      "weight": 108
    },
    {
      "year": 2024,
      "place": "3",
      "name": "Cole Tunstall",
      "weight": 115
    },
    {
      "year": 2024,
      "place": "3",
      "name": "Weston Emmons",
      "weight": 130
    },
    {
      "year": 2024,
      "place": "5",
      "name": "Colter Sidick",
      "weight": 115
    },
    {
      "year": 2024,
      "place": "5",
      "name": "Vinny Jordan",
      "weight": 250
    }
  ],
  "south-allegheny": [
    {
      "year": 2025,
      "place": "3",
      "name": "Carter Haughey",
      "weight": 130
    },
    {
      "year": 2025,
      "place": "6",
      "name": "Lucas Shaw",
      "weight": 210
    },
    {
      "year": 2024,
      "place": "5",
      "name": "Kaleb Ball",
      "weight": 210
    }
  ],
  "south-park": [
    {
      "year": 2026,
      "place": "5",
      "name": "James Duncan",
      "weight": 122
    },
    {
      "year": 2026,
      "place": "5",
      "name": "Luca Minnocci",
      "weight": 210
    },
    {
      "year": 2026,
      "place": "6",
      "name": "Joe Ford",
      "weight": 250
    },
    {
      "year": 2026,
      "place": "8",
      "name": "Nolan Cosey",
      "weight": 115
    },
    {
      "year": 2025,
      "place": "Runner-Up",
      "name": "Josh Duncan",
      "weight": 145
    },
    {
      "year": 2025,
      "place": "5",
      "name": "James Duncan",
      "weight": 108
    },
    {
      "year": 2024,
      "place": "Runner-Up",
      "name": "Lucas Guzek",
      "weight": 115
    },
    {
      "year": 2024,
      "place": "5",
      "name": "Jake Guzek",
      "weight": 101
    }
  ],
  "neighborhood-academy": [
    {
      "year": 2025,
      "place": "Champion",
      "name": "Micah Smalls",
      "weight": 80
    },
    {
      "year": 2025,
      "place": "4",
      "name": "Cameran Lewis",
      "weight": 122
    },
    {
      "year": 2024,
      "place": "Runner-Up",
      "name": "Ziyon Smallss",
      "weight": 108
    }
  ],
  "thomas-jefferson": [
    {
      "year": 2026,
      "place": "Champion",
      "name": "James Danko",
      "weight": 94
    },
    {
      "year": 2026,
      "place": "Runner-Up",
      "name": "Shay Fitz",
      "weight": 122
    },
    {
      "year": 2026,
      "place": "Runner-Up",
      "name": "Austin Hinkle",
      "weight": 130
    },
    {
      "year": 2026,
      "place": "3",
      "name": "Ethan Mitrisin",
      "weight": 80
    },
    {
      "year": 2026,
      "place": "3",
      "name": "Weston Cipriani",
      "weight": 87
    },
    {
      "year": 2026,
      "place": "4",
      "name": "Luca Baiano",
      "weight": 94
    },
    {
      "year": 2026,
      "place": "4",
      "name": "Mason Ganley",
      "weight": 122
    },
    {
      "year": 2026,
      "place": "4",
      "name": "Brock Finnerty",
      "weight": 138
    },
    {
      "year": 2025,
      "place": "Champion",
      "name": "James Danko",
      "weight": 87
    },
    {
      "year": 2025,
      "place": "Champion",
      "name": "Alejandro Allemann",
      "weight": 190
    },
    {
      "year": 2025,
      "place": "3",
      "name": "Donny Vogtsberger",
      "weight": 155
    },
    {
      "year": 2025,
      "place": "3",
      "name": "Dylan Beasock",
      "weight": 250
    },
    {
      "year": 2025,
      "place": "4",
      "name": "Austin Hinkle",
      "weight": 115
    },
    {
      "year": 2025,
      "place": "4",
      "name": "Sonal Bhandarim",
      "weight": 130
    },
    {
      "year": 2025,
      "place": "5",
      "name": "Shay Fitz",
      "weight": 101
    },
    {
      "year": 2025,
      "place": "5",
      "name": "Bryce Little",
      "weight": 170
    },
    {
      "year": 2025,
      "place": "5",
      "name": "Aayden Murray",
      "weight": 210
    },
    {
      "year": 2025,
      "place": "5",
      "name": "Santino Ciccanti",
      "weight": 250
    },
    {
      "year": 2025,
      "place": "6",
      "name": "Luca Baiano",
      "weight": 87
    },
    {
      "year": 2025,
      "place": "6",
      "name": "Sydney Laboon",
      "weight": 108
    },
    {
      "year": 2024,
      "place": "Champion",
      "name": "Dom Cadwaller",
      "weight": 108
    },
    {
      "year": 2024,
      "place": "Champion",
      "name": "Kaden Fitz",
      "weight": 115
    },
    {
      "year": 2024,
      "place": "Champion",
      "name": "Jayden Trainer",
      "weight": 145
    },
    {
      "year": 2024,
      "place": "3",
      "name": "Connor Ganley",
      "weight": 80
    },
    {
      "year": 2024,
      "place": "3",
      "name": "Robert Cordova",
      "weight": 122
    },
    {
      "year": 2024,
      "place": "3",
      "name": "Miguel Renda",
      "weight": 210
    },
    {
      "year": 2024,
      "place": "4",
      "name": "Dominic Costa",
      "weight": 101
    },
    {
      "year": 2024,
      "place": "6",
      "name": "Sydney Laboon",
      "weight": 94
    },
    {
      "year": 2024,
      "place": "6",
      "name": "Donny Vogtsberger",
      "weight": 170
    },
    {
      "year": 2024,
      "place": "6",
      "name": "Garret Pollock",
      "weight": 190
    },
    {
      "year": 2024,
      "place": "6",
      "name": "Dylan Beasock",
      "weight": 250
    }
  ],
  "west-allegheny": [
    {
      "year": 2026,
      "place": "Champion",
      "name": "Jaxson Rider",
      "weight": 80
    },
    {
      "year": 2026,
      "place": "Champion",
      "name": "Jack Stonebraker",
      "weight": 122
    },
    {
      "year": 2026,
      "place": "Runner-Up",
      "name": "Marco Defilippis",
      "weight": 80
    },
    {
      "year": 2026,
      "place": "Runner-Up",
      "name": "Ben Thomson",
      "weight": 108
    },
    {
      "year": 2026,
      "place": "3",
      "name": "Gavin Lamb",
      "weight": 94
    },
    {
      "year": 2026,
      "place": "3",
      "name": "Zayden Ahlborn",
      "weight": 138
    },
    {
      "year": 2026,
      "place": "3",
      "name": "Anthony Hawks",
      "weight": 145
    },
    {
      "year": 2026,
      "place": "4",
      "name": "Deklan Campbell",
      "weight": 130
    },
    {
      "year": 2026,
      "place": "7",
      "name": "Josh Markovich",
      "weight": 145
    },
    {
      "year": 2025,
      "place": "Champion",
      "name": "Hayden Seymour",
      "weight": 94
    },
    {
      "year": 2025,
      "place": "Champion",
      "name": "Jack Stonebraker",
      "weight": 101
    },
    {
      "year": 2025,
      "place": "Champion",
      "name": "Anthony Hawks",
      "weight": 115
    },
    {
      "year": 2025,
      "place": "Runner-Up",
      "name": "Ricky Hammel",
      "weight": 122
    },
    {
      "year": 2025,
      "place": "4",
      "name": "Ben Thomson",
      "weight": 94
    },
    {
      "year": 2025,
      "place": "5",
      "name": "Gavin Lamb",
      "weight": 87
    }
  ],
  "west-mifflin": [
    {
      "year": 2026,
      "place": "5",
      "name": "Truth Trent",
      "weight": 155
    },
    {
      "year": 2026,
      "place": "8",
      "name": "Zach Clipp",
      "weight": 155
    },
    {
      "year": 2025,
      "place": "Champion",
      "name": "Shay Krysinski",
      "weight": 122
    },
    {
      "year": 2025,
      "place": "5",
      "name": "Zach Lozada",
      "weight": 115
    },
    {
      "year": 2024,
      "place": "Champion",
      "name": "Mason Keesecker",
      "weight": 80
    },
    {
      "year": 2024,
      "place": "Runner-Up",
      "name": "Shay Krysinski",
      "weight": 101
    },
    {
      "year": 2024,
      "place": "3",
      "name": "Camden Olson",
      "weight": 101
    },
    {
      "year": 2024,
      "place": "4",
      "name": "Lashawn Haley",
      "weight": 122
    },
    {
      "year": 2024,
      "place": "4",
      "name": "Shane Andorio",
      "weight": 145
    },
    {
      "year": 2024,
      "place": "6",
      "name": "Anthony Domino",
      "weight": 130
    }
  ],
  "woodland-hills": [
    {
      "year": 2026,
      "place": "6",
      "name": "Josh Greene",
      "weight": 155
    },
    {
      "year": 2026,
      "place": "7",
      "name": "Nazaireth Mason-Guyton",
      "weight": 210
    },
    {
      "year": 2025,
      "place": "3",
      "name": "Tyron Manns",
      "weight": 210
    },
    {
      "year": 2025,
      "place": "5",
      "name": "Cameron Mcteir",
      "weight": 130
    },
    {
      "year": 2024,
      "place": "3",
      "name": "Chaney Lewis",
      "weight": 155
    }
  ]
};
