$(document).ready(function() {
    //*****all code goes here
    const timeBlockArray = $(".time-block");

    // //create history hour-1 hour-2
    // let history = JSON.parse(localStorage.getItem("histroy")) || [];
    // $.each(timeBlockArray, (index, timeblock) => {
    //     $(timeblock).val(history[]);
    // });

    //show time current time - use momnet js
    $("#currentDay").text(moment().format('dddd, MMMM Do, h:mm:ss a'));

    //assign color to the appropraite timeblocks
    $.each(timeBlockArray, function(index, timeblock) {
        //get current hour
        const currentHour = moment().hours(); // Number
        //get hour data on block
        const hourBlock = $(timeblock).attr("data"); //Number
        //if current hour < data on block add past class
        console.log("currentHour:",currentHour);
        console.log("hourBlock:",hourBlock);
        if (currentHour > hourBlock) {
            console.log("hourBlock: past" );
            $(timeblock).addClass("past");
        }
        //if current hour > data on block add future class
        else if (currentHour < hourBlock) {
            console.log("hourBlock: future" );
            $(timeblock).addClass("future");
        }
        //otherwise add present class
        else {
            console.log("hourBlock: present" );
            $(timeblock).addClass("present");
        }
    });

    //add save button functionality
    $(".save-btn").on("click", function(event) {
        const targetParent = $(event.taget).parent(".time-block");
        const text = $(event.taget).siblings(".text-input");
        const dataId = $(targetParent).attr("data");


        //set local storage
        localStorage.setItem(`hour-${dataId}`, text);
    });

    //localstorage - get and set
});


// const createTimeblock = () => {
//     //create timeblock element
//     const timeblock = `

//     `;
// }