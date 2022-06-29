module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/essential", "standard", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    semi: 0,
    "vue/multi-word-component-names": 0,
    "vue/no-v-for-template-key": 0,
    "vue/no-v-for-template-key-on-child": 2,
    "vue/no-mutating-props": 0,
  },
};
