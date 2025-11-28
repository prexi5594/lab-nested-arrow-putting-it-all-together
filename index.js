function createLoginTracker(userInfo) {
    let attempts = 0;
    const maxAttempts = 3;

    return (username, password) => {
        if (attempts >= maxAttempts) {
            return "Account locked. Too many failed attempts.";
        }

        if (username === userInfo.username && password === userInfo.password) {
            return "Login successful!";
        } else {
            attempts++;
            if (attempts >= maxAttempts) {
                return "Account locked. Too many failed attempts.";
            }
            return `Incorrect login. Attempts left: ${maxAttempts - attempts}`;
        }
    };
}


// Example test
const user = { username: "userA", password: "5594" };
const login = createLoginTracker(user);

console.log(login("userA", "wrong"));  // Incorrect login. Attempts left: 2
console.log(login("userA", "wrong"));  // Incorrect login. Attempts left: 1
console.log(login("userA", "wrong"));  // Account locked. Too many failed attempts.
console.log(login("userA", "5594"));   // Account locked. Too many failed attempts.


module.exports = { createLoginTracker };
