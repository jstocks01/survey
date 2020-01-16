$(document).ready(function(){
// $( "#target" ).click(function() {
//   alert( "why did you click that?" );
  var quest = (confirm("Will you take our survey?"));

  if (quest) {
    alert('please continue');
  } else {
    alert('get out');
  }
event.preventDefault();
});