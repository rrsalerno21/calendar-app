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
    // or else...
    } else {
        // use what's in localStorage as our object for reference
        timeStorage = JSONgrab;
    };

    
    // function to update the UI with the time and display
    function renderUI() {
        // update the #today-time tag
        $('#today-time').text(moment().format('dddd, MMMM Do, YYYY'));

        // go through each time input and change the background based on the time and the text area value
        var currentHour = moment().hour();

        $('.time-input').each(function() { 
            var timeInputHour = parseInt($(this)[0].getAttribute('data-hour'));
            
            // background colors
            if (timeInputHour < currentHour) {
                $(this).addClass('past-hour');
            } else if (timeInputHour === currentHour) {
                $(this).addClass('current-hour');
            } else {
                $(this).addClass('future-hour');
            };

             // text area       
            $(this)[0].value = timeStorage[timeInputHour];
        })
    };
    

    // init function to call on screen load
    function init() {
        renderUI();
    }


    // function to call renderUI when the time changes???  How to do that


    // event listener for save buttons
    $('.save-btn').on('click', function(event) {
        var selectedHour = $(this).parents()[1].children[1].children[0].getAttribute('data-hour');
        var selectedInput = $(this).parents()[1].children[1].children[0].value;

        // save that input to timeStorage
        timeStorage[selectedHour] = selectedInput;

        console.log(timeStorage);
        // set the localStorage item
        localStorage.setItem('times', JSON.stringify(timeStorage));
    });
    
    init();
});