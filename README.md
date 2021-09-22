# fix zip.js can't not be packed by webpack4

#### Issues: https://github.com/CesiumGS/cesium/issues/9790

<br>

If you use cesium.js 1.85 , and create-react-app or vue 2x.

You will encounter the following problems: 

"/node_modules/cesium/Source/ThirdParty/zip.js" this file can't not be packed

I found out the cause of the problem.

[gildas-lormeau/zip.js#258 (comment)](https://github.com/gildas-lormeau/zip.js/discussions/258#discussioncomment-925643)



<br>

#### Solution

`@open-wc/webpack-import-meta-loader` can solve this problem.

if you use create-react-app , `@craco/craco` is more suitable for cesium 1.85.

