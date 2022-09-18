
import React, { Component } from "react";
import { nanoid } from 'nanoid';
import style from 'components/Phonebook/phonebook.module.css'
import PropTypes from 'prop-types';

class Phonebook extends Component {
state = {
       name: '',
        number: ''
       }
    
 nameId = nanoid();
numberId = nanoid();

 handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value,
    
    })
 }
    handleSubmit = (e) => {
    e.preventDefault() 
        const { name, number } = this.state;
        this.props.onSubmit({ name, number });
    this.setState({
       name: '',
   number: ''
    })
   
  }

 render() {
        const { nameId, numberId, handleSubmit} = this;
       
     return (
         <div className={style.box}>
  <h1>Phonebook</h1>
             <form onSubmit={handleSubmit}>
                 Name
                 <div>
                     
          <label htmlFor={nameId}></label>
        <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          id={nameId}
          onChange={this.handleChange}
          />
                 </div>
                 Number
         <div>
        <label htmlFor={numberId}></label>     
        <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          id={numberId}
            onChange={this.handleChange}
/></div>
         <button type="submit">Add contact</button>
                </form>
                </div>
     )
    }
}
export default Phonebook;

