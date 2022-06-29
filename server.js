const express = require('express');
//use express
const app = express();
//set up PORT
const PORT = process.env.PORT || 3001

//asking express to create route for files under 'public'
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//api route and html route
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app)

//app listener
app.listen(PORT, () => {
    console.log(`Server available at localhost${PORT}`);
})