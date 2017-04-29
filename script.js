$(function() {
  // array of objects that have seat property and value pairs.
  var seatArray = [
    {number: "A1", status: "ava", who: ""},
    {number: "A2", status: "res", who: "Smelly Squirrel"},
    {number: "A3", status: "res", who: "Angry Squirrel"},
    {number: "B1", status: "ava", who: ""},
    {number: "B2", status: "ava", who: ""},
    {number: "B3", status: "ava", who: ""},
    {number: "C1", status: "ava", who: ""},
    {number: "C2", status: "ava", who: ""},
    {number: "C3", status: "ava", who: ""},
    {number: "D1", status: "ava", who: ""},
    {number: "D2", status: "ava", who: ""},
    {number: "D3", status: "ava", who: ""},
    {number: "E1", status: "ava", who: ""},
    {number: "E2", status: "res", who: "Big Hair Squirrel"},
    {number: "E3", status: "ava", who: ""},
    {number: "F1", status: "ava", who: ""},
    {number: "F2", status: "ava", who: ""},
    {number: "F3", status: "ava", who: ""},
    {number: "G1", status: "res", who: "Cool Squirrel"},
    {number: "G2", status: "ava", who: ""},
    {number: "G3", status: "ava", who: ""},
    {number: "H1", status: "ava", who: ""},
    {number: "H2", status: "ava", who: ""},
    {number: "H3", status: "ava", who: ""}
  ];

  // another array of just the seat numbers short to find the right id and direct to correct index in seatArray
  var seatIds = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3", "D1", "D2", "D3", "E1", "E2", "E3", "F1", "F2", "F3", "G1", "G2", "G3", "H1", "H2", "H3"];
  //array for seats the user has selected
  var selected = [];

  init();

  //Event handlers for seat selection and form submission
  $('.seat').on('click', seatClicker);
  $('#submit').on('click', submitter);
  $('#reserve').on('click', reserver);

  function reserver () {
    if (selected.length > 0) {
      $(this).attr('data-toggle', 'modal');
      $(this).attr('data-target', '#info');
    } else {
      $('#clickedSeats').text('Please select your seats first');
    }
  }

  function init () {
    //when page is loaded this loop assigns classes to each seat, populates info on each html tag
    for (var i = 0; i < seatArray.length; i++) {
    //it selects the value for the property for the current loop item, concatonates into an id to target html element
      $('#' + seatArray[i].number).addClass(seatArray[i].status).attr('title', seatArray[i].who);
    }
  }

  //when the seat class(the buttons) is clicked it will toggle class based on current status and change it.
  function seatClicker () {
    var id = $(this).attr('id');
    if ($(this).hasClass('ava')) {
      $(this).toggleClass('ava sel');
      seatArray[seatIds.indexOf(id)].status = "sel";
      selected.push(id);
    } else if ($(this).hasClass('sel')) {
      $(this).toggleClass('sel ava');
      seatArray[seatIds.indexOf(id)].status = "ava";
      selected.splice(selected.indexOf(id), 1);
    }
    $('#clickedSeats').text(selected.join(', '));
  }

  function submitter () {
    for (var i = 0; i < seatArray.length; i++) {
      if (seatArray[i].status === "sel"){
        seatArray[i].status = "res";
        seatArray[i].who = $('#fName').val() + ' ' + $('#lName').val();
        $('#' + seatArray[i].number).removeClass('sel').addClass(seatArray[i].status).attr('title', seatArray[i].who);
      }
    }
    selected = [];
    $('.form-control').val('');
    $('#clickedSeats').text('');
  }

});
