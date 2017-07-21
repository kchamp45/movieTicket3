//business logic
function Tickets(movie, time, age, quantity) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.quantity = quantity;
}

// function Movie(name, discount) {
//   this.name = ["Aladdin", "Little Mermaid", "Wonder Woman", "Dunkirk"];
//   this.discount = [0, 0, 1, 2];
// }
//
// function TimePeriod(period, discount) {
//   this.period = ["morning", "matinee", "evening"];
//   this.dis
//   discount = [0, -1, 1];
// }
//
// function AgeCat(category, discount) {
//   this.category = ["minor", "adult", "senior"];
//   this.discount = [0, 1, -1];
// }
// var newTitle = new Movie();
// var newTime = new TimePeriod();
// var newAge = new AgeCat();

var initialPrice = 10;

Tickets.prototype.calcDiscount = function() {
  
}

 Tickets.prototype.calcPrice = function() {
  return (initialPrice + this.movie + this.time + this.age) * this.quantity;
 }

//UI logic
$(document).ready(function() {
  $("#ticket-form").submit(function(event) {
    event.preventDefault();
    var inputMovie = $("#title").val();
    var inputTime = $("#time").val();
    var inputCategory = $("#category").val();
    var inputQty = $("#qty").val();
    var newMovieTicket = new Tickets(inputMovie, inputTime, inputCategory, inputQty);

  $("#name").text(inputMovie);
  $("#hour").text(inputTime);
  $("#cat").text(inputCategory);
  $("#quantity").text(inputQty);
  $("#total").text("$" + newMovieTicket.calcPrice());
  $("#receipt").show();
});
});
