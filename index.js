import express from "express";
const app = express();
const port = 3000;
import bodyParser from "body-parser";
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { wordCount: null });
});

app.post("/submit", (req, res) => {

  const { fName, lName } = req.body;

  const fullName = `${fName}${lName}`
  const wordCount = fullName.length;

  console.log("Rendering view with data:", { wordCount });

  res.render('index',{wordCount});

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
