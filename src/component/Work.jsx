

const work = ({imgs,title,text,view}) => {
  return (
    <div className='per-card'>
      
      <img src={imgs} alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
      <div className='btns'>
        <a href={view} className='btn-card'>view</a>
        <button className='btn-card'>Source</button>

      </div>
    </div>
  )
}

export default work
