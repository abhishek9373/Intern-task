const startTimeInput = document.querySelector("#startTime");
const endTimeInput = document.querySelector("#endTime");
const breakDurationInput = document.querySelector("#breakDuration");
const totalHoursInput = document.querySelector("#totalHours");
const calculateButton = document.querySelector("#calculate");

calculateButton.addEventListener("click", function () {
  const startTime = startTimeInput.value;
  const endTime = endTimeInput.value;
  const breakDuration = breakDurationInput.value;

  const startTimeInMinutes =
    parseInt(startTime.split(":")[0], 10) * 60 +
    parseInt(startTime.split(":")[1], 10);
  const endTimeInMinutes =
    parseInt(endTime.split(":")[0], 10) * 60 +
    parseInt(endTime.split(":")[1], 10);

  const totalMinutes = endTimeInMinutes - startTimeInMinutes - breakDuration;
  const totalHours = totalMinutes / 60;

  totalHoursInput.value = totalHours.toFixed(2);
});
