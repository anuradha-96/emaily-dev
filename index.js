const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoURI,{useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.use(bodyParser.json());

   app.use(
    cookieSession ({
	
maxAge: 30 * 24 * 60 * 60 * 1000,
keys: [keys.cookieKey]
		
   })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);



if (process.env.NODE_ENV === ' production ') {
	
	// express will serve up production assets
	// like our main.js or main .css file
	
	app.use(express.static('client/build'));
	
	
	// express will serve up index.html 
	// if it doesnot recognize route events
	
	const path = require('path');
	app.get('*', (req, res)  => {
		
		res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'));
		
	});
	
}



app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });



