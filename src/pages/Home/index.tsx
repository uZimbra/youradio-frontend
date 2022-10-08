import React, { useEffect, useState } from "react";

import { usePlayer } from "../../contexts/PlayerContext";
import { IMusic } from "../../models/IMusic";
import { MusicService } from "../../services/MusicService";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";
import {
  HomePageContainer,
  MusicSection,
  PauseIcon,
  PlayButton,
  PlayIcon,
} from "./styles";

type Music = {
  id: string;
  name: string;
  durationAsString: string;
  duration: number;
  coverUri: string;
};

export function Home() {
  const { musicList, currentMusicIndex, isPlaying, playList, togglePlay } =
    usePlayer();

  const currentMusicPlaying = musicList[currentMusicIndex];

  const [musics, setMusics] = useState<Music[]>([]);

  useEffect(() => {
    async function fetchMusics() {
      try {
        const response = await MusicService.list();

        const apiMusics = response.data.map((music: IMusic) => {
          return {
            id: music.id,
            name: music.name,
            durationAsString: convertDurationToTimeString(music.duration),
            duration: music.duration,
            coverUri: music.coverUri
          };
        });

        setMusics(apiMusics);
      } catch (err) {}
    }

    fetchMusics();
  }, []);

  return (
    <HomePageContainer>
      <MusicSection>
        <h2>Lista de músicas</h2>

        <table cellSpacing={0}>
          <thead>
            <tr>
              <th>#</th>
              <th>Título</th>
              <th>Duração</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {musics.map((music, index) => {
              return (
                <tr key={music.id}>
                  <td width="3rem">{index + 1}</td>
                  <td>
                    <div>
                      <img src={`http://localhost:3333/${music.coverUri}`} alt="Capa do álbum" />
                      <span>{music.name}</span>
                    </div>
                  </td>
                  <td width="3rem">{music.durationAsString}</td>
                  <td width="3rem">
                    {currentMusicPlaying?.id === music.id && isPlaying ? (
                      <PlayButton onClick={togglePlay}>
                        <PauseIcon />
                      </PlayButton>
                    ) : (
                      <PlayButton onClick={() => playList(musics, index)}>
                        <PlayIcon />
                      </PlayButton>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </MusicSection>
    </HomePageContainer>
  );
}
