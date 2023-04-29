import Player from '@vimeo/player';


    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', function() {
        console.log('played the video!');
        player.getCurrentTime().then(function(currentTime) {
          console.log(`time: `, currentTime)

        });

    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

