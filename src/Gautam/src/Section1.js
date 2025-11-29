import image from './assets/blog.jpg'
import image2 from './assets/blog-2.jpg'
import image3 from './assets/blog-11.jpg'
import image4 from './assets/blog-39.jpg'
import CCardCoponent from './CCardComponent'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Section1() {
  return (
    <>

      <div className="section1 w-70 ">
        <CCardCoponent image={image} text={"Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore."} text2='Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia' />
        <CCardCoponent image={image2} text={"Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio."} text2='Nisi magni odit consequatur autem nulla dolorem' />
        <CCardCoponent image={image3} text={"Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit."} text2='Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.' />
        <CCardCoponent image={image4} text={"Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo."} text2='Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.' />
      </div>
    </>

  )
}
