import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Menu.module.css'
import cn from 'classnames'

function MenuItem({ itemName }) {
  return (
    <li>
      <a href="#">
        {itemName}!
      </a>
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

export default function Menu({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false)
  const node = useRef()

  const handleClick = (e) => {
    if (!node.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <div
      ref={node}
      className={cn(
        styles.menuContainer,
        {[styles.expanded]: isOpen,}
      )}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          styles.button,
          {[styles.expanded]: isOpen,}
        )}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
      {
        isOpen &&
        <MenuItems menuItems={menuItems} />
      }
    </div>
  )
}
