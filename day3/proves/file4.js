function ticketBuilder(transport){
  return function(name){
    console.log("Welcome, " + name + " tranporete " + transport);
  }
}

var getPlaneTicket = ticketBuilder("plane");
var getTrainTicket = ticketBuilder("train");

getPlaneTicket("Raul");
getPlaneTicket("Villalonga");