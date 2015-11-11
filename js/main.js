var fgc = 0x000000;
var bgc = 0xffffff;

var first = true;
var z = 5;

var colorBG = function() {


	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	var w = window.innerWidth;
	var h = window.innerHeight;

	ctx.canvas.width = w;
	ctx.canvas.height = h;

	var numW = w / 20;
	var numH = h / 20;
	for (i = 0; i < numW; i++) {
		for (j = 0; j < numH; j++) {
			var x = i * 20;
			var y = j * 20;

			var dc = Math.floor(Math.random() * 0xdddddd) + 0x222222;
			var dc2 = dc + Math.floor(Math.random() * 0x333333);
			if (dc2 > 0xffffff) dc2 = 0xffffff;

			var dcolor = dc.toString(16);
			while (dcolor.length < 6) {
				dcolor = "0" + dcolor;
			}
			dcolor = "#" + dcolor;

			var dcolor2 = dc2.toString(16);
			while (dcolor2.length < 6) {
				dcolor2 = "0" + dcolor2;
			}
			dcolor2 = "#" + dcolor2;

			var grd = ctx.createLinearGradient(x,y,x + 20,y + 20);

			grd.addColorStop(0,dcolor);
			grd.addColorStop(1,dcolor2);
			ctx.fillStyle = grd;

			ctx.fillRect(x,y,x + 20, y + 20);


		}
	}
	
}
var moveS = function(e) {
	//alert("init");
	fgc += 10000;
	bgc -= 10000;
	//reset
	if (fgc >= 0xffffff) fgc = 0x000000;
	if (bgc <= 0x000000) bgc = 0xffffff;

	var ss = document.styleSheets[0];
	if ("insertRule" in ss) {
		if (first) {
			first = false;
		} else {
			ss.deleteRule(0);
		}
		ss.insertRule('::selection {color: #' + fgc.toString(16) +
				'; background: #' + bgc.toString(16) + ';}', 0);

	}

	//console.log(bgc.toString(16));
	//console.log(bgc);

	var dc = Math.floor(Math.random() * 0xcccccc);
	var dcolor = "#" + dc.toString(16);
	console.log(dcolor);

	var x = e.pageX + 'px';
	var y = e.pageY + 'px';
	var $div = $('<div>').css({
			"position": "absolute",
			"left": x,
			"top": y,
			"background-color": dcolor,
			"background-repeat": "no-repeat",
			"width": "20px",
			"height": "20px",
			"float": "left",
			"padding": "0px",
			"z-index": 10
			});
	$(document.body).append($div);
	var $cdiv = $('<div>').css({
			"float": "left",
			"background-image": "url('http://www.chaiwen.com/adoptchicken.gif')",
			"background-repeat": "no-repeat",
			"width": "25px",
			"height": "25px",
			"z-index": 20
	});
	$('#mainContainer').prepend($cdiv);

	console.log(x);
	console.log(y);
	z--;
}


function chicken(e) {
	$(document.body).unbind("mousemove", moveS);
	/*var selection;
	  if (window.getSelection) {
	  selection = window.getSelection();
	  } else if (document.selection) {
	  selection = document.selection.createRange();
	  }

	  selection.toString() != '' && alert('"' + selection.toString() +
	  '" was selected at ' + e.pageX + '/' + e.pageY);*/
}

function chicken2(e) {
	$(document.body).bind("mousemove", moveS);
	//var selection;
	//if (window.getSelection) {
	//	selection = window.getSelection();
	//} else if (document.selection) {
	//	selection = document.selection.createRange();
	//}

	//alert('lkjlkjk');


}



//document.ready
$(function(){
	$(document.body).bind('mousedown', chicken2);
	$(document.body).bind("mouseup", chicken);
	colorBG();
});
