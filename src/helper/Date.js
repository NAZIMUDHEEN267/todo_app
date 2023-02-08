const moment = require('moment');

const date = moment().format("LLLL").split(",");
export const day = date[0].slice(0, 3);
export const fullDate = date[1];

export const getDateNum = moment().date();
export const dateNum = getDateNum < 10 ? "0" + getDateNum : getDateNum;
 
export const getHour = moment().hour();
export const hour = getHour > 12 ? getHour - 12 : getHour;
 
export const minute = moment().minute();

export const totalDays = moment().daysInMonth();