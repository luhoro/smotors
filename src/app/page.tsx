import Submenu from "@/components/home/submenu"
import getDataHome from "@/utils/actions/get-data"
import { HomeProps } from "@/utils/home.type"
import Hero from "@/components/hero"
import { MessageCircleMore } from "lucide-react"
import Services from "@/components/home/services"
import Footer from "@/components/home/footer"


export const Home = async () => {
  const { object }: HomeProps = await getDataHome()

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

      <Services object={object} />
      <Footer object={object} />
    </main>
  )
}

export default Home
