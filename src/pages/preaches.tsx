import { SearchIcon } from "@heroicons/react/outline";
import { useContext, useEffect, useState } from "react";
import Button from "../components/button";
import DateInput from "../components/inputs/dateInput";
import SearchInput from "../components/inputs/searchInput";
import PreachCard from "../components/preachCard";
import PageContext from "../contexts/pageContext";
import selectiveClassnames from "../helpers/selectiveClassnames";
import BlogService from "../services/blogService";
import BlankPageContainer from "./layout/blankPageContainer";
import DefaultImage from '../images/Bible_stand_up_read.jpg';

export default function Preaches(): JSX.Element {
    const { setTitle, setUrl, scrollPercentage } = useContext(PageContext);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [entries, setEntries] = useState<any>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [totalLength, setTotalLength] = useState<number>(0);
    const [search, setSearch] = useState<string>();
    const [since, setSince] = useState<string>();
    const [to, setTo] = useState<string>();

    useEffect(() => { setTitle('Prédicas'); setUrl(DefaultImage); }, [])
    useEffect(() => { getPage() }, [page, hasMore, search, since, to])
    useEffect(() => { if (scrollPercentage >= 80 && hasMore && !isLoading) setPage(page + 1) }, [scrollPercentage, hasMore, isLoading])

    const getPage = async () => {
        if (isLoading || !hasMore) return;
        setIsLoading(true);

        const response = await BlogService.GetPage(page, search, since, to);

        if (response.isOk) {
            const pageData = response.data;

            setEntries([...entries, ...pageData.list]);
            setHasMore(pageData.hasMore);
            setTotalLength(pageData.totalLength);
        }

        setIsLoading(false);
    }

    const searchPage = (event: any) => {
        event.preventDefault();

        setPage(1);
        setEntries([]);
        setHasMore(true);
        setSearch(event.target['search'].value);
        setSince(event.target['since'].value);
        setTo(event.target['to'].value);
    }

    return (
        <BlankPageContainer>
            <form id='searchForm' className='flex flex-col md:flex-row gap-4 text-base' onSubmit={searchPage}>
                <SearchInput id='search' name='search' />
                <DateInput id='since' name='since' />
                <DateInput id='to' name='to' />

                <Button text='Buscar' icon={SearchIcon} />
            </form>
            <span className='block text-sm text-gray-600 mt-4 mb-12'>{totalLength} resultados encontrados</span>

            <div className='grid grid-colus-1 md:grid-cols-2 items-baseline gap-12'>
                {
                    entries.map((entry: any, index: number) => (
                        <PreachCard key={index} entry={entry} />
                    ))
                }
            </div>
            <p className={selectiveClassnames(isLoading ? '' : 'hidden', 'text-base text-slate-700 text-center italic pt-16')}>Cargando...</p>
            <p className={selectiveClassnames(isLoading ? 'hidden' : '', 'text-base text-slate-700 text-center italic pt-16')}>No se encontraron mas resultados</p>
        </BlankPageContainer>
    )
}