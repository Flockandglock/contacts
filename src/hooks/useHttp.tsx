
export interface ResponseData {
    loggin: string;
    password: string;
}

interface UseHttp {
    url: string;
    method: string;
    body: null;
    headers: {
        'Content-Type': 'application/json'
    };
}

export const useHttp = () => {

    const request = async (url: string, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}): Promise<ResponseData> => {

            const response = await fetch(url, {method, body, headers});

            const data: ResponseData = await response.json();

            return data;
    };


    return {request}
}