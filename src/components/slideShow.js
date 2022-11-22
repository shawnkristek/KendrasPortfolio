import {useRef} from 'react';

import { 
    TriangleLeftIcon,
    TriangleRightIcon,
} from '@radix-ui/react-icons';

import { Carousel } from '@mantine/carousel';


export default function SlideShow({slides, darktheme=true, mobile=false, className, ...props}) {
    const controlColor = darktheme ? "#c5cdcd" : "#835f02";

    return (
        <Carousel 
            className={className}
            sx={{ maxWidth: 1144 }} 
            mx="auto" 
            styles={styles}
            height={687}
            slideGap="md" 
            align="center" 
            nextControlIcon={<TriangleRightIcon color={controlColor}/>}
            previousControlIcon={<TriangleLeftIcon color={controlColor}/>}
        >
            { slides.map( (slide) => (
                <Carousel.Slide className="flex align-middle justify-center">
                    <img className="my-auto mx-auto" src={slide.url} caption="caption"/>
                </Carousel.Slide>
            ))}
        </Carousel>
    );
}

const styles = {
    control: {
        marginLeft: "-50px",
        marginRight: "-50px",
        scale: '300%',
        boxShadow: 'none',
        border: 'none',
        background: 'none',
        transition: 'width 250ms ease',
        '&[data-inactive]':{
            opacity: 0,
            cursor: 'default',
        },
    },
}