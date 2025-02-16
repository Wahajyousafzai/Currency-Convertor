import inquirer from "inquirer";
let Convertion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.28,
        "PKR": 355.50,
        "GBP": 1
    },
    "USD": {
        "PKR": 278.10,
        "GBP": 0.78,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your convertion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount: "
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = Convertion[from][to] * amount;
    console.log(`Your convertion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid inputs");
}
