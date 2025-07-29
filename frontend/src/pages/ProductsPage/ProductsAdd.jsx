import { useState } from "react";
import handleAddProducts from "../../services/productService";
import FromProduct from "../../components/ProductTag/FormProduct";

function ProductsAdd({ name, idCategories }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    quantity: 0,
    price: 0,
    categoryId: idCategories,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "quantity" || name === "price" ? Number(value) : value,
    }));
  };

  const handleAdd = async () => {
    const data = await handleAddProducts({
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      categoryId: product.categoryId,
    });

    setProduct({
      name: "",
      description: "",
      quantity: 0,
      price: 0,
      categoryId: idCategories || "",
    });
    alert(data.message);
  };

  return (
    <FromProduct
      product={product}
      title="Thêm sản phẩm"
      handleChange={handleChange}
      handleSubmit={handleAdd}
    />
  );
}

export default ProductsAdd;
