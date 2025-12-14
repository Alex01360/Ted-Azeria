const Barreverticale = ({ props }) => {
  return (
    <>
      {props.Container.map((item, index) => (
        <div key={index} className="Container-Barreverticale-1">
          <img key={index} src={item.image} width="100%" alt={item.titre} />
          <h1>{item.titre}</h1>
        </div>
      ))}
    </>
  );
};

export default Barreverticale;