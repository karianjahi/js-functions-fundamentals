/*
Testing for boolean primitive
*/

function booWho(arg) {
    if (typeof (arg) === 'boolean') {
        return true
    } else {
        return false
    }
}

/*
Building an Email Masker
The aim is to mask the username part of an email address with asterisks
e.g. if email address is mseiya@email.com, the masked email becomes
m*****@email.com
*/

function maskEmail(email) {
    if (typeof (email) !== "string") {
        return "Error: Email must be a single string"
    }
    let splits = email.split("@");
    let userName = splits[0]; // first part of the split has the username
    let domainName = splits[1]; // second or last part of the email has the domain name
    let userNameLength = userName.length;
    let firstLetter = userName[0]; // First character of the username
    let lastLetter = userName[userNameLength - 1];
    let single_asterisk = "*";
    let nasterisks = userNameLength - 2;
    let asterisks = single_asterisk.repeat(nasterisks);
    let maskedEmail = `${firstLetter}${asterisks}${lastLetter}@${domainName}`
    return maskedEmail
}

let email = "apple.pie@example.com"
maskEmail(email);


/*
Building a loan qualification checker app
*/

/*
Step 1
We are building a loan qualification checker app.

The app will check whether the user is eligible for a duplex, car, and condo loan based on their annual income and credit score. A credit score is a number that represents how good you are at managing borrowed money.
*/

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;
const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;
const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

// function getLoanMessage(annualIncome, creditScore) {
//     // Is the user eligible for duplex loan?
//     if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
//         return "You qualify for a duplex, condo, and car loan."
//     }
    
//     if(annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
//         return "You qualify for a condo and car loan";
//     }
// }


function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if(annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
      return "You qualify for a condo and car loan.";
    } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
        return "You qualify for a car loan.";
    } else if (annualIncome < minIncomeForCar && creditScore < minCreditScoreForCar) {
        return "You don't qualify for any loans."
    }
}

//testing out the function
let duplexLoanMsg;
duplexLoanMsg = getLoanMessage(85000, 850);
console.log(duplexLoanMsg);
let condoLoanMsg;
condoLoanMsg = getLoanMessage(65000, 690);
console.log(condoLoanMsg);
let carLoanMsg;
carLoanMsg = getLoanMessage(45000, 660);
console.log(carLoanMsg);
let noLoanMsg;
noLoanMsg = getLoanMessage(25000, 550);
console.log(noLoanMsg);
