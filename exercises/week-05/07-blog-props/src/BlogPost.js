import React from 'react'
import PropTypes from 'prop-types'

const BlogPost = (props, key) => {
    console.log(props)

    return (
        <div>
            <div className="post-preview">
                <a href="post.html">
                    <h2 className="post-title">
                        {props.title}
                    </h2>
                    <h3 className="post-subtitle">
                        {props.subtitle}
                    </h3>
                </a>
                <p className="post-meta">Posted by
                    <a href=".">{props.author}</a>
                    on {props.date}
                </p>
            </div>
            <hr />
        </div>
    )
}

BlogPost.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string
  }

export default BlogPost