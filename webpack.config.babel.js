import packagejson from './package.json'
import path from 'path'
import CleanWebpackPlugin from 'clean-webpack-plugin'

export default env => {

  return {

    entry: {
      [`${path.parse(packagejson.main).name}`]: path.resolve(__dirname, packagejson.main)
    },

    output: {
      filename: env.production ? '[name].min.js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      library: 'hyperappMaterialize',
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
          use: [
            'babel-loader',
            'eslint-loader'
          ]
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin(['dist'])
    ]

  }

}
