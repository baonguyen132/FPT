import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FormCategory from "../../components/CategoryTag/formCategory";
import { handleUploadCategories } from "../../services/categoryService";

function CategoriesUpdate() {

  const {idCategories , name , description} = useLoaderData()

  const [form, setForm] = useState({ name: name, description: description });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpload = async () => {
    const data = await handleUploadCategories({idCategories: idCategories , name: form.name , description: form.description})
    if(data.statusCode == 200) {
        alert(data.message)
        window.location.href = "/categories"
    }
    
  }
  
  return (
    <FormCategory
      title="Cập nhật danh mục"
      form={form}
      handleSubmit={handleUpload}
      handleChange={handleChange}
    />
  );
}

export default CategoriesUpdate;
