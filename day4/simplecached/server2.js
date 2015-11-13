var net = require('net');
var port = 1702;
var usuario = {};
var server = net.createServer(function(connection) {
    console.log('Connection to %s open', port);
    connection.on('data', function(data) {

    var comando = String(data).trim();
    var arr_comando = comando.split(' ');
    

        if (arr_comando[0] == 'set') {
            usuario[arr_comando[1]] = arr_comando[2];
            connection.write("STORED");
        } 

        if (arr_comando[0] == 'get') {
            connection.write('VALUE '+ usuario[arr_comando[1]]);
        }

        console.log(usuario)
    });
});
server.listen(port);