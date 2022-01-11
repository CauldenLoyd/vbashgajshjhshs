const express = require("express");
const app = express();
var colors = require('colors');

app.get('/defaultsite', function (request, response) {
    response.sendFile('/index.html')
});

const listener = app.listen(process.env.PORT, () => {
  console.log('[CSLOG]'.rainbow.bold + ' Wait a minute? Could it be? It is!'.brightBlue)
  console.log(`[CSLOG]`.rainbow.bold + ` Starting up Caulden's Skateboards servers...`.brightGreen);
  console.log(`[CSLOG]`.rainbow.bold + ` Servers started up successfully!`.brightGreen);
  console.log(`[CSLOG]`.rainbow.bold + ` Project is online at port ${listener.address().port}`.brightGreen);
});
