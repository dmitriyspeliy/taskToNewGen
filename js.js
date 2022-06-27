// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

 // Варианты цен (фильтры), которые ищет пользователь
 let requiredRange1 = [0, 200];
 let requiredRange2 = [100, 350];
 let requiredRange3 = [200, null];

 //Функция для пересекающихся интервалов
 let filterResult = courses.filter(function(currentValue) {

    //переменные для удобства
    let startPrice = requiredRange1[0];
    let finishPrice = requiredRange1[1];
    let currentStartPrice = currentValue.prices[0];
    let currentFinishPrice = currentValue.prices[1];


    //если null, то переводим в значение 0
    if(currentStartPrice===null){
        currentStartPrice = 0;
    }
    if(currentFinishPrice===null){
        currentFinishPrice = Number.MAX_VALUE;
    }
    if(startPrice===null){
        startPrice = 0;
    }
    if(finishPrice===null){
        finishPrice = Number.MAX_VALUE;
    }
    
    //Пересечение, это когда начало одного интервала меньше(если нужно равно) конца другого интервала, или конец 
    //одного интервала больше(если нужно равно) начала другого:
    //a.start <= b.end && a.end >= b.start
    if(startPrice <= currentFinishPrice && finishPrice >= currentStartPrice){
         return currentValue;
    } 

 });

