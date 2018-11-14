var grade = 70;

if (grade >= 80) {
    console.log("A");
} else if (grade >= 70) {
    console.log("B");
} else if (grade >= 60) {
    console.log("C");
} else if (grade >= 50) {
    console.log("D");
} else {
    console.log("F");
}

var alphagrade = 'B';

switch (alphagrade) {
    case "A":
        console.log("Your score is between 80 and 100");
        break;
    case "B":
        console.log("Your score is between 70 and 79");
        break;
    case "C":
        console.log("Your score is between 60 and 69");
        break;
    case "D":
        console.log("Your score is between 50 and 59");
        break;
    case "F":
        console.log("You failed");
        break;
    default:
        console.log("Thats no grade!");
        break;
}
