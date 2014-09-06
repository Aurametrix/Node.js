function shellSort (a) {
    for (var h = a.length; h = parseInt(h / 2);) {
        for (var i = h; i < a.length; i++) {
            var k = a[i];
            for (var j = i; j >= h && k < a[j - h]; j -= h)
                a[j] = a[j - h];
            a[j] = k;
        }
    }
    return a;
}
 
// Shellsort is a generalization of insertion sort that allows the exchange of items that are far apart

var a = [];
var n = location.href.match(/\?(\d+)|$/)[1] || 10;
for (var i = 0; i < n; i++)
    a.push(parseInt(Math.random() * 100));
shellSort(a);
document.write(a.join(" "));

/*
another way to do shell sort:
function shellSort(a) {
    var gaps = createGaps(a),
        temp;
 
    for (var i = 0, j = gaps.length, gap; i < j; i += 1) {
        gap = gaps[i];
 
        for (var x = gap, y = a.length; x < y; x += 1) {
            temp = a[x];
 
            // insertion sort on subarrays
            for (var z = x; z >= gap && a[z - gap] > temp; z -= gap) {
                a[z] = a[z - gap];
            }
 
            a[z] = temp;
        }
    }
}
*/
