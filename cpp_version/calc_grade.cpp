/************************************************
Welcome to Grade Calculator!
This is to be used with Gradescope.
Specifically made for Dr. Clark's classes.
Users need to select which class they are in and
copy+paste Gradescope scores in one chunk starting 
from graded material.
*************************************************
Author: Lauren Tallerico
to compile:
    g++ -std=c++ -o calc_grade calculateGrade.cpp
to run: 
    ./calc_grade
*************************************************
Notes: no error handling for copy+pasting all.
If user ctrl+a, ctrl+c, ctrl+p, it will error out.
User *must* start from graded material.
Also, will add CSC 742  Evolutionary Computing
and CSC 790  Advanced Robotics when I can see the
associated Gradescopes (for string matching).
************************************************/

#include <iomanip>
#include <iostream>
#include <limits>
#include <map>
#include <sstream>
#include <string>
#include <vector>

std::map<std::string, std::vector<double>> data;
std::map<std::string, std::vector<double>>::iterator it;
std::string classSelection;

void getInfo();
void calculateGrade();

int main() {
    getInfo();
    calculateGrade();
    return 0;
}

std::string classSwitch(int choice) {
    switch (choice) {
        case 1: return "CSC 232  Data Structures\n";
        case 2: return "CSC 325  Algorithms\n";
        case 3: return "CSC 333  Languages and Machines\n";
    }
    return "";
}

void getInfo() {
    std::cout << "\n............................................................\n"
              << "Welcome to Grade Calculator!\n"
              << "Please type the number associated with your class:\n\n"
              << "1.  " << classSwitch(1)
              << "2.  " << classSwitch(2)
              << "3.  " << classSwitch(3)
              << "\n>> ";
    std::getline(std::cin, classSelection);
    if (classSelection == "'1'") { classSelection = "1"; }
    if (classSelection == "'2'") { classSelection = "2"; }
    if (classSelection == "'3'") { classSelection = "3"; }
    while (classSelection != "1"
           && classSelection != "2"
           && classSelection != "3") {
        std::cout << "\nInvalid selection, please type '1', '2', or '3'\n\n>> ";
        std::getline(std::cin, classSelection);
    }
    std::cout << "\nYou selected:\n"
              << classSwitch(std::stoi(classSelection))
              << "\nCopy and Paste your Gradescope info here.\n"
              << "Start from graded material.\n"
              << "*************************************************************\n\n>> ";

    std::string line, date, title, space;
    double your_score, max_score;
    int examNum;
    while (true) {
        std::getline(std::cin, line);
        if (line == "\0" || line == "\n" || line == " ") break;
        std::istringstream iss(line);
        iss >> title;
        // some lines will start w/ a date, but we only want the lines
        // that start w/ lab, assignment, quiz, and exam
        // only add to data-map if line is pertinent
        if (title == "Lab"
            || title == "Assignment"
            || title == "Quiz"
            || title == "Exam") {
            // if title is Exam get next int (exam #)
            if (title == "Exam") {
                iss >> examNum;
                title = title + std::to_string(examNum);
            }
            // scores-info line follows immediately after
            std::getline(std::cin, line);
            std::istringstream iss2(line);
            iss2 >> your_score >> space >> max_score;
            // store data in a map
            // if title not yet a key, create a pair
            it = data.find(title);
            if (it == data.end()) {
                std::vector<double> vec;
                vec.push_back(your_score);
                vec.push_back(max_score);
                data.insert(std::make_pair(title, vec));
            } else { // else update scores
                data.at(title).at(0) += your_score;
                data.at(title).at(1) += max_score;
            }
        } // reset title. not sure why this is necessary, but...
        title = ""; // won't work correctly without this!
    }
    std::cout << "*************************************************************\n";
}

void calculateGrade() {
    std::string category[5]  = { "Quiz", "Assignment", "Exam1", "Exam2", "Lab" };
    double breakdown[5]      = { .1, .3, .2, .2, .2 };
    double yourGrade[5]      = { 0 };
    double total             = 0.0;
    double weightPlaceholder = 0.0;
    double weightedTotal     = 0.0;

    // CSC 232 has an extra category (Lab)
    // for CSC 325 and CSC 333, Assignment += Lab's worth.
    if (classSelection != "1") {
        breakdown[1] = .5;
    }

    std::cout << "Your results for "
              << classSwitch(std::stoi(classSelection))
              << "-------------------------------------------------------------\n"
              << std::setw(10) << "Category"
              << " ["
              << std::setw(14) << "Your Score"
              << "    ] = "
              << std::setw(6) << "Score"
              << " * "
              << "Weight"
              << " = "
              << std::setw(6)
              << "Grade"
              << "\n-------------------------------------------------------------\n";

    for (int i = 0; i < 5; i++) {
        // check to see if title is in map yet
        // if category hasn't happened yet, this will prevent erroring out
        it = data.find(category[i]);
        if (it == data.end()) {
            // collect weight for categories that haven't happened yet
            // will need to add for a current grade
            weightPlaceholder += breakdown[i];
            continue;
        }
        double your_score = data[category[i]].at(0);
        double max_score  = data[category[i]].at(1);
        double score      = (your_score / max_score) * 100;
        yourGrade[i]      = breakdown[i] * score;
        weightedTotal += yourGrade[i];
        std::cout << std::setw(10) << category[i]
                  << " ["
                  << std::setprecision(4)
                  << std::setw(8) << your_score
                  << " / "
                  << std::setw(6) << max_score
                  << " ] = "
                  << std::setw(6) << score
                  << " * "
                  << std::setw(4) << breakdown[i]
                  << "   = "
                  << std::setw(6) << yourGrade[i]
                  << "\n";
    }
    // if CSC 325 or CSC 333, don't include lab points in placeholder
    // placeholder is to give a current grade based only on material that
    // has already been graded. Weighted total will consider the material
    // that you still need to grade or hasn't occured yet (future exams, for instance)
    if (breakdown[1] == .5) weightPlaceholder -= .2;
    total = weightedTotal + (weightPlaceholder * 100);
    std::cout << "-------------------------------------------------------------\n"
              << "Your weighted grade is: "
              << std::setw(34)
              << weightedTotal
              << "\n"
              << "Your current grade is: "
              << std::setw(35)
              << total
              << "\n*************************************************************\n"
              << "\nNOTE:\n"
              << "Weighted grade does not include future material.\n"
              << "It only reflects what you have earned thus far.\n"
              << "To have 100%, you must have all material completed.\n"
              << "For example, exam 2 would not be included until your last day of class.\n"
              << "\nGrade breakdown for this class:\n";
    int len = (classSelection == "1") ? 5 : 4;
    for (int i = 0; i < len; i++) {
        std::cout << std::setw(12) << category[i] << ": "
                  << std::setw(4) << breakdown[i] * 100 << "%\n";
    }
    std::string quit;
    while (quit != "q") {
        std::cout << "\nType 'q' to quit.\n\n>> ";
        std::cin >> quit;
    }
}