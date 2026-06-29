const marvel_heros = ["Iron Man", "Captain America"];
const dc_heros = ["Batman", "Superman", "Wonder", "Flash", "Green Lantern", "Aquaman"];


// marvel_heros.push(dc_heros); // add dc_heros array to the end of marvel_heros array
// console.log(marvel_heros); // ["Iron Man", "Captain America" ["Batman", "Superman", "Wonder", "Flash", "Green Lantern", "Aquaman"]]

// console.log(marvel_heros[2][0]); // Batman
const all_heros = marvel_heros.concat(dc_heros); // combine both arrays into a new array
// console.log(all_heros); // ["Iron Man", "Captain America", "Batman", "Superman", "Wonder", "Flash", "Green Lantern", "Aquaman"]

const all_heros2 = [...marvel_heros, ...dc_heros]; // combine both arrays into a new array using spread operator
console.log(all_heros2);

console.log(Array.isArray(all_heros2)); // true
console.log(Array.from("Nishant")); // ["N", "i", "s", "h", "a", "n", "t"]
