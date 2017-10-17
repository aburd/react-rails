import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layers from './Layers';

class SideMenu extends Component {
  render() {
    const { messages, blocks, layers } = this.props;
    return (
      <div>
        <h1>Sidemenu</h1>
        <Layers layers={layers} blocks={blocks} messages={messages} />
      </div>
    );
  }
}

const mapStateToProps = state => state.chat.present.entities;

export default connect(mapStateToProps)(SideMenu);
