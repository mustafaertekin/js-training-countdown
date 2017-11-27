let min = 2 - 1;  // 01:59 is the strat point for 2 minutes, so give -1 for the minute
let sec = 60;

let loop = setInterval(function() {


    sec--;
    
    // if the sec = 0 , it means 1 minute is over, so min--
    if (sec == 0){
        sec = 60;
        min --;
    }

    // to make the view 01:05 instead of 1:5, we use padStart method with 2 digits parameter
    let minute = new String(min).padStart(2, "0");    
    let second = new String(sec).padStart(2, "0"); 

    // Output to DOM with string literals
    $("#main").html(`${minute} : ${second}`) 

    // cancal the time interval when the min & sec 0
    if (min == -1) {
        // at the and write "the end"
        clearInterval(loop);
            $("#main").html("The End");
    }
}, 1000);

