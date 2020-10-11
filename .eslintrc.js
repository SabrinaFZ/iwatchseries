module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './']
        ],
        extensions: ['.js', '.vue', '.scss', '.json']
      }
    }
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'airbnb-base'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'arrow-parens': ['warn', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'no-underscore-dangle': 'off',
    'max-len': ['error', { code: 200, tabWidth: 4 }],
    'no-param-reassign': ['off'],
    'import/extensions': ['error', 'never', { scss: 'always' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true
      }
    ],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        }
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/multiline-html-element-content-newline': ['error'],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/require-default-prop': ['error'],
    'vue/v-bind-style': ['error', 'shorthand']
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
};
