export default function Slideshow(props) {
  return(
    <div>
      <div>{props.location}</div>
      <img src={require(`../images/${props.img}`)} alt={props.title}/>
      <p>
        <span>{props.stats.rating}</span>
        <span>({props.stats.reviewCount})</span>
        <span>|</span>
        <span>{props.country}</span>
      </p>
      <p>{props.title}</p>
      <p><span>From {props.price}</span> / person</p>
    </div>
  )
  
}