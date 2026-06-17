const validate = (event) => {
    event.preventDefault();

    let name = event.target.name;
    let id = event.target.id;
    let phonenum = event.target.phonenum;
    let error = document.getElementById("error");

    name.style.borderColor = "";
    id.style.borderColor = "";
    phonenum.style.borderColor = "";

    if(name.value === "" && id.value === "" && phonenum.value === ""){
        error.innerHTML = "Please enter all details";

        name.style.borderColor = "red";
        id.style.borderColor = "red";
        phonenum.style.borderColor = "red";
    }
    else if(name.value === ""){
        error.innerHTML = "Please enter username";
        name.style.borderColor = "red";
    }
    else if(id.value === ""){
        error.innerHTML = "Please enter id";
        id.style.borderColor = "red";
    }
    else if(phonenum.value === ""){
        error.innerHTML = "Please enter phone number";
        phonenum.style.borderColor = "red";
    }
    else{
        error.innerHTML = "Form submitted successfully";
    }
}