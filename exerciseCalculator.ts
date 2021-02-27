const calculateExercises = (
  periodLength: number,
  trainingDays: number,
  success: number,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
) => {
  return {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: success,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: average
  };
};

