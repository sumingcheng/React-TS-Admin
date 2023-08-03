const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const createWriteStream = fs.createWriteStream;
const join = path.join;

const output = createWriteStream(join(__dirname, '../dist/dist.zip'));
const archive = archiver('zip', {
  zlib: {level: 9}
});

archive.directory('./dist/resource/', false);

archive.pipe(output);
archive
    .finalize()
    .then(() => {
      console.log('ZIP 💼 file has been successfully created!');
    })
    .catch(err => {
      console.error('An error occurred while creating the ZIP 💼 file: ', err);
    });

/*
 * postbuild 是 npm 的一个特殊命令，它会在 build 命令执行完毕后自动运行。在这个例子中，
 * 当你运行 npm run build 后，zip.js 脚本会自动运行，将 dist 文件夹打包成 dist.zip 文件。
 * */
