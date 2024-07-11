
import inquirer from 'inquirer';

async function main() {
  const questions: inquirer.QuestionCollection = [
    {
      name: 'name',
      type: 'input',
      message: 'What is your name?',
      validate: function (input: string) {
        if (input.trim() === '') {
          return 'Please enter your name';
        }
        return true;
      }
    },
    {
      name: 'age',
      type: 'input', // Use input type to get the age as a string and then parse it to number
      message: 'What is your age?',
      validate: function (input: string) {
        const age = Number(input);
        if (isNaN(age) || age <= 0) {
          return 'Please enter a valid age.';
        }
        return true;
      },
      filter: function (input: string) {
        return Number(input); // Ensure the value is always a number
      }
    }
  ];

  let answers = await inquirer.prompt(questions);

  const age = answers.age as number; // Ensure TypeScript knows this is a number
  console.log(`Hello, ${answers.name}. Insha Allah, in ${60 - age} years you will be 60 years old.`);
}

main();
