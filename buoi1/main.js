//Bài 1 :
function checkMark(mark)
{
   if(mark < 0 || mark > 100 || typeof(mark) != 'number')
   {
      console.log("Yêu Cầu Nhập Mark Trong Khoảng 0 -> 100 và đúng fomart");
   }
   else
   {
       if(mark >= 85)
       {
            console.log("A");
       }
       else if(mark >= 70 && mark < 85)
       {
            console.log("B");
       }
       else if(mark >= 40 && mark < 70)
       {
            console.log("C");
       }
       else
       {
            console.log("D");
       }

   }
}
// Bài 2 

function checkDay(day)
{
    switch (day) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
        default:
          day = "Không tồn tại"
      }
      return day;
}
// Bài 3 

function radomMinMax(min,max)
{
    return Math.floor(Math.random() * (max - min) + min); 
}

// Vòng lặp 
// Bài 1 

function sumSoLe()
{
   let sum = 0;
   for(let i = 1 ; i <= 100 ;i++)
   {
      if(i % 2 != 0)
      {
        sum += i;
      }
   }
   return sum;
}

// Bài 2 :

function sumChiaHet3and5()
{
    let sum = 0;
    for(let i = 0 ; i <= 100 ;i++)
   {
      if(i % 3 == 0 && i % 5 == 0)
      {
        sum += i;
      }
   }
   return sum;
}


