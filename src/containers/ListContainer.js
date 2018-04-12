import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/listActions';
import List from '../components/List/List';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.lists.byIds[ownProps.id],
    tasks: state.lists.byIds[ownProps.id].tasks.map((taskId) => state.tasks.byIds[taskId])
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
