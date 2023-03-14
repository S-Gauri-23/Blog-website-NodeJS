const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRouter = require('./routes/blogRoutes');

//express app
const app = express();

//connection string to connect to mongodb
const dbURI =
  "mongodb+srv://netninja:gDP6GwVSYbU7T5Q7@nodetuts.saudzja.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));


//register view engine i.e ejs will be used to create out templates
app.set("view engine", "ejs");

//look for views in 'files' folder
app.set("views", "files");

//listen for requests
// app.listen(3000);

//middleware and static files
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next)=>{
//     console.log('Hostname: '+ req.hostname);
//     console.log('Method: '+ req.method);
//     console.log('Path: '+ req.path);
//     next();
// });

app.get('/', (req, res) => {
  // res.send('<h1>Hello!</h1>');
  // res.sendFile('./files/index.html', {root: __dirname});

  //passing data dynamically to the pages
  // res.render("index", { title: "Home", blogs });

  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  // res.sendFile('./files/about.html', {root : __dirname});
  res.render("about", { title: "About" });
});

app.use(blogRouter);

app.use((req, res) => {
  // res.status(404).sendFile('./files/error404.html', {root: __dirname});
  res.status(404).render('error404', { title: "Error 404"  });
});