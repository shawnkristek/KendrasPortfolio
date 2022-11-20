import React, {useState, ReactNode} from 'react';
import {useRouter} from 'next/router';

import * as HoverCard from "@radix-ui/react-hover-card";

type Props = {
    children: ReactNode,
    href: string,
    open: boolean,
}

const OneTwoHoverButton = ({children, href, open}: Props) => {
    const router = useRouter();
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        console.log(clicked,open);
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