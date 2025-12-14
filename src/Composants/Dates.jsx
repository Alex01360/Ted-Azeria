const Dates = ({props}) => {
    return (
        <>
                {props.Container.map((item, containerIndex) => (
                    <div className="Container-Dates-1" key={containerIndex}>
                            {item.ProchainesDates?.map((item,index) => (
                                <div key={index} className="Dates-Lieux-Infos">
                                    <h1>{item.date}</h1>
                                    <h1>{item.Lieux}</h1>

                                    <button className="Bouton-Evènement">
                                        <a href={item.lien} target="_blank"><p>{item.info}</p></a>
                                    </button>
                                </div>
                            ))}
                        </div>
                ))}
        </>
    );
};

export default Dates;
