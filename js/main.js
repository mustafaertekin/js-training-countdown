let minToCountDown = 2;
let min = 2;
let sec = 60;

let loop = setInterval(function() {

    sec--;
    
    if (sec == 0){
        sec = 60;
        min --;
    }

    $("#main").html(`${min-1}:${sec}`) 

    if (min == 0 && sec == 0) {
        // at the and write "the end"
        if (minToCountDown < 0) {
            clearInterval(loop);
            $("#main").html("The End");
        }
    }
}, 1000);