import React, { PropTypes, Component } from 'react';

import Header from './ecosystems/Header';
import Sidebar from './ecosystems/Sidebar';

import { connect } from 'react-redux';

class Frame extends Component {

    render() {
        return (
      <section className="potato">
        <Header dispatch={this.props.dispatch} />

        <Sidebar
          role="admin"
          login={this.props.login}
          dispatch={this.props.dispatch}
          width={300}
          isOpen={this.props.ui.sidebarVisibility} />

        { this.props.children }

      </section>
    );
    }

}

Frame.propTypes = {
    login: PropTypes.object,
    ui: PropTypes.object,
    dispatch: PropTypes.func,
    children: PropTypes.object
};

export default connect(
  state => ({
      ui: state.ui,
      login: state.login
  })
)(Frame);
