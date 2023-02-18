

$(".sign-up").click(function () {
    $(".verification-message").css("display","block");
    setTimeout(function() { 
        $(".verification-message").css("display","none");
    }, 2000);
});