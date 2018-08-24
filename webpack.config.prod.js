// add THIS after import
// var ngw = require('@ngtools/webpack');

// Add one extra rule (right before the old rule we had there - 
// don't delete the old rule!):


// {
//     test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
//     loader: '@ngtools/webpack'
//   },

// Add one extra plugin (right before the old plugin we had there - 
// don't delete that old plugin!):

// new ngw.AngularCompilerPlugin({
//     tsConfigPath: './tsconfig.aot.json',
//     entryModule: './src/app/app.module#AppModule'
// }),

// Update the build:prod  script to look like this 
// (only the cleanup part - del-cli - changed a bit):

// "build:prod": "del-cli dist && ngc -p tsconfig.aot.json && ngc -p tsconfig.aot.json && webpack --config webpack.config.prod.js --progress --profile --bail && del-cli 'src/app/**/*.js' 'src/app/**/*.ngfactory.ts' 'src/app/**/*.js.map' 'src/app/**/*.shim.ts' 'src/app/**/*.ngsummary.json' 'src/app/**/*.ngstyle.ts' 'dist/app' 'src/polyfills.ngsummary.json'",

// 5) Add mode: 'development'  to your webpack.config.dev.js  file (e.g. right after the output  property):

// output: {
//     ...
// },
// mode: 'development',

// 6) Add mode: 'production'  to webpack.config.prod.js  file

// 7) Remove the 
// new webpack.optimize.UglifyJsPlugin() 
// line in plugins[]  in webpack.config.prod.js . 
// This is not required anymore since mode: 'production'  will automatically 
// optimize and minify your code.

// With these steps, npm run build:prod  and npm run build  should work fine.