import Banner from '../../components/Banner'
import LayoutContainer from '../../components/Layout/LayoutContainer'
import Sidebar from '../../components/Sidebar/Sidebar'
import { getStaticPaths, getI18nProps } from '../../lib/getStatic'
import { FoodPlace } from '../../types/FoodPlace'

interface HomeProps {
  foodPlaces: FoodPlace[]
}

export default function Home({ foodPlaces }: HomeProps) {
  return (
    <>
      <Banner />
      <Sidebar foodPlaces={foodPlaces} />
      <LayoutContainer />
    </>
  )
}

export const getStaticProps = async (ctx: unknown) => {
  const foodPlaces = await (
    await fetch('https://tum-dev.github.io/eat-api/enums/canteens.json')
  ).json()

  return {
    props: {
      ...(await getI18nProps(ctx, ['common'])),
      foodPlaces,
    },
  }
}
export { getStaticPaths }
