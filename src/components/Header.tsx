import { type ReactNode } from "react";

interface Header {
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode;
};


export default function Header({image, children}: Header) {
    return <article>
        <div>
            {children}
            <img src={image.src} alt={image.alt}/>
        </div>
    </article>
}
