function getIt(){
      $('p').on('click', function(){
      alert("Hey!");
    });
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass("tasty");
  })
}

function pressIt(){
  $('input').on('keydown', function(e){
    if (e.key === 'g'){
      alert("g pressed");
    }
  });
}

$(document).ready(function(){

  getIt();
  frameIt();
  pressIt()

});
