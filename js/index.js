const contentUrls = {
  11: 'https://res.cloudinary.com/andresgarcia/video/upload/v1702149808/noe/2_qa2lvs.mov',
  12: 'https://res.cloudinary.com/andresgarcia/video/upload/v1702149806/noe/3_ku8cp0.mov',
  14: 'https://res.cloudinary.com/andresgarcia/image/upload/v1702149804/noe/5_c220z3.jpg',
  16: 'https://res.cloudinary.com/andresgarcia/video/upload/v1702149805/noe/7_gko6sg.mp4',
  17: 'https://res.cloudinary.com/andresgarcia/video/upload/v1702840040/noe/8.mp4',
  18: 'https://res.cloudinary.com/andresgarcia/video/upload/v1702149805/noe/9_yp5l8r.mp4',
  22: 'https://res.cloudinary.com/andresgarcia/video/upload/v1702149805/noe/13_us9koj.mp4',
  24: 'https://res.cloudinary.com/andresgarcia/video/upload/v1702149805/noe/15_gwhsnx.mp4',
  26: 'https://res.cloudinary.com/andresgarcia/image/upload/v1702149806/noe/17_jasjep.jpg',
  29: 'https://res.cloudinary.com/andresgarcia/video/upload/v1702149807/noe/20_swi3fm.mp4',
  4: 'https://res.cloudinary.com/andresgarcia/image/upload/v1702149807/noe/26_gyo5rr.jpg'
}

const specialDays = Object.keys(contentUrls)
const currentDate = new Date()
const currentDay = currentDate.getDate()
const isSpecialDay = specialDays.includes(currentDay.toString())
const currentContent = contentUrls[currentDay]
const splitContentExtension = currentContent?.split('.')
const contentExtension = splitContentExtension ? splitContentExtension[splitContentExtension.length - 1] : ''
const defaultText = document.getElementById('text')
const videoTag = document.getElementById('videos')
const videoSource = document.getElementById('videoSource')
const image = document.getElementById('images')
const backgroundMusic = document.getElementById('backgroundMusic');

videoTag.onplay = () => {
    backgroundMusic.play();
};

videoTag.onpause = () => {
    backgroundMusic.pause();
};

videoTag.onended = () => {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
};

if (isSpecialDay) {
  defaultText.style.display = 'none'
}

if (['mov', 'mp4'].includes(contentExtension)) {
  image.style.display = 'none'
  videoTag.setAttribute('src', currentContent)
} else if (contentExtension === 'jpg') {
  videoTag.style.display = 'none'
  videoSource.style.display = 'none'
  image.setAttribute('src', currentContent)
} else {
  image.style.display = 'none'
  videoTag.style.display = 'none'
  videoSource.style.display = 'none'
}
