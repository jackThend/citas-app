module.exports = {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        assert: require.resolve('assert'),
        zlib: require.resolve('browserify-zlib'),
        util: require.resolve('util'),
        buffer: require.resolve('buffer'),
      },
    },
  };
  