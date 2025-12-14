const Media = ({props}) => {
    return (
        <>
            {props.Container.map((item, itemIndex) => (
                <div className="Container-Média-1" key={itemIndex}>
                    {item.Image.map((image, index) => (
                        <div className="Image-Média" key={index}>
                            <img src={image} width="100%"/>
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}

export default Media