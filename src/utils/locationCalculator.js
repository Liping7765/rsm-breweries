//calculate the default center postion 
const default_lat = (data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.latitude,
    0) / data.length);

const default_long = (data.reduce(
    (accumulator, currentValue) => accumulator + currentValue.longitude,
    0) / data.length);