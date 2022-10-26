import Link from 'next/link';
import styles from '../styles/Action.module.scss'

const Action = ({each}) => {
  
  const {id,image,title,description,point} = each

  return (
  <Link href={`/testcase/${id}`} >
      <a className={styles.each}>
      <div className={styles.imgDiv}>
        <img src={image} alt="Picture of the author"
          width={50}
          height={50} />
      </div>
      <div className={styles.infoDiv}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.pointDiv}>
        <p>+{point}</p>
      </div>
      </a>
    </Link>
  )
}

export default Action