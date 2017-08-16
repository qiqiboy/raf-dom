var lastTime = 0;
var ROOT = window;

module.exports = {
    requestAnimationFrame: ROOT.requestAnimationFrame ||
        ROOT.webkitRequestAnimationFrame ||
        ROOT.mozRequestAnimationFrame ||
        ROOT.msRequestAnimationFrame ||
        function(callback) {
            var currTime = Date.now(),
                delay = Math.max(1000 / 60, 1000 / 60 - (currTime - lastTime));
            lastTime = currTime + delay;
            return setTimeout(callback, delay);
        },

    cancelAnimationFrame: ROOT.cancelAnimationFrame ||
        ROOT.webkitCancelAnimationFrame ||
        ROOT.webkitCancelRequestAnimationFrame ||
        ROOT.mozCancelRequestAnimationFrame ||
        ROOT.msCancelRequestAnimationFrame ||
        clearTimeout
}
