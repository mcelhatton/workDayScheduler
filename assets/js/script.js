var schedule = {
  hour8: '',
  hour9: '',
  hour10: '',
  hour11: '',
  hour12: '',
  hour13: '',
  hour14: '',
  hour15: '',
  hour16: '',
};

// save textarea function
$('.saveBtn').on('click', function handleClick(event){
  var saveButton = $(this).closest('div.time-block').attr('id');
  var textInput = $(this).siblings('.description').val();
  console.log(saveButton);
  console.log(textInput);

  switch (saveButton) {
    case 'hour8':
      localStorage.setItem('')
      console.log(schedule);
      //localStorage.setItem('hour8', hour8);
      break;
    case 'hour9':
      var value = saveSelector.siblings(textarea).val();
      hour9 = value;
      localStorage.setItem('hour9', hour9);
      break;
  }

});


// load schedule function
