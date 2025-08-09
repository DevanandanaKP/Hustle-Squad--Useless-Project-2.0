window.onload = () => showLanding();

function showLanding() {
  document.getElementById('app').innerHTML = `
    <div>
      <h1>Things With Feelings</h1>
      <button onclick="showApologyDivision()">💌 Apology Division</button>
      <button onclick="showCompatibilityBureau()">🧦 Compatibility Bureau</button>
      <!-- Remove this line: 
      <button onclick="showMoodForecaster()">🌤️ Object Mood Forecaster</button> 
      -->
      <button onclick="showSecretWishlist()">🎁 Object's Secret Wishlist</button>
      <button onclick="showReverseApology()">🔄 Reverse Apology</button>

      <div id="moodThought" style="margin-top: 2rem; font-style: italic; color: #555; text-align:center; max-width: 350px; margin-left:auto; margin-right:auto;"></div>
    </div>
  `;

  showMoodThought();
}


function showMoodThought() {
  const objects = [
    "stone",
    "grass",
    "lamp",
    "chair",
    "book",
    "clock",
    "mug",
    "shoe",
    "plant",
    "window",
    "pen",
    "blanket"
  ];

  const obj = objects[Math.floor(Math.random() * objects.length)];

  const moods = [
    "wistful",
    "cheerful",
    "moody",
    "content",
    "anxious",
    "dreamy",
    "restless",
    "curious",
    "melancholy",
    "playful"
  ];

  const reasons = [
    "It remembers the last gentle touch you gave.",
    "The lingering scent of your presence comforts it.",
    "It longs for your attention and care.",
    "Past neglect shadows its mood today.",
    "It is energized by your recent apology.",
    "The quiet hum of your home soothes it.",
    "It feels restless, craving a new adventure.",
    "It wonders about the stories you haven't told it.",
    "It recalls joyful moments you shared together.",
    "It playfully waits for your next interaction."
  ];

  const index = Math.floor(Math.random() * moods.length);

  const mood = moods[index];
  const reason = reasons[index];

  const moodThought = `<strong>${capitalize(obj)} feels ${mood} today.</strong><br><em>${reason}</em>`;

  document.getElementById('moodThought').innerHTML = moodThought;
}


// --------- Apology Division ---------
function showApologyDivision() {
  document.getElementById('app').innerHTML = `
    <div>
      <h2>Apology Division</h2>
      <input id="objName" placeholder="Object Name" /><br />
      <input id="incident" placeholder="What did you do?" /><br />
      <button onclick="generateApology()">Generate Apology</button>
      <div id="output"></div>
      <button class="back-btn" onclick="showLanding()">⬅️ Back</button>
    </div>
  `;
}

function generateApology() {
  const obj = (document.getElementById('objName').value || "my dear companion").trim();
  const incidentRaw = (document.getElementById('incident').value || "my careless treatment of you").trim();

  const openings = [
    `It's late, and I find myself thinking deeply about you.`,
    `Tonight, my heart feels heavy as I write this to you.`,
    `I've been reflecting on us and the moments we've shared.`,
  ];

  const middles = [
    `When I recall ${incidentRaw}, I realize how thoughtless I was.`,
    `That moment of ${incidentRaw} lingers painfully in my mind.`,
    `I see clearly now how my actions hurt the quiet bond between us, especially ${incidentRaw}.`,
  ];

  const closings = [
    `I promise to be more gentle and attentive going forward.`,
    `Please forgive my carelessness; you deserve kindness.`,
    `May this letter be the first step toward making things right.`,
  ];

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  const apology =
    `Dear ${capitalize(obj)},\n\n` +
    `${pick(openings)}\n\n` +
    `${pick(middles)}\n\n` +
    `${pick(closings)}\n\n` +
    `With sincere apologies,\nYour Human`;

  document.getElementById('output').innerHTML = apology.replace(/\n+/g, '<br>');

  saveInteraction(obj, "apology");
  playObjectSound(obj);

 // After existing code, replace alert with:
setTimeout(() => {
  showToast("Seriously? Writing an apology letter to a lifeless thing? Time to rethink your priorities. 😏");
}, 300);
}


// --------- Compatibility Bureau ---------
function showCompatibilityBureau() {
  document.getElementById('app').innerHTML = `
    <div>
      <h2>Compatibility Bureau</h2>
      <input id="obj1" placeholder="First Object" /><br />
      <input id="obj2" placeholder="Second Object" /><br />
      <button onclick="analyzeCompatibility()">Analyze</button>
      <div id="output"></div>
      <button class="back-btn" onclick="showLanding()">⬅️ Back</button>
    </div>
  `;
}

function analyzeCompatibility() {
  const o1 = (document.getElementById('obj1').value || "object 1").trim().toLowerCase();
  const o2 = (document.getElementById('obj2').value || "object 2").trim().toLowerCase();

  const categories = {
    writing: ["pencil", "pen", "marker", "highlighter"],
    cleaning: ["eraser", "soap", "brush", "vacuum"],
    kitchen: ["spoon", "fork", "knife", "plate", "pan"],
    electronics: ["phone", "charger", "headphones", "laptop"],
    clothing: ["shirt", "pants", "shoes", "hat", "sock"],
    tools: ["hammer", "screwdriver", "wrench", "drill"],
    paper: ["notebook", "paper", "book", "journal"],
  };

  function findCategory(obj) {
    for (const [cat, items] of Object.entries(categories)) {
      if (items.includes(obj)) return cat;
    }
    return "miscellaneous";
  }

  const cat1 = findCategory(o1);
  const cat2 = findCategory(o2);

  // Base compatibility score between 60-100, adjusted by category logic
  let baseScore = Math.floor(Math.random() * 41) + 60;
  if (cat1 === cat2) baseScore += 10;
  else if (
    (cat1 === "writing" && cat2 === "cleaning") ||
    (cat1 === "cleaning" && cat2 === "writing")
  ) baseScore += 5;
  else if (
    (cat1 === "kitchen" && cat2 === "tools") ||
    (cat1 === "tools" && cat2 === "kitchen")
  ) baseScore += 5;
  else baseScore -= 10;
  baseScore = Math.min(Math.max(baseScore, 0), 100);

  // Funny compatibility factors
  const factors = [
    "Shared Dust Bunnies",
    "Mutual Battery Drain",
    "Joint Sock Adventures",
    "Tangled Cord Syndrome",
    "Silent Judgment"
  ];

  const factorReasons = {
    "Shared Dust Bunnies": `${capitalize(o1)} and ${capitalize(o2)} love to chill where dust bunnies gather.`,
    "Mutual Battery Drain": `Both tend to lose power right when you need them most — true solidarity!`,
    "Joint Sock Adventures": `Like socks, they mysteriously disappear together in your house’s Bermuda Triangle.`,
    "Tangled Cord Syndrome": `They always get hopelessly tangled up, a knotty relationship indeed.`,
    "Silent Judgment": `Quietly judging your life choices without uttering a word.`
  };

  // Randomly distribute percentages to factors (sum to 100)
  function randomFactorDistribution(factors) {
    const vals = [];
    let sum = 0;
    for (let i = 0; i < factors.length; i++) {
      let val = Math.random();
      vals.push(val);
      sum += val;
    }
    return vals.map(v => Math.round((v / sum) * 100));
  }

  let values = randomFactorDistribution(factors);
  let diff = 100 - values.reduce((a,b) => a+b, 0);
  values[0] += diff; // fix rounding

  const colors = ["#2980b9", "#27ae60", "#f39c12", "#8e44ad", "#7f8c8d"];

  function createPieChart(factors, values, colors) {
    const radius = 70;
    const cx = 80;
    const cy = 80;

    let cumulativePercent = 0;

    function getCoordinatesForPercent(percent) {
      const x = cx + radius * Math.cos(2 * Math.PI * percent - Math.PI / 2);
      const y = cy + radius * Math.sin(2 * Math.PI * percent - Math.PI / 2);
      return [x, y];
    }

    const slices = factors.map((factor, i) => {
      const percent = values[i] / 100;
      const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
      cumulativePercent += percent;
      const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

      const largeArcFlag = percent > 0.5 ? 1 : 0;

      const pathData = [
        `M ${cx} ${cy}`,
        `L ${startX} ${startY}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        'Z'
      ].join(' ');

      return `<path d="${pathData}" fill="${colors[i]}" title="${factor}: ${values[i]}%"></path>`;
    });

    return `
      <svg width="160" height="160" viewBox="0 0 160 160" role="img" aria-label="Compatibility factors pie chart">
        ${slices.join('')}
        <circle cx="${cx}" cy="${cy}" r="${radius / 2}" fill="#fff" />
        <text x="${cx}" y="${cy + 10}" text-anchor="middle" font-size="18" fill="#34495e" font-weight="700">Reasons</text>
      </svg>
    `;
  }

  // Funny summary based on score
  let funnySummary = "";
  if (baseScore > 85) {
    funnySummary = `This duo is like peanut butter and jelly — inseparable and deliciously compatible! 🥜🍇`;
  } else if (baseScore > 70) {
    funnySummary = `Like socks in a drawer, they mostly get along, but occasionally one goes missing. 🧦`;
  } else if (baseScore > 50) {
    funnySummary = `They have their ups and downs, like a seesaw on a windy day. 🎢`;
  } else {
    funnySummary = `Uh-oh, this pair might cause more chaos than comfort — handle with care! ⚠️`;
  }

  document.getElementById('output').innerHTML = `
    <p style="font-size:1.3rem; font-weight:700; text-align:center;">
      ${capitalize(o1)} & ${capitalize(o2)} Compatibility: ${baseScore}%
    </p>
    <div style="max-width:180px; margin: 0.4rem auto;">
      ${createPieChart(factors, values, colors)}
    </div>
    <p style="font-style: italic; color: #555; text-align:center; margin-top:1rem;">
      ${funnySummary}
    </p>
  `;

  saveInteraction(o1, "compatibility");
  saveInteraction(o2, "compatibility");

  playObjectSound(o1);
  setTimeout(() => playObjectSound(o2), 900);
}

// --------- Object Mood Forecaster ---------
function showMoodForecaster() {
  document.getElementById('app').innerHTML = `
    <div>
      <h2>Object Mood Forecaster</h2>
      <input id="moodObjName" placeholder="Object Name" /><br />
      <button onclick="generateMoodForecast()">Forecast Mood</button>
      <div id="output"></div>
      <button class="back-btn" onclick="showLanding()">⬅️ Back</button>
    </div>
  `;
}

function generateMoodForecast() {
  const obj = (document.getElementById('moodObjName').value || "Your object").trim();

  const moods = [
    "wistful",
    "cheerful",
    "moody",
    "content",
    "anxious",
    "dreamy",
    "restless",
    "curious",
    "melancholy",
    "playful"
  ];

  const reasons = [
    "It remembers the last gentle touch you gave.",
    "The lingering scent of your presence comforts it.",
    "It longs for your attention and care.",
    "Past neglect shadows its mood today.",
    "It is energized by your recent apology.",
    "The quiet hum of your home soothes it.",
    "It feels restless, craving a new adventure.",
    "It wonders about the stories you haven't told it.",
    "It recalls joyful moments you shared together.",
    "It playfully waits for your next interaction."
  ];

  const index = Math.floor(Math.random() * moods.length);

  const mood = moods[index];
  const reason = reasons[index];

  document.getElementById('output').innerHTML =
    `<strong>${capitalize(obj)} feels ${mood} tomorrow.</strong><br><em>${reason}</em>`;
}

// --------- Object's Secret Wishlist ---------
function showSecretWishlist() {
  document.getElementById('app').innerHTML = `
    <div>
      <h2>Object's Secret Wishlist</h2>
      <input id="wishlistObjName" placeholder="Object Name" /><br />
      <button onclick="generateSecretWishlist()">Reveal Wishlist</button>
      <div id="output"></div>
      <button class="back-btn" onclick="showLanding()">⬅️ Back</button>
    </div>
  `;
}

function generateSecretWishlist() {
  const obj = (document.getElementById('wishlistObjName').value || "Your object").trim();

  const wishes = [
    "to be cleaned gently every now and then.",
    "to be carried with care and respect.",
    "to have its stories listened to quietly.",
    "to be put away carefully, not tossed aside.",
    "to share more moments of stillness with you.",
    "to be warmed by your presence on cold days.",
    "to be freed from the clutter it endures.",
    "to bask in sunlight more often.",
    "to feel the gentle brush of your hands.",
    "to never be forgotten under the bed."
  ];

  const wish = wishes[Math.floor(Math.random() * wishes.length)];

  document.getElementById('output').innerHTML =
    `<strong>${capitalize(obj)} secretly wishes ${wish}</strong>`;
}

// --------- Reverse Apology ---------
function showReverseApology() {
  document.getElementById('app').innerHTML = `
    <div>
      <h2>Reverse Apology</h2>
      <input id="reverseObjName" placeholder="Object Name" /><br />
      <button onclick="generateReverseApology()">Generate Apology from Object</button>
      <div id="output"></div>
      <button class="back-btn" onclick="showLanding()">⬅️ Back</button>
    </div>
  `;
}

function generateReverseApology() {
  const obj = (document.getElementById('reverseObjName').value || "Your object").trim();

  const apologies = [
    "Sorry for all the times I slipped and startled you.",
    "Forgive me for the scratches and dents I carry.",
    "I never meant to hide your things or cause frustration.",
    "Please forgive my quiet presence when you needed more.",
    "I'm sorry for the times I broke and couldn't be fixed.",
    "I hope my wear and tear remind you of our shared stories.",
    "Apologies for being misplaced and out of sight.",
    "I didn't mean to drain your patience or time.",
    "Please forgive the moments I didn't work as expected.",
    "Thank you for all the care you gave, even when I failed."
  ];

  const apology = apologies[Math.floor(Math.random() * apologies.length)];

  document.getElementById('output').innerHTML =
    `<strong>${capitalize(obj)} says:</strong><br><em>${apology}</em>`;
}

// --------- Helper functions ---------
function showToast(message, duration = 3000) {
  let toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  // Show toast
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);

  // Hide & remove toast after duration
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 400);
  }, duration);
}


function saveInteraction(objectName, type) {
  let memory = JSON.parse(localStorage.getItem('objectMemory') || '{}');
  memory[objectName] = {
    lastInteraction: type,
    mood: randomMood(),
    lastTimestamp: Date.now()
  };
  localStorage.setItem('objectMemory', JSON.stringify(memory));
}

function getObjectStatus(objectName) {
  let memory = JSON.parse(localStorage.getItem('objectMemory') || '{}');
  if (!memory[objectName]) return "";
  const moods = {
    happy: "feeling appreciated",
    sad: "feeling neglected",
    annoyed: "a bit annoyed",
    excited: "excited for the next interaction",
    shy: "feeling shy"
  };
  const moodText = moods[memory[objectName].mood] || "in a mysterious mood";
  return `${capitalize(objectName)} is ${moodText} after your last ${memory[objectName].lastInteraction}.`;
}

function randomMood() {
  const moods = ["happy", "sad", "annoyed", "excited", "shy"];
  return moods[Math.floor(Math.random() * moods.length)];
}

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function playObjectSound(objectName) {
  const objectSounds = {
    pencil: 'https://freesound.org/data/previews/33/33749_512123-lq.mp3',
    eraser: 'https://freesound.org/data/previews/20/20217_512123-lq.mp3',
    phone: 'https://freesound.org/data/previews/146/146725_2615114-lq.mp3',
    default: 'https://freesound.org/data/previews/82/82921_1022654-lq.mp3',
  };
  objectName = objectName.toLowerCase();
  let soundUrl = objectSounds[objectName] || objectSounds['default'];
  const audio = new Audio(soundUrl);
  audio.play().catch(() => {});
}

function generateArt(obj1, obj2) {
  function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
    return "#" + "00000".substring(0, 6 - c.length) + c;
  }

  const color1 = stringToColor(obj1);
  const color2 = stringToColor(obj2);

  return `
    <svg width="100%" height="120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="50" fill="${color1}" fill-opacity="0.7" />
      <circle cx="140" cy="60" r="50" fill="${color2}" fill-opacity="0.7" />
      <circle cx="100" cy="60" r="40" fill="url(#blend)" fill-opacity="0.4" />
      <defs>
        <radialGradient id="blend" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${color1}" stop-opacity="0.5" />
          <stop offset="100%" stop-color="${color2}" stop-opacity="0.5" />
        </radialGradient>
      </defs>
    </svg>
  `;
}
