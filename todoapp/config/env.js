var path = require('path');
var rootPath = path.normalize(__dirname + '/../'); // normalizes to base path


//linking the mongoosedb databaseee
module.exports = {
    development: {
        rootPath: rootPath,
        database: 'mongodb://localhost/todoapp',
        port: process.env.PORT || 3000
    },
    production: {
        rootPath: rootPath,
        database: '',
        port: process.env.PORT || 80
    }
};