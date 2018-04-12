import React from 'react';

import './ListItem.css';

const ListItem = ({ name, complited, deleteItem, changeItemStatus }) => {
    const className = complited ? 'ListItem ListItem_done' : 'ListItem ListItem_active'
    return (
        <div className={className} onClick={changeItemStatus}>
            {name}
            <button className="ListItem__delete-button" onClick={e => {e.stopPropagation(); deleteItem()}}>+</button>
        </div>
    )
}

export default ListItem