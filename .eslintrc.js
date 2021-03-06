module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:react-hooks/recommended",
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: false, // Allows for the parsing of JSX
      destructuring: true,
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": 0,
    // 'no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': [
    //   'error',
    //   {
    //     varsIgnorePattern: '^_',
    //     ignoreRestSiblings: false,
    //   },
    // ],
    "react/display-name": ["off"],
    "@typescript-eslint/camelcase": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "property",
        format: ["camelCase", "snake_case", "PascalCase"],
        filter: {
          // you can expand this regex as you find more cases that require quoting that you want to allow
          regex: "_",
          match: false,
        },
      },
    ],
    "react/prop-types": 0,
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
