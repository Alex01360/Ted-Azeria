const Réseauxsociaux = ({ props }) => {
    return (
        <div className="Container-Réseauxsociaux-1">
            {props.Container.map((item, index) => (
                <button key={index}>
                        <a href={item.lien} target="_blank">
                            <img src={item.logo} width="100%" alt="" />
                        </a>
                </button>
            ))}
        </div>

    );
};

export default Réseauxsociaux;