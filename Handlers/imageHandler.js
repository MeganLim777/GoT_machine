
let dropArea = document.getElementById('drop-area')

// dropArea.addEventListener('dragenter', handlerFunction, false)
// dropArea.addEventListener('dragleave', handlerFunction, false)
// dropArea.addEventListener('dragover', handlerFunction, false)
// dropArea.addEventListener('drop', handlerFunction, false)

//This prevents the default stuff from happening for each of the events:
//dragenter, dragover, dragleave and drop.
//The default stuff is the browser opening the actual image instead of allowing
//the image to be dropped.
//We are also adding each of these events to as listeners to the dropArea
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false)
})

//Function that will turn off the default action of the given event
function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}


dropArea.addEventListener('drop', handleDrop, false)

//This function gets the data of the files that were dropped
//And calls the handleDraggedFiles function which the <input> also calls if the files were uploaded via 'Choose file' instead
function handleDrop(e) {
  let dt = e.dataTransfer
  let files = dt.files

  handleDraggedFiles(files)
}

//Convert all the given files into one array
//For each file in the array, execute the uploadFile() method
function handleDraggedFiles(files) {
  ([...files]).forEach(uploadFile)
}

//The function which displays the given file in the output image
function uploadFile(file) {
  //This is the previous working version:
  var outputImg = document.getElementById('outputImg');
	outputImg.src = URL.createObjectURL(file);
  console.log("hey");
  console.log(file);

  //This is trying to get the FileReader to read the file into
  //hopefully some data and then send this data to the imageProcessing.py
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function() {
    let resultBase64 = reader.result;
    console.log(resultBase64); //This DOES work!!!

    //Setting the attribute of the input to contain the converted base64
    var base64Text = document.getElementById("outputbase64");
    base64Text.setAttribute("base64ToSend", resultBase64)

    //Informing the user that the image has just been converted to base64
    base64Text.innerHTML = "Just converted the image into base64";

    //Enabling the 'Send base64' button
    var sendBase64Btn = document.getElementById("sendBase64Btn");
    sendBase64Btn.disabled = false;

  }
}


//Function for when the user uploads the file via the 'Choose file' way
var loadFile = function(event) {
	var outputImg = document.getElementById('outputImg');
	outputImg.src = URL.createObjectURL(event.target.files[0]);

};
