

const Card = (props) => {

    const clr = `bg-${props.colorName}/[0.1]`
    console.log(clr)
    return ( 
        <div className={`${props.bgClass} p-4 flex items-center justify-between rounded-md sm:w-full`}>
            <div className={`${props.textClass} flex`}>
                <img src={props.imgUrl} alt="" className="px-2"/>
                <p>{props.cardName}</p>
            </div>
            <div>
                <span className="font-bold">{props.cardValue}</span>
                <span className=" opacity-50"> / 100</span>
            </div>
        </div>
    );
}
 
export default Card;