
const chars = "abcdefghijklmnopqrstuvwxyz";
function generate(amountOfLetters: number): string {
  let output = "";

  for(let i = 0; i < amountOfLetters; i++){
    output += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return output;
}

const args = process.argv.slice(2);
const amountOfLetters = args[0];

const word = generate(Number(amountOfLetters));

console.log(word);