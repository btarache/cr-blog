import React from 'react'
import posts from './../data/posts.js';
import post from './../data/posts.js'
import {Link} from 'react-router-dom'


const Blog = () => {
    return (
        <div>
            <h2>Blog</h2>
            <ul>
                
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <Link to={`/post/${post.id}`}>{post.titulo}</Link>
                        </li>
                        )
                })} 

            </ul>
            {//<ul>
               // <li>Articulo #1</li>
                //<li>Articulo #2</li>
                //<li>Articulo #3</li>
                //<li>Articulo #4</li>
            //</ul>
            }
        </div>
    );
}
 
export default Blog;