const marvel_heroes = ["thor", "captainmarvel", "hulk"];
const dc_heroes = ["superman", "captainatom", "wonderwoman"];

//marvel_heroes.push(dc_heroes); // we can push array in array in js, not only this we can make an array of any datatype in js
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]); // here we are asking element at  index 1 of element at index 3, here we had our dc array at index 3 and captian atom is at index 1 => captain atom

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes);

// const allheroes = marvel_heroes.concat(dc_heroes); // better practise to make a third variable to work for 2;
// console.log(allheroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes] // spread operator, spreads the element
// console.log(all_new_heroes)

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity) //similar to spread operator but here value can be given for flat() like leaving it empty will flatten the first array in array, we can give numbers like 2 or 3, or we can give infinity whihc means flatten every array in array
// console.log(real_another_array);

// console.log(Array.isArray("Hitesh")) // checks if it is a array
// console.log(Array.from("Hitesh")) // makes array from string
// console.log(Array.from({name: "hitesh"})) // interesting => returns empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));