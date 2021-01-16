import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getToDoQuote, toggleComplete, deleteTodo} from '../../store/slices/todoSlice';
import './todo.css';

function ToDo() {
    const { todos: {todos, loading} } = useSelector(state => state);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const buildTodo = (e) => {
        e.preventDefault();
        const newNote = {
            id: todos[todos.length -1].id + 1,
            title,
            description,
            completed: false
        }
        dispatch(getToDoQuote(newNote))
    }

    return (
        <section className="todos">
            <h1>My Todo List!!!</h1>
            <div>
                <form onSubmit={buildTodo}>
                    {
                        loading ?
                        <div>Loading...</div>
                        :
                        <>
                            <div className="todos__form-field">
                                <label>Title</label>
                                <input
                                    value={title}
                                    type='text'
                                    placeholder="Title"
                                    onChange={e => setTitle(e.target.value)} 
                                />
                            </div>
                            <div className="todos__form-field">
                                <label>Description</label>
                                <textarea
                                    value={description}
                                    placeholder="Description"
                                    onChange={e => setDescription(e.target.value)} 
                                />
                            </div>
                            <button disabled={!title || !description} type="submit">Create todo</button>
                        </>
                    }
                </form>
    
            </div> 
            <ul className="todos__list">
                {
                    !todos.length &&  <div className="todos__todo"><h2>No notes today</h2></div>   
                }
                {
                todos.map(note => (
                    <div 
                        className={
                            `todos__todo ${note.completed ? 'todos__todo--complete' : 'todos__todo--not-complete'}`
                        } 
                        key={note.id}
                    >
                        <h3>{note.title}</h3>
                        <p>{note.description}</p>
                        {
                            note.quote &&
                            <p><i>{note.quote}</i></p>
                        }
                        <button onClick={() => dispatch(toggleComplete({id: note.id }))}>
                            {note.completed ? 'Mark as undone' : 'Mark as done'}
                        </button>
                        <button onClick={() => dispatch(deleteTodo({id: note.id}))}>
                            Delete
                        </button>
                    </div>
                ))
                }
            </ul>
        </section>
    );
}

export default ToDo;
