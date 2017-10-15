// JavaScript Document

/** 
   * Basic functions for changing display table #jQuerySelectors 
   
   functions:
     getRGB( ) alert window with fg,bg colors - used mainly for debugging 
	 myInvert( Element str ); invert text of element 
	 myHighlight( Element str, bg = "Yellow", border="3px solid lime" ); 
	 //set bg, and border of Element
	 halloween( Element tag ); HTML tag or event object to give Halloween theme
	 notHalloween( Element tag ); HtML tag or jQuery Event Object to clear Halloween theme		 

	@author Professor Tom DeDonno
	@date 9/2012, updated 10/2015
	Tested and working on Firefox 40 IE 11, and Chrome 45. 
	modified 9/30 for jsFiddle compatiblity altered function name to variable = function 
   */


/*  10/28/2016 Professor Tom DeDonno Modifications
   current version of DW cc 2016 and firefox didn't like seeing getRGB = function()
   they also wanted the use strict directive and single statements if bodies inside of { }
   also had to use triple === and !==, the triple match type and value */

function getRGB( ) {

"use strict";	
/* a ECMA 5.0 directive you must first declare variables */	   
	  alert( "body fg: " + $("body").css( "color" ) + 
	  " bg: " + $("body").css( "background-color" ) +
	  "\ntable#jQuerySelectors fg: " +
	  $( "table#jQuerySelectors" ).css( "color" ) + " bg: " +
	  $( "table#jQuerySelectors" ).css( "background-color" ) +
	  "\n#story1 fg: " +
	  $( "table#jQuerySelectors span#story1" ).css( "color" ) + " bg: "  +
	  $( "table#jQuerySelectors span#story1" ).css( "background-color" ) );
	  
	  //Note id uniquely identify an element on a Web Page
	  //Full path is more thorough, but prone to error
	  //Best practice ID is ID.
  }
  
  /* from http://jsfiddle.net/Mottie/xcqpF/1/light/  */
function rgb2Hex(rgb){
	"use strict";
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}
  
 	/** invert foreground and background color, 
	note body has set colors, browser will use defaults inside table */
 function myInvert( str ) {
		
		//element = $( "table#jQuerySelectors " + str );
		"use strict";        		
		var fg = $( str ).css( "color" );
		var bg = $( str ).css( "background-color" );
		
		/** nota bene, if the bg color is not specifically set,
		browser will set it to transparent,
		firefox sets it to keyword transparent,
		chrome uses rgba( 0, 0, 0, 0 ) with 0 for alpha; 
		in both cases I'm seting bg to white; note a transparent fg is invisible 
		browsers set fg to default black rgb( 0, 0, 0 ); */
						
	    if ( bg === 'transparent' ) { bg = "#ffffff"; }
	
		if( /^rgb/.test( fg ) ) {
			//alert( "fg is in rgb format" );
			fg = rgb2Hex( fg );
		}
		if( /^rgb/.test( bg ) ) { bg = rgb2Hex( bg ); }
			
		//set colors to defaults
		if ( fg === bg  ) { fg = "#000"; bg = "#fff"; }
		             
        $( str ).css( { "color" : bg ,  "background-color" : fg } );           
      }
	  
	  /**
	  	Sets background color to yellow */
		  
function myHighlight( str, rgb, border ) {
	 
	     "use strict";
	 	//chrome will not set defaults in formal parameters
		 if( rgb === undefined ) { rgb = "#ff0"; }
			
		 if( border === undefined ) { border = "3px solid lime";  }
		  
		  var bg = $( str ).css( "background-color" );
		    
		  //on browser an unset background is set to transparent		  
		  if( bg === 'transparent' || /^rgba/.test( bg ) )  {
			  $( str + ":first" ).css( "border-top", border );
			  $( str + ":last" ).css( "border-bottom", border ); 
			  $( str ).css( { "border-right": border, "border-left": border } );
			  $( str ).css( "background-color", rgb );
		  }
		  else {
			 //reset background to transparent, borders to none
		  	$( str + ":first" ).css( "border-top", "none" );
			$( str + ":last"  ).css( "border-bottom", "none" );
			$( str ).css( { "border-right":"none", "border-left":"none" } );
		  	$( str ).css( "background-color", "transparent" );
		  }
  }
 
function halloween( tag ) {
	  
	  //alert( "In halloween arg: " + tag + " typeof( arg ): " + typeof( tag ) );;
	  "use strict";
	  if( typeof(tag) === "object" ) {
	  	//we have an event object now what a pain
		tag = tag.data; //eventObject.data is the tag table
	  }
		
	  /* box-shadow: none|h-shadow v-shadow blur spread color |inset|initial|inherit; */
	  $(  tag ).css( { "color" : "orange", 
	                   "background-color" : "black",
	                   "box-shadow" : "5px 6px 5px 5px #aaaaaa" } );
					   /* border:  width style color */
	  $( "fieldset" ).css( "border", "3px dashed #ff0000" );
	  $( "legend" ).css( "border", "2px dotted #ff0000" );
	  
	  //we don't have to use the full path each time to the element id by definition are unique
	  //type=button or tag <button i'm using type=button
	  $("input#halloween").val( "not Halloween" );
	  
	  // clears onclick then sets click using jQuery bind event, eventData, event handler function
	  if( $("input#halloween" ).attr( "onClick" ) !== null )
	      { $("input#halloween").removeAttr('onClick').bind( "click", tag, notHalloween); }
	  else {
		  //alert( "onClick attribute is now null" );
		  $("input#halloween").unbind( "click" );
		  $("input#halloween").bind( "click", tag, notHalloween );
	  }
  }
  
function notHalloween( tag ) {
	  //alert( "in notHalloween tag:" + tag + "typeof( tag ) = " + typeof( tag ) );
	  "use strict";
	  if( typeof(tag) === "object" ) {	tag = tag.data; }
			
	  $( tag ).css( { "color" : "#000000",
	                  "background-color" : "#ffffff",
	                  "box-shadow" : "none" } );
					  
	  //in standard css comma selects both elements
	  $( "fieldset, legend" ).css( "border", "2px solid blue" );
	  
	  $("input#halloween").val( "Halloween" );
	  //note this "table" is now an eventObject
	  $("input#halloween").unbind( "click" );
	  $("input#halloween").bind( "click", tag, halloween );			  
  }

//can define event/event handlers here or at code in body
//best practice is here, but at body is okay but it should only be in one location.
/* $(document).ready( function() {
	
	$( "button#getRGB" ).click( getRGB );
} ); */