module.exports = function(grunt) {

    require('jit-grunt')(grunt)({
        customTasksDir: 'grunt'
    });

    require("load-grunt-config")(grunt, {
        data: {

            paths: {
                js : {
                    src : "public/js",
                    dest : "public"
                }
            }
        }
    });
};