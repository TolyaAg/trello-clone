import { connect } from 'react-redux';
import { addList, deleteList } from '../actions/activeBoardActions';
import ActiveBoard from '../components/ActiveBoard/ActiveBoard';

const mapStateToProps = state => {
  return {
    lists: state.lists,
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addList: (boardId, name) => {
      dispatch(addList(boardId, name));
    },
    deleteList: id => {
      dispatch(deleteList(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveBoard);
