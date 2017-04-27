$(function() {
  // array of objects that have seat property and value pairs.
  var seatArray = [
    {number: "a1", status: "ava", who: ""},
    {number: "a2", status: "res", who: "Smelly Squirrel"},
    {number: "a3", status: "res", who: "Drunk Squirrel"},
    {number: "b1", status: "ava", who: ""},
    {number: "b2", status: "ava", who: ""},
    {number: "b3", status: "ava", who: ""},
    {number: "c1", status: "ava", who: ""},
    {number: "c2", status: "ava", who: ""},
    {number: "c3", status: "ava", who: ""},
    {number: "d1", status: "ava", who: ""},
    {number: "d2", status: "ava", who: ""},
    {number: "d3", status: "ava", who: ""},
    {number: "e1", status: "ava", who: ""},
    {number: "e2", status: "res", who: "Big Hair Squirrel"},
    {number: "e3", status: "ava", who: ""},
    {number: "f1", status: "ava", who: ""},
    {number: "f2", status: "ava", who: ""},
    {number: "f3", status: "ava", who: ""},
    {number: "g1", status: "res", who: "Sexy Squirrel"},
    {number: "g2", status: "ava", who: ""},
    {number: "g3", status: "ava", who: ""},
    {number: "h1", status: "ava", who: ""},
    {number: "h2", status: "ava", who: ""},
    {number: "h3", status: "ava", who: ""}
  ];
  // another array of just the seat numbers short to find the right id and direct to correct index in seatArray
  var seatIds = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3", "d1", "d2", "d3", "e1", "e2", "e3", "f1", "f2", "f3", "g1", "g2", "g3", "h1", "h2", "h3"];
  var selected = [];
  //when page is loaded this loop assigns classes to each seat, populates info on each html tag
  for (var i = 0; i < seatArray.length; i++) {
  //it selects the value for the property for the current loop item, concatonates into an id to target html element
    $('#' + seatArray[i].number).addClass(seatArray[i].status).attr('title', seatArray[i].who);
  }
  //when the seat class(the buttons) is clicked it will toggle class based on current status and change it.
  $('.seat').on('click', function() {
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
      var displayArray = [];
      selected.forEach(function(item) {
        displayArray.push(item[0].toUpperCase() + item[1]);
      });
    $('#clickedSeats').text(displayArray.join(', '));
  });

  $('#submit').on('click', function() {
    for (var i = 0; i < seatArray.length; i++) {
      if (seatArray[i].status === "sel"){
        seatArray[i].status = "res";
        seatArray[i].who = $('#fName').val() + ' ' + $('#lName').val();
        $('#' + seatArray[i].number).removeClass('sel').addClass(seatArray[i].status).attr('title', seatArray[i].who);
        $('.form-control').val('');
        $('#clickedSeats').text('');
      }
    }
  });
});
