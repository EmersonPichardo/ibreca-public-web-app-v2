import Send from './apiService';
const url = 'emailPublic';

const EmailService = {
    Send: async (message: string, name?: string, contact?: string, email?: string) => await Send('post', url, { name, contact, email, message })
}

export default EmailService;