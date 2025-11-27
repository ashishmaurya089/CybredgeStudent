
import img9 from '../.././Image/img9.jpg'
import img5 from '../.././Image/img5.jpg'
import img14 from '../.././Image/img14.png'


function Application() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-white">
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img9} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img5} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <img src={img14} className="w-full h-64 object-cover hover:scale-105 transition-transform" />
                </div>
            </div>
        </>
    );
}

export default Application;