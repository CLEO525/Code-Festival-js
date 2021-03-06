//56. 객체함수의 응용
//다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

//reduce로 풀기

/*
데이터
nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}

출력
England 22023
*/

const nationWidth = {
    'korea': 220877,
    'China': 9596961,
    'Rusia': 17098242,
    'France': 543965,
    'Japan': 377915,
    'England' : 242900,
};

const width = nationWidth['korea'];
delete nationWidth['korea'];

const entry = Object.entries(nationWidth);
const values = Object.values(nationWidth);

let gap = Math.max.apply(null, values);
let item = [];
for(let i in entry) {
    if(gap > Math.abs(entry[i][1] - width)) {
        gap = Math.abs(entry[i][1] - width);
        item = entry[i];
    }
}
console.log(item[0],item[1] - width);
