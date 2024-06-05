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
        <section className={styles.containerAbout}>
          <article className={styles.innerAbout}>
            <h2>Sobre</h2>
            <p>{object.metadata.about.description}</p>
          </article>

          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt="Imagem ilustrativa sobre a empresa"
              quality={100}
              fill
              src={object.metadata.about.banner.url}
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
                    className={styles.imageService}
                    alt="Imagem do serviço"
                    quality={100}
                    fill
                    src={service.image.url}
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
