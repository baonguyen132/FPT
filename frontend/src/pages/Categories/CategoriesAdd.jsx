import FormCategory from "../../components/CategoryTag/formCategory";
import handleAddCategories from "../../services/categoryService";
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
    <FormCategory title="Thêm danh mục" form={form} handleSubmit={handleAdd} handleChange={handleChange}/>
  );
}

export default CategoriesAdd;
