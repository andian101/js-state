import {REG_EDIT_FIELD} from '../../store/reducers/registerReducer';
import {useDispatch, useSelector} from 'react-redux';
import './index.css';

function Registration() {
  const dispatch = useDispatch();
  const {registration: {
    firstName,
    lastName,
    age,
    address,
    postcode,
  }} = useSelector(state => state);

  const handleChange = e => dispatch({
    type: REG_EDIT_FIELD,
    field: e.target.name, 
    value: e.target.value
  });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Boom!');
  } 
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
