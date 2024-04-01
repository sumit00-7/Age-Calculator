
const date = document.querySelector("input");

const ageOutput = document.querySelector("p");

function calculate(date){

    let dob = new Date(date.value);
    let currentDate = new Date();
    var age = currentDate.getFullYear() - dob.getFullYear();
    var monthDiff = currentDate.getMonth() - dob.getMonth();
    var dayDiff = currentDate.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
        monthDiff += 12;
    }

    var ageString = "";
    
    if (age > 0) {
        ageString += age + " year" + (age > 1 ? "s" : "") + ", ";
    }
    if (monthDiff > 0) {
        ageString += monthDiff + " month" + (monthDiff > 1 ? "s" : "") + ", ";
    }
    if (dayDiff > 0) {
        ageString += dayDiff + " day" + (dayDiff > 1 ? "s" : "");
    }
    if (ageString === "") {
        ageString = "You were born today!";
    }

    ageOutput.style.display = "block";
    ageOutput.textContent = "Your age is " + ageString + ".";

}

const btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    calculate(date);
});