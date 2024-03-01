const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('./utils/path');

const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');
const taskRoutes = require('./routes/tasks');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, 'public')));

// uses Bootstrap 5
app.use('/css', express.static(path.join(rootDir, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use('/js', express.static(path.join(rootDir, 'node_modules', 'bootstrap', 'dist', 'js')));

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

// TODO: add logging middleware (see Web Dev Bootcamp example)
app.use((req, res, next) => {
  console.log(`Logging the request`);
  next();
});



// admin and home routes defined
app.use(homeRoutes);
app.use('/posts', adminRoutes);
app.use('/tasks',taskRoutes);

/* function passwordCheck(req, res, next) {
  const email = req.body["email"];
  const password = req.body["password"];
  if (email === "joe@example.com" 
 && password === "1234") {
    userIsAuthorised = true;
  }
  next();
}
app.use(passwordCheck);

app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    //res.sendFile(__dirname + "/public/secret.html");
    res.render('posts-list');
  } else {
    //res.sendFile(__dirname + "/public/index.html");
    res.redirect("/");
  }
});
*/
app.use((req, res)=>{
    // viewsData variable to be passed to the view file
    const viewsData = {
        pageTitle: 'Page Not Found'
    };
    res.status(404).render('404', viewsData);
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});





app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});


