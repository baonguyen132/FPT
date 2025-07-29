import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ButtonSwitchScreen from "../../components/common/button/buttonSwitchScreen";
import ProductList from "./ProductsList";
import ProductsAdd from "./ProductsAdd";

function Products() {
  const {idCategories} = useLoaderData();
  const [screen, setScreen] = useState(true);
  return (
    <>
      {screen ? <ProductList idCategories={idCategories} /> : <ProductsAdd idCategories={idCategories} />}
      <ButtonSwitchScreen onClickHandle={() => {setScreen(!screen)}} />
    </>
  );
}

export default Products;
