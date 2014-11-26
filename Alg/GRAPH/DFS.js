"use strict";

define([], function () {

    return function () {

        var that = this;

        this.search = function (searchFor, node) {
            if (searchFor === node.getValue()) {
                return node;
            }
            var i, children = node.getChildren(), child, found;
            for (i = 0; i < children.length; i += 1) {
                child = children[i];
                found = that.search(searchFor, child);
                if (found) {
                    return found;
                }
            }
        };

    };

});
My Node class which represents a single node in the graph:

"use strict";

define([], function () {

    return function (theValue) {
        var value = theValue,
            children = [];

        this.addChild = function (theChild) {
            children.push(theChild);
        };
        
        // function to accept multiple children
        this.addChildren = function () {
            for (var i = 0; i < arguments.length; i++) {
                children.push(arguments[i]);
            }
        };

        this.hasChildren = function () {
            return children.length > 0;
        };

        this.getChildren = function () {
            return children;
        };

        this.getValue = function () {
            return value;
        };
    };

});

"use strict";

define(["DFS/Node", "DFS/Algorithm"], function (Node, Algorithm) {

    return function () {

        this.run = function () {
            var node1 = new Node(1),
                node2 = new Node(2),
                node3 = new Node(3),
                node4 = new Node(4),
                node5 = new Node(5),
                node6 = new Node(6),
                node7 = new Node(7),
                node8 = new Node(8),
                node9 = new Node(9),
                node10 = new Node(10),
                node11 = new Node(11),
                node12 = new Node(12),
                dfs = new Algorithm();

            node1.addChild(node2);
            node1.addChild(node7);
            node1.addChild(node8);

            node2.addChild(node3);
            node2.addChild(node6);

            node3.addChild(node4);
            node3.addChild(node5);

            node8.addChild(node9);
            node8.addChild(node12);

            node9.addChild(node10);
            node9.addChild(node11);

/* or use function accepting multiple nodes 
            node1.addChildren(node2, node7, node8);
            node2.addChildren(node3, node6);
            node3.addChildren(node4, node5);
            node8.addChildren(node9, node12);
            node9.addChildren(node10, node11);
*/
            console.log(dfs.search(5, node1));
        };

    };

});
