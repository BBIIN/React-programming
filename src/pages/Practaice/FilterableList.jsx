import styles from "@/styles/FilterableList.module.css";

function FilterableList() {
  return (
    <>
      <form>
        <label htmlFor="todo"></label>
        <input
          type="text"
          id="todo"
          placeholder="휴일에 할 일"
          className={`${styles.accent} accent`}
        />
        <button>추가</button>
      </form>
    </>
  );
}

export default FilterableList;
