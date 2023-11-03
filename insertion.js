function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];

        while (i > 0 && arr[i - 1] > current) {
            arr[i] = arr[i - 1];
            i = i - 1;
        }
        arr[i] = current;
    }
    return arr;
}

module.exports = insertionSort;
