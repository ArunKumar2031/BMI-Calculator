function calc() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById("result").innerText = "Please enter valid numbers!";
    return;
  }

  height = height / 100; // convert cm to meters
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  document.getElementById("result").innerText = `Your BMI is ${bmi} (${category})`;
}
