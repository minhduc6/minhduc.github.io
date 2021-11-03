function generateTable(table, data) {
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    count++;
    let row = table.insertRow();
    let cell = row.insertCell();
    let textId = document.createTextNode(count);
    cell.appendChild(textId);
    let cellName = row.insertCell();
    let textName = document.createTextNode(data[i].name);
    cellName.appendChild(textName);
    let cellEmail = row.insertCell();
    let textEmail = document.createTextNode(data[i].email);
    cellEmail.appendChild(textEmail);
    let cellPhone = row.insertCell();
    let textPhone = document.createTextNode(data[i].phone);
    cellPhone.appendChild(textPhone);
    let cellNghi = row.insertCell();
    let textNghi = document.createTextNode(
      `${data[i].totalOff} / ${data[i].sessions}`
    );
    cellNghi.appendChild(textNghi);
    cellNghi.style.textAlign = 'center'
    let cellDayOff = row.insertCell();
    let cellNote = row.insertCell();
    let cellTeacher = row.insertCell();
    let detailInfoArr = Array.from(data[i].detailInfo);
    for (let j = 0; j < detailInfoArr.length; j++) {
      let tr1 = document.createElement("tr");
      tr1.style.borderRightStyle = "hidden";
      tr1.style.borderLeftStyle = "hidden";
      tr1.style.borderBottomStyle = "none";
      tr1.innerHTML = `
          <td style="text-align:center">${detailInfoArr[j].date}</td>`;
      cellDayOff.appendChild(tr1);
      let tr2 = document.createElement("tr");
      tr2.style.borderRightStyle = "hidden";
      tr2.style.borderLeftStyle = "hidden";
      tr2.style.borderBottomStyle = "none";
      tr2.innerHTML = `
      <td style="text-align:left;">${detailInfoArr[j].note}</td>`;
      cellNote.appendChild(tr2);
      let tr3 = document.createElement("tr");
      tr3.style.borderRightStyle = "hidden";
      tr3.style.borderLeftStyle = "hidden";
      tr3.style.borderBottomStyle = "none";
      tr3.innerHTML = `
      <td style="text-align:left;">${detailInfoArr[j].teacher_name}</td>`;
      cellTeacher.appendChild(tr3);
    }
  }
}

let table = document.querySelector("tbody");
generateTable(table, student_warning.students);

let divTarget = document.getElementsByClassName('class-inner')[0]
console.log(divTarget)
let lopHoc = document.createElement('h3')
lopHoc.innerHTML = `Lớp Học : <span style ="color : #696966;font-weight: normal;">${student_warning.class}</span>`
divTarget.appendChild(lopHoc)
let course = document.createElement('h3')
course.innerHTML = `Thuộc Khóa Học :  <span style ="color : #696966;font-weight: normal;">${student_warning.course}</span>`
divTarget.appendChild(course)
let teacher = document.createElement('div')
divTarget.appendChild(teacher)
let teacherTitle = document.createElement('h3')
teacherTitle.innerHTML = `Danh Sách Giảng Viên`
teacher.appendChild(teacherTitle)
let listTeacher = document.createElement('ul')
teacher.appendChild(listTeacher)
let arrTeacher = Array.from(student_warning.teachers)
console.log(arrTeacher)
for(let i = 0 ; i < arrTeacher.length;i++) {
  let newLi = document.createElement('li')
  newLi.innerHTML = `${arrTeacher[i].name} (${arrTeacher[i].email} - ${arrTeacher[i].phone})`
  listTeacher.appendChild(newLi)
}
let sumSessions = document.createElement('h3')
sumSessions.innerHTML = `Tổng số buổi : <span style ="color : #696966;font-weight: normal;">${student_warning.sessions}</span>`
divTarget.appendChild(sumSessions)
