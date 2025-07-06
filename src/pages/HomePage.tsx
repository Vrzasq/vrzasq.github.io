import cv_pl from "../assets/pdf/jakub_romel_pl.pdf";
import cv_en from "../assets/pdf/jakub_romel_en.pdf";


const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
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
        </div>
    )
}

export default HomePage