import styles from './inputCustome.module.scss';

function InputCustome({name, label ,value, onChangeHandle}) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        value={value}
        onChange={(e) => onChangeHandle(e.target.value)}
        required
      />
    </div>
  );
}

export default InputCustome;
