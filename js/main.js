var fgc = 0x000000;
var bgc = 0xffffff;
var first = true;
var z = -1;
var moveS = function(e) {
	//alert("init");
	fgc += 10000;
	bgc -= 10000;
	//reset
	
	var ss = document.styleSheets[0];
	if ("insertRule" in ss) {
		if (first) {
			first = false;
		} else {
			ss.deleteRule(0);
		}
		ss.insertRule('::selection {color: #'+fgc.toString(16)+
		'; background: #'+bgc.toString(16)+';}', 0);
	
	}

	console.log(bgc.toString(16));
	console.log(bgc);


	var x = e.pageX + 'px';
	var y = e.pageY + 'px';
	var $div = $('<div>').css({
		"position": "absolute",
		"left": x,
		"top": y,
		"background-color": "#bbbbbb",
		"width": "100px",
		"height": "100px",
		"float": "left",
		"padding": "5px",
		"z-index": z
	});
	$(document.body).append($div);
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


		});
				

