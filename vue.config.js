module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // '@': 'src'默认配过了
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}