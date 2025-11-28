function createLoginTracker(username) {}
  let attempts = 0;
  const  maxAttempts = 3;

  return (username , password) => {
    if (attempts <= maxAttempts ){
      return "Account locked too many failed login attempts.";
    }
  }

  if (username === username && password === username.password) {
    return " login successful.";
  } else {
    attempts++;
    if (attempts >= maxAttempts) {
      return "Account locked too many failed login attempts.";
  }
  }   return "incorrect login. Attempts left: ${maxAttempts - attempts} "; 


  // example test 

  const username = { username: "userA", password: "5594" }
  const login = createLoginTracker(username);


  console.log(login("userA", "wrongPassword")); // incorrect login. attempts left:2
  console.log(login("userA", "wrongPassword")); // incorrect login. attempts left:1
  console.log(login("userA", "wrongPassword")); // Account locked too many failed login attempts.
  console.log(login("userA", "5594")); // Account locked too many failed login attempts.
  
  


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};