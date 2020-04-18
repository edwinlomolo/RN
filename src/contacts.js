const NUM_CONTACTS = 1;

// Random firstnames list
const firstNames = [
  "Emma",
  "Noah",
  "Olivia",
  "Liam",
  "Ava",
  "Sophia",
  "Mason",
  "isabella",
  "James",
  "Mia",
  "Benjamin",
  "Charlotte",
  "Jacob",
  "Abigail",
  "Michael",
  "Emily",
  "Elijah",
  "Harper",
  "Ethan",
  "Amelia",
  "Alexander",
  "Everlyn",
  "Oliver",
  "Elizabeht",
  "Daniel",
  "Sophia",
  "Lucas",
  "Madison",
  "Matthwe",
  "Avery",
  "Aiden",
  "Ella",
  "Jackson",
  "Scarlett",
  "Logan",
  "Grace",
  "David",
  "Victoria",
  "Samuel",
  "Riley",
  "Henry",
  "Aria",
  "Owen",
  "Lilly",
  "Sebastian",
  "Audrey",
  "Chloe",
  "Joseph",
  "Gabriel",
  "Zoey",
  "Carter",
  "Penelope",
  "Jayden",
  "Lillian",
  "John",
  "Addison",
  "Luke",
  "Layla",
  "Antony",
  "Natalie",
  "Isaac",
  "Camila",
  "Dylan",
  "Hannah",
  "Wyatt",
  "Brooklyn",
  "Andrew",
  "Zoe",
  "Joshua",
  "Nora",
  "Christopher",
  "Leah",
  "Grayson",
  "Savannah",
  "Jack",
  "Audrey",
  "Julian",
  "Claire",
  "Ryan",
  "Eleanor",
  "Jaxon",
  "Skylar",
  "Levi",
  "Ellie",
  "Nathan",
  "Samantha",
  "Caleb",
  "Stella",
  "Hunter",
  "Paisley",
  "Christian",
  "Violet",
  "Isiah",
  "Mila",
  "Thomas",
  "Allison",
  "Aaron",
  "Alexa",
  "Lincoln"
];

// Random lastnames list
const lastNames = [
  "Smith",
  "Jones",
  "Brown",
  "Johnson",
  "Williams",
  "Miller",
  "Taylor",
  "Wilson",
  "Davis",
  "White",
  "Clark",
  "Hall",
  "Thomas",
  "Thompson",
  "Moore",
  "Hill",
  "Walker",
  "Anderson",
  "Wright",
  "Martin",
  "Wood",
  "Allen",
  "Robinson",
  "Lewis",
  "Scott",
  "Young",
  "Jackson",
  "Adams",
  "Tryniski",
  "Green",
  "Evans",
  "King",
  "Baker",
  "John",
  "Harris",
  "Roberts",
  "Campbell",
  "James",
  "Stewart",
  "Lee",
  "County",
  "Turner",
  "Parker",
  "Cook",
  "Mc",
  "Edwards",
  "Morris",
  "Mitchell",
  "Bell",
  "Ward",
  "Watson",
  "Morgan",
  "Davies",
  "Cooper",
  "Phllips",
  "Rogers",
  "Gray",
  "Hughes",
  "Harrison",
  "Carter",
  "Murphy"
];

// Generate a random number between min and max
const rand = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Generate a name
const generateName = () =>
  `${firstNames[rand(firstNames.length - 1)]} ${
    lastNames[rand(lastNames.length - 1)]
  }`;

// Generate a phone number
const generatePhoneNumber = () =>
  `${rand(999, 100)}-${rand(999, 100)}-${rand(9999, 1000)}`;

// Create a person
const createContact = () => ({
  name: generateName(),
  phone: generatePhoneNumber()
});

// Compare two contacts for alphabetizing
export const compareNames = (contact1, contact2) =>
  contact1.name > contact2.name;

// Add keys based on index
const addKeys = (val, key) => ({ key: key, ...val });

// Create an array of length NUM_CONTACTS and alphabetize by name
export default Array.from({ length: NUM_CONTACTS }, createContact).map(addKeys);
