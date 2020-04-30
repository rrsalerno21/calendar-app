$(document).ready(function() {
    // object to store all of our times in
    var timeStorage;

    // grab local storage
    var JSONgrab = JSON.parse(localStorage.getItem('times'));

    // if localStorage is empty...
    if (JSONgrab === null) {
        // set our default storage
        timeStorage = {

        };
    // or else...
    } else {
        // use what's in localStorage as our object for reference
        timeStorage = JSONgrab;
    };



    // function to grab today's date and time
    function getDate() {
        // return the day, date, year, and time
    }; 

    
    // function to update the UI with the time and display
    function renderUI(dateDetails) {
        // update the #today-time tag

        // go through each time box and change the background based on the time

        // update textarea value if there's somethign in local storage

    };

    // init function to call on screen load
    function init() {
        var date = getDate();

        renderUI(date);
    }


    // save button function to invoke on save button click
    function saveBtn() {
        // save 
    }

    // function to call renderUI when the time changes???  How to do that


    
    


});