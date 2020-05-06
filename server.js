var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('startOfDay'); // Create a table with default settings
mobileApp.tables.add('jobsCompleted');
mobileApp.tables.add('endOfDay');
app.use(mobileApp);
app.listen(process.env.PORT || 3000);
