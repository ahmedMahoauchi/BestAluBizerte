const express = require('express');
const app = express();
const path = require('path');
const connectDB = require("./config/dbConnect");
const contactRoutes = require("./routes/contactRoutes");
const projectRoutes = require("./routes/projectRoutes");
const navigationRoutes = require("./routes/navigationRoutes");
const bodyParser = require("body-parser");


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

// MongoDB setup
connectDB();


app.use("/contact", contactRoutes);
app.use("/project", projectRoutes);
app.use("/", navigationRoutes);

app.get('/', (req, res) => {
 /* const data = {
    name: 'John Doe',
    age: 25,
    // Ajoutez d'autres propriétés de données selon vos besoins
  };*/
  res.render('index'/*, { data }*/);
});

// Démarrer le serveur
const port = 3000; // Choisissez n'importe quel numéro de port que vous préférez
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
