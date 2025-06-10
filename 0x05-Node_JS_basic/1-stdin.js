process.stdout.write('Welcome to Holberton School, what is your name?\n');
// This code reads from standard input and writes to standard output

process.stdin.on('readable', () => {
  const msg = process.stdin.read();
  if (msg !== null) {
    process.stdout.write(`Your name is: ${msg}`);
  }
});

// This code listens for the 'end' event on standard input

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

