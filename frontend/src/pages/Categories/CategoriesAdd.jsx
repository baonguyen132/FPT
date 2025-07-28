import Title from "../../components/common/title/title";
import handleAddCategories from "../../services/categoryService";
import styles from "./CategoriesAdd.module.scss";
import { useState } from "react";

function CategoriesAdd() {
  const [form, setForm] = useState({ name: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = async () => {
    const data = await handleAddCategories({name: form.name , description: form.description})
    setForm({name: "", description: ""})
    alert(data.message)
    
  }

  return (
    <div className={styles.form}>
      <Title title = "Thêm sản phẩm" />
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

      <button type="submit" className={styles.submitBtn} onClick={handleAdd}>
        Submit
      </button>
    </div>
  );
}

export default CategoriesAdd;
