function sumAll(arr) {
    if (arr.length != 2) return undefined;

    let sum = 0;

    for (let i = Math.min(...arr); i <= Math.max(...max); i++) {
        sum += i;
    }
    return sum;
}

let sum = sumAll([1, 4]);