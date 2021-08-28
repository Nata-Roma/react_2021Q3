module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
  ],
  rules: {
    "no-use-before-define": "off",
    "no-unused-vars": "off",
    "react/jsx-props-no-spreading": "off",
    semi: ["error", "always"],
    "comma-dangle": 'off',
    "object-curly-newline": "off",
    "implicit-arrow-linebreak": "off",
    "react/jsx-curly-newline": "off",
    "operator-linebreak": "off",
    "function-paren-newline": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-restricted-syntax": "off",
    "indent": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "max-len": ["warn", { "code": 80 }],
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  },
  globals: {
    JSX: true,
  }
};
