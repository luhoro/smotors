import { HomeProps } from "@/utils/home.type"
import styles from "./styles.module.scss"
import Container from "@/components/container"
import { Mail, Map, Phone, Clock, MessageCircleMore } from "lucide-react"
import Link from "next/link"

const Contacts = ({ object }: HomeProps) => {
  return (
    <section className={styles.footer} id="contatos">
      <Container>
        <div className={styles.section}>
          <h2 className={styles.title}>Contatos</h2>

          <div className={styles.content}>
            <div className={styles.item}>
              <Mail size={28} color="white" />
              <div>
                <strong>Email</strong>
                <p>{object.metadata.contact.email}</p>
              </div>
            </div>

            <div className={styles.item}>
              <Phone size={28} color="white" />
              <div>
                <strong>Telefone</strong>
                <p>{object.metadata.contact.phone}</p>
              </div>
            </div>

            <div className={styles.item}>
              <Map size={28} color="white" />
              <div>
                <strong>Endereço</strong>
                <p>{object.metadata.contact.address}</p>
              </div>
            </div>

            <div className={styles.item}>
              <Clock size={28} color="white" />
              <div>
                <strong>Horário</strong>
                <p>{object.metadata.contact.time}</p>
              </div>
            </div>
          </div>
        </div>

        <Link
          href={object.metadata.cta_button.url}
          target="_blank"
          className={styles.link}
        >
          {object.metadata.cta_button.title}
          <MessageCircleMore size={24} />
        </Link>

      </Container>
    </section>
  )
}

export default Contacts
