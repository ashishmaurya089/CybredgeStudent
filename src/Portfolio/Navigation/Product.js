import img10 from '../.././Image/img10.jpg'
import img12 from '../.././Image/img12.jpg'
import img4 from '../.././Image/img4.jpg'

function Product() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-white">
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img12} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img10} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img4} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>
            </div>
        </>
    );
}

export default Product;