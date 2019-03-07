const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//put routes here.

//replace ../react-client/dist to respective folder.
app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.post("/postSurveyData", (req, res) => {
  console.log(req.body);
  res.end();
});

app.post("/newSurvey", (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(1128, () => {
  console.log("listening on port 1128!");
});
