import Link from "next/link"
import styles from './not-found.module.scss'

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <h1>Ops, essa página não existe!</h1>

      <Link href="/">
        Voltar a página principal
      </Link>
    </div>
  )
}

export default NotFound
