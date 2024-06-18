import Submenu from "@/components/home/submenu"
import { getDataHome, getSubMenu } from "@/utils/actions/get-data"
import { HomeProps } from "@/utils/home.type"
import { MenuProps } from "@/utils/menu.type"
import Hero from "@/components/hero"
import { MessageCircleMore } from "lucide-react"
import Services from "@/components/home/services"
import Footer from "@/components/footer"
import Contacts from "@/components/home/contacts"

export const Home = async () => {
  const { object }: HomeProps = await getDataHome()
  const menu: MenuProps = await getSubMenu()

  return (
    <main>
      {menu.objects.length > 0 && <Submenu menu={menu} />}

      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<MessageCircleMore size={24} />}
      />

      <Services object={object} />
      <Contacts object={object}/>
    </main>
  )
}

export default Home
