import Hero from "@/components/hero"
import styles from "./styles.module.scss"
import { getItemBySlug } from "@/utils/actions/get-data"
import { PostProps } from "@/utils/post.type"
import { MessageCircleMore } from "lucide-react"
import Container from "@/components/container"
import Link from "next/link"
import Image from "next/image"

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { objects }: PostProps = await getItemBySlug(slug)

  return (
    <>
      <div className={styles.beforeHero}/>
      <Hero
        heading={objects[0].title}
        buttonTitle={objects[0].metadata.button.title}
        buttonUrl={objects[0].metadata.button.url}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<MessageCircleMore size={24} />}
      />

      <Container>
        <section className={styles.about} id="servicos">
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>{objects[0].metadata.description.title}</h1>

            <p>{objects[0].metadata.description.text}</p>

            {objects[0].metadata.description.button_active && (
              <Link
                href={objects[0].metadata.description.button_url as string}
                target="_blank"
                className={styles.link}
              >
                {objects[0].metadata.description.button_title}
              </Link>
            )}
          </article>

          <div className={styles.bannerAbout}>
            <Image 
              className={styles.imageAbout}
              alt={objects[0].title}
              quality={100}
              priority
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
              src={objects[0].metadata.description.banner.url}
            />
          </div>
        </section>
      </Container>
    </>
  )
}

export default Page
