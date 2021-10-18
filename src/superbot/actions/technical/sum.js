export function sum(number_array) {
    let result = 0;
    for (let number of number_array) {
        result += number
    };
    return result;
}