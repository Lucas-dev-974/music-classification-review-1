import { ApiService } from "./ApiService";

export class FileService {
  static async upload(data: FormData) {
    return (await ApiService.generic("/upload", "POST", data)).json();
  }
}
