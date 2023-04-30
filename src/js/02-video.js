import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function () {
  console.log('played the video!');
  player.getCurrentTime().then(function (currentTime) {
    localStorage.setItem('currentTime', currentTime);
  });
});

player
  .setCurrentTime(localStorage.getItem(`currentTime`))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
console.log(
  `localStorage.getItem.currentTime`,
  localStorage.getItem(`currentTime`)
);
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
