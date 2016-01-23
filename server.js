import bodyParser from 'body-parser'
import express from 'express'

import morgan from 'morgan'

let app = express()
app.use(morgan('dev'))
let port = process.env.PORT || 5000


let maryStatus = 200;
let maryResponse = {name: 'Mary'};

app.use(bodyParser.json());

app.get('/alligators/Mary', (request, response) => {
  response.set('Content-Type', 'application/json');
  console.log(maryStatus)
  response.status(maryStatus).send(maryResponse);
});

app.get("/foos", (request, response) => {
  response.set('Content-Type', 'application/json');

  console.log('call foos')
  response.send([{value:45}, {value:90}])
})

app.post("/update/:flagSwitch", (request, response) => {
  let flagSwitch = request.params.flagSwitch
  if (flagSwitch == 'on') {
    maryStatus = 200
  } else {
    maryStatus = 404
  }
  response.set('Content-Type', 'application/json');

  response.send()
})

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});

