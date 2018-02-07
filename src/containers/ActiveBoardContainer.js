import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/activeBoardActions';
import ActiveBoard from '../components/ActiveBoard/ActiveBoard';

const mapStateToProps = (state, ownProps) => {
  return {
    boardId: ownProps.match.params.id,
    lists: state.boards.byIds[ownProps.match.params.id].lists.map(
      listId => state.lists.byIds[listId]
    ),
    tasks: []
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveBoard);
