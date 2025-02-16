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
        <header>
            <img src={image.src} alt={image.alt}/>
            {children}
        </header>
    </article>
}
