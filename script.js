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

// let n = 3,z=0;
// for(let i=2;i<n;i++){
//     if(n%i==0){
//         break;
//         z=1;
//     }
        
// }
// if(z==0)
//     console.log("prime number");
// else        
//     console.log("not prime number");
// let head = document.getElementsByTagName("h1");
// head[1].innerText = "byee buee 1"
// console.log(head[0].innerText);
// let para = document.getElementById("para");
// para.textContent
// para.innerText = "<b>adios</b>"
// para.innerHTML = "<b>adios</b>"
// let h = document.getElementsByClassName('A');
// h[1].innerHTML = "changed ver"
// const change =() =>{
//    let di =  document.getElementById("display");
//     di.innerHTML = "bye";
//     di.style.backgroundColor ='pink';
//     di.style.color = 'white';
// }
const change = () =>{
    // let di = document.getElementById("display");
    // di.style.backgroundColor = "red"
    const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

    let index = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[index];
}
// use 
// Math.random() Math.floor() arrY