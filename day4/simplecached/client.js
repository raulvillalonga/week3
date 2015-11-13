var simplecached = require('simplecached');
var options = {
    port: 1702,
    host: '127.0.0.1'
};
var client = new simplecached.Client(options, function(error) {
    console.log('Connected');
});

client.set("nombre", "Raul", function(error, response){
  //console.log(response);
  client.get("nombre", function(error,valor){
    console.log("Usuario " + valor + " guardado correctamente.");
  })
})