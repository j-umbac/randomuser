export default function fetchApi() {
    async function sendRequest(request: Request): Promise<Response | any> {
        const response: Response = await fetch(request);
        return response;
    }
    return sendRequest;
}