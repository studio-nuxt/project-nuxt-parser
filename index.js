const NamumarkSyntax = require('./syntax/index.js');
let data = `[[분류:뉴시드위키]]\n[목차]\n== 개요 ==\n뉴시드위키는 망했다\nNew seed도 망했다`; // 대충 db 생성하는 코드로 대체
// const config = require('/config/ClientConfig');

const document_lmt = 100;

if(data.length > document_lmt) {
    data = `<h2>문서 길이가 너무 깁니다.`;

    return;
}
