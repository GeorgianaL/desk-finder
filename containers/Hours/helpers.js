const getWorkingHours = () => {
  let workingHours = [];

  for (let i = 8; i <= 11; i++) {
    workingHours = [...workingHours, `${i} AM`];
  }
  for (let i = 12; i <= 18; i++) {
    workingHours = [...workingHours, `${i} PM`];
  }

  return workingHours;
};

export default getWorkingHours;
