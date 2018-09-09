function getIt(){
      $('p').on('click', function(){
      alert("Hey!");
    });
}

function frameIt(){
      $('img').on('load', function(){
      $('img').addClass('tasty')
      console.log('loaded')
    });
}

$(document).ready(function(){

  getIt();
  frameIt();

});
