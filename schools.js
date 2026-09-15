/*
 * ACC Jr. High Wrestling — participating schools list.
 *
 * HOW TO ADD/UPDATE A SCHOOL LOGO:
 * 1. Save the school's logo as a square PNG (transparent background ideal).
 * 2. Drop it in assets/logos/ named exactly "<slug>.png" (slug values below).
 * 3. That's it — no HTML edits needed. The page checks for a real logo file
 *    and falls back to a generic initials badge automatically if it's missing.
 *
 * TO ADD A NEW SCHOOL: add a { name: "...", slug: "..." } entry to SCHOOLS below.
 * slug = lowercase name, spaces/periods -> hyphens (see existing entries for the pattern).
 */

const SCHOOLS = [
  { name: "Avonworth", slug: "avonworth" },
  { name: "Baldwin-Whitehall", slug: "baldwin-whitehall" },
  { name: "Bethel Park", slug: "bethel-park" },
  { name: "Carlynton", slug: "carlynton" },
  { name: "Chartiers Valley", slug: "chartiers-valley" },
  { name: "Fox Chapel", slug: "fox-chapel" },
  { name: "Gateway", slug: "gateway" },
  { name: "Hampton", slug: "hampton" },
  { name: "Highlands", slug: "highlands" },
  { name: "McKeesport", slug: "mckeesport" },
  { name: "Montour", slug: "montour" },
  { name: "Moon Area", slug: "moon-area" },
  { name: "Mt. Lebanon", slug: "mt-lebanon" },
  { name: "The Neighborhood Academy", slug: "neighborhood-academy" },
  { name: "North Hills", slug: "north-hills" },
  { name: "Penn Hills", slug: "penn-hills" },
  { name: "Plum", slug: "plum" },
  { name: "Quaker Valley", slug: "quaker-valley" },
  { name: "Riverview", slug: "riverview" },
  { name: "Shaler Area", slug: "shaler-area" },
  { name: "South Allegheny", slug: "south-allegheny" },
  { name: "South Park", slug: "south-park" },
  { name: "Thomas Jefferson", slug: "thomas-jefferson" },
  { name: "Upper Saint Clair", slug: "upper-saint-clair" },
  { name: "West Mifflin", slug: "west-mifflin" },
  { name: "Woodland Hills", slug: "woodland-hills" },
];

function initials(name) {
  return name
    .replace(/[^A-Za-z0-9 .]/g, "")
    .split(" ")
    .filter(Boolean)
    .map(w => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function renderSchools() {
  const grid = document.getElementById("teams-grid");
  const empty = document.getElementById("teams-empty");
  if (!grid) return;

  if (!SCHOOLS.length) {
    empty.style.display = "block";
    return;
  }

  grid.innerHTML = SCHOOLS.map(school => `
    <div class="team-card">
      <div class="team-logo">
        <img src="assets/logos/${school.slug}.png" alt="${school.name} logo"
             onerror="this.parentElement.innerHTML='${initials(school.name)}'; this.remove();">
      </div>
      <div class="team-name">${school.name}</div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderSchools);
