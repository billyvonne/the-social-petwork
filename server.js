const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mustacheExpress = require('mustache-express');
const models = require('./models');
const session = require('express-session');
const app = express();
// const multer = require("multer");

var PORT = process.env.PORT || 3000;

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views')
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(expressValidator());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// ==============================
// HTML Routes
// ==============================
app.get('/', function (req, res) {
  res.render('index');
})

app.get('/signup', function (req, res) {
  res.render('signup');
});

app.get('/login', function (req, res) {
  res.render('login');
});

// app.get('/addpet', function (req, res) {
//   res.render('addpet', {
//     name: req.session.username
//   })
// });

// app.get('/home', function(req, res) {
//   res.render('home', {
//     name: req.session.username
//   })
// });


// app.get('/liked', function(req, res) {
//   res.render('liked');
// });


// ==============================
// API Routes
// ==============================

// User Login
app.get('/login', function (req, res) {
  if (req.session && req.session.authenticated) {
    var user = models.user.findOne({
      where: {
        username: req.session.username,
        password: req.session.password
      }
    }).then(function (user) {
      if (user) {
        req.session.username = req.body.username;
        req.session.userId = user.dataValues.id;
        let username = req.session.username;
        let userid = req.session.userId;
        res.render('index', {
          user: user
        });
      }
    })
  } else {
    res.redirect('/home')
  }
})

app.post('/login', function (req, res) {
  let username = req.body.username;
  let password = req.body.password;

  models.user.findOne({
    where: {
      username: username,
      password: password
    }
  }).then(user => {
    if (user.password == password) {
      req.session.username = username;
      req.session.userId = user.dataValues.id;
      req.session.authenticated = true;
      console.log(req.session);

      res.redirect('/home');
    } else {
      res.redirect('/login');
      console.log("This is my session", req.session)
    }
  })
})


// Create New User
app.post('/signup', function (req, res) {
  const user = models.user.build({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })
  console.log(req.body);

  user.save().then(function (user) {
    req.username = user.username;
    req.session.authenticated = true;
    res.redirect('/login')
    console.log(req.session);
  })


})



// Create New Pet
// On-click for Add Pet button, sends the user to the /addpet view
app.get('/addpet', function (req, res) {
  models.pet.findAll().then(function (posts) {
    res.render('addpet', {
      name: req.session.username,
    })
  })
})

// POST for saving new pet to the DB  
app.post('/addpet', function (req, res) {
  const pet = models.pet.build({
    userId: req.session.userId,
    pet_photo: req.body.pet_photo,
    pet_type: req.body.pet_type,
    pet_name: req.body.pet_name,
    pet_age: req.body.pet_age,
    pet_birthday: req.body.pet_age,
    fur_color: req.body.fur_color,
    fave_nap: req.body.fave_nap,
    fave_food: req.body.fave_food,
    fave_toy: req.body.fave_toy,
    fave_scratch: req.body.fave_scratch,
    fave_walk: req.body.fave_walk,
    fave_window: req.body.fave_window,
    fave_feature: req.body.fave_feature,
    bowl_empty: req.body.bowl_empty,
  })
  pet.save().then(function (pet) {
    console.log(pet)
    res.redirect('/home');
  })

})

// Display user's pets on user homepage
// app.get('/home', function (req, res) {
//   let userId = req.session.userId;
//   models.pet.findAll({
//     where: {
//       userId: userId
//     }
//   }).then(function (pets) {
//     console.log(res)
//     console.log("This is the user id: " + userId);
//     console.log(pets);
//     res.render('home', {
//       pets: pets,
//       petname: req.session.pet_name,
//       pettype: req.session.pet_type
//     })
//   })
// })

// Create New Post and Save to DB
// On-click for add post button
app.get('/newgab', function (req, res) {
  models.post.findAll().then(function (posts) {
    res.render('newgab', {
      posts: posts,
      name: req.session.username
    })
  })
})

// POST for saving new post to the DB
app.post('/newgab', function (req, res) {
  const post = models.post.build({
    userId: req.session.userId,
    title: req.body.gabtitle,
    body: req.body.gabbody
  })

  post.save().then(function (post) {
    console.log(post);
    res.redirect('/home')
  })
})

// Render All Posts to User Home Page
app.get('/home', function (req, res) {
  models.post.findAll().then(function (posts) {
    res.render('home', {
      posts: posts,
      name: req.session.username
    })
  })
})


app.post('/home', function (req, res) {
  const post = models.post.build({
    title: req.body.gabtitle = req.session.post,
    body: req.body.gabbody = req.session.post,
  })
  console.log(req.session.post);

  post.save();
  res.redirect('/home')
})

app.post('/like', function (req, res) {
  const like = models.like.build({
    like: true,
    userId: req.session.userId,
    postId: req.body.submitbtn,

  })
  like.save().then(function (like) {
    console.log(like);
  });
});


app.get('/liked', function (req, res) {
  models.like.findAll({
    include: [{
      model: models.user,
      as: 'user'
    }]
  }).then(function (likes) {
    console.log(likes);
    res.render('liked', {
      likes: likes
    })
  });


});

app.get('/logout', function (req, res) {
  req.session.destroy(function (err) {})
  res.render('index');
  console.log(req.session);
});

app.listen(PORT, function () {
  console.log('Successfully started express application!');
});