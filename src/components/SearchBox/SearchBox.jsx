import css from "./SearchBox.module.css";

const SearchBox = ({ filter, handleFilterChange }) => {
  return (
    <>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};

export default SearchBox;
