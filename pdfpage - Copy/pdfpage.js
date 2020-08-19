function readURL1(input) {
    if (input.files && input.files[0]) {
      alert('hello');
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('#wrap1').hide();
  
        $('.file-upload-image').attr('src', e.target.result);
        $('#file-content1').show();
  
        $('#imgtitle1').html(input.files[0].name);
        console.log(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removeUpload1();
    }
  }
  function readURL2(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('#wrap2').hide();
  
        //$('.file-upload-image').attr('src', e.target.result);
        $('#file-content2').show();
  
        $('#imgtitle2').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removeUpload2();
    }
  }
  function readURL3(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('#wrap3').hide();
  
        //$('.file-upload-image').attr('src', e.target.result);
        $('#file-content3').show();
  
        $('#imgtitle3').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removeUpload3();
    }
  }
  
  function removeUpload1() {

    var statusBadge = document.getElementById('status-danger-badge1');
    statusBadge.innerHTML = 'No File Attached';
    statusBadge.className = 'badge badge-pill badge-danger';
    
    $('#file-upload-input-doc1').replaceWith($('#file-upload-input-doc1').clone());
    $('#file-content1').hide();
    $('#wrap1').show();
    
  }
  function removeUpload2() {

    var statusBadge = document.getElementById('status-danger-badge2');
    statusBadge.innerHTML = 'No File Attached';
    statusBadge.className = 'badge badge-pill badge-danger';
    
    $('#file-upload-input-doc2').replaceWith($('#file-upload-input-doc3').clone());
    $('#file-content2').hide();
    $('#wrap2').show();
    
  }
  function removeUpload3() {

    var statusBadge = document.getElementById('status-danger-badge3');
    statusBadge.innerHTML = 'No File Attached';
    statusBadge.className = 'badge badge-pill badge-danger';
    
    $('#file-upload-input-doc3').replaceWith($('#file-upload-input-doc3').clone());
    $('#file-content3').hide();
    $('#wrap3').show();
    
  }
  $('#wrap1').bind('dragover', function () {
          $('#wrap1').addClass('image-dropping');
      });
      $('#wrap1').bind('dragleave', function () {
          $('#wrap1').removeClass('image-dropping');
  });
  $('#wrap2').bind('dragover', function () {
    $('#wrap2').addClass('image-dropping');
});
$('#wrap2').bind('dragleave', function () {
    $('#wrap2').removeClass('image-dropping');
});
$('#wrap3').bind('dragover', function () {
  $('#wrap3').addClass('image-dropping');
});
$('#wrap3').bind('dragleave', function () {
  $('#wrap3').removeClass('image-dropping');
});
  /*
  $('input[type="file"]').change(function(){ 
    console.log($(this).length);
    if ($(this).length == 0) {
      $("##status-badge").text("Not uploaded");
    } 
    else {
      $("#status-badge").text("File is added!"); 
    }
  }); 
*/
function checkFileUploadDoc1(){
  //var fileInput = document.getElementById('file-upload-input-doc1');
  //var statusBadge = document.getElementById('status-danger-badge1');
  changeBadge('file-upload-input-doc1','status-danger-badge1');
  
}
function checkFileUploadDoc2(){
  //var fileInput = document.getElementById('file-upload-input-doc2');
  //var statusBadge = document.getElementById('status-danger-badge2');
  changeBadge('file-upload-input-doc2','status-danger-badge2');
}
function checkFileUploadDoc3(){
  //var fileInput = document.getElementById('file-upload-input-doc3');
  //var statusBadge = document.getElementById('status-danger-badge3');
  changeBadge('file-upload-input-doc3','status-danger-badge3');
  
}
function changeBadge(s1,s2){
  var fileInput = document.getElementById(s1);
  console.log(fileInput);
  var statusBadge = document.getElementById(s2);
  console.log(statusBadge);
  if (fileInput.value == 0){
    statusBadge.innerHTML = 'No File Attached';
    statusBadge.className = 'badge badge-pill badge-danger';
  }
  else if(fileInput.value != 0){
    statusBadge.innerHTML = 'Uploaded';
    statusBadge.className = 'badge badge-pill badge-success';
  }
}