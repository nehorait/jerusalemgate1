let userFirstName = ""; // שם שהמשתמש הקליד
let userRadioChoice = 0; // הבחירה שהמתמש בחר בכפתורי הרדיו
let userCheckboxChoices = 0; // הסימונים שהמשתמש סימן בכפתורי הצ'קבוקס
let isUserFirstNameValid = false; // האם המשתמש הזין שם תקין
let isUserRadioChoiceValid = false; // האם המשתמש בחר בכפתור הרדיו
let isUserCheckBoxChoicesValid = false; // האם משתמש סימן לפחות סימון אחד בכפתורי הצ'קבוקס
function clearAll(){ // הפנוקציה מנקה את הבחירות הכתובות למעלה
    userFirstName = "";
    userRadioChoice = 0;
    userCheckboxChoices = 0;
    isUserFirstNameValid = false;
    isUserRadioChoiceValid = false;
    isUserCheckBoxChoicesValid = false;
    document.getElementById("matchForm").reset(); // בנוסף הפונקציה תנקה את הטופס
    document.getElementById("match").disabled = true; // וגם את הכפתור
}
 function firstName() { // הפונקציה קולטת את השם \ כינוי, מזהה שהוא תקין - בעברית ושווה או גדול ל 2 תווים
    const hebrewRegex = /^[\u0590-\u05FF\s.,'"-]+$/; // תקינות עברית
    const textFirstName = document.getElementById("firstName").value.trim(); // קליטת השם ללא רווחים מיותרים
    if (textFirstName.length >= 2 && hebrewRegex.test(textFirstName)) { // אם תקין
        userFirstName = textFirstName; // תשמור במשתנה הגלובלי
        isUserFirstNameValid = true; // תדווח שתקין 
    }else{
        isUserFirstNameValid = false; // ואם לא תדווח שלא תקין
    }
     checkFormValidity() //תקרא לפנוקציה שבודקת, האם הטופס תקין?
}
function activeRadioChoice(){ // קולטת את הבחירה בכפתורי הרדיו
    const mainImage = document.getElementById("matchMainImage"); // התמונה המתחלפת
    const radioLifestyle = document.getElementsByName("lifestyle"); // כפתורי הרדיו
    for (let i = 0; i < radioLifestyle.length; i++) { // לולאה שבודקת את כל הכפתורים
        if (radioLifestyle[i].checked === true){ // האם מסומן?
            userRadioChoice = i+1; // תשמור את המספר שמסומן במשתנה הגלובלי
            isUserRadioChoiceValid = true; // תדווח שתקין
            break; // תעצור כי אין בה כבר צורך
        }
    } // למשתמש אין אופציה לבטל את בחירתו ולכן אין צורך בבדיקת אי תקינות else
    if(userRadioChoice === 1){ // התמונה תשתנה לפי הבחירה בכפתורי הרדיו
        mainImage.src = "images/matchform/mainimage/catsofa.jpeg"; mainImage.alt = "חתול ישן על ספה" // תמונה ראשונה
    }else if(userRadioChoice === 2){
        mainImage.src = "images/matchform/mainimage/naturelover.jpeg"; mainImage.alt = "אדם מטייל בטבע" // תמונה שנייה
    }else if(userRadioChoice === 3){
        mainImage.src = "images/matchform/mainimage/shoppinginstyle.jpeg";mainImage.alt = "אישה מחזיקה שקיות של קניות בקניון" // תמונה שלישית
    }else if(userRadioChoice === 4){
        mainImage.src = "images/matchform/mainimage/eternallycurious.jpeg"; mainImage.alt = "אדם מטייל במקום עתיק ומסתקרן" // תמונה רביעית
    }
    mainImage.style.opacity = "100%"; // שקיפות התמונה
    checkFormValidity() //תקרא לפנוקציה שבודקת, האם הטופס תקין?
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
    if (isUserFirstNameValid === true && isUserRadioChoiceValid === true && isUserCheckBoxChoicesValid === true ){
        document.getElementById("match").disabled = false;
    }else{
        document.getElementById("match").disabled  = true;
    }
}
function showSummaryPopup() {
    let userLifestyle = "";
    let userMostInterested = "";
    if (userRadioChoice === 1) {
        userLifestyle = "ספה ונטפליקס";
    } else if (userRadioChoice === 2) {
        userLifestyle = "חובב טבע";
    } else if (userRadioChoice === 3) {
        userLifestyle = " קניות וסטייל";
    } else if (userRadioChoice === 4) {
        userLifestyle = "סקרן נצחי";
    }
    if (userCheckboxChoices[0] === 1) {
        userMostInterested += ". <br><br><strong style='color: black;'>אטרקציות מיוחדות</strong> - גן החיות התנכי, אקווריום ישראל, יקבי ירושלים, ממילא"
    }if (userCheckboxChoices[1] === 2) {
        userMostInterested += ". <br><br><strong style='color: black;'>אתרים היסטוריים -</strong> עיר דוד, הכותל המערבי, הספרייה הלאומית"
    }if (userCheckboxChoices[2] === 3) {
        userMostInterested += ". <br><br><strong style='color: black;'>מוזיאונים -</strong> יד ושם, מוזיאון המדע"
    }if (userCheckboxChoices[3] === 4) {
        userMostInterested += ". <br><br><strong style='color: black;'>תצפיות -</strong> תצפית מגדל דוד, תצפית תל שוכה"
    }
    document.getElementById("formDetails").innerHTML = "<strong>שם / כינוי המטייל: </strong>" +  userFirstName + "<br><br>" + "<strong>סגנון החיים: </strong>" + userLifestyle + "<br><br>" + " <strong>הכי מעניין: </strong>" + userMostInterested.slice(1);
    document.getElementById("matchSummaryFormContainer").style.display = "flex";
}
function formSent(){
    document.getElementById("matchSummaryFormContainer").style.display = "none";
    location.reload()
}
function exitPopup(){
    document.getElementById("matchSummaryFormContainer").style.display = "none";
}