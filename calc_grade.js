var yourClass;

{ // dataString
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
}
{ // dataString2
    var dataString2 =
        "    Skip to content\n"
        + "gradescope\n"
        + "CSC 232\n"
        + "Data Structures\n"
        + "\n"
        + "    Dashboard\n"
        + "    Regrade Requests\n"
        + "\n"
        + "Instructor\n"
        + "\n"
        + "    Anthony Clark\n"
        + "\n"
        + "Account\n"
        + "CSC 232\n"
        + "Summer 2019\n"
        + "Description\n"
        + "\n"
        + "A continuation of CSC 131. Topics will include: algorithm design; complexity analysis; abstract data types and encapsulation; basic data structures and their application, including stacks, queues, linked lists and binary trees; dynamic memory allocation; recursion; sorting and searching; debugging techniques.\n"
        + "Assignments List\n"
        + "Name	Status	ReleasedDue (CDT)\n"
        + "No Submission\n"
        + "	\n"
        + "4 days, 23 hours left\n"
        + "Jul 18Jul 23 at 11:00PM\n"
        + "Lab 08: Linked Lists	\n"
        + "No Submission\n"
        + "	\n"
        + "Jul 15Jul 16 at 11:00PM\n"
        + "Assignment 04: Array List	\n"
        + "No Submission\n"
        + "	\n"
        + "Jul 08Jul 15 at 11:00PM\n"
        + "Lab 07: Exceptions and Templates	\n"
        + "No Submission\n"
        + "	\n"
        + "Jul 10Jul 11 at 11:00PM\n"
        + "Lab 06: Debugging	\n"
        + "1.95 / 2.0\n"
        + "	\n"
        + "Jul 08Jul 09 at 11:00PM\n"
        + "Exam 1, Part 1	\n"
        + "9.5 / 10.0\n"
        + "	\n"
        + "Jul 03Jul 03 at 11:00AM\n"
        + "Assignment 03: Dynamic Int Array List	\n"
        + "25.0 / 28.0\n"
        + "	\n"
        + "Jun 24Jul 01 at 11:00PM\n"
        + "Lab 05: Classes	\n"
        + "2.0 / 2.0\n"
        + "11 Hours, 51 Minutes Late\n"
        + "	\n"
        + "Jun 25Jun 26 at 11:00PM\n"
        + "Late Due Date: Jun 28 at 11:00PM\n"
        + "Assignment 02: Char Stack	\n"
        + "20.0 / 20.0\n"
        + "	\n"
        + "Jun 17Jun 25 at 11:00PM\n"
        + "Late Due Date: Jun 27 at 11:00PM\n"
        + "Lab 04: Working with Files	\n"
        + "2.0 / 2.0\n"
        + "	\n"
        + "Jun 18Jun 24 at 11:00PM\n"
        + "Lab 03: Vectors	\n"
        + "2.0 / 2.0\n"
        + "	\n"
        + "Jun 17Jun 18 at 11:00PM\n"
        + "Assignment 01: Developing in C++	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Jun 10Jun 17 at 11:00PM\n"
        + "Lab 02: Developing with VS Code	\n"
        + "2.0 / 2.0\n"
        + "	\n"
        + "Jun 11Jun 12 at 11:00PM\n"
        + "Lab 01: Hello 232	\n"
        + "2.0 / 2.0\n"
        + "	\n"
        + "Jun 10Jun 11 at 11:00PM\n"
        + "Quiz 01: Introduction	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 03: Structured Data	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 02: Questions	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 04: Queues	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 05: Asymptotic Notation	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 06: Stacks and Queues	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 07: Work Day Participation	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 08: Memory Diagram	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 09: Rule of Five	\n"
        + "7.6 / 10.0\n"
        + "	\n"
        + "Exam 1, Part 2	\n"
        + "45.5 / 50.0\n"
        + "	\n"
        + "Quiz 10: Attend Guest Lecture	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 11: Array List	\n"
        + "10.0 / 10.0\n"
        + "	\n";
}
{ // dataString3
    var dataString3 =
        "    Skip to content\n"
        + "gradescope\n"
        + "CSC 325\n"
        + "Algorithms and Advanced Data Structures\n"
        + "\n"
        + "    Dashboard\n"
        + "    Regrade Requests\n"
        + "\n"
        + "Instructor\n"
        + "\n"
        + "    Anthony Clark\n"
        + "\n"
        + "Account\n"
        + "CSC 325\n"
        + "Spring 2019\n"
        + "Description\n"
        + "\n"
        + "This course should be taken as soon as possible after CSC 232. Algorithms and advanced data structures, including graphs, heaps, self-adjusting data structures, set representations and dynamic programming. Sample applications, including memory management and data compression. Introduction to NP-complete problems. Correctness proofs and efficiency analysis are stressed. May be taught concurrently with CSC 611. Cannot receive credit for both CSC 611 and CSC 325.\n"
        + "Assignments List\n"
        + "Name	Status	ReleasedDue (CDT)\n"
        + "Assignment 07, Hash Tables	\n"
        + "19.0 / 20.0\n"
        + "	\n"
        + "Apr 26May 06 at 11:00PM\n"
        + "Assignment 06, Minimum Spanning Trees	\n"
        + "20.0 / 20.0\n"
        + "	\n"
        + "Apr 17Apr 25 at 11:00PM\n"
        + "Assignment 05, Dijkstra's	\n"
        + "20.0 / 20.0\n"
        + "	\n"
        + "Apr 10Apr 11 at 11:00PM\n"
        + "Assignment 04, Friend Circles and Graphs	\n"
        + "20.0 / 20.0\n"
        + "	\n"
        + "Mar 29Apr 03 at 11:00PM\n"
        + "Assignment 03, Quicksort	\n"
        + "25.0 / 25.0\n"
        + "	\n"
        + "Mar 04Mar 18 at 11:00PM\n"
        + "Assignment 02, Master Theorem	\n"
        + "16.4586 / 20.0\n"
        + "	\n"
        + "Feb 20Feb 27 at 11:00PM\n"
        + "Assignment 01, Running Time and Time Complexity	\n"
        + "15.0 / 15.0\n"
        + "	\n"
        + "Jan 28Feb 04 at 11:00PM\n"
        + "Quiz 01, Introduction (2019-01-16)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 02, Loop Invariant and Merge (2019-01-23)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 03, Recursion Tree (2019-02-01)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 04, Closest Split Pair (2019-02-06)	\n"
        + "9.5 / 10.0\n"
        + "	\n"
        + "Quiz 05, Master Theorem (2019-02-08)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 06, Master Theorem Proof (2019-02-11) 	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 07, Probability Review (2019-02-15)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 08, Quicksort Partition (2019-02-20)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 09, Quicksort Running Time (2019-02-25)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 10, Quickselect (2019-02-27)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 11, Graph Search (2019-03-04)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Exam 1	\n"
        + "46.2 / 50.0\n"
        + "	\n"
        + "Quiz 12, BFS (2019-03-22)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 13, Topological Ordering (2019-03-25)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 14, Strongly Connected Components (2019-03-27)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 15, Kosaraju's Algorithm (2019-03-29)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 16, Dijkstra's Example (2019-04-01)	\n"
        + "9.5 / 10.0\n"
        + "	\n"
        + "Quiz 17, Heaps (2019-04-03)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 18, Binary Search Trees (2019-04-10)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 19, Red-Black Trees Insert (2019-04-12)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 20, Greedy Scheduling (2019-04-15)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 22, Hash Tables (2019-04-22)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Quiz 21, Minimum Spanning Tree (2019-04-15)	\n"
        + "10.0 / 10.0\n"
        + "	\n"
        + "Exam 2, Part 1	\n"
        + "9.0 / 10.0\n"
        + "	\n"
        + "Exam 2, Part 2	\n"
        + "59.5 / 61.25\n"
        + "	\n";
}

class CategoryInfo {
    constructor(weight) {
        this.weight = 100 * weight; // category weight
        this.yourScore = 0.0;       // your score
        this.maxScore = 0.0;        // potential score
        this.noSubmission = [];     // stores No Submission Info
    }

    addToYourScore(score) {
        this.yourScore += score;
    }
    addToMaxScore(score) {
        this.maxScore += score;
    }
    getScore() {
        return (this.yourScore / this.maxScore);
    }
    getPercentage() {
        if (this.isEmpty()) { return 0; }
        return (this.getScore() * this.weight);
    }
    isEmpty() {
        return this.maxScore == 0.0;
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

    getCurrentScore() {
        let score = this.getWeightedScore();
        for (const [key, category] of this.map) {
            if (category.isEmpty()) {
                score += category.weight;
            }
        }
        return score;
    }
    getWeightedScore() {
        let score = 0.0;
        for (const [key, category] of this.map) {
            score += category.getPercentage();
        }
        return score;
    }
    hasNoSubmission() {
        for (const [name, category] of this.map) {
            if (category.noSubmission.length > 0) { return true; }
        }
        return false;
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

// load info from dataString into CscClass yourClass
function getInfo(data) {
    var lineArray = data.split("\n");
    for (let i = 0; i < lineArray.length; i++) {
        let wordArray = lineArray[i].split(" ");
        if (yourClass.category.includes(wordArray[0])
            || wordArray[0] == "Exam") {
            // grab wordArray[0]
            let category = wordArray[0] // for semantics
            // Exam has 2 entries (Exam1, Exam2)
            if (wordArray[0] == "Exam") {
                category += parseInt(wordArray[1]);
            }
            // grab lineArray[i+1], parse yourScore and MaxScore from it
            let scoreArray = lineArray[i + 1].split(" ");
            if (scoreArray[0] == "No") {
                let num = parseInt(wordArray[1]);
                yourClass.map.get(category).noSubmission.push(wordArray[0] + " " + num);
            } else {
                let your_score = parseFloat(scoreArray[0]); // for semantics and mutation to number
                let max_score = parseFloat(scoreArray[2]);  // for semantics and mutation to number
                // add scores to map
                yourClass.map.get(category).addToYourScore(your_score);
                yourClass.map.get(category).addToMaxScore(max_score);
            }
        }
    }
}

// printing formatted information
function print() {
    console.log("\n" + yourClass.string);
    console.log("*************************************************************************");
    console.log("Category     Your Score    Your %  Max %");
    console.log("----------------------------------------");
    for (const [name, category] of yourClass.map) {
        let title = name + ":" + (" ".repeat(12 - name.length));
        let your_score = category.isEmpty() ? "    0" : category.yourScore.toPrecision(4);
        let max_score = category.isEmpty() ? "0    " : category.maxScore.toPrecision(4);
        let percentage = category.isEmpty() ? "    0" : category.getPercentage().toPrecision(4);
        let ifIncomplete = category.isEmpty() ? " Not yet completed." : "";
        console.log(title
            + your_score
            + "/" + max_score + "   "
            + percentage + "%   "
            + category.weight + "% "
            + ifIncomplete);
    }
    console.log("----------------------------------------");
    console.log("Weighted Score:            "
        + yourClass.getWeightedScore().toPrecision(4)
        + "%  100%");
    console.log("Current  Score:            "
        + yourClass.getCurrentScore().toPrecision(4)
        + "%  100%");
    console.log("*************************************************************************");
    console.log("\nNOTE:\n"
        + "Weighted score does not include future material.\n"
        + "It only reflects what you have earned thus far.\n"
        + "To have 100%, you must have all material completed.\n"
        + "For example, exam 2 would not be included until your last day of class.\n");
    if (yourClass.hasNoSubmission()) {
        console.log("The following items have a 'No Submission' status:");
        console.log("--------------");
        for (const [name, category] of yourClass.map) {
            for (const item of category.noSubmission) {
                console.log(item);
            }
        }
        console.log("--------------");
        console.log("Please check with me if you think this is incorrect.\n"
            + "You can find the total missed points on the associated assignment page.\n"
            + "You must calculate that in your final grade yourself, as this calculator will not.");
    }
}

// testing program
// classSwitch("1");
// getInfo(dataString2);
classSwitch("2");
getInfo(dataString3);
print();