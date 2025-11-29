import img6 from '../.././Image/img6.jpg'
import img7 from '../.././Image/img7.jpg'
import img15 from '../.././Image/img15.png'

function Branding() {
    return (
       <>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-white">
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img7} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img15} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img6} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>
            </div>
       </>
    );
}

export default Branding;