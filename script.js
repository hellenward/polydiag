var userName = document.getElementById('userName');
var partner1 = document.getElementById('partner1Name');
var partner2 = document.getElementById('partner2Name');
var partner3 = document.getElementById('partner3Name');
var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function() {
  var storedUserName = userName.value;
  var partner1Name = partner1.value;
  var partner2Name = partner2.value;
  var partner3Name = partner3.value;
  alert('Hello ' + storedUserName + '! You are dating ' + partner1Name + ', ' +
  partner2Name + ', and ' + partner3Name);
});
