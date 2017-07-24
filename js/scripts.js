
function Pet(name,type,age,color,breed,status){
  this.name = name;
  this.type = type;
  this.age = age;
  this.color = color;
  this.breed = breed;
  this.status = status;
};

// function test(name){
//   alert();
//     // $("#")last().toggle();
// };


$(document).ready(function() {
  $("#petAdopt").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#name").val();
    var inputtedType = $("#type").val();
    var inputtedAge = $("#age").val();
    var inputtedColor = $("#color").val();
    var inputtedBreed = $("#breed").val();

    newPet = new Pet (inputtedName,inputtedType,inputtedAge,inputtedColor,inputtedBreed,"available");


    // $("#showPet h3").append("<span class='newPet'>"+newPet.name+"</span>");
    $("#showPet").after("<h3 id="+newPet.name+">"+newPet.name+"</h3>");
    //
    $("h3#"+newPet.name).append("<li class="+newPet.name+">" + newPet.type + "</li>");
    // // $("this").append("<li>" + newPet.age + "</li>");
    // // $("this").append("<li>" + newPet.color + "</li>");
    // // $("this").append("<li>" + newPet.breed + "</li>");
    $("."+newPet.name).show();


    $("h3#"+newPet.name).last().click(function(){
      $(this).find("li").toggle();
      console.log(this);

    });


  });
});
