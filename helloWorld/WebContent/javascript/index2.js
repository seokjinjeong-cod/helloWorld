function sum(x, y) {
    let a = x;
    let b = y;
    return a + b;
}

console.log(sum(23, 54));

function createObject(name, age, score) {
    let obj = {
        name: name,
        age: age
    }; //new Object();
    obj.score = score;
    obj.pass = (score >= 60) ? 'pass' : 'fail';

    return obj;
}

let newobj = createObject('정석진', 25, 55);
console.log('이름 : ' + newobj.name + '\n나이 : ' + newobj.age + 
    '\n점수 : ' + newobj.score + "\n합격 : " + newobj.pass);

// TR 태그 생성 연습.
function createTr(person){
    let tag = '<tr>';
    for(let field in person){
        tag += '<td>' + person[field] +'</td>';
    }
    if(person.score >= 60) {
        tag += '<td class="pass">pass</td>';
    } else {
        tag += '<td class="fail">fail</td>';
    }
    tag += '</tr>';
    return tag;
}

createTable();
