const currentTime = new Date();
const hour = currentTime.getHours();
const minutes = currentTime.getMinutes();
const day = currentTime.getDate();
const month = currentTime.getMonth() + 1;
const year = currentTime.getFullYear();

export const completionDateHour = `${hour}:${minutes < 10 ? `0${minutes}` : minutes}`;
export const completionDate = `${day < 10 ? `0${day}` : day}-${month < 10 ? `0${month}` : month}-${year}`;
