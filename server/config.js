module.exports = {
  port: process.env.PORT || 3001,
  dbUrl: "mongodb://127.0.0.1:27017/ravensNest",
  dbOptions: { useNewUrlParser: true },
};
