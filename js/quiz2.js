// write jQuery or vanilla javascript to do the following:
//  - x loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - x use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - x create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - x write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - x finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

$(document).ready(function($) {
	$("ul > li > a").on("click", function(e) {
		e.preventDefault();
		alert('you clicked a link, good for you');
	});
	console.log("this is a message for you!!!");

	$('ol > li').each(function(){
		$(this).css("color", "red");
		$(this).css("font-family" , "script");
	});

	$('#accordion').find('.toggle').click(function(){
		$(this).next().slideToggle('fast');
		$(".accordion-stuff").not($(this).next()).slideUp('fast');
	});

	$('.myJS').click(function(){
		var change = $(this);

		change.animate({height: '700px', opacity: '0.4', right: '250px'}, "slow");
        change.animate({width: '700px', opacity: '0.8'}, "fast");
        change.animate({height: '100px', opacity: '0.4'}, "fast");
        change.animate({width: '100px', opacity: '0.8', left: '250px'}, "slow");
	});
});

function fadeOut(){
	document.body.innerHTML = "Goodbye!";
	return true;
}

function coolJS(){
	window.confirm("Just kidding! I ran out of time so you get a pop up instead");
}

