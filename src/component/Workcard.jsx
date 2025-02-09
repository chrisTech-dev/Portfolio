import './Workcard.css'
import prodata from './Workdata.jsx'
import Work from './Work.jsx'


const Workcard = () => {
  return (
    <div className='work-container'>
      <div className='work-card'>
        {prodata.map((dat,index)=>{
            return <Work key={index} imgs={dat.imgsrc} title={dat.title} text={dat.text} view={dat.view}/>
        })}
      </div>
    </div>
  )
}

export default Workcard
