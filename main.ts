import * as chalk from 'chalk'
import { zip, from, interval } from 'rxjs';
import { argv } from 'yargs';

import { runExerciseModule } from './lib/run-exercise';

const BLUE = '#0071b3';
const GREEN = '#00a651';
const ORANGE = '#ee7c11';

const WELCOME_TEXT_LINES = [
    ``,
    ``,
    chalk.hex(BLUE)(` _____                                _       _    __        __         _        _                  `),
    chalk.hex(BLUE)(`|_   _|   _ _ __   ___  ___  ___ _ __(_)_ __ | |_  \\ \\      / /__  _ __| | _____| |__   ___  _ __   `),
    chalk.hex(BLUE)(`  | || | | | '_ \\ / _ \\/ __|/ __| '__| | '_ \\| __|  \\ \\ /\\ / / _ \\| '__| |/ / __| '_ \\ / _ \\| '_ \\  `),
    chalk.hex(BLUE)(`  | || |_| | |_) |  __/\\__ \\ (__| |  | | |_) | |_    \\ V  V / (_) | |  |   <\\__ \\ | | | (_) | |_) | `),
    chalk.hex(BLUE)(`  |_| \\__, | .__/ \\___||___/\\___|_|  |_| .__/ \\__|    \\_/\\_/ \\___/|_|  |_|\\_\\___/_| |_|\\___/| .__/  `),
    chalk.hex(BLUE)(`      |___/|_|                         |_|                                                  |_|     `),
    ``,
    `   -=================================================================================-`,
    ``,
    '',
    `    You will find a series of exercises in the 'exercises' folder.`,
    `    Each exercise is located in a folder called '${chalk.hex(BLUE)('exercise-XX')}', where 'XX' is the exercise number.`,
    `    In each folder, the ${chalk.hex(GREEN)('index.ts')}, file contains the actual exercise and describes a problem to solve.`,
    `    You can solve the problem by modifying the code in this file.`,
    `    Next to each index.ts file, you will find some additional files that are used to construct the exercises.`,
    `    You don't have to modify these files to solve the exercises. They are just there to provide context.`,
    '',
    `    To check whether your solution is correct, run the exercise by executing the following command:`,
    ``,
    `    > ${chalk.hex(ORANGE)('npm start ')}${chalk.italic(chalk.hex(BLUE)('<exercise number>'))}`,
    ``,
    `    For example, to run the first exercise, you would run:`,
    ``,
    `    > ${chalk.hex(ORANGE)('npm start 1')}`,
    ``,
    `    When an exercise is run, the console will output the result of the exercise.`,
    `    If an exercise is not solved correctly, the output will contain either compile error messages or runtime error messages.`,
    ``,
];

Promise.resolve(argv).then((args) => {
  if (args._.length !== 1) {
    showWelcomeText();
  } else {
    const exerciseNumber: unknown = args._[0];
    const parsedExerciseNumber = parseExerciseNumber(exerciseNumber);
    if (!Number.isFinite(parsedExerciseNumber) || parsedExerciseNumber <= 0) {
      console.log(chalk.red(`Error: "${exerciseNumber}" is not a valid exercise number`));
    } else {
      runExerciseModule(parsedExerciseNumber);
    }
  }
})

function showWelcomeText(): void {
  zip(from(WELCOME_TEXT_LINES), interval(100)).subscribe({
    next: ([line]) => console.log(line),
  });
}

function parseExerciseNumber(exerciseNumber: unknown): number {
  return typeof exerciseNumber === 'number'
      ? exerciseNumber
      : typeof exerciseNumber === 'string'
        ? Number(exerciseNumber.trim())
        : Number.NaN;
}



