import img13 from '../.././Image/img13.png'
import img1 from '../.././Image/img1.jpg'
import img8 from '../.././Image/img8.jpg'

function Book() {
    return (
       <>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-white">
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img1} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img13} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img8} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>
            </div>
       </>
    );
}

export default Book;