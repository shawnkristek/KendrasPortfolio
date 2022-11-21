import React, {useState, ReactNode} from 'react';
import {useRouter} from 'next/router';

import * as HoverCard from "@radix-ui/react-hover-card";

const OneTwoHoverButton = ({children, href, open}) => {
    const router = useRouter();
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (clicked || open) {
            router.push(href);
        }
        setClicked(!clicked);
    };
    
    return (
        <button onClick={handleClick}>
            <HoverCard.Trigger asChild>
                {children}
            </HoverCard.Trigger>
        </button>
    );
}

export default OneTwoHoverButton;