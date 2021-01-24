

let dropArea = document.getElementById('drop-area')

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




//FROM AWS -----------------------------------------------
// Most of this is copied from here: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-photo-album.html

var albumBucketName = "****";
var bucketRegion = "****";
var IdentityPoolId = "*****";

// This configures the SDK
AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

// This creates an AWS.S3 service object
var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: albumBucketName }
});


// Adding a photo to the given album name (this album name should already be in the S3 bucket)
function addPhoto(albumName) {
  var files = document.getElementById("drop-area").files;
  if (!files.length) {
    return alert("Please choose a file to upload first.");
  }
  var file = files[0];
  var fileName = file.name;
  var albumPhotosKey = encodeURIComponent(albumName) + "/";

  var photoKey = albumPhotosKey + fileName;

  // Use S3 ManagedUpload class as it supports multipart uploads
  var upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: albumBucketName,
      Key: photoKey,
      Body: file
    }
  });

  var promise = upload.promise();

  promise.then(
    function(data) {
      alert("Successfully uploaded photo.");
      // viewAlbum(albumName);
    },
    function(err) {
      return alert("There was an error uploading your photo: ", err.message);
    }
  );
}


// After clicking the 'sendBase64Btn', send photo to S3 bucket.
$(document).ready(function() {
  $("#sendBase64Btn").click(function(e) {
    e.preventDefault();
    addPhoto("UploadedImage");
  })
})
