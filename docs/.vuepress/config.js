const path = require('path')
const glob = require('globby')
const cwd = path.join(__dirname, '..')

var vuepressConfig = async () => {
  const docFiles = glob.sync('components/**/*.md', { cwd }).map(f => '/' + f)

  return {
    dest: path.join(__dirname, '../../dist'),//打包目录
    base: '/vue-comp-docs/dist/',
    title: '小程序UI组件库',
    themeConfig: {
      search: true,
      nav:[
        {
          text: '开发指南',
          items: [
            { text: '组件规范', link: 'https://www.npmjs.com/package/vue-docgen-api' }
          ]
        } 
      ], 
      sidebar: docFiles,
      markdown: {
        lineNumbers: true
      }, 
    },
    plugins: [
      ['live'],
      [
        '@vuepress/register-components',
        '@vuepress/nprogress'
      ]
    ]
  }
} 

module.exports = vuepressConfig;