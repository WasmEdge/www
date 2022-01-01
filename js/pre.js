{
    function resetBaseSize() {
        let winWidth = window.innerWidth;
        if (document.body) {
            winWidth = document.body.clientWidth;
        }
        if (winWidth >= 1280) {
            return;
        }
        
        let htmlElem = document.querySelector('html');
        
        if (winWidth > 640) {
            fontSize = winWidth / 1280 * 16;
        } else {
            fontSize = winWidth / 640 * 16;
        }
        htmlElem.style.fontSize = fontSize + 'px';
    }

    resetBaseSize();

    window.onresize = resetBaseSize;
}