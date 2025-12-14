const Bio = ({ props }) => {
    return (
        <>
            <div className="Container-Bio-1">
                {props.Container.map((item) => (
                    <>
                        {item.Intro &&
                            <div className="Container-Bio-2">
                                {item.Intro?.map((intro, index) => (
                                    <h1 key={index}>{intro.titre}</h1>
                                ))}
                            </div>}

                        {item.Catégorie?.map((catégorie, index) => (
                            <>
                                <div key={index} className="Container-Bio-3">
                                    <div className="Vidéo-Bio">
                                        <video src={catégorie.vidéo} controls autoPlay loop muted width="100%"></video>
                                    </div>

                                    <div className="Container-Bio-4">
                                        <div className="Logo-Bio">
                                            <img src={catégorie.photo} width="40%" alt="Profile" />
                                        </div>

                                        <div className="Texte-Bio">
                                            {catégorie.texte.map((item, index) => (
                                                <p key={index}>{item}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </>
                ))}
            </div>
        </>
    );
}

export default Bio