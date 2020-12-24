$(document).ready(function() {
    //*****all code goes here
    const timeBlockArray = $(".time-block");

    //create history hour-1 hour-2
    let history = JSON.parse(localStorage.getItem("history")) || {};
    $.each(timeBlockArray, function(index, timeblock) {
        const dataId = $(timeblock).attr("data");
        if (history[`${dataId}`]) {
            const textInput = $(timeblock).find(".text-input");
            $(textInput).val(history[`${dataId}`]);
        }
    });

    //show time current time - use momnet js
    $("#currentDay").text(moment().format('dddd, MMMM Do, h:mm:ss a'));

    //assign color to the appropraite timeblocks
    $.each(timeBlockArray, function(index, timeblock) {
        //get current hour
        const currentHour = moment().hours(); // Number
        //get hour data on block
        const hourBlock = $(timeblock).attr("data"); //Number
        //if current hour < data on block add past class
        if (currentHour > hourBlock) {
            $(timeblock).addClass("past");
        }
        //if current hour > data on block add future class
        else if (currentHour < hourBlock) {
            $(timeblock).addClass("future");
        }
        //otherwise add present class
        else {
            $(timeblock).addClass("present");
        }
    });

    //add save button functionality
    $(".save-btn").on("click", function(event) {
        const text = $(event.target).siblings(".text-input").val();
        const dataId = $(event.target).parent().attr("data");

        //construct data for storage
        history[`${dataId}`] = text;

        //set local storage
        localStorage.setItem("history", JSON.stringify(history));
    });
});