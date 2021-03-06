import React, { PropTypes, Component } from 'react';

import { connect } from 'react-redux';
import Card from './../atoms/Card';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
          <div className="twelve columns">
            <Card>
              <pre>OKCandidate Home Screen</pre>
            </Card>
          </div>
    );

    }

}

Home.propTypes = {
    user: PropTypes.object
};

export default connect(
  state => ({
      survey: state.survey,
      ui: state.ui
  })
)(Home);
