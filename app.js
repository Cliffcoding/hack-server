const express = require('express');
const cors = require('cors');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http');
const request = require('request');


const app = express();

app.get('/', (req, res, next) => {
  console.log("THIS IS A TEST")
  var options = {
   url: 'http://api.devexhacks.com/rewards/accounts/',
   headers: {
     'Authorization': 'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwicGNrIjoxLCJhbGciOiJkaXIiLCJ0diI6Miwia2lkIjoiYTdxIn0..Q8EPUTo189PyagVaeXKw9XgvYN1pEz5Vgp1bgF4Hj9TE2anFkmGILcf7UX9iO6L0cUTgJQm3blatkUZUyUKc6cHFyyuVPKmtZDIU2zmP6VEhxmroUfeqh8YJnOEw9LRVKU1Pq4fVRuZMsIM1Mf6F2oMOAFL8JTw7AK4CQVUWtti4KHaNBtDX9cHOuwRtDbKhQbmySLP0g5ENzrC9gWMLprmq66hX5bI4TAiF2f7KlgjtT9lvph9pLyDsfBhtOanWj6gVmYMqxcNQlUHcgtsH3nlthX1PsOKQppDtmS09hPELzTxEn2kxk2btJ0KPy2iQFQyDSWfER1xgJnFDASr1sg8MNeQh3Qjmp4vuruQMimu1IFVvb1cIsIDS7cWPCUPa2UFYz9YfW1uXVnUpOyZTCWZ3E28YL70Rn2TbP4Hw030rgBWF5Ok1YD51e7BWJXXCq1lIWUG85WmjWZ5Il4nVNZBxBFDPR7lQMG2Gw36ibffzfTDwwHfWhlpkmbqtRLawKEVtYNDcpIvocujQJFHlwCRJ9uex5BXJzQQ6Mrp1cvxp3sp65mU5EPSU4J1OK0Iuj8Yv.I3YRuEIDtnqtHjjjrb9OK0A'
   }
 }
 function callback(error, response, body) {
  console.log("IN CALLBACK")
  // console.log(body)
  // console.log(response)
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info);
    res.json(info)
    // console.log(info.forks_count + " Forks");
  }
}
  console.log("Just before request")
  request(options, callback)
})
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
	  message: err.message,
	  error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
