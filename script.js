function storeAndConfirm(){
    let firstName = document.getElementById("fname").value;

    let lastName = document.getElementById("lname").value;

    let age = document.getElementById("age").value;

    let psswrd = document.getElementById("psswrd").value;

    let psswrd2 = document.getElementById("psswrd2").value;

    console.log(`The information you have entered is: First name: ${firstName}. Last Name: ${lastName}. Age: ${age}. Password: ${psswrd2}. If this information is incorrect, refresh the page and re-enter you information!`)
}

document.getElementById("submitButton").addEventListener("click", storeAndConfirm);
// document.getElementById("submitButton").addEventListener("click", confirm);