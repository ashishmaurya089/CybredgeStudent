
import { Link } from "react-router-dom";
import './Blog_Form.css'
export default function Blog_Form() {
  return (
    <div>
      <section id="comment-form" className="comment-form section">
        <div className="Formcontainer shadow-lg">

          <form action="">

            <h4>Post Comment</h4>
            <p>Your email address will not be published. Required fields are marked * </p>
            <div className="row">
              <div className="col-md-6 form-group">
                <input name="name" type="text" className="form-control" placeholder="Your Name*" fdprocessedid="rxrni" />
              </div>
              <div className="col-md-6 form-group">
                <input name="email" type="text" className="form-control" placeholder="Your Email*" fdprocessedid="0kih4" />
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <input name="website" type="text" className="form-control" placeholder="Your Website" fdprocessedid="zfpc6d" />
              </div>
            </div>
            <div className="row">
              <div className="col form-group">
                <textarea name="comment" className="form-control" placeholder="Your Comment*"></textarea>
              </div>
            </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary" fdprocessedid="82ow9y">Post Comment</button>
              </div>
          </form>

        </div>
      </section>
    </div>
  )
}
