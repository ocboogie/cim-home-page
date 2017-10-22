/**
  *
  Note callback anonymous functions can be impossible to follow
  but one advantage is you can put all code in a separate file
  
  good web page design should separate html(content), css and javascript into three separate files
  in the previous assignments we used the onclick attribute to specify javaScript calls,
  in this assignment we will put all javascript code into the .ready function
  
  Note JavaScript doesn't have forward  references, you cannot reference an elemetn that has not yet
  been read, to alleviate this we use the .ready event, the .ready event is invoked when entire
  HTML document has been read and is ready for rendering.
  
  @author Professor Tom DeDonno 12/2013
  @modified 10/2015, tested on Chrome 45 (known bug w beforeprint), IE 11, and FireFox 44.
  */

/**
all events associated with Web Page elements have to be inside the $(document).ready event
if they are not the system is not aware of their existence */

$(document).ready(function () {
	
	$(document).scroll(function(e) {
		console.log("scroll");
	});
	/** we can add these callback functions to ready event
	 or can have bind methods outside of  the ready event handler 
	  
	$( "#testMouseClick" ).bind( "click", eventHandler ); */
	"use strict";
	$("#themes").change(function (e) {
		//alert( "change themes" + e );
		var cssTheme = $("#themes").find(":selected").text() + ".css";
		$('link[rel=stylesheet]').remove(); //remove current <link> from DOM
		if (cssTheme === "default") { return; }

		//attach new DOM link to <head>
		$('head').append('<link rel="stylesheet" href="' + cssTheme + '" type="text/css" />');
		//alert( "new theme?" + cssTheme );
	});
	/** .testArea#mouse event handlers */

	var myHeight = $(".testArea#mouse").height(); //save height may need this later

	$("#testMouseClick").click(function () {
		$(".testArea#mouse").animate({ height: "200px" }, 3000);
	});

	$("#testMouseDoubleClicked").dblclick(function () {
		$(".testArea#mouse").animate({ height: myHeight }, 3000);
	});

	$("#testMouseEnter").mouseenter(function (e) {
		// alert( e.clientX );
		$(".testArea#mouse").html("Mouse entered X,Y: " + e.clientX + ", " + e.clientY);
	});


	function testHide() { /*alert( "test hide" );*/ $(".testArea#mouse").hide(); }

	$("#testHide").bind("click", testHide);

	function testShow() { $(".testArea#mouse").show(); }

	$("#testShow").bind("click", testShow);

	$("#testToggle").bind("click", function() {
		$(".testArea#mouse").toggle();
	});

	$("#disableHideShow").bind("click", function () {
		//alert( "cancel hide show" );
		//unbind both click events, disable buttons and rollover help
		if ($("#disableHideShow").val() === "Disable Hide and Show") {
			//alert( "in disableHideShow ->" + $( "#disableHideShow" ).val() + "<-" );
			$("#testHide, #testShow").unbind("click");
			$("#testHide,#testShow").attr("title", "no longer enabled");
			$("#testHide, #testShow").attr("disabled", "disabled");

			$(".testArea#mouse").show();
			$("#disableHideShow").val("Enable Hide and Show");
		} else {
			//alert( "else HideShow" );
			$("#testHide").bind("click", testHide);
			$("#testShow").bind("click", testShow);
			$("#testHide,#testShow").attr("title", "Enabled Again");
			$("#testHide, #testShow").removeAttr("disabled");
			$("#disableHideShow").val("Disable Hide and Show");
		}

	});

	/** .testArea#keyboard  event handlers */

	$("#testKeyDown").keydown(function (e) {
		//alert( "hello" );
		$("#testKeyDown").css("background-color", "yellow");
		var k = e.charCode || e.which; // K will be a value from 0..256 ASCII
		$(".testArea#keyboard").html("Holding key down: " + k);
	});

	$("#testKeyUp").keyup(function (e) {
		//alert( "hello" );
		$("#testKeyUp").css("background-color", "yellow");
		var k = e.charCode || e.which; // K will be a value from 0..256 ASCII
		$(".testArea#keyboard").html("Holding key down: " + k);
	});


	/** .testArea#document keyup */

	/* 
	$(window).unload( function( ) {
		alert( "Sure you want to leave close this tab" );
	} ); */

	$(window).bind("beforeprint", function () { alert("hello before print"); });

	/** .testArea#form event handlers */

	//capture the onSubmit event
	$("form#submitTest").submit(function (ev) {
		var response = confirm("On submit event has been raised\n" +
			"Should I toggle (hide/show) form test area?" +
			"It has the HTML contents:\n" +
			$(".testArea#form").html());
		if (response) { $(".testArea#form").toggle(); }
		ev.preventDefault(); //do not call default submit handler; <form action="js or url"
	});

	$("#testFormChange").change(function (e) {
		var conference = $("#testFormChange").find(":selected").text();
		var teams = [
			["PAC 12", "Ducks Rule", "Stanford Lucky", "USC bee again? use to bee",
				"UCLA is now a bee, used to be wanta bee"],
			["Big 10", "OSU way over-rate - what a joke scedule", "MSU no chance against stanford",
				"Penn is history like rest of big 10"],
			["Big 12", "Texas new coach has may not help", "Oklhoma", "TCU join big12 too late"],
			["SEC", "Alabama no coach no future", "Auburn way over-rated", "LSU afraid to play anyone but SEC"],
			["ACC", "Florida super chicken, have they ever played PAC12", "Clemson only two teams in this conference",
				"How is this a power conference?"]
		];

		//determine the matching conference has to be either "PAC 12",..."ACC"
		var i;
		for (i = 0; i < teams.length; ++i) {
			if (teams[i][0] === conference) { break; }
		}

		//clear change list box
		$(".testArea#form #change").empty();

		//note if you set  middle it automatically sets key to same as value
		for (var j = 1; j < teams[i].length; ++j) {
			$(".testArea#form #change").append("<option>" + teams[i][j] + "</option");
		}


		//alert( teams[i][1] );
	});

	/* write  code for #testFormBlur - you need to add the blur to .testArea blur select drop down
	Note column 4 has long descriptive IDs, testArea use class .testArea w shorter IDs - always be consistent */


}); //end of document.ready callback 
/* best practice
   always use ending comment on last brace for long blocks, it can be hard to follow */