const moment = require('moment');


export const fullDate = moment().format("MMMM DD");

export const currentDate = moment().format("DD/MM/YYYY");

export const totalDays = moment().daysInMonth();

export const day = Number(moment().format("DD"));

// return day/day number of this month
export const slideArray = Array(totalDays).fill(0).map((_, i) => {
    const day = moment().date(i + 1).format("LLLL").slice(0, 3);
    const dayNUm = i + 1;
    return { day, dayNUm }
})