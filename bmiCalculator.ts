const calculateBmi = (height: number, weight: number) => {
  const bmi = weight / Math.pow((height/100),2);//kg/m2
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi > 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi > 25 && bmi < 29.9) {
    return "Overweight";
  } else if (bmi > 30) {
    return "Obesity";
  }
};
console.log(calculateBmi(180, 74));
