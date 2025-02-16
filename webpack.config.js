const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
// const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.tsx", // Entry file
  mode: "production", // Set the mode to development
  output: {
    // Output file
    filename: "js/[name].[contenthash].js",
    // filename: "[name].js", // Avoid a single 'bundle.js' file for all chunks
    chunkFilename: "[name].[contenthash].js", // Unique names for async chunks
    publicPath: "/", // Base path
    path: path.resolve(__dirname, "dist"), // Output directory
    // filename: "bundle.js",
    clean: true, // Clean the output directory before build
  },
  resolve: {
    // Resolve file extensions
    extensions: [".tsx", ".ts", ".js", ".jsx"], // Resolve TypeScript and JS files
  },
  module: {
    rules: [
      // Define loaders for different file types
      {
        test: /\.(js|jsx|ts|tsx)$/, // Match JS, JSX, TS, TSX files
        use: "babel-loader",
        exclude: /node_modules/, // Exclude dependencies
      },
      // SCSS ALL EXCEPT MODULES
      {
        test: /\.scss$/i,
        exclude: /\.module\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true, // Enable CSS modules
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      // SCSS MODULES
      {
        test: /\.module\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              // importLoaders: 1,
              modules: {
                localIdentName: "[local]__[hash:base64:5]", // Scoped class names
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },

      {
        test: /\.svg$/,
        oneOf: [
          {
            issuer: /\.[jt]sx?$/, // Matches files that import SVGs in TSX/JSX files
            use: [
              {
                loader: "@svgr/webpack", // Convert SVGs to React components
                options: {
                  svgo: true, // Enable SVGO
                },
              },
            ],
          },
          {
            type: "asset/resource", // Fallback: SVG as a file
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|ico|woff|woff2|eot|ttf|otf)$/, // Match images, fonts, etc.
        type: "asset/resource", // Handle other assets
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Create an HTML file
      template: "./public/index.html", // Use this HTML file as a template
      filename: "index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),

    new MiniCssExtractPlugin({
      // Extract CSS to a separate file
      filename: "[name].[contenthash].css",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "" }, // Copies everything from public to dist
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
  },
  // devtool: "source-map", // Optional for easier debugging
  devServer: {
    historyApiFallback: true, // Redirects all 404s to index.html
    // Development server configuration
    // static: path.resolve(__dirname, "public"), // Serve content from the public directory
    // port: 3000, // Port for the server
    // open: true, // Automatically open in the browser
    // hot: true, // Enable hot reloading
    // compress: true, // Enable gzip compression
  },
  stats: {
    // Configure console output
    errorDetails: true, // Enable error details
  },
};
