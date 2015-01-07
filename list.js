var sp = require("serialport");
var SerialPort = sp.SerialPort;


sp.list(function(err, ports){
  // console.log(ports);
  ports.forEach(function(port){
    console.log(port.comName);
    serialPort = new SerialPort(ports[ports.length - 1].comName, {
        baudrate: 9600,
    });

    console.log(serialPort);

    serialPort.open(function (error) {
      if ( error ) {
        console.log('failed to open port ' + serialPort.path + ' : ' + error);
      } else {
        console.log(serialPort.path + ' : ' + 'opened');
        serialPort.on('data', function(data) {
          console.log('data received: ' + data);
        });

        serialPort.write("{DD?}\n", function(err, results) {
          console.log('err ' + err);
          console.log('results ' + results);
        });
      }
    });

  });

});
