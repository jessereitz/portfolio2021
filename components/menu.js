import { useState } from 'react'
import styles from '../styles/Menu.module.css'

function MenuItem({ itemName }) {
  return (
    <li>
      {itemName}!
    </li>
  )
}

function MenuItems({ menuItems }) {
  return (
    <ul className={styles.menuItems}>
      {menuItems.map(item => <MenuItem key={item.name} itemName={item.name} />)}
    </ul>
  )
}

function something(e) {
  console.log('doing something')
  console.log(e)
}

export default function Menu({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.menuContainer}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>Menu: {isOpen.toString()}</button>
      {
        isOpen &&
        <MenuItems menuItems={menuItems} />
      }
      <div className='something'>

      </div>
    </div>
  )
}
