import { useLoaderData } from "react-router-dom";
import FormProduct from "../../components/ProductTag/FormProduct"; // đảm bảo export default
import { useState } from "react";
import { handleUploadProducts } from "../../services/productService";

function ProductsUpdate() {
  const { idProduct, name, description, quantity, price, idCategories } = useLoaderData();

  const [product, setProduct] = useState({
    name,
    description,
    quantity: Number(quantity),
    price: Number(price),
    categoryId: idCategories,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "quantity" || name === "price" ? Number(value) : value,
    }));
  };

  const handleUpload = async () => {
      const data = await handleUploadProducts({idCategories: product.idCategories , name: product.name , quantity: product.quantity , price: product.price, idProduct: idProduct ,description: product.description})
      if(data.statusCode == 200) {
          alert(data.message)
          window.location.href = "/products/"+idCategories
      }
      
    }

  

  return (
    <FormProduct
      product={product}
      title="Sửa sản phẩm"
      handleChange={handleChange}
      handleSubmit={handleUpload}
    />
  );
}

export default ProductsUpdate;
