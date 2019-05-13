const fs = require('fs')
const src = '../../../.gitignore'
const target = '.npmignore'
const flag = '### .gitignore ###'

console.log('.npmignore update ......')
// 同步 .gitignore 文件内容到 .npmignore 文件中
// 读取目标文件内容
fs.readFile(target, 'utf8', function (err, data) {
  if (err) {
    return console.error(err)
  }
  const p = data.indexOf(flag)
  if ( p >= 0 ) {
    data = data.substring(0, p + flag.length)
  } else {
    data += '\n' + flag
  }
  fs.readFile(src, 'utf8', function (err, data2) {
    if (err) {
      return console.error(err)
    }
    data += '\n' + data2
    // 写入目标
    fs.writeFile(target, data, 'utf8', function (err) {
      if (err) return console.error(err)
    })
  })
})

console.log('OK!')
