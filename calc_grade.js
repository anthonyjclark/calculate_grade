
// create class based on menu selection
// if adding a choice, please add option in index.html (line 125)
function classSwitch(choice) {
    let category, breakdown, string;
    switch (choice) {
        case "232": {
            category = ["Lab", "Quiz", "Assignment", "Exam1, part1", "Exam1, part2", "Exam2, part1", "Exam2, part2"];
            breakdown = [.2, .1, .3, .03, .17, .03, .17];
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
            category = ["Quiz", "Assignment", "Exam1, part1", "Exam1, part2", "Exam2, part1", "Exam2, part2"];
            breakdown = [.1, .5, .03, .17, .03, .17];
            string = "CSC 333  Languages and Machines\n";
            break;
        }
    }
    return new CscClass(category, breakdown, string)
}

// information about each category (ex: Quiz, Assignment, Lab, Exam)
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

// information about your class (as selected in classSwitch(choice))
// uses class CategoryInfo as a subClass
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
            if (category.isEmpty() && category.noSubmission.length == 0) {
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


// load info from text-box into CscClass yourClass
function getInfo(data) {
    let lineArray = data.split("\n");
    let dropDown = document.getElementById('option');
    let option = dropDown.options[dropDown.selectedIndex].value;
    let yourClass;
    // if selectAll has been copied from Gradescope, course selection is automatic
    // line 3 will be "CSC ###", where ### will be put into classSwitch(###)
    // if selectAll has NOT been copied, ignore (check this with first line == "Skip")
    if (lineArray[0] == "Skip to content") { // this means selectAll has occurred
        yourClass = classSwitch(lineArray[2].substring(4, 7));
    } else {
        let display = document.getElementById('display');
        if (!option) { // if course hasn't been selected, alert and exit function
            display.setAttribute("class", "alert alert-danger");
            display.innerHTML = "Please select a course for grading.";
            return;
        }
        // if course is selected, create CscClass yourClass
        yourClass = classSwitch(option);
    }
    for (let i = 0; i < lineArray.length; i++) {
        let wordArray = lineArray[i].split(" ");
        if (yourClass.category.includes(wordArray[0])
            || wordArray[0] == "Exam") {
            // grab wordArray[0]
            let category = wordArray[0] // for semantics
            // for CSC 232 and CSC 333:
            // Exam has 4 entries (Exam1.1, Exam1.2, Exam2.1, Exam2.2)
            if (wordArray[0] == "Exam") {
                if (yourClass.string !== "CSC 325  Algorithms\n") { // only class that has exams weighted singularly
                    category += parseInt(wordArray[1]) + ", part" + parseInt(wordArray[3]);
                } else {
                    category += parseInt(wordArray[1]);
                }
            }
            // grab lineArray[i+1], parse yourScore and MaxScore from it
            let scoreArray = lineArray[i + 1].split(" ");
            // if assignment has "no submission", add to category.noSubmission[]
            if (scoreArray[0] == "No") {
                let num = parseInt(wordArray[1]); // parseInt to exclude comma attached
                yourClass.map.get(category).noSubmission.push(wordArray[0] + " " + num);
            } else if (scoreArray[0] == "Submitted") {
                continue; // if assignment has not yet been graded, ignore
            } else {
                let your_score = parseFloat(scoreArray[0]); // for semantics and mutation to number
                let max_score = parseFloat(scoreArray[2]);  // for semantics and mutation to number
                // add scores to map
                yourClass.map.get(category).addToYourScore(your_score);
                yourClass.map.get(category).addToMaxScore(max_score);
            }
        }
    }
    return yourClass;
}

function createRows(yourClass) {
    let tableTitle = document.getElementById('tableTitle');
    tableTitle.innerText = yourClass.string;
    let table = document.getElementById('scoreTable');
    for (const [name, category] of yourClass.map) {
        // create elements to add to table
        let row = document.createElement('tr');
        let categoryName = document.createElement('td');
        let yourScore = document.createElement('td');
        let yourPercentage = document.createElement('td');
        let maxPercentage = document.createElement('td');

        // choose what information to display
        let your_score = category.isEmpty() ? 0 : category.yourScore.toPrecision(4);
        let max_score = category.isEmpty() ? 0 : category.maxScore.toPrecision(4);
        let percentage = category.isEmpty() ? 0 : category.getPercentage().toPrecision(4);

        // attach information as text on elements
        categoryName.innerText = name;
        categoryName.setAttribute("class", "text-left");
        yourScore.innerText = your_score + " / " + max_score;
        yourPercentage.innerText = percentage + " %";
        maxPercentage.innerText = category.weight + " %";

        // attach tableData to tableRow
        row.appendChild(categoryName);
        row.appendChild(yourScore);
        row.appendChild(yourPercentage);
        row.appendChild(maxPercentage);

        // warning alerts on table (no submission and not yet completed)
        if (category.isEmpty() && category.noSubmission.length == 0) {
            row.setAttribute("class", "weighted");
            let warning = document.createElement('td');
            warning.innerText = "Not yet completed.";
            warning.setAttribute("class", "alert alert-info");
            row.appendChild(warning);
        } else if (category.noSubmission.length > 0) {
            row.setAttribute("class", "noSub");
            let warning = document.createElement('td');
            warning.innerText = "No Submission Warning";
            warning.setAttribute("class", "alert alert-danger");
            row.appendChild(warning);
        }

        // attach row to table
        table.appendChild(row);
    }

    // display totals information
    document.getElementById('weightedScore').innerText =
        yourClass.getWeightedScore().toPrecision(4) + " %";
    document.getElementById('currentScore').innerText =
        yourClass.getCurrentScore().toPrecision(4) + " %";
}

function displayWarnings(yourClass) {
    let needsWeightedWarning = false;
    if (yourClass.string == "CSC 325  Algorithms\n") {
        // if Exam2 hasn't happened yet, weighted warning appears
        if (yourClass.map.get("Exam2").maxScore == 0
            && yourClass.map.get("Exam2").noSubmission.length == 0) {
            needsWeightedWarning = true;
        }
    }
    else {
        if (yourClass.map.get("Exam2, part2").maxScore == 0
            && yourClass.map.get("Exam2, part2").noSubmission.length == 0) {
            needsWeightedWarning = true;
        }
    }
    if (needsWeightedWarning) {
        let display = document.getElementById('weightedWarning');
        display.removeAttribute("class"); // remove hidden attribute
        display.setAttribute("class", "alert alert-info text-left");
    }
    // if a category has a no submission score, warning appears
    if (yourClass.hasNoSubmission()) {
        let display = document.getElementById('noSubmissionWarning');
        display.removeAttribute("class"); // remove hidden attribute
        display.setAttribute("class", "alert alert-danger text-left");
        let content = document.getElementById('noSubContent');
        for (const [name, category] of yourClass.map) {
            for (const item of category.noSubmission) {
                let div = document.createElement('div');
                div.innerHTML = item;
                content.appendChild(div);
            }
        }
    }
}

// printing formatted information
function print(yourClass) {
    // hide submit text-box and submit button
    document.getElementById('submitWindow').setAttribute("class", "d-none");
    createRows(yourClass);
    // remove hidden attribute from table
    document.getElementById('displayTable').removeAttribute("class");
    // display warnings if applicable
    displayWarnings(yourClass);
}

// get information from text-box and display results
document.getElementById('submit').addEventListener("click", function () {
    let data = document.getElementById('data').value;
    if (data) {
        let info = getInfo(data);
        if (info) { // info is false if option is not selected
            print(getInfo(data));
        }
    }
});

// clear text box on DOM load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('data').value = "";
});