

fis.hook('amd')

// 所有css文件打包成一个文件
fis.match('**.css', {
    optimizer: fis.plugin('clean-css'),
    packTo: '/static/pkg/css/all.css',
    useHash : true
})

// 处理js文件
fis.match('**.js', {
	optimizer: 'uglify-js',
    useHash : true
})

// 处理库文件
fis.match('js/lib/**.js', {
	packTo: 'static/pkg/js/lib.js'
})

// // 处理业务逻辑文件
fis.match('js/components/**.js', {
	packTo: 'static/pkg/js/app.js',
    isMod: true
})

// 配置打包插件
fis.match('::package', {
	postpackager: 'loader'
})
