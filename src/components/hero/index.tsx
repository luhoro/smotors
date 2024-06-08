import Link from "next/link"
import styles from "./styles.module.scss"
import Image from "next/image"
import { ReactNode } from "react"

interface HeroProps {
  heading: string
  buttonUrl: string
  buttonTitle: string
  bannerUrl: string
  icon?: ReactNode
}

const Hero = ({
  heading,
  buttonUrl,
  buttonTitle,
  bannerUrl,
  icon,
}: HeroProps) => {
  return (
    <main className={styles.main} id="home">
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>
        <Link href={buttonUrl} target="_blank" className={styles.link}>
          {buttonTitle}
          {icon}
        </Link>
      </div>

      <div className={styles.contentBanner}>
        <Image
          className={styles.banner}
          alt={heading}
          src={bannerUrl}
          priority
          quality={100}
          fill
        />
      </div>
    </main>
  )
}

export default Hero
