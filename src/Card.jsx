

const Card = (props) => {

console.log(props.bgColor)

    return ( 
        <div className={`bg-${props.color}/[0.1] p-4 flex items-center justify-between rounded-md sm:w-full`}>
            <div className={`text-${props.color} flex`}>
                <img src={`../src/assets/images/${props.imgName}`} alt="" className="px-2"/>
                <p className="">{props.cardName}</p>
            </div>
            <p>{props.cardValue}</p>
        </div>
    );
}
 
export default Card;