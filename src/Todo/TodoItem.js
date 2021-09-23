import React, { useContext } from 'react';
import PropTypes, { number } from 'prop-types';
import Context from '../context';

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = []


    if(todo.completed) {
        classes.push('done')
    }
    const style = {
        li: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '.5rem'
        },
        input: {
            marginRight: '.5rem'
        }
    }

    return(
        <li style={style.li}>
            <span className={classes.join(' ')}>
                <input style={style.input} type='checkbox' onChange={() => onChange(todo.id)} checked={todo.completed} />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className='close' onClick={ removeTodo.bind(null, todo.id) }>&times;</button>
        </li>
    )
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem