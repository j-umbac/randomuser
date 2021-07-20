export default function fetchApiService() {
  async function sendRequest(request: Request): Promise<Response | any> {
    const response: Response = await fetch(request);
    return response;
  }
  return sendRequest;
}
