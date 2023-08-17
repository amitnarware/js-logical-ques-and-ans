 const students =[
    {name:"amit",score:85},
    {name:"ankush",score:91},
    {name:"tiwari",score:89},
    {name:"dev",score:81}
];
let totalScore = 0;
for (let i = 0; i < students.length; i ++){
    totalScore += students[i].score;
}
const avg = totalScore/students.length;
console.log(avg)