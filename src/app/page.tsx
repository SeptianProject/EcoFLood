import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import MapLoader from '@/components/layout/MapLoader'

const page = () => {
  return (
    <>
      <Header />
      <div className='min-h-screen '>
        <MapLoader />
      </div>
      <Footer />
    </>
  )
}

export default page 