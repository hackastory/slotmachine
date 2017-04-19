var Sounds = function(paths) {
    this.paths = {};
    paths.forEach(this.load, this);
}

Sounds.prototype = {

    get : function(path) {
        return this.has(path) ? this.paths[path] : null;
    },

    has : function(path) {
        return path in this.paths;
    },

    load : function(path) {
        this.paths[path] = new Audio(path);
    },

    pause : function(path) {
        if (this.has(path)) {
            this.paths[path].pause();
        }
    },

    play : function(path) {
        if (!this.has(path)) {
            this.load(path);
        }

        var sound = this.paths[path];

        if (!sound.paused) {
            sound.pause();
            sound.currentTime = 0;
        }

        sound.play();
    }
};

export default Sounds;