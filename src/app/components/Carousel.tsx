import {Carousel} from 'flowbite-react';

export default function CarouselFlowBite() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96  ">
            <Carousel indicators={true}>
                <img className="rounded-2xl w-[600px]"
                     src="https://smartcityexpocuritiba.com/wp-content/uploads/2024/01/miniatura-tema_1.png" alt="..."/>
                <img className="rounded-2xl w-[600px] "
                     src="https://smartcityexpocuritiba.com/wp-content/uploads/2024/01/miniatura-tema_2.png" alt="..."/>
                <img className="rounded-2xl w-[600px]"
                     src="https://smartcityexpocuritiba.com/wp-content/uploads/2024/01/miniatura-tema_3.png" alt="..."/>
                <img className="rounded-2xl w-[600px]"
                     src="https://smartcityexpocuritiba.com/wp-content/uploads/2024/01/miniatura-tema_4.png" alt="..."/>
                <img className="rounded-2xl w-[600px]"
                     src="https://smartcityexpocuritiba.com/wp-content/uploads/2024/01/miniatura-tema_5.png" alt="..."/>
                <img className="rounded-2xl w-[600px]"
                     src="https://smartcityexpocuritiba.com/wp-content/uploads/2024/01/miniatura-tema_6.png" alt="..."/>
            </Carousel>


        </div>
    );
}

