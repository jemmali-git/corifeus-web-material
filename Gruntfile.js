module.exports = (grunt) => {

    const builder = require(`corifeus-builder-angular`);
    const loader = new builder.loader(grunt);
    loader.angular({
        root: builder.config.folder.test.angularWebpack.root,
        replacer: {
            npmio: true
        }
    });
    grunt.registerTask('default', builder.config.task.build.angularAotJit);
    grunt.registerTask('run', builder.config.task.run.angular);
    grunt.registerTask('coverage', 'karma:cory-angular');
}
