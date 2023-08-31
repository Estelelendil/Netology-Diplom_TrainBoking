/* eslint-disable prettier/prettier */
export const PriceSum = (arr, num) => {
    let sum = 0;
    arr.forEach((item, index) => {
        if (index < num) {
            sum += item;
            return;
        } else return;
    });
    return sum;
};
