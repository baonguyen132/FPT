import styles from "./ButtonSwitchScreen.module.scss"
function ButtonSwitchScreen({onClickHandle}) {
  return (
    <div className={styles.switchScreen} onClick={onClickHandle}>
      <i className="bxr  bx-plus"></i>
    </div>
  );
}

export default ButtonSwitchScreen;
