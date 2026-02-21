const addressLat = 35;
const addressLong = 40;
const positionLat = 10;
const positionLong = 20;

const distance = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);

console.log(`Дистанция до объекта составляет: ${distance}.`);