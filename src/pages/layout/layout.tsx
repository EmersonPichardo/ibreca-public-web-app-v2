import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";
import { PageContext } from "../../contexts/pageContext";
import { navbarLinks } from "./layout.config";
import Header from "./header";

export default function Layout(): JSX.Element {
    const { title, url } = useContext(PageContext);

    useEffect(() => {
        scrollTo(0, 0);
        document.title = `${title} | ibreca.org`;
    }, [title]);

    return (
        <>
            <Navbar links={navbarLinks} />
            <Header title={title} url={url} />

            <div className='md:px-8'>
                <main className='bg-white rounded -my-16 drop-shadow-md overflow-hidden md:container md:mx-auto'>
                    <Outlet />
                </main>
            </div>

            <Footer />
        </>
    )
}