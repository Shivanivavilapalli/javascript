// var a = 10;
// var b = "10";
// var c = "errrr";
// var d = false;
// console.log(a + b + c + d);
// if (a == b) {
//     console.log("equal because of value");
// }
// else {
//     console.log("not values equal");
// }
// if (a === b) {
//     console.log("it should be equal because values and datatype");
// }
// else {
//     console.log("not equal datatypes")
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// let r = 300;
// if ((r % 4 == 0 && r % 100 != 0) || r % 400 == 0) {
//     console.log("leap year");
// }
// else {
//     console.log("not leap year");
// }

let n = 3,z=0;
for(let i=2;i<n;i++){
    if(n%i==0){
        break;
        z=1;
    }
        
}
if(z==0)
    console.log("prime number");
else        
    console.log("not prime number");

