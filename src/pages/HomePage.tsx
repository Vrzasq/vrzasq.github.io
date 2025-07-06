import cv_pl from "../assets/pdf/jakub_romel_pl.pdf";
import cv_en from "../assets/pdf/jakub_romel_en.pdf";


const HomePage = () => {
    return (
        <>
            <div>
                <a href={cv_pl} download="jakub_romel_pl.pdf">
                    CV PL
                </a>
            </div>
            <div>
                <a href={cv_en} download="jakub_romel_en.pdf">
                    CV EN
                </a>
            </div>
        </>
    )
}

export default HomePage