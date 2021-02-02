import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getToDoQuote,deleteNote,completeNote} from '../../store/reducers/toDo'
import './todo.css';

function ToDo() {
    const {
        todos: { todos, loading },
        register
    } = useSelector(state => state);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    console.log(register);

    const createTheNote = (e) => {
        e.preventDefault();
        const newNote = {
            id: todos[todos.length -1].id ++,
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
                {
                    loading && <div>...loading</div>
                }
                {
                    !loading &&
                    <form onSubmit={createTheNote}>
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
                    </form>
                
                }
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
                            <p>{note.quote}</p>
                        }
                        <button onClick={() => dispatch(completeNote(note.id))}>
                            {note.completed ? 'Mark as undone' : 'Mark as done'}
                        </button>
                        <button onClick={() => dispatch(deleteNote(note.id))}>
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
