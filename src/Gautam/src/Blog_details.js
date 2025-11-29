
import Card from 'react-bootstrap/Card';
import './Blog_details.css'
import Blog_Author from './Blog_Author';
import Comment from './Comment';
import Blog_Form from './Blog_Form';
import img from './assets/blog.jpg'
import img2 from './assets/blog-inside-post.jpg'
import './Blog.css'
import Section1 from './Section1'
import Section2 from './Section2'
export default function CardComponent() {
    return (
        <div>
            <div className="Box">
                <div className='container m-10 p-0'>
                    <div className="title p-5">
                        <a href="#">Home</a>
                    </div>
                    <div className="container-fluid d-flex gap-4 flex-wrap ">
                        <div className="left-section">
                            <Card className="card shadow-lg  " >
                                <Card.Img className='img' variant="top" src={img} />
                                <Card.Body className='cardBody'>
                                    <Card.Title className='titleHeading p-2 fs-3'>Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</Card.Title>
                                    <div className="meta-top">
                                        <ul>
                                            <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="/blog-details">John Doe</a></li>
                                            <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="/blog-details">Jan 1, 2022</a></li>
                                            <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="/blog-details">12 Comments</a></li>
                                        </ul>
                                    </div>
                                    <Card.Text className='p-2 my-5'>
                                        Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                                    </Card.Text>
                                    <Card.Text className='p-2 my-1'>
                                        Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
                                    </Card.Text>
                                    <blockquote>
                                        <p>Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.</p>
                                    </blockquote>
                                    <p>Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat. Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque. Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.</p>
                                    <h3 className='mt-4'>Et quae iure vel ut odit alias.</h3>
                                    <p>Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat. Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque. Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.</p>
                                    <Card.Img className='blog-inside-img' variant="bottom" src={img2} />
                                    <h3 className='mt-4'>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                                    <p>Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel. Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse. Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.</p>
                                    <p>Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla sit eaque mollitia nisi asperiores est veniam.</p>
                                    <div className="meta-bottom">
                                        <i className="bi bi-folder"></i>
                                        <ul className="cats">
                                            <li><a href="#">Business</a></li>
                                        </ul>

                                        <i className="bi bi-tags "></i>
                                        <ul className="tags">
                                            <li><a href="#">Creative</a></li>
                                            <li><a href="#">Tips</a></li>
                                            <li><a href="#">Marketing</a></li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Blog_Author />
                            <Blog_Author />
                            <Comment />
                            <Blog_Form />
                        </div>
                        <div className="right-section "><Section2 /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}