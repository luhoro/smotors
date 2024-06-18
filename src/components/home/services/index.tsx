import React from "react"
import styles from "./styles.module.scss"
import Container from "@/components/container"
import { HomeProps } from "@/utils/home.type"
import Image from "next/image"
import Link from "next/link"

const Services = ({ object }: HomeProps) => {
  return (
    <>
      <Container>
        <section className={styles.containerAbout} id="servicos">
          <article className={styles.innerAbout}>
            <h2>Sobre</h2>
            <p>{object.metadata.about.description}</p>
          </article>

          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              src={object.metadata.about.banner.url}
              alt="Imagem ilustrativa sobre a empresa"
              quality={100}
              sizes="100%"
              fill
            />
          </div>
        </section>
      </Container>

      <div className={styles.backgroundServices}>
        <Container>
          <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>

          <section className={styles.services}>
            {object.metadata.services.map((service, index) => (
              <div className={styles.service}>
                <div key={index} className={styles.innerService}>
                  <Image
                    src={service.image.url}
                    className={styles.imageService}
                    alt="Imagem do serviço"
                    quality={100}
                    sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
                    fill
                  />
                </div>
                <p>{service.description}</p>
              </div>
            ))}
          </section>
        </Container>
      </div>
    </>
  )
}

export default Services
