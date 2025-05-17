class TNode<T> {
    value: T;
    left: TNode<T> | undefined;
    right: TNode<T> | undefined;

    constructor(val: T) {
        this.value = val;
    }
}

class BSTree<T> {
    root: TNode<T> | undefined;

    push(val: T) {
        const newNode = new TNode(val);

        if (!this.root) {
            this.root = newNode;

            return;
        }

        let curr = this.root;

        for (; ;) {
            if (val < curr.value) {
                if (!curr.left) {
                    curr.left = newNode;

                    return;
                } else {
                    curr = curr.left;
                }
            } else if (val > curr.value) {
                if (!curr.right) {
                    curr.right = newNode;

                    return;
                } else {
                    curr = curr.right;
                }
            }
        }
    }

    show() {
        const curr = this.root;

        const q = [
            {
                it: curr,
                lvl: 0,
                offset: 50,
                hasLeft: Boolean(curr?.left),
                hasRight: Boolean(curr?.right),
            },
        ];

        const m = new Map<
            number,
            { val: T; offset: number; hasLeft: boolean; hasRight: boolean }[]
        >();

        while (q.length) {
            const curr = q.shift();

            if (curr?.it) {
                const lel = m.get(curr.lvl);
                if (lel) {
                    m.set(curr.lvl, [
                        ...lel,
                        {
                            val: curr.it.value,
                            offset: curr.offset,
                            hasLeft: curr.hasLeft,
                            hasRight: curr.hasRight,
                        },
                    ]);
                } else {
                    m.set(curr.lvl, [
                        {
                            val: curr.it.value,
                            offset: curr.offset,
                            hasLeft: curr.hasLeft,
                            hasRight: curr.hasRight,
                        },
                    ]);
                }

                q.push({
                    it: curr.it.left,
                    lvl: curr.lvl + 2,
                    offset: curr.offset - 2,
                    hasLeft: Boolean(curr.it.left?.left),
                    hasRight: Boolean(curr.it.left?.right),
                });
                q.push({
                    it: curr.it.right,
                    lvl: curr.lvl + 2,
                    offset: curr.offset + 2,
                    hasLeft: Boolean(curr.it.right?.left),
                    hasRight: Boolean(curr.it.right?.right),
                });
            }
        }

        for (const [_, xs] of m) {
            const valArr = new Array(100).fill(" ");
            const arrowArr = new Array(100).fill(" ");

            xs.forEach((x) => {
                valArr[x.offset] = String(x.val);
                if(x.hasLeft) {
                    arrowArr[x.offset - 1] = '/'
                }
                if(x.hasRight) {
                    arrowArr[x.offset + 1] = '\\'
                }
            });

            console.log(valArr.join(""));
            console.log(arrowArr.join(""));
        }
    }

    *[Symbol.iterator]() {
        const st = [this.root];

        while(st.length) {
            const curr = st.pop();

            if(curr?.right) {
                st.push(curr.right);
            }

            if(curr?.left) {
                st.push(curr.left);
            }

            yield curr?.value;
        }
    }
}

const tr = new BSTree<number>();

tr.push(4);
tr.push(3);
tr.push(6);
tr.push(2);
tr.push(5);
tr.push(7);
//
// console.log(tr.root)

// tr.show();
//
for(const x of tr) {
    console.log(x)
}
