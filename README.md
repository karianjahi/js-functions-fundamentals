# 📦 js-utility-kit

A lightweight collection of **basic JavaScript utility functions** 🛠️ that I built while learning how to write and structure small helper functions.  

This project is meant for **practice, learning, and fun** 🎉 — not production use (yet 😉).

---

## 📂 Project Structure

```bash
js-functions-fundamentals
/
├── .gitignore
├── LICENSE # MIT License
├── README.md # Project documentation
└── source.js # All utility functions
```


---

## ✨ Features & Functions

Here’s what’s inside `source.js`:

### 🔹 Boolean Checker
```javascript
booWho(arg)
```

Checks if a given argument is strictly a boolean primitive (true or false).

- ✅ booWho(true) → true

- ❌ booWho("true") → false

### 🔹 Email Masker ✉️
```javascript
maskEmail(email)
```
- Masks the username of an email with asterisks, keeping only the first and last character visible.
    - `maskEmail("apple.pie@example.com")` → a********e@example.com

### 🔹 Loan Qualification Checker 💰
```javascript
getLoanMessage(annualIncome, creditScore)
```

- Determines whether a person qualifies for a **Duplex**, **Condo**, or **Car** loan based on income and credit score thresholds.

    - Returns one of the following messages:

        - "You qualify for a duplex, condo, and car loan."

        - "You qualify for a condo and car loan."

        - "You qualify for a car loan."

        - "You don't qualify for any loans."
⚠️ Requires constants for minimum incomes and credit scores (see commented-out variables in the source).

### 🔹 Celsius to Fahrenheit Converter 🌡️
```javascript
convertCtoF(tempC)
```
- Converts Celsius → Fahrenheit.
    - `Formula: F = 9/5 * C + 32`

        - `convertCtoF(0)` → 32
        - `convertCtoF(30)` → 86

### 🔹 Card Counting Assistant 🃏

```javascript
cc(card)
```
- Keeps a running count of cards to help decide whether to Bet or Hold (like in Blackjack).
    - Low cards (2–6) → +1
    - High cards (10, J, Q, K, A) → -1
    - Neutral cards (7–9) → 0
- Returns a string like:
    - "2 Bet"
    - "0 Hold"

### 🔹 Leap Year Calculator 📅
```javascript
isLeapYear(year)
```
- Checks if a year is a leap year (divisible by 4, but not by 100 unless also divisible by 400).
    - `isLeapYear(2000)` → "2000 is a leap year."
    - `isLeapYear(1900)` → "1900 is not a leap year."


### 🔹 String Truncator ✂️
Truncates a string to a specified length and appends ...

- `truncateString("Hello World", 5)` → "Hello..."
- If string is shorter than or equal to length, it stays unchanged.


### 🔹 Confirm Ending 🔚
Checks if a string ends with a given substring.

- `confirmEnding("Abstraction", "action")` → `true`
- `confirmEnding("Hello", "world")` → `false`

## 🚀 Getting Started
1. Clone the repo:
```bash
git clone https://github.com/karianjahi/js-utility-kit.git
```

2. Navigate to the folder
```bash
cd js-utility-kit
```

3. Run the file in `Node.js`:
```bash
node source.js
```
Or import individual functions into your own project.

## 📜 License
This project is licensed under the MIT License.
Feel free to use, modify, and share 🚀.

## 🙌 Acknowledgements
This project was inspired by practice challenges and exercises from **freeCodeCamp** 🎓, as part of my journey in strengthening JavaScript fundamentals.  
Each function represents a small real-world use case implemented while learning.



