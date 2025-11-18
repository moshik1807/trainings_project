export function enterTraining(trainings, training) {
  let start = 0;
  let end = trainings.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (
      new Date(`${trainings[middle].date}T${trainings[middle].time}`) <
      new Date(`${training.date}T${training.time}`)
    ) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  trainings.splice(start, 0, training);

  return trainings;
}