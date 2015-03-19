var POINT_COUNT = 500;
var COLORS = new Array("rgb(255,0,0)", "rgb(255,69,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,0,255)", "rgb(255,0,255)");
var MAX_LOOP_COUNT = 15;

var points = new Array();
var means = new Array();
var distances = {}; 

function computeDistance(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

function cluster() {
    var converged = false;
    var dirty = false;
    var distance = 0.0;
    var curMinDistance = 0.0;
    var sumX = new Array();
    var sumY = new Array();
    var clusterSizes = new Array();
    var cluster = new Array();
    var loopCount = 0;

    while (!converged) {
        dirty = false;
        for (var i = 0; i < points.length; i = i + 1) {
            point = points[i];
            curMinDistance = distances[hash(point)];
            for (var j = 0; j < means.length; j = j + 1) {
                mean = means[j];
                distance = computeDistance(point, mean);
                if (distance < curMinDistance) {
                    dirty = true;
                    curMinDistance = distance;
                    point.cluster = j;
                }
            }
        }
        if (!dirty) {
            converged = true;
            break;
        }
        for (var i = 0; i < means.length; i = i + 1) {
            sumX[i] = 0;
            sumY[i] = 0;
            clusterSizes[i] = 0;
        }
        for (var i = 0; i < points.length; i = i + 1) {
            sumX[points.cluster] = sumX[points.cluster] + points.x;
            sumY[points.cluster] = sumY[points.cluster] + points.y;
            clusterSizes[points.cluster] = clusterSizes[points.cluster] + 1;
        }
        for (var i = 0; i < means.length; i = i + 1) {
            if (clusterSizes != 0) {
                means[i].x = sumX[i] / clusterSizes[i];
                means[i].y = sumY[i] / clusterSizes[i];
            } else {
                means.x = Math.floor(Math.random() * 320);
                means.y = Math.floor(Math.random() * 480);
            }
        }
        loopCount = loopCount + 1;
        if (loopCount > MAX_LOOP_COUNT) {
            converged = true;
        }
    }
}

function hash(booga) {
    if (booga == undefined) return undefined;
    return "point" + booga.x + "_" + booga.y;
}

function reset() {
    means = new Array();
    points = new Array();
    distances = {};
    clusterContents = new Array();
    for (var i = 0; i < COLORS.length; i = i + 1) {
        mean = {};
        mean.x = Math.floor(Math.random() * 320);
        mean.y = Math.floor(Math.random() * 480);
        means[i] = mean;
        clusterContents[i] = new Array();
    }
    for (var i = 0; i < POINT_COUNT; i = i + 1) {
        point = {};
        point.x = Math.floor(Math.random() * 320);
        point.y = Math.floor(Math.random() * 480);
        points[i] = point;
        distances[hash(point)] = 999999999999999999;
    }
}

function draw() {
    reset();
    var clusterStart = (new Date()).getTime();
    cluster();
    var clusterDuration = (new Date()).getTime() - clusterStart;

    var canvas = document.getElementById("kmeans");
    if (!canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    
    var mean;
    var curPoints;
    var point;
    var numCurPoints = 0;
    var i = 0;
    var j = 0;
    var start = (new Date()).getTime();
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, 0, 320, 480);
    for (j = 0; j < points.length; j = j + 1) {
        point = points[j];
        ctx.fillStyle = COLORS[point.cluster];
        ctx.fillRect(point.x, point.y, 1, 1);
    }
    var duration = (new Date()).getTime() - start;

    var div = document.getElementById("times");
    div.appendChild(document.createTextNode("" + duration + " " + clusterDuration));
}
Hide details
Change log
25359888f6ab by Dan Morrill <morrildl> on Jun 22, 2009   Diff
Fixing the divide by zero case in
JavaScript too.
Go to: 	
Project members, sign in to write a code review
Older revisions
 f2832a522d98 by Dan Morrill <morrildl> on May 23, 2009   Diff 
All revisions of this file
File info
Size: 3787 bytes, 123 lines
View raw file
