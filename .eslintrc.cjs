module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname
  },
  globals: {
    JSX: true
  },
  settings: {
    "import/resolver": {
      typescript: { alwaysTryTypes: true }
    }
  },
  ignorePatterns: ["node_modules", "dist", ".eslintrc.cjs"],
  // add rules configurations here
  rules: {
    // ON RULES: not including in our extends but are useful to turn on
    curly: ["error", "all"], // makes code easier to read, pervent bugs and promotes consistency
    "no-console": "off",
    "prettier/prettier": "error",
    "import/no-default-export": "off",
    "unicorn/filename-case": "off"
  }
};
