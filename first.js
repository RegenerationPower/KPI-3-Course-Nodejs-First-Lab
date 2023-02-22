/*
Task

There are five kinds of programmers in the world:

    1. The programmer was happy, so he coding.
2. When programmer coding, he is happy.
3. Programmer is coding, but he is not happy.
4. Programmer has no job of coding, he is happy.
5. no coding and no happy

Given a string nickname. It's the nickname of a programmer. Please determine which kind of programmer it belongs to. The result should be a number, 1,2,3,4 or 5.

You don't know the rules? Sorry, it's a puzzle ;-)
Examples

For `nickname="Happy coding", the output should be 1.

For nickname="coding happy", the output should be 2.

For nickname="coding everyday", the output should be 3.

For nickname="happy programmer", the output should be 4.

For nickname="unhappy codewarrior", the output should be 5.

Happy Coding ^_^
*/

function programmerType(nickname) {
    nickname = nickname.toLowerCase();
    let words = nickname.split(' ');

    switch (true) {
        case words.includes("happy") && words.includes("coding"):
            return words.indexOf("coding") < words.indexOf("happy") ? 2 : 1;
        case words.includes("coding"):
            return 3;
        case words.includes("happy"):
            return 4;
        default:
            return 5;
    }
}


console.log(programmerType("Happy coding")); // 1
console.log(programmerType("coding happy")); // 2
console.log(programmerType("coding everyday")); // 3
console.log(programmerType("happy programmer")); // 4
console.log(programmerType("unhappy codewarrior")); // 5

