const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base.js');
  it('entry', () => {
    assert.equal(baseConfig.entry.index, 'D:/Projects/build-webpack-xv/test/smoke/template/src/index/index.js');
    assert.equal(baseConfig.entry.search, 'D:/Projects/build-webpack-xv/test/smoke/template/src/search/index.js');
  });
});
