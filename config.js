exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://dev:dev@ds155192.mlab.com:55192/mongooses';
exports.PORT = process.env.PORT || 8080;