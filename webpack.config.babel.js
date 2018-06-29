import path from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'

export default env => {

  return {

    entry: {
      'hyperapp-materialize': path.resolve(__dirname, 'src', 'index.jsx')
    },

    output: {
      filename: env.production ? '[name].min.js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      library: 'hyperapp-materialize',
      libraryTarget: 'umd'
    },

    externals: {
      hyperapp: 'hyperapp'
    },

    module: {
      rules: [
        {
          test: /\.jsx/,
          include: /src/,
          loader: 'babel-loader'
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin(['dist'])
    ]

  }

}
