// Copy 4 wasm snippets
{
    let wasmSnippet = document.querySelector('.wasm-snippet-trail');
    for (let i = 0; i < 4; i++) {
        let clonedSnippet = wasmSnippet.cloneNode(true);
        wasmSnippet.parentNode.insertBefore(clonedSnippet, wasmSnippet);
    }
}

// feature active change when scrolling
{
    // Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

    let lastKnownScrollPosition = 0;
    let ticking = false;

    let featureList = document.querySelectorAll('.features-catalog li');
    let featureContent = document.querySelector('.features-content');
    let lastActiveIndex = 0;

    function setActiveFeature() {
        let offset = featureContent.getBoundingClientRect().y;
        let winHeight = window.innerHeight;
        let count = featureList.length;
        let activeIndex = Math.floor((0.5 * winHeight - offset) / winHeight);
        if (activeIndex >= count || activeIndex < 0) {
            return;
        }
        if (activeIndex !== lastActiveIndex) {
            featureList[lastActiveIndex].classList.remove('active');
            featureList[activeIndex].classList.add('active');
            lastActiveIndex = activeIndex;
        }
    }

    document.addEventListener('scroll', function(e) {
        // lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
            setActiveFeature();
            ticking = false;
            });

            ticking = true;
        }
    });

    document.querySelector('.features-catalog').addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();

            let featureList = document.querySelectorAll('.features-catalog a');
            for (let i = 0; i < featureList.length; i++) {
                if (e.target === featureList[i]) {
                    document.querySelectorAll('.feature-detail')[i].scrollIntoView({behavior: 'smooth'});
                    break;
                }
            }
        }
    });

}