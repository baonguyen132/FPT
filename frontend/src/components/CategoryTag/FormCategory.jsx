import Title from "../common/title/title";
import styles from "./FormCategory.module.scss";

function FormCategory({form, title , handleSubmit , handleChange}) {
  return (
    <div className={styles.form}>
      <Title title={title} />
      <div className={styles.field}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Enter description"
        />
      </div>

      <button type="submit" className={styles.submitBtn} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default FormCategory;
