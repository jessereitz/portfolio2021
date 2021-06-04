import Image from 'next/image'
import styles from '../styles/JobSection.module.css'

export default function JobSection() {
  const title = 'Software Engineer'
  const company = 'Ordoro'
  const description = 'Ordoro is an eCommerce order and inventory aggregation platform. As part of the team I did a whole bunch of stuff with computers and whatnot. It was really neat and interesting and made me a better person.'
  const dates = 'March 2019 - Present'
  return (
    <div className={styles.jobSection}>
      <div className={styles.jobLogoContainer}>
        <Image
          className={styles.jobLogo}
          src={`/logos/${company.toLowerCase()}-logo.png`}
          width={125}
          height={125}
          layout={'fixed'}
        />
      </div>
      <div className={styles.jobInfo}>
        <div className={styles.jobHeader}>
          <h3 className={styles.jobTitle}>{title}</h3>
          <span className={styles.jobDates}>{dates}</span>
        </div>
        <h4 className={styles.jobCompany}>{company}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}
