const choi = {
    name: '최선영',
    age: 20,
    score: 90
}

const han = {
    name: '한동일',
    age: 21,
    score: 89
}

const yun = {
    name: '윤희성',
    age: 22,
    score: 59
}

const persons = [choi, han, yun]

// createTable(); // hoisting(끌어올림)

function createTable() {
    let tag = '<table border="1">'
    tag += '<thead><tr><th>이름</th><th>나이</th><th>점수</th><th>합격여부</th></tr></thead>'
    tag += '<tbody>'
    for (let person of persons) {
        // if (person.score >= 60) {
        //     tag += '<tr class="pass">';
        // } else {
        //     tag += '<tr class="fail">';
        // }
        // tag += '<tr>';
        // for (let field in person) {
        //     tag += '<td>' + person[field] + '</td>'
        // }
        // if (person.score >= 60) {
        //     tag += '<td class="pass">Pass</td>'
        // } else {
        //     tag += '<td class="fail">Fail</td>'
        // }
        // tag += '</tr>'
        tag += createTr(person);
    }
    tag = tag + '</tbody></table>'
    document.write(tag);
}



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
// const col = ['이름', '나이', '점수']
// document.write('<table border="1">')
// for(let i = 0; i < col.length; i++){
//     document.write('<th>' + col[i] + '</th>')
// }
// for(let person of persons){
//     document.write('<tr>')
//     for(let field in person){
//         document.write('<td>' + person[field] + '</td>')
//     }
//     document.write('</tr>')
// }
// document.write("</table>")

createTable();