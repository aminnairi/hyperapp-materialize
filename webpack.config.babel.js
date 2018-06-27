import path from 'path'

export default {
  mode: 'development',

  entry: {
    index: path.resolve(__dirname, 'src', 'index.jsx')
  },

  output: {
    filename: 'index.js',
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
  }
}
