$(document).ready(function() {
    console.log("%cCode Test by James Ferguson", "background-color:gainsboro; font-size:15px; color: dodgerblue;");

    $(".buttons").on("click", function() {
        console.log("css is the best");
    });
    $("#submitbutton").on("click", function() {
        console.log("submit button has been pressed");
    });

});
