export default {
  "extends": ["taro"],
  "rules": {
    "typeRoots": ["node_modules/@types"],
    "types": ["node"],
    "no-unused-vars": ["error", { "varsIgnorePattern": "Taro" }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }]
  },
}
