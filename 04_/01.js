//----------------------------------------------------------if---------------------------------------------------------------

// if(condition)//if condition is true code will run, if not then code will not run
// {

// }

// const IsuserloggedIn = true
// if(IsuserloggedIn){

// }

// we check conditions, sometimes we do comparisons
//if(2==2){}
// <, >, <=, =>, ==, !=, ===, !==

// const temp = 41

// if(temp < 50){
//     console.log("less than 50");
// }


// if(temp < 50){
//     console.log("less than 50");
// }
// console.log("greater than 50");


// if(temp < 50){
//     console.log("less than 50");
// } else {
//     console.log("greater than 50");
// }



//-----------------------------------------------------scope---------------------------------------------------------------------

// const score = 200

// if ( score > 100){
//     const power= "fly"; // with const it cant be changes, with let it can be but only used within the scope, with var it can be accessed anywhere in the code and thats bhalsphemy
//     console.log(`User power: ${power}`);
// }

//     console.log(`User power: ${power}`); // error because it is out of scope




//----------------------------------------------------------nested-----------------------------------------------------------------------------------------------------
/*
const balance = 1000
if(balance > 500) console.log("greater than 500") //here we didnt used scope because it was implicit or a single line instruction
//to make it multi statement with out scope we can use ","
if(balance > 500) console.log("test"),
    console.log("test2")
//but both of these cases should be avoided as they are not good practise as it makes code hard to read, should avoid
*/
/*
const balance = 1000

if (balance < 500){
    console.log("lesser than 500")
} else if (balance < 750){
    console.log("lesser than 750")
} else if (balance < 900){
    console.log("lesser than 900")
} else{
    console.log("more than 900")
}
*/

//-------------------------------------------------------------------and and or-----------------------------------------------------------------------------------

const Userloggin = true
const debitcard = true

if(Userloggin && debitcard){
    console.log("Allow user to buy course")
}

const logginfromgoogle = true
const logginfromemail = false
if(logginfromgoogle || logginfromemail){
    console.log("user logged in")
}