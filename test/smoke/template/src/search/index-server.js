'use strict';

/* import React from 'react';
import './search.less';
import bignumber from 'bignumber-xv';
import logo from './images/logo.jpeg';
 */
const React = require('react');
const bignumber = require('bignumber-xv');
const logo = require('./images/logo.jpeg');
require('./search.less');


class Search extends React.Component {

  constructor() {
    super(...arguments);
    this.state = {
      Text: null,
    };
  }

  loadComponent () {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }

  render () {
    const { Text } = this.state;
    const addResult = bignumber('9999', '1');
    return (
      <div className="search-text">
        {Text ? <Text /> : null}
        {addResult}
        搜索文字
        <img src={logo} onClick={this.loadComponent.bind(this)} />

      </div>
    );
  }
}

module.exports = <Search />;
