import Queue from "./Queue";

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = new Queue<BinaryNode<number> | null>();
    q.enqueue(head);

    while (q.length > 0) {
        const curr = q.deque() as BinaryNode<number> | null | undefined;

        if (!curr) {
            continue;
        }

        // search
        if (curr.value === needle) {
            return true;
        }

        q.enqueue(curr.left);
        q.enqueue(curr.right);
    }

    return false;
}

// export default function bfs(head: BinaryNode<number>, needle: number): boolean {
//     const q: (BinaryNode<number> | null)[] = [head];

//     while (q.length > 0) {
//         const curr = q.shift() as BinaryNode<number> | null | undefined;

//         if (!curr) {
//             continue;
//         }

//         // search
//         if (curr.value === needle) {
//             return true;
//         }

//         q.push(curr.left);
//         q.push(curr.right);
//     }

//     return false;
// }
