import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(playedTimeTracker, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

function playedTimeTracker(currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime.seconds);
}
