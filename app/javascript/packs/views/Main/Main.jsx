import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SideMenu from './SideMenu';

class Main extends Component {
  render() {
    const { messages, blocks, layers } = this.props;
    return (
      <div>
        <SideMenu layers={layers} blocks={blocks} messages={messages} />
      </div>
    );
  }
}

Main.propTypes = {
  messages: PropTypes.object.isRequired,
  blocks: PropTypes.object.isRequired,
  layers: PropTypes.object.isRequired,
};

const mapStateToProps = state => state.chat.present.entities;

export default connect(mapStateToProps)(Main);
