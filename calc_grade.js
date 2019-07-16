var category;
var breakdown;
var yourGrade;

class cscClass {
    cscClass(category, breakdown, string){
        this.category = category;
        this.breakdown = breakdown;
        this.string = string;
    }
}

function classSwitch(choice) {
    switch(choice) {
        case "1": case "'1'": {
            let category232 = [ "Quiz", "Assignment", "Exam1", "Exam2", "Lab" ];
            let breakdown232 = [ .1, .3, .2, .2, .2 ];
            let string232 = "CSC 232  Data Structures\n";
            category = new cscClass(category232, breakdown232, string232)
            break;
        }
        case "2": case "'2'": {return "CSC 325  Algorithms\n";}
        case "3": case "'3'": {return "CSC 333  Languages and Machines\n";}
    }
}

function getInfo() {

}

var dataString = "Lab 06: Debugging\n" 
+"1.95 / 2.0\n"
+"JUL 08JUL 09 AT 11:00PM\n"
+"Exam 1, Part 1	\n"
+"9.5 / 10.0\n"
+"JUL 03JUL 03 AT 11:00AM\n"
+"Assignment 03: Dynamic Int Array List	\n"
+"25.0 / 28.0\n"
+"JUN 24JUL 01 AT 11:00PM\n"
+"Lab 05: Classes	\n"
+"2.0 / 2.0\n"
+"11 Hours, 51 Minutes Late\n"
+"JUN 25JUN 26 AT 11:00PM\n"
+"LATE DUE DATE: JUN 28 AT 11:00PM\n"
+"Assignment 02: Char Stack	\n"
+"20.0 / 20.0\n"
+"JUN 17JUN 25 AT 11:00PM\n"
+"LATE DUE DATE: JUN 27 AT 11:00PM\n"
+"Lab 04: Working with Files	\n"
+"2.0 / 2.0\n"
+"JUN 18JUN 24 AT 11:00PM\n"
+"Lab 03: Vectors	\n"
+"2.0 / 2.0\n"
+"JUN 17JUN 18 AT 11:00PM\n"
+"Assignment 01: Developing in C++	\n"
+"10.0 / 10.0\n"
+"JUN 10JUN 17 AT 11:00PM\n"
+"Lab 02: Developing with VS Code	\n"
+"2.0 / 2.0\n"
+"JUN 11JUN 12 AT 11:00PM\n"
+"Lab 01: Hello 232	\n"
+"2.0 / 2.0\n"
+"JUN 10JUN 11 AT 11:00PM\n"
+"Quiz 01: Introduction	\n"
+"10.0 / 10.0\n"
+"Quiz 03: Structured Data	\n"
+"10.0 / 10.0\n"
+"Quiz 02: Questions	\n"
+"10.0 / 10.0\n"
+"Quiz 04: Queues	\n"
+"10.0 / 10.0\n"
+"Quiz 05: Asymptotic Notation	\n"
+"10.0 / 10.0\n"
+"Quiz 06: Stacks and Queues	\n"
+"10.0 / 10.0\n"
+"Quiz 07: Work Day Participation	\n"
+"10.0 / 10.0\n"
+"Quiz 08: Memory Diagram	\n"
+"10.0 / 10.0\n"
+"Quiz 09: Rule of Five	\n"
+"7.6 / 10.0\n"
+"Exam 1, Part 2	\n"
+"45.5 / 50.0\n"
+"Quiz 10: Attend Guest Lecture	\n"
+"10.0 / 10.0\n"
+"Quiz 11: Array List	\n"
+"10.0 / 10.0\n";