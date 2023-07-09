module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      "@babel/plugin-transform-export-namespace-from",
      require.resolve("expo-router/babel"),
    ],
  };
};
