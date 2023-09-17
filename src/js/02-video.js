import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
  localStorage.setItem(KEY, JSON.stringify(e));
}

const savedData = localStorage.getItem(KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);
  player.setCurrentTime(parsedData.seconds);
}
