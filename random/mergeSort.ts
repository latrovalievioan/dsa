const merge = (xs: Number[], ys: Number[]) => {
    let xsI = 0;
    let ysI = 0;

    const merged: Number[] = [];

    while (xsI < xs.length && ysI < ys.length) {
        if (xs[xsI] <= ys[ysI]) {
            merged.push(xs[xsI])
            xsI++
        } else {
            merged.push(ys[ysI])
            ysI++
        }
    }

    if (xsI === xs.length) {
        merged.push(...ys.slice(ysI))
    } else if (ysI === ys.length) {
        merged.push(...xs.slice(xsI))
    }

    return merged
}

const mergeSort = (xs: Number[]) => {
    if(xs.length <= 1) return xs

    const mid = Math.floor(xs.length / 2);

    const left = xs.slice(0, mid)
    const right = xs.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([6,4,66,2]))
