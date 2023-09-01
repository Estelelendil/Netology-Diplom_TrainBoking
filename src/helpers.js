/* eslint-disable prettier/prettier */
export const PriceSum = (arr, persons) => {
    console.log("PriceSum", persons);
    let sum = 0;
    arr.forEach((item, index) => {
        if (index < persons.length) {
            persons[index].is_adult === "false" || persons[index].is_child === true ? sum += item * 0.6 : sum += item;
            return;
        } else return;
    });
    return sum;
};

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

