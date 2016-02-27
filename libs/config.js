module.exports = app => {
  const env = process.env.NODE_ENV;
  if (Boolean(env)) {
    require(`./config.${env}.js`);
  }
  return require("./config.development.js");
};
