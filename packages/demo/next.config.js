// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx");
const path = require("path");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve(__dirname, "../../node_modules/react"),
      "react-dom": path.resolve(__dirname, "../../node_modules/react-dom"),
      "@material-ui/core": path.resolve(
        __dirname,
        "../../node_modules/@material-ui/core"
      )
    };
    return config;
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  }
};

module.exports = withNx(nextConfig);
