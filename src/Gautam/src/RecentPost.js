import React from 'react'
import './RecentPost.css'
import img from './assets/our-office-11.jpg'
import img2 from './assets/our-office-12.jpg'
import img3 from './assets/our-office-4.jpg'
import img4 from './assets/our-office-5.jpg'
import img5 from './assets/gallery-7.jpg'
export default function RecentPost(props) {
  return (
<div className="recent-posts-widget widget-item">

              <h3 className="widget-title">Recent Posts</h3>

              <div className="post-item">
                <img src={img} alt="" className="flex-shrink-0"/>
                <div>
                  <h4><a href="/blog-details">Nihil blanditiis at in nihil autem</a></h4>
                  <p>Jan 1, 2020</p>
                </div>
              </div>

              <div className="post-item">
                <img src={img2} alt="" className="flex-shrink-0"/>
                <div>
                  <h4><a href="/blog-details">Quidem autem et impedit</a></h4>
                  <p>Jan 1, 2020</p>
                </div>
              </div>

              <div className="post-item">
                <img src={img3} alt="" className="flex-shrink-0"/>
                <div>
                  <h4><a href="/blog-details">Id quia et et ut maxime similique occaecati ut</a></h4>
                  <p>Jan 1, 2020</p>
                </div>
              </div>

              <div className="post-item">
                <img src={img4} alt="" className="flex-shrink-0"/>
                <div>
                  <h4><a href="/blog-details">Laborum corporis quo dara net para</a></h4>
                  <p>Jan 1, 2020</p>
                </div>
              </div>

              <div className="post-item">
                <img src={img5} alt="" className="flex-shrink-0"/>
                <div>
                  <h4><a href="/blog-details">Et dolores corrupti quae illo quod dolor</a></h4>
                  <p>Jan 1, 2020</p>
                </div>
              </div>

            </div>
  )
}
