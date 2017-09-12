module.exports = (grunt) => {

    const builder = require(`corifeus-builder-angular`);
    const loader = new builder.loader(grunt);
    loader.angular({
        root: builder.config.folder.test.angularWebpack.root,
        replacer: {
            npmio: true
        }
    });

    const defaults = [];

    grunt.registerTask('default', defaults.concat(builder.config.task.build.angularAot));

    grunt.registerTask('dev', defaults.concat(builder.config.task.build.angular));
    grunt.registerTask('aot', defaults.concat(builder.config.task.build.angularAot));
    grunt.registerTask('aot-jit', defaults.concat(builder.config.task.build.angularAotJit));

    grunt.registerTask('run', defaults.concat(builder.config.task.run.angular));
    grunt.registerTask('coverage', 'karma:cory-angular');

}
