import React from 'react'

const BlogPost = () => {

    return (
        <div>
            <div className="post-preview">
                <a href="post.html">
                    <h2 className="post-title">
                        Man must explore, and this is exploration at its greatest
                    </h2>
                    <h3 className="post-subtitle">
                        Problems look mighty small from 150 miles up
                    </h3>
                </a>
                <p className="post-meta">Posted by
                    <a href=".">Start Bootstrap</a>
                    on September 24, 2019
                </p>
            </div>
            <hr />
        </div>
    )
}

export default BlogPost