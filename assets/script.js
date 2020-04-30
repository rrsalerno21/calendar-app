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

        // go through each time box and change the background based on the time and the text area value
        var currentHour = moment().hour();

        $('.time-box').each(function() { 
            var timeBoxHour = parseInt($(this)[0].dataset.hour);
            // background colors
            if (timeBoxHour < currentHour) {
                $(this).addClass('past-hour');
            } else if (timeBoxHour === currentHour) {
                $(this).addClass('current-hour');
            } else {
                $(this).addClass('future-hour');
            };

            // text area
            $(this).find('.time-input')[0].children[0].value = timeStorage[timeBoxHour];
        
        })
    };
    

    // init function to call on screen load
    function init() {
        renderUI();

    }


    // save button function to invoke on save button click
    function saveBtn() {
        // save all inputs to timeStorage

        // set the localStorage item
    }

    // function to call renderUI when the time changes???  How to do that


    
    init();


});