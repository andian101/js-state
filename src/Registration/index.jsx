import {useState} from 'react';
import './index.css';

function Registration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');

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
                name="first-name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)} 
              />
          </div>
          <div className="form-element">
              <label htmlFor="last-name">Last Name: </label>
              <input 
                type="text"
                id="last-name"
                name="last-name"
                value={lastName}
                onChange={e => setLastName(e.target.value)} 
              />
          </div>
          <div className="form-element">
              <label htmlFor="age">Age: </label>
              <input 
                type="number"
                id="age"
                name="age"
                value={age}
                onChange={e => setAge(e.target.value)} 
              />
          </div>
          <div className="form-element">
              <label htmlFor="address">Address: </label>
              <input 
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={e => setAddress(e.target.value)} 
              />
          </div>
          <div className="form-element">
              <label htmlFor="postcode">Postcode: </label>
              <input 
                type="text"
                id="postcode"
                name="postcode"
                value={postcode}
                onChange={e => setPostcode(e.target.value)} 
              />
          </div>

          <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
