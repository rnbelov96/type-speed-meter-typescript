module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          // options: {
          //   loaders: {
          //       ts: 'ts-loader'
          //   },
          //   esModule: true
          // }
        },
      ],
    },
  };
}