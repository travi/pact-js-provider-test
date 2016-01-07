import bodyParser from 'body-parser'
import express from 'express'

import morgan from 'morgan'

let app = express()
app.use(morgan('dev'))
let port = process.env.PORT || 5000


let maryStatus = 418;
let maryResponse = {im: 'a teapot'};

app.use(bodyParser.json());

app.get('/alligators/Mary', (request, response) => {
  response.set('Content-Type', 'application/json; charset=utf-8');
  response.status(maryStatus).send(maryResponse);
});

app.get("/foos", (req, res) => {
  console.log('call foos')
  res.send([{value:45}, {value:90}])
})

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});

