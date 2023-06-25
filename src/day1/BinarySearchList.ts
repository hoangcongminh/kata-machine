export default function bs_list(haystack: number[], needle: number): boolean {
    var lo = 0;
    var hi = haystack.length - 1;

    while (lo <= hi) {
        const middle = Math.floor(lo + (hi - lo) / 2);
        const value = haystack[middle];

        if (value == needle) {
            return true;
        } else if (value < needle) {
            lo = middle + 1;
        } else {
            hi = middle - 1;
        }
    }

    return false;
}

//case take (lo, hi]
// export default function bs_list(haystack: number[], needle: number): boolean {
//     var lo = 0;
//     var hi = haystack.length;

//     do {
//         const middle = Math.floor(lo + (hi - lo) / 2);
//         const value = haystack[middle];

//         if (value == needle) {
//             return true;
//         } else if (value < needle) {
//             lo = middle + 1;
//         } else {
//             hi = middle;
//         }
//     } while (lo < hi);

//     return false;
// }
