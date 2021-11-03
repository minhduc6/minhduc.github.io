let grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

let isMale =  grades  => {
    return  grades.filter(x => x.sex == 'M')
}

let isFemale =  grades  => {
    return  grades.filter(x => x.sex == 'F')
}

let avgGrade = grades => {
    return grades.reduce((sum, ele) => (sum + ele.grade), 0) / grades.length
}

let isMax = grades => {
    return Math.max(...grades.map(std => std.grade))
}
let isMin = grades => {
    return Math.min(...grades.map(std => std.grade))
}
// 1.Tìm thứ hạng trung bình của cả lớp
console.log(avgGrade(grades))
// 2.Tìm thứ hạng trung bình của nam trong lớp
console.log(avgGrade(isMale(grades)))
// 3.Tìm thứ hạng trung bình của Nữ trong lớp
console.log(avgGrade(isFemale(grades)))
// 4.Tìm thứ hạng cao nhất của Nam trong lớp
console.log(isMax(isMale(grades)))
// 5.Tìm thứ hạng cao nhất của Nữ trong lớp
console.log(isMax(isFemale(grades)))
// 6.Tìm thứ hạng thấp nhất của Nam trong lớp
console.log(isMin(isMale(grades)))
// 7.Tìm thứ hạng thấp nhất của Nữ trong lớp
console.log(isMin(isFemale(grades)))
// 8.Tìm thứ hạng cao nhất của cả lớp
console.log(isMax(grades))
// 9.Tìm thứ hạng thấp nhất của cả lớp
console.log(isMin(grades))
// 10.Lấy ra danh sách tất cả học viên nữ trong lớp
let result = isFemale(grades)
for(let i = 0 ;i < result.length ; i++)
{
    console.log(result[i])
}
// 11.Sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
function sortName() {
    grades.sort((a, b) => a.name.localeCompare(b.name))
    grades.forEach(element => console.log(element));
}
console.log("cau 11")
console.log(sortName())
// 12.Sắp xếp thứ hạng học viên theo chiều giảm dần
function sortGrade() {
     grades.sort(function(a, b){
         if (a.grade < b.grade) return 1;
         if (a.grade > b.grade) return -1;
         return 0;
     });
}
console.log("cau 12")
sortGrade()
grades.forEach(element => console.log(element));
// 13. Lấy ra học viên nữ có tên bắt đầu bằng "J"
function filterFamaleAndJ() {
    let listFilter = grades.filter(x => x.sex == 'F' && x.name.charAt(0) == 'J')
    listFilter.forEach(element => console.log(element));
}
console.log("cau 13")
console.log(filterFamaleAndJ())

// 14.Lấy ra top 5 người có thứ hạng cao nhất```
function top5Grade() {
    sortGrade();
    for(let i = 0 ; i < 5 ; i++)
    {
        console.log(grades[i])
    }
}
console.log("cau 14")
console.log(top5Grade())
