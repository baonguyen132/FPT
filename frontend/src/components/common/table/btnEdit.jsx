import React from "react";
import styles from "./btnEdit.module.scss"; // import CSS module

function BtnEdit({ onClick }) {
  return (
    <button className={styles.editBtn} onClick={onClick}>
      Sửa
    </button>
  );
}

export default BtnEdit;
