import type { FC } from 'react'
import { useState } from 'react'
import { isMobile } from 'react-device-detect';

interface WeavingImageProps {
    image: string
}

const WeavingImage: FC<WeavingImageProps> = ({image}) => {
    const [isWeaving, setIsWeaving] = useState(false);
    
    return (
        <div
            className={`mt-20 flex justify-center group select-none ${isWeaving ? '[transform:translateY(-8px)_rotate(5deg)]' : ''}`}
            onClick={() => isMobile && setIsWeaving(!isWeaving)}
            onMouseEnter={() => setIsWeaving(true)}
            onMouseLeave={() => setIsWeaving(false)}
            style={{ transition: 'transform 0.3s' }}
        >
            <img
                src={image}
                alt="mushrooms"
                className="w-16 h-16 md:w-20 md:h-20 lg:w-25 lg:h-25 object-contain drop-shadow-lg"
            />
        </div>
    )
}

export default WeavingImage