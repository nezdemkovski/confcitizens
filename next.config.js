const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === "development"
    ? {}
    : require("next-server/constants");

// fix: prevents error when .css files are required by node
if (typeof require !== "undefined") {
  require.extensions[".css"] = file => {};
}

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {};
  }

  const withCss = require("@zeit/next-css");

  return withCss();
};
