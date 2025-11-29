import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap-icons/font/bootstrap-icons.css";
import './CCardComponent.css'
import { useNavigate } from "react-router-dom";
export default function CardComponent(props) {
  const navigate = useNavigate();
  const goToDetails = () => {
    navigate("/Blog_details", { myId: 55 });
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div>
      <Card className="card shadow-lg" >
        <Card.Img className='img2' variant="top" src={props.image} />
        <Card.Body className='cardbodyCon'>
          <Card.Title className='titleHeading p-2 fs-3'>{props.text2}</Card.Title>
          <div className="meta-top">
            <ul>
              <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="/blog-details">John Doe</a></li>
              <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="/blog-details">Jan 1, 2022</a></li>
              <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="/blog-details">12 Comments</a></li>
            </ul>
          </div>
          <Card.Text className='p-2 my-1'>
            {props.text}
          </Card.Text>
          <div className="btn2 d-flex justify-content-end">
            <Button className='ms-5' variant="danger" onClick={goToDetails}>Read More</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}


