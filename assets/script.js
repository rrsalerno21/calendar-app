// Ready document before executing script
$(document).ready(function() {
    // object to store all of our times in
    var timeStorage;

    // grab local storage
    var JSONgrab = JSON.parse(localStorage.getItem('times'));

    // if localStorage is empty...
    if (JSONgrab === null) {
        // set our default storage
        timeStorage = {
            7: '', 8: '', 9: '', 10: '', 11: '',
            12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: ''
        };
    // else...
    } else {
        // use what's in localStorage as our object for reference
        timeStorage = JSONgrab;
    };

    
    // function to update the UI with the time and display
    function renderUI() {
        // update the #today-time tag
        $('#today-time').text(moment().format('dddd, MMMM Do, YYYY'));

        // set a variable to reference the current hour
        var currentHour = moment().hour();

        // go through each time input and change the background based on the time and the text area value
        $('.time-input').each(function() { 
            var timeInputHour = parseInt($(this)[0].getAttribute('data-hour'));
            
            // set the background colors
            if (timeInputHour < currentHour) {
                $(this).addClass('past-hour');
            } else if (timeInputHour === currentHour) {
                $(this).addClass('current-hour');
            } else {
                $(this).addClass('future-hour');
            };

             // set the text area value from what's in timeStorage       
            $(this)[0].value = timeStorage[timeInputHour];
        })
    };
    

    // init function to call on screen load
    function init() {
        renderUI();
    }

    // event listener for save buttons
    $('.save-btn').on('click', function(event) {
        // set variables for which hour and input value is associated with the save button that was clicked
        var selectedHour = $(this).parents()[1].children[1].children[0].getAttribute('data-hour');
        var selectedInput = $(this).parents()[1].children[1].children[0].value;

        // save that input to timeStorage based on the corresponding hour
        timeStorage[selectedHour] = selectedInput;

        // set the localStorage item
        localStorage.setItem('times', JSON.stringify(timeStorage));


        // determine what part of the day it is (AM or PM)
        var timeOfDay, displayHour;
        if (selectedHour < 12) {
            timeOfDay = 'AM';
            displayHour = selectedHour;
        } else {
            timeOfDay = 'PM';
            displayHour = selectedHour - 12;
        };

        // display successful save message
        $('#save-message').text(`Calendar Saved for ${displayHour} ${timeOfDay}`);
        $('#save-message').fadeIn();
        // remove saved message
        var interval, timer = 1;
        interval = setInterval(function(){
            timer--;

            if (timer === 0) {
                $('#save-message').fadeOut();
            }
        }, 1000)
    });
    
    // call our init function to render the UI upon document load
    init();
});