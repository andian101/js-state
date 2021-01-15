import {useReducer} from 'react';
import './index.css';

const initialState = {
  firstName: "",
  lastName: "",
  age: 0,
  address: "",
  postcode: ""
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'update':
      return {
        ...state,
        [action.field]: action.value
      }
    default:
      return {...state}
  }
} 
// const reducer = (state, {field, value}) => {
//   return {
//     ...state,
//     [field]: value
//   }
// } 

function Registration() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    firstName,
    lastName,
    age,
    address,
    postcode,
  } = state;

  const handleChange = e => dispatch({
    type: 'update',
    field: e.target.name, 
    value: e.target.value
  });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Boom!');
  } 

  console.log(state); 

  return (
    <div className="registration">
      <h1>Registration Form</h1>
      <form onSubmit={e => handleSubmit(e)}>
          <div className="form-element">
              <label htmlFor="first-name">First Name: </label>
              <input 
                type="text"
                id="first-name"
                name="firstName"
                value={firstName}
                onChange={handleChange} 
              />
          </div>
          <div className="form-element">
              <label htmlFor="last-name">Last Name: </label>
              <input 
                type="text"
                id="last-name"
                name="lastName"
                value={lastName}
                onChange={handleChange} 
              />
          </div>
          <div className="form-element">
              <label htmlFor="age">Age: </label>
              <input 
                type="number"
                id="age"
                name="age"
                value={age}
                onChange={handleChange} 
              />
          </div>
          <div className="form-element">
              <label htmlFor="address">Address: </label>
              <input 
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={handleChange} 
              />
          </div>
          <div className="form-element">
              <label htmlFor="postcode">Postcode: </label>
              <input 
                type="text"
                id="postcode"
                name="postcode"
                value={postcode}
                onChange={handleChange} 
              />
          </div>

          <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
