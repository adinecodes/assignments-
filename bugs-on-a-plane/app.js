var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;

function formAlert()  {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements['vegan'].checked) {
         diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: "  + firstName + "\n" + "Last Name: " + lastName + " \n" +"Age: " + age + " \n" +"Gender: " + gender + " \n" + "Travel Location: " + location + " \n" + "Diet: " + diet + " \n" + "Awesome, now if you die, it won't be an accident..");
}


submit.addEventListener( 'click' , formAlert);