import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu'
import JobSection from '../components/jobSection'

export default function Home() {
  const menuItems = [
    {name: 'About Me'},
    {name: 'Experience'},
    {name: 'Contact'}
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>Jesse Reitz | Software Developer</title>
        <meta name="description" content="Software development portfolio for Jesse Reitz" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>
            Jesse Reitz
          </h1>
          <span className={styles.divider}></span>
          <h2 className={styles.subtitle}>Software Developer</h2>
          <Menu menuItems={menuItems} />
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.mainSection}>
          <h2>About Me</h2>
          <p>
            Hey there! My name is Jesse. I'm a software developer passionate about
            creating beautiful, readable, and modular applications. Most of my experience
            consists of writing server-side code in Python (think Django, Flask, and a whole lot of other stuff)
            but I'm not afraid to get my hands dirty with a little JavaScript every now and then too.
        </p>
          <p>
            I am currently employed as a Support Engineer / Software Developer with an awesome
            small company in Austin, TX. My main responsibilities center on writing custom integrations
            for folks wanting to get that little extra out of our core application.
        </p>
          <p>
            At home, I have most recently been working on a proprietary GitHub-Slack integration called
            NotifyLess.
            NotifyLess is aimed at culling the firehose of information that is the stock GitHub-Slack
            integration.
            It allows users to subscribe to specific events in GitHub and receive personalized Slack messages
            with those
            events. So if @sallysue assigns @jessereitz to an issue, I'll get a personal Slack message from
            NotifyLess telling
            me as much.
        </p>
        </section>
        <section className={styles.mainSection}>
          <h2>Experience</h2>
          <JobSection />
          <JobSection />
          <JobSection />
        </section>
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
