const Musique = ({props}) => {

  return (
    <>
      {props.Container.map((item, index) => (
        <div className="Container-Musique-1" key={index}>
          <div className="Photo-Musique">
            <img src={item.image} width="100%" alt={item.titre} />
          </div>

          <div className="Titre-Lien-Musique">
            <h1>{item.titre}</h1>
            <a href={item.lien} rel="noopener noreferrer"><p>{item.texte}</p></a>
          </div>
        </div>
      ))}
    </>
  )
}

export default Musique