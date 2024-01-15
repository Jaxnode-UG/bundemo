import { Database } from "bun:sqlite";
const db = new Database("mydb.sqlite", { readonly: true });

type Pet = {
    name: string,
    age: number
};

const pets: Pet[] = db.prepare("SELECT * FROM pets").all() as Pet[];

for (const pet of pets) {
    console.log(`${pet.name} is ${pet.age} years old`);
}
