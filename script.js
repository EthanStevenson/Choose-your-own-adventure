$(".start-button").click(function() {
    $(".start-button").hide();
    $(".first,choice1img,.village,.cave").show();
    
    $("body").css("background-image", "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/00f3ad63-982c-4e4c-aa1c-6db3e982cf3e/dexjjuy-04cec02e-040b-4549-9d79-9c33569d54bb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAwZjNhZDYzLTk4MmMtNGU0Yy1hYTFjLTZkYjNlOTgyY2YzZVwvZGV4amp1eS0wNGNlYzAyZS0wNDBiLTQ1NDktOWQ3OS05YzMzNTY5ZDU0YmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.E8hphMGjRWoOV9TIxSZTFdzhfAFw4gIWLKmfesunS9g')");
});

$(".village").click(function() {
    $(".page1").hide();
    $(".page2").show();
});

$(".cave").click(function() {
    $(".page1").hide();
});