module.exports = {
  plugins: {
    autoprefixer: {},
    '@csstools/postcss-global-data': {
      // TODO: mejorar
      files: [__dirname + '/src/css/variables/mediaqueries.css']
    },
    'postcss-preset-env': {
      stage: false,
      features: {
        'custom-media-queries': true
      }
    },
    'postcss-functions': {
      functions: {
        em: function (value, base = 16) {
          const _value = String(value).split('px')[0]
          const _base = String(base).split('px')[0]
          return `${_value / _base}em`
        },
        rem: function (value, base = 16) {
          const _value = String(value).split('px')[0]
          const _base = String(base).split('px')[0]
          return `${_value / _base}rem`
        }
      }
    },
    'postcss-import': {}
  }
}
