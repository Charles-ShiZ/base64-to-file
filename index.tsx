import base64Img from './base64.js';

// 将base64转换为file
function base64ToFile(base64Img: string, fileName: string) {
  var arr = base64Img.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  const blob = new Blob([u8arr], { type: mime });
  const now = new Date();
  blob.lastModifiedDate = now;
  blob.lastModified = now.valueOf();
  blob.name = fileName;
  blob.uid = now.valueOf();
  return blob;
}

//调用
let file = base64ToFile(base64Img, 'name');
// let file = blobToFile(blob, 'a.png');
console.log(file);
