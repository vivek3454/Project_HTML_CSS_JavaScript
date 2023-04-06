
async function yt(url) {
    const API_KEY = 'AIzaSyCGik4geNiItE0cDF7pK3gaf3FvjWN24Y8';
    let VIDEO_ID;
    if (url.indexOf('https://youtu.be/') != -1) {
        VIDEO_ID = url.split('be/')[1];

    }
    else if (url.indexOf('https://www.youtube.com/watch?v=') != -1) {
        VIDEO_ID = url.split('v=')[1];
    }
    else {
        document.querySelector('.img_container').classList.remove('remove');
    }

    const ytTnResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&key=${API_KEY}&part=snippet`);
    const ytTndata = await ytTnResponse.json();
    const thumbnailUrl = ytTndata.items[0].snippet.thumbnails.maxres.url;
    const img = document.querySelector('.imgtag');
    img.src = thumbnailUrl;
    document.querySelector('.img_container').classList.add('remove');
    document.querySelector('.download_btn').href = thumbnailUrl;
}

const input = document.querySelector('input');
input.addEventListener('keyup', () => {
    yt(input.value);
})
