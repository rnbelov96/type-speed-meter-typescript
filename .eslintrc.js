require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-recommended', '@vue/eslint-config-typescript/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-new': 0,
    'arrow-parens': 0,
    'max-len': 0,
    'no-console': ['error', { allow: ['error'] }],
    'no-param-reassign': 0,
   'import/extensions': [
      'error',
      'ignorePackages',
      {
        "js": "never",
       "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ]
  },
  "settings": {
   "import/resolver": {
      "node": {
       "extensions": [".js", ".ts"]
      }
   }
  }
};
