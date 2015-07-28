//Wrapper函数
module.exports = function(grunt) {
    // 配置项目
    grunt.initConfig({
        // 配置任务
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            cssmini: {
                options: {
                    style: 'compressed'
                },
                expand: true,
                cwd: 'src/styles/sass/',
                src: ['*.scss'],
                dest: 'build/styles/cssmini',
                ext: '.css'
            },
            dev: {
                options: {
                    style: 'expanded',
                    debugInfo: true,
                    lineNumbers: true
                },
                expand: true,
                cwd: 'src/styles/sass/',
                src: ['*.scss'],
                dest: 'build/styles/css',
                ext: '.css'
            }
        },
        uglify: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.author.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            //具体任务配置
            build: {
                options:{
                    footer:'\n/*! <%= pkg.author.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
                },
                //源文件
                cwd:'src/js/',
                src: ['*.js'],
                //目标文件
                expand: true,
                dest: 'build/jsmini/',
                ext:'.js'
            },
            // 合并
            replase:{
                files:{
                    //生成的合并文件名称                           // 目标文件
                    'build/jsmini/index.js': ['build/jsmini/a.js', 'build/jsmini/b.js']
                }
            }
        }
    })
    // 加载任务
    //加载提供“uglify”任务的插件
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    // 默认任务.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['sass','uglify']);



};