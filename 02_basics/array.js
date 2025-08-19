const myarr=[0,1,2,3,4,5]
//in js array are resizable

//console.log(myarr[0])


// myarr.push(6)
// myarr.push(7)
// console.log(myarr)


//myarr.unshift(9);// useless mostpeople says 
//myarr.shift()

// 
// const newarr=myarr.join()
// console.log(myarr);
// console.log(newarr)

// console.log(typeof newarr)

console.log("A",myarr)
const myn1= myarr.slice(1,3);
console.log(myn1)


console.log("B",myarr);

const myn2= myarr.splice(1,3);
console.log(myn2)

//usually interview ask that diff bw slice and splice 
//so main diff is that ✅ Slice → copy without changing the array
//✅ Splice → change the array by adding/removing