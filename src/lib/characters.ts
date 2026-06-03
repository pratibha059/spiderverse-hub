export interface CharacterProfile {
  id: string;
  name: string;
  codename: string;
  universe: string;
  bio: string;
  origin: string;
  powers: string[];
  abilities: string[];
  stats: {
    strength: number;
    intelligence: number;
    speed: number;
    agility: number;
  };
  facts: string[];
  allies: string[];
  enemies: string[];
  themeColor: string;
  accentColor: string;
}

export const CHARACTERS_DATABASE: CharacterProfile[] = [
  {
    id: "peter",
    name: "Peter Parker",
    codename: "Spider-Man",
    universe: "Earth-616",
    bio: "Peter Parker is Earth-616's original wall-crawler. Bitten by a radioactive spider during a high school exhibition, he gained spectacular arachnid-like speed, strength, and precognitive senses.",
    origin: "Queens teenager Peter Parker used his powers for cash until he allowed a burglar to escape, who later killed his Uncle Ben. Heartbroken, Peter realized: 'With great power comes great responsibility.'",
    powers: ["Spider-Sense precognition", "Wall-crawling cling", "Superhuman strength & speed", "Enhanced healing factor"],
    abilities: ["Genius level scientific intellect", "Expert mechanical engineer", "Acrobatic photography skills"],
    stats: { strength: 80, intelligence: 92, speed: 75, agility: 95 },
    facts: [
      "Designed his wrist-mounted web shooters in his bedroom lab.",
      "Has worked as a high school teacher, scientist, and Daily Bugle photographer.",
      "Has served temporarily as a member of the Fantastic Four."
    ],
    allies: ["Mary Jane Watson", "Aunt May", "Ned Leeds", "Iron Man"],
    enemies: ["Green Goblin", "Doctor Octopus", "Venom", "Sandman"],
    themeColor: "var(--spidey-red)",
    accentColor: "var(--spidey-blue-light)"
  },
  {
    id: "gwen",
    name: "Gwen Stacy",
    codename: "Ghost-Spider",
    universe: "Earth-65",
    bio: "Gwen Stacy is Earth-65's drum-playing protector. In her dimension, she was bitten by the radioactive spider instead of Peter, earning severe local police bounty before finding other spider-allies.",
    origin: "Gwen Stacy initially used her powers for local fame. However, after her best friend Peter Parker took a serum to become like her and mutated into the Lizard, he died in her arms during a combat accident, driving her to fight crime.",
    powers: ["Dimensional portal leap (using ticket)", "High-tensile speed & reflexes", "Spider-Sense warning", "Wall-cling"],
    abilities: ["Expert punk rock drummer", "Stealth infiltrator", "Detective intelligence"],
    stats: { strength: 75, intelligence: 82, speed: 85, agility: 97 },
    facts: [
      "Costume hood was tailored to block tracking eyes in Earth-65.",
      "Plays drums in the garage band 'The Mary Janes'.",
      "Initially went by the vigilante code 'Spider-Woman' before adopting Ghost-Spider."
    ],
    allies: ["Miles Morales", "George Stacy", "Mary Jane Watson"],
    enemies: ["Matt Murdock (Earth-65 Kingpin)", "The Lizard", "Earth-65 Rhino"],
    themeColor: "var(--gwen-pink)",
    accentColor: "var(--gwen-teal)"
  },
  {
    id: "miles",
    name: "Miles Morales",
    codename: "Spider-Man",
    universe: "Earth-1610",
    bio: "Miles Morales is the young protector of Brooklyn. Inheriting the mask after Peter Parker's ultimate sacrifice in his home universe, Miles developed electric strike blasts and active camouflage camouflage.",
    origin: "Miles Morales was a standard Brooklyn charter school student. After being bitten by an Oscorp-engineered spider, he initially hid his powers until Peter Parker's passing drove him to wear the mask and carry Peter's legacy.",
    powers: ["Bio-electric Venom Blast", "Active camo invisibility", "Spider-Sense precognition", "Wall-crawling"],
    abilities: ["Skilled spray graffiti artist", "Fluent in Spanish", "Quick street-smart tactician"],
    stats: { strength: 78, intelligence: 80, speed: 82, agility: 96 },
    facts: [
      "Can disable electronic locks using his electric touch blasts.",
      "Customized his first suit with red graffiti spray-paint.",
      "Migrated to Earth-616 after the collapse of the Ultimate Universe."
    ],
    allies: ["Peter Parker", "Gwen Stacy", "Ganke Lee", "Rio Morales"],
    enemies: ["The Prowler (Uncle Aaron)", "The Spot", "Kingpin"],
    themeColor: "var(--spidey-blue-light)",
    accentColor: "var(--gwen-pink)"
  },
  {
    id: "miguel",
    name: "Miguel O'Hara",
    codename: "Spider-Man 2099",
    universe: "Earth-928",
    bio: "Miguel O'Hara is a genius genetics engineer from the futuristic Nueva York. Stripped of spider-sense, he carries retracting claws, venomous fangs, and leads the Spider-Society.",
    origin: "Miguel O'Hara had his DNA spliced with a spider's genetic code by his corrupt corporate employer Alchemax. He escaped their corporate labs to become a high-tech protector of the future.",
    powers: ["Venomous fangs & bite", "Retractable forearm talons", "Accelerated vision zoom", "Solid-light holographic web shoots"],
    abilities: ["Expert geneticist & computer programmer", "Hand-to-hand combat specialist", "Multilingual leadership"],
    stats: { strength: 90, intelligence: 95, speed: 90, agility: 88 },
    facts: [
      "Does not possess a traditional precognitive Spider-Sense.",
      "Suit is made of unstable molecules to prevent tear damages.",
      "Maintains the portal watch database tracking anomalies."
    ],
    allies: ["Lyla (AI assistant)", "Peter B. Parker", "Spider-Society"],
    enemies: ["Alchemax Corporation", "The Spot", "Dimension anomalies"],
    themeColor: "#051532",
    accentColor: "#f43f5e"
  },
  {
    id: "ham",
    name: "Peter Porker",
    codename: "Spider-Ham",
    universe: "Earth-8311",
    bio: "Peter Porker is the hilarious, cartoon-physics-bending Spider-Ham! A spider bitten by a radioactive pig, he defeats villains with gag mallets and humor.",
    origin: "Originally a spider, Peter resided in May Porker's basement. After May was irradiated by a nuclear hair dryer and bit Peter in a fit of delusion, he transformed into a pig-spider hybrid.",
    powers: ["Cartoon physics gravity negation", "Spidey-sense", "Infinite pocket dimensions (pulls items)"],
    abilities: ["Stand-up comedy specialist", "Wood mallet combat", "Breakout comic artist"],
    stats: { strength: 70, intelligence: 70, speed: 70, agility: 92 },
    facts: [
      "Can float in the air when smelled by a fresh pie scent.",
      "His webs can tie villains up in neat bow knots.",
      "Always has a funny punchline, even in world-ending combat."
    ],
    allies: ["Miles Morales", "Peter Parker", "Spider-Society"],
    enemies: ["Ducktor Doom", "Green Gobbler", "Kingpin"],
    themeColor: "var(--spidey-red)",
    accentColor: "var(--spidey-yellow)"
  },
  {
    id: "peni",
    name: "Peni Parker",
    codename: "SP//dr Pilot",
    universe: "Earth-14512",
    bio: "Peni Parker is a school student from a futuristic anime-styled Tokyo. She co-pilots a giant robotic mech suit with a radioactive spider that co-occupies the main CPU.",
    origin: "After her father tragically died piloting the SP//dr mech suit, Peni was selected by her Aunt May and Uncle Ben as the only candidate with matching genetics to form a telepathic link with the core spider.",
    powers: ["Telepathic link with spider co-pilot", "Arachnid UI data projection", "Wall-crawling mech magnets"],
    abilities: ["Genius level mech pilot", "Computer programmer", "Robotics maintenance specialist"],
    stats: { strength: 95, intelligence: 90, speed: 80, agility: 80 },
    facts: [
      "Her suit requires active power recharging after high-intensity thrusters.",
      "The radioactive spider co-occupies the pilot chamber inside the mech.",
      "Enjoys gaming and anime during downtime."
    ],
    allies: ["Aunt May (scientist)", "Peter Parker", "Spider-Society"],
    enemies: ["M.O.R.B.I.U.S.", "Venom Mech", "Earth-14512 Mysterio"],
    themeColor: "#e11d48",
    accentColor: "#2563eb"
  }
];
