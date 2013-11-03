'use strict';
var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var fs = require('fs');
AWS.config.loadFromPath('./config.json');


var crypto = require('crypto');
//加密
function encrypt(str, secret) {
    var cipher = crypto.createCipher('aes192', secret);
    var enc = cipher.update(str, 'utf8', 'hex');
    enc += cipher.final('hex');
    return enc;
}
//解密
function decrypt(str, secret) {
    var decipher = crypto.createDecipher('aes192', secret);
    var dec = decipher.update(str, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

module.exports = function ($youmeb) {

  this.$({
    name: 'updatefile',
    path: '/updatefile'
  });

  this.index = {
    path: '/img',
    methods: ['all'],
    handler: function (req, res, next) {
      var s3 = new AWS.S3();
      var _now = new Date();
      var sArray = req.files.file.name.split(/(.jpg|.gif|.png|.jpeg)/);
      var _re = crypto.createHash('md5').update(sArray[0]+_now).digest("hex");
      _re = _re+sArray[1];
      fs.readFile('/'+req.files.file.path, function (_err, data) {
          var params = {Bucket: 'dont-throw',Key:_re,Body:data,ACL: 'public-read'};
          s3.putObject(params, function (err, data) {
            //console.log(err);
            if (err) {
            } else {
              fs.unlink('/'+req.files.file.path, function() {
                if (err) throw err;
                res.send({n:_re});
              });
            }
          });
      });
    }
  };

};
