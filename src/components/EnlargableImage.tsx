import type { FC } from 'react'
import { useState } from 'react';
import { isMobile } from 'react-device-detect';

interface EnlargableImageProps {
    image: string
}

const EnlargableImage: FC<EnlargableImageProps> = ({image}) => {
    const [isProfileLarge, setIsProfileLarge] = useState(false);

    let scale = isMobile ? 'scale(2)' : 'scale(1.3)';

    return (
        <img
            src={image}
            alt="Profile"
            className="w-1/5 aspect-square object-cover rounded-full border-4 border-white shadow-xl mb-10 object-center cursor-pointer transition-transform duration-300"
            style={{ objectPosition: 'center', transform: isProfileLarge ? scale : 'scale(1)', zIndex: isProfileLarge ? 50 : 'auto', transition: 'transform 0.3s' }}
            onClick={() => setIsProfileLarge(!isProfileLarge)}
        />
    )
}

export default EnlargableImage