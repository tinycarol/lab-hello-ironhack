function Card(props) {
  const {img, aps, exp} = props;
  return (
      <div>
          {img}
          <h4>{aps}</h4>
          <p>{exp}</p>
      </div>
  )
}


export default Card;