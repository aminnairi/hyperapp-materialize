import path from 'path'

export default {
  mode: 'development',
  
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js')
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
}
