/*
 * ACC Jr. High Wrestling — results archive.
 * Source: acc_info.docx (Daniel Emmons, Sep 2026) for 2025 & 2026;
 * legacy accjuniorhigh.com site for 2024 (finals/3rd/5th only, no team
 * standings available for that year).
 *
 * TO ADD A NEW YEAR: push a new entry onto RESULTS below, then rebuild
 * (no other file needs to change — results.html renders from this data).
 */

const RESULTS = [
  {
    year: 2026,
    weights: [
      { wt: 80, placements: [
        "1st Jaxson Rider (West Allegheny) F Marco Defilippis (West Allegheny), 1:27",
        "3rd Ethan Mitrisin (Thomas Jefferson) MD Brayden Hopfer (Baldwin), 15-1",
        "5th Nico Schneider (Montour) F Patrick Morrow (Shaler Area), 0:24",
        "7th Kole Collins (Mt. Lebanon) DEC Weston Boden (Gateway), 7-4 SV",
      ]},
      { wt: 87, placements: [
        "1st James Sowa (North Allegheny) F Dekota Towler (North Hills), 2:22",
        "3rd Weston Cipriani (Thomas Jefferson) DEC Chase Kosher (Pine Richland), 7-0",
        "5th Noah Kerestes (Chartiers Valley) TF Logan Herrington (Baldwin), 17-0 2:22",
        "7th Michael Kiley (Mt. Lebanon) DEC Luca Mccann (Bethel Park), 3-0 SV",
      ]},
      { wt: 94, placements: [
        "1st James Danko (Thomas Jefferson) DEC Daylen Amman (North Hills), 4-0",
        "3rd Gavin Lamb (West Allegheny) DEC Luca Baiano (Thomas Jefferson), 7-0",
        "5th Max Morosetti (Moon) MD Zaid Awad (Quaker Valley), 11-3",
        "7th Jaden Sponseller (North Hills) DEC Mason Brignoni (Chartiers Valley), 1-0",
      ]},
      { wt: 101, placements: [
        "1st Koby Collins (Mt. Lebanon) NC Calvin Kocher (Mt. Lebanon)",
        "3rd Austin Alex (Baldwin) DEC Kam Rohaly (North Hills), 3-0 SV",
        "5th Briana Stetson (Shaler Area) F Ryan Degori (Moon), 1:23",
        "7th Quentin Krul (Avonworth) DEC Owen Peters (North Allegheny), 9-8",
      ]},
      { wt: 108, placements: [
        "1st Arian Jackson (Shaler Area) DEC Ben Thomson (West Allegheny), 8-3",
        "3rd Gavin Schomburg (North Allegheny) F Cavin Mulkerrin (Carlynton), 2:43",
        "5th Levi Hovis (Fox Chapel) TF Adam Stover (Hampton), 19-1 3:00",
        "7th Neeson Aleski (Shaler Area) DEC Evan Durst (McKeesport), 6-3",
      ]},
      { wt: 115, placements: [
        "1st Brody Brown (Chartiers Valley) F Hamed Rahmani (Fox Chapel), 1:21",
        "3rd Connor Deluco (Gateway) F Samson Grove (Mt. Lebanon), 0:34",
        "5th Evan Clark (North Allegheny) F Owen Lugaila (Montour), 0:52",
        "7th Cameron Rihn (Montour) F Nolan Cosey (South Park), 1:42",
      ]},
      { wt: 122, placements: [
        "1st Jack Stonebraker (West Allegheny) F Shay Fitz (Thomas Jefferson), 2:12",
        "3rd Noel Risacher (North Allegheny) F Mason Ganley (Thomas Jefferson), 2:30",
        "5th James Duncan (South Park) DEC Aslamjon Asatullaev (Moon), 4-1",
        "7th Collin Felton (Hampton) DEC Michael Fentross (Plum), 6-3 SV",
      ]},
      { wt: 130, placements: [
        "1st Islam Sadyrbekov (Chartiers Valley) F Austin Hinkle (Thomas Jefferson), 2:53",
        "3rd Will Hilegas (North Hills) DEC Deklan Campbell (West Allegheny), 13-6 SV",
        "5th Gage Ryer (Pine Richland) DEC Carter Alston (Montour), 6-2",
        "7th Michael Crawford (Shaler Area) F Eli Belfield (Highlands), 0:39",
      ]},
      { wt: 138, placements: [
        "1st Michael Trumpie (Elizabeth Forward) F Kellen Mcpeake (Keystone Oaks), 1:50",
        "3rd Zayden Ahlborn (West Allegheny) MD Brock Finnerty (Thomas Jefferson), 12-1",
        "5th Akobir Asatullaev (Moon) DEC Orlando Stanford (McKeesport), 2-0",
        "7th Colton Steinkopf (Gateway) F Rocco Platt (Montour), 1:32",
      ]},
      { wt: 145, placements: [
        "1st Rockson Ryer (Pine Richland) MD Brecken Postler (Hampton), 14-4",
        "3rd Anthony Hawks (West Allegheny) MD Austin Orlando (North Allegheny), 12-0",
        "5th Liam Smiley (Elizabeth Forward) F Jackson Kline (Elizabeth Forward), 1:56",
        "7th Josh Markovich (West Allegheny) F Hunter Dembowski (Shaler Area), 1:39",
      ]},
      { wt: 155, placements: [
        "1st Isaac Anderson (North Allegheny) DEC Drew Brady (Avonworth), 2-0",
        "3rd Marino Monz (Bethel Park) F Ryan Jellison (Elizabeth Forward), 1:22",
        "5th Truth Trent (West Mifflin) F Josh Greene (Woodland Hills), 0:55",
        "7th Kameron Johnson (Fox Chapel) F Zach Clipp (West Mifflin), 0:50",
      ]},
      { wt: 170, placements: [
        "1st Brayden Walsh (Riverview) DEC Chase Gaston-Henderson (Fox Chapel), 6-4",
        "3rd Christian Ibrahim (Chartiers Valley) DEC Nate Olenik (Moon), 5-0",
        "5th John Pelusi (Pine Richland) FOR Cade Grazulis (Plum), 0-0",
        "7th Harper Winghart (Avonworth) DEC Carson Stroyne (Avonworth), 3-1",
      ]},
      { wt: 190, placements: [
        "1st James Tisak (Moon) F Michael Tomaino (Bethel Park), 2:31",
        "3rd Zion Smith (Penn Hills) DEC Marco Modelo (Chartiers Valley), 3-2 SV",
        "5th Deandre Peterson (Carlynton) DEC Antonio Thompson (Plum), 7-6",
        "7th Josiah Jefferson (McKeesport) F Luke Grejda (Hampton), 2:50",
      ]},
      { wt: 210, placements: [
        "1st Jeffery Tisak (Moon) F Jack Kareis (Bethel Park), 1:28",
        "3rd Malik Blake (Gateway) F Ezra Guth (Baldwin), 0:23",
        "5th Luca Minnocci (South Park) DEC Jackie Hayward (North Hills), 5-1 TB2",
        "7th Nazaireth Mason-Guyton (Woodland Hills) F John Ross-Brandan (Highlands), 1:30",
      ]},
      { wt: 250, placements: [
        "1st Michael Thomas (North Hills) F Eli Hunkele (Hampton), 3:24",
        "3rd Noah Lauck (Moon) DEC Vincent Godber (Fox Chapel), 1-0 UTB",
        "5th Carter Giammatteo (Pine Richland) F Joe Ford (South Park), 1:19",
        "7th Darryn Lang (Plum) F Bak Gharwall (Keystone Oaks), 1:47",
      ]},
    ],
    teamStandings: [
      { rank: 1, team: "West Allegheny", points: 269.5 },
      { rank: 2, team: "Thomas Jefferson", points: 257.5 },
      { rank: 3, team: "North Allegheny", points: 218.5 },
      { rank: 4, team: "Moon", points: 212 },
      { rank: 5, team: "North Hills", points: 195 },
      { rank: 6, team: "Mt. Lebanon", points: 170 },
      { rank: 7, team: "Chartiers Valley", points: 165.5 },
      { rank: 8, team: "Elizabeth Forward", points: 154.5 },
      { rank: 9, team: "Gateway", points: 149.5 },
      { rank: 10, team: "Pine Richland", points: 148 },
      { rank: 11, team: "Hampton", points: 146.5 },
      { rank: 12, team: "Bethel Park", points: 135 },
      { rank: 13, team: "Shaler Area", points: 128.5 },
      { rank: 14, team: "Fox Chapel", points: 123 },
      { rank: 15, team: "Baldwin", points: 113.5 },
      { rank: 16, team: "Montour", points: 105 },
      { rank: 17, team: "Plum", points: 100.5 },
      { rank: 18, team: "South Park", points: 92 },
      { rank: 19, team: "Avonworth", points: 91 },
      { rank: 20, team: "Riverview", points: 82.5 },
      { rank: 21, team: "McKeesport", points: 81 },
      { rank: 22, team: "West Mifflin", points: 73 },
      { rank: 23, team: "Keystone Oaks", points: 61.5 },
      { rank: 24, team: "Carlynton", points: 49 },
      { rank: 25, team: "Penn Hills", points: 43.5 },
      { rank: 25, team: "Quaker Valley", points: 43.5 },
      { rank: 27, team: "Woodland Hills", points: 38 },
      { rank: 28, team: "Highlands", points: 35.5 },
      { rank: 29, team: "The Neighborhood Academy", points: 9 },
      { rank: 30, team: "South Allegheny", points: 7 },
    ],
  },
  {
    year: 2025,
    weights: [
      { wt: 80, placements: [
        "1st Micah Smalls (The Neighborhood Academy) F Max Morosetti (Moon), 0:57",
        "3rd Luca Mccann (Bethel Park) DEC Seth Naviglia (Highlands), 3-0",
        "5th Daniel Parsons (Plum) DEC Zeke Ballantine (Montour), 5-0",
      ]},
      { wt: 87, placements: [
        "1st James Danko (Thomas Jefferson) DEC Koby Collins (Mt. Lebanon), 1-0",
        "3rd David Long (Montour) DEC Daylen Amman (North Hills), 7-3",
        "5th Gavin Lamb (West Allegheny) F Luca Baiano (Thomas Jefferson), 5:30",
      ]},
      { wt: 94, placements: [
        "1st Hayden Seymour (West Allegheny) DEF Calvin Kocher (Mt. Lebanon), 3-0 1:24",
        "3rd Caleb Kodman (Plum) DEC Ben Thomson (West Allegheny), 8-7",
        "5th Tommy Bursick (Shaler Area) DEC Adam Stover (Hampton), 11-4",
      ]},
      { wt: 101, placements: [
        "1st Jack Stonebraker (West Allegheny) F Isla Silva (Mt. Lebanon), 2:06",
        "3rd Shamil Islamov (Baldwin) DEC Tristan Esken (Moon), 9-3",
        "5th Shay Fitz (Thomas Jefferson) F Arian Jackson (Shaler Area), 4:43",
      ]},
      { wt: 108, placements: [
        "1st Hamed Rahmani (Fox Chapel) DEC Brody Brown (Chartiers Valley), 11-8",
        "3rd Ewan Keplar (Mt. Lebanon) F Akhmed Yusupov (Baldwin), 2:49",
        "5th James Duncan (South Park) DEC Sydney Laboon (Thomas Jefferson), 7-3",
      ]},
      { wt: 115, placements: [
        "1st Anthony Hawks (West Allegheny) DEC Michael Trumpie (Elizabeth Forward), 9-8",
        "3rd Jay Carroll (Hampton) F Austin Hinkle (Thomas Jefferson), 2:41",
        "5th Zach Lozada (West Mifflin) DEC Brody Kunkle (Bethel Park), 2-0",
      ]},
      { wt: 122, placements: [
        "1st Shay Krysinski (West Mifflin) F Ricky Hammel (West Allegheny), 1:23",
        "3rd Brecken Postler (Hampton) MD Cameran Lewis (The Neighborhood Academy), 10-1",
        "5th Carson Elder (Bethel Park) DEC Jamal Hafiz (McKeesport), 2-0",
      ]},
      { wt: 130, placements: [
        "1st Olympic Serrao (Fox Chapel) TF Matt Jones (Pine Richland), 17-1 2:47",
        "3rd Carter Haughey (South Allegheny) DEC Sonal Bhandarim (Thomas Jefferson), 1-0",
        "5th Cameron Mcteir (Woodland Hills) MD Ronald Kunesky (North Hills), 13-2",
      ]},
      { wt: 138, placements: [
        "1st Camilla Hathaway (Mt. Lebanon) DEC Envy Cook (Gateway), 6-1",
        "3rd Braden Watters (Plum) DEC Guage Robles (Moon), 4-0",
        "5th Rokson Ryer (Pine Richland) F Kayden Kushik (Shaler Area), 1:30",
      ]},
      { wt: 145, placements: [
        "1st Logan Krul (Avonworth) TF Josh Duncan (South Park), 17-1 3:34",
        "3rd Thomas Naviglia (Highlands) DEC Kenneth Smith (Plum), 7-1",
        "5th Max Gallagher (Fox Chapel) DEC Joseph Thompson (Gateway), 2-0",
      ]},
      { wt: 155, placements: [
        "1st Jahari Scott (Gateway) MD Lucas Skerbetz (Bethel Park), 10-2",
        "3rd Donny Vogtsberger (Thomas Jefferson) DEC Archie Collins (Montour), 3-1",
        "5th Jacoury Parks (Penn Hills) F John Daniels (Fox Chapel), 2:45",
      ]},
      { wt: 170, placements: [
        "1st Paxton Simonson (Plum) F Monty Patriquin (Mt. Lebanon), 2:01",
        "3rd Robert Huffmyer (Avonworth) DEC Jake Neff (Quaker Valley), 4-0",
        "5th Bryce Little (Thomas Jefferson) FOR Enzo Zottola (Shaler Area), 0-0",
      ]},
      { wt: 190, placements: [
        "1st Alejandro Allemann (Thomas Jefferson) F Makar Kolkov (Shaler Area), 2:10",
        "3rd Jeffery Tisak (Moon) F Landon Syput (Highlands), 1:51",
        "5th Braylen Brown (Avonworth) DEC Lukas Cevarr (Quaker Valley), 3-0",
      ]},
      { wt: 210, placements: [
        "1st Xavier Harding (Avonworth) F Michael Thomas (North Hills), 1:41",
        "3rd Tyron Manns (Woodland Hills) F Chase Rapp (Fox Chapel), 1:55",
        "5th Aayden Murray (Thomas Jefferson) FOR Lucas Shaw (South Allegheny), 0-0",
      ]},
      { wt: 250, placements: [
        "1st Andrew Gabriel (Gateway) MD Cody Mizak (Riverview), 14-0",
        "3rd Dylan Beasock (Thomas Jefferson) F Ahmed Altam (Chartiers Valley), 2:56",
        "5th Santino Ciccanti (Thomas Jefferson) DEC Noah Lauck (Moon), 3-0",
      ]},
    ],
    teamStandings: [
      { rank: 1, team: "Thomas Jefferson", points: 279.5 },
      { rank: 2, team: "West Allegheny", points: 221.5 },
      { rank: 3, team: "Mt. Lebanon", points: 212.5 },
      { rank: 4, team: "Moon", points: 180.5 },
      { rank: 5, team: "Fox Chapel", points: 164.5 },
      { rank: 6, team: "Avonworth", points: 162 },
      { rank: 7, team: "North Hills", points: 151 },
      { rank: 8, team: "Gateway", points: 148 },
      { rank: 9, team: "Plum", points: 143.5 },
      { rank: 10, team: "Pine Richland", points: 142.5 },
      { rank: 11, team: "Shaler Area", points: 140 },
      { rank: 12, team: "Bethel Park", points: 136 },
      { rank: 12, team: "Hampton", points: 136 },
      { rank: 14, team: "West Mifflin", points: 116.5 },
      { rank: 15, team: "Chartiers Valley", points: 116 },
      { rank: 15, team: "Montour", points: 116 },
      { rank: 17, team: "Highlands", points: 98.5 },
      { rank: 18, team: "Elizabeth Forward", points: 95 },
      { rank: 19, team: "The Neighborhood Academy", points: 84.5 },
      { rank: 20, team: "Baldwin", points: 78 },
      { rank: 21, team: "South Park", points: 77 },
      { rank: 22, team: "Riverview", points: 64 },
      { rank: 23, team: "Quaker Valley", points: 63 },
      { rank: 24, team: "Woodland Hills", points: 46.5 },
      { rank: 25, team: "McKeesport", points: 40.5 },
      { rank: 26, team: "South Allegheny", points: 40 },
      { rank: 27, team: "Penn Hills", points: 33 },
      { rank: 28, team: "Carlynton", points: 11 },
    ],
  },
  {
    year: 2024,
    weights: [
      { wt: 80, placements: [
        "1st Mason Keesecker (West Mifflin) TF Cayden Barry (Hampton), 20-2 2:20",
        "3rd Connor Ganley (Thomas Jefferson) MD Carly Jox (Mt. Lebanon), 12-0",
        "5th Daniel Parsons (Plum) DEC Mattias Moreau (Upper Saint Clair), 8-4",
      ]},
      { wt: 87, placements: [
        "1st Shamil Islamov (Baldwin-Whitehall) DEC Tristan Esken (Moon Area), 4-2",
        "3rd Vince Pietragallo (Mt. Lebanon) F Colt Knapp (Plum), 5-0 0:54",
        "5th Carter Watson (Upper Saint Clair) DEC Everett Kuehn (Gateway), 3-0",
      ]},
      { wt: 94, placements: [
        "1st Isla Silva (Mt. Lebanon) DEC Karsten Kirchner (Moon Area), 9-2",
        "3rd Reese Lugaila (Montour) MD Jay Carroll (Hampton), 11-0",
        "5th Spencer Hills (Upper Saint Clair) DEC Sydney Laboon (Thomas Jefferson), 8-2",
      ]},
      { wt: 101, placements: [
        "1st Olympic Serrao (Fox Chapel) DEC Shay Krysinski (West Mifflin), 4-0",
        "3rd Camden Olson (West Mifflin) DEC Dominic Costa (Thomas Jefferson), 2-0",
        "5th Jake Guzek (South Park) DEC Aiden Guthrie (Baldwin-Whitehall), 2-0",
      ]},
      { wt: 108, placements: [
        "1st Dom Cadwaller (Thomas Jefferson) MD Ziyon Smallss (Neighborhood Academy), 20-7",
        "3rd Ty Yost-Hart (Shaler Area) DEC Brendan Fitzgerald (Quaker Valley), 7-0",
        "5th Teague Toki (Baldwin-Whitehall) DEC Roman Markovich (Moon Area), 5-3",
      ]},
      { wt: 115, placements: [
        "1st Kaden Fitz (Thomas Jefferson) F Lucas Guzek (South Park), 9-0 3:58",
        "3rd Cole Tunstall (Shaler Area) F John Kail (Mt. Lebanon), 4-2 1:52",
        "5th Colter Sidick (Shaler Area) FOR Luke Krushinski (Fox Chapel)",
      ]},
      { wt: 122, placements: [
        "1st Shaun Murphy (North Hills) F Thomas Naviglia (Highlands), 11-1 2:13",
        "3rd Robert Cordova (Thomas Jefferson) F Lashawn Haley (West Mifflin), 3-0 1:46",
        "5th Logan Krul (Avonworth) F Joel Kline (Plum), 2-0 0:45",
      ]},
      { wt: 130, placements: [
        "1st Bryce Tavarez (Highlands) F Lucas Skerbertz (Bethel Park), 5-0 1:09",
        "3rd Weston Emmons (Shaler Area) DEC Jordan Lapen (Baldwin-Whitehall), 6-3",
        "5th Asher Morvay (North Hills) F Anthony Domino (West Mifflin), 4-0 2:37",
      ]},
      { wt: 138, placements: [
        "1st Hunter Nestor (North Hills) F Archie Collins (Montour), 4-2 2:05",
        "3rd Maddox Steele (Gateway) DEC Eddie Spontak (North Hills), 2-1",
        "5th Cole Laero (Plum) FOR Dominic Rothmeyer (Fox Chapel)",
      ]},
      { wt: 145, placements: [
        "1st Jayden Trainer (Thomas Jefferson) MD Liam Hovanic (Montour), 11-2",
        "3rd Logan Shirk (Fox Chapel) DEC Shane Andorio (West Mifflin), 4-1",
        "5th Luca Coury (Upper Saint Clair) DEC Jackson Bucek (Mt. Lebanon), 5-0",
      ]},
      { wt: 155, placements: [
        "1st Gavin McDowell (Avonworth) F Liam Mooney (Mt. Lebanon), 4-1 2:55",
        "3rd Chaney Lewis (Woodland Hills) MD Max Gould (Moon Area), 15-4",
        "5th John Moses (Riverview) DEC Jayden Mitchell (North Hills), 9-3",
      ]},
      { wt: 170, placements: [
        "1st Musabek Sadyrbekov (Chartiers Valley) DEC Cam Healy (North Hills), 4-0",
        "3rd Dominic Cisnero Torres (Carlynton) F Garett Huff (Plum), 2-0 1:38",
        "5th Achilles Anger-Youngblood (Highlands) F Donny Vogtsberger (Thomas Jefferson), 2-0 1:00",
      ]},
      { wt: 190, placements: [
        "1st Brennan Breisinger (Quaker Valley) DEC Cj Harris (North Hills), 7-0",
        "3rd Logan Thies (Highlands) F Matthew McGrail (Bethel Park), 4-0 1:28",
        "5th Maxsim Batman (Plum) DEC Garret Pollock (Thomas Jefferson), 6-0",
      ]},
      { wt: 210, placements: [
        "1st Ricky Herman (Montour) F Sami Tapu (Shaler Area), 3-1 3:12",
        "3rd Miguel Renda (Thomas Jefferson) DEC Cody Mizak (Riverview), 5-0",
        "5th Kaleb Ball (South Allegheny) DEC Jaelynn Linnen (McKeesport), 5-2",
      ]},
      { wt: 250, placements: [
        "1st Pierce Colvin (Riverview) DEC Andrew Gabriel (Gateway), 3-2",
        "3rd Brenden Knighton (Plum) DEC Henry Nosko (North Hills), 6-2",
        "5th Vinny Jordan (Shaler Area) DEC Dylan Beasock (Thomas Jefferson), 4-3",
      ]},
    ],
    teamStandings: null,
  },
];

function renderResults() {
  const tabsEl = document.getElementById("year-tabs");
  const panelEl = document.getElementById("year-panel");
  if (!tabsEl || !panelEl) return;

  tabsEl.innerHTML = RESULTS.map((r, i) => `
    <button class="year-tab${i === 0 ? " active" : ""}" data-year="${r.year}">${r.year}</button>
  `).join("");

  function renderYear(year) {
    const data = RESULTS.find(r => r.year === year);
    if (!data) return;

    const weightsHtml = data.weights.map(w => `
      <div class="weight-card">
        <div class="weight-num">${w.wt}</div>
        <ul class="weight-placements">
          ${w.placements.map(p => `<li>${p}</li>`).join("")}
        </ul>
      </div>
    `).join("");

    const standingsHtml = data.teamStandings ? `
      <h3 class="results-subhead">Team Standings</h3>
      <table class="champions-table">
        <thead><tr><th>Place</th><th>Team</th><th>Points</th></tr></thead>
        <tbody>
          ${data.teamStandings.map(t => `<tr><td>${t.rank}</td><td>${t.team}</td><td>${t.points}</td></tr>`).join("")}
        </tbody>
      </table>
    ` : `
      <p class="results-archive-note">Team standings not available for ${year}.</p>
    `;

    panelEl.innerHTML = `
      <h3 class="results-subhead">Individual Placements</h3>
      <div class="weights-grid">${weightsHtml}</div>
      ${standingsHtml}
    `;
  }

  tabsEl.addEventListener("click", e => {
    const btn = e.target.closest(".year-tab");
    if (!btn) return;
    tabsEl.querySelectorAll(".year-tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderYear(Number(btn.dataset.year));
  });

  renderYear(RESULTS[0].year);
}

document.addEventListener("DOMContentLoaded", renderResults);
