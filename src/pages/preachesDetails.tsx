import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageContext from "../contexts/pageContext";
import BlogService from "../services/blogService";
import BlankPageContainer from "./layout/blankPageContainer";
import ReactPlayer from 'react-player'
import ParseDate from "../helpers/DateParser";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import selectiveClassnames from "../helpers/selectiveClassnames";

export default function PreachesDetails(): JSX.Element {
    const { id } = useParams();
    const { setTitle, setUrl } = useContext(PageContext);

    const [entry, setEntry] = useState<any>({});

    useEffect(() => { getEntry() }, [])
    useEffect(() => { setTitle(entry.title); setUrl(entry.coverUrl) }, [entry])

    const getEntry = async () => {
        const response = await BlogService.GetDatail(Number.parseInt(id!));
        if (response.isOk) setEntry(response.data);
        console.log(response.data)
    }

    return (
        <BlankPageContainer>
            <a className='inline-flex items-center gap-2 mb-4' href='/predicas'>
                <ChevronLeftIcon className='w-5 h-5' />
                <span className='text-xl font-medium'>Volver</span>
            </a>

            <p className='text-sm'>{ParseDate(entry.publicationDate)}</p>

            <div className={selectiveClassnames(entry.headerUrl ? '' : 'hidden', 'bg-slate-200 ring-1 ring-slate-300 drop-shadow-lg w-full aspect-video mt-4 mb-8 rounded-lg overflow-hidden')}>
                <ReactPlayer width='100%' height='100%' controls url={entry.headerUrl} />
            </div>

            <div dangerouslySetInnerHTML={{ __html: entry.body }} />
        </BlankPageContainer>
    )
}