module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'selector-max-id': 1,
    'max-nesting-depth': 3,
    'font-weight-notation': 'numeric',
    'number-leading-zero': 'always',
    'string-quotes': 'single',
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'property-case': 'lower',
    'rule-empty-line-before': 'always',
    'order/properties-alphabetical-order': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ]
  },
  plugins: ['stylelint-order', 'stylelint-scss']
};
