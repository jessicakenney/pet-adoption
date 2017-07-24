
function Pet(name,type,age,color,breed,status){
  this.name = name;
  this.type = type;
  this.age = age;
  this.color = color;
  this.breed = breed;
  this.status = status;
};




$(document).ready(function() {
  $("#petAdopt").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#name").val();
    var inputtedType = $("#type").val();
    var inputtedAge = $("#age").val();
    var inputtedColor = $("#color").val();
    var inputtedBreed = $("#breed").val();

    newPet = new Pet (inputtedName,inputtedType,inputtedAge,inputtedColor,inputtedBreed,"available");

    $("#showPet h3").text(newPet.name);



  });
});
