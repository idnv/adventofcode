var startCoordinate1 = [0, 0];
var startCoordinate2 = [0, 0];
var strPath1 = "R997,D99,R514,D639,L438,D381,L251,U78,L442,D860,R271,U440,L428,U482,R526,U495,R361,D103,R610,D64,L978,U587,L426,D614,R497,D116,R252,U235,R275,D882,L480,D859,L598,D751,R588,D281,R118,U173,L619,D747,R994,U720,L182,U952,L49,D969,R34,D190,L974,U153,L821,U593,L571,U111,L134,U111,R128,D924,R189,U811,R100,D482,L708,D717,L844,U695,R277,D81,L107,U831,L77,U609,L629,D953,R491,D17,R160,U468,R519,D41,R625,D501,R106,D500,R473,D244,R471,U252,R440,U326,R710,D645,L190,D670,L624,D37,L46,D242,L513,D179,R192,D100,R637,U622,R322,U548,L192,D85,L319,D717,L254,D742,L756,D624,L291,D663,R994,U875,R237,U304,R40,D399,R407,D124,R157,D415,L405,U560,R607,U391,R409,U233,R305,U346,L233,U661,R213,D56,L558,U386,R830,D23,L75,D947,L511,D41,R927,U856,L229,D20,L717,D830,R584,U485,R536,U531,R946,U942,R207,D237,L762,U333,L979,U29,R635,D386,R267,D260,R484,U887,R568,D451,R149,U92,L379,D170,R135,U799,L617,D380,L872,U868,R48,U279,R817,U572,L728,D792,R833,U788,L940,D306,R230,D570,L137,U419,L429,D525,L730,U333,L76,D435,R885,U811,L937,D320,R152,U906,L461,U227,L118,U951,R912,D765,L638,U856,L193,D615,L347,U303,R317,U23,L139,U6,L525,U308,L624,U998,R753,D901,R556,U428,L224,U953,R804,D632,L764,U808,L487,U110,L593,D747,L659,D966,R988,U217,L657,U615,L425,D626,L194,D802,L440,U209,L28,U110,L564,D47,R698,D938,R13,U39,R703,D866,L422,D855,R535,D964,L813,D405,R116,U762,R974,U568,R934,U574,R462,D968,R331,U298,R994,U895,L204,D329,R982,D83,L301,D197,L36,U329,R144,U497,R300,D551,L74,U737,R591,U374,R815,U771,L681";
var strPath2 = "L997,D154,R652,U379,L739,U698,R596,D862,L125,D181,R786,U114,R536,U936,L144,U936,R52,U899,R88,D263,R122,D987,L488,U303,R142,D556,L691,D769,L717,D445,R802,U294,L468,D13,R301,D651,L242,D767,R465,D360,L144,D236,R59,U815,R598,U375,R645,U905,L714,U440,R932,D160,L420,U361,L433,D485,L276,U458,R760,D895,R999,U263,R530,U691,L918,D790,L150,U574,R800,U163,R478,U112,L353,U30,L763,U239,L353,U619,R669,D822,R688,U484,L678,D88,R946,D371,L209,D175,R771,D85,R430,U16,R610,D326,R836,U638,L387,D996,L758,U237,L476,U572,L456,U579,L457,D277,L825,U204,R277,U267,L477,D573,L659,D163,L516,D783,R762,U146,L387,U700,R911,U335,L115,D887,R677,U312,R707,U463,L743,U358,L715,D603,R966,U21,L857,D680,R182,D977,L279,U196,R355,D624,L434,U410,R385,U47,L999,D542,L453,D735,R781,U115,R814,U110,R344,D139,R899,D650,L118,D774,L227,D140,L198,D478,R115,D863,R776,D935,R473,U722,R555,U528,L912,U268,R776,D223,L302,D878,R90,U52,L595,U898,L210,U886,R161,D794,L846,U404,R323,U616,R559,U510,R116,D740,L554,U231,R54,D328,L56,U750,R347,U376,L148,U454,L577,U61,L772,D862,R293,U82,L676,D508,L53,D860,L974,U733,R266,D323,L75,U218,L390,U757,L32,D455,R34,D363,L336,D67,R222,D977,L809,D909,L501,U483,L541,U923,R97,D437,L296,D941,L652,D144,L183,U369,L629,U535,L825,D26,R916,U131,R753,U383,L653,U631,R280,U500,L516,U959,R858,D830,R357,D87,R885,D389,L838,U550,R262,D529,R34,U20,L25,D553,L884,U806,L800,D988,R499,D360,R435,U381,R920,D691,R373,U714,L797,D677,L490,D976,L734,D585,L384,D352,R54,D23,R339,D439,L939,U104,L651,D927,L152";
var arrPath1 = strPath1.split(",");
var arrPath2 = strPath2.split(",");

//ex1
var path1 = calcPath(startCoordinate1, arrPath1);
var path2 = calcPath(startCoordinate2, arrPath2);
var arrCollides = new Array();
var i, j;
for (i = 1; i < path1.length; i++) {
    for (j = 1; j < path2.length; j++) {
        var collidePoint = hasCollide(path1[i - 1], path1[i], path2[j - 1], path2[j]);
        if (collidePoint != -1)
            arrCollides.push(collidePoint);
        }
    }
    
  var collide;
  var manhattanDistances = new Array();
  var arrSum = new Array();
  for(collide of arrCollides){
		var calc = calcManhattanDistance(collide[0], collide[1],startCoordinate1[0],startCoordinate1[0]);
        manhattanDistances.push(calc);
        arrSum.push(collide[2] + collide[3]);

  }
	//ans ex 1
    console.log("Ans ex1 is: " + Math.min.apply(Math, manhattanDistances));

	//ans ex2   
     console.log("Ans ex2 is: " + Math.min.apply(Math, arrSum));
     arrSum.sort(function(a, b){return a-b});

    
    function calcManhattanDistance(x1, y1, x2, y2) {
    	return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    };
    
    function calcPath(startCoordinate, directions) {
    	var totalDistance = 0;
    	var xAxis = startCoordinate[0];
    	var yAxis = startCoordinate[1];
    	var path = new Array([xAxis, yAxis, totalDistance]);
    	var direction, i;

    	for (i = 0; i < directions.length; i++) {
        	direction = directions[i];
        	var distance = Number(direction.slice(1));
        	if (distance == NaN)
            	return false;
        	switch (direction[0]) {
            	case "R":
            		xAxis += distance;
                    totalDistance += distance;
            		path.push([xAxis, yAxis,totalDistance]);
            		break;
            	case "L":
                    xAxis -= distance;
            		totalDistance += distance;
            		path.push([xAxis, yAxis,totalDistance]);
            		break;
            	case "U":
            		yAxis += distance;
            		totalDistance += distance;
            		path.push([xAxis, yAxis,totalDistance]);
            		break;
            	case "D":
            		yAxis -= distance;
            		totalDistance += distance;
            		path.push([xAxis, yAxis,totalDistance]);
            		break;
            	default:
            		return NaN;
                }
            }
            return path;
        };

        function hasCollide(startPoint1, endPoint1, startPoint2, endPoint2) {
            if ((startPoint1[0] == endPoint1[0]) && (startPoint2[0] != endPoint2[0])) {
                var lowX = Math.min(startPoint2[0], endPoint2[0]);
                var maxX = Math.max(startPoint2[0], endPoint2[0]);
                var lowY = Math.min(startPoint1[1], endPoint1[1]);
                var maxY = Math.max(startPoint1[1], endPoint1[1]);
                if ((startPoint1[0] > lowX && startPoint1[0] < maxX) && (startPoint2[1] > lowY && startPoint2[1] < maxY)) {
                    return [startPoint1[0], startPoint2[1], Math.abs(startPoint2[1] - startPoint1[1]) + startPoint1[2], Math.abs(startPoint1[0] - startPoint2[0]) + startPoint2[2]];
                }
            }
            if ((startPoint1[1] == endPoint1[1]) && (startPoint2[1] != endPoint2[1])) {
                var lowX = Math.min(startPoint1[0], endPoint1[0]);
                var maxX = Math.max(startPoint1[0], endPoint1[0]);
                var lowY = Math.min(startPoint2[1], endPoint2[1]);
                var maxY = Math.max(startPoint2[1], endPoint2[1]);

                if ((startPoint2[0] > lowX && startPoint2[0] < maxX) && (startPoint1[1] > lowY && startPoint1[1] < maxY)) {
                    return [startPoint2[0], startPoint1[1],Math.abs(startPoint2[0] - startPoint1[0]) + startPoint1[2],  Math.abs(startPoint2[1] - startPoint1[1]) + startPoint2[2]];
                }
            }
            return -1;
    };
