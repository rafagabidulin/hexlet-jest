import capitalize from '../src/capitalize.js';
import { strict as assert } from 'assert';

// Ручные утверждения

/* if (capitalize(`hello`) !== 'Hello') {
    throw new Error ('Функция работает неверно!');
}

if (capitalize('') !== '') {
    throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены!'); */

// Использвание модуля assert

assert.deepEqual(capitalize(''), '');
assert.deepEqual(capitalize('hello'), 'Hello');

