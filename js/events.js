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

function submitIt(){
  $('form').on('submit', function (){
    alert("Your form is going to be submited now.");
  });
}

$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();
  submitIt();

});
