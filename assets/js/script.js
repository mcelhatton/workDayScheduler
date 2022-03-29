var schedule = {
  hour8 : '',
  hour9: '',
  hour10: '',
  hour11: '',
  hour12: '',
  hour13: '',
  hour14: '',
  hour15: '',
  hour16: '',
};
var array = [
  {
  hour8 : 'meeting'
},
];
// save textarea function
$('.saveBtn').on('click', function handleClick(event){
  var saveButton = $(this).siblings('.description').attr('id');
  var textInput = $(this).siblings('.description').val().trim();

  localStorage.setItem(saveButton, textInput);
  console.log(saveButton);
  console.log(textInput);

});

// load schedule function
for (var i = 8; i < 18; i++) {
  $(`#hour${i}`).val(localStorage.getItem(`hour${i}`));
}

