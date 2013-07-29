/**
 * Created with JetBrains WebStorm.
 * User: kaven276
 * Date: 12-5-29
 * Time: 上午8:36
 */
var SGIP = require('..')
  , SP = SGIP.nodeSP.Class
  , Submit = SGIP.msgSubmit.Class
  ;

var cont = '一线：北京周边景点：';

//cont = require('fs').readFileSync(require('path').join(__dirname, 'cont.txt'), 'utf8');


var sp = new SP(124123123, '127.0.0.1', 8801, 'test', 'test', 8802, '127.0.0.1', 'test', 'test');


sp.on('request', function(req){
  if (req instanceof SGIP.msgReport.Class) {
    console.log('\nReport:');
  } else if (req instanceof SGIP.msgDeliver.Class) {
    console.log('\nDeliver:');
  }
  console.log(req);
});

var msg = new Submit('8615620009233', 8, cont, {"SPNumber" : '10655022400312345678'});
msg.rowid = 'AAAS2sAAEAAACEjAAA';
//console.log(msg);
sp.send(msg, function(res, req){
  console.log('\n\nrespond :');
  console.log('the result for %j is %d', res.header, res.Result);
  console.log('You can use oracle rowid %s to fill SMS id columns with %j', req.rowid, res.header);
});
