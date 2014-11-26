function visitBfs(node, func) {
    var q = [node];
    while (q.length > 0) {
        node = q.shift();
        if (func) {
            func(node);
        }
 
        _.each(node.children, function (child) {
            q.push(child);
        });
    }
}
