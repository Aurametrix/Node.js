// in-place radix sort
var nums = [35, 25, 53, 3, 102, 203, 230, 1005];
 
// Figure out the number of binary digits
var k = Math.max.apply(null, nums.map(function(i) {
    return Math.ceil(Math.log(i)/Math.log(2));
}));
 
for (var d = 0; d < k; ++d) {
    for (var i = 0, p = 0, b = 1 << d, n = nums.length; i < n; ++i) {
        var o = nums[i];
        if ((o & b) == 0) {
            // this number is a 0 for this digit
            // move it to the front of the list
            nums.splice(p++, 0, nums.splice(i, 1)[0]);
        }
    }
}

/*
for (var div = 1, radix = 16; div < 65536 * 65536; div *= radix) {
  var piles = [];

  for (var i = 0; i < a.length; ++i) {
    var p = Math.floor(a[i] / div) % radix;
    (piles[p] || (piles[p] = [])).push(a[i]);
  }

  for (var i = 0, ai = 0; i < piles.length; ++i) {
    if (!piles[i]) continue;
    for (var pi = 0; pi < piles[i].length; ++pi)
      a[ai++] = piles[i][pi];
  }
}
*/
