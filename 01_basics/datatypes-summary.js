// primitive data types

// 7 categories :  String ,number,boolean,null,undefined,symbol,bigInt
const score=100
const scoreValue=100.3

const isLoggedIn= false
const outsideTemp= null
let useremail;


const id = Symbol('123')
const anotherId=Symbol('123')
console.log(id=== anotherId);

const bigNumber = 4895839532403247034211n



// Refrence type  or non primitive

// Array,objects,Functions

const heros=["shaktiman","naagraj","doga"];
{
    name:'kshitij';
    age:22;
}


const myfunction = function(){
    console.log("hello world");
}


console.log(typeof myfunction)



//*************null kam datatype object aata ha */

//********************************************8 */



// stack (primitve), heap( non primitive)

let myYoutubename="kshitijbajpai.com"

let anothername= myYoutubename
anothername="chaiorsutta"


console.log(anothername);
console.log(myYoutubename);

let userone={
    email:"userupi.com",
    upi :"user@ybl"

}
let usertwo=userone

usertwo.email="kshitij@google.com"

console.log(userone.email);
console.log(usertwo.email);