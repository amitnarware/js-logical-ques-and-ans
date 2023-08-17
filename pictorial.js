const number = 7;
for (let i = 1; i <= number; i++){
    let line = "";
for(let j = 1; j <= i; j++){
  line += number;
}
for (k = i + 1; k <= number; k++){
    line += '';
} 
console.log(line)
}