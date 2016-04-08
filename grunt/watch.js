module.exports = {
    js: {
        files: [
            '<%= paths.js.src %>/**/*.js'
        ],
        tasks: ['concat:<%= build %>']
    }
};