//-----------------------------------------------------array---------------------------------------------------------------

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); 




//---------------------------------------------------------- Array Methods------------------------------------------------

// myArr.push(6) // inserting new elemetns, from end (convention)
// myArr.pop() // deleting, convention

// myArr.unshift(9) // adds element from starting, pushing every element one step back
// myArr.shift() // deletes element at index 0

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3))

// console.log(myArr);

// const newArr = myArr.join() //creates and returns a new string by concatenating all of the elements in an array

// console.log(myArr);
// console.log(typeof newArr);



//------------------------------ slice, splice -------------------------------------------------
console.log("A ", myArr);

const myn1 = myArr.slice(1,3); // returns the element on the given index
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3); // actually takes the vales of given index out of the array
console.log(myn2);

console.log("C ", myArr);