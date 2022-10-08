import "rc-slider/assets/index.css";

import Slider from "rc-slider";
import React, { useEffect, useRef, useState } from "react";

import { usePlayer } from "../../contexts/PlayerContext";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";
import {
  MusicIcon,
  NextIcon,
  PauseIcon,
  PlayerContainer,
  PlayerCover,
  PlayerFooter,
  PlayerFooterControllerButton,
  PlayerHeader,
  PlayIcon,
  PreviousIcon,
  RepeatIcon,
  ShuffleIcon,
} from "./styles";

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const {
    musicList,
    currentMusicIndex,
    isPlaying,
    isLooping,
    isShuffling,
    hasNext,
    hasPrevious,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    setPlayingState,
    playNext,
    playPrevious,
    clearPlayerState,
  } = usePlayer();

  const music = musicList[currentMusicIndex];

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  function setupProgressListener() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;

      audioRef.current?.addEventListener("timeupdate", () => {
        setProgress(Math.floor(audioRef.current?.currentTime ?? 0));
      });
    }
  }

  function handleSeek(amount: number | number[]) {
    const value = Number(amount);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setProgress(value);
    }
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext();
    } else {
      clearPlayerState();
    }
  }

  return (
    <PlayerContainer>
      <PlayerHeader>
        <MusicIcon src="/playing.png" />
        <strong>Tocando agora</strong>
      </PlayerHeader>

      {music ? (
        <PlayerCover filled={!!music}>
          <img src={`http://localhost:3333/${music.coverUri}`} alt="capa da musica" />
          <br />
          <strong>{music.name}</strong>
        </PlayerCover>
      ) : (
        <PlayerCover>
          <strong>Nenhuma música na lista de execução</strong>
        </PlayerCover>
      )}

      <PlayerFooter empty={!!music}>
        <div className="player-time-line">
          <span>{convertDurationToTimeString(progress)}</span>
          <div className="slider">
            {music ? (
              <Slider
                onChange={handleSeek}
                max={music.duration}
                value={progress}
                trackStyle={{ backgroundColor: "#F67372" }}
                handleStyle={{
                  borderColor: "#F3504F",
                  borderWidth: 4,
                }}
              />
            ) : (
              <div className="empty-slider" />
            )}
          </div>
          <span>{convertDurationToTimeString(music?.duration ?? 0)}</span>
        </div>

        {music && (
          <audio
            ref={audioRef}
            src={`http://localhost:3333/api/v1/musics/stream/${music.id}`}
            autoPlay
            onEnded={handleEpisodeEnded}
            onLoadedMetadata={setupProgressListener}
            loop={isLooping}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
          />
        )}

        <div className="player-controllers">
          <PlayerFooterControllerButton
            disabled={!music || musicList.length === 1}
            onClick={toggleShuffle}
          >
            <ShuffleIcon isActive={!!isShuffling} />
          </PlayerFooterControllerButton>

          <PlayerFooterControllerButton
            disabled={!music || !hasPrevious}
            onClick={playPrevious}
          >
            <PreviousIcon />
          </PlayerFooterControllerButton>

          <PlayerFooterControllerButton
            playButton
            disabled={!music}
            onClick={togglePlay}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </PlayerFooterControllerButton>

          <PlayerFooterControllerButton
            disabled={!music || !hasNext}
            onClick={playNext}
          >
            <NextIcon />
          </PlayerFooterControllerButton>

          <PlayerFooterControllerButton disabled={!music} onClick={toggleLoop}>
            <RepeatIcon isActive={!!isLooping} />
          </PlayerFooterControllerButton>
        </div>
      </PlayerFooter>
    </PlayerContainer>
  );
}
