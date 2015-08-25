//Wrapper函数
module.exports = function(grunt) {
    // 配置项目
    var init = {
        loadPlus : function(str){
            return grunt.loadNpmTasks(str)
        },
        regTask : function(str){
            return grunt.registerTask(str)
        }
    }
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
                banner: '/*! <%= pkg.author.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle : false,
                beautify : true
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
                    'build/jsmini/index.js': ['build/jsmini/a.js', 'build/jsmini/b.js','build/jsmini/c.js']
                }
            }
        },
        jshint : {
            all :['src/js/*.js']
        },
        watch : {
            scripts : {
                files :['src/js/*.js','./*.js'],
                tasks :['jshint','uglify']
            },
            sass : {
                files :['src/styles/sass/*.scss'],
                tasks : ['sass']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    './*.html','./*.js'
                ]
            }
        },
        connect: {
            options: {
                port: 9003,
                hostname: 'localhost', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
                livereload: 35729  //声明给 watch 监听的端口
            },

            server: {
                options: {
                    open: true, //自动打开网页 http://
                    base: [
                        './'  //主目录
                    ]
                }
            }
        }
    })
    // 加载任务
    //加载提供“uglify”任务的插件
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    init.loadPlus('grunt-contrib-sass');
    init.loadPlus('grunt-contrib-jshint');
    init.loadPlus('grunt-contrib-watch');

    //对文件依赖的版本有要求
    init.loadPlus('grunt-contrib-connect');
    // 默认任务.
    init.loadPlus('grunt-contrib-uglify');
    init.regTask('default', ['sass','uglify','jshint','connect','watch']);

};