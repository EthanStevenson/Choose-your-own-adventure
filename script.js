$(".start-button").click(function() {
    $(".start-button").hide();
    $(".first,.choice1img,.village,.cave,.villages,.caves").show();

    $("body").css("background-image", "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/00f3ad63-982c-4e4c-aa1c-6db3e982cf3e/dexjjuy-04cec02e-040b-4549-9d79-9c33569d54bb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAwZjNhZDYzLTk4MmMtNGU0Yy1hYTFjLTZkYjNlOTgyY2YzZVwvZGV4amp1eS0wNGNlYzAyZS0wNDBiLTQ1NDktOWQ3OS05YzMzNTY5ZDU0YmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.E8hphMGjRWoOV9TIxSZTFdzhfAFw4gIWLKmfesunS9g')");
});

$(".villages").click(function() {
    $(".page1").hide();
    $(".page2").show();
    $(".choices2").show();
});

$(".caves").click(function() {
    $(".page1").hide();
    $(".page3,.options3").show();
});

$(".iron").click(function() {
    $(".page2").hide();
    $(".ending1").show();
});

$(".house").click(function() {
    $(".page2").hide();
    $(".ending2,.sad").show();
});

$(".deep").click(function() {
    $(".page3").hide();
    $(".ending3,.pickaxe").show();
});

$(".shaft").click(function() {
    $(".page3").hide();
    $(".ending4,.diamonds").show();
});
