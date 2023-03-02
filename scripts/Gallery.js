// Specifically NOT using DOMContentLoaded but rather the load event so that
// we can be sure that jQuery has also finished loading
// See https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
window.addEventListener( 'load', function () {

    // elements
    const $imgs = $('#gallery-wrapper img')
    // Access the three individual images to change the pictures shown
    const $img1 = $('#slideshow-image-left');
    const $img2 = $('#slideshow-image-mid');
    const $img3 = $('#slideshow-image-right');

    const $startBtn = $('#slideshow-start');
    const $stopBtn = $('#slideshow-stop');

    // Image sources
    const imgURLs = [
        [ './images/cat3.jpg', './images/dog3.jpg', './images/cat4.jpg' ],
        [ './images/dog4.jpg', './images/cat5.jpg', './images/dog5.jpg' ],
        [ './images/cat6.jpg', './images/dog6.jpg', './images/cat7.jpg' ],
        [ './images/dog7.jpg', './images/cat8.jpg', './images/dog8.jpg' ]
    ];
    // HTML is coded to start with the first set of images.jpg
    let currImgIdx = 0;
    let slideshowRunning = false;

    // Milliseconds for fades
    const SLIDESHOW_SPEED = 2500;

    // Forward declare because of mutual recursion
    let afterFadeIn;
    const afterFadeOut = () => {
        // Stopping the slideshow means that the next image won't fade out,
        // but we will still finish fading in the current one
        currImgIdx = (currImgIdx + 1) % imgURLs.length;
        $img1.attr('src', imgURLs[currImgIdx][0]);
        $img2.attr('src', imgURLs[currImgIdx][1]);
        $img3.attr('src', imgURLs[currImgIdx][2]);
        $imgs.fadeIn(SLIDESHOW_SPEED, afterFadeIn);
    };
    afterFadeIn = () => {
        // Don't continue if the slideshow is stopped
        if (slideshowRunning) {
            $imgs.fadeOut(SLIDESHOW_SPEED, afterFadeOut);
        }
    };

    const onStartBtn = () => {
        // Don't trigger multiple fades if already running
        if (!slideshowRunning) {
            slideshowRunning = true;
            // start the next fade out
            afterFadeIn();
        }
    };
    const onStopBtn = () => {
        // No harm in setting to false if already false, doesn't do anything
        slideshowRunning = false;
    };

    $startBtn.on('click', onStartBtn);
    $stopBtn.on('click', onStopBtn);

} );