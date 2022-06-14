import Send from './apiService';
const url = 'announcementsPublic';

const AnnouncementService = {
    GetAll: async () => await Send('get', url)
}

export default AnnouncementService;