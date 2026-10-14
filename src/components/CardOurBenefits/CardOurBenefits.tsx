import "./CardOurBenefits.css"

interface propsBenefits {
    img : string
    title : string
    desc : string
}

const CardOurBenefits = ({title , desc ,img} : propsBenefits) => {
    return (
        <div className="cardOurBenefits">
            <div className="boxCardBenefits">
                <img src={img} alt="icon" className="iconBenefits" />
            </div>
            <h2 className="titleCardBenefits">{title}</h2>
            <p className="descBenefits">{desc}</p>
        </div>
    )
}

export default CardOurBenefits