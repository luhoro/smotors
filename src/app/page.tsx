import Submenu from "@/components/home/submenu"
import getDataHome from "@/utils/actions/get-data"
import { HomeProps } from "@/utils/home.type"
import Hero from "@/components/hero"
import { MessageCircleMore } from "lucide-react"

export const Home = async () => {
  const { object }: HomeProps = await getDataHome()

  console.log(object.slug)

  return (
    <main>
      <Submenu />
      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<MessageCircleMore size={24} />}
      />
    </main>
  )
}

export default Home