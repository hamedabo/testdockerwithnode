/* global hostname, body */

const express = require("express");
const main = express();
const PORT = 3000;

main.get('/', (req, res) =>{
    res.send(body, 'wlcome to NodeJS Express Server!');
});

main.listen(PORT, 3000, () =>{
    console.log('Example main listening at http://localhost:${PORT}');
})
