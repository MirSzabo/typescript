const calculateBmi = (weight: number, height: number) => {
  const bmi = weight / height;//kg/m2
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi > 18.5 && bmi < 25) {
    return "Normal (healthy weight)";
  } else if (bmi > 25 && bmi < 30) {
    return "Overweight ";
  } else if (bmi > 30) {
    return "Obese ";
  }
};
console.log(calculateBmi(180, 74));
