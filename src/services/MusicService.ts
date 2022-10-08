import { AxiosPromise } from "axios";

import { api } from ".";
import { IMusic } from "../models/IMusic";

class MusicService {
  private static musicPath: string = "/api/v1/musics";

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

  static stream(id: string): AxiosPromise<any> {
    return api.get(`${this.musicPath}/stream/${id}`);
  }
}

export { MusicService };
