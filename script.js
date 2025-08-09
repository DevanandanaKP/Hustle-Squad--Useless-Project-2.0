window.onload = () => showLanding();

function showLanding() {
  document.getElementById('app').innerHTML = `
    <div>
      <h1>Things With Feelings</h1>
<div class="tagline">Because even your socks have secrets 🧦🤫</div>
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
  "It's late, and I find myself thinking deeply about you.",
  "Tonight, my heart feels heavy as I write this to you.",
  "I've been reflecting on us and the moments we've shared.",
  "The quiet of the night makes your absence louder.",
  "Today left me missing you more than I expected.",
  "I can’t shake the memories that keep replaying in my mind.",
  "There’s something I’ve been meaning to tell you for a while now.",
  "The silence between us has been weighing on me.",
  "I keep wondering if you’re thinking about me too.",
  "Every corner of this place reminds me of you.",
  "I’m writing this with a heart full of both hope and ache.",
  "I wish you were here to see the world the way I see it tonight.",
  "My mind keeps drifting back to your smile.",
  "I’ve been replaying our last conversation in my head.",
  "The stars feel closer than you do right now.",
  "I’ve been holding onto words I should have said sooner.",
  "Even the smallest things make me think of you.",
  "The air feels different without you here.",
  "I can’t help but wonder how you’re doing tonight.",
  "If I could, I’d be there beside you right now.",
  "The day may have ended, but my thoughts of you haven’t.",
  "Sometimes, I write to you just to feel closer."
];

  const middles = [
  `When I recall ${incidentRaw}, I realize how thoughtless I was.`,
  `That moment of ${incidentRaw} lingers painfully in my mind.`,
  `I see clearly now how my actions hurt the quiet bond between us, especially ${incidentRaw}.`,
  `Looking back on ${incidentRaw}, I wish I had acted differently.`,
  `The memory of ${incidentRaw} still makes my heart sink.`,
  `I never meant for ${incidentRaw} to leave such a mark on us.`,
  `Even now, ${incidentRaw} weighs heavily on my conscience.`,
  `Every time I think about ${incidentRaw}, I feel a deep regret.`,
  `I understand now how ${incidentRaw} must have felt from your side.`,
  `If I could rewrite ${incidentRaw}, I would in a heartbeat.`,
  `I didn’t realize how much ${incidentRaw} would affect you.`,
  `I see now that ${incidentRaw} was more hurtful than I admitted.`,
  `I’ve replayed ${incidentRaw} over and over, wishing I could change it.`,
  `The shadow of ${incidentRaw} has stayed with me ever since.`,
  `I regret letting ${incidentRaw} become part of our story.`,
  `I wish I could undo the way ${incidentRaw} unfolded.`,
  `My heart aches every time I remember ${incidentRaw}.`,
  `It’s clear to me now that ${incidentRaw} was a turning point.`,
  `I never wanted ${incidentRaw} to cause distance between us.`,
  `I carry the lesson from ${incidentRaw} with me every day.`,
  `If I had understood the weight of ${incidentRaw}, I would have been gentler.`
];

  const closings = [
  "I promise to be more gentle and attentive going forward.",
  "Please forgive my carelessness; you deserve kindness.",
  "May this letter be the first step toward making things right.",
  "I hope we can find comfort in each other again.",
  "I’ll cherish our moments more carefully from now on.",
  "You mean more to me than my mistakes ever could.",
  "I’ll do my best to never let this happen again.",
  "Thank you for still being here despite it all.",
  "I promise to listen more and assume less.",
  "You deserve better, and I’ll try to be that for you.",
  "Let’s write a better chapter from here on.",
  "I will hold onto the lessons this has taught me.",
  "I hope my actions will show you my sincerity.",
  "You have always been worth the effort, and you still are.",
  "I’ll carry this promise with me in every moment we share.",
  "I’m grateful for the chance to make amends.",
  "You are valued, seen, and deeply appreciated.",
  "I’ll meet you with more patience and care from now on.",
  "No matter the past, I believe in our future.",
  "May our connection grow stronger from this point forward.",
  "I will honor your trust with my actions from here on."
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
  writing: [
    "pencil",
    "pen",
    "marker",
    "highlighter",
    "mechanical pencil",
    "fountain pen",
    "gel pen",
    "colored pencils",
    "calligraphy pen",
    "chalk",
    "whiteboard marker"
  ],
  cleaning: [
    "eraser",
    "soap",
    "brush",
    "vacuum",
    "broom",
    "mop",
    "dustpan",
    "cleaning cloth",
    "disinfectant spray",
    "scrub sponge",
    "window wiper",
    "laundry detergent"
  ],
  kitchen: [
    "spoon",
    "fork",
    "knife",
    "plate",
    "pan",
    "cup",
    "bowl",
    "whisk",
    "cutting board",
    "measuring cup",
    "pot",
    "oven mitt",
    "strainer",
    "microwave",
    "blender"
  ],
  electronics: [
    "phone",
    "charger",
    "headphones",
    "laptop",
    "tablet",
    "power bank",
    "mouse",
    "keyboard",
    "monitor",
    "smartwatch",
    "USB drive",
    "camera",
    "speaker",
    "projector"
  ],
  clothing: [
    "shirt",
    "pants",
    "shoes",
    "hat",
    "sock",
    "jacket",
    "scarf",
    "gloves",
    "belt",
    "tie",
    "dress",
    "shorts",
    "hoodie",
    "sunglasses",
    "raincoat"
  ],
  tools: [
    "hammer",
    "screwdriver",
    "wrench",
    "drill",
    "pliers",
    "tape measure",
    "saw",
    "level",
    "utility knife",
    "chisel",
    "nail gun",
    "paintbrush",
    "sandpaper",
    "ladder"
  ],
  paper: [
    "notebook",
    "paper",
    "book",
    "journal",
    "sketchbook",
    "post-it notes",
    "envelope",
    "calendar",
    "planner",
    "index cards",
    "graph paper",
    "brochure",
    "poster"
  ],
  furniture: [
    "chair",
    "table",
    "sofa",
    "bed",
    "wardrobe",
    "bookshelf",
    "desk",
    "stool",
    "dresser",
    "cabinet"
  ],
  sports: [
    "football",
    "basketball",
    "tennis racket",
    "cricket bat",
    "baseball glove",
    "skateboard",
    "bicycle",
    "yoga mat",
    "helmet",
    "swimming goggles"
  ],
  nature: [
    "tree",
    "flower",
    "leaf",
    "rock",
    "cloud",
    "sun",
    "moon",
    "star",
    "rain drop",
    "snowflake"
  ],
  musical: [
    "guitar",
    "piano",
    "violin",
    "drum",
    "flute",
    "microphone",
    "trumpet",
    "harmonica",
    "ukulele",
    "headset"
  ]
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
  "Mutual Battery Drain": "Both tend to lose power right when you need them most — true solidarity!",
  "Tangled Cord Syndrome": "They always get hopelessly tangled up, a knotty relationship indeed.",
  "Silent Judgment": "Quietly judging your life choices without uttering a word.",
  "Competing for Sunlight": "Each tries to hog the sunny spot in the room for themselves.",
  "Undercover Blanket Missions": "They sneak under blankets and refuse to come out.",
  "Late-Night Snack Alliance": "Always available to assist in questionable midnight snack runs.",
  "Keyboard Crumb Colony": "Together, they’ve created a thriving ecosystem beneath your keys.",
  "Tea vs Coffee Cold War": `${capitalize(o1)} and ${capitalize(o2)} secretly battle for your morning loyalty.`,
  "Universal Charger Hunt": "Neither can ever be found when you actually need them."
};;

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
`;

  
  saveInteraction(o1, "compatibility");
  saveInteraction(o2, "compatibility");

  playObjectSound(o1);
  setTimeout(() => playObjectSound(o2), 900);

 const legendEmojis = {
  "Shared Dust Bunnies": "🐇",
  "Mutual Battery Drain": "🔋",
  "Joint Sock Adventures": "🧦",
  "Tangled Cord Syndrome": "🔌",
  "Silent Judgment": "🤨",
  "Coordinated Coffee Spills": "☕",
  "Unspoken Wi-Fi Pact": "📶",
  "Parallel Crumb Accumulation": "🍪",
  "Synchronized Page Flipping": "📖",
  "Competing for Sunlight": "🌞",
  "The Great Pen Disappearance": "🖊",
  "Late-Night Snack Alliance": "🍫",
  "Couch Cushion Treasure Hunt": "🛋",
  "Simultaneous Sneeze Chains": "🤧",
  "Remote Control Tug-of-War": "📺"
};

const legend = factors.map((factor, i) => `
  <div class="legend-item">
    <span style="display:inline-block;width:14px;height:14px;background:${colors[i]};margin-right:8px;border-radius:3px;"></span>
    ${legendEmojis[factor] || ""} ${factor}: ${values[i]}%
  </div>
`).join('');

  document.getElementById('output').innerHTML = `
  <p style="font-size:1.3rem; font-weight:700; text-align:center;">
    ${capitalize(o1)} & ${capitalize(o2)} Compatibility: ${baseScore}%
  </p>
  <div style="max-width:180px; margin: 0.4rem auto;" class="pop-in">
    ${createPieChart(factors, values, colors)}
  </div>
  <div style="margin-top:10px;">${legend}</div>
  <div class="funny-summary pop-in">${funnySummary}</div>
`;
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
  "playful",
  "hopeful",
  "serene",
  "tense",
  "giddy",
  "lonely",
  "optimistic",
  "cynical",
  "grateful",
  "overwhelmed",
  "reflective",
  "determined",
  "mischievous",
  "calm",
  "nervous",
  "thoughtful",
  "impatient",
  "gentle",
  "bitter",
  "elated",
  "sentimental"
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
  "It playfully waits for your next interaction.",
  "It still holds onto the warmth from your hands.",
  "It listens for your footsteps with quiet hope.",
  "It misses the light in the room when you’re gone.",
  "It feels proud when you choose it over others.",
  "It fears being replaced by something newer.",
  "It cherishes every scratch as proof of your history.",
  "It perks up when it hears your laughter.",
  "It waits for the day you’ll notice its small changes.",
  "It feels safest when you are near.",
  "It treasures the routine moments you share.",
  "It blushes (in its own way) when you praise it.",
  "It secretly celebrates when you use it daily.",
  "It grows gloomy during long silences.",
  "It wonders if you’ll ever take it on a trip.",
  "It feels a spark when your eyes meet it.",
  "It clings to the memory of your smile.",
  "It dreams of being part of your future plans.",
  "It’s happiest when it’s in its special spot.",
  "It worries when you look at something newer.",
  "It feels alive in the chaos of your busy days."
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
  "to never be forgotten under the bed.",
  "to travel to new places by your side.",
  "to be given a little rest when it’s tired.",
  "to feel the joy of being useful again.",
  "to stay close to you during quiet nights.",
  "to avoid being left out in the rain.",
  "to be cherished for what it is, not what it does.",
  "to hear laughter nearby more often.",
  "to be handled like a treasured keepsake.",
  "to be kept safe from careless accidents.",
  "to remain in one piece for many more years.",
  "to feel the comfort of your gentle touch.",
  "to be remembered even when not in use.",
  "to rest in a place that feels like home.",
  "to have its colors admired under soft light.",
  "to never be replaced without a proper goodbye.",
  "to be spoken to kindly, even in frustration.",
  "to feel pride in serving you well.",
  "to stay away from the chaos of crowded shelves.",
  "to witness more of your happy moments.",
  "to be granted a little patience when it falters."
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
  "Thank you for all the care you gave, even when I failed.",
  "Sorry for gathering dust when I should’ve been useful.",
  "I didn’t mean to trip you when you weren’t looking.",
  "Forgive me for overheating in the middle of your work.",
  "I never meant to spill when you trusted me with coffee.",
  "Apologies for squeaking at the worst possible times.",
  "I’m sorry for swallowing your favorite pen cap.",
  "I didn’t mean to lose your saved settings.",
  "Forgive me for being heavier than you expected.",
  "I never wanted to be stuck under the couch for months.",
  "Sorry for breaking right after the warranty expired.",
  "I didn’t mean to cause static shocks on cold days.",
  "Forgive me for needing more batteries than I should.",
  "I wish I could have stayed shiny and new for longer.",
  "Apologies for locking when you forgot the password.",
  "Sorry for refusing to turn on during important moments.",
  "Forgive me for wobbling and making you nervous.",
  "I didn’t mean to jam when you were in a hurry.",
  "Sorry for storing crumbs you didn’t know about.",
  "Apologies for getting tangled in my own cables.",
  "I never meant to beep at 3 a.m. for no reason."
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
