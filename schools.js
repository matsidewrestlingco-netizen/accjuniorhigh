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
 * slug = lowercase name, spaces -> hyphens (see existing entries for the pattern).
 *
 * Source: confirmed 2027 team list from Daniel Emmons (Sep 2026).
 *
 * CLICK-TO-EXPAND HISTORY: clicking a school card opens a modal showing
 * that school's full placement history, sourced from SCHOOL_HISTORY
 * (assets/school-history-data.js, loaded before this file in schools.html).
 * A school with no history entries just shows a "no history yet" message.
 */

const SCHOOLS = [
  { name: "Avonworth", slug: "avonworth" },
  { name: "Baldwin Whitehall", slug: "baldwin-whitehall" },
  { name: "Bethel Park", slug: "bethel-park" },
  { name: "Carlynton", slug: "carlynton" },
  { name: "Chartiers Valley", slug: "chartiers-valley" },
  { name: "Elizabeth Forward", slug: "elizabeth-forward" },
  { name: "Fox Chapel", slug: "fox-chapel" },
  { name: "Gateway", slug: "gateway" },
  { name: "Hampton", slug: "hampton" },
  { name: "Highlands", slug: "highlands" },
  { name: "Keystone Oaks", slug: "keystone-oaks" },
  { name: "McKeesport", slug: "mckeesport" },
  { name: "Montour", slug: "montour" },
  { name: "Moon", slug: "moon" },
  { name: "Mt Lebanon", slug: "mt-lebanon" },
  { name: "Neighborhood Academy", slug: "neighborhood-academy" },
  { name: "North Allegheny", slug: "north-allegheny" },
  { name: "North Hills", slug: "north-hills" },
  { name: "Penn Hills", slug: "penn-hills" },
  { name: "Pine Richland", slug: "pine-richland" },
  { name: "Plum", slug: "plum" },
  { name: "Quaker Valley", slug: "quaker-valley" },
  { name: "Riverview", slug: "riverview" },
  { name: "Shaler Area", slug: "shaler-area" },
  { name: "South Allegheny", slug: "south-allegheny" },
  { name: "South Park", slug: "south-park" },
  { name: "Thomas Jefferson", slug: "thomas-jefferson" },
  { name: "West Allegheny", slug: "west-allegheny" },
  { name: "West Mifflin", slug: "west-mifflin" },
  { name: "Woodland Hills", slug: "woodland-hills" },
];

const PLACE_ORDER = { "Champion": 0, "Runner-Up": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7 };

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

function placeLabel(place) {
  if (place === "Champion") return "1st — Champion";
  if (place === "Runner-Up") return "2nd — Runner-Up";
  const n = Number(place);
  const suffix = { 3: "rd", 4: "th", 5: "th", 6: "th", 7: "th", 8: "th" }[n] || "th";
  return `${n}${suffix}`;
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
    <button type="button" class="team-card" data-slug="${school.slug}" data-name="${school.name}">
      <div class="team-logo">
        <img src="assets/logos/${school.slug}.png" alt="${school.name} logo"
             onerror="this.parentElement.innerHTML='${initials(school.name)}'; this.remove();">
      </div>
      <div class="team-name">${school.name}</div>
    </button>
  `).join("");

  grid.addEventListener("click", e => {
    const card = e.target.closest(".team-card");
    if (!card) return;
    openHistoryModal(card.dataset.slug, card.dataset.name);
  });
}

function openHistoryModal(slug, name) {
  const modal = document.getElementById("history-modal");
  const titleEl = document.getElementById("history-modal-title");
  const bodyEl = document.getElementById("history-modal-body");
  if (!modal || !titleEl || !bodyEl) return;

  titleEl.textContent = name;

  const history = (typeof SCHOOL_HISTORY !== "undefined" && SCHOOL_HISTORY[slug]) || [];

  if (!history.length) {
    bodyEl.innerHTML = `<p class="history-empty">No placement history yet for ${name}.</p>`;
  } else {
    const byYear = {};
    for (const entry of history) {
      (byYear[entry.year] = byYear[entry.year] || []).push(entry);
    }
    const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

    bodyEl.innerHTML = years.map(year => {
      const entries = byYear[year].slice().sort((a, b) =>
        (PLACE_ORDER[a.place] ?? 99) - (PLACE_ORDER[b.place] ?? 99)
      );
      return `
        <div class="history-year-block">
          <h3 class="history-year-heading">${year}</h3>
          <ul class="history-list">
            ${entries.map(e => `
              <li class="history-row">
                <span class="history-place">${placeLabel(e.place)}</span>
                <span class="history-athlete">${e.name}</span>
                <span class="history-weight">${e.weight} lbs</span>
              </li>
            `).join("")}
          </ul>
        </div>
      `;
    }).join("");
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeHistoryModal() {
  const modal = document.getElementById("history-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function initHistoryModal() {
  const modal = document.getElementById("history-modal");
  if (!modal) return;
  modal.addEventListener("click", e => {
    if (e.target === modal || e.target.closest(".history-modal-close")) {
      closeHistoryModal();
    }
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeHistoryModal();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSchools();
  initHistoryModal();
});
