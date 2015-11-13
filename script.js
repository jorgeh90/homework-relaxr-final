/*alert("Welcome to my Blog!")*/


/*--Function Definitions--*/


/*--Prevent Function--*/
document.getElementById("sign").addEventListener("click", 
	function(event){
    event.preventDefault()
});

/*--Ready--*/
$('#slide').hide();

$(document).ready(function(){
    $("button").click(function(){
        $("#slide").slideToggle();
    });
});

/*--Function--*/
/*--Post One--*/
$(document).ready(function () {
    $('.posttext').hide();

    $('.read_more').click(function (event) {
        event.preventDefault();
        $(this).parent().find('.posttext').slideToggle('medium');
        $(this).text($(this).text() == 'Read less >' ? 'Read more >' : 'Read less >');
    });
});

/*--Post Two--*/
$(document).ready(function () {
    $('.post_two').hide();

    $('#more_read2').click(function (event) {
        event.preventDefault();
        $(this).parent().find('.post_two').slideToggle('medium');
        $(this).text($(this).text() == 'Read less >' ? 'Read more >' : 'Read less >');
    });
});