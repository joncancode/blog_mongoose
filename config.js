// require('dotenv').config();

// console.log(process.env.DATABASE_URL);

exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL;

console.log(process.env)

// exports.DATABASE_URL = process.env.DATABASE_URL ||
//                        global.DATABASE_URL ||
//                       'mongodb://dev:dev@ds155192.mlab.com:55192/mongoose';

// const DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://dev:dev@ds155192.mlab.com:55192/mongoose';

// console.log(DATABASE_URL);
// exports.DATABASE = {
//     connection: DATABASE_URL
// };

exports.PORT = process.env.PORT || 8080;