let userFirstName = "";
let userRadioChoice = 0;
let userCheckboxChoices = 0;
function match(){
    firstName();
}
function firstName(){
    const textFirstName = document.getElementById("firstName").value;
    if (textFirstName.length >= 2){
        userFirstName = textFirstName;
        console.log(userFirstName);
        activeRadioChoice();
    }else{
        alert("הקלד בבקשה שם פרטי או כינוי בעברית בלבד שגדול או שווה ל 2 תווים")
    }
}
function activeRadioChoice(){
    const mainImage = document.getElementById("filterMainImage");
    const radioTripType = document.getElementsByName("tripType");
    for (let i = 0; i < radioTripType.length; i++) {
        if (radioTripType[i].checked === true){
            userRadioChoice = i+1;
            console.log(userRadioChoice);
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
    activeCheckboxChoices();
}
function activeCheckboxChoices(){
    userCheckboxChoices = [];
    const checkboxMostInterested = document.getElementsByName("mostInterested");
        for (let i=0; i < checkboxMostInterested.length; i++){
            if (checkboxMostInterested[i].checked === true){
                userCheckboxChoices[i]= i+1;
            }
            console.log(userCheckboxChoices);
        }
        if (userCheckboxChoices[0] === 1){
            
        }
        if (userCheckboxChoices[1] === 2){
            
        }
        if (userCheckboxChoices[2] === 3){
            
        }
        if (userCheckboxChoices[3] === 4){
            
        }
        console.log(userCheckboxChoices);
}