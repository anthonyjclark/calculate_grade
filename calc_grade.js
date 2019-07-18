var yourClass;

class CategoryInfo {
    constructor(weight) {
        this.weight = weight;  // category weight
        this.yourScore = 0.0;  // your score
        this.maxScore = 0.0;   // potential score
    }

    addToYourScore(score) {
        this.yourScore += score;
    }
    addToMaxScore(score) {
        this.maxScore += score;
    }
}
class CscClass {
    constructor(category, breakdown, string) {
        this.category = category;   // list of categories in class
        this.breakdown = breakdown; // weight of each category
        this.string = string;       // title of class
        this.map = new Map();
        for (let i = 0; i < this.category.length; i++) {
            // create new category to hold weight and scores
            let info = new CategoryInfo(this.breakdown[i])
            this.map.set(this.category[i], info);
        }
    }
}

// create class based on menu selection
function classSwitch(choice) {
    let category, breakdown, string;
    switch (choice) {
        case "1": case "'1'": {
            category = ["Quiz", "Assignment", "Exam1", "Exam2", "Lab"];
            breakdown = [.1, .3, .2, .2, .2];
            string = "CSC 232  Data Structures\n";
            break;
        }
        case "2": case "'2'": {
            category = ["Quiz", "Assignment", "Exam1", "Exam2"];
            breakdown = [.1, .5, .2, .2];
            string = "CSC 325  Algorithms\n";
            break;
        }
        case "3": case "'3'": {
            category = ["Quiz", "Assignment", "Exam1", "Exam2"];
            breakdown = [.1, .5, .2, .2];
            string = "CSC 333  Languages and Machines\n";
            break;
        }
    }
    yourClass = new CscClass(category, breakdown, string)
}

classSwitch("2");
console.log(yourClass.string);
yourClass.category.forEach(category => {
    let formatSpace = (11 - category.length);
    // add space at end of category name for formatted printing
    let name = category + " score:" + (" ".repeat(formatSpace));
    console.log(name + yourClass.map.get(category).yourScore
        + "/" + yourClass.map.get(category).maxScore
        + ", weight: " + yourClass.map.get(category).weight * 100 + "%")
});

function getInfo() {

}

var dataString = "Lab 06: Debugging\n"
    + "1.95 / 2.0\n"
    + "JUL 08JUL 09 AT 11:00PM\n"
    + "Exam 1, Part 1	\n"
    + "9.5 / 10.0\n"
    + "JUL 03JUL 03 AT 11:00AM\n"
    + "Assignment 03: Dynamic Int Array List	\n"
    + "25.0 / 28.0\n"
    + "JUN 24JUL 01 AT 11:00PM\n"
    + "Lab 05: Classes	\n"
    + "2.0 / 2.0\n"
    + "11 Hours, 51 Minutes Late\n"
    + "JUN 25JUN 26 AT 11:00PM\n"
    + "LATE DUE DATE: JUN 28 AT 11:00PM\n"
    + "Assignment 02: Char Stack	\n"
    + "20.0 / 20.0\n"
    + "JUN 17JUN 25 AT 11:00PM\n"
    + "LATE DUE DATE: JUN 27 AT 11:00PM\n"
    + "Lab 04: Working with Files	\n"
    + "2.0 / 2.0\n"
    + "JUN 18JUN 24 AT 11:00PM\n"
    + "Lab 03: Vectors	\n"
    + "2.0 / 2.0\n"
    + "JUN 17JUN 18 AT 11:00PM\n"
    + "Assignment 01: Developing in C++	\n"
    + "10.0 / 10.0\n"
    + "JUN 10JUN 17 AT 11:00PM\n"
    + "Lab 02: Developing with VS Code	\n"
    + "2.0 / 2.0\n"
    + "JUN 11JUN 12 AT 11:00PM\n"
    + "Lab 01: Hello 232	\n"
    + "2.0 / 2.0\n"
    + "JUN 10JUN 11 AT 11:00PM\n"
    + "Quiz 01: Introduction	\n"
    + "10.0 / 10.0\n"
    + "Quiz 03: Structured Data	\n"
    + "10.0 / 10.0\n"
    + "Quiz 02: Questions	\n"
    + "10.0 / 10.0\n"
    + "Quiz 04: Queues	\n"
    + "10.0 / 10.0\n"
    + "Quiz 05: Asymptotic Notation	\n"
    + "10.0 / 10.0\n"
    + "Quiz 06: Stacks and Queues	\n"
    + "10.0 / 10.0\n"
    + "Quiz 07: Work Day Participation	\n"
    + "10.0 / 10.0\n"
    + "Quiz 08: Memory Diagram	\n"
    + "10.0 / 10.0\n"
    + "Quiz 09: Rule of Five	\n"
    + "7.6 / 10.0\n"
    + "Exam 1, Part 2	\n"
    + "45.5 / 50.0\n"
    + "Quiz 10: Attend Guest Lecture	\n"
    + "10.0 / 10.0\n"
    + "Quiz 11: Array List	\n"
    + "10.0 / 10.0\n";