function Boards() {

    let boards = JSON.parse(localStorage.getItem('boards'));

    function getBoards() {
        return boards;
    }

    function getBoard(name) {

        let board = {};
    
        for (let i = 0; i < boards.length; i++) {
            if(boards[i].name === name) {
                board = boards[i];
                break;
            }
        }
    
        return board
    }

    function getLists(boardName) {
        return getBoard(boardName).lists;
    }

    function getList(boardName, listName) {

        let list = null;
        let lists = getLists(boardName);

        for (let i = 0; i < lists.length; i++) {
            if(lists[i].name === listName) {
                list = lists[i];
                break;
            }
        }

        return list;
    }

    function getTasks(boardName, listName) {
        return getList(boardName, listName).tasks;
    }

    function addBoard(boardName) {

        boards.push( {name: boardName, lists: []} );
    
        localStorage.setItem('boards', JSON.stringify(boards));
    }
    
    function addList(boardName, listName) {
    
        let board = getBoard(boardName);
        board.lists.push({name: listName, tasks:[]})
    
        localStorage.setItem('boards', JSON.stringify(boards));
    }

    function addTask(boardName, listName, taskName) {

        let list = getList(boardName, listName);
        list.tasks.push({name: taskName, complited: false})

        localStorage.setItem('boards', JSON.stringify(boards));
    }

    function deleteBoard(name) {

        let index = null;

        for (let i = 0; i < boards.length; i++) {
            if(boards[i].name === name) {
                index = i;
                break;
            }
        }

        boards.splice(index, 1);

        localStorage.setItem('boards', JSON.stringify(boards));
    }

    function deleteList(boardName, listName) {

        let lists = getLists(boardName);
        let index = null;

        for (let i = 0; i < lists.length; i++) {
            if(lists[i].name === listName) {
                index = i;
                break;
            }
        }

        lists.splice(index, 1);

        localStorage.setItem('boards', JSON.stringify(boards));
    }

    function deleteItem(boardName, listName, itemName) {
        let tasks = getTasks(boardName, listName);
        let index = null;

        for (let i = 0; i < tasks.length; i++) {
            if(tasks[i].name === itemName) {
                index = i;
                break;
            }
        }

        tasks.splice(index, 1);

        localStorage.setItem('boards', JSON.stringify(boards));
    }

    function changeItemStatus(boardName, listName, itemName) {
        let tasks = getTasks(boardName, listName);

        for (let i = 0; i < tasks.length; i++) {
            if(tasks[i].name === itemName) {
                tasks[i].complited = !tasks[i].complited;
                break;
            }
        }

        localStorage.setItem('boards', JSON.stringify(boards));
    }

    return {
        getBoards,
        getBoard,
        getLists,
        addBoard,
        addList,
        addTask,
        deleteBoard,
        deleteList,
        deleteItem,
        changeItemStatus
    }
}

export {
    Boards
}