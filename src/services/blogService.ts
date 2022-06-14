import Send from './apiService';
const url = 'blogEntriesPublic';

const BlogService = {
    GetPage: async (page: number, search?: string, from?: string, to?: string) => await Send('get', `${url}/page/${page}/${search || ' '}/${from || ' '}/${to || ' '}/`),
    GetRecents: async () => await Send('get', `${url}/recents`),
    GetDatail: async (id: number) => await Send('get', `${url}/${id}`)
}

export default BlogService;