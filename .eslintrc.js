module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es6: true
    },
    extends: ['eslint:recommended', 'prettier', 'react-app'],
    plugins: ['prettier', 'react'],
    parserOptions: {
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true
      },
      sourceType: 'module'
    },
    rules: {
      //indent: [2, 4],
      'no-console': 1,
      'no-case-declarations': 1,
      //'linebreak-style': [2, 'unix'],
      quotes: [1, 'single'],
      semi: [2, 'always']
    },
    overrides: [
      {
        // for Node.js server-side js files
        files: ['server/**/*.js', 'config-server/**/*.js'],
        env: {
          browser: false,
          commonjs: true,
          es6: true
        },
        parserOptions: {
          ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
          },
          sourceType: 'script'
        },
        rules: {
          strict: [2, 'global']
        }
      }
    ]
  };
  