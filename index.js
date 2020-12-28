// dropContainer.ondragover = dropContainer.ondragenter = function(event) {
//   event.preventDefault();
//   // var outputImg = document.getElementById('outputImg');
// 	// outputImg.src = URL.createObjectURL(event.target.files[0]);
// };
//
// dropContainer.ondrop = function(evt) {
//
//   var outputImg = document.getElementById('outputImg');
// 	outputImg.src = URL.createObjectURL(event.dataTransfer.files[0]);
//
//   evt.preventDefault();
// };

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
    //pass_values(); //Didn't work
    //process.stdout.write(resultBase64); //Didn't work
    // $(document).ready({
    //   $('sendBase64').click(function() {
    //     console.log("hello!");
    //   });
    // });

    //Setting the text to contain the converted base64
    var base64Text = document.getElementById("outputbase64");
    base64Text.innerHTML = resultBase64;

  }
}


//Function for when the user uploads the file via the 'Choose file' way
var loadFile = function(event) {
	var outputImg = document.getElementById('outputImg');
	outputImg.src = URL.createObjectURL(event.target.files[0]);

};



//Function to pass an argument to the phython file
//url:'http://127.0.0.1:5000/pass_val?value='+pass_to_python ,
// function pass_values() {
//    var pass_to_python = new Number(7)
//
//                 $.ajax(
//                 {
//                     type:'POST',
//                     contentType:'application/json;charset-utf-08',
//                     dataType:'json',
//                     url:'http://localhost:3000/pass_val?value='+pass_to_python ,
//                     success:function (data) {
//                         var reply=data.reply;
//                         if (reply=="success")
//                         {
//                             alert("success");
//                             return;
//                         }
//                         else
//                             {
//                             alert("some error ocured in session agent");
//                             }
//
//                     }
//                 }
//             );
// }

//Function to pass an argument to the phython file
// function pass_values() {
//    var pass_to_python = 7;
//
//    $(document).ready(function() {
//
//      // Load the script
//     var script = document.createElement("script");
//     script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
//     script.type = 'text/javascript';
//     document.getElementsByTagName("head")[0].appendChild(script);
//
//     //Preparing the URL
//     // var linked = $(this);
//     // console.log(linked);
//     // var hrefLinked = linked.attr('href');
//
//     // the jQuery stuff that we want to do
//     $.ajax(
//     {
//       data: pass_to_python,
//       type: 'POST',
//       url: './Processors/imageProcessing.py'
//     }
//     )
//     .done(function(data) {
//       if (data.error) {
//         console.log("Got error: ", text(data.error));
//       } else {
//         console.log("Success");
//       }
//     })
//
//
//    })();
//
// }

//Function to pass an argument to the phython file
// function pass_values() {
//    var pass_to_python = 7;
//
//    // Load the script
//   var script = document.createElement("script");
//   script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
//   script.type = 'text/javascript';
//   document.getElementsByTagName("head")[0].appendChild(script);
//
//   //Preparing the URL
//   // var linked = $(this);
//   // console.log(linked);
//   // var hrefLinked = linked.attr('href');
//
//   // the jQuery stuff that we want to do
//   $.ajax(
//   {
//     data: pass_to_python,
//     type: 'POST',
//     url: './Processors/imageProcessing.py'
//   }
//   )
//   .done(function(data) {
//     if (data.error) {
//       console.log("Got error: ", text(data.error));
//     } else {
//       console.log("Success");
//     }
//   })
//
// }
