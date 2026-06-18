const getImage = async() =>
{
let display = document.getElementById("display");
try{
const r = await fetch("https://dog.ceo/api/breeds/image/random");
const data = await r.json();
display.src =  data.message
}
catch (err){
    console.log(err.name)
}
}