export function sum(number_array) {
    let result = 0;
    for (number in number_array) {
        result += number
    };
    return result;
}