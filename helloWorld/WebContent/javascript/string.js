'hello'.slice(0, 3);
'hello'.substring(0, 3); // 0번째부터 2번째까지 자르기
'hello'.substr(1, 2); // 1번째부터 2개 자르기



// 970101-2345678
// 990101-1234567
// 000101-3456789
// 010901 4567890

function checkGender(birth) {
    // 2000년 01. 01 이전 출생자 주민번호 뒷자리(1:남자, 2:여자)
    // 2000년 01. 01 이전 출생자 주민번호 뒷자리(3:남자, 4:여자)
    // let gen = null;
    // if(birth.substring(6, 8) == '-1' || birth.substring(6, 8) == '-3' ||
    // birth.substring(6, 7) == '1' || birth.substring(6, 7) == '3') {
    //     gen = '남자';
    // }
    // if(birth.substring(6, 8) == '-2' || birth.substring(6, 8) == '-4' ||
    // birth.substring(6, 7) == '2' || birth.substring(6, 7) == '4') {
    //     gen = '여자';
    // }
    let year = birth.substr(0, 2);
    birth = birth.replace('-', '');
    let g = birth.charAt(6);
    let gen = null;
    if(g == '1' && parseInt(year) > 21 || g == '3' && parseInt(year) <= 21){
        gen = '남자';
    } else if(g == '2' && parseInt(year) > 21 || g == '4' && parseInt(year) <= 21) {
        gen = '여자';
    }
    return gen;
}

console.log(checkGender('970101-2345678'));
console.log(checkGender('990101-1234567'));
console.log(checkGender('000101-2456789'));
console.log(checkGender('0109014567890'));

