module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.vue$/],
                appendTsxSuffixTo: [/\.vue$/]
              }
            }
          ]
        },
      ],
    },
  };
}
