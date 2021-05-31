const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const fs = require('fs');
const JSONC = require('jsonc');

const src =  path.join(__dirname, '/src');
const out = path.join(__dirname, `/build`);

const config = JSONC.parse(fs.readFileSync(path.join(src, 'Config.jsonc')).toString());

// build copy patterns object
const assets = [];

if(config.assets)
{
    for(const asset of config.assets)
    {
        if(typeof asset === 'string')
        {
            assets.push({ from: path.join(src, asset), to: path.join(out, asset) });
        }
        if(typeof asset === 'object')
        {
            if(asset.from && asset.to)
            {
                assets.push({ from: path.join(src, asset.from), to: path.join(out, asset.to) });
            }
            else
            {
                console.error('invalid asset declaration');
            }
        }
    }
}

module.exports = {
    devtool: 'eval-source-map',
    entry: path.join(src, config.main),
    output: {
        filename: `${config.name}.js`,
        path: path.join(__dirname, 'build'),
        libraryTarget: 'var',
        library: config.name
    },
    plugins: [
        new CopyPlugin({
            patterns: assets
        })
    ],
    module: {
        // import Bundles rules
        rules: [
            // typescript
            {
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: path.join(__dirname, config.tsconfig || 'tsconfig.json')
                    }
                }],
                exclude: /node_modules/,
            },
            // stylesheet
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            // images
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            // fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    }
};