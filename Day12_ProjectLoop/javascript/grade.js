let nilai = 50

function assignGrade (score) {
    if (score > 100){
        return 'Undefined';
    } else if (score > 89) {
        return 'A';
    } else if (score > 79) {
        return 'B';
    } else if (score > 69) {
        return 'C';
    } else if (score > 49) {
        return 'D';
    } else if (score > 0) {
        return 'F';
    } else {
        return 'Undefined';
    }
}
for (let i = nilai; i <= nilai; i++) {
    console.log('For ' + i + ', you got a ' + assignGrade(i));
    console.log('For ' + 70 + ', you got a ' + assignGrade(70));
}