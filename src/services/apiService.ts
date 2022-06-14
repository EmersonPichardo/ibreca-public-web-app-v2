const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default async function Send(method: string, url: string, body?: {}) {
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    };

    const getJsonFromText = (text: string) => {
        try {
            return JSON.parse(text);
        } catch (exception) {
            return { text, exception };
        }
    }

    try {
        const response = await fetch(`${baseUrl}/${url}`, config);
        const textResult = await response.text();
        const jsonResult = getJsonFromText(textResult);

        return { isOk: response.ok, data: jsonResult };
    }
    catch (exception) {
        return { isOK: false }
    }
}