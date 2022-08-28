import React, { createContext, ReactNode, useContext, useState } from "react";

import { nextRandomMusic } from "../utils/nextRandomMusic";

type Music = {
  id: string;
  name: string;
  duration: number;
  uri: string;
  coverUri: string;
};

type PlayerContextData = {
  musicList: Music[];
  currentMusicIndex: number;
  isPlaying: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
  play: (music: Music) => void;
  playList: (list: Music[], index: number) => void;
  togglePlay: () => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
  setPlayingState: (state: boolean) => void;
  playNext: () => void;
  playPrevious: () => void;
  clearPlayerState: () => void;
};

type Props = {
  children: ReactNode;
};

const PlayerContext = createContext({} as PlayerContextData);

export function PlayerContextProvider({ children }: Props) {
  const [musicList, setMusicList] = useState([] as Music[]);
  const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  const hasNext = currentMusicIndex + 1 < musicList.length || isShuffling;
  const hasPrevious = currentMusicIndex > 0 || isShuffling;

  function play(music: Music) {
    setMusicList([music]);
    setCurrentMusicIndex(0);
    setIsPlaying(true);
  }

  function playList(list: Music[], index: number) {
    setMusicList(list);
    setCurrentMusicIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying((prev) => !prev);
  }

  function toggleLoop() {
    setIsLooping((prev) => !prev);
  }
  function toggleShuffle() {
    setIsShuffling((prev) => !prev);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  function playNext() {
    if (isShuffling) {
      const index = nextRandomMusic(musicList.length, currentMusicIndex);

      setCurrentMusicIndex(index);
    } else if (hasNext) {
      setCurrentMusicIndex(currentMusicIndex + 1);
    }
  }

  function playPrevious() {
    if (isShuffling) {
      const index = nextRandomMusic(musicList.length, currentMusicIndex);

      setCurrentMusicIndex(index);
    } else if (hasPrevious) {
      setCurrentMusicIndex(currentMusicIndex - 1);
    }
  }

  function clearPlayerState() {
    setMusicList([]);
    setCurrentMusicIndex(0);
    setIsPlaying(false);
  }

  return (
    <PlayerContext.Provider
      value={{
        musicList,
        currentMusicIndex,
        isPlaying,
        isLooping,
        isShuffling,
        hasNext,
        hasPrevious,
        play,
        playList,
        togglePlay,
        toggleLoop,
        toggleShuffle,
        setPlayingState,
        playNext,
        playPrevious,
        clearPlayerState,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer(): PlayerContextData {
  const playerContext = useContext(PlayerContext);

  if (!playerContext) {
    throw new Error("usePlayer must be used within an PlayerContextProvider");
  }

  return playerContext;
}
