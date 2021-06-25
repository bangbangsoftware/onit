module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://bangbangsoftware.github.io/onit/'
    : '/'
};
