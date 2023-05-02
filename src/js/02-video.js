import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function () {
    player.getCurrentTime().then(function (currentTime) {
      localStorage.setItem('videoplayer-current-time', currentTime);
    });
  }, 1000)
);
if (localStorage.getItem(`videoplayer-current-time`)) {
  console.log(`Відео вже почали дивитись`);
  player.setCurrentTime(localStorage.getItem(`videoplayer-current-time`));
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
