import React from 'react';
import db from "../firestore/firestore";
class User extends React.Component {
    constructor() {
        super();
        this.state = {
         email: '',
         fullname: ''
        };
      }

      updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      addUser = e => {
        e.preventDefault();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection('users').add({
          fullname: this.state.fullname,
          email: this.state.email
        });  
        this.setState({
          fullname: '',
          email: ''
        });
      };
  render() {
    return (
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            onChange={this.updateInput}
          />
          <input
            type="email"
            name="email"
            placeholder="user.email@email.com"
            onChange={this.updateInput}
          />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }
export default User;