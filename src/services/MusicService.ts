import { AxiosPromise } from "axios";
import { api } from ".";
import { IMusic } from "../models/IMusic";

class MusicService {
  private static musicPath: string = "/v1/music";

  static find(id: string): AxiosPromise<IMusic> {
    return api.get(this.musicPath, {
      params: {
        id,
      },
    });
  }

  static list(): AxiosPromise<IMusic[]> {
    return api.get(this.musicPath);
  }
}

export { MusicService };
