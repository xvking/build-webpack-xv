'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import bignumber from 'bignumber-xv';
import logo from './images/logo.jpeg';
// import '../../common';
// import { a } from './tree-shaking';

/* if (flase) {
  a();
} */

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

ReactDOM.render(
  <Search />,
  document.getElementById('root'),
);
