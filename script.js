$(document).ready(function () {

    $("#btn").click(function () {
        $("#result").html("Nice to meet you! 😊").css({
            "color": "green",
            "font-weight": "bold",
            "margin-top": "10px"
        });
    });

    // Name color animation
    setInterval(() => {
        $("#name").toggleClass("highlight");
    }, 700);

});
