function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const email1 = "example@example.com";
const email2 = "mohamadkns@gmail.com";
const email3 = "mohamadkns@hotmail.com";

console.log(isValidEmail(email1));
console.log(isValidEmail(email2));
console.log(isValidEmail(email3));