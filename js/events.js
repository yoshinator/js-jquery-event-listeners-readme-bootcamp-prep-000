//define functions here

$(document).ready(function(){

   
    $('p').on('click', function(){
      alert("Hey!");
      console.log("clicked");
    });
  
    $('img').on('load', function(){
      $('img').addClass('tasty')
      alert("loaded!")
    });

});
