const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./src/index.tsx", // Entry file
  output: {
    // Output file
    // publicPath: "./", // Base path
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js",
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
            loader: isProd ? MiniCssExtractPlugin.loader : "style-loader",
          },
          {
            loader: "css-loader",
            // options: {
            //   importLoaders: 1,
            //   modules: {
            //     mode: "icss",
            //   },
            // },
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
            loader: isProd ? MiniCssExtractPlugin.loader : "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              // importLoaders: 1,
              modules: true,
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
    }),
    new MiniCssExtractPlugin({
      // Extract CSS to a separate file
      filename: isProd ? "[name].[contenthash].css" : "[name].css",
    }),
  ],
  // devtool: "source-map", // Optional for easier debugging
  devServer: {
    // historyApiFallback: true, // Redirects all 404s to index.html
    // Development server configuration
    static: path.resolve(__dirname, "public"), // Serve content from the public directory
    port: 3000, // Port for the server
    open: true, // Automatically open in the browser
    hot: true, // Enable hot reloading
    compress: true, // Enable gzip compression
  },
  mode: "development", // Set the mode to development
  stats: {
    // Configure console output
    errorDetails: true, // Enable error details
  },
};
