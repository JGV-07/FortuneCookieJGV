const FortuneCookie = ({data}) => {


    
    return (
        <article className="container">
            <h2 className="message"> {data.phrase} </h2>
        </article>
    )
}

export default FortuneCookie