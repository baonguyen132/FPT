import styles from "./title.module.scss"
function Title({title}) {
    return <h2 className={styles.title}>{title}</h2>
}

export default Title;