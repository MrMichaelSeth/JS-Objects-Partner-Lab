function storeAndConfirm(){
    formData.firstName = document.getElementById("fname").value;

    formData.lastName = document.getElementById("lname").value;

    formData.age = document.getElementById("age").value;

    formData.psswrd = document.getElementById("psswrd").value;

    formData.psswrd2 = document.getElementById("psswrd2").value;

    console.log(`The information you have entered is: First name: ${formData.firstName}. Last Name: ${formData.lastName}. Age: ${formData.age}. Password: ${formData.psswrd2}. If this information is incorrect, refresh the page and re-enter you information!`)
}

document.getElementById("submitButton").addEventListener("click", storeAndConfirm);

let formData = {};

function displayFormData (){
    console.log(formData);
}

document.getElementById("submitButton").addEventListener("click", displayFormData);