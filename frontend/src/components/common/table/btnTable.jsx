import React from "react";
import styles from "./btnTable.module.scss"; // import CSS module

function BtnTable({ onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      Truy cập
    </button>
  );
}

export default BtnTable;
