function readURL1(input) {
    
    
    if (input.files && input.files[0]) {
      alert('hello');
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image-upload-wrap1').hide();
  
        //$('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content1').show();
  
        $('.image-title1').html(input.files[0].name);
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
        $('.image-upload-wrap2').hide();
  
        //$('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content2').show();
  
        $('.image-title2').html(input.files[0].name);
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
        $('.image-upload-wrap3').hide();
  
        //$('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content3').show();
  
        $('.image-title3').html(input.files[0].name);
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
    document.getElementById('file-upload-input-doc1').value = '';
   
    $('.file-upload-input1').replaceWith($('.file-upload-input1').clone());
    $('.file-upload-content1').hide();
    $('.image-upload-wrap1').show();
    
  }
  function removeUpload2() {

    var statusBadge = document.getElementById('status-danger-badge2');
    statusBadge.innerHTML = 'No File Attached';
    statusBadge.className = 'badge badge-pill badge-danger';
    document.getElementById('file-upload-input-doc2').value = '';
    $('.file-upload-input2').replaceWith($('.file-upload-input2').clone());
    $('.file-upload-content2').hide();
    $('.image-upload-wrap2').show();
    
  }
  function removeUpload3() {

    var statusBadge = document.getElementById('status-danger-badge3');
    statusBadge.innerHTML = 'No File Attached';
    statusBadge.className = 'badge badge-pill badge-danger';
    document.getElementById('file-upload-input-doc3').value = '';
    $('.file-upload-input3').replaceWith($('.file-upload-input3').clone());
    $('.file-upload-content3').hide();
    $('.image-upload-wrap3').show();
    
  }
  $('.image-upload-wrap1').bind('dragover', function () {
          $('.image-upload-wrap1').addClass('image-dropping');
      });
      $('.image-upload-wrap1').bind('dragleave', function () {
          $('.image-upload-wrap1').removeClass('image-dropping');
  });
  $('.image-upload-wrap2').bind('dragover', function () {
    $('.image-upload-wrap2').addClass('image-dropping');
});
$('.image-upload-wrap2').bind('dragleave', function () {
    $('.image-upload-wrap2').removeClass('image-dropping');
});
$('.image-upload-wrap3').bind('dragover', function () {
  $('.image-upload-wrap3').addClass('image-dropping');
});
$('.image-upload-wrap3').bind('dragleave', function () {
  $('.image-upload-wrap3').removeClass('image-dropping');
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