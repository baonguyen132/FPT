import React from "react";
import styles from "./btnDelete.module.scss";

function BtnDelete({ onClick }) {
  return (
    <button className={styles.deleteBtn} onClick={onClick}>
      Xoá
    </button>
  );
}

export default BtnDelete;
