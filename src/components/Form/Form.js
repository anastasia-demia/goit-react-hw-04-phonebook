import css from './Form.module.css';
import { nanoid } from 'nanoid';
import { Button } from 'components/Button/Button';
import { useState } from 'react';

export const Form = ( {onSubmit} ) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('')

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('')
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({name, number});
    event.currentTarget.reset();
    reset();
  }


  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h2 className={css.title}>Name</h2>
      <input
        className={css.input}
        name="name"
        type="text"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
        onChange={handleChange}
        id={nameId}
      ></input>
      <h2 className={css.title}>Number</h2>
      <input
        className={css.input}
        name="number"
        type="tel"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        id={numberId}
      ></input>
      <Button text="Add Contact"/>
    </form>
  );
};
