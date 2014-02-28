var express = require('express.io')
var app = express();

var Twit = require('twit')

var T = new Twit({
    consumer_key:         'QRmkNo864YtXtzAtgY6GZg'
  , consumer_secret:      '0yActCEdt8hSaq2KCx3Z44OnggzHlilDATDT7ztmc'
  , access_token:         '116678841-9b4i9xJ9w9od80Wg490Wuha92pmp5ZG9FJFJ0PIp'
  , access_token_secret:  '8kxCHzT7DZgTgvBc4sMuZQx8RdKv6KZyEMpKM9XIJYZ18'
})

app.use('/', express.static(__dirname + '/views'));

app.use(express.logger('dev'));

T.get('statuses/user_timeline', { screen_name: req.params.id , count: 10 }, function(err, data) {
  if(err){
    console.log('error');
    res.end('error');
  }else{
    var dataOut = [];
    for(var i in data){
      dataOut.push(
      { tweet: data[i].text,
        profile_img: data[i].user.profile_image_url
      });
    }
    res.send(dataOut);
  }
});

io.sockets.on('connection'

)


var port = process.env.PORT || 5050;
app.listen(port, function () {
        console.log('Listening on ' + port);
});
