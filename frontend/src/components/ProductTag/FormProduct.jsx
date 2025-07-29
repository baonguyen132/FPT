import Title from "../common/title/title";
import styles from "./FormProduct.module.scss"

function FromProduct({product, title , handleSubmit , handleChange }) {
  return (
    <div className={styles.container}>
      <Title title={title} />

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
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default FromProduct;
