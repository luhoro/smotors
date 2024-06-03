"use client"
import { useState, useEffect } from "react"
import styles from "./styles.module.scss"
import Link from "next/link"

import { X, Menu } from "lucide-react"
import Container from "@/components/container"

const Submenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className={styles.submenu}>
      <Container>
        <button className={styles.submenuIcon} onClick={toggleMenu}>
          <Menu size={28} />
          <p>Serviços</p>
        </button>

        <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
          {isOpen && (
            <button className={styles.closeButton} onClick={toggleMenu}>
              <X className={styles.icon} />
            </button>
          )}
          <li>
            <Link href="/-">-</Link>
          </li>

          <li>
            <Link href="/-">-</Link>
          </li>

          <li>
            <Link href="/-">-</Link>
          </li>
        </ul>
      </Container>
    </section>
  )
}

export default Submenu
