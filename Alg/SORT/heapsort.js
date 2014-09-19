function heapSort(intl)
{
    var l   = intl.length,
        end = l - 1,
        swap;
    intl = _heapify(intl,l);

    while(end>0)
    {
        swap      = intl[0];
        intl[0]   = intl[end];
        intl[end] = swap;
        --end;
        intl = _siftDown(intl, 0, end);
    }

    return intl;
}


function _heapify(intl, l)
{
    // NOT var start = (l - 2) / 2;
    var start = Math.floor( ( l - 2 ) / 2 );
    
    while(start >= 0)
    {
        intl = _siftDown(intl, start, l-1);
        --start;
    }
    return intl;
}

function _siftDown(intl, start, end)
{
    var root = start,
        child, swap, swapr;
    while(root*2+1 <= end)
    {
        child = root * 2 + 1;
        // swap = root;
        swapr      = intl[root];  // <-- Here swapr instead of swap
        intl[root] = intl[swap];

        if(intl[swap] < intl[child])
            swap = child;
        if(child+1 <= end && intl[swap]<intl[child+1])
            swap = child + 1;
        if(swap!=root)
        {
            swap       = intl[root];
            intl[root] = intl[swap];
            // intl[swap] = swap;
            // root       = swap;
            intl[swap] = swapr;       // <-- Here swapr instead of the 1st occurrence of swap
            root       = swapr;       // <-- Here swapr instead of swap
        }else
        {
            return intl;
        }
    }
    return intl;
}




x =
[24,5,896,624,437,5,6,4,37,45,654];
y =
["a","b","r","s","t","e","q","u","q"];

console.log(heapSort(x),"\n",heapSort(y));
