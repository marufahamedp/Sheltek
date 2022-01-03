import React from 'react';
import useBlogs from '../../../hooks/useBlogs';
import Footer from '../../Shared/Footer/Footer/Footer';
import NavBar from '../../Shared/Header/NavBar/NavBar';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const { blogs, spinner } = useBlogs();
    return (
        <div className='container'>
            <NavBar></NavBar>
            <div className="row my-5">
                <div className="col-lg-8">
                {
                spinner && <div class="d-flex justify-content-center">
                <div class="spinner-grow text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            }
                    <div class="row row-cols-1 row-cols-md-1">

                        {
                            blogs.map(blog => <Blog
                                key={blog._id}
                                blog={blog}
                            ></Blog>)
                        }


                    </div>
                </div>
                <div className="col-lg-4">

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;