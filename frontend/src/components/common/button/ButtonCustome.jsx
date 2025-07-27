import React from 'react';
import styles from './ButtonCustome.module.scss';
function ButtonCustome({name , onClickHandle}) {
    return ( <button type="submit" className={styles.button} onClick={onClickHandle}>{name}</button> );
}

export default ButtonCustome;