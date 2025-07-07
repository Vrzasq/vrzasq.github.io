import cv_pl from "../assets/pdf/jakub_romel_pl.pdf";
import cv_en from "../assets/pdf/jakub_romel_en.pdf";
import photo from "../assets/js.jpg";
import mushroom from '../assets/mushroom.png'; // Adjust path and filename as needed
import EnlargableImage from '../components/EnlargableImage';
import WeavingImage from '../components/WeavingImage';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-4">
            <div className="mt-8 flex flex-col items-center w-full">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 drop-shadow-lg tracking-tight text-center">
                    .NET Developer
                </h1>
                <EnlargableImage image={photo}/>
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
                <WeavingImage image={mushroom}/>
            </div>
        </div>
    )
}

export default HomePage