for (var i = 0; i < 10; i++) {
    console.log((i + 1) + ' Saddam Hossain')
}

for (var i = 1; i <= 10; i++) {
    if (i % 2 ==1) {
        console.log(i)
    }
}

var sum = 0;
for (var i = 1; i <= 10; i++) {
    console.log(sum + ' + ' + i + ' = ' + (sum + i))
    sum += i
}
console.log('Result = ' + sum)