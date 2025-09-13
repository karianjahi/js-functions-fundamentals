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



function loanQualificationChecker() {

}