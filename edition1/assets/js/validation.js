var firstname = false;
var lastname = false;
var age = false;
var message = false;

function firstnameValidation(input) {
    console.log("Started: Name Validation");
    firstname = inputValidation(input, 3);
}

function lastnameValidation(input) {
    console.log("Started: Name Validation");
    lastname = inputValidation(input, 3);
}

function messageValidation(input) {
    console.log("Started: Message Validation");
    message = inputValidation(input, 10);
}

function inputValidation(input, minInput) {
    console.log("Started: Input Validation");
    var length = input.value.length;

    if (length < minInput) {
        input.classList.add("is-invalid");
        return false;
    } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        return true;
    }
}

function ageValidation(input) {
    console.log("Started: Age Validation");
    var defaultOption = input.options[0].value;
    var selectedOption = input.options[input.selectedIndex].value;

    if (defaultOption == selectedOption) {
        input.classList.add("is-invalid");
        age = false;
    } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        age = true;
    }
}

function validation() {
    console.log("Started: Validation");

    var message = checkValidation();

    var output = document.createTextNode(message);
    var outputfield = document.getElementById("output");
    var paragraph = document.createElement("p");

    cleanUp(outputfield);

    paragraph.appendChild(output);
    outputfield.appendChild(paragraph);
}

function checkValidation(input) {
    console.log("Started: Check Validation");
    
    if (firstname == true && lastname == true && age == true && message == true) {
        return document.getElementById("message").value;
    } else {
        return "Please fix error messages";
    }
}

function cleanUp(outputfield) {
    console.log("Started: Clean up");

    if (outputfield.children.length != 0) {
        outputfield.children[0].remove();
    }
}