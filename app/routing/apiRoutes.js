var path = require("path");

app.get("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/routing/apiRoutes.js"));
});
