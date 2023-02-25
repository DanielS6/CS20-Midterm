document.addEventListener( 'DOMContentLoaded', function () {

    // <button>s for going to next and previous image
    const nextBtn = document.getElementById( 'gallery-next' );
    const prevBtn = document.getElementById( 'gallery-prev' );
    
    // <div> wrapping around all of the image displays (<div> including <img>
    // and caption) to allow determining which should be shown
    const galleryImgs = document.getElementById('gallery-images');
    
    // Start with the first image (index 0) visible, based on hard-coded HTML
    let currVisibleIdx = 0;

    const VISIBLE_CLASS = 'gallery-visible-image';
    
    /**
     * Handles actually updating which image is visible. This is done by:
     *   - removing the "gallery-visible-image" class from the currently
     *     visible image
     *   - adding the "gallery-visible-image" class to the image that should
     *     be visible next
     *
     * The `currVisibleIdx` variable stores which number child in the
     * galleryImgs (and thus which number image) is currently visible. This
     * is updated based on the change parameter, wrapping around (previous
     * image from the first is the last, next image from the last is the first).
     *
     * @param {Number} imageIdxChange Should be 1 (next) or -1 (previous)
     */
    const updateVisibleImage = (imageIdxChange) => {
        // Wrap around from before the first and after the last
        const numImages = galleryImgs.children.length;
        const newVisibleIdx = (currVisibleIdx + imageIdxChange + numImages) % numImages;
        galleryImgs.children[currVisibleIdx].classList.remove(VISIBLE_CLASS);
        galleryImgs.children[newVisibleIdx].classList.add(VISIBLE_CLASS);
        currVisibleIdx = newVisibleIdx;
    };
    
    // Make the image with the next index be visible
    const onNextBtnClick = updateVisibleImage.bind(null, 1);
    // Make the image with the previous index be visible
    const onPrevBtnClick = updateVisibleImage.bind(null, -1);
    
    // Add the event listeners
    nextBtn.addEventListener( 'click', onNextBtnClick );
    prevBtn.addEventListener( 'click', onPrevBtnClick );
    
} );