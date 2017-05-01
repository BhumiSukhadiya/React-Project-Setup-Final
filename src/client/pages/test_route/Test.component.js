import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Test.scss';
import {connect} from 'react-redux';
import {incCounter} from './Test_route.action';
import {bindActionCreators} from 'redux';

class Test extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          Counter value: {this.props.counter}<br/>
          <button onClick={this.props.incCounter}>Click me</button>
          <br/>
          <h1>Hello world test page</h1>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({incCounter}, dispatch)
}

function mapStateToProps(store){
  return{
    counter:store.counter.counter
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(s)(Test));



