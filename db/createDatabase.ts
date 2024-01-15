import { Database } from "bun:sqlite";
const db = new Database("mydb.sqlite", { create: true });

// Create a pets table if it does not already exist in my database
db.exec(`
  CREATE TABLE IF NOT EXISTS pets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
  )
`);

const insert = db.prepare("INSERT INTO pets (name, age) VALUES ($name, $age)");
const insertPets = db.transaction(pets => {
  for (const pet of pets) insert.run(pet);
  return pets.length;
});

const count = insertPets([
  { $name: "Keanu", $age: 3 },
  { $name: "Salem", $age: 5 },
  { $name: "Crookshanks", $age: 7 },
  { $name: "Miles", $age: 4 },
]);

console.log(`Inserted ${count} pets`);

