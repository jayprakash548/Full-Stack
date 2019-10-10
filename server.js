const express = require('express'),
      path = require('path'),
      port = process.env.PORT || 4200,
      host = process.env.BASE_URL || "http://localhost:4200";
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen(port, () =>{
  console.log(`Server running at ${host}`);
});


