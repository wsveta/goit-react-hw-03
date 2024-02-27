import css from './SearchBox.module.css'
import { useId } from 'react';

const SearchBox = ({value, onFilter}) => {
  const findInputId = useId();

  return (
    <div className={css.findContactForm}>
      <label className={css.findContactName} htmlFor={findInputId}>Find contacts by name</label>
      <input value={value} onChange={(event) => onFilter(event.target.value)} id={findInputId} className={css.findContactInput} type="text" />
    </div>
  );
};

export default SearchBox