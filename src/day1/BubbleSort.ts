export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        let isSwapFlag = false;
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                isSwapFlag = true;
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        // If no swap, then the array is sorted.
        if (!isSwapFlag) {
            return;
        }
    }
}
