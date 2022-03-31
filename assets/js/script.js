
var timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').replaceWith(timeNow);

// save textarea to local storage function
$('.saveBtn').on('click', function handleClick(event){

  var saveButton = $(this).siblings('.description').attr('id');
  var textInput = $(this).siblings('.description').val().trim();

  localStorage.setItem(saveButton, textInput);

});

// load schedule from local storage loop and check time and set cSS
for (var i = 8; i < 18; i++) {
  $(`#hour${i}`).val(localStorage.getItem(`hour${i}`));
  var currentHour = moment().hour();
  if (i < currentHour) {
    $(`#${i}hour`).addClass('past');
  } else if (i === currentHour) {
    $(`#${i}hour`).addClass('present');
  } else if (i > currentHour) {
    $(`#${i}hour`).addClass('future');
  }
}

