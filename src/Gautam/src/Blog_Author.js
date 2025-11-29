import React from 'react'
import author from './assets/blog-author.jpg'
import './Blog_Author.css'
export default function Blog_Author() {
  return (
    <div>
      <section id="blog-author" className="blog-author section">

            <div className="blogcontainer shadow-lg">
              <div className="author-container d-flex align-items-center">
                <img src={author} className="rounded-circle flex-shrink-0" alt=""/>
                <div>
                  <h4>Jane Smith</h4>
                  <div className="social-links">
                    <a href="https://x.com/#"><i className="bi bi-twitter-x"></i></a>
                    <a href="https://facebook.com/#"><i className="bi bi-facebook"></i></a>
                    <a href="https://instagram.com/#"><i className="biu bi-instagram"></i></a>
                  </div>
                  <p>
                    Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.
                  </p>
                </div>
              </div>
            </div>

          </section>
    </div>
  )
}
