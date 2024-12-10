// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // Traverse the surveyData array to:
  // Count the number of "Yes" responses,
  // Count the number of "No" responses,
  // Count the number of "Maybe" responses,
  // and output the results in the outputEl.
  let yesCount = 0;
  let noCount = 0;
  let maybeCount = 0;
  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData.at(i) == "Yes") {
      yesCount++;
    } else if (surveyData.at(i) == "No") {
      noCount++;
    } else if (surveyData.at(i) == "Maybe") {
      maybeCount++;
    }
  }

  outputEl.innerHTML = `Yes: ${yesCount} <br> No: ${noCount} <br> Maybe: ${maybeCount}`;
  console.log(surveyData);
}

function traverseAgeData() {
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.
  let ageUnder18 = 0;
  let ageBetween18_35 = 0;
  let ageBetween36_65 = 0;
  let ageAbove65 = 0;

  for (let i = 0; i < ageData.length; i++) {
    if (ageData.at(i) < 18) {
      ageUnder18++;
    } else if (ageData.at(i) >= 18 && ageData.at(i) <= 35) {
      ageBetween18_35++;
    } else if (ageData.at(i) >= 36 && ageData.at(i) <= 65) {
      ageBetween36_65++;
    } else if (ageData.at(i) > 65) {
      ageAbove65++;
    }
  }
  outputEl.innerHTML = `Younger than 18: ${ageUnder18} 
  <br> Between 18 and 35: ${ageBetween18_35}
  <br> Between 36 and 65: ${ageBetween36_65} 
  <br> Older than 65: ${ageAbove65}`;
  console.log(ageData);
}

function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.
  let evenNum = 0;
  let oddNum = 0;
  for (let i = 0; i < numberData.length; i++) {
    if (numberData.at(i) % 2 == 0) {
      evenNum++;
    } else {
      oddNum++;
    }
  }

  outputEl.innerHTML = `Even Numbers: ${evenNum} <br> Odd Numbers: ${oddNum}`;
  console.log(numberData);
}