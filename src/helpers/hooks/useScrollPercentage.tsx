import { useRef, useState, useEffect } from "react";

export default function useScrollPercentage() {
    const scrollRef = useRef(null) as any;
    const [scrollPercentage, setScrollPercentage] = useState<number>(NaN);

    const reportScroll = (event: Event) => {
        setScrollPercentage(getScrollPercentage(event.target as HTMLElement));
    };

    useEffect(() => {
        const node: HTMLElement | null = scrollRef.current ?? document.body;
        if (node == null) return;

        node.addEventListener("scroll", reportScroll, { passive: true });
        if (Number.isNaN(scrollPercentage)) setScrollPercentage(getScrollPercentage(node));

        return () => {
            if (node !== null) node.removeEventListener("scroll", reportScroll);
        };
    }, [scrollPercentage]);

    return [scrollRef, (Number.isNaN(scrollPercentage) ? 0 : scrollPercentage) as number];
}

function getScrollPercentage(element: HTMLElement): number {
    if (element === null) return NaN;

    const height = element.scrollHeight - element.clientHeight;
    return Math.round((element.scrollTop / height) * 100);
}