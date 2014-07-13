function mergesort(a){
    if (a.length <=1) {
        return a;
        }
    var mid = Math.round((a.length/2));
    var left = a.slice(0, mid);
    var right = a.slice(mid);
    console.log(left,right);
    return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
    var sorted = [];
    console.log(sorted,left, right, left[0], right[0]);
    while (left && left.length >0 && right && right.length >0){
        if (left[0] <= right[0]) {
            sorted.push(left.shift());
            console.log("left", left, right);
        }
        else {
            sorted.push(right.shift());
            console.log("left", left, right);
        }
    }
    return sorted.concat(left,right);
}


a = [234,526,6,3,2,5];
mergesort(a);
