module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off", // 규칙 제외
  },
};
