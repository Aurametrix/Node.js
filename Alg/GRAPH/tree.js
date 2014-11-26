var TreeNode = function (data) {
    this.parent = data.parent || null;
    this.children = data.children || [];
};
 
TreeNode.prototype.isLeaf = function () {
    return this.children.length == 0;
};
 
TreeNode.prototype.isRoot = function () {
    return this.parent == null;
};
