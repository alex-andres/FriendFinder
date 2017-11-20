const express = require('express');
const body-parser = require('body-parser');


const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(port function() {
  console.log("App listening on PORT: " + PORT);
});
