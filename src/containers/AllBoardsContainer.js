import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/boardActions';
import AllBoards from '../components/AllBoards/AllBoards';

const mapStateToProps = state => {
  return {
    boards: state.boards
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AllBoards);
