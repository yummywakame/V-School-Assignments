import React from 'react'
import BlogPost from './BlogPost.js'

const BlogList = (props) => {
    
    const mappedArticle = props.data.map((item, key) => (
        <BlogPost 
            title={item.title} 
            subtitle={item.subtitle} 
            author={item.author} 
            date={item.date} 
            key={key} 
        />
    ))

    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                
                    {mappedArticle}
                    
                    <div className="clearfix">
                        <a className="btn btn-primary float-right" href=".">Older Posts →</a>
                    </div>
                    
                </div>
            </div>
            <hr />
        </div>
    )
}

export default BlogList