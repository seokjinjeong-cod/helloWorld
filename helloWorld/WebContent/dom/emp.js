
		let xhtp = new XMLHttpRequest();
		xhtp.onload = function () {
			let data = JSON.parse(xhtp.responseText);
			console.log(data);
			showEmpList(data);
		}
		xhtp.open('get', '../empJsonServlet1.json');
		xhtp.send();

		function showEmpList(data) {
			let table, tr, td, txt, button;
			table = document.createElement('table');
			table.setAttribute('border', '1');

			// title
			let titles = ['사번', '이름', '이메일', '입사일', '직무', '기능'];
			tr = document.createElement('tr');
			for (let i = 0; i < titles.length; i++) {
				td = document.createElement('th');
				txt = document.createTextNode(titles[i]);
				td.appendChild(txt);
				tr.appendChild(td);
                console.log(titles[i]);
			}
			table.appendChild(tr);

			// for (let i = 0; i < titles.length; i++) {
			// 	table.appendChild(getTitle());
			// }

			// data
			for (let row of data) {
				tr = document.createElement('tr');
				for (let field in row) {
                    td = document.createElement('td');
					txt = document.createTextNode(row[field]);
					td.appendChild(txt);
					tr.appendChild(td);
				}
                td = document.createElement('td');
				button = document.createElement('button');
				console.log(row.empId);
				button.setAttribute('id', row.empId);
				txt = document.createTextNode('삭제');
				button.appendChild(txt);
				td.appendChild(button);
				tr.appendChild(td);
				table.appendChild(tr);
			}


			document.getElementById('show').appendChild(table);
		}

		// title
		// function getTitle() {
		// 	tr = document.createElement('tr');
		// 	td = document.createElement('th');
		// 	txt = document.createTextNode(titles[i]);
		// 	td.appendChild(txt);
		// 	tr.appendChild(td);
		// 	// table.appendChild(tr);
		// 	return tr;
		// }