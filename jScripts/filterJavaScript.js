let userFirstName = "";
let userRadioChoice = 0;
let userCheckboxChoices = 0;
let isUserFirstNameValid = false;
let isUserRadioChoiceValid = false;
let isUserCheckBoxChoicesValid = false;
function clear(){
    userFirstName = "";
    userRadioChoice = 0;
    userCheckboxChoices = 0;
    isUserFirstNameValid = false;
    isUserRadioChoiceValid = false;
    isUserCheckBoxChoicesValid = false;
}
//function match(){
    //    firstName();
//}
 function firstName() {
    const hebrewRegex = /^[\u0590-\u05FF\s.,'"-]+$/;
    const textFirstName = document.getElementById("firstName").value.trim();
    if (textFirstName.length >= 2 && hebrewRegex.test(textFirstName)) {
        userFirstName = textFirstName;
        isUserFirstNameValid = true;
    //    if (userRadioChoice === 0 && userCheckboxChoices === 0) {
         //   alert("בחר/י אופציה אחת מהכתפורים העגולים ובאחת מהכפתורים המרובעים לפחות");
       // }else{
       //     if (userRadioChoice === 0 && userCheckboxChoices !== 0) {
       //         alert("בחר/י אופציה אחת מהכתפורים העגולים");
       //     }else{
         //       if (userRadioChoice !== 0 && userCheckboxChoices === 0) {
           //         alert("בחר/י אופציה אחת מהכפתורים המרובעים לפחות");
///
           //     }else{
               //     alert("כל הכבוד!")
         //       }
      //      }
    //    }
    }else{
        alert("הקלד/י בבקשה שם פרטי או כינוי בעברית בלבד שגדול או שווה ל 2 תווים");
        isUserFirstNameValid = false;
    }
     checkFormValidity()
}

function activeRadioChoice(){
    const mainImage = document.getElementById("filterMainImage");
    const radioTripType = document.getElementsByName("tripType");
    for (let i = 0; i < radioTripType.length; i++) {
        if (radioTripType[i].checked === true){
            userRadioChoice = i+1;
            isUserRadioChoiceValid = true;
            break;
        }
    }
    if(userRadioChoice === 1){
        mainImage.src = "images/filterform/mainimage/catsofa.jpeg";
    }else if(userRadioChoice === 2){
        mainImage.src = "images/filterform/mainimage/naturelover.jpeg";
    }else if(userRadioChoice === 3){
        mainImage.src = "images/filterform/mainimage/shoppinginstyle.jpeg";
    }else if(userRadioChoice === 4){
        mainImage.src = "images/filterform/mainimage/eternallycurious.jpeg";
    }
    mainImage.style.opacity = "100%";
    checkFormValidity()
}
function activeCheckboxChoices(){
    userCheckboxChoices = [];
    const mainImagesSpecialAttractions = document.getElementsByClassName("filterMainImagesSpecialAttractions");
    const mainImagesHistoricalSites = document.getElementsByClassName("filterMainImagesHistoricalSites");
    const mainImagesMuseums = document.getElementsByClassName("filterMainImagesMuseums");
    const mainImagesViewpoints = document.getElementsByClassName("filterMainImagesViewpoints");
    const checkboxMostInterested = document.getElementsByName("mostInterested");
        for (let i=0; i < checkboxMostInterested.length; i++){
            if (checkboxMostInterested[i].checked === true){
                userCheckboxChoices[i]= i+1;
            }
        }
    if (userCheckboxChoices[0] === 1){
        for (let i=0; i < mainImagesSpecialAttractions.length; i++){
            mainImagesSpecialAttractions[i].style.opacity = "100%";
        }
        }else{
        for (let i=0; i < mainImagesSpecialAttractions.length; i++){
            mainImagesSpecialAttractions[i].style.opacity = "50%";
        }
    }
        if (userCheckboxChoices[1] === 2){
            for (let i=0; i < mainImagesHistoricalSites.length; i++){
                mainImagesHistoricalSites[i].style.opacity = "100%";
            }
        }else{
            for (let i=0; i < mainImagesHistoricalSites.length; i++){
                mainImagesHistoricalSites[i].style.opacity = "50%";
            }
        }
        if (userCheckboxChoices[2] === 3){
            for (let i=0; i < mainImagesMuseums.length; i++){
                mainImagesMuseums[i].style.opacity = "100%";
            }
        }else{
            for (let i=0; i < mainImagesMuseums.length; i++){
                mainImagesMuseums[i].style.opacity = "50%";
            }
        }
        if (userCheckboxChoices[3] === 4){
            for (let i=0; i < mainImagesViewpoints.length; i++){
                mainImagesViewpoints[i].style.opacity = "100%";
            }
        }else{
            for (let i=0; i < mainImagesViewpoints.length; i++){
                mainImagesViewpoints[i].style.opacity = "50%";
            } 
        }    
        if (userCheckboxChoices[0] === 1 || userCheckboxChoices[1] === 2 || userCheckboxChoices[2] === 3 || userCheckboxChoices[3] === 4){
            isUserCheckBoxChoicesValid = true;
        }else{
            isUserCheckBoxChoicesValid = false;
        }
    checkFormValidity()
}

function checkFormValidity(){
    const buttonMatch = document.getElementById("match");
    if (isUserFirstNameValid === true && isUserRadioChoiceValid === true && isUserCheckBoxChoicesValid === true ){
        console.log("enabled");
        buttonMatch.disabled = false;
    }else{
        console.log ("disabled");
        buttonMatch.disabled  = true;
    }
}


