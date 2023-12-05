export class ApiService {
  static host = "httplocalhost:8000";

  static async generic(
    url: string,
    method: "POST" | "GET" | "PATCH" | "DELETE",
    data: FormData | string
  ) {
    return await fetch(this.host + url, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      body: data,
    });
  }
}
