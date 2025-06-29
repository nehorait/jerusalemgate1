let userFirstName = "";
let userRadioChoice = 0;
let userCheckboxChoices = 0;
let isUserFirstNameValid = false;
let isUserRadioChoiceValid = false;
let isUserCheckBoxChoicesValid = false;
function clearAll(){
    userFirstName = "";
    userRadioChoice = 0;
    userCheckboxChoices = 0;
    isUserFirstNameValid = false;
    isUserRadioChoiceValid = false;
    isUserCheckBoxChoicesValid = false;
    document.getElementById("matchForm").reset();
    document.getElementById("match").disabled = true;
}
 function firstName() {
    const hebrewRegex = /^[\u0590-\u05FF\s.,'"-]+$/;
    const textFirstName = document.getElementById("firstName").value.trim();
    if (textFirstName.length >= 2 && hebrewRegex.test(textFirstName)) {
        userFirstName = textFirstName;
        isUserFirstNameValid = true;
    }else{
        isUserFirstNameValid = false;
    }
     checkFormValidity()
}
function activeRadioChoice(){
    const mainImage = document.getElementById("matchMainImage");
    const radioTripType = document.getElementsByName("tripType");
    for (let i = 0; i < radioTripType.length; i++) {
        if (radioTripType[i].checked === true){
            userRadioChoice = i+1;
            isUserRadioChoiceValid = true;
            mainImage.style.opacity = "100%";
            break;
        }
    }
    if(userRadioChoice === 1){
        mainImage.src = "images/matchform/mainimage/catsofa.jpeg";
    }else if(userRadioChoice === 2){
        mainImage.src = "images/matchform/mainimage/naturelover.jpeg";
    }else if(userRadioChoice === 3){
        mainImage.src = "images/matchform/mainimage/shoppinginstyle.jpeg";
    }else if(userRadioChoice === 4){
        mainImage.src = "images/matchform/mainimage/eternallycurious.jpeg";
    }
    checkFormValidity()
}
function activeCheckboxChoices(){
    userCheckboxChoices = [];
    const mainImagesSpecialAttractions = document.getElementsByClassName("matchMainImagesSpecialAttractions");
    const mainImagesHistoricalSites = document.getElementsByClassName("matchMainImagesHistoricalSites");
    const mainImagesMuseums = document.getElementsByClassName("matchMainImagesMuseums");
    const mainImagesViewpoints = document.getElementsByClassName("matchMainImagesViewpoints");
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
        buttonMatch.disabled = false;
    }else{
        buttonMatch.disabled  = true;
    }
}
function match(){
    
}



