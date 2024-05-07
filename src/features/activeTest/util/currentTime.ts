const currentTime = new Date();
const hour = currentTime.getHours();
const minutes = currentTime.getMinutes();
const day = currentTime.getDate();
const month = currentTime.getMonth() + 1;
const year = currentTime.getFullYear();

export const dateWhenTestWasFinished = `${hour}:${minutes < 10 ? `0${minutes}` : minutes} ${day}-${month < 10 ? `0${month}` : month}-${year}`;
