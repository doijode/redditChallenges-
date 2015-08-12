/* PROBLEM DESCRIPTION 
Shuffling a List (Easy) 
We've had our fair share of sorting algorithms, 
now let's do a shuffling challenge. 
In this challenge, your challenge is to take a list of inputs and change around the order in random ways. 
Think about shuffling cards - can your program shuffle cards? 

You'll be given a list of values - integers, letters, words - in one order. The input list will be space separated. Example:
1 2 3 4 5 6 7 8 

Your program should emit the values in any non-sorted order; sequential runs of the program or function should yield different outputs. You should maximize the disorder if you can. From our example:
7 5 4 3 1 8 2 6

*/ 

function shuffle(input) {
    var out = [];
    var inpSplit = input.split("");

    while (inpSplit.length > 0) {
        out.push(inpSplit.splice(Math.floor(Math.random() * inpSplit.length), 1));
    }
    console.log(out.join(" "));
}
shuffle('1 2 3 4 5 6 7 8 9');
