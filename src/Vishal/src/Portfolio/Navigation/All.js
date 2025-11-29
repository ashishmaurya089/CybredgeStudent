import img1 from '../.././Image/img1.jpg'
import img4 from '../.././Image/img4.jpg'
import img5 from '../.././Image/img5.jpg'
import img6 from '../.././Image/img6.jpg'
import img7 from '../.././Image/img7.jpg'
import img8 from '../.././Image/img8.jpg'
import img9 from '../.././Image/img9.jpg'
import img10 from '../.././Image/img10.jpg'
import img12 from '../.././Image/img12.jpg'
import img13 from '../.././Image/img13.png'
import img14 from '../.././Image/img14.png'
import img15 from '../.././Image/img15.png'

function All() {
    return (
        <>
            {/* FIX: Added min-h-screen + overflow-auto so full content scrolls and shows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-white min-h-screen overflow-auto">

                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img9} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img12} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img7} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img1} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img5} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img10} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img13} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img14} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img15} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img4} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img6} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>

                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img8} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>

            </div>
        </>
    );
}

export default All;
