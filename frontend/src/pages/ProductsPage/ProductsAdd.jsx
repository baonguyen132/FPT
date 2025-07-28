import { useState } from "react";
import styles from "./ProductsAdd.module.scss";
import Title from "../../components/common/title/title";
import handleAddProducts from "../../services/productService";

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
    <div className={styles.container}>
      <Title title="Thêm sản phẩm" />

      <div className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Tên sản phẩm</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Nhập tên sản phẩm"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="description">Mô tả</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Nhập mô tả"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="quantity">Số lượng</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            min={0}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="price">Giá</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            step="0.01"
            min={0}
          />
        </div>

        <button
          type="submit"
          className={styles.submitBtn}
          onClick={() => {handleAdd()}}
        >
          Thêm sản phẩm
        </button>
      </div>
    </div>
  );
}

export default ProductsAdd;
