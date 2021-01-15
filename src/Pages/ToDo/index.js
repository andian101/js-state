import {useState} from 'react';
import './todo.css';

function ToDo() {
    const [notes, setNotes] = useState([
        {
            id: '1',
            title: "Wash Bike",
            description: "Wash bike. Its is dirty",
            completed: false
        }
    ]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const deleteNote = (id) => {
        setNotes(notes.filter(f => f.id !== id))
    }
    const createNote = (e) => {
        e.preventDefault();
        const newNote = {
            id: notes[notes.length -1].id ++,
            title,
            description,
            completed: false
        }
        setNotes([
            ...notes,
            newNote
        ])
    }
    const markAsComplete = (id) => {
        setNotes(notes.map(f => {
            if(f.id === id) f.completed = !f.completed;
            return f;
        }))
    }

    return (
        <section className="todos">
            <h1>My Todo List!!!</h1>
            <div>
                <form onSubmit={createNote}>
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
            </div> 
            <ul className="todos__list">
                {
                    !notes.length &&  <div className="todos__todo"><h2>No notes today</h2></div>   
                }
                {
                notes.map(note => (
                    <div 
                        className={
                            `todos__todo ${note.completed ? 'todos__todo--complete' : 'todos__todo--not-complete'}`
                        } 
                        key={note.id}
                    >
                        <h3>{note.title}</h3>
                        <p>{note.description}</p>
                        <button onClick={() => markAsComplete(note.id)}>
                            {note.completed ? 'Mark as undone' : 'Mark as done'}
                        </button>
                        <button onClick={() => deleteNote(note.id)}>
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
