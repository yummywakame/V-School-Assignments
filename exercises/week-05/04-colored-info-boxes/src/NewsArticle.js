import React from 'react'

function NewsArticle(props) {
    return(
        <article className={props.newsColor}>
            <div className="photo" style = {{ backgroundImage: "url(" + props.newsImage + ")" }}></div>
            <header>
                <h2><a href={props.newsURL}>{props.newsTitle}</a></h2>
                <h3>{props.newsAuthor}</h3>           
            </header>

            <summary>
                <p>{props.newsSummary}</p>
                <p className="more"><a href={props.newsURL}>more</a></p>
            </summary>
            
        
        </article>
    )
}

export default NewsArticle