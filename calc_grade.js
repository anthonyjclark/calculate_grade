
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
        case "232": {
            category = ["Quiz", "Assignment", "Exam1", "Exam2", "Lab"];
            breakdown = [.1, .3, .2, .2, .2];
            string = "CSC 232  Data Structures\n";
            break;
        }
        case "325": {
            category = ["Quiz", "Assignment", "Exam1", "Exam2"];
            breakdown = [.1, .5, .2, .2];
            string = "CSC 325  Algorithms\n";
            break;
        }
        case "333": {
            category = ["Quiz", "Assignment", "Exam1", "Exam2"];
            breakdown = [.1, .5, .2, .2];
            string = "CSC 333  Languages and Machines\n";
            break;
        }
    }
    return new CscClass(category, breakdown, string)
}

// load info from dataString into CscClass yourClass
function getInfo(data, yourClass) {
    var lineArray = data.split("\n");
    // if selectAll has been copied from Gradescope, an extra check can occur
    // to make sure that content matches the selected course from drop down option
    // line 3 will be "CSC ###", where ### must match selected course
    // if selectAll has NOT been copied, ignore (check this with first line == "Skip")
    if (lineArray[0] == "Skip to content") {
        if (lineArray[2].substring(4, 7) != yourClass.string.substring(4, 7)) {
            return false;
        }
    }
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
    return true;
}

// printing formatted information
function print(yourClass) {
    let display = document.getElementById('display');
    display.innerHTML = "";
    display.innerHTML += ("\n\n" + yourClass.string);
    display.innerHTML += ("\n*************************************************************************");
    display.innerHTML += ("\nCategory     Your Score    Your %  Max %");
    display.innerHTML += ("\n----------------------------------------");
    for (const [name, category] of yourClass.map) {
        let title = name + ":" + (" ".repeat(12 - name.length));
        let your_score = category.isEmpty() ? "    0" : category.yourScore.toPrecision(4);
        let max_score = category.isEmpty() ? "0    " : category.maxScore.toPrecision(4);
        let percentage = category.isEmpty() ? "    0" : category.getPercentage().toPrecision(4);
        let ifIncomplete = category.isEmpty() ? " Not yet completed." : "";
        if (category.noSubmission.length > 0) {
            ifIncomplete = " Grade is not accurate.";
        }
        display.innerHTML += ("\n" + title
            + your_score
            + "/" + max_score + "   "
            + percentage + "%   "
            + category.weight + "% "
            + ifIncomplete);
    }
    display.innerHTML += ("\n----------------------------------------");
    display.innerHTML += ("\nWeighted Score:            "
        + yourClass.getWeightedScore().toPrecision(4)
        + "%  100%");
    display.innerHTML += ("\nCurrent  Score:            "
        + yourClass.getCurrentScore().toPrecision(4)
        + "%  100%");
    display.innerHTML += ("\n*************************************************************************");
    display.innerHTML += ("\n\nNOTE:\n"
        + "Weighted score does not include future material.\n"
        + "It only reflects what you have earned thus far.\n"
        + "To have 100%, you must have all material completed.\n"
        + "For example, Exam 2 would not be included until your last day of class.\n");
    if (yourClass.hasNoSubmission()) {
        display.innerHTML += ("\nThe following items have a 'No Submission' status:");
        display.innerHTML += ("\n--------------");
        for (const [name, category] of yourClass.map) {
            for (const item of category.noSubmission) {
                display.innerHTML += ("\n" + item);
            }
        }
        display.innerHTML += ("\n--------------");
        display.innerHTML += ("\nPlease check with me if you think this is incorrect.\n"
            + "You can find the total missed points on the associated assignment page.\n"
            + "You must calculate that in your final grade yourself, as this calculator will not.");
    }
}

document.getElementById('submit').addEventListener("click", function () {
    let dropDown = document.getElementById('option');
    let option = dropDown.options[dropDown.selectedIndex].value;
    let data = document.getElementById('data').value;
    if (data) {
        let yourClass = classSwitch(option);
        // check if content matches course selection, if true: continue
        if (getInfo(data, yourClass)) {
            data = ""; // clear text box
            print(yourClass);
        }
        else {
            document.getElementById('display').innerHTML = "Content does not match selected course.";
        }
    }
});

// clear text box on DOM load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('data').value = "";
});