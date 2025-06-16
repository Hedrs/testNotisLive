/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'block-no-empty': true,
    'no-descending-specificity': true,
    'no-empty-source': true,
    'alpha-value-notation': 'number',
    'color-hex-length': 'short',
    'color-function-notation': 'modern',
    'rule-empty-line-before': 'always',
    'declaration-block-no-redundant-longhand-properties': true,
    'shorthand-property-no-redundant-values': true,
    'declaration-empty-line-before': 'never',
    'selector-class-pattern': '^[a-zA-Z][a-zA-Z0-9-_]*$',
    'selector-pseudo-element-colon-notation': 'single',
    'scss/dollar-variable-pattern': '^[a-zA-Z][a-zA-Z0-9-_]*$',
  },
};
