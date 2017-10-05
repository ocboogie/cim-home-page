const path = require('path');

const webpack = require('webpack');
const AutoDllPlugin = require('autodll-webpack-plugin');

const port = process.env.PORT || 8080;

module.exports = {

    devtool: 'inline-source-map',

    context: path.join(__dirname, 'app'),

    entry: ['babel-polyfill', './index.js'],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            // For importing css into the html
            {
                test: /\.global\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            // For importing css into object. Used four components
            {
                test: /^((?!\.global).)*\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }
                ]
            },
            // WOFF Font
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff'
                    }
                }
            },
            // WOFF2 Font
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/font-woff'
                    }
                }
            },
            // TTF Font
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'application/octet-stream'
                    }
                }
            },
            // EOT Font
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader'
            },
            // SVG Font
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'image/svg+xml'
                    }
                }
            },
            // Common Image Formats
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
                use: 'url-loader'
            },
            // Markdown
            {
                test: /\.md$/,
                use: [
                    'html-loader',
                    'highlight-loader',
                    'markdown-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({ // inject ES5 modules as global vars
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Tether: 'tether'
        }),
        new AutoDllPlugin({
            filename: '[name].js',
            entry: {
                vendor: [
                    'react',
                    'react-dom',
                    'react-router-dom',
                    'highlight.js'
                ]
            }
        }),
        new webpack.ContextReplacementPlugin(
            /highlight\.js\/lib\/languages$/,
            new RegExp(`^./(${['javascript'].join('|')})$`)
        )
    ],
    devServer: {
        port,
        progress: true
    }
};
