import React, { ReactNode, useEffect, useState } from "react";

class PageContextType {
    title: string
    setTitle: React.Dispatch<React.SetStateAction<string>>
    url: string
    setUrl: React.Dispatch<React.SetStateAction<string>>
    scrollPercentage: number
}

export const PageContext = React.createContext(new PageContextType());

export class PageContextProviderProps {
    children?: ReactNode
}

export function PageContextProvider({ children }: PageContextProviderProps): JSX.Element {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState<number>(0);

    const reportScroll = () => {
        setScrollPercentage(getScrollPercentage());
    };

    useEffect(() => {
        window.addEventListener("scroll", reportScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", reportScroll);
        };
    }, [scrollPercentage]);

    return (
        <PageContext.Provider value={{ title, setTitle, url, setUrl, scrollPercentage }}>
            {children}
        </PageContext.Provider>
    )
}

function getScrollPercentage(): number {
    const html = document.getElementsByTagName('html')[0];
    const height = html.scrollHeight - html.clientHeight;
    const percentage = Math.round((html.scrollTop / height) * 100);

    return percentage;
}

export default PageContext;