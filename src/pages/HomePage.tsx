import cv_pl from "../assets/pdf/jakub_romel_pl.pdf";
import cv_en from "../assets/pdf/jakub_romel_en.pdf";
import photo from "../assets/js.jpg";
import mushroom from '../assets/mushroom.png'; // Adjust path and filename as needed

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 drop-shadow-lg tracking-tight text-center">
                .NET Developer
            </h1>
            <img
                src={photo}
                alt="Profile"
                className="w-1/5 aspect-square object-cover rounded-full border-4 border-white shadow-xl mb-10 object-center"
                style={{ objectPosition: 'center' }}
            />
            <div className="space-y-6">
                <a
                    href={cv_pl}
                    download="jakub_romel_pl.pdf"
                    className="block px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 mb-4 text-center border-2 border-transparent hover:border-white"
                >
                    🇵🇱 Pobierz CV (PL)
                </a>
                <a
                    href={cv_en}
                    download="jakub_romel_en.pdf"
                    className="block px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-cyan-600 text-white text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 text-center border-2 border-transparent hover:border-white"
                >
                    🇬🇧 / 🇺🇸 Download CV (EN)
                </a>
            </div>
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 group pointer-events-none select-none md:pointer-events-auto md:select-auto">
                <img
                    src={mushroom}
                    alt="mushrooms"
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-25 lg:h-25 object-contain drop-shadow-lg transition-transform duration-500 group-hover:[transform:translateY(-8px)_rotate(5deg)]"
                />
            </div>
        </div>
    )
}

export default HomePage