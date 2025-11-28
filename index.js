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

module.exports = { createLoginTracker };
