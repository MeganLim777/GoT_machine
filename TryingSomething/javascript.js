
var writeBtn = document.getElementById('writeFileBtn');
var readBtn = document.getElementById('readFileBtn');


writeBtn.addEventListener('click', function(event) {
  console.log("Tyring to write");
});


readBtn.addEventListener('click', function(event) {
  console.log("hey");

  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
  }

  xmlhttp.open("GET","fileToRead.txt",false);
  xmlhttp.send();
  xmlDoc=xmlhttp.responseText;

  console.log(xmlDoc);
});

console.log("javascript is working");
