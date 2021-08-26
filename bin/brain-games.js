#!/usr/bin/env node
import whatName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const currentName = whatName('May I have your name? ');
console.log(`Hello, ${currentName}!`);
