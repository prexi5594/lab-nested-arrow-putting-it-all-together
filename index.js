function createLoginTracker(user) {
  let attempts = 0;
  const maxAttempts = 3;

  return function (passwordAttempt) {
    if (attempts >= maxAttempts) {
      return "Account locked due to too many failed login attempts";
    }

    // Correct password?
    if (passwordAttempt === user.password) {
      return "Login successful";
    }

    // Wrong password
    attempts++;

    if (attempts >= maxAttempts) {
      return "Account locked due to too many failed login attempts";
    }

    return `Attempt ${attempts}: Login failed`;
  };
}

module.exports = { createLoginTracker };
