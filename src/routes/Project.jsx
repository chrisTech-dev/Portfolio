
import Hero2 from '../component/Hero2'
import Pricecard from '../component/Pricecard'
import Workcard from '../component/Workcard'


const Project = () => {
  return (
    <div>
      <Hero2 heading="PROJECTS." text="Some of my most recent works"/>
      <Workcard/>
      <Pricecard/>
    </div>
  )
}

export default Project
