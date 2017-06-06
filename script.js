$(document).ready(function(){
  $('.btn').click(function(){
    $(".btn").removeClass("selected");
    $(this).addClass("selected");

    var flickrAPI="https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    var animal = $(this).text();
    var flickrOptions = {
      tags:animal,
      format:"json"};

    function displayPhotos (data){
      var photoHTML = '<ul class="imageBox">';
      $.each(data.items, function(i, photo){
        photoHTML += '<li class="image">';
        photoHTML += '<a href="' + photo.link + '">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      });//end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }//end displayPhotos

    $.getJSON(flickrAPI, flickrOptions, displayPhotos)
  });//end click

});//end ready
