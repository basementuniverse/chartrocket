/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@basementuniverse/camera/build/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@basementuniverse/camera/build/index.js ***!
  \**************************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@basementuniverse/utils/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/@basementuniverse/utils/utils.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * @overview A library of useful functions
 * @author Gordon Larrigan
 */

/**
 * Check if two numbers are approximately equal
 * @param {number} a Number a
 * @param {number} b Number b
 * @param {number} [p=Number.EPSILON] The precision value
 * @return {boolean} True if numbers a and b are approximately equal
 */
const floatEquals = (a, b, p = Number.EPSILON) => Math.abs(a - b) < p;

/**
 * Clamp a number between min and max
 * @param {number} a The number to clamp
 * @param {number} [min=0] The minimum value
 * @param {number} [max=1] The maximum value
 * @return {number} A clamped number
 */
const clamp = (a, min = 0, max = 1) => a < min ? min : (a > max ? max : a);

/**
 * Get the fractional part of a number
 * @param {number} a The number from which to get the fractional part
 * @return {number} The fractional part of the number
 */
const frac = a => a >= 0 ? a - Math.floor(a) : a - Math.ceil(a);

/**
 * Do a linear interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} An interpolated value in the interval [a, b]
 */
const lerp = (a, b, i) => a + (b - a) * i;

/**
 * Get the position of i between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolated value in the interval [a, b]
 * @return {number} The position of i between a and b
 */
const unlerp = (a, b, i) => (i - a) / (b - a);

/**
 * Do a bilinear interpolation
 * @param {number} c00 Top-left value
 * @param {number} c10 Top-right value
 * @param {number} c01 Bottom-left value
 * @param {number} c11 Bottom-right value
 * @param {number} ix Interpolation value along x
 * @param {number} iy Interpolation value along y
 * @return {number} A bilinear interpolated value
 */
const blerp = (c00, c10, c01, c11, ix, iy) => lerp(lerp(c00, c10, ix), lerp(c01, c11, ix), iy);

/**
 * Re-map a number i from range a1...a2 to b1...b2
 * @param {number} i The number to re-map
 * @param {number} a1
 * @param {number} a2
 * @param {number} b1
 * @param {number} b2
 * @return {number}
 */
const remap = (i, a1, a2, b1, b2) => b1 + (i - a1) * (b2 - b1) / (a2 - a1);

/**
 * Do a smooth interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value
 * @return {number} An interpolated value in the interval [a, b]
 */
const smoothstep = (a, b, i) => lerp(a, b, 3 * Math.pow(i, 2) - 2 * Math.pow(i, 3));

/**
 * Get an angle in radians
 * @param {number} degrees The angle in degrees
 * @return {number} The angle in radians
 */
const radians = degrees => (Math.PI / 180) * degrees;

/**
 * Get an angle in degrees
 * @param {number} radians The angle in radians
 * @return {number} The angle in degrees
 */
const degrees = radians => (180 / Math.PI) * radians;

/**
 * Get a random float in the interval [min, max)
 * @param {number} min Inclusive min
 * @param {number} max Exclusive max
 * @return {number} A random float in the interval [min, max)
 */
const randomBetween = (min, max) => Math.random() * (max - min) + min;

/**
 * Get a random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A random integer in the interval [min, max]
 */
const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Get a normally-distributed random number
 * @param {number} [mu=0.5] The mean value
 * @param {number} [sigma=0.5] The standard deviation
 * @param {number} [samples=2] The number of samples
 * @return {number} A normally-distributed random number
 */
const cltRandom = (mu = 0.5, sigma = 0.5, samples = 2) => {
  let total = 0;
  for (let i = samples; i--;) {
    total += Math.random();
  }
  return mu + (total - samples / 2) / (samples / 2) * sigma;
};

/**
 * Get a normally-distributed random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A normally-distributed random integer
 */
const cltRandomInt = (min, max) => Math.floor(min + cltRandom(0.5, 0.5, 2) * (max + 1 - min));

/**
 * Return a weighted random integer
 * @param {Array<number>} w An array of weights
 * @return {number} An index from w
 */
const weightedRandom = w => {
  let total = w.reduce((a, i) => a + i, 0), n = 0;
  const r = Math.random() * total;
  while (total > r) {
    total -= w[n++];
  }
  return n - 1;
};

/**
 * An interpolation function
 * @callback interpolationCallback
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} The interpolated value in the interval [a, b]
 */

/**
 * Return an interpolated value from an array
 * @param {Array<number>} a An array of values interpolate
 * @param {number} i A number in the interval [0, 1]
 * @param {interpolationCallback} [f=Math.lerp] The interpolation function to use
 * @return {number} An interpolated value in the interval [min(a), max(a)]
 */
const lerpArray = (a, i, f = lerp) => {
  const s = i * (a.length - 1);
  const p = clamp(Math.trunc(s), 0, a.length - 1);
  return f(a[p] || 0, a[p + 1] || 0, frac(s));
};

/**
 * Get the dot product of two vectors
 * @param {Array<number>} a Vector a
 * @param {Array<number>} b Vector b
 * @return {number} a ∙ b
 */
const dot = (a, b) => a.reduce((n, v, i) => n + v * b[i], 0);

/**
 * Get the factorial of a number
 * @param {number} a
 * @return {number} a!
 */
const factorial = a => {
  let result = 1;
  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  return result;
};

/**
 * Get the number of permutations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nPr
 */
const permutation = (n, r) => factorial(n) / factorial(n - r);

/**
 * Get the number of combinations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nCr
 */
const combination = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

/**
 * A function for generating array values
 * @callback timesCallback
 * @param {number} i The array index
 * @return {*} The array value
 */

/**
 * Return a new array with length n by calling function f(i) on each element
 * @param {timesCallback} f
 * @param {number} n The size of the array
 * @return {Array<*>}
 */
const times = (f, n) => Array(n).fill(0).map((_, i) => f(i));

/**
 * Return an array containing numbers 0->(n - 1)
 * @param {number} n The size of the array
 * @return {Array<number>} An array of integers 0->(n - 1)
 */
const range = n => times(i => i, n);

/**
 * Zip 2 arrays together, i.e. ([1, 2, 3], [a, b, c]) => [[1, a], [2, b], [3, c]]
 * @param {Array<*>} a
 * @param {Array<*>} b
 * @return {Array<Array<*>>}
 */
const zip = (a, b) => a.map((k, i) => [k, b[i]]);

/**
 * Return array[i] with positive and negative wrapping
 * @param {Array<*>} a
 * @param {number} i The positively/negatively wrapped array index
 * @return {*} An element from the array
 */
const at = (a, i) => a[i < 0 ? a.length - (Math.abs(i + 1) % a.length) - 1 : i % a.length];

/**
 * Chop an array into chunks of size n
 * @param {Array<*>} a
 * @param {number} n The chunk size
 * @return {Array<Array<*>>} An array of array chunks
 */
const chunk = (a, n) => times(i => a.slice(i * n, i * n + n), Math.ceil(a.length / n));

/**
 * Randomly shuffle a shallow copy of an array
 * @param {Array<*>} a
 * @return {Array<*>} The shuffled array
 */
const shuffle = a => a.slice().sort(() => Math.random() - 0.5);

if (true) {
  module.exports = {
    floatEquals,
    clamp,
    frac,
    lerp,
    unlerp,
    blerp,
    remap,
    smoothstep,
    radians,
    degrees,
    randomBetween,
    randomIntBetween,
    cltRandom,
    cltRandomInt,
    weightedRandom,
    lerpArray,
    dot,
    factorial,
    permutation,
    combination,
    times,
    range,
    zip,
    at,
    chunk,
    shuffle,
  };
}


/***/ }),

/***/ "./node_modules/@basementuniverse/vec/vec.js":
/*!***************************************************!*\
  !*** ./node_modules/@basementuniverse/vec/vec.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_9135__) => {

const { times, chunk, dot } = __nested_webpack_require_9135__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");

/**
 * @overview A library of useful functions
 * @author Gordon Larrigan
 */

/**
 * A 2d vector
 * @typedef {Object} vec
 * @property {number} x The x component of the vector
 * @property {number} y The y component of the vector
 */

/**
 * Create a new vector
 * @param {number|vec} [x] The x component of the vector, or a vector to copy
 * @param {number} [y] The y component of the vector
 * @return {vec} A new vector
 * @example <caption>Various ways to initialise a vector</caption>
 * let a = vec(3, 2);  // (3, 2)
 * let b = vec(4);     // (4, 4)
 * let c = vec(a);     // (3, 2)
 * let d = vec();      // (0, 0)
 */
const vec = (x, y) => (!x && !y ?
  { x: 0, y: 0 } : (typeof x === 'object' ?
    { x: x.x || 0, y: x.y || 0 } : (y === null || y === undefined ?
      { x: x, y: x } : { x: x, y: y })
  )
);

/**
 * Get the components of a vector as an array
 * @param {vec} a The vector to get components from
 * @return {Array<number>} The vector components as an array
 */
vec.components = a => [a.x, a.y];

/**
 * Return a unit vector (1, 0)
 * @return {vec} A unit vector (1, 0)
 */
vec.ux = () => vec(1, 0);

/**
 * Return a unit vector (0, 1)
 * @return {vec} A unit vector (0, 1)
 */
vec.uy = () => vec(0, 1);

/**
 * Add vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {vec} a + b
 */
vec.add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });

/**
 * Scale a vector
 * @param {vec} a Vector a
 * @param {number} b Scalar b
 * @return {vec} a * b
 */
vec.mul = (a, b) => ({ x: a.x * b, y: a.y * b });

/**
 * Subtract vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {vec} a - b
 */
vec.sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });

/**
 * Get the length of a vector
 * @param {vec} a Vector a
 * @return {number} |a|
 */
vec.len = a => Math.sqrt(a.x * a.x + a.y * a.y);

/**
 * Get the length of a vector using taxicab geometry
 * @param {vec} a Vector a
 * @return {number} |a|
 */
vec.manhattan = a => Math.abs(a.x) + Math.abs(a.y);

/**
 * Normalise a vector
 * @param {vec} a The vector to normalise
 * @return {vec} ^a
 */
vec.nor = a => {
  let len = vec.len(a);
  return len ? { x: a.x / len, y: a.y / len } : vec();
};

/**
 * Get a dot product of vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {number} a ∙ b
 */
vec.dot = (a, b) => a.x * b.x + a.y * b.y;

/**
 * Rotate a vector by r radians
 * @param {vec} a The vector to rotate
 * @param {number} r The angle to rotate by, measured in radians
 * @return {vec} A rotated vector
 */
vec.rot = (a, r) => {
  let s = Math.sin(r),
    c = Math.cos(r);
  return { x: c * a.x - s * a.y, y: s * a.x + c * a.y };
}

/**
 * Check if two vectors are equal
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {boolean} True if vectors a and b are equal, false otherwise
 */
vec.eq = (a, b) => a.x === b.x && a.y === b.y;

/**
 * Get the angle of a vector
 * @param {vec} a Vector a
 * @return {number} The angle of vector a in radians
 */
vec.rad = a => Math.atan2(a.y, a.x);

/**
 * Copy a vector
 * @param {vec} a The vector to copy
 * @return {vec} A copy of vector a
 */
vec.cpy = a => vec(a);

/**
 * A function to call on each component of a vector
 * @callback vectorMapCallback
 * @param {number} value The component value
 * @param {'x' | 'y'} label The component label (x or y)
 * @return {number} The mapped component
 */

/**
 * Call a function on each component of a vector and build a new vector from the results
 * @param {vec} a Vector a
 * @param {vectorMapCallback} f The function to call on each component of the vector
 * @return {vec} Vector a mapped through f
 */
vec.map = (a, f) => ({ x: f(a.x, 'x'), y: f(a.y, 'y') });

/**
 * Convert a vector into a string
 * @param {vec} a The vector to convert
 * @param {string} [s=', '] The separator string
 * @return {string} A string representation of the vector
 */
vec.str = (a, s = ', ') => `${a.x}${s}${a.y}`;

/**
 * A matrix
 * @typedef {Object} mat
 * @property {number} m The number of rows in the matrix
 * @property {number} n The number of columns in the matrix
 * @property {Array<number>} entries The matrix values
 */

/**
 * Create a new matrix
 * @param {number} [m=4] The number of rows
 * @param {number} [n=4] The number of columns
 * @param {Array<number>} [entries=[]] Matrix values in reading order
 * @return {mat} A new matrix
 */
const mat = (m = 4, n = 4, entries = []) => ({
  m, n,
  entries: entries.concat(Array(m * n).fill(0)).slice(0, m * n)
});

/**
 * Get an identity matrix of size n
 * @param {number} n The size of the matrix
 * @return {mat} An identity matrix
 */
mat.identity = n => mat(n, n, Array(n * n).fill(0).map((v, i) => +(Math.floor(i / n) === i % n)));

/**
 * Get an entry from a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @return {number} The value at position (i, j) in matrix a
 */
mat.get = (a, i, j) => a.entries[(j - 1) + (i - 1) * a.n];

/**
 * Set an entry of a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @param {number} v The value to set in matrix a
 */
mat.set = (a, i, j, v) => { a.entries[(j - 1) + (i - 1) * a.n] = v; };

/**
 * Get a row from a matrix as an array
 * @param {mat} a Matrix a
 * @param {number} m The row offset
 * @return {Array<number>} Row m from matrix a
 */
mat.row = (a, m) => {
  const s = (m - 1) * a.n;
  return a.entries.slice(s, s + a.n);
};

/**
 * Get a column from a matrix as an array
 * @param {mat} a Matrix a
 * @param {number} n The column offset
 * @return {Array<number>} Column n from matrix a
 */
mat.col = (a, n) => times(i => mat.get(a, (i + 1), n), a.m);

/**
 * Add matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat} a + b
 */
mat.add = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v + b.entries[i]);

/**
 * Subtract matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat} a - b
 */
mat.sub = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v - b.entries[i]);

/**
 * Multiply matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat|boolean} ab or false if the matrices cannot be multiplied
 */
mat.mul = (a, b) => {
  if (a.n !== b.m) { return false; }
  const result = mat(a.m, b.n);
  for (let i = 1; i <= a.m; i++) {
    for (let j = 1; j <= b.n; j++) {
      mat.set(result, i, j, dot(mat.row(a, i), mat.col(b, j)));
    }
  }
  return result;
};

/**
 * Scale a matrix
 * @param {mat} a Matrix a
 * @param {number} b Scalar b
 * @return {mat} a * b
 */
mat.scale = (a, b) => mat.map(a, v => v * b);

/**
 * Transpose a matrix
 * @param {mat} a The matrix to transpose
 * @return {mat} A transposed matrix
 */
mat.trans = a => mat(a.n, a.m, times(i => mat.col(a, (i + 1)), a.n).flat());

/**
 * Get the minor of a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @return {mat|boolean} The (i, j) minor of matrix a or false if the matrix is not square
 */
mat.minor = (a, i, j) => {
  if (a.m !== a.n) { return false; }
  const entries = [];
  for (let ii = 1; ii <= a.m; ii++) {
    if (ii === i) { continue; }
    for (let jj = 1; jj <= a.n; jj++) {
      if (jj === j) { continue; }
      entries.push(mat.get(a, ii, jj));
    }
  }
  return mat(a.m - 1, a.n - 1, entries);
};

/**
 * Get the determinant of a matrix
 * @param {mat} a Matrix a
 * @return {number|boolean} |a| or false if the matrix is not square
 */
mat.det = a => {
  if (a.m !== a.n) { return false; }
  if (a.m === 1) {
    return a.entries[0];
  }
  if (a.m === 2) {
    return a.entries[0] * a.entries[3] - a.entries[1] * a.entries[2];
  }
  let total = 0, sign = 1;
  for (let j = 1; j <= a.n; j++) {
    total += sign * a.entries[j - 1] * mat.det(mat.minor(a, 1, j));
    sign *= -1;
  }
  return total;
};

/**
 * Normalise a matrix
 * @param {mat} a The matrix to normalise
 * @return {mat|boolean} ^a or false if the matrix is not square
 */
mat.nor = a => {
  if (a.m !== a.n) { return false; }
  const d = mat.det(a);
  return mat.map(a, i => i * d);
};

/**
 * Get the adjugate of a matrix
 * @param {mat} a The matrix from which to get the adjugate
 * @return {mat} The adjugate of a
 */
mat.adj = a => {
  const minors = mat(a.m, a.n);
  for (let i = 1; i <= a.m; i++) {
    for (let j = 1; j <= a.n; j++) {
      mat.set(minors, i, j, mat.det(mat.minor(a, i, j)));
    }
  }
  const cofactors = mat.map(minors, (v, i) => v * (i % 2 ? -1 : 1));
  return mat.trans(cofactors);
};

/**
 * Get the inverse of a matrix
 * @param {mat} a The matrix to invert
 * @return {mat|boolean} a^-1 or false if the matrix has no inverse
 */
mat.inv = a => {
  if (a.m !== a.n) { return false; }
  const d = mat.det(a);
  if (d === 0) { return false; }
  return mat.scale(mat.adj(a), 1 / d);
};

/**
 * Check if two matrices are equal
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {boolean} True if matrices a and b are identical, false otherwise
 */
mat.eq = (a, b) => a.m === b.m && a.n === b.n && mat.str(a) === mat.str(b);

/**
 * Copy a matrix
 * @param {mat} a The matrix to copy
 * @return {mat} A copy of matrix a
 */
mat.cpy = a => mat(a.m, a.n, [...a.entries]);

/**
 * A function to call on each entry of a matrix
 * @callback matrixMapCallback
 * @param {number} value The entry value
 * @param {number} index The entry index
 * @param {Array<number>} entries The array of matrix entries
 * @return {number} The mapped entry
 */

/**
 * Call a function on each entry of a matrix and build a new matrix from the results
 * @param {mat} a Matrix a
 * @param {matrixMapCallback} f The function to call on each entry of the matrix
 * @return {mat} Matrix a mapped through f
 */
mat.map = (a, f) => mat(a.m, a.n, a.entries.map(f));

/**
 * Convert a matrix into a string
 * @param {mat} a The matrix to convert
 * @param {string} [ms=', '] The separator string for columns
 * @param {string} [ns='\n'] The separator string for rows
 * @return {string} A string representation of the matrix
 */
mat.str = (a, ms = ', ', ns = '\n') => chunk(a.entries, a.n).map(r => r.join(ms)).join(ns);

if (true) {
  module.exports = { vec, mat };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_19801__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_19801__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __nested_webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const vec_1 = __nested_webpack_require_19801__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
function clamp(a, min = 0, max = 1) {
    return a < min ? min : (a > max ? max : a);
}
class Camera {
    constructor(position, options) {
        this.size = (0, vec_1.vec)();
        this.actualPosition = (0, vec_1.vec)();
        this.targetPosition = (0, vec_1.vec)();
        this.actualScale = 1;
        this.targetScale = 1;
        this.actualPosition = position;
        this.targetPosition = position;
        this.options = Object.assign({}, Camera.defaultOptions, options !== null && options !== void 0 ? options : {});
    }
    get position() {
        return this.targetPosition;
    }
    set position(value) {
        this.targetPosition = value;
    }
    set positionImmediate(value) {
        this.actualPosition = value;
        this.targetPosition = value;
    }
    get scale() {
        return this.targetScale;
    }
    set scale(value) {
        this.targetScale = clamp(value, this.options.minScale, this.options.maxScale);
    }
    set scaleImmediate(value) {
        this.actualScale = clamp(value, this.options.minScale, this.options.maxScale);
        this.targetScale = this.actualScale;
    }
    /**
     * Get screen bounds based on the current camera position and scale
     */
    get bounds() {
        return {
            top: this.actualPosition.y - (this.size.y / 2) / this.actualScale,
            bottom: this.actualPosition.y + (this.size.y / 2) / this.actualScale,
            left: this.actualPosition.x - (this.size.x / 2) / this.actualScale,
            right: this.actualPosition.x + (this.size.x / 2) / this.actualScale
        };
    }
    /**
     * Convert a screen position to a world position
     */
    positionToWorld(position) {
        const bounds = this.bounds;
        return vec_1.vec.add({ x: bounds.left, y: bounds.top }, vec_1.vec.mul(position, 1 / this.scale));
    }
    /**
     * Update context transforms to match camera position and scale
     */
    draw(context, width, height) {
        this.size = (0, vec_1.vec)(width, height);
        const d = vec_1.vec.sub(this.actualPosition, this.targetPosition);
        this.actualPosition = vec_1.vec.add(this.position, vec_1.vec.mul(d, this.options.moveEaseAmount));
        const s = clamp(this.targetScale, this.options.minScale, this.options.maxScale);
        this.actualScale = s + (this.actualScale - s) * this.options.scaleEaseAmount;
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.translate((this.size.x / 2) - this.actualPosition.x * this.actualScale, (this.size.y / 2) - this.actualPosition.y * this.actualScale);
        context.scale(this.actualScale, this.actualScale);
    }
}
exports["default"] = Camera;
Camera.defaultOptions = {
    allowScale: true,
    minScale: 0.5,
    maxScale: 4,
    moveEaseAmount: 0.1,
    scaleEaseAmount: 0.1,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUE0QztBQXdDNUMsU0FBUyxLQUFLLENBQUMsQ0FBUyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDeEMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBRUQsTUFBcUIsTUFBTTtJQXFCekIsWUFBbUIsUUFBYSxFQUFFLE9BQWdDO1FBVjFELFNBQUksR0FBUSxJQUFBLFNBQUcsR0FBRSxDQUFDO1FBRWxCLG1CQUFjLEdBQVEsSUFBQSxTQUFHLEdBQUUsQ0FBQztRQUU1QixtQkFBYyxHQUFRLElBQUEsU0FBRyxHQUFFLENBQUM7UUFFNUIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFHOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUMxQixFQUFFLEVBQ0YsTUFBTSxDQUFDLGNBQWMsRUFDckIsT0FBTyxhQUFQLE9BQU8sY0FBUCxPQUFPLEdBQUksRUFBRSxDQUNkLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxRQUFRLENBQUMsS0FBVTtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBVyxpQkFBaUIsQ0FBQyxLQUFVO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQVcsS0FBSyxDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELElBQVcsY0FBYyxDQUFDLEtBQWE7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsTUFBTTtRQUNmLE9BQU87WUFDTCxHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVztZQUNqRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVztZQUNwRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVztZQUNsRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVztTQUNwRSxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksZUFBZSxDQUFDLFFBQWE7UUFDbEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUUzQixPQUFPLFNBQUcsQ0FBQyxHQUFHLENBQ1osRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUNqQyxTQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksSUFBSSxDQUFDLE9BQWlDLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDMUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFBLFNBQUcsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFL0IsTUFBTSxDQUFDLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFdEYsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFFN0UsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxTQUFTLENBQ2YsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUM1RCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQzdELENBQUM7UUFDRixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7O0FBbkdILHlCQW9HQztBQW5HeUIscUJBQWMsR0FBa0I7SUFDdEQsVUFBVSxFQUFFLElBQUk7SUFDaEIsUUFBUSxFQUFFLEdBQUc7SUFDYixRQUFRLEVBQUUsQ0FBQztJQUNYLGNBQWMsRUFBRSxHQUFHO0lBQ25CLGVBQWUsRUFBRSxHQUFHO0NBQ3JCLENBQUMifQ==
})();

/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsK0JBQStCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdXVJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvY2FtZXJhL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9jYW1lcmEvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvY2FtZXJhLy4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvY2FtZXJhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2NhbWVyYS8uL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiLyoqXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbnVtYmVycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICogQHBhcmFtIHtudW1iZXJ9IGEgTnVtYmVyIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIE51bWJlciBiXG4gKiBAcGFyYW0ge251bWJlcn0gW3A9TnVtYmVyLkVQU0lMT05dIFRoZSBwcmVjaXNpb24gdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbnVtYmVycyBhIGFuZCBiIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gKi9cbmNvbnN0IGZsb2F0RXF1YWxzID0gKGEsIGIsIHAgPSBOdW1iZXIuRVBTSUxPTikgPT4gTWF0aC5hYnMoYSAtIGIpIDwgcDtcblxuLyoqXG4gKiBDbGFtcCBhIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIHRvIGNsYW1wXG4gKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSBUaGUgbWluaW11bSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IFttYXg9MV0gVGhlIG1heGltdW0gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gQSBjbGFtcGVkIG51bWJlclxuICovXG5jb25zdCBjbGFtcCA9IChhLCBtaW4gPSAwLCBtYXggPSAxKSA9PiBhIDwgbWluID8gbWluIDogKGEgPiBtYXggPyBtYXggOiBhKTtcblxuLyoqXG4gKiBHZXQgdGhlIGZyYWN0aW9uYWwgcGFydCBvZiBhIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG51bWJlciBmcm9tIHdoaWNoIHRvIGdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgdGhlIG51bWJlclxuICovXG5jb25zdCBmcmFjID0gYSA9PiBhID49IDAgPyBhIC0gTWF0aC5mbG9vcihhKSA6IGEgLSBNYXRoLmNlaWwoYSk7XG5cbi8qKlxuICogRG8gYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuY29uc3QgbGVycCA9IChhLCBiLCBpKSA9PiBhICsgKGIgLSBhKSAqIGk7XG5cbi8qKlxuICogR2V0IHRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgcG9zaXRpb24gb2YgaSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuY29uc3QgdW5sZXJwID0gKGEsIGIsIGkpID0+IChpIC0gYSkgLyAoYiAtIGEpO1xuXG4vKipcbiAqIERvIGEgYmlsaW5lYXIgaW50ZXJwb2xhdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGMwMCBUb3AtbGVmdCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMxMCBUb3AtcmlnaHQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDEgQm90dG9tLWxlZnQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTEgQm90dG9tLXJpZ2h0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaXggSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB4XG4gKiBAcGFyYW0ge251bWJlcn0gaXkgSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB5XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgYmlsaW5lYXIgaW50ZXJwb2xhdGVkIHZhbHVlXG4gKi9cbmNvbnN0IGJsZXJwID0gKGMwMCwgYzEwLCBjMDEsIGMxMSwgaXgsIGl5KSA9PiBsZXJwKGxlcnAoYzAwLCBjMTAsIGl4KSwgbGVycChjMDEsIGMxMSwgaXgpLCBpeSk7XG5cbi8qKlxuICogUmUtbWFwIGEgbnVtYmVyIGkgZnJvbSByYW5nZSBhMS4uLmEyIHRvIGIxLi4uYjJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBudW1iZXIgdG8gcmUtbWFwXG4gKiBAcGFyYW0ge251bWJlcn0gYTFcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMlxuICogQHBhcmFtIHtudW1iZXJ9IGIxXG4gKiBAcGFyYW0ge251bWJlcn0gYjJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuY29uc3QgcmVtYXAgPSAoaSwgYTEsIGEyLCBiMSwgYjIpID0+IGIxICsgKGkgLSBhMSkgKiAoYjIgLSBiMSkgLyAoYTIgLSBhMSk7XG5cbi8qKlxuICogRG8gYSBzbW9vdGggaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5jb25zdCBzbW9vdGhzdGVwID0gKGEsIGIsIGkpID0+IGxlcnAoYSwgYiwgMyAqIE1hdGgucG93KGksIDIpIC0gMiAqIE1hdGgucG93KGksIDMpKTtcblxuLyoqXG4gKiBHZXQgYW4gYW5nbGUgaW4gcmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXMgVGhlIGFuZ2xlIGluIGRlZ3JlZXNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqL1xuY29uc3QgcmFkaWFucyA9IGRlZ3JlZXMgPT4gKE1hdGguUEkgLyAxODApICogZGVncmVlcztcblxuLyoqXG4gKiBHZXQgYW4gYW5nbGUgaW4gZGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnMgVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIGRlZ3JlZXNcbiAqL1xuY29uc3QgZGVncmVlcyA9IHJhZGlhbnMgPT4gKDE4MCAvIE1hdGguUEkpICogcmFkaWFucztcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBFeGNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXG4gKi9cbmNvbnN0IHJhbmRvbUJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICovXG5jb25zdCByYW5kb21JbnRCZXR3ZWVuID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXG4vKipcbiAqIEdldCBhIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbXU9MC41XSBUaGUgbWVhbiB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IFtzaWdtYT0wLjVdIFRoZSBzdGFuZGFyZCBkZXZpYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2FtcGxlcz0yXSBUaGUgbnVtYmVyIG9mIHNhbXBsZXNcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXG4gKi9cbmNvbnN0IGNsdFJhbmRvbSA9IChtdSA9IDAuNSwgc2lnbWEgPSAwLjUsIHNhbXBsZXMgPSAyKSA9PiB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAobGV0IGkgPSBzYW1wbGVzOyBpLS07KSB7XG4gICAgdG90YWwgKz0gTWF0aC5yYW5kb20oKTtcbiAgfVxuICByZXR1cm4gbXUgKyAodG90YWwgLSBzYW1wbGVzIC8gMikgLyAoc2FtcGxlcyAvIDIpICogc2lnbWE7XG59O1xuXG4vKipcbiAqIEdldCBhIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBpbnRlZ2VyXG4gKi9cbmNvbnN0IGNsdFJhbmRvbUludCA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihtaW4gKyBjbHRSYW5kb20oMC41LCAwLjUsIDIpICogKG1heCArIDEgLSBtaW4pKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB3ZWlnaHRlZCByYW5kb20gaW50ZWdlclxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB3IEFuIGFycmF5IG9mIHdlaWdodHNcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW5kZXggZnJvbSB3XG4gKi9cbmNvbnN0IHdlaWdodGVkUmFuZG9tID0gdyA9PiB7XG4gIGxldCB0b3RhbCA9IHcucmVkdWNlKChhLCBpKSA9PiBhICsgaSwgMCksIG4gPSAwO1xuICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsO1xuICB3aGlsZSAodG90YWwgPiByKSB7XG4gICAgdG90YWwgLT0gd1tuKytdO1xuICB9XG4gIHJldHVybiBuIC0gMTtcbn07XG5cbi8qKlxuICogQW4gaW50ZXJwb2xhdGlvbiBmdW5jdGlvblxuICogQGNhbGxiYWNrIGludGVycG9sYXRpb25DYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuXG4vKipcbiAqIFJldHVybiBhbiBpbnRlcnBvbGF0ZWQgdmFsdWUgZnJvbSBhbiBhcnJheVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIEFuIGFycmF5IG9mIHZhbHVlcyBpbnRlcnBvbGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGkgQSBudW1iZXIgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHBhcmFtIHtpbnRlcnBvbGF0aW9uQ2FsbGJhY2t9IFtmPU1hdGgubGVycF0gVGhlIGludGVycG9sYXRpb24gZnVuY3Rpb24gdG8gdXNlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW21pbihhKSwgbWF4KGEpXVxuICovXG5jb25zdCBsZXJwQXJyYXkgPSAoYSwgaSwgZiA9IGxlcnApID0+IHtcbiAgY29uc3QgcyA9IGkgKiAoYS5sZW5ndGggLSAxKTtcbiAgY29uc3QgcCA9IGNsYW1wKE1hdGgudHJ1bmMocyksIDAsIGEubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBmKGFbcF0gfHwgMCwgYVtwICsgMV0gfHwgMCwgZnJhYyhzKSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xuY29uc3QgZG90ID0gKGEsIGIpID0+IGEucmVkdWNlKChuLCB2LCBpKSA9PiBuICsgdiAqIGJbaV0sIDApO1xuXG4vKipcbiAqIEdldCB0aGUgZmFjdG9yaWFsIG9mIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYVxuICogQHJldHVybiB7bnVtYmVyfSBhIVxuICovXG5jb25zdCBmYWN0b3JpYWwgPSBhID0+IHtcbiAgbGV0IHJlc3VsdCA9IDE7XG4gIGZvciAobGV0IGkgPSAyOyBpIDw9IGE7IGkrKykge1xuICAgIHJlc3VsdCAqPSBpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgbnVtYmVyIG9mIHBlcm11dGF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEBwYXJhbSB7bnVtYmVyfSByXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5QclxuICovXG5jb25zdCBwZXJtdXRhdGlvbiA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyBmYWN0b3JpYWwobiAtIHIpO1xuXG4vKipcbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNvbWJpbmF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEBwYXJhbSB7bnVtYmVyfSByXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5DclxuICovXG5jb25zdCBjb21iaW5hdGlvbiA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyAoZmFjdG9yaWFsKHIpICogZmFjdG9yaWFsKG4gLSByKSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiBmb3IgZ2VuZXJhdGluZyBhcnJheSB2YWx1ZXNcbiAqIEBjYWxsYmFjayB0aW1lc0NhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgYXJyYXkgaW5kZXhcbiAqIEByZXR1cm4geyp9IFRoZSBhcnJheSB2YWx1ZVxuICovXG5cbi8qKlxuICogUmV0dXJuIGEgbmV3IGFycmF5IHdpdGggbGVuZ3RoIG4gYnkgY2FsbGluZyBmdW5jdGlvbiBmKGkpIG9uIGVhY2ggZWxlbWVudFxuICogQHBhcmFtIHt0aW1lc0NhbGxiYWNrfSBmXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PCo+fVxuICovXG5jb25zdCB0aW1lcyA9IChmLCBuKSA9PiBBcnJheShuKS5maWxsKDApLm1hcCgoXywgaSkgPT4gZihpKSk7XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgbnVtYmVycyAwLT4obiAtIDEpXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IEFuIGFycmF5IG9mIGludGVnZXJzIDAtPihuIC0gMSlcbiAqL1xuY29uc3QgcmFuZ2UgPSBuID0+IHRpbWVzKGkgPT4gaSwgbik7XG5cbi8qKlxuICogWmlwIDIgYXJyYXlzIHRvZ2V0aGVyLCBpLmUuIChbMSwgMiwgM10sIFthLCBiLCBjXSkgPT4gW1sxLCBhXSwgWzIsIGJdLCBbMywgY11dXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBiXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59XG4gKi9cbmNvbnN0IHppcCA9IChhLCBiKSA9PiBhLm1hcCgoaywgaSkgPT4gW2ssIGJbaV1dKTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXlbaV0gd2l0aCBwb3NpdGl2ZSBhbmQgbmVnYXRpdmUgd3JhcHBpbmdcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBwb3NpdGl2ZWx5L25lZ2F0aXZlbHkgd3JhcHBlZCBhcnJheSBpbmRleFxuICogQHJldHVybiB7Kn0gQW4gZWxlbWVudCBmcm9tIHRoZSBhcnJheVxuICovXG5jb25zdCBhdCA9IChhLCBpKSA9PiBhW2kgPCAwID8gYS5sZW5ndGggLSAoTWF0aC5hYnMoaSArIDEpICUgYS5sZW5ndGgpIC0gMSA6IGkgJSBhLmxlbmd0aF07XG5cbi8qKlxuICogQ2hvcCBhbiBhcnJheSBpbnRvIGNodW5rcyBvZiBzaXplIG5cbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjaHVuayBzaXplXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGFycmF5IGNodW5rc1xuICovXG5jb25zdCBjaHVuayA9IChhLCBuKSA9PiB0aW1lcyhpID0+IGEuc2xpY2UoaSAqIG4sIGkgKiBuICsgbiksIE1hdGguY2VpbChhLmxlbmd0aCAvIG4pKTtcblxuLyoqXG4gKiBSYW5kb21seSBzaHVmZmxlIGEgc2hhbGxvdyBjb3B5IG9mIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcmV0dXJuIHtBcnJheTwqPn0gVGhlIHNodWZmbGVkIGFycmF5XG4gKi9cbmNvbnN0IHNodWZmbGUgPSBhID0+IGEuc2xpY2UoKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZmxvYXRFcXVhbHMsXG4gICAgY2xhbXAsXG4gICAgZnJhYyxcbiAgICBsZXJwLFxuICAgIHVubGVycCxcbiAgICBibGVycCxcbiAgICByZW1hcCxcbiAgICBzbW9vdGhzdGVwLFxuICAgIHJhZGlhbnMsXG4gICAgZGVncmVlcyxcbiAgICByYW5kb21CZXR3ZWVuLFxuICAgIHJhbmRvbUludEJldHdlZW4sXG4gICAgY2x0UmFuZG9tLFxuICAgIGNsdFJhbmRvbUludCxcbiAgICB3ZWlnaHRlZFJhbmRvbSxcbiAgICBsZXJwQXJyYXksXG4gICAgZG90LFxuICAgIGZhY3RvcmlhbCxcbiAgICBwZXJtdXRhdGlvbixcbiAgICBjb21iaW5hdGlvbixcbiAgICB0aW1lcyxcbiAgICByYW5nZSxcbiAgICB6aXAsXG4gICAgYXQsXG4gICAgY2h1bmssXG4gICAgc2h1ZmZsZSxcbiAgfTtcbn1cbiIsImNvbnN0IHsgdGltZXMsIGNodW5rLCBkb3QgfSA9IHJlcXVpcmUoJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJyk7XG5cbi8qKlxuICogQG92ZXJ2aWV3IEEgbGlicmFyeSBvZiB1c2VmdWwgZnVuY3Rpb25zXG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxuICovXG5cbi8qKlxuICogQSAyZCB2ZWN0b3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHZlY1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHggVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB5IFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcnx2ZWN9IFt4XSBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3Rvciwgb3IgYSB2ZWN0b3IgdG8gY29weVxuICogQHBhcmFtIHtudW1iZXJ9IFt5XSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjfSBBIG5ldyB2ZWN0b3JcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlZhcmlvdXMgd2F5cyB0byBpbml0aWFsaXNlIGEgdmVjdG9yPC9jYXB0aW9uPlxuICogbGV0IGEgPSB2ZWMoMywgMik7ICAvLyAoMywgMilcbiAqIGxldCBiID0gdmVjKDQpOyAgICAgLy8gKDQsIDQpXG4gKiBsZXQgYyA9IHZlYyhhKTsgICAgIC8vICgzLCAyKVxuICogbGV0IGQgPSB2ZWMoKTsgICAgICAvLyAoMCwgMClcbiAqL1xuY29uc3QgdmVjID0gKHgsIHkpID0+ICgheCAmJiAheSA/XG4gIHsgeDogMCwgeTogMCB9IDogKHR5cGVvZiB4ID09PSAnb2JqZWN0JyA/XG4gICAgeyB4OiB4LnggfHwgMCwgeTogeC55IHx8IDAgfSA6ICh5ID09PSBudWxsIHx8IHkgPT09IHVuZGVmaW5lZCA/XG4gICAgICB7IHg6IHgsIHk6IHggfSA6IHsgeDogeCwgeTogeSB9KVxuICApXG4pO1xuXG4vKipcbiAqIEdldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlY3RvciBhcyBhbiBhcnJheVxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBnZXQgY29tcG9uZW50cyBmcm9tXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUaGUgdmVjdG9yIGNvbXBvbmVudHMgYXMgYW4gYXJyYXlcbiAqL1xudmVjLmNvbXBvbmVudHMgPSBhID0+IFthLngsIGEueV07XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDEsIDApXG4gKiBAcmV0dXJuIHt2ZWN9IEEgdW5pdCB2ZWN0b3IgKDEsIDApXG4gKi9cbnZlYy51eCA9ICgpID0+IHZlYygxLCAwKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMSlcbiAqIEByZXR1cm4ge3ZlY30gQSB1bml0IHZlY3RvciAoMCwgMSlcbiAqL1xudmVjLnV5ID0gKCkgPT4gdmVjKDAsIDEpO1xuXG4vKipcbiAqIEFkZCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge3ZlY30gYSArIGJcbiAqL1xudmVjLmFkZCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKyBiLngsIHk6IGEueSArIGIueSB9KTtcblxuLyoqXG4gKiBTY2FsZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWN9IGEgKiBiXG4gKi9cbnZlYy5tdWwgPSAoYSwgYikgPT4gKHsgeDogYS54ICogYiwgeTogYS55ICogYiB9KTtcblxuLyoqXG4gKiBTdWJ0cmFjdCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge3ZlY30gYSAtIGJcbiAqL1xudmVjLnN1YiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLSBiLngsIHk6IGEueSAtIGIueSB9KTtcblxuLyoqXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYy5sZW4gPSBhID0+IE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkpO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIHVzaW5nIHRheGljYWIgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxuICovXG52ZWMubWFuaGF0dGFuID0gYSA9PiBNYXRoLmFicyhhLngpICsgTWF0aC5hYnMoYS55KTtcblxuLyoqXG4gKiBOb3JtYWxpc2UgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXNlXG4gKiBAcmV0dXJuIHt2ZWN9IF5hXG4gKi9cbnZlYy5ub3IgPSBhID0+IHtcbiAgbGV0IGxlbiA9IHZlYy5sZW4oYSk7XG4gIHJldHVybiBsZW4gPyB7IHg6IGEueCAvIGxlbiwgeTogYS55IC8gbGVuIH0gOiB2ZWMoKTtcbn07XG5cbi8qKlxuICogR2V0IGEgZG90IHByb2R1Y3Qgb2YgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xudmVjLmRvdCA9IChhLCBiKSA9PiBhLnggKiBiLnggKyBhLnkgKiBiLnk7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIGJ5IHIgcmFkaWFuc1xuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBhbmdsZSB0byByb3RhdGUgYnksIG1lYXN1cmVkIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge3ZlY30gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMucm90ID0gKGEsIHIpID0+IHtcbiAgbGV0IHMgPSBNYXRoLnNpbihyKSxcbiAgICBjID0gTWF0aC5jb3Mocik7XG4gIHJldHVybiB7IHg6IGMgKiBhLnggLSBzICogYS55LCB5OiBzICogYS54ICsgYyAqIGEueSB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2ZWN0b3JzIGFyZSBlcXVhbFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZlY3RvcnMgYSBhbmQgYiBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZVxuICovXG52ZWMuZXEgPSAoYSwgYikgPT4gYS54ID09PSBiLnggJiYgYS55ID09PSBiLnk7XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcbiAqL1xudmVjLnJhZCA9IGEgPT4gTWF0aC5hdGFuMihhLnksIGEueCk7XG5cbi8qKlxuICogQ29weSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb3B5XG4gKiBAcmV0dXJuIHt2ZWN9IEEgY29weSBvZiB2ZWN0b3IgYVxuICovXG52ZWMuY3B5ID0gYSA9PiB2ZWMoYSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yXG4gKiBAY2FsbGJhY2sgdmVjdG9yTWFwQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgY29tcG9uZW50IHZhbHVlXG4gKiBAcGFyYW0geyd4JyB8ICd5J30gbGFiZWwgVGhlIGNvbXBvbmVudCBsYWJlbCAoeCBvciB5KVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGNvbXBvbmVudFxuICovXG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yIGFuZCBidWlsZCBhIG5ldyB2ZWN0b3IgZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjdG9yTWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjfSBWZWN0b3IgYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbnZlYy5tYXAgPSAoYSwgZikgPT4gKHsgeDogZihhLngsICd4JyksIHk6IGYoYS55LCAneScpIH0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSB2ZWN0b3IgaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG52ZWMuc3RyID0gKGEsIHMgPSAnLCAnKSA9PiBgJHthLnh9JHtzfSR7YS55fWA7XG5cbi8qKlxuICogQSBtYXRyaXhcbiAqIEB0eXBlZGVmIHtPYmplY3R9IG1hdFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG0gVGhlIG51bWJlciBvZiByb3dzIGluIHRoZSBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgbWF0cml4XG4gKiBAcHJvcGVydHkge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIG1hdHJpeCB2YWx1ZXNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBtYXRyaXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbT00XSBUaGUgbnVtYmVyIG9mIHJvd3NcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbj00XSBUaGUgbnVtYmVyIG9mIGNvbHVtbnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2VudHJpZXM9W11dIE1hdHJpeCB2YWx1ZXMgaW4gcmVhZGluZyBvcmRlclxuICogQHJldHVybiB7bWF0fSBBIG5ldyBtYXRyaXhcbiAqL1xuY29uc3QgbWF0ID0gKG0gPSA0LCBuID0gNCwgZW50cmllcyA9IFtdKSA9PiAoe1xuICBtLCBuLFxuICBlbnRyaWVzOiBlbnRyaWVzLmNvbmNhdChBcnJheShtICogbikuZmlsbCgwKSkuc2xpY2UoMCwgbSAqIG4pXG59KTtcblxuLyoqXG4gKiBHZXQgYW4gaWRlbnRpdHkgbWF0cml4IG9mIHNpemUgblxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybiB7bWF0fSBBbiBpZGVudGl0eSBtYXRyaXhcbiAqL1xubWF0LmlkZW50aXR5ID0gbiA9PiBtYXQobiwgbiwgQXJyYXkobiAqIG4pLmZpbGwoMCkubWFwKCh2LCBpKSA9PiArKE1hdGguZmxvb3IoaSAvIG4pID09PSBpICUgbikpKTtcblxuLyoqXG4gKiBHZXQgYW4gZW50cnkgZnJvbSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgdmFsdWUgYXQgcG9zaXRpb24gKGksIGopIGluIG1hdHJpeCBhXG4gKi9cbm1hdC5nZXQgPSAoYSwgaSwgaikgPT4gYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXTtcblxuLyoqXG4gKiBTZXQgYW4gZW50cnkgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB2IFRoZSB2YWx1ZSB0byBzZXQgaW4gbWF0cml4IGFcbiAqL1xubWF0LnNldCA9IChhLCBpLCBqLCB2KSA9PiB7IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl0gPSB2OyB9O1xuXG4vKipcbiAqIEdldCBhIHJvdyBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IG0gVGhlIHJvdyBvZmZzZXRcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFJvdyBtIGZyb20gbWF0cml4IGFcbiAqL1xubWF0LnJvdyA9IChhLCBtKSA9PiB7XG4gIGNvbnN0IHMgPSAobSAtIDEpICogYS5uO1xuICByZXR1cm4gYS5lbnRyaWVzLnNsaWNlKHMsIHMgKyBhLm4pO1xufTtcblxuLyoqXG4gKiBHZXQgYSBjb2x1bW4gZnJvbSBhIG1hdHJpeCBhcyBhbiBhcnJheVxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBDb2x1bW4gbiBmcm9tIG1hdHJpeCBhXG4gKi9cbm1hdC5jb2wgPSAoYSwgbikgPT4gdGltZXMoaSA9PiBtYXQuZ2V0KGEsIChpICsgMSksIG4pLCBhLm0pO1xuXG4vKipcbiAqIEFkZCBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR9IGEgKyBiXG4gKi9cbm1hdC5hZGQgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiArIGIuZW50cmllc1tpXSk7XG5cbi8qKlxuICogU3VidHJhY3QgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fSBhIC0gYlxuICovXG5tYXQuc3ViID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5tYXAoYSwgKHYsIGkpID0+IHYgLSBiLmVudHJpZXNbaV0pO1xuXG4vKipcbiAqIE11bHRpcGx5IG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBhYiBvciBmYWxzZSBpZiB0aGUgbWF0cmljZXMgY2Fubm90IGJlIG11bHRpcGxpZWRcbiAqL1xubWF0Lm11bCA9IChhLCBiKSA9PiB7XG4gIGlmIChhLm4gIT09IGIubSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgcmVzdWx0ID0gbWF0KGEubSwgYi5uKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBiLm47IGorKykge1xuICAgICAgbWF0LnNldChyZXN1bHQsIGksIGosIGRvdChtYXQucm93KGEsIGkpLCBtYXQuY29sKGIsIGopKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFNjYWxlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcbiAqIEByZXR1cm4ge21hdH0gYSAqIGJcbiAqL1xubWF0LnNjYWxlID0gKGEsIGIpID0+IG1hdC5tYXAoYSwgdiA9PiB2ICogYik7XG5cbi8qKlxuICogVHJhbnNwb3NlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIHRyYW5zcG9zZVxuICogQHJldHVybiB7bWF0fSBBIHRyYW5zcG9zZWQgbWF0cml4XG4gKi9cbm1hdC50cmFucyA9IGEgPT4gbWF0KGEubiwgYS5tLCB0aW1lcyhpID0+IG1hdC5jb2woYSwgKGkgKyAxKSksIGEubikuZmxhdCgpKTtcblxuLyoqXG4gKiBHZXQgdGhlIG1pbm9yIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gVGhlIChpLCBqKSBtaW5vciBvZiBtYXRyaXggYSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0Lm1pbm9yID0gKGEsIGksIGopID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBlbnRyaWVzID0gW107XG4gIGZvciAobGV0IGlpID0gMTsgaWkgPD0gYS5tOyBpaSsrKSB7XG4gICAgaWYgKGlpID09PSBpKSB7IGNvbnRpbnVlOyB9XG4gICAgZm9yIChsZXQgamogPSAxOyBqaiA8PSBhLm47IGpqKyspIHtcbiAgICAgIGlmIChqaiA9PT0gaikgeyBjb250aW51ZTsgfVxuICAgICAgZW50cmllcy5wdXNoKG1hdC5nZXQoYSwgaWksIGpqKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXQoYS5tIC0gMSwgYS5uIC0gMSwgZW50cmllcyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcmV0dXJuIHtudW1iZXJ8Ym9vbGVhbn0gfGF8IG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQuZGV0ID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGEubSA9PT0gMSkge1xuICAgIHJldHVybiBhLmVudHJpZXNbMF07XG4gIH1cbiAgaWYgKGEubSA9PT0gMikge1xuICAgIHJldHVybiBhLmVudHJpZXNbMF0gKiBhLmVudHJpZXNbM10gLSBhLmVudHJpZXNbMV0gKiBhLmVudHJpZXNbMl07XG4gIH1cbiAgbGV0IHRvdGFsID0gMCwgc2lnbiA9IDE7XG4gIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XG4gICAgdG90YWwgKz0gc2lnbiAqIGEuZW50cmllc1tqIC0gMV0gKiBtYXQuZGV0KG1hdC5taW5vcihhLCAxLCBqKSk7XG4gICAgc2lnbiAqPSAtMTtcbiAgfVxuICByZXR1cm4gdG90YWw7XG59O1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBub3JtYWxpc2VcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBeYSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0Lm5vciA9IGEgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGQgPSBtYXQuZGV0KGEpO1xuICByZXR1cm4gbWF0Lm1hcChhLCBpID0+IGkgKiBkKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCBmcm9tIHdoaWNoIHRvIGdldCB0aGUgYWRqdWdhdGVcbiAqIEByZXR1cm4ge21hdH0gVGhlIGFkanVnYXRlIG9mIGFcbiAqL1xubWF0LmFkaiA9IGEgPT4ge1xuICBjb25zdCBtaW5vcnMgPSBtYXQoYS5tLCBhLm4pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XG4gICAgICBtYXQuc2V0KG1pbm9ycywgaSwgaiwgbWF0LmRldChtYXQubWlub3IoYSwgaSwgaikpKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY29mYWN0b3JzID0gbWF0Lm1hcChtaW5vcnMsICh2LCBpKSA9PiB2ICogKGkgJSAyID8gLTEgOiAxKSk7XG4gIHJldHVybiBtYXQudHJhbnMoY29mYWN0b3JzKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBpbnZlcnNlIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGludmVydFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IGFeLTEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBoYXMgbm8gaW52ZXJzZVxuICovXG5tYXQuaW52ID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XG4gIGlmIChkID09PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuICByZXR1cm4gbWF0LnNjYWxlKG1hdC5hZGooYSksIDEgLyBkKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIG1hdHJpY2VzIGFyZSBlcXVhbFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1hdHJpY2VzIGEgYW5kIGIgYXJlIGlkZW50aWNhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbm1hdC5lcSA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQuc3RyKGEpID09PSBtYXQuc3RyKGIpO1xuXG4vKipcbiAqIENvcHkgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29weVxuICogQHJldHVybiB7bWF0fSBBIGNvcHkgb2YgbWF0cml4IGFcbiAqL1xubWF0LmNweSA9IGEgPT4gbWF0KGEubSwgYS5uLCBbLi4uYS5lbnRyaWVzXSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXhcbiAqIEBjYWxsYmFjayBtYXRyaXhNYXBDYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBlbnRyeSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBlbnRyeSBpbmRleFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBhcnJheSBvZiBtYXRyaXggZW50cmllc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGVudHJ5XG4gKi9cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeCBhbmQgYnVpbGQgYSBuZXcgbWF0cml4IGZyb20gdGhlIHJlc3VsdHNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdHJpeE1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybiB7bWF0fSBNYXRyaXggYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbm1hdC5tYXAgPSAoYSwgZikgPT4gbWF0KGEubSwgYS5uLCBhLmVudHJpZXMubWFwKGYpKTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgbWF0cml4IGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29udmVydFxuICogQHBhcmFtIHtzdHJpbmd9IFttcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3IgY29sdW1uc1xuICogQHBhcmFtIHtzdHJpbmd9IFtucz0nXFxuJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIHJvd3NcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5tYXQuc3RyID0gKGEsIG1zID0gJywgJywgbnMgPSAnXFxuJykgPT4gY2h1bmsoYS5lbnRyaWVzLCBhLm4pLm1hcChyID0+IHIuam9pbihtcykpLmpvaW4obnMpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IHZlYywgbWF0IH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2ZWNfMSA9IHJlcXVpcmUoXCJAYmFzZW1lbnR1bml2ZXJzZS92ZWNcIik7XG5mdW5jdGlvbiBjbGFtcChhLCBtaW4gPSAwLCBtYXggPSAxKSB7XG4gICAgcmV0dXJuIGEgPCBtaW4gPyBtaW4gOiAoYSA+IG1heCA/IG1heCA6IGEpO1xufVxuY2xhc3MgQ2FtZXJhIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnNpemUgPSAoMCwgdmVjXzEudmVjKSgpO1xuICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gKDAsIHZlY18xLnZlYykoKTtcbiAgICAgICAgdGhpcy50YXJnZXRQb3NpdGlvbiA9ICgwLCB2ZWNfMS52ZWMpKCk7XG4gICAgICAgIHRoaXMuYWN0dWFsU2NhbGUgPSAxO1xuICAgICAgICB0aGlzLnRhcmdldFNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnRhcmdldFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIENhbWVyYS5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30pO1xuICAgIH1cbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldFBvc2l0aW9uO1xuICAgIH1cbiAgICBzZXQgcG9zaXRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy50YXJnZXRQb3NpdGlvbiA9IHZhbHVlO1xuICAgIH1cbiAgICBzZXQgcG9zaXRpb25JbW1lZGlhdGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IHZhbHVlO1xuICAgICAgICB0aGlzLnRhcmdldFBvc2l0aW9uID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBzY2FsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0U2NhbGU7XG4gICAgfVxuICAgIHNldCBzY2FsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnRhcmdldFNjYWxlID0gY2xhbXAodmFsdWUsIHRoaXMub3B0aW9ucy5taW5TY2FsZSwgdGhpcy5vcHRpb25zLm1heFNjYWxlKTtcbiAgICB9XG4gICAgc2V0IHNjYWxlSW1tZWRpYXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWN0dWFsU2NhbGUgPSBjbGFtcCh2YWx1ZSwgdGhpcy5vcHRpb25zLm1pblNjYWxlLCB0aGlzLm9wdGlvbnMubWF4U2NhbGUpO1xuICAgICAgICB0aGlzLnRhcmdldFNjYWxlID0gdGhpcy5hY3R1YWxTY2FsZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHNjcmVlbiBib3VuZHMgYmFzZWQgb24gdGhlIGN1cnJlbnQgY2FtZXJhIHBvc2l0aW9uIGFuZCBzY2FsZVxuICAgICAqL1xuICAgIGdldCBib3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IHRoaXMuYWN0dWFsUG9zaXRpb24ueSAtICh0aGlzLnNpemUueSAvIDIpIC8gdGhpcy5hY3R1YWxTY2FsZSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5hY3R1YWxQb3NpdGlvbi55ICsgKHRoaXMuc2l6ZS55IC8gMikgLyB0aGlzLmFjdHVhbFNjYWxlLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5hY3R1YWxQb3NpdGlvbi54IC0gKHRoaXMuc2l6ZS54IC8gMikgLyB0aGlzLmFjdHVhbFNjYWxlLFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMuYWN0dWFsUG9zaXRpb24ueCArICh0aGlzLnNpemUueCAvIDIpIC8gdGhpcy5hY3R1YWxTY2FsZVxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgc2NyZWVuIHBvc2l0aW9uIHRvIGEgd29ybGQgcG9zaXRpb25cbiAgICAgKi9cbiAgICBwb3NpdGlvblRvV29ybGQocG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgYm91bmRzID0gdGhpcy5ib3VuZHM7XG4gICAgICAgIHJldHVybiB2ZWNfMS52ZWMuYWRkKHsgeDogYm91bmRzLmxlZnQsIHk6IGJvdW5kcy50b3AgfSwgdmVjXzEudmVjLm11bChwb3NpdGlvbiwgMSAvIHRoaXMuc2NhbGUpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNvbnRleHQgdHJhbnNmb3JtcyB0byBtYXRjaCBjYW1lcmEgcG9zaXRpb24gYW5kIHNjYWxlXG4gICAgICovXG4gICAgZHJhdyhjb250ZXh0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9ICgwLCB2ZWNfMS52ZWMpKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjb25zdCBkID0gdmVjXzEudmVjLnN1Yih0aGlzLmFjdHVhbFBvc2l0aW9uLCB0aGlzLnRhcmdldFBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IHZlY18xLnZlYy5hZGQodGhpcy5wb3NpdGlvbiwgdmVjXzEudmVjLm11bChkLCB0aGlzLm9wdGlvbnMubW92ZUVhc2VBbW91bnQpKTtcbiAgICAgICAgY29uc3QgcyA9IGNsYW1wKHRoaXMudGFyZ2V0U2NhbGUsIHRoaXMub3B0aW9ucy5taW5TY2FsZSwgdGhpcy5vcHRpb25zLm1heFNjYWxlKTtcbiAgICAgICAgdGhpcy5hY3R1YWxTY2FsZSA9IHMgKyAodGhpcy5hY3R1YWxTY2FsZSAtIHMpICogdGhpcy5vcHRpb25zLnNjYWxlRWFzZUFtb3VudDtcbiAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIGNvbnRleHQudHJhbnNsYXRlKCh0aGlzLnNpemUueCAvIDIpIC0gdGhpcy5hY3R1YWxQb3NpdGlvbi54ICogdGhpcy5hY3R1YWxTY2FsZSwgKHRoaXMuc2l6ZS55IC8gMikgLSB0aGlzLmFjdHVhbFBvc2l0aW9uLnkgKiB0aGlzLmFjdHVhbFNjYWxlKTtcbiAgICAgICAgY29udGV4dC5zY2FsZSh0aGlzLmFjdHVhbFNjYWxlLCB0aGlzLmFjdHVhbFNjYWxlKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBDYW1lcmE7XG5DYW1lcmEuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgYWxsb3dTY2FsZTogdHJ1ZSxcbiAgICBtaW5TY2FsZTogMC41LFxuICAgIG1heFNjYWxlOiA0LFxuICAgIG1vdmVFYXNlQW1vdW50OiAwLjEsXG4gICAgc2NhbGVFYXNlQW1vdW50OiAwLjEsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEN0RFFVRTBRenRCUVhkRE5VTXNVMEZCVXl4TFFVRkxMRU5CUVVNc1EwRkJVeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNN1NVRkRlRU1zVDBGQlR5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVNM1F5eERRVUZETzBGQlJVUXNUVUZCY1VJc1RVRkJUVHRKUVhGQ2VrSXNXVUZCYlVJc1VVRkJZU3hGUVVGRkxFOUJRV2RETzFGQlZqRkVMRk5CUVVrc1IwRkJVU3hKUVVGQkxGTkJRVWNzUjBGQlJTeERRVUZETzFGQlJXeENMRzFDUVVGakxFZEJRVkVzU1VGQlFTeFRRVUZITEVkQlFVVXNRMEZCUXp0UlFVVTFRaXh0UWtGQll5eEhRVUZSTEVsQlFVRXNVMEZCUnl4SFFVRkZMRU5CUVVNN1VVRkZOVUlzWjBKQlFWY3NSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkZlRUlzWjBKQlFWY3NSMEZCVnl4RFFVRkRMRU5CUVVNN1VVRkhPVUlzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4UlFVRlJMRU5CUVVNN1VVRkRMMElzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4UlFVRlJMRU5CUVVNN1VVRkRMMElzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVNeFFpeEZRVUZGTEVWQlEwWXNUVUZCVFN4RFFVRkRMR05CUVdNc1JVRkRja0lzVDBGQlR5eGhRVUZRTEU5QlFVOHNZMEZCVUN4UFFVRlBMRWRCUVVrc1JVRkJSU3hEUVVOa0xFTkJRVU03U1VGRFNpeERRVUZETzBsQlJVUXNTVUZCVnl4UlFVRlJPMUZCUTJwQ0xFOUJRVThzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wbEJSVVFzU1VGQlZ5eFJRVUZSTEVOQlFVTXNTMEZCVlR0UlFVTTFRaXhKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVTTVRaXhEUVVGRE8wbEJSVVFzU1VGQlZ5eHBRa0ZCYVVJc1EwRkJReXhMUVVGVk8xRkJRM0pETEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJRelZDTEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1MwRkJTeXhEUVVGRE8wbEJRemxDTEVOQlFVTTdTVUZGUkN4SlFVRlhMRXRCUVVzN1VVRkRaQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdTVUZETVVJc1EwRkJRenRKUVVWRUxFbEJRVmNzUzBGQlN5eERRVUZETEV0QlFXRTdVVUZETlVJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRGFFWXNRMEZCUXp0SlFVVkVMRWxCUVZjc1kwRkJZeXhEUVVGRExFdEJRV0U3VVVGRGNrTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRPVVVzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8wbEJRM1JETEVOQlFVTTdTVUZGUkRzN1QwRkZSenRKUVVOSUxFbEJRVmNzVFVGQlRUdFJRVU5tTEU5QlFVODdXVUZEVEN4SFFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWenRaUVVOcVJTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnp0WlFVTndSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ6dFpRVU5zUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWenRUUVVOd1JTeERRVUZETzBsQlEwb3NRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzWlVGQlpTeERRVUZETEZGQlFXRTdVVUZEYkVNc1RVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVVXpRaXhQUVVGUExGTkJRVWNzUTBGQlF5eEhRVUZITEVOQlExb3NSVUZCUlN4RFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hGUVVOcVF5eFRRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVTnNReXhEUVVGRE8wbEJRMG9zUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1NVRkJTU3hEUVVGRExFOUJRV2xETEVWQlFVVXNTMEZCWVN4RlFVRkZMRTFCUVdNN1VVRkRNVVVzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4SlFVRkJMRk5CUVVjc1JVRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZGTDBJc1RVRkJUU3hEUVVGRExFZEJRVWNzVTBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1kwRkJZeXhGUVVGRkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0UlFVTTFSQ3hKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITEZOQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeFRRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkZkRVlzVFVGQlRTeERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTm9SaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhsUVVGbExFTkJRVU03VVVGRk4wVXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEzWkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRMllzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVU0xUkN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUXpkRUxFTkJRVU03VVVGRFJpeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMGxCUTNCRUxFTkJRVU03TzBGQmJrZElMSGxDUVc5SFF6dEJRVzVIZVVJc2NVSkJRV01zUjBGQmEwSTdTVUZEZEVRc1ZVRkJWU3hGUVVGRkxFbEJRVWs3U1VGRGFFSXNVVUZCVVN4RlFVRkZMRWRCUVVjN1NVRkRZaXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEdOQlFXTXNSVUZCUlN4SFFVRkhPMGxCUTI1Q0xHVkJRV1VzUlVGQlJTeEhRVUZITzBOQlEzSkNMRU5CUVVNaWZRPT0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./node_modules/@basementuniverse/debug/build/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@basementuniverse/debug/build/index.js ***!
  \*************************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@basementuniverse/utils/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/@basementuniverse/utils/utils.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * @overview A library of useful functions
 * @author Gordon Larrigan
 */

/**
 * Check if two numbers are approximately equal
 * @param {number} a Number a
 * @param {number} b Number b
 * @param {number} [p=Number.EPSILON] The precision value
 * @return {boolean} True if numbers a and b are approximately equal
 */
const floatEquals = (a, b, p = Number.EPSILON) => Math.abs(a - b) < p;

/**
 * Clamp a number between min and max
 * @param {number} a The number to clamp
 * @param {number} [min=0] The minimum value
 * @param {number} [max=1] The maximum value
 * @return {number} A clamped number
 */
const clamp = (a, min = 0, max = 1) => a < min ? min : (a > max ? max : a);

/**
 * Get the fractional part of a number
 * @param {number} a The number from which to get the fractional part
 * @return {number} The fractional part of the number
 */
const frac = a => a >= 0 ? a - Math.floor(a) : a - Math.ceil(a);

/**
 * Do a linear interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} An interpolated value in the interval [a, b]
 */
const lerp = (a, b, i) => a + (b - a) * i;

/**
 * Get the position of i between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolated value in the interval [a, b]
 * @return {number} The position of i between a and b
 */
const unlerp = (a, b, i) => (i - a) / (b - a);

/**
 * Do a bilinear interpolation
 * @param {number} c00 Top-left value
 * @param {number} c10 Top-right value
 * @param {number} c01 Bottom-left value
 * @param {number} c11 Bottom-right value
 * @param {number} ix Interpolation value along x
 * @param {number} iy Interpolation value along y
 * @return {number} A bilinear interpolated value
 */
const blerp = (c00, c10, c01, c11, ix, iy) => lerp(lerp(c00, c10, ix), lerp(c01, c11, ix), iy);

/**
 * Re-map a number i from range a1...a2 to b1...b2
 * @param {number} i The number to re-map
 * @param {number} a1
 * @param {number} a2
 * @param {number} b1
 * @param {number} b2
 * @return {number}
 */
const remap = (i, a1, a2, b1, b2) => b1 + (i - a1) * (b2 - b1) / (a2 - a1);

/**
 * Do a smooth interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value
 * @return {number} An interpolated value in the interval [a, b]
 */
const smoothstep = (a, b, i) => lerp(a, b, 3 * Math.pow(i, 2) - 2 * Math.pow(i, 3));

/**
 * Get an angle in radians
 * @param {number} degrees The angle in degrees
 * @return {number} The angle in radians
 */
const radians = degrees => (Math.PI / 180) * degrees;

/**
 * Get an angle in degrees
 * @param {number} radians The angle in radians
 * @return {number} The angle in degrees
 */
const degrees = radians => (180 / Math.PI) * radians;

/**
 * Get a random float in the interval [min, max)
 * @param {number} min Inclusive min
 * @param {number} max Exclusive max
 * @return {number} A random float in the interval [min, max)
 */
const randomBetween = (min, max) => Math.random() * (max - min) + min;

/**
 * Get a random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A random integer in the interval [min, max]
 */
const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Get a normally-distributed random number
 * @param {number} [mu=0.5] The mean value
 * @param {number} [sigma=0.5] The standard deviation
 * @param {number} [samples=2] The number of samples
 * @return {number} A normally-distributed random number
 */
const cltRandom = (mu = 0.5, sigma = 0.5, samples = 2) => {
  let total = 0;
  for (let i = samples; i--;) {
    total += Math.random();
  }
  return mu + (total - samples / 2) / (samples / 2) * sigma;
};

/**
 * Get a normally-distributed random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A normally-distributed random integer
 */
const cltRandomInt = (min, max) => Math.floor(min + cltRandom(0.5, 0.5, 2) * (max + 1 - min));

/**
 * Return a weighted random integer
 * @param {Array<number>} w An array of weights
 * @return {number} An index from w
 */
const weightedRandom = w => {
  let total = w.reduce((a, i) => a + i, 0), n = 0;
  const r = Math.random() * total;
  while (total > r) {
    total -= w[n++];
  }
  return n - 1;
};

/**
 * An interpolation function
 * @callback interpolationCallback
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} The interpolated value in the interval [a, b]
 */

/**
 * Return an interpolated value from an array
 * @param {Array<number>} a An array of values interpolate
 * @param {number} i A number in the interval [0, 1]
 * @param {interpolationCallback} [f=Math.lerp] The interpolation function to use
 * @return {number} An interpolated value in the interval [min(a), max(a)]
 */
const lerpArray = (a, i, f = lerp) => {
  const s = i * (a.length - 1);
  const p = clamp(Math.trunc(s), 0, a.length - 1);
  return f(a[p] || 0, a[p + 1] || 0, frac(s));
};

/**
 * Get the dot product of two vectors
 * @param {Array<number>} a Vector a
 * @param {Array<number>} b Vector b
 * @return {number} a ∙ b
 */
const dot = (a, b) => a.reduce((n, v, i) => n + v * b[i], 0);

/**
 * Get the factorial of a number
 * @param {number} a
 * @return {number} a!
 */
const factorial = a => {
  let result = 1;
  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  return result;
};

/**
 * Get the number of permutations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nPr
 */
const permutation = (n, r) => factorial(n) / factorial(n - r);

/**
 * Get the number of combinations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nCr
 */
const combination = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

/**
 * A function for generating array values
 * @callback timesCallback
 * @param {number} i The array index
 * @return {*} The array value
 */

/**
 * Return a new array with length n by calling function f(i) on each element
 * @param {timesCallback} f
 * @param {number} n The size of the array
 * @return {Array<*>}
 */
const times = (f, n) => Array(n).fill(0).map((_, i) => f(i));

/**
 * Return an array containing numbers 0->(n - 1)
 * @param {number} n The size of the array
 * @return {Array<number>} An array of integers 0->(n - 1)
 */
const range = n => times(i => i, n);

/**
 * Zip 2 arrays together, i.e. ([1, 2, 3], [a, b, c]) => [[1, a], [2, b], [3, c]]
 * @param {Array<*>} a
 * @param {Array<*>} b
 * @return {Array<Array<*>>}
 */
const zip = (a, b) => a.map((k, i) => [k, b[i]]);

/**
 * Return array[i] with positive and negative wrapping
 * @param {Array<*>} a
 * @param {number} i The positively/negatively wrapped array index
 * @return {*} An element from the array
 */
const at = (a, i) => a[i < 0 ? a.length - (Math.abs(i + 1) % a.length) - 1 : i % a.length];

/**
 * Chop an array into chunks of size n
 * @param {Array<*>} a
 * @param {number} n The chunk size
 * @return {Array<Array<*>>} An array of array chunks
 */
const chunk = (a, n) => times(i => a.slice(i * n, i * n + n), Math.ceil(a.length / n));

/**
 * Randomly shuffle a shallow copy of an array
 * @param {Array<*>} a
 * @return {Array<*>} The shuffled array
 */
const shuffle = a => a.slice().sort(() => Math.random() - 0.5);

if (true) {
  module.exports = {
    floatEquals,
    clamp,
    frac,
    lerp,
    unlerp,
    blerp,
    remap,
    smoothstep,
    radians,
    degrees,
    randomBetween,
    randomIntBetween,
    cltRandom,
    cltRandomInt,
    weightedRandom,
    lerpArray,
    dot,
    factorial,
    permutation,
    combination,
    times,
    range,
    zip,
    at,
    chunk,
    shuffle,
  };
}


/***/ }),

/***/ "./node_modules/@basementuniverse/vec/vec.js":
/*!***************************************************!*\
  !*** ./node_modules/@basementuniverse/vec/vec.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_9135__) => {

const { times, chunk, dot } = __nested_webpack_require_9135__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");

/**
 * @overview A library of useful functions
 * @author Gordon Larrigan
 */

/**
 * A 2d vector
 * @typedef {Object} vec
 * @property {number} x The x component of the vector
 * @property {number} y The y component of the vector
 */

/**
 * Create a new vector
 * @param {number|vec} [x] The x component of the vector, or a vector to copy
 * @param {number} [y] The y component of the vector
 * @return {vec} A new vector
 * @example <caption>Various ways to initialise a vector</caption>
 * let a = vec(3, 2);  // (3, 2)
 * let b = vec(4);     // (4, 4)
 * let c = vec(a);     // (3, 2)
 * let d = vec();      // (0, 0)
 */
const vec = (x, y) => (!x && !y ?
  { x: 0, y: 0 } : (typeof x === 'object' ?
    { x: x.x || 0, y: x.y || 0 } : (y === null || y === undefined ?
      { x: x, y: x } : { x: x, y: y })
  )
);

/**
 * Get the components of a vector as an array
 * @param {vec} a The vector to get components from
 * @return {Array<number>} The vector components as an array
 */
vec.components = a => [a.x, a.y];

/**
 * Return a unit vector (1, 0)
 * @return {vec} A unit vector (1, 0)
 */
vec.ux = () => vec(1, 0);

/**
 * Return a unit vector (0, 1)
 * @return {vec} A unit vector (0, 1)
 */
vec.uy = () => vec(0, 1);

/**
 * Add vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {vec} a + b
 */
vec.add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });

/**
 * Scale a vector
 * @param {vec} a Vector a
 * @param {number} b Scalar b
 * @return {vec} a * b
 */
vec.mul = (a, b) => ({ x: a.x * b, y: a.y * b });

/**
 * Subtract vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {vec} a - b
 */
vec.sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });

/**
 * Get the length of a vector
 * @param {vec} a Vector a
 * @return {number} |a|
 */
vec.len = a => Math.sqrt(a.x * a.x + a.y * a.y);

/**
 * Get the length of a vector using taxicab geometry
 * @param {vec} a Vector a
 * @return {number} |a|
 */
vec.manhattan = a => Math.abs(a.x) + Math.abs(a.y);

/**
 * Normalise a vector
 * @param {vec} a The vector to normalise
 * @return {vec} ^a
 */
vec.nor = a => {
  let len = vec.len(a);
  return len ? { x: a.x / len, y: a.y / len } : vec();
};

/**
 * Get a dot product of vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {number} a ∙ b
 */
vec.dot = (a, b) => a.x * b.x + a.y * b.y;

/**
 * Rotate a vector by r radians
 * @param {vec} a The vector to rotate
 * @param {number} r The angle to rotate by, measured in radians
 * @return {vec} A rotated vector
 */
vec.rot = (a, r) => {
  let s = Math.sin(r),
    c = Math.cos(r);
  return { x: c * a.x - s * a.y, y: s * a.x + c * a.y };
}

/**
 * Check if two vectors are equal
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {boolean} True if vectors a and b are equal, false otherwise
 */
vec.eq = (a, b) => a.x === b.x && a.y === b.y;

/**
 * Get the angle of a vector
 * @param {vec} a Vector a
 * @return {number} The angle of vector a in radians
 */
vec.rad = a => Math.atan2(a.y, a.x);

/**
 * Copy a vector
 * @param {vec} a The vector to copy
 * @return {vec} A copy of vector a
 */
vec.cpy = a => vec(a);

/**
 * A function to call on each component of a vector
 * @callback vectorMapCallback
 * @param {number} value The component value
 * @param {'x' | 'y'} label The component label (x or y)
 * @return {number} The mapped component
 */

/**
 * Call a function on each component of a vector and build a new vector from the results
 * @param {vec} a Vector a
 * @param {vectorMapCallback} f The function to call on each component of the vector
 * @return {vec} Vector a mapped through f
 */
vec.map = (a, f) => ({ x: f(a.x, 'x'), y: f(a.y, 'y') });

/**
 * Convert a vector into a string
 * @param {vec} a The vector to convert
 * @param {string} [s=', '] The separator string
 * @return {string} A string representation of the vector
 */
vec.str = (a, s = ', ') => `${a.x}${s}${a.y}`;

/**
 * A matrix
 * @typedef {Object} mat
 * @property {number} m The number of rows in the matrix
 * @property {number} n The number of columns in the matrix
 * @property {Array<number>} entries The matrix values
 */

/**
 * Create a new matrix
 * @param {number} [m=4] The number of rows
 * @param {number} [n=4] The number of columns
 * @param {Array<number>} [entries=[]] Matrix values in reading order
 * @return {mat} A new matrix
 */
const mat = (m = 4, n = 4, entries = []) => ({
  m, n,
  entries: entries.concat(Array(m * n).fill(0)).slice(0, m * n)
});

/**
 * Get an identity matrix of size n
 * @param {number} n The size of the matrix
 * @return {mat} An identity matrix
 */
mat.identity = n => mat(n, n, Array(n * n).fill(0).map((v, i) => +(Math.floor(i / n) === i % n)));

/**
 * Get an entry from a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @return {number} The value at position (i, j) in matrix a
 */
mat.get = (a, i, j) => a.entries[(j - 1) + (i - 1) * a.n];

/**
 * Set an entry of a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @param {number} v The value to set in matrix a
 */
mat.set = (a, i, j, v) => { a.entries[(j - 1) + (i - 1) * a.n] = v; };

/**
 * Get a row from a matrix as an array
 * @param {mat} a Matrix a
 * @param {number} m The row offset
 * @return {Array<number>} Row m from matrix a
 */
mat.row = (a, m) => {
  const s = (m - 1) * a.n;
  return a.entries.slice(s, s + a.n);
};

/**
 * Get a column from a matrix as an array
 * @param {mat} a Matrix a
 * @param {number} n The column offset
 * @return {Array<number>} Column n from matrix a
 */
mat.col = (a, n) => times(i => mat.get(a, (i + 1), n), a.m);

/**
 * Add matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat} a + b
 */
mat.add = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v + b.entries[i]);

/**
 * Subtract matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat} a - b
 */
mat.sub = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v - b.entries[i]);

/**
 * Multiply matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat|boolean} ab or false if the matrices cannot be multiplied
 */
mat.mul = (a, b) => {
  if (a.n !== b.m) { return false; }
  const result = mat(a.m, b.n);
  for (let i = 1; i <= a.m; i++) {
    for (let j = 1; j <= b.n; j++) {
      mat.set(result, i, j, dot(mat.row(a, i), mat.col(b, j)));
    }
  }
  return result;
};

/**
 * Scale a matrix
 * @param {mat} a Matrix a
 * @param {number} b Scalar b
 * @return {mat} a * b
 */
mat.scale = (a, b) => mat.map(a, v => v * b);

/**
 * Transpose a matrix
 * @param {mat} a The matrix to transpose
 * @return {mat} A transposed matrix
 */
mat.trans = a => mat(a.n, a.m, times(i => mat.col(a, (i + 1)), a.n).flat());

/**
 * Get the minor of a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @return {mat|boolean} The (i, j) minor of matrix a or false if the matrix is not square
 */
mat.minor = (a, i, j) => {
  if (a.m !== a.n) { return false; }
  const entries = [];
  for (let ii = 1; ii <= a.m; ii++) {
    if (ii === i) { continue; }
    for (let jj = 1; jj <= a.n; jj++) {
      if (jj === j) { continue; }
      entries.push(mat.get(a, ii, jj));
    }
  }
  return mat(a.m - 1, a.n - 1, entries);
};

/**
 * Get the determinant of a matrix
 * @param {mat} a Matrix a
 * @return {number|boolean} |a| or false if the matrix is not square
 */
mat.det = a => {
  if (a.m !== a.n) { return false; }
  if (a.m === 1) {
    return a.entries[0];
  }
  if (a.m === 2) {
    return a.entries[0] * a.entries[3] - a.entries[1] * a.entries[2];
  }
  let total = 0, sign = 1;
  for (let j = 1; j <= a.n; j++) {
    total += sign * a.entries[j - 1] * mat.det(mat.minor(a, 1, j));
    sign *= -1;
  }
  return total;
};

/**
 * Normalise a matrix
 * @param {mat} a The matrix to normalise
 * @return {mat|boolean} ^a or false if the matrix is not square
 */
mat.nor = a => {
  if (a.m !== a.n) { return false; }
  const d = mat.det(a);
  return mat.map(a, i => i * d);
};

/**
 * Get the adjugate of a matrix
 * @param {mat} a The matrix from which to get the adjugate
 * @return {mat} The adjugate of a
 */
mat.adj = a => {
  const minors = mat(a.m, a.n);
  for (let i = 1; i <= a.m; i++) {
    for (let j = 1; j <= a.n; j++) {
      mat.set(minors, i, j, mat.det(mat.minor(a, i, j)));
    }
  }
  const cofactors = mat.map(minors, (v, i) => v * (i % 2 ? -1 : 1));
  return mat.trans(cofactors);
};

/**
 * Get the inverse of a matrix
 * @param {mat} a The matrix to invert
 * @return {mat|boolean} a^-1 or false if the matrix has no inverse
 */
mat.inv = a => {
  if (a.m !== a.n) { return false; }
  const d = mat.det(a);
  if (d === 0) { return false; }
  return mat.scale(mat.adj(a), 1 / d);
};

/**
 * Check if two matrices are equal
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {boolean} True if matrices a and b are identical, false otherwise
 */
mat.eq = (a, b) => a.m === b.m && a.n === b.n && mat.str(a) === mat.str(b);

/**
 * Copy a matrix
 * @param {mat} a The matrix to copy
 * @return {mat} A copy of matrix a
 */
mat.cpy = a => mat(a.m, a.n, [...a.entries]);

/**
 * A function to call on each entry of a matrix
 * @callback matrixMapCallback
 * @param {number} value The entry value
 * @param {number} index The entry index
 * @param {Array<number>} entries The array of matrix entries
 * @return {number} The mapped entry
 */

/**
 * Call a function on each entry of a matrix and build a new matrix from the results
 * @param {mat} a Matrix a
 * @param {matrixMapCallback} f The function to call on each entry of the matrix
 * @return {mat} Matrix a mapped through f
 */
mat.map = (a, f) => mat(a.m, a.n, a.entries.map(f));

/**
 * Convert a matrix into a string
 * @param {mat} a The matrix to convert
 * @param {string} [ms=', '] The separator string for columns
 * @param {string} [ns='\n'] The separator string for rows
 * @return {string} A string representation of the matrix
 */
mat.str = (a, ms = ', ', ns = '\n') => chunk(a.entries, a.n).map(r => r.join(ms)).join(ns);

if (true) {
  module.exports = { vec, mat };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_19801__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_19801__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __nested_webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const vec_1 = __nested_webpack_require_19801__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
class Debug {
    constructor(options) {
        this.options = Object.assign({}, Debug.defaultOptions, options !== null && options !== void 0 ? options : {});
        this.values = new Map();
        this.markers = new Map();
    }
    /**
     * Initialise the debug renderer for displaying values and markers
     */
    static initialise(options = {}) {
        if (Debug.instance !== undefined) {
            throw new Error('Debug has already been initialised');
        }
        Debug.instance = new Debug(options);
    }
    static getInstance() {
        if (Debug.instance === undefined) {
            throw new Error('Debug not properly initialised');
        }
        return Debug.instance;
    }
    /**
     * Show a debug value
     */
    static value(label, value, options) {
        const instance = Debug.getInstance();
        instance.values.set(label, Object.assign({ label, value }, instance.options.defaultValue, options));
    }
    /**
     * Show a marker in world or screen space
     */
    static marker(label, value, position, options) {
        const instance = Debug.getInstance();
        instance.markers.set(label, Object.assign({ label, value, position }, instance.options.defaultMarker, options));
    }
    /**
     * Render the debug values and markers onto a canvas
     */
    static draw(context) {
        const instance = Debug.getInstance();
        // Draw world-space markers
        context.save();
        instance.markers.forEach(marker => {
            if (marker.space === 'world') {
                instance.drawMarker(context, marker);
            }
        });
        context.restore();
        // Draw values and screen-space markers
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        let position;
        let leftY = instance.options.margin;
        let rightY = instance.options.margin;
        const lineHeight = (instance.options.lineHeight + instance.options.padding * 2);
        instance.values.forEach(value => {
            var _a, _b, _c, _d;
            switch (value.align) {
                case 'left':
                    position = (0, vec_1.vec)(instance.options.margin, leftY);
                    leftY += lineHeight;
                    break;
                case 'right':
                    position = (0, vec_1.vec)(context.canvas.clientWidth - instance.options.margin, rightY);
                    rightY += lineHeight;
                    break;
            }
            instance.drawLabel(context, (value.showLabel ? `${value.label}: ` : '') + `${value.value}`, position, value.align, (_a = value.padding) !== null && _a !== void 0 ? _a : instance.options.padding, (_b = value.font) !== null && _b !== void 0 ? _b : instance.options.font, (_c = value.foregroundColour) !== null && _c !== void 0 ? _c : instance.options.foregroundColour, (_d = value.backgroundColour) !== null && _d !== void 0 ? _d : instance.options.backgroundColour);
        });
        instance.markers.forEach(marker => {
            if (marker.space === 'screen') {
                instance.drawMarker(context, marker);
            }
        });
        context.restore();
        // Clear values and markers ready for next frame
        instance.values.clear();
        instance.markers.clear();
    }
    drawMarker(context, marker) {
        var _a, _b, _c, _d, _e;
        context.save();
        const position = (_a = marker.position) !== null && _a !== void 0 ? _a : (0, vec_1.vec)();
        if (marker.showLabel || marker.showValue) {
            this.drawLabel(context, (marker.showLabel ? `${marker.label}: ` : '') + (marker.showValue ? `${marker.value}` : ''), vec_1.vec.add(position !== null && position !== void 0 ? position : (0, vec_1.vec)(), marker.labelOffset), 'left', (_b = marker.padding) !== null && _b !== void 0 ? _b : this.options.padding, (_c = marker.font) !== null && _c !== void 0 ? _c : this.options.font, (_d = marker.foregroundColour) !== null && _d !== void 0 ? _d : this.options.foregroundColour, (_e = marker.backgroundColour) !== null && _e !== void 0 ? _e : this.options.backgroundColour);
        }
        if (marker.showMarker) {
            context.lineWidth = 2;
            context.strokeStyle = context.fillStyle = marker.markerColour;
            switch (marker.markerStyle) {
                case 'x':
                    this.drawCross(context, position, marker.markerSize);
                    break;
                case '+':
                    this.drawPlus(context, position, marker.markerSize);
                    break;
                case '.':
                    this.drawDot(context, position, marker.markerSize);
                    break;
            }
        }
        context.restore();
    }
    drawLabel(context, text, position, align, padding, font, foregroundColour, backgroundColour) {
        context.save();
        context.font = font;
        context.textBaseline = 'top';
        const backgroundSize = {
            width: context.measureText(text).width + padding * 2,
            height: this.options.lineHeight + padding * 2,
        };
        const x = align === 'right' ? (position.x - backgroundSize.width) : position.x;
        // Draw background
        context.fillStyle = backgroundColour;
        context.fillRect(x - padding, position.y - padding, backgroundSize.width, backgroundSize.height);
        // Draw text
        context.fillStyle = foregroundColour;
        context.fillText(text, x, position.y);
        context.restore();
    }
    drawCross(context, position, size) {
        context.beginPath();
        const halfSize = size / 2;
        context.moveTo(position.x - halfSize, position.y - halfSize);
        context.lineTo(position.x + halfSize, position.y + halfSize);
        context.moveTo(position.x - halfSize, position.y + halfSize);
        context.lineTo(position.x + halfSize, position.y - halfSize);
        context.stroke();
    }
    drawPlus(context, position, size) {
        context.beginPath();
        const halfSize = size / 2;
        context.moveTo(position.x, position.y - halfSize);
        context.lineTo(position.x, position.y + halfSize);
        context.moveTo(position.x - halfSize, position.y);
        context.lineTo(position.x + halfSize, position.y);
        context.stroke();
    }
    drawDot(context, position, size) {
        context.beginPath();
        context.arc(position.x, position.y, size / 2, 0, Math.PI * 2);
        context.fill();
    }
}
exports["default"] = Debug;
Debug.defaultOptions = {
    margin: 10,
    padding: 4,
    font: '10pt Lucida Console, monospace',
    lineHeight: 12,
    foregroundColour: '#fff',
    backgroundColour: '#333',
    defaultValue: {
        align: 'left',
        showLabel: true,
    },
    defaultMarker: {
        showLabel: true,
        showValue: true,
        showMarker: true,
        markerSize: 6,
        markerStyle: 'x',
        markerColour: '#ccc',
        space: 'world',
        labelOffset: (0, vec_1.vec)(10),
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUE0QztBQXlFNUMsTUFBcUIsS0FBSztJQWdDeEIsWUFBb0IsT0FBK0I7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLE9BQU8sYUFBUCxPQUFPLGNBQVAsT0FBTyxHQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQXNCLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBdUIsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQWlDLEVBQUU7UUFDMUQsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7U0FDdkQ7UUFDRCxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTyxNQUFNLENBQUMsV0FBVztRQUN4QixJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztTQUNuRDtRQUVELE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUNqQixLQUFhLEVBQ2IsS0FBc0IsRUFDdEIsT0FBNkI7UUFFN0IsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXJDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxD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
})();

/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9kZWJ1Zy8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9kZWJ1Zy8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2RlYnVnL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2RlYnVnLy4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvKipcbiAqIEBvdmVydmlldyBBIGxpYnJhcnkgb2YgdXNlZnVsIGZ1bmN0aW9uc1xuICogQGF1dGhvciBHb3Jkb24gTGFycmlnYW5cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gKiBAcGFyYW0ge251bWJlcn0gYSBOdW1iZXIgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgTnVtYmVyIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcD1OdW1iZXIuRVBTSUxPTl0gVGhlIHByZWNpc2lvbiB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBudW1iZXJzIGEgYW5kIGIgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAqL1xuY29uc3QgZmxvYXRFcXVhbHMgPSAoYSwgYiwgcCA9IE51bWJlci5FUFNJTE9OKSA9PiBNYXRoLmFicyhhIC0gYikgPCBwO1xuXG4vKipcbiAqIENsYW1wIGEgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgdG8gY2xhbXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIFRoZSBtaW5pbXVtIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSBUaGUgbWF4aW11bSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBIGNsYW1wZWQgbnVtYmVyXG4gKi9cbmNvbnN0IGNsYW1wID0gKGEsIG1pbiA9IDAsIG1heCA9IDEpID0+IGEgPCBtaW4gPyBtaW4gOiAoYSA+IG1heCA/IG1heCA6IGEpO1xuXG4vKipcbiAqIEdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0IG9mIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBmcmFjdGlvbmFsIHBhcnRcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGZyYWN0aW9uYWwgcGFydCBvZiB0aGUgbnVtYmVyXG4gKi9cbmNvbnN0IGZyYWMgPSBhID0+IGEgPj0gMCA/IGEgLSBNYXRoLmZsb29yKGEpIDogYSAtIE1hdGguY2VpbChhKTtcblxuLyoqXG4gKiBEbyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5jb25zdCBsZXJwID0gKGEsIGIsIGkpID0+IGEgKyAoYiAtIGEpICogaTtcblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxuICovXG5jb25zdCB1bmxlcnAgPSAoYSwgYiwgaSkgPT4gKGkgLSBhKSAvIChiIC0gYSk7XG5cbi8qKlxuICogRG8gYSBiaWxpbmVhciBpbnRlcnBvbGF0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gYzAwIFRvcC1sZWZ0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzEwIFRvcC1yaWdodCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMwMSBCb3R0b20tbGVmdCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMxMSBCb3R0b20tcmlnaHQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeCBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHhcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeSBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHlcbiAqIEByZXR1cm4ge251bWJlcn0gQSBiaWxpbmVhciBpbnRlcnBvbGF0ZWQgdmFsdWVcbiAqL1xuY29uc3QgYmxlcnAgPSAoYzAwLCBjMTAsIGMwMSwgYzExLCBpeCwgaXkpID0+IGxlcnAobGVycChjMDAsIGMxMCwgaXgpLCBsZXJwKGMwMSwgYzExLCBpeCksIGl5KTtcblxuLyoqXG4gKiBSZS1tYXAgYSBudW1iZXIgaSBmcm9tIHJhbmdlIGExLi4uYTIgdG8gYjEuLi5iMlxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIG51bWJlciB0byByZS1tYXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMVxuICogQHBhcmFtIHtudW1iZXJ9IGEyXG4gKiBAcGFyYW0ge251bWJlcn0gYjFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5jb25zdCByZW1hcCA9IChpLCBhMSwgYTIsIGIxLCBiMikgPT4gYjEgKyAoaSAtIGExKSAqIChiMiAtIGIxKSAvIChhMiAtIGExKTtcblxuLyoqXG4gKiBEbyBhIHNtb290aCBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cbmNvbnN0IHNtb290aHN0ZXAgPSAoYSwgYiwgaSkgPT4gbGVycChhLCBiLCAzICogTWF0aC5wb3coaSwgMikgLSAyICogTWF0aC5wb3coaSwgMykpO1xuXG4vKipcbiAqIEdldCBhbiBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlcyBUaGUgYW5nbGUgaW4gZGVncmVlc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICovXG5jb25zdCByYWRpYW5zID0gZGVncmVlcyA9PiAoTWF0aC5QSSAvIDE4MCkgKiBkZWdyZWVzO1xuXG4vKipcbiAqIEdldCBhbiBhbmdsZSBpbiBkZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFucyBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gZGVncmVlc1xuICovXG5jb25zdCBkZWdyZWVzID0gcmFkaWFucyA9PiAoMTgwIC8gTWF0aC5QSSkgKiByYWRpYW5zO1xuXG4vKipcbiAqIEdldCBhIHJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4KVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEV4Y2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcbiAqL1xuY29uc3QgcmFuZG9tQmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuXG4vKipcbiAqIEdldCBhIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKi9cbmNvbnN0IHJhbmRvbUludEJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cbi8qKlxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IFttdT0wLjVdIFRoZSBtZWFuIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpZ21hPTAuNV0gVGhlIHN0YW5kYXJkIGRldmlhdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IFtzYW1wbGVzPTJdIFRoZSBudW1iZXIgb2Ygc2FtcGxlc1xuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcbiAqL1xuY29uc3QgY2x0UmFuZG9tID0gKG11ID0gMC41LCBzaWdtYSA9IDAuNSwgc2FtcGxlcyA9IDIpID0+IHtcbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChsZXQgaSA9IHNhbXBsZXM7IGktLTspIHtcbiAgICB0b3RhbCArPSBNYXRoLnJhbmRvbSgpO1xuICB9XG4gIHJldHVybiBtdSArICh0b3RhbCAtIHNhbXBsZXMgLyAyKSAvIChzYW1wbGVzIC8gMikgKiBzaWdtYTtcbn07XG5cbi8qKlxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBJbmNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXJcbiAqL1xuY29uc3QgY2x0UmFuZG9tSW50ID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKG1pbiArIGNsdFJhbmRvbSgwLjUsIDAuNSwgMikgKiAobWF4ICsgMSAtIG1pbikpO1xuXG4vKipcbiAqIFJldHVybiBhIHdlaWdodGVkIHJhbmRvbSBpbnRlZ2VyXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHcgQW4gYXJyYXkgb2Ygd2VpZ2h0c1xuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbmRleCBmcm9tIHdcbiAqL1xuY29uc3Qgd2VpZ2h0ZWRSYW5kb20gPSB3ID0+IHtcbiAgbGV0IHRvdGFsID0gdy5yZWR1Y2UoKGEsIGkpID0+IGEgKyBpLCAwKSwgbiA9IDA7XG4gIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogdG90YWw7XG4gIHdoaWxlICh0b3RhbCA+IHIpIHtcbiAgICB0b3RhbCAtPSB3W24rK107XG4gIH1cbiAgcmV0dXJuIG4gLSAxO1xufTtcblxuLyoqXG4gKiBBbiBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uXG4gKiBAY2FsbGJhY2sgaW50ZXJwb2xhdGlvbkNhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWUsIHNob3VsZCBiZSBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5cbi8qKlxuICogUmV0dXJuIGFuIGludGVycG9sYXRlZCB2YWx1ZSBmcm9tIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGEgQW4gYXJyYXkgb2YgdmFsdWVzIGludGVycG9sYXRlXG4gKiBAcGFyYW0ge251bWJlcn0gaSBBIG51bWJlciBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcGFyYW0ge2ludGVycG9sYXRpb25DYWxsYmFja30gW2Y9TWF0aC5sZXJwXSBUaGUgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiB0byB1c2VcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbbWluKGEpLCBtYXgoYSldXG4gKi9cbmNvbnN0IGxlcnBBcnJheSA9IChhLCBpLCBmID0gbGVycCkgPT4ge1xuICBjb25zdCBzID0gaSAqIChhLmxlbmd0aCAtIDEpO1xuICBjb25zdCBwID0gY2xhbXAoTWF0aC50cnVuYyhzKSwgMCwgYS5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIGYoYVtwXSB8fCAwLCBhW3AgKyAxXSB8fCAwLCBmcmFjKHMpKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjdG9yc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge251bWJlcn0gYSDiiJkgYlxuICovXG5jb25zdCBkb3QgPSAoYSwgYikgPT4gYS5yZWR1Y2UoKG4sIHYsIGkpID0+IG4gKyB2ICogYltpXSwgMCk7XG5cbi8qKlxuICogR2V0IHRoZSBmYWN0b3JpYWwgb2YgYSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEhXG4gKi9cbmNvbnN0IGZhY3RvcmlhbCA9IGEgPT4ge1xuICBsZXQgcmVzdWx0ID0gMTtcbiAgZm9yIChsZXQgaSA9IDI7IGkgPD0gYTsgaSsrKSB7XG4gICAgcmVzdWx0ICo9IGk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBudW1iZXIgb2YgcGVybXV0YXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHBhcmFtIHtudW1iZXJ9IHJcbiAqIEByZXR1cm4ge251bWJlcn0gblByXG4gKi9cbmNvbnN0IHBlcm11dGF0aW9uID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIGZhY3RvcmlhbChuIC0gcik7XG5cbi8qKlxuICogR2V0IHRoZSBudW1iZXIgb2YgY29tYmluYXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHBhcmFtIHtudW1iZXJ9IHJcbiAqIEByZXR1cm4ge251bWJlcn0gbkNyXG4gKi9cbmNvbnN0IGNvbWJpbmF0aW9uID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIChmYWN0b3JpYWwocikgKiBmYWN0b3JpYWwobiAtIHIpKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIGFycmF5IHZhbHVlc1xuICogQGNhbGxiYWNrIHRpbWVzQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBhcnJheSBpbmRleFxuICogQHJldHVybiB7Kn0gVGhlIGFycmF5IHZhbHVlXG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBsZW5ndGggbiBieSBjYWxsaW5nIGZ1bmN0aW9uIGYoaSkgb24gZWFjaCBlbGVtZW50XG4gKiBAcGFyYW0ge3RpbWVzQ2FsbGJhY2t9IGZcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXk8Kj59XG4gKi9cbmNvbnN0IHRpbWVzID0gKGYsIG4pID0+IEFycmF5KG4pLmZpbGwoMCkubWFwKChfLCBpKSA9PiBmKGkpKTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyBudW1iZXJzIDAtPihuIC0gMSlcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gQW4gYXJyYXkgb2YgaW50ZWdlcnMgMC0+KG4gLSAxKVxuICovXG5jb25zdCByYW5nZSA9IG4gPT4gdGltZXMoaSA9PiBpLCBuKTtcblxuLyoqXG4gKiBaaXAgMiBhcnJheXMgdG9nZXRoZXIsIGkuZS4gKFsxLCAyLCAzXSwgW2EsIGIsIGNdKSA9PiBbWzEsIGFdLCBbMiwgYl0sIFszLCBjXV1cbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn1cbiAqL1xuY29uc3QgemlwID0gKGEsIGIpID0+IGEubWFwKChrLCBpKSA9PiBbaywgYltpXV0pO1xuXG4vKipcbiAqIFJldHVybiBhcnJheVtpXSB3aXRoIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB3cmFwcGluZ1xuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHBvc2l0aXZlbHkvbmVnYXRpdmVseSB3cmFwcGVkIGFycmF5IGluZGV4XG4gKiBAcmV0dXJuIHsqfSBBbiBlbGVtZW50IGZyb20gdGhlIGFycmF5XG4gKi9cbmNvbnN0IGF0ID0gKGEsIGkpID0+IGFbaSA8IDAgPyBhLmxlbmd0aCAtIChNYXRoLmFicyhpICsgMSkgJSBhLmxlbmd0aCkgLSAxIDogaSAlIGEubGVuZ3RoXTtcblxuLyoqXG4gKiBDaG9wIGFuIGFycmF5IGludG8gY2h1bmtzIG9mIHNpemUgblxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNodW5rIHNpemVcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgYXJyYXkgY2h1bmtzXG4gKi9cbmNvbnN0IGNodW5rID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gYS5zbGljZShpICogbiwgaSAqIG4gKyBuKSwgTWF0aC5jZWlsKGEubGVuZ3RoIC8gbikpO1xuXG4vKipcbiAqIFJhbmRvbWx5IHNodWZmbGUgYSBzaGFsbG93IGNvcHkgb2YgYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEByZXR1cm4ge0FycmF5PCo+fSBUaGUgc2h1ZmZsZWQgYXJyYXlcbiAqL1xuY29uc3Qgc2h1ZmZsZSA9IGEgPT4gYS5zbGljZSgpLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmbG9hdEVxdWFscyxcbiAgICBjbGFtcCxcbiAgICBmcmFjLFxuICAgIGxlcnAsXG4gICAgdW5sZXJwLFxuICAgIGJsZXJwLFxuICAgIHJlbWFwLFxuICAgIHNtb290aHN0ZXAsXG4gICAgcmFkaWFucyxcbiAgICBkZWdyZWVzLFxuICAgIHJhbmRvbUJldHdlZW4sXG4gICAgcmFuZG9tSW50QmV0d2VlbixcbiAgICBjbHRSYW5kb20sXG4gICAgY2x0UmFuZG9tSW50LFxuICAgIHdlaWdodGVkUmFuZG9tLFxuICAgIGxlcnBBcnJheSxcbiAgICBkb3QsXG4gICAgZmFjdG9yaWFsLFxuICAgIHBlcm11dGF0aW9uLFxuICAgIGNvbWJpbmF0aW9uLFxuICAgIHRpbWVzLFxuICAgIHJhbmdlLFxuICAgIHppcCxcbiAgICBhdCxcbiAgICBjaHVuayxcbiAgICBzaHVmZmxlLFxuICB9O1xufVxuIiwiY29uc3QgeyB0aW1lcywgY2h1bmssIGRvdCB9ID0gcmVxdWlyZSgnQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMnKTtcblxuLyoqXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXG4gKi9cblxuLyoqXG4gKiBBIDJkIHZlY3RvclxuICogQHR5cGVkZWYge09iamVjdH0gdmVjXG4gKiBAcHJvcGVydHkge251bWJlcn0geCBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHkgVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfHZlY30gW3hdIFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yLCBvciBhIHZlY3RvciB0byBjb3B5XG4gKiBAcGFyYW0ge251bWJlcn0gW3ldIFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWN9IEEgbmV3IHZlY3RvclxuICogQGV4YW1wbGUgPGNhcHRpb24+VmFyaW91cyB3YXlzIHRvIGluaXRpYWxpc2UgYSB2ZWN0b3I8L2NhcHRpb24+XG4gKiBsZXQgYSA9IHZlYygzLCAyKTsgIC8vICgzLCAyKVxuICogbGV0IGIgPSB2ZWMoNCk7ICAgICAvLyAoNCwgNClcbiAqIGxldCBjID0gdmVjKGEpOyAgICAgLy8gKDMsIDIpXG4gKiBsZXQgZCA9IHZlYygpOyAgICAgIC8vICgwLCAwKVxuICovXG5jb25zdCB2ZWMgPSAoeCwgeSkgPT4gKCF4ICYmICF5ID9cbiAgeyB4OiAwLCB5OiAwIH0gOiAodHlwZW9mIHggPT09ICdvYmplY3QnID9cbiAgICB7IHg6IHgueCB8fCAwLCB5OiB4LnkgfHwgMCB9IDogKHkgPT09IG51bGwgfHwgeSA9PT0gdW5kZWZpbmVkID9cbiAgICAgIHsgeDogeCwgeTogeCB9IDogeyB4OiB4LCB5OiB5IH0pXG4gIClcbik7XG5cbi8qKlxuICogR2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjdG9yIGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGdldCBjb21wb25lbnRzIGZyb21cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRoZSB2ZWN0b3IgY29tcG9uZW50cyBhcyBhbiBhcnJheVxuICovXG52ZWMuY29tcG9uZW50cyA9IGEgPT4gW2EueCwgYS55XTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMSwgMClcbiAqIEByZXR1cm4ge3ZlY30gQSB1bml0IHZlY3RvciAoMSwgMClcbiAqL1xudmVjLnV4ID0gKCkgPT4gdmVjKDEsIDApO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgwLCAxKVxuICogQHJldHVybiB7dmVjfSBBIHVuaXQgdmVjdG9yICgwLCAxKVxuICovXG52ZWMudXkgPSAoKSA9PiB2ZWMoMCwgMSk7XG5cbi8qKlxuICogQWRkIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7dmVjfSBhICsgYlxuICovXG52ZWMuYWRkID0gKGEsIGIpID0+ICh7IHg6IGEueCArIGIueCwgeTogYS55ICsgYi55IH0pO1xuXG4vKipcbiAqIFNjYWxlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlY30gYSAqIGJcbiAqL1xudmVjLm11bCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKiBiLCB5OiBhLnkgKiBiIH0pO1xuXG4vKipcbiAqIFN1YnRyYWN0IHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7dmVjfSBhIC0gYlxuICovXG52ZWMuc3ViID0gKGEsIGIpID0+ICh7IHg6IGEueCAtIGIueCwgeTogYS55IC0gYi55IH0pO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjLmxlbiA9IGEgPT4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSk7XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgdXNpbmcgdGF4aWNhYiBnZW9tZXRyeVxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYy5tYW5oYXR0YW4gPSBhID0+IE1hdGguYWJzKGEueCkgKyBNYXRoLmFicyhhLnkpO1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBub3JtYWxpc2VcbiAqIEByZXR1cm4ge3ZlY30gXmFcbiAqL1xudmVjLm5vciA9IGEgPT4ge1xuICBsZXQgbGVuID0gdmVjLmxlbihhKTtcbiAgcmV0dXJuIGxlbiA/IHsgeDogYS54IC8gbGVuLCB5OiBhLnkgLyBsZW4gfSA6IHZlYygpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBkb3QgcHJvZHVjdCBvZiB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge251bWJlcn0gYSDiiJkgYlxuICovXG52ZWMuZG90ID0gKGEsIGIpID0+IGEueCAqIGIueCArIGEueSAqIGIueTtcblxuLyoqXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIGFuZ2xlIHRvIHJvdGF0ZSBieSwgbWVhc3VyZWQgaW4gcmFkaWFuc1xuICogQHJldHVybiB7dmVjfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYy5yb3QgPSAoYSwgcikgPT4ge1xuICBsZXQgcyA9IE1hdGguc2luKHIpLFxuICAgIGMgPSBNYXRoLmNvcyhyKTtcbiAgcmV0dXJuIHsgeDogYyAqIGEueCAtIHMgKiBhLnksIHk6IHMgKiBhLnggKyBjICogYS55IH07XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZlY3RvcnMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmVjdG9ycyBhIGFuZCBiIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbnZlYy5lcSA9IChhLCBiKSA9PiBhLnggPT09IGIueCAmJiBhLnkgPT09IGIueTtcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgb2YgdmVjdG9yIGEgaW4gcmFkaWFuc1xuICovXG52ZWMucmFkID0gYSA9PiBNYXRoLmF0YW4yKGEueSwgYS54KTtcblxuLyoqXG4gKiBDb3B5IGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGNvcHlcbiAqIEByZXR1cm4ge3ZlY30gQSBjb3B5IG9mIHZlY3RvciBhXG4gKi9cbnZlYy5jcHkgPSBhID0+IHZlYyhhKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3JcbiAqIEBjYWxsYmFjayB2ZWN0b3JNYXBDYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBjb21wb25lbnQgdmFsdWVcbiAqIEBwYXJhbSB7J3gnIHwgJ3knfSBsYWJlbCBUaGUgY29tcG9uZW50IGxhYmVsICh4IG9yIHkpXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgY29tcG9uZW50XG4gKi9cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3IgYW5kIGJ1aWxkIGEgbmV3IHZlY3RvciBmcm9tIHRoZSByZXN1bHRzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN0b3JNYXBDYWxsYmFja30gZiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWN9IFZlY3RvciBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xudmVjLm1hcCA9IChhLCBmKSA9PiAoeyB4OiBmKGEueCwgJ3gnKSwgeTogZihhLnksICd5JykgfSk7XG5cbi8qKlxuICogQ29udmVydCBhIHZlY3RvciBpbnRvIGEgc3RyaW5nXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbnZlYy5zdHIgPSAoYSwgcyA9ICcsICcpID0+IGAke2EueH0ke3N9JHthLnl9YDtcblxuLyoqXG4gKiBBIG1hdHJpeFxuICogQHR5cGVkZWYge09iamVjdH0gbWF0XG4gKiBAcHJvcGVydHkge251bWJlcn0gbSBUaGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIG1hdHJpeFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgbWF0cml4IHZhbHVlc1xuICovXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1hdHJpeFxuICogQHBhcmFtIHtudW1iZXJ9IFttPTRdIFRoZSBudW1iZXIgb2Ygcm93c1xuICogQHBhcmFtIHtudW1iZXJ9IFtuPTRdIFRoZSBudW1iZXIgb2YgY29sdW1uc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbZW50cmllcz1bXV0gTWF0cml4IHZhbHVlcyBpbiByZWFkaW5nIG9yZGVyXG4gKiBAcmV0dXJuIHttYXR9IEEgbmV3IG1hdHJpeFxuICovXG5jb25zdCBtYXQgPSAobSA9IDQsIG4gPSA0LCBlbnRyaWVzID0gW10pID0+ICh7XG4gIG0sIG4sXG4gIGVudHJpZXM6IGVudHJpZXMuY29uY2F0KEFycmF5KG0gKiBuKS5maWxsKDApKS5zbGljZSgwLCBtICogbilcbn0pO1xuXG4vKipcbiAqIEdldCBhbiBpZGVudGl0eSBtYXRyaXggb2Ygc2l6ZSBuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJuIHttYXR9IEFuIGlkZW50aXR5IG1hdHJpeFxuICovXG5tYXQuaWRlbnRpdHkgPSBuID0+IG1hdChuLCBuLCBBcnJheShuICogbikuZmlsbCgwKS5tYXAoKHYsIGkpID0+ICsoTWF0aC5mbG9vcihpIC8gbikgPT09IGkgJSBuKSkpO1xuXG4vKipcbiAqIEdldCBhbiBlbnRyeSBmcm9tIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSB2YWx1ZSBhdCBwb3NpdGlvbiAoaSwgaikgaW4gbWF0cml4IGFcbiAqL1xubWF0LmdldCA9IChhLCBpLCBqKSA9PiBhLmVudHJpZXNbKGogLSAxKSArIChpIC0gMSkgKiBhLm5dO1xuXG4vKipcbiAqIFNldCBhbiBlbnRyeSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IHYgVGhlIHZhbHVlIHRvIHNldCBpbiBtYXRyaXggYVxuICovXG5tYXQuc2V0ID0gKGEsIGksIGosIHYpID0+IHsgYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXSA9IHY7IH07XG5cbi8qKlxuICogR2V0IGEgcm93IGZyb20gYSBtYXRyaXggYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gbSBUaGUgcm93IG9mZnNldFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gUm93IG0gZnJvbSBtYXRyaXggYVxuICovXG5tYXQucm93ID0gKGEsIG0pID0+IHtcbiAgY29uc3QgcyA9IChtIC0gMSkgKiBhLm47XG4gIHJldHVybiBhLmVudHJpZXMuc2xpY2UocywgcyArIGEubik7XG59O1xuXG4vKipcbiAqIEdldCBhIGNvbHVtbiBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IENvbHVtbiBuIGZyb20gbWF0cml4IGFcbiAqL1xubWF0LmNvbCA9IChhLCBuKSA9PiB0aW1lcyhpID0+IG1hdC5nZXQoYSwgKGkgKyAxKSwgbiksIGEubSk7XG5cbi8qKlxuICogQWRkIG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdH0gYSArIGJcbiAqL1xubWF0LmFkZCA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQubWFwKGEsICh2LCBpKSA9PiB2ICsgYi5lbnRyaWVzW2ldKTtcblxuLyoqXG4gKiBTdWJ0cmFjdCBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR9IGEgLSBiXG4gKi9cbm1hdC5zdWIgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiAtIGIuZW50cmllc1tpXSk7XG5cbi8qKlxuICogTXVsdGlwbHkgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IGFiIG9yIGZhbHNlIGlmIHRoZSBtYXRyaWNlcyBjYW5ub3QgYmUgbXVsdGlwbGllZFxuICovXG5tYXQubXVsID0gKGEsIGIpID0+IHtcbiAgaWYgKGEubiAhPT0gYi5tKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCByZXN1bHQgPSBtYXQoYS5tLCBiLm4pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGIubjsgaisrKSB7XG4gICAgICBtYXQuc2V0KHJlc3VsdCwgaSwgaiwgZG90KG1hdC5yb3coYSwgaSksIG1hdC5jb2woYiwgaikpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogU2NhbGUgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxuICogQHJldHVybiB7bWF0fSBhICogYlxuICovXG5tYXQuc2NhbGUgPSAoYSwgYikgPT4gbWF0Lm1hcChhLCB2ID0+IHYgKiBiKTtcblxuLyoqXG4gKiBUcmFuc3Bvc2UgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gdHJhbnNwb3NlXG4gKiBAcmV0dXJuIHttYXR9IEEgdHJhbnNwb3NlZCBtYXRyaXhcbiAqL1xubWF0LnRyYW5zID0gYSA9PiBtYXQoYS5uLCBhLm0sIHRpbWVzKGkgPT4gbWF0LmNvbChhLCAoaSArIDEpKSwgYS5uKS5mbGF0KCkpO1xuXG4vKipcbiAqIEdldCB0aGUgbWlub3Igb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBUaGUgKGksIGopIG1pbm9yIG9mIG1hdHJpeCBhIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubWlub3IgPSAoYSwgaSwgaikgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgZm9yIChsZXQgaWkgPSAxOyBpaSA8PSBhLm07IGlpKyspIHtcbiAgICBpZiAoaWkgPT09IGkpIHsgY29udGludWU7IH1cbiAgICBmb3IgKGxldCBqaiA9IDE7IGpqIDw9IGEubjsgamorKykge1xuICAgICAgaWYgKGpqID09PSBqKSB7IGNvbnRpbnVlOyB9XG4gICAgICBlbnRyaWVzLnB1c2gobWF0LmdldChhLCBpaSwgamopKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdChhLm0gLSAxLCBhLm4gLSAxLCBlbnRyaWVzKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEByZXR1cm4ge251bWJlcnxib29sZWFufSB8YXwgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5kZXQgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYS5tID09PSAxKSB7XG4gICAgcmV0dXJuIGEuZW50cmllc1swXTtcbiAgfVxuICBpZiAoYS5tID09PSAyKSB7XG4gICAgcmV0dXJuIGEuZW50cmllc1swXSAqIGEuZW50cmllc1szXSAtIGEuZW50cmllc1sxXSAqIGEuZW50cmllc1syXTtcbiAgfVxuICBsZXQgdG90YWwgPSAwLCBzaWduID0gMTtcbiAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcbiAgICB0b3RhbCArPSBzaWduICogYS5lbnRyaWVzW2ogLSAxXSAqIG1hdC5kZXQobWF0Lm1pbm9yKGEsIDEsIGopKTtcbiAgICBzaWduICo9IC0xO1xuICB9XG4gIHJldHVybiB0b3RhbDtcbn07XG5cbi8qKlxuICogTm9ybWFsaXNlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIG5vcm1hbGlzZVxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IF5hIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubm9yID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XG4gIHJldHVybiBtYXQubWFwKGEsIGkgPT4gaSAqIGQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGFkanVnYXRlIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBhZGp1Z2F0ZVxuICogQHJldHVybiB7bWF0fSBUaGUgYWRqdWdhdGUgb2YgYVxuICovXG5tYXQuYWRqID0gYSA9PiB7XG4gIGNvbnN0IG1pbm9ycyA9IG1hdChhLm0sIGEubik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcbiAgICAgIG1hdC5zZXQobWlub3JzLCBpLCBqLCBtYXQuZGV0KG1hdC5taW5vcihhLCBpLCBqKSkpO1xuICAgIH1cbiAgfVxuICBjb25zdCBjb2ZhY3RvcnMgPSBtYXQubWFwKG1pbm9ycywgKHYsIGkpID0+IHYgKiAoaSAlIDIgPyAtMSA6IDEpKTtcbiAgcmV0dXJuIG1hdC50cmFucyhjb2ZhY3RvcnMpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGludmVyc2Ugb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gaW52ZXJ0XG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gYV4tMSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGhhcyBubyBpbnZlcnNlXG4gKi9cbm1hdC5pbnYgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBkID0gbWF0LmRldChhKTtcbiAgaWYgKGQgPT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG4gIHJldHVybiBtYXQuc2NhbGUobWF0LmFkaihhKSwgMSAvIGQpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbWF0cmljZXMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbWF0cmljZXMgYSBhbmQgYiBhcmUgaWRlbnRpY2FsLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xubWF0LmVxID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5zdHIoYSkgPT09IG1hdC5zdHIoYik7XG5cbi8qKlxuICogQ29weSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb3B5XG4gKiBAcmV0dXJuIHttYXR9IEEgY29weSBvZiBtYXRyaXggYVxuICovXG5tYXQuY3B5ID0gYSA9PiBtYXQoYS5tLCBhLm4sIFsuLi5hLmVudHJpZXNdKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeFxuICogQGNhbGxiYWNrIG1hdHJpeE1hcENhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGVudHJ5IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGVudHJ5IGluZGV4XG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIGFycmF5IG9mIG1hdHJpeCBlbnRyaWVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgZW50cnlcbiAqL1xuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGVudHJ5IG9mIGEgbWF0cml4IGFuZCBidWlsZCBhIG5ldyBtYXRyaXggZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0cml4TWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJuIHttYXR9IE1hdHJpeCBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xubWF0Lm1hcCA9IChhLCBmKSA9PiBtYXQoYS5tLCBhLm4sIGEuZW50cmllcy5tYXAoZikpO1xuXG4vKipcbiAqIENvbnZlcnQgYSBtYXRyaXggaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW21zPScsICddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciBjb2x1bW5zXG4gKiBAcGFyYW0ge3N0cmluZ30gW25zPSdcXG4nXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3Igcm93c1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbm1hdC5zdHIgPSAoYSwgbXMgPSAnLCAnLCBucyA9ICdcXG4nKSA9PiBjaHVuayhhLmVudHJpZXMsIGEubikubWFwKHIgPT4gci5qb2luKG1zKSkuam9pbihucyk7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHsgdmVjLCBtYXQgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZlY18xID0gcmVxdWlyZShcIkBiYXNlbWVudHVuaXZlcnNlL3ZlY1wiKTtcbmNsYXNzIERlYnVnIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIERlYnVnLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fSk7XG4gICAgICAgIHRoaXMudmFsdWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm1hcmtlcnMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2UgdGhlIGRlYnVnIHJlbmRlcmVyIGZvciBkaXNwbGF5aW5nIHZhbHVlcyBhbmQgbWFya2Vyc1xuICAgICAqL1xuICAgIHN0YXRpYyBpbml0aWFsaXNlKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAoRGVidWcuaW5zdGFuY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEZWJ1ZyBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpc2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgRGVidWcuaW5zdGFuY2UgPSBuZXcgRGVidWcob3B0aW9ucyk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKERlYnVnLmluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGVidWcgbm90IHByb3Blcmx5IGluaXRpYWxpc2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIERlYnVnLmluc3RhbmNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaG93IGEgZGVidWcgdmFsdWVcbiAgICAgKi9cbiAgICBzdGF0aWMgdmFsdWUobGFiZWwsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gRGVidWcuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgaW5zdGFuY2UudmFsdWVzLnNldChsYWJlbCwgT2JqZWN0LmFzc2lnbih7IGxhYmVsLCB2YWx1ZSB9LCBpbnN0YW5jZS5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgb3B0aW9ucykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaG93IGEgbWFya2VyIGluIHdvcmxkIG9yIHNjcmVlbiBzcGFjZVxuICAgICAqL1xuICAgIHN0YXRpYyBtYXJrZXIobGFiZWwsIHZhbHVlLCBwb3NpdGlvbiwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IERlYnVnLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGluc3RhbmNlLm1hcmtlcnMuc2V0KGxhYmVsLCBPYmplY3QuYXNzaWduKHsgbGFiZWwsIHZhbHVlLCBwb3NpdGlvbiB9LCBpbnN0YW5jZS5vcHRpb25zLmRlZmF1bHRNYXJrZXIsIG9wdGlvbnMpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBkZWJ1ZyB2YWx1ZXMgYW5kIG1hcmtlcnMgb250byBhIGNhbnZhc1xuICAgICAqL1xuICAgIHN0YXRpYyBkcmF3KGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBEZWJ1Zy5nZXRJbnN0YW5jZSgpO1xuICAgICAgICAvLyBEcmF3IHdvcmxkLXNwYWNlIG1hcmtlcnNcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgIGluc3RhbmNlLm1hcmtlcnMuZm9yRWFjaChtYXJrZXIgPT4ge1xuICAgICAgICAgICAgaWYgKG1hcmtlci5zcGFjZSA9PT0gJ3dvcmxkJykge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLmRyYXdNYXJrZXIoY29udGV4dCwgbWFya2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICAvLyBEcmF3IHZhbHVlcyBhbmQgc2NyZWVuLXNwYWNlIG1hcmtlcnNcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICBsZXQgcG9zaXRpb247XG4gICAgICAgIGxldCBsZWZ0WSA9IGluc3RhbmNlLm9wdGlvbnMubWFyZ2luO1xuICAgICAgICBsZXQgcmlnaHRZID0gaW5zdGFuY2Uub3B0aW9ucy5tYXJnaW47XG4gICAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSAoaW5zdGFuY2Uub3B0aW9ucy5saW5lSGVpZ2h0ICsgaW5zdGFuY2Uub3B0aW9ucy5wYWRkaW5nICogMik7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuYWxpZ24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSAoMCwgdmVjXzEudmVjKShpbnN0YW5jZS5vcHRpb25zLm1hcmdpbiwgbGVmdFkpO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0WSArPSBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gKDAsIHZlY18xLnZlYykoY29udGV4dC5jYW52YXMuY2xpZW50V2lkdGggLSBpbnN0YW5jZS5vcHRpb25zLm1hcmdpbiwgcmlnaHRZKTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRZICs9IGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5zdGFuY2UuZHJhd0xhYmVsKGNvbnRleHQsICh2YWx1ZS5zaG93TGFiZWwgPyBgJHt2YWx1ZS5sYWJlbH06IGAgOiAnJykgKyBgJHt2YWx1ZS52YWx1ZX1gLCBwb3NpdGlvbiwgdmFsdWUuYWxpZ24sIChfYSA9IHZhbHVlLnBhZGRpbmcpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGluc3RhbmNlLm9wdGlvbnMucGFkZGluZywgKF9iID0gdmFsdWUuZm9udCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogaW5zdGFuY2Uub3B0aW9ucy5mb250LCAoX2MgPSB2YWx1ZS5mb3JlZ3JvdW5kQ29sb3VyKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBpbnN0YW5jZS5vcHRpb25zLmZvcmVncm91bmRDb2xvdXIsIChfZCA9IHZhbHVlLmJhY2tncm91bmRDb2xvdXIpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IGluc3RhbmNlLm9wdGlvbnMuYmFja2dyb3VuZENvbG91cik7XG4gICAgICAgIH0pO1xuICAgICAgICBpbnN0YW5jZS5tYXJrZXJzLmZvckVhY2gobWFya2VyID0+IHtcbiAgICAgICAgICAgIGlmIChtYXJrZXIuc3BhY2UgPT09ICdzY3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuZHJhd01hcmtlcihjb250ZXh0LCBtYXJrZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIC8vIENsZWFyIHZhbHVlcyBhbmQgbWFya2VycyByZWFkeSBmb3IgbmV4dCBmcmFtZVxuICAgICAgICBpbnN0YW5jZS52YWx1ZXMuY2xlYXIoKTtcbiAgICAgICAgaW5zdGFuY2UubWFya2Vycy5jbGVhcigpO1xuICAgIH1cbiAgICBkcmF3TWFya2VyKGNvbnRleHQsIG1hcmtlcikge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSAoX2EgPSBtYXJrZXIucG9zaXRpb24pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICgwLCB2ZWNfMS52ZWMpKCk7XG4gICAgICAgIGlmIChtYXJrZXIuc2hvd0xhYmVsIHx8IG1hcmtlci5zaG93VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0xhYmVsKGNvbnRleHQsIChtYXJrZXIuc2hvd0xhYmVsID8gYCR7bWFya2VyLmxhYmVsfTogYCA6ICcnKSArIChtYXJrZXIuc2hvd1ZhbHVlID8gYCR7bWFya2VyLnZhbHVlfWAgOiAnJyksIHZlY18xLnZlYy5hZGQocG9zaXRpb24gIT09IG51bGwgJiYgcG9zaXRpb24gIT09IHZvaWQgMCA/IHBvc2l0aW9uIDogKDAsIHZlY18xLnZlYykoKSwgbWFya2VyLmxhYmVsT2Zmc2V0KSwgJ2xlZnQnLCAoX2IgPSBtYXJrZXIucGFkZGluZykgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdGhpcy5vcHRpb25zLnBhZGRpbmcsIChfYyA9IG1hcmtlci5mb250KSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiB0aGlzLm9wdGlvbnMuZm9udCwgKF9kID0gbWFya2VyLmZvcmVncm91bmRDb2xvdXIpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IHRoaXMub3B0aW9ucy5mb3JlZ3JvdW5kQ29sb3VyLCAoX2UgPSBtYXJrZXIuYmFja2dyb3VuZENvbG91cikgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvdXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXJrZXIuc2hvd01hcmtlcikge1xuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbnRleHQuZmlsbFN0eWxlID0gbWFya2VyLm1hcmtlckNvbG91cjtcbiAgICAgICAgICAgIHN3aXRjaCAobWFya2VyLm1hcmtlclN0eWxlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0Nyb3NzKGNvbnRleHQsIHBvc2l0aW9uLCBtYXJrZXIubWFya2VyU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdQbHVzKGNvbnRleHQsIHBvc2l0aW9uLCBtYXJrZXIubWFya2VyU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdEb3QoY29udGV4dCwgcG9zaXRpb24sIG1hcmtlci5tYXJrZXJTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgfVxuICAgIGRyYXdMYWJlbChjb250ZXh0LCB0ZXh0LCBwb3NpdGlvbiwgYWxpZ24sIHBhZGRpbmcsIGZvbnQsIGZvcmVncm91bmRDb2xvdXIsIGJhY2tncm91bmRDb2xvdXIpIHtcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgIGNvbnRleHQuZm9udCA9IGZvbnQ7XG4gICAgICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRTaXplID0ge1xuICAgICAgICAgICAgd2lkdGg6IGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGggKyBwYWRkaW5nICogMixcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5vcHRpb25zLmxpbmVIZWlnaHQgKyBwYWRkaW5nICogMixcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgeCA9IGFsaWduID09PSAncmlnaHQnID8gKHBvc2l0aW9uLnggLSBiYWNrZ3JvdW5kU2l6ZS53aWR0aCkgOiBwb3NpdGlvbi54O1xuICAgICAgICAvLyBEcmF3IGJhY2tncm91bmRcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kQ29sb3VyO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHggLSBwYWRkaW5nLCBwb3NpdGlvbi55IC0gcGFkZGluZywgYmFja2dyb3VuZFNpemUud2lkdGgsIGJhY2tncm91bmRTaXplLmhlaWdodCk7XG4gICAgICAgIC8vIERyYXcgdGV4dFxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZvcmVncm91bmRDb2xvdXI7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQodGV4dCwgeCwgcG9zaXRpb24ueSk7XG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgIH1cbiAgICBkcmF3Q3Jvc3MoY29udGV4dCwgcG9zaXRpb24sIHNpemUpIHtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29uc3QgaGFsZlNpemUgPSBzaXplIC8gMjtcbiAgICAgICAgY29udGV4dC5tb3ZlVG8ocG9zaXRpb24ueCAtIGhhbGZTaXplLCBwb3NpdGlvbi55IC0gaGFsZlNpemUpO1xuICAgICAgICBjb250ZXh0LmxpbmVUbyhwb3NpdGlvbi54ICsgaGFsZlNpemUsIHBvc2l0aW9uLnkgKyBoYWxmU2l6ZSk7XG4gICAgICAgIGNvbnRleHQubW92ZVRvKHBvc2l0aW9uLnggLSBoYWxmU2l6ZSwgcG9zaXRpb24ueSArIGhhbGZTaXplKTtcbiAgICAgICAgY29udGV4dC5saW5lVG8ocG9zaXRpb24ueCArIGhhbGZTaXplLCBwb3NpdGlvbi55IC0gaGFsZlNpemUpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cbiAgICBkcmF3UGx1cyhjb250ZXh0LCBwb3NpdGlvbiwgc2l6ZSkge1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb25zdCBoYWxmU2l6ZSA9IHNpemUgLyAyO1xuICAgICAgICBjb250ZXh0Lm1vdmVUbyhwb3NpdGlvbi54LCBwb3NpdGlvbi55IC0gaGFsZlNpemUpO1xuICAgICAgICBjb250ZXh0LmxpbmVUbyhwb3NpdGlvbi54LCBwb3NpdGlvbi55ICsgaGFsZlNpemUpO1xuICAgICAgICBjb250ZXh0Lm1vdmVUbyhwb3NpdGlvbi54IC0gaGFsZlNpemUsIHBvc2l0aW9uLnkpO1xuICAgICAgICBjb250ZXh0LmxpbmVUbyhwb3NpdGlvbi54ICsgaGFsZlNpemUsIHBvc2l0aW9uLnkpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cbiAgICBkcmF3RG90KGNvbnRleHQsIHBvc2l0aW9uLCBzaXplKSB7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQuYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUgLyAyLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IERlYnVnO1xuRGVidWcuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbWFyZ2luOiAxMCxcbiAgICBwYWRkaW5nOiA0LFxuICAgIGZvbnQ6ICcxMHB0IEx1Y2lkYSBDb25zb2xlLCBtb25vc3BhY2UnLFxuICAgIGxpbmVIZWlnaHQ6IDEyLFxuICAgIGZvcmVncm91bmRDb2xvdXI6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3VyOiAnIzMzMycsXG4gICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHNob3dMYWJlbDogdHJ1ZSxcbiAgICB9LFxuICAgIGRlZmF1bHRNYXJrZXI6IHtcbiAgICAgICAgc2hvd0xhYmVsOiB0cnVlLFxuICAgICAgICBzaG93VmFsdWU6IHRydWUsXG4gICAgICAgIHNob3dNYXJrZXI6IHRydWUsXG4gICAgICAgIG1hcmtlclNpemU6IDYsXG4gICAgICAgIG1hcmtlclN0eWxlOiAneCcsXG4gICAgICAgIG1hcmtlckNvbG91cjogJyNjY2MnLFxuICAgICAgICBzcGFjZTogJ3dvcmxkJyxcbiAgICAgICAgbGFiZWxPZmZzZXQ6ICgwLCB2ZWNfMS52ZWMpKDEwKSxcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTlwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQkxDdERRVUUwUXp0QlFYbEZOVU1zVFVGQmNVSXNTMEZCU3p0SlFXZERlRUlzV1VGQmIwSXNUMEZCSzBJN1VVRkRha1FzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeExRVUZMTEVOQlFVTXNZMEZCWXl4RlFVRkZMRTlCUVU4c1lVRkJVQ3hQUVVGUExHTkJRVkFzVDBGQlR5eEhRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTNSRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4SFFVRkhMRVZCUVhOQ0xFTkJRVU03VVVGRE5VTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFZEJRVWNzUlVGQmRVSXNRMEZCUXp0SlFVTm9SQ3hEUVVGRE8wbEJSVVE3TzA5QlJVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExGVkJRV2xETEVWQlFVVTdVVUZETVVRc1NVRkJTU3hMUVVGTExFTkJRVU1zVVVGQlVTeExRVUZMTEZOQlFWTXNSVUZCUlR0WlFVTm9ReXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEc5RFFVRnZReXhEUVVGRExFTkJRVU03VTBGRGRrUTdVVUZEUkN4TFFVRkxMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPMGxCUTNSRExFTkJRVU03U1VGRlR5eE5RVUZOTEVOQlFVTXNWMEZCVnp0UlFVTjRRaXhKUVVGSkxFdEJRVXNzUTBGQlF5eFJRVUZSTEV0QlFVc3NVMEZCVXl4RlFVRkZPMWxCUTJoRExFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNaME5CUVdkRExFTkJRVU1zUTBGQlF6dFRRVU51UkR0UlFVVkVMRTlCUVU4c1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF6dEpRVU40UWl4RFFVRkRPMGxCUlVRN08wOUJSVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVTnFRaXhMUVVGaExFVkJRMklzUzBGQmMwSXNSVUZEZEVJc1QwRkJOa0k3VVVGRk4wSXNUVUZCVFN4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlJYSkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVOMFF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4TFFVRkxMRVZCUVVVc1JVRkRhRUlzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4WlFVRlpMRVZCUXpkQ0xFOUJRVThzUTBGRFVpeERRVUZETEVOQlFVTTdTVUZEVEN4RFFVRkRPMGxCUlVRN08wOUJSVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVTnNRaXhMUVVGaExFVkJRMklzUzBGQmMwSXNSVUZEZEVJc1VVRkJZU3hGUVVOaUxFOUJRVGhDTzFGQlJUbENMRTFCUVUwc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVVnlReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGRGRrTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJTeEZRVU14UWl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUlVGRE9VSXNUMEZCVHl4RFFVTlNMRU5CUVVNc1EwRkJRenRKUVVOTUxFTkJRVU03U1VGRlJEczdUMEZGUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQmFVTTdVVUZEYkVRc1RVRkJUU3hSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUlhKRExESkNRVUV5UWp0UlFVTXpRaXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEWml4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0WlFVTm9ReXhKUVVGSkxFMUJRVTBzUTBGQlF5eExRVUZMTEV0QlFVc3NUMEZCVHl4RlFVRkZPMmRDUVVNMVFpeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dGhRVU4wUXp0UlFVTklMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMGdzVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUld4Q0xIVkRRVUYxUXp0UlFVTjJReXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEWml4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEZGtNc1NVRkJTU3hSUVVGaExFTkJRVU03VVVGRGJFSXNTVUZCU1N4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZEY0VNc1NVRkJTU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRja01zVFVGQlRTeFZRVUZWTEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUml4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlRzN1dVRkRPVUlzVVVGQlVTeExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZPMmRDUVVOdVFpeExRVUZMTEUxQlFVMDdiMEpCUTFRc1VVRkJVU3hIUVVGSExFbEJRVUVzVTBGQlJ5eEZRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzI5Q1FVTXZReXhMUVVGTExFbEJRVWtzVlVGQlZTeERRVUZETzI5Q1FVTndRaXhOUVVGTk8yZENRVU5TTEV0QlFVc3NUMEZCVHp0dlFrRkRWaXhSUVVGUkxFZEJRVWNzU1VGQlFTeFRRVUZITEVWQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03YjBKQlF6ZEZMRTFCUVUwc1NVRkJTU3hWUVVGVkxFTkJRVU03YjBKQlEzSkNMRTFCUVUwN1lVRkRWRHRaUVVORUxGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlEyaENMRTlCUVU4c1JVRkRVQ3hEUVVGRExFdEJRVXNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNSVUZET1VRc1VVRkJVU3hGUVVOU0xFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlExZ3NUVUZCUVN4TFFVRkxMRU5CUVVNc1QwRkJUeXh0UTBGQlNTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkRla01zVFVGQlFTeExRVUZMTEVOQlFVTXNTVUZCU1N4dFEwRkJTU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZEYmtNc1RVRkJRU3hMUVVGTExFTkJRVU1zWjBKQlFXZENMRzFEUVVGSkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFVkJRek5FTEUxQlFVRXNTMEZCU3l4RFFVRkRMR2RDUVVGblFpeHRRMEZCU1N4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExHZENRVUZuUWl4RFFVTTFSQ3hEUVVGRE8xRkJRMG9zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEU0N4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlR0WlFVTm9ReXhKUVVGSkxFMUJRVTBzUTBGQlF5eExRVUZMTEV0QlFVc3NVVUZCVVN4RlFVRkZPMmRDUVVNM1FpeFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dGhRVU4wUXp0UlFVTklMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMGdzVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMUZCUld4Q0xHZEVRVUZuUkR0UlFVTm9SQ3hSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUTNoQ0xGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1NVRkRNMElzUTBGQlF6dEpRVVZQTEZWQlFWVXNRMEZCUXl4UFFVRnBReXhGUVVGRkxFMUJRVzFDT3p0UlFVTjJSU3hQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZEWml4TlFVRk5MRkZCUVZFc1IwRkJSeXhOUVVGQkxFMUJRVTBzUTBGQlF5eFJRVUZSTEcxRFFVRkpMRWxCUVVFc1UwRkJSeXhIUVVGRkxFTkJRVU03VVVGRE1VTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1UwRkJVeXhKUVVGSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVTdXVUZEZUVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGRFdpeFBRVUZQTEVWQlExQXNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlF6TkdMRk5CUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeGhRVUZTTEZGQlFWRXNZMEZCVWl4UlFVRlJMRWRCUVVrc1NVRkJRU3hUUVVGSExFZEJRVVVzUlVGQlJTeE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUXpsRExFMUJRVTBzUlVGRFRpeE5RVUZCTEUxQlFVMHNRMEZCUXl4UFFVRlBMRzFEUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVTjBReXhOUVVGQkxFMUJRVTBzUTBGQlF5eEpRVUZKTEcxRFFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVU5vUXl4TlFVRkJMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNiVU5CUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1JVRkRlRVFzVFVGQlFTeE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xHMURRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlEzcEVMRU5CUVVNN1UwRkRTRHRSUVVORUxFbEJRVWtzVFVGQlRTeERRVUZETEZWQlFWVXNSVUZCUlR0WlFVTnlRaXhQUVVGUExFTkJRVU1zVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTjBRaXhQUVVGUExFTkJRVU1zVjBGQlZ5eEhRVUZITEU5QlFVOHNRMEZCUXl4VFFVRlRMRWRCUVVjc1RVRkJUU3hEUVVGRExGbEJRVmtzUTBGQlF6dFpRVU01UkN4UlFVRlJMRTFCUVUwc1EwRkJReXhYUVVGWExFVkJRVVU3WjBKQlF6RkNMRXRCUVVzc1IwRkJSenR2UWtGRFRpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFVkJRVVVzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMjlDUVVOeVJDeE5RVUZOTzJkQ1FVTlNMRXRCUVVzc1IwRkJSenR2UWtGRFRpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFVkJRVVVzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMjlDUVVOd1JDeE5RVUZOTzJkQ1FVTlNMRXRCUVVzc1IwRkJSenR2UWtGRFRpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFVkJRVVVzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPMjlDUVVOdVJDeE5RVUZOTzJGQlExUTdVMEZEUmp0UlFVTkVMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dEpRVU53UWl4RFFVRkRPMGxCUlU4c1UwRkJVeXhEUVVObUxFOUJRV2xETEVWQlEycERMRWxCUVZrc1JVRkRXaXhSUVVGaExFVkJRMklzUzBGQmRVSXNSVUZEZGtJc1QwRkJaU3hGUVVObUxFbEJRVmtzUlVGRFdpeG5Ra0ZCZDBJc1JVRkRlRUlzWjBKQlFYZENPMUZCUlhoQ0xFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVTm1MRTlCUVU4c1EwRkJReXhKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzFGQlEzQkNMRTlCUVU4c1EwRkJReXhaUVVGWkxFZEJRVWNzUzBGQlN5eERRVUZETzFGQlF6ZENMRTFCUVUwc1kwRkJZeXhIUVVGSE8xbEJRM0pDTEV0QlFVc3NSVUZCUlN4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4UFFVRlBMRWRCUVVjc1EwRkJRenRaUVVOd1JDeE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFZEJRVWNzVDBGQlR5eEhRVUZITEVOQlFVTTdVMEZET1VNc1EwRkJRenRSUVVOR0xFMUJRVTBzUTBGQlF5eEhRVUZITEV0QlFVc3NTMEZCU3l4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4alFVRmpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkZMMFVzYTBKQlFXdENPMUZCUTJ4Q0xFOUJRVThzUTBGQlF5eFRRVUZUTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03VVVGRGNrTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkRaQ3hEUVVGRExFZEJRVWNzVDBGQlR5eEZRVU5ZTEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1QwRkJUeXhGUVVOd1FpeGpRVUZqTEVOQlFVTXNTMEZCU3l4RlFVTndRaXhqUVVGakxFTkJRVU1zVFVGQlRTeERRVU4wUWl4RFFVRkRPMUZCUlVZc1dVRkJXVHRSUVVOYUxFOUJRVThzUTBGQlF5eFRRVUZUTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU03VVVGRGNrTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOMFF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1NVRkRjRUlzUTBGQlF6dEpRVVZQTEZOQlFWTXNRMEZCUXl4UFFVRnBReXhGUVVGRkxGRkJRV0VzUlVGQlJTeEpRVUZaTzFGQlF6bEZMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dFJRVU53UWl4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETzFGQlF6RkNMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTTNSQ3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkROMFFzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRemRFTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU0zUkN4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU03U1VGRGJrSXNRMEZCUXp0SlFVVlBMRkZCUVZFc1EwRkJReXhQUVVGcFF5eEZRVUZGTEZGQlFXRXNSVUZCUlN4SlFVRlpPMUZCUXpkRkxFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0UlFVTndRaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpGQ0xFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTJ4RUxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUTJ4RUxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4RUxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4RUxFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0SlFVTnVRaXhEUVVGRE8wbEJSVThzVDBGQlR5eERRVUZETEU5QlFXbERMRVZCUVVVc1VVRkJZU3hGUVVGRkxFbEJRVms3VVVGRE5VVXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8xRkJRM0JDTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRE9VUXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wbEJRMnBDTEVOQlFVTTdPMEZCT1U5SUxIZENRU3RQUXp0QlFUVlBlVUlzYjBKQlFXTXNSMEZCYVVJN1NVRkRja1FzVFVGQlRTeEZRVUZGTEVWQlFVVTdTVUZEVml4UFFVRlBMRVZCUVVVc1EwRkJRenRKUVVOV0xFbEJRVWtzUlVGQlJTeG5RMEZCWjBNN1NVRkRkRU1zVlVGQlZTeEZRVUZGTEVWQlFVVTdTVUZEWkN4blFrRkJaMElzUlVGQlJTeE5RVUZOTzBsQlEzaENMR2RDUVVGblFpeEZRVUZGTEUxQlFVMDdTVUZEZUVJc1dVRkJXU3hGUVVGRk8xRkJRMW9zUzBGQlN5eEZRVUZGTEUxQlFVMDdVVUZEWWl4VFFVRlRMRVZCUVVVc1NVRkJTVHRMUVVOb1FqdEpRVU5FTEdGQlFXRXNSVUZCUlR0UlFVTmlMRk5CUVZNc1JVRkJSU3hKUVVGSk8xRkJRMllzVTBGQlV5eEZRVUZGTEVsQlFVazdVVUZEWml4VlFVRlZMRVZCUVVVc1NVRkJTVHRSUVVOb1FpeFZRVUZWTEVWQlFVVXNRMEZCUXp0UlFVTmlMRmRCUVZjc1JVRkJSU3hIUVVGSE8xRkJRMmhDTEZsQlFWa3NSVUZCUlN4TlFVRk5PMUZCUTNCQ0xFdEJRVXNzUlVGQlJTeFBRVUZQTzFGQlEyUXNWMEZCVnl4RlFVRkZMRWxCUVVFc1UwRkJSeXhGUVVGRExFVkJRVVVzUTBGQlF6dExRVU55UWp0RFFVTkdMRU5CUVVNaWZRPT0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./node_modules/@basementuniverse/input-manager/build/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@basementuniverse/input-manager/build/index.js ***!
  \*********************************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@basementuniverse/utils/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/@basementuniverse/utils/utils.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * @overview A library of useful functions
 * @author Gordon Larrigan
 */

/**
 * Check if two numbers are approximately equal
 * @param {number} a Number a
 * @param {number} b Number b
 * @param {number} [p=Number.EPSILON] The precision value
 * @return {boolean} True if numbers a and b are approximately equal
 */
const floatEquals = (a, b, p = Number.EPSILON) => Math.abs(a - b) < p;

/**
 * Clamp a number between min and max
 * @param {number} a The number to clamp
 * @param {number} [min=0] The minimum value
 * @param {number} [max=1] The maximum value
 * @return {number} A clamped number
 */
const clamp = (a, min = 0, max = 1) => a < min ? min : (a > max ? max : a);

/**
 * Get the fractional part of a number
 * @param {number} a The number from which to get the fractional part
 * @return {number} The fractional part of the number
 */
const frac = a => a >= 0 ? a - Math.floor(a) : a - Math.ceil(a);

/**
 * Do a linear interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} An interpolated value in the interval [a, b]
 */
const lerp = (a, b, i) => a + (b - a) * i;

/**
 * Get the position of i between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolated value in the interval [a, b]
 * @return {number} The position of i between a and b
 */
const unlerp = (a, b, i) => (i - a) / (b - a);

/**
 * Do a bilinear interpolation
 * @param {number} c00 Top-left value
 * @param {number} c10 Top-right value
 * @param {number} c01 Bottom-left value
 * @param {number} c11 Bottom-right value
 * @param {number} ix Interpolation value along x
 * @param {number} iy Interpolation value along y
 * @return {number} A bilinear interpolated value
 */
const blerp = (c00, c10, c01, c11, ix, iy) => lerp(lerp(c00, c10, ix), lerp(c01, c11, ix), iy);

/**
 * Re-map a number i from range a1...a2 to b1...b2
 * @param {number} i The number to re-map
 * @param {number} a1
 * @param {number} a2
 * @param {number} b1
 * @param {number} b2
 * @return {number}
 */
const remap = (i, a1, a2, b1, b2) => b1 + (i - a1) * (b2 - b1) / (a2 - a1);

/**
 * Do a smooth interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value
 * @return {number} An interpolated value in the interval [a, b]
 */
const smoothstep = (a, b, i) => lerp(a, b, 3 * Math.pow(i, 2) - 2 * Math.pow(i, 3));

/**
 * Get an angle in radians
 * @param {number} degrees The angle in degrees
 * @return {number} The angle in radians
 */
const radians = degrees => (Math.PI / 180) * degrees;

/**
 * Get an angle in degrees
 * @param {number} radians The angle in radians
 * @return {number} The angle in degrees
 */
const degrees = radians => (180 / Math.PI) * radians;

/**
 * Get a random float in the interval [min, max)
 * @param {number} min Inclusive min
 * @param {number} max Exclusive max
 * @return {number} A random float in the interval [min, max)
 */
const randomBetween = (min, max) => Math.random() * (max - min) + min;

/**
 * Get a random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A random integer in the interval [min, max]
 */
const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Get a normally-distributed random number
 * @param {number} [mu=0.5] The mean value
 * @param {number} [sigma=0.5] The standard deviation
 * @param {number} [samples=2] The number of samples
 * @return {number} A normally-distributed random number
 */
const cltRandom = (mu = 0.5, sigma = 0.5, samples = 2) => {
  let total = 0;
  for (let i = samples; i--;) {
    total += Math.random();
  }
  return mu + (total - samples / 2) / (samples / 2) * sigma;
};

/**
 * Get a normally-distributed random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A normally-distributed random integer
 */
const cltRandomInt = (min, max) => Math.floor(min + cltRandom(0.5, 0.5, 2) * (max + 1 - min));

/**
 * Return a weighted random integer
 * @param {Array<number>} w An array of weights
 * @return {number} An index from w
 */
const weightedRandom = w => {
  let total = w.reduce((a, i) => a + i, 0), n = 0;
  const r = Math.random() * total;
  while (total > r) {
    total -= w[n++];
  }
  return n - 1;
};

/**
 * An interpolation function
 * @callback interpolationCallback
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} The interpolated value in the interval [a, b]
 */

/**
 * Return an interpolated value from an array
 * @param {Array<number>} a An array of values interpolate
 * @param {number} i A number in the interval [0, 1]
 * @param {interpolationCallback} [f=Math.lerp] The interpolation function to use
 * @return {number} An interpolated value in the interval [min(a), max(a)]
 */
const lerpArray = (a, i, f = lerp) => {
  const s = i * (a.length - 1);
  const p = clamp(Math.trunc(s), 0, a.length - 1);
  return f(a[p] || 0, a[p + 1] || 0, frac(s));
};

/**
 * Get the dot product of two vectors
 * @param {Array<number>} a Vector a
 * @param {Array<number>} b Vector b
 * @return {number} a ∙ b
 */
const dot = (a, b) => a.reduce((n, v, i) => n + v * b[i], 0);

/**
 * Get the factorial of a number
 * @param {number} a
 * @return {number} a!
 */
const factorial = a => {
  let result = 1;
  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  return result;
};

/**
 * Get the number of permutations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nPr
 */
const permutation = (n, r) => factorial(n) / factorial(n - r);

/**
 * Get the number of combinations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nCr
 */
const combination = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

/**
 * A function for generating array values
 * @callback timesCallback
 * @param {number} i The array index
 * @return {*} The array value
 */

/**
 * Return a new array with length n by calling function f(i) on each element
 * @param {timesCallback} f
 * @param {number} n The size of the array
 * @return {Array<*>}
 */
const times = (f, n) => Array(n).fill(0).map((_, i) => f(i));

/**
 * Return an array containing numbers 0->(n - 1)
 * @param {number} n The size of the array
 * @return {Array<number>} An array of integers 0->(n - 1)
 */
const range = n => times(i => i, n);

/**
 * Zip 2 arrays together, i.e. ([1, 2, 3], [a, b, c]) => [[1, a], [2, b], [3, c]]
 * @param {Array<*>} a
 * @param {Array<*>} b
 * @return {Array<Array<*>>}
 */
const zip = (a, b) => a.map((k, i) => [k, b[i]]);

/**
 * Return array[i] with positive and negative wrapping
 * @param {Array<*>} a
 * @param {number} i The positively/negatively wrapped array index
 * @return {*} An element from the array
 */
const at = (a, i) => a[i < 0 ? a.length - (Math.abs(i + 1) % a.length) - 1 : i % a.length];

/**
 * Chop an array into chunks of size n
 * @param {Array<*>} a
 * @param {number} n The chunk size
 * @return {Array<Array<*>>} An array of array chunks
 */
const chunk = (a, n) => times(i => a.slice(i * n, i * n + n), Math.ceil(a.length / n));

/**
 * Randomly shuffle a shallow copy of an array
 * @param {Array<*>} a
 * @return {Array<*>} The shuffled array
 */
const shuffle = a => a.slice().sort(() => Math.random() - 0.5);

if (true) {
  module.exports = {
    floatEquals,
    clamp,
    frac,
    lerp,
    unlerp,
    blerp,
    remap,
    smoothstep,
    radians,
    degrees,
    randomBetween,
    randomIntBetween,
    cltRandom,
    cltRandomInt,
    weightedRandom,
    lerpArray,
    dot,
    factorial,
    permutation,
    combination,
    times,
    range,
    zip,
    at,
    chunk,
    shuffle,
  };
}


/***/ }),

/***/ "./node_modules/@basementuniverse/vec/vec.js":
/*!***************************************************!*\
  !*** ./node_modules/@basementuniverse/vec/vec.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_9135__) => {

const { times, chunk, dot } = __nested_webpack_require_9135__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");

/**
 * @overview A library of useful functions
 * @author Gordon Larrigan
 */

/**
 * A 2d vector
 * @typedef {Object} vec
 * @property {number} x The x component of the vector
 * @property {number} y The y component of the vector
 */

/**
 * Create a new vector
 * @param {number|vec} [x] The x component of the vector, or a vector to copy
 * @param {number} [y] The y component of the vector
 * @return {vec} A new vector
 * @example <caption>Various ways to initialise a vector</caption>
 * let a = vec(3, 2);  // (3, 2)
 * let b = vec(4);     // (4, 4)
 * let c = vec(a);     // (3, 2)
 * let d = vec();      // (0, 0)
 */
const vec = (x, y) => (!x && !y ?
  { x: 0, y: 0 } : (typeof x === 'object' ?
    { x: x.x || 0, y: x.y || 0 } : (y === null || y === undefined ?
      { x: x, y: x } : { x: x, y: y })
  )
);

/**
 * Get the components of a vector as an array
 * @param {vec} a The vector to get components from
 * @return {Array<number>} The vector components as an array
 */
vec.components = a => [a.x, a.y];

/**
 * Return a unit vector (1, 0)
 * @return {vec} A unit vector (1, 0)
 */
vec.ux = () => vec(1, 0);

/**
 * Return a unit vector (0, 1)
 * @return {vec} A unit vector (0, 1)
 */
vec.uy = () => vec(0, 1);

/**
 * Add vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {vec} a + b
 */
vec.add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });

/**
 * Scale a vector
 * @param {vec} a Vector a
 * @param {number} b Scalar b
 * @return {vec} a * b
 */
vec.mul = (a, b) => ({ x: a.x * b, y: a.y * b });

/**
 * Subtract vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {vec} a - b
 */
vec.sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });

/**
 * Get the length of a vector
 * @param {vec} a Vector a
 * @return {number} |a|
 */
vec.len = a => Math.sqrt(a.x * a.x + a.y * a.y);

/**
 * Get the length of a vector using taxicab geometry
 * @param {vec} a Vector a
 * @return {number} |a|
 */
vec.manhattan = a => Math.abs(a.x) + Math.abs(a.y);

/**
 * Normalise a vector
 * @param {vec} a The vector to normalise
 * @return {vec} ^a
 */
vec.nor = a => {
  let len = vec.len(a);
  return len ? { x: a.x / len, y: a.y / len } : vec();
};

/**
 * Get a dot product of vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {number} a ∙ b
 */
vec.dot = (a, b) => a.x * b.x + a.y * b.y;

/**
 * Rotate a vector by r radians
 * @param {vec} a The vector to rotate
 * @param {number} r The angle to rotate by, measured in radians
 * @return {vec} A rotated vector
 */
vec.rot = (a, r) => {
  let s = Math.sin(r),
    c = Math.cos(r);
  return { x: c * a.x - s * a.y, y: s * a.x + c * a.y };
}

/**
 * Check if two vectors are equal
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {boolean} True if vectors a and b are equal, false otherwise
 */
vec.eq = (a, b) => a.x === b.x && a.y === b.y;

/**
 * Get the angle of a vector
 * @param {vec} a Vector a
 * @return {number} The angle of vector a in radians
 */
vec.rad = a => Math.atan2(a.y, a.x);

/**
 * Copy a vector
 * @param {vec} a The vector to copy
 * @return {vec} A copy of vector a
 */
vec.cpy = a => vec(a);

/**
 * A function to call on each component of a vector
 * @callback vectorMapCallback
 * @param {number} value The component value
 * @param {'x' | 'y'} label The component label (x or y)
 * @return {number} The mapped component
 */

/**
 * Call a function on each component of a vector and build a new vector from the results
 * @param {vec} a Vector a
 * @param {vectorMapCallback} f The function to call on each component of the vector
 * @return {vec} Vector a mapped through f
 */
vec.map = (a, f) => ({ x: f(a.x, 'x'), y: f(a.y, 'y') });

/**
 * Convert a vector into a string
 * @param {vec} a The vector to convert
 * @param {string} [s=', '] The separator string
 * @return {string} A string representation of the vector
 */
vec.str = (a, s = ', ') => `${a.x}${s}${a.y}`;

/**
 * A matrix
 * @typedef {Object} mat
 * @property {number} m The number of rows in the matrix
 * @property {number} n The number of columns in the matrix
 * @property {Array<number>} entries The matrix values
 */

/**
 * Create a new matrix
 * @param {number} [m=4] The number of rows
 * @param {number} [n=4] The number of columns
 * @param {Array<number>} [entries=[]] Matrix values in reading order
 * @return {mat} A new matrix
 */
const mat = (m = 4, n = 4, entries = []) => ({
  m, n,
  entries: entries.concat(Array(m * n).fill(0)).slice(0, m * n)
});

/**
 * Get an identity matrix of size n
 * @param {number} n The size of the matrix
 * @return {mat} An identity matrix
 */
mat.identity = n => mat(n, n, Array(n * n).fill(0).map((v, i) => +(Math.floor(i / n) === i % n)));

/**
 * Get an entry from a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @return {number} The value at position (i, j) in matrix a
 */
mat.get = (a, i, j) => a.entries[(j - 1) + (i - 1) * a.n];

/**
 * Set an entry of a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @param {number} v The value to set in matrix a
 */
mat.set = (a, i, j, v) => { a.entries[(j - 1) + (i - 1) * a.n] = v; };

/**
 * Get a row from a matrix as an array
 * @param {mat} a Matrix a
 * @param {number} m The row offset
 * @return {Array<number>} Row m from matrix a
 */
mat.row = (a, m) => {
  const s = (m - 1) * a.n;
  return a.entries.slice(s, s + a.n);
};

/**
 * Get a column from a matrix as an array
 * @param {mat} a Matrix a
 * @param {number} n The column offset
 * @return {Array<number>} Column n from matrix a
 */
mat.col = (a, n) => times(i => mat.get(a, (i + 1), n), a.m);

/**
 * Add matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat} a + b
 */
mat.add = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v + b.entries[i]);

/**
 * Subtract matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat} a - b
 */
mat.sub = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v - b.entries[i]);

/**
 * Multiply matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat|boolean} ab or false if the matrices cannot be multiplied
 */
mat.mul = (a, b) => {
  if (a.n !== b.m) { return false; }
  const result = mat(a.m, b.n);
  for (let i = 1; i <= a.m; i++) {
    for (let j = 1; j <= b.n; j++) {
      mat.set(result, i, j, dot(mat.row(a, i), mat.col(b, j)));
    }
  }
  return result;
};

/**
 * Scale a matrix
 * @param {mat} a Matrix a
 * @param {number} b Scalar b
 * @return {mat} a * b
 */
mat.scale = (a, b) => mat.map(a, v => v * b);

/**
 * Transpose a matrix
 * @param {mat} a The matrix to transpose
 * @return {mat} A transposed matrix
 */
mat.trans = a => mat(a.n, a.m, times(i => mat.col(a, (i + 1)), a.n).flat());

/**
 * Get the minor of a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @return {mat|boolean} The (i, j) minor of matrix a or false if the matrix is not square
 */
mat.minor = (a, i, j) => {
  if (a.m !== a.n) { return false; }
  const entries = [];
  for (let ii = 1; ii <= a.m; ii++) {
    if (ii === i) { continue; }
    for (let jj = 1; jj <= a.n; jj++) {
      if (jj === j) { continue; }
      entries.push(mat.get(a, ii, jj));
    }
  }
  return mat(a.m - 1, a.n - 1, entries);
};

/**
 * Get the determinant of a matrix
 * @param {mat} a Matrix a
 * @return {number|boolean} |a| or false if the matrix is not square
 */
mat.det = a => {
  if (a.m !== a.n) { return false; }
  if (a.m === 1) {
    return a.entries[0];
  }
  if (a.m === 2) {
    return a.entries[0] * a.entries[3] - a.entries[1] * a.entries[2];
  }
  let total = 0, sign = 1;
  for (let j = 1; j <= a.n; j++) {
    total += sign * a.entries[j - 1] * mat.det(mat.minor(a, 1, j));
    sign *= -1;
  }
  return total;
};

/**
 * Normalise a matrix
 * @param {mat} a The matrix to normalise
 * @return {mat|boolean} ^a or false if the matrix is not square
 */
mat.nor = a => {
  if (a.m !== a.n) { return false; }
  const d = mat.det(a);
  return mat.map(a, i => i * d);
};

/**
 * Get the adjugate of a matrix
 * @param {mat} a The matrix from which to get the adjugate
 * @return {mat} The adjugate of a
 */
mat.adj = a => {
  const minors = mat(a.m, a.n);
  for (let i = 1; i <= a.m; i++) {
    for (let j = 1; j <= a.n; j++) {
      mat.set(minors, i, j, mat.det(mat.minor(a, i, j)));
    }
  }
  const cofactors = mat.map(minors, (v, i) => v * (i % 2 ? -1 : 1));
  return mat.trans(cofactors);
};

/**
 * Get the inverse of a matrix
 * @param {mat} a The matrix to invert
 * @return {mat|boolean} a^-1 or false if the matrix has no inverse
 */
mat.inv = a => {
  if (a.m !== a.n) { return false; }
  const d = mat.det(a);
  if (d === 0) { return false; }
  return mat.scale(mat.adj(a), 1 / d);
};

/**
 * Check if two matrices are equal
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {boolean} True if matrices a and b are identical, false otherwise
 */
mat.eq = (a, b) => a.m === b.m && a.n === b.n && mat.str(a) === mat.str(b);

/**
 * Copy a matrix
 * @param {mat} a The matrix to copy
 * @return {mat} A copy of matrix a
 */
mat.cpy = a => mat(a.m, a.n, [...a.entries]);

/**
 * A function to call on each entry of a matrix
 * @callback matrixMapCallback
 * @param {number} value The entry value
 * @param {number} index The entry index
 * @param {Array<number>} entries The array of matrix entries
 * @return {number} The mapped entry
 */

/**
 * Call a function on each entry of a matrix and build a new matrix from the results
 * @param {mat} a Matrix a
 * @param {matrixMapCallback} f The function to call on each entry of the matrix
 * @return {mat} Matrix a mapped through f
 */
mat.map = (a, f) => mat(a.m, a.n, a.entries.map(f));

/**
 * Convert a matrix into a string
 * @param {mat} a The matrix to convert
 * @param {string} [ms=', '] The separator string for columns
 * @param {string} [ns='\n'] The separator string for rows
 * @return {string} A string representation of the matrix
 */
mat.str = (a, ms = ', ', ns = '\n') => chunk(a.entries, a.n).map(r => r.join(ms)).join(ns);

if (true) {
  module.exports = { vec, mat };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_19801__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_19801__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __nested_webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const vec_1 = __nested_webpack_require_19801__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
class InputManager {
    constructor(options) {
        this.keyboardState = {};
        this.previousKeyboardState = {};
        this.mouseState = { button: false, position: (0, vec_1.vec)(), wheel: 0 };
        this.previousMouseState = { button: false, position: (0, vec_1.vec)(), wheel: 0 };
        this.options = Object.assign({}, InputManager.defaultOptions, options !== null && options !== void 0 ? options : {});
        // Set up event handlers
        if (this.options.mouse) {
            window.addEventListener('mousedown', () => {
                this.mouseState.button = true;
            });
            window.addEventListener('mouseup', () => {
                this.mouseState.button = false;
            });
            window.addEventListener('touchstart', () => {
                this.mouseState.button = true;
            });
            window.addEventListener('touchend', () => {
                this.mouseState.button = false;
            });
            window.addEventListener('mousemove', e => {
                this.mouseState.position.x = e.offsetX;
                this.mouseState.position.y = e.offsetY;
            });
            if (this.options.mouseWheel) {
                window.addEventListener('wheel', e => {
                    this.mouseState.wheel = e.deltaY > 0 ? 1 : -1;
                });
            }
        }
        if (this.options.keyboard) {
            window.addEventListener('keydown', e => {
                this.keyboardState[e.code] = true;
            });
            window.addEventListener('keyup', e => {
                this.keyboardState[e.code] = false;
            });
        }
    }
    /**
     * Initialise the input manager for managing mouse and keyboard input
     */
    static initialise(options) {
        if (InputManager.instance !== undefined) {
            throw new Error('Input manager already initialised');
        }
        InputManager.instance = new InputManager(options);
    }
    static getInstance() {
        if (InputManager.instance === undefined) {
            throw new Error('Input manager not properly initialised');
        }
        return InputManager.instance;
    }
    /**
     * Update the state of the input devices
     */
    static update() {
        const instance = InputManager.getInstance();
        instance.previousKeyboardState = Object.assign({}, instance.keyboardState);
        instance.previousMouseState = {
            ...instance.mouseState,
            position: vec_1.vec.cpy(instance.mouseState.position),
            wheel: 0,
        };
    }
    /**
     * Check if a key is currently pressed down
     */
    static keyDown(code) {
        const instance = InputManager.getInstance();
        // Check if any key is down
        if (!code) {
            for (const k in instance.keyboardState) {
                if (instance.keyboardState[k]) {
                    return true;
                }
            }
            return false;
        }
        return !!instance.keyboardState[code];
    }
    /**
     * Check if a key has been pressed since the last frame
     */
    static keyPressed(code) {
        const instance = InputManager.getInstance();
        // Check if any key was pressed
        if (!code) {
            for (const k in instance.keyboardState) {
                if (instance.keyboardState[k] &&
                    (!(k in instance.previousKeyboardState) ||
                        !instance.previousKeyboardState[k])) {
                    return true;
                }
            }
            return false;
        }
        return !!instance.keyboardState[code] && !instance.previousKeyboardState[code];
    }
    /**
     * Check if a key has been released since the last frame
     */
    static keyReleased(code) {
        const instance = InputManager.getInstance();
        // Check if any key was released
        if (!code) {
            for (const k in instance.keyboardState) {
                if (!instance.keyboardState[k] &&
                    !!instance.previousKeyboardState[k]) {
                    return true;
                }
            }
            return false;
        }
        return !instance.keyboardState[code] && !!instance.previousKeyboardState[code];
    }
    /**
     * Check if a mouse button is currently pressed down
     */
    static mouseDown() {
        const instance = InputManager.getInstance();
        return !!instance.mouseState.button;
    }
    /**
     * Check if a mouse button has been pressed since the last frame
     */
    static mousePressed() {
        const instance = InputManager.getInstance();
        return !!instance.mouseState.button && !instance.previousMouseState.button;
    }
    /**
     * Check if a mouse button has been released since the last frame
     */
    static mouseReleased() {
        const instance = InputManager.getInstance();
        return !instance.mouseState.button && !!instance.previousMouseState.button;
    }
    /**
     * Check if the mousewheel is scrolling up
     */
    static mouseWheelUp() {
        const instance = InputManager.getInstance();
        return instance.mouseState.wheel > 0;
    }
    /**
     * Check if the mousewheel is scrolling down
     */
    static mouseWheelDown() {
        const instance = InputManager.getInstance();
        return instance.mouseState.wheel < 0;
    }
    /**
     * Get the current mouse position in screen-space
     */
    static get mousePosition() {
        const instance = InputManager.getInstance();
        return instance.mouseState.position;
    }
}
exports["default"] = InputManager;
InputManager.defaultOptions = {
    mouse: true,
    mouseWheel: true,
    keyboard: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUE0QztBQTZCNUMsTUFBcUIsWUFBWTtJQW1CL0IsWUFBb0IsT0FBK0I7UUFSM0Msa0JBQWEsR0FBa0IsRUFBRSxDQUFDO1FBRWxDLDBCQUFxQixHQUFrQixFQUFFLENBQUM7UUFFMUMsZUFBVSxHQUFlLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBQSxTQUFHLEdBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFFdEUsdUJBQWtCLEdBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFBLFNBQUcsR0FBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUdwRixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxjQUFjLEVBQUUsT0FBTyxhQUFQLE9BQU8sY0FBUCxPQUFPLEdBQUksRUFBRSxDQUFDLENBQUM7UUFFN0Usd0JBQXdCO1FBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDdEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lB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
})();

/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCtyTSIsInNvdXJjZXMiOlsid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2lucHV0LW1hbmFnZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2lucHV0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL2lucHV0LW1hbmFnZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlci8uL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiLyoqXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbnVtYmVycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICogQHBhcmFtIHtudW1iZXJ9IGEgTnVtYmVyIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIE51bWJlciBiXG4gKiBAcGFyYW0ge251bWJlcn0gW3A9TnVtYmVyLkVQU0lMT05dIFRoZSBwcmVjaXNpb24gdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbnVtYmVycyBhIGFuZCBiIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gKi9cbmNvbnN0IGZsb2F0RXF1YWxzID0gKGEsIGIsIHAgPSBOdW1iZXIuRVBTSUxPTikgPT4gTWF0aC5hYnMoYSAtIGIpIDwgcDtcblxuLyoqXG4gKiBDbGFtcCBhIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIHRvIGNsYW1wXG4gKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSBUaGUgbWluaW11bSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IFttYXg9MV0gVGhlIG1heGltdW0gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gQSBjbGFtcGVkIG51bWJlclxuICovXG5jb25zdCBjbGFtcCA9IChhLCBtaW4gPSAwLCBtYXggPSAxKSA9PiBhIDwgbWluID8gbWluIDogKGEgPiBtYXggPyBtYXggOiBhKTtcblxuLyoqXG4gKiBHZXQgdGhlIGZyYWN0aW9uYWwgcGFydCBvZiBhIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG51bWJlciBmcm9tIHdoaWNoIHRvIGdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgdGhlIG51bWJlclxuICovXG5jb25zdCBmcmFjID0gYSA9PiBhID49IDAgPyBhIC0gTWF0aC5mbG9vcihhKSA6IGEgLSBNYXRoLmNlaWwoYSk7XG5cbi8qKlxuICogRG8gYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuY29uc3QgbGVycCA9IChhLCBiLCBpKSA9PiBhICsgKGIgLSBhKSAqIGk7XG5cbi8qKlxuICogR2V0IHRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgcG9zaXRpb24gb2YgaSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuY29uc3QgdW5sZXJwID0gKGEsIGIsIGkpID0+IChpIC0gYSkgLyAoYiAtIGEpO1xuXG4vKipcbiAqIERvIGEgYmlsaW5lYXIgaW50ZXJwb2xhdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGMwMCBUb3AtbGVmdCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMxMCBUb3AtcmlnaHQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDEgQm90dG9tLWxlZnQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTEgQm90dG9tLXJpZ2h0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaXggSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB4XG4gKiBAcGFyYW0ge251bWJlcn0gaXkgSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB5XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgYmlsaW5lYXIgaW50ZXJwb2xhdGVkIHZhbHVlXG4gKi9cbmNvbnN0IGJsZXJwID0gKGMwMCwgYzEwLCBjMDEsIGMxMSwgaXgsIGl5KSA9PiBsZXJwKGxlcnAoYzAwLCBjMTAsIGl4KSwgbGVycChjMDEsIGMxMSwgaXgpLCBpeSk7XG5cbi8qKlxuICogUmUtbWFwIGEgbnVtYmVyIGkgZnJvbSByYW5nZSBhMS4uLmEyIHRvIGIxLi4uYjJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBudW1iZXIgdG8gcmUtbWFwXG4gKiBAcGFyYW0ge251bWJlcn0gYTFcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMlxuICogQHBhcmFtIHtudW1iZXJ9IGIxXG4gKiBAcGFyYW0ge251bWJlcn0gYjJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuY29uc3QgcmVtYXAgPSAoaSwgYTEsIGEyLCBiMSwgYjIpID0+IGIxICsgKGkgLSBhMSkgKiAoYjIgLSBiMSkgLyAoYTIgLSBhMSk7XG5cbi8qKlxuICogRG8gYSBzbW9vdGggaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5jb25zdCBzbW9vdGhzdGVwID0gKGEsIGIsIGkpID0+IGxlcnAoYSwgYiwgMyAqIE1hdGgucG93KGksIDIpIC0gMiAqIE1hdGgucG93KGksIDMpKTtcblxuLyoqXG4gKiBHZXQgYW4gYW5nbGUgaW4gcmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXMgVGhlIGFuZ2xlIGluIGRlZ3JlZXNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqL1xuY29uc3QgcmFkaWFucyA9IGRlZ3JlZXMgPT4gKE1hdGguUEkgLyAxODApICogZGVncmVlcztcblxuLyoqXG4gKiBHZXQgYW4gYW5nbGUgaW4gZGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnMgVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIGRlZ3JlZXNcbiAqL1xuY29uc3QgZGVncmVlcyA9IHJhZGlhbnMgPT4gKDE4MCAvIE1hdGguUEkpICogcmFkaWFucztcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBFeGNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXG4gKi9cbmNvbnN0IHJhbmRvbUJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICovXG5jb25zdCByYW5kb21JbnRCZXR3ZWVuID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXG4vKipcbiAqIEdldCBhIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbXU9MC41XSBUaGUgbWVhbiB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IFtzaWdtYT0wLjVdIFRoZSBzdGFuZGFyZCBkZXZpYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2FtcGxlcz0yXSBUaGUgbnVtYmVyIG9mIHNhbXBsZXNcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXG4gKi9cbmNvbnN0IGNsdFJhbmRvbSA9IChtdSA9IDAuNSwgc2lnbWEgPSAwLjUsIHNhbXBsZXMgPSAyKSA9PiB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAobGV0IGkgPSBzYW1wbGVzOyBpLS07KSB7XG4gICAgdG90YWwgKz0gTWF0aC5yYW5kb20oKTtcbiAgfVxuICByZXR1cm4gbXUgKyAodG90YWwgLSBzYW1wbGVzIC8gMikgLyAoc2FtcGxlcyAvIDIpICogc2lnbWE7XG59O1xuXG4vKipcbiAqIEdldCBhIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBpbnRlZ2VyXG4gKi9cbmNvbnN0IGNsdFJhbmRvbUludCA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihtaW4gKyBjbHRSYW5kb20oMC41LCAwLjUsIDIpICogKG1heCArIDEgLSBtaW4pKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB3ZWlnaHRlZCByYW5kb20gaW50ZWdlclxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB3IEFuIGFycmF5IG9mIHdlaWdodHNcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW5kZXggZnJvbSB3XG4gKi9cbmNvbnN0IHdlaWdodGVkUmFuZG9tID0gdyA9PiB7XG4gIGxldCB0b3RhbCA9IHcucmVkdWNlKChhLCBpKSA9PiBhICsgaSwgMCksIG4gPSAwO1xuICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsO1xuICB3aGlsZSAodG90YWwgPiByKSB7XG4gICAgdG90YWwgLT0gd1tuKytdO1xuICB9XG4gIHJldHVybiBuIC0gMTtcbn07XG5cbi8qKlxuICogQW4gaW50ZXJwb2xhdGlvbiBmdW5jdGlvblxuICogQGNhbGxiYWNrIGludGVycG9sYXRpb25DYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuXG4vKipcbiAqIFJldHVybiBhbiBpbnRlcnBvbGF0ZWQgdmFsdWUgZnJvbSBhbiBhcnJheVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIEFuIGFycmF5IG9mIHZhbHVlcyBpbnRlcnBvbGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGkgQSBudW1iZXIgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHBhcmFtIHtpbnRlcnBvbGF0aW9uQ2FsbGJhY2t9IFtmPU1hdGgubGVycF0gVGhlIGludGVycG9sYXRpb24gZnVuY3Rpb24gdG8gdXNlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW21pbihhKSwgbWF4KGEpXVxuICovXG5jb25zdCBsZXJwQXJyYXkgPSAoYSwgaSwgZiA9IGxlcnApID0+IHtcbiAgY29uc3QgcyA9IGkgKiAoYS5sZW5ndGggLSAxKTtcbiAgY29uc3QgcCA9IGNsYW1wKE1hdGgudHJ1bmMocyksIDAsIGEubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBmKGFbcF0gfHwgMCwgYVtwICsgMV0gfHwgMCwgZnJhYyhzKSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xuY29uc3QgZG90ID0gKGEsIGIpID0+IGEucmVkdWNlKChuLCB2LCBpKSA9PiBuICsgdiAqIGJbaV0sIDApO1xuXG4vKipcbiAqIEdldCB0aGUgZmFjdG9yaWFsIG9mIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYVxuICogQHJldHVybiB7bnVtYmVyfSBhIVxuICovXG5jb25zdCBmYWN0b3JpYWwgPSBhID0+IHtcbiAgbGV0IHJlc3VsdCA9IDE7XG4gIGZvciAobGV0IGkgPSAyOyBpIDw9IGE7IGkrKykge1xuICAgIHJlc3VsdCAqPSBpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgbnVtYmVyIG9mIHBlcm11dGF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEBwYXJhbSB7bnVtYmVyfSByXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5QclxuICovXG5jb25zdCBwZXJtdXRhdGlvbiA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyBmYWN0b3JpYWwobiAtIHIpO1xuXG4vKipcbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNvbWJpbmF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEBwYXJhbSB7bnVtYmVyfSByXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5DclxuICovXG5jb25zdCBjb21iaW5hdGlvbiA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyAoZmFjdG9yaWFsKHIpICogZmFjdG9yaWFsKG4gLSByKSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiBmb3IgZ2VuZXJhdGluZyBhcnJheSB2YWx1ZXNcbiAqIEBjYWxsYmFjayB0aW1lc0NhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgYXJyYXkgaW5kZXhcbiAqIEByZXR1cm4geyp9IFRoZSBhcnJheSB2YWx1ZVxuICovXG5cbi8qKlxuICogUmV0dXJuIGEgbmV3IGFycmF5IHdpdGggbGVuZ3RoIG4gYnkgY2FsbGluZyBmdW5jdGlvbiBmKGkpIG9uIGVhY2ggZWxlbWVudFxuICogQHBhcmFtIHt0aW1lc0NhbGxiYWNrfSBmXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PCo+fVxuICovXG5jb25zdCB0aW1lcyA9IChmLCBuKSA9PiBBcnJheShuKS5maWxsKDApLm1hcCgoXywgaSkgPT4gZihpKSk7XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgbnVtYmVycyAwLT4obiAtIDEpXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IEFuIGFycmF5IG9mIGludGVnZXJzIDAtPihuIC0gMSlcbiAqL1xuY29uc3QgcmFuZ2UgPSBuID0+IHRpbWVzKGkgPT4gaSwgbik7XG5cbi8qKlxuICogWmlwIDIgYXJyYXlzIHRvZ2V0aGVyLCBpLmUuIChbMSwgMiwgM10sIFthLCBiLCBjXSkgPT4gW1sxLCBhXSwgWzIsIGJdLCBbMywgY11dXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBiXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59XG4gKi9cbmNvbnN0IHppcCA9IChhLCBiKSA9PiBhLm1hcCgoaywgaSkgPT4gW2ssIGJbaV1dKTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXlbaV0gd2l0aCBwb3NpdGl2ZSBhbmQgbmVnYXRpdmUgd3JhcHBpbmdcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBwb3NpdGl2ZWx5L25lZ2F0aXZlbHkgd3JhcHBlZCBhcnJheSBpbmRleFxuICogQHJldHVybiB7Kn0gQW4gZWxlbWVudCBmcm9tIHRoZSBhcnJheVxuICovXG5jb25zdCBhdCA9IChhLCBpKSA9PiBhW2kgPCAwID8gYS5sZW5ndGggLSAoTWF0aC5hYnMoaSArIDEpICUgYS5sZW5ndGgpIC0gMSA6IGkgJSBhLmxlbmd0aF07XG5cbi8qKlxuICogQ2hvcCBhbiBhcnJheSBpbnRvIGNodW5rcyBvZiBzaXplIG5cbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjaHVuayBzaXplXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGFycmF5IGNodW5rc1xuICovXG5jb25zdCBjaHVuayA9IChhLCBuKSA9PiB0aW1lcyhpID0+IGEuc2xpY2UoaSAqIG4sIGkgKiBuICsgbiksIE1hdGguY2VpbChhLmxlbmd0aCAvIG4pKTtcblxuLyoqXG4gKiBSYW5kb21seSBzaHVmZmxlIGEgc2hhbGxvdyBjb3B5IG9mIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcmV0dXJuIHtBcnJheTwqPn0gVGhlIHNodWZmbGVkIGFycmF5XG4gKi9cbmNvbnN0IHNodWZmbGUgPSBhID0+IGEuc2xpY2UoKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZmxvYXRFcXVhbHMsXG4gICAgY2xhbXAsXG4gICAgZnJhYyxcbiAgICBsZXJwLFxuICAgIHVubGVycCxcbiAgICBibGVycCxcbiAgICByZW1hcCxcbiAgICBzbW9vdGhzdGVwLFxuICAgIHJhZGlhbnMsXG4gICAgZGVncmVlcyxcbiAgICByYW5kb21CZXR3ZWVuLFxuICAgIHJhbmRvbUludEJldHdlZW4sXG4gICAgY2x0UmFuZG9tLFxuICAgIGNsdFJhbmRvbUludCxcbiAgICB3ZWlnaHRlZFJhbmRvbSxcbiAgICBsZXJwQXJyYXksXG4gICAgZG90LFxuICAgIGZhY3RvcmlhbCxcbiAgICBwZXJtdXRhdGlvbixcbiAgICBjb21iaW5hdGlvbixcbiAgICB0aW1lcyxcbiAgICByYW5nZSxcbiAgICB6aXAsXG4gICAgYXQsXG4gICAgY2h1bmssXG4gICAgc2h1ZmZsZSxcbiAgfTtcbn1cbiIsImNvbnN0IHsgdGltZXMsIGNodW5rLCBkb3QgfSA9IHJlcXVpcmUoJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJyk7XG5cbi8qKlxuICogQG92ZXJ2aWV3IEEgbGlicmFyeSBvZiB1c2VmdWwgZnVuY3Rpb25zXG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxuICovXG5cbi8qKlxuICogQSAyZCB2ZWN0b3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHZlY1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHggVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB5IFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcnx2ZWN9IFt4XSBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3Rvciwgb3IgYSB2ZWN0b3IgdG8gY29weVxuICogQHBhcmFtIHtudW1iZXJ9IFt5XSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjfSBBIG5ldyB2ZWN0b3JcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlZhcmlvdXMgd2F5cyB0byBpbml0aWFsaXNlIGEgdmVjdG9yPC9jYXB0aW9uPlxuICogbGV0IGEgPSB2ZWMoMywgMik7ICAvLyAoMywgMilcbiAqIGxldCBiID0gdmVjKDQpOyAgICAgLy8gKDQsIDQpXG4gKiBsZXQgYyA9IHZlYyhhKTsgICAgIC8vICgzLCAyKVxuICogbGV0IGQgPSB2ZWMoKTsgICAgICAvLyAoMCwgMClcbiAqL1xuY29uc3QgdmVjID0gKHgsIHkpID0+ICgheCAmJiAheSA/XG4gIHsgeDogMCwgeTogMCB9IDogKHR5cGVvZiB4ID09PSAnb2JqZWN0JyA/XG4gICAgeyB4OiB4LnggfHwgMCwgeTogeC55IHx8IDAgfSA6ICh5ID09PSBudWxsIHx8IHkgPT09IHVuZGVmaW5lZCA/XG4gICAgICB7IHg6IHgsIHk6IHggfSA6IHsgeDogeCwgeTogeSB9KVxuICApXG4pO1xuXG4vKipcbiAqIEdldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlY3RvciBhcyBhbiBhcnJheVxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBnZXQgY29tcG9uZW50cyBmcm9tXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUaGUgdmVjdG9yIGNvbXBvbmVudHMgYXMgYW4gYXJyYXlcbiAqL1xudmVjLmNvbXBvbmVudHMgPSBhID0+IFthLngsIGEueV07XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDEsIDApXG4gKiBAcmV0dXJuIHt2ZWN9IEEgdW5pdCB2ZWN0b3IgKDEsIDApXG4gKi9cbnZlYy51eCA9ICgpID0+IHZlYygxLCAwKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMSlcbiAqIEByZXR1cm4ge3ZlY30gQSB1bml0IHZlY3RvciAoMCwgMSlcbiAqL1xudmVjLnV5ID0gKCkgPT4gdmVjKDAsIDEpO1xuXG4vKipcbiAqIEFkZCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge3ZlY30gYSArIGJcbiAqL1xudmVjLmFkZCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKyBiLngsIHk6IGEueSArIGIueSB9KTtcblxuLyoqXG4gKiBTY2FsZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWN9IGEgKiBiXG4gKi9cbnZlYy5tdWwgPSAoYSwgYikgPT4gKHsgeDogYS54ICogYiwgeTogYS55ICogYiB9KTtcblxuLyoqXG4gKiBTdWJ0cmFjdCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge3ZlY30gYSAtIGJcbiAqL1xudmVjLnN1YiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLSBiLngsIHk6IGEueSAtIGIueSB9KTtcblxuLyoqXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYy5sZW4gPSBhID0+IE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkpO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIHVzaW5nIHRheGljYWIgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxuICovXG52ZWMubWFuaGF0dGFuID0gYSA9PiBNYXRoLmFicyhhLngpICsgTWF0aC5hYnMoYS55KTtcblxuLyoqXG4gKiBOb3JtYWxpc2UgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXNlXG4gKiBAcmV0dXJuIHt2ZWN9IF5hXG4gKi9cbnZlYy5ub3IgPSBhID0+IHtcbiAgbGV0IGxlbiA9IHZlYy5sZW4oYSk7XG4gIHJldHVybiBsZW4gPyB7IHg6IGEueCAvIGxlbiwgeTogYS55IC8gbGVuIH0gOiB2ZWMoKTtcbn07XG5cbi8qKlxuICogR2V0IGEgZG90IHByb2R1Y3Qgb2YgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xudmVjLmRvdCA9IChhLCBiKSA9PiBhLnggKiBiLnggKyBhLnkgKiBiLnk7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIGJ5IHIgcmFkaWFuc1xuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBhbmdsZSB0byByb3RhdGUgYnksIG1lYXN1cmVkIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge3ZlY30gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMucm90ID0gKGEsIHIpID0+IHtcbiAgbGV0IHMgPSBNYXRoLnNpbihyKSxcbiAgICBjID0gTWF0aC5jb3Mocik7XG4gIHJldHVybiB7IHg6IGMgKiBhLnggLSBzICogYS55LCB5OiBzICogYS54ICsgYyAqIGEueSB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2ZWN0b3JzIGFyZSBlcXVhbFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZlY3RvcnMgYSBhbmQgYiBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZVxuICovXG52ZWMuZXEgPSAoYSwgYikgPT4gYS54ID09PSBiLnggJiYgYS55ID09PSBiLnk7XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcbiAqL1xudmVjLnJhZCA9IGEgPT4gTWF0aC5hdGFuMihhLnksIGEueCk7XG5cbi8qKlxuICogQ29weSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb3B5XG4gKiBAcmV0dXJuIHt2ZWN9IEEgY29weSBvZiB2ZWN0b3IgYVxuICovXG52ZWMuY3B5ID0gYSA9PiB2ZWMoYSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yXG4gKiBAY2FsbGJhY2sgdmVjdG9yTWFwQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgY29tcG9uZW50IHZhbHVlXG4gKiBAcGFyYW0geyd4JyB8ICd5J30gbGFiZWwgVGhlIGNvbXBvbmVudCBsYWJlbCAoeCBvciB5KVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGNvbXBvbmVudFxuICovXG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yIGFuZCBidWlsZCBhIG5ldyB2ZWN0b3IgZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjdG9yTWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjfSBWZWN0b3IgYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbnZlYy5tYXAgPSAoYSwgZikgPT4gKHsgeDogZihhLngsICd4JyksIHk6IGYoYS55LCAneScpIH0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSB2ZWN0b3IgaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG52ZWMuc3RyID0gKGEsIHMgPSAnLCAnKSA9PiBgJHthLnh9JHtzfSR7YS55fWA7XG5cbi8qKlxuICogQSBtYXRyaXhcbiAqIEB0eXBlZGVmIHtPYmplY3R9IG1hdFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG0gVGhlIG51bWJlciBvZiByb3dzIGluIHRoZSBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgbWF0cml4XG4gKiBAcHJvcGVydHkge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIG1hdHJpeCB2YWx1ZXNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBtYXRyaXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbT00XSBUaGUgbnVtYmVyIG9mIHJvd3NcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbj00XSBUaGUgbnVtYmVyIG9mIGNvbHVtbnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2VudHJpZXM9W11dIE1hdHJpeCB2YWx1ZXMgaW4gcmVhZGluZyBvcmRlclxuICogQHJldHVybiB7bWF0fSBBIG5ldyBtYXRyaXhcbiAqL1xuY29uc3QgbWF0ID0gKG0gPSA0LCBuID0gNCwgZW50cmllcyA9IFtdKSA9PiAoe1xuICBtLCBuLFxuICBlbnRyaWVzOiBlbnRyaWVzLmNvbmNhdChBcnJheShtICogbikuZmlsbCgwKSkuc2xpY2UoMCwgbSAqIG4pXG59KTtcblxuLyoqXG4gKiBHZXQgYW4gaWRlbnRpdHkgbWF0cml4IG9mIHNpemUgblxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybiB7bWF0fSBBbiBpZGVudGl0eSBtYXRyaXhcbiAqL1xubWF0LmlkZW50aXR5ID0gbiA9PiBtYXQobiwgbiwgQXJyYXkobiAqIG4pLmZpbGwoMCkubWFwKCh2LCBpKSA9PiArKE1hdGguZmxvb3IoaSAvIG4pID09PSBpICUgbikpKTtcblxuLyoqXG4gKiBHZXQgYW4gZW50cnkgZnJvbSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgdmFsdWUgYXQgcG9zaXRpb24gKGksIGopIGluIG1hdHJpeCBhXG4gKi9cbm1hdC5nZXQgPSAoYSwgaSwgaikgPT4gYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXTtcblxuLyoqXG4gKiBTZXQgYW4gZW50cnkgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB2IFRoZSB2YWx1ZSB0byBzZXQgaW4gbWF0cml4IGFcbiAqL1xubWF0LnNldCA9IChhLCBpLCBqLCB2KSA9PiB7IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl0gPSB2OyB9O1xuXG4vKipcbiAqIEdldCBhIHJvdyBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IG0gVGhlIHJvdyBvZmZzZXRcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFJvdyBtIGZyb20gbWF0cml4IGFcbiAqL1xubWF0LnJvdyA9IChhLCBtKSA9PiB7XG4gIGNvbnN0IHMgPSAobSAtIDEpICogYS5uO1xuICByZXR1cm4gYS5lbnRyaWVzLnNsaWNlKHMsIHMgKyBhLm4pO1xufTtcblxuLyoqXG4gKiBHZXQgYSBjb2x1bW4gZnJvbSBhIG1hdHJpeCBhcyBhbiBhcnJheVxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBDb2x1bW4gbiBmcm9tIG1hdHJpeCBhXG4gKi9cbm1hdC5jb2wgPSAoYSwgbikgPT4gdGltZXMoaSA9PiBtYXQuZ2V0KGEsIChpICsgMSksIG4pLCBhLm0pO1xuXG4vKipcbiAqIEFkZCBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR9IGEgKyBiXG4gKi9cbm1hdC5hZGQgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiArIGIuZW50cmllc1tpXSk7XG5cbi8qKlxuICogU3VidHJhY3QgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fSBhIC0gYlxuICovXG5tYXQuc3ViID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5tYXAoYSwgKHYsIGkpID0+IHYgLSBiLmVudHJpZXNbaV0pO1xuXG4vKipcbiAqIE11bHRpcGx5IG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBhYiBvciBmYWxzZSBpZiB0aGUgbWF0cmljZXMgY2Fubm90IGJlIG11bHRpcGxpZWRcbiAqL1xubWF0Lm11bCA9IChhLCBiKSA9PiB7XG4gIGlmIChhLm4gIT09IGIubSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgcmVzdWx0ID0gbWF0KGEubSwgYi5uKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBiLm47IGorKykge1xuICAgICAgbWF0LnNldChyZXN1bHQsIGksIGosIGRvdChtYXQucm93KGEsIGkpLCBtYXQuY29sKGIsIGopKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFNjYWxlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcbiAqIEByZXR1cm4ge21hdH0gYSAqIGJcbiAqL1xubWF0LnNjYWxlID0gKGEsIGIpID0+IG1hdC5tYXAoYSwgdiA9PiB2ICogYik7XG5cbi8qKlxuICogVHJhbnNwb3NlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIHRyYW5zcG9zZVxuICogQHJldHVybiB7bWF0fSBBIHRyYW5zcG9zZWQgbWF0cml4XG4gKi9cbm1hdC50cmFucyA9IGEgPT4gbWF0KGEubiwgYS5tLCB0aW1lcyhpID0+IG1hdC5jb2woYSwgKGkgKyAxKSksIGEubikuZmxhdCgpKTtcblxuLyoqXG4gKiBHZXQgdGhlIG1pbm9yIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gVGhlIChpLCBqKSBtaW5vciBvZiBtYXRyaXggYSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0Lm1pbm9yID0gKGEsIGksIGopID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBlbnRyaWVzID0gW107XG4gIGZvciAobGV0IGlpID0gMTsgaWkgPD0gYS5tOyBpaSsrKSB7XG4gICAgaWYgKGlpID09PSBpKSB7IGNvbnRpbnVlOyB9XG4gICAgZm9yIChsZXQgamogPSAxOyBqaiA8PSBhLm47IGpqKyspIHtcbiAgICAgIGlmIChqaiA9PT0gaikgeyBjb250aW51ZTsgfVxuICAgICAgZW50cmllcy5wdXNoKG1hdC5nZXQoYSwgaWksIGpqKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXQoYS5tIC0gMSwgYS5uIC0gMSwgZW50cmllcyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcmV0dXJuIHtudW1iZXJ8Ym9vbGVhbn0gfGF8IG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQuZGV0ID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGEubSA9PT0gMSkge1xuICAgIHJldHVybiBhLmVudHJpZXNbMF07XG4gIH1cbiAgaWYgKGEubSA9PT0gMikge1xuICAgIHJldHVybiBhLmVudHJpZXNbMF0gKiBhLmVudHJpZXNbM10gLSBhLmVudHJpZXNbMV0gKiBhLmVudHJpZXNbMl07XG4gIH1cbiAgbGV0IHRvdGFsID0gMCwgc2lnbiA9IDE7XG4gIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XG4gICAgdG90YWwgKz0gc2lnbiAqIGEuZW50cmllc1tqIC0gMV0gKiBtYXQuZGV0KG1hdC5taW5vcihhLCAxLCBqKSk7XG4gICAgc2lnbiAqPSAtMTtcbiAgfVxuICByZXR1cm4gdG90YWw7XG59O1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBub3JtYWxpc2VcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBeYSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0Lm5vciA9IGEgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGQgPSBtYXQuZGV0KGEpO1xuICByZXR1cm4gbWF0Lm1hcChhLCBpID0+IGkgKiBkKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCBmcm9tIHdoaWNoIHRvIGdldCB0aGUgYWRqdWdhdGVcbiAqIEByZXR1cm4ge21hdH0gVGhlIGFkanVnYXRlIG9mIGFcbiAqL1xubWF0LmFkaiA9IGEgPT4ge1xuICBjb25zdCBtaW5vcnMgPSBtYXQoYS5tLCBhLm4pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XG4gICAgICBtYXQuc2V0KG1pbm9ycywgaSwgaiwgbWF0LmRldChtYXQubWlub3IoYSwgaSwgaikpKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY29mYWN0b3JzID0gbWF0Lm1hcChtaW5vcnMsICh2LCBpKSA9PiB2ICogKGkgJSAyID8gLTEgOiAxKSk7XG4gIHJldHVybiBtYXQudHJhbnMoY29mYWN0b3JzKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBpbnZlcnNlIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGludmVydFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IGFeLTEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBoYXMgbm8gaW52ZXJzZVxuICovXG5tYXQuaW52ID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XG4gIGlmIChkID09PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuICByZXR1cm4gbWF0LnNjYWxlKG1hdC5hZGooYSksIDEgLyBkKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIG1hdHJpY2VzIGFyZSBlcXVhbFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1hdHJpY2VzIGEgYW5kIGIgYXJlIGlkZW50aWNhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbm1hdC5lcSA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQuc3RyKGEpID09PSBtYXQuc3RyKGIpO1xuXG4vKipcbiAqIENvcHkgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29weVxuICogQHJldHVybiB7bWF0fSBBIGNvcHkgb2YgbWF0cml4IGFcbiAqL1xubWF0LmNweSA9IGEgPT4gbWF0KGEubSwgYS5uLCBbLi4uYS5lbnRyaWVzXSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXhcbiAqIEBjYWxsYmFjayBtYXRyaXhNYXBDYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBlbnRyeSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBlbnRyeSBpbmRleFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBhcnJheSBvZiBtYXRyaXggZW50cmllc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGVudHJ5XG4gKi9cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeCBhbmQgYnVpbGQgYSBuZXcgbWF0cml4IGZyb20gdGhlIHJlc3VsdHNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdHJpeE1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybiB7bWF0fSBNYXRyaXggYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbm1hdC5tYXAgPSAoYSwgZikgPT4gbWF0KGEubSwgYS5uLCBhLmVudHJpZXMubWFwKGYpKTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgbWF0cml4IGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29udmVydFxuICogQHBhcmFtIHtzdHJpbmd9IFttcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3IgY29sdW1uc1xuICogQHBhcmFtIHtzdHJpbmd9IFtucz0nXFxuJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIHJvd3NcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5tYXQuc3RyID0gKGEsIG1zID0gJywgJywgbnMgPSAnXFxuJykgPT4gY2h1bmsoYS5lbnRyaWVzLCBhLm4pLm1hcChyID0+IHIuam9pbihtcykpLmpvaW4obnMpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IHZlYywgbWF0IH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2ZWNfMSA9IHJlcXVpcmUoXCJAYmFzZW1lbnR1bml2ZXJzZS92ZWNcIik7XG5jbGFzcyBJbnB1dE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5rZXlib2FyZFN0YXRlID0ge307XG4gICAgICAgIHRoaXMucHJldmlvdXNLZXlib2FyZFN0YXRlID0ge307XG4gICAgICAgIHRoaXMubW91c2VTdGF0ZSA9IHsgYnV0dG9uOiBmYWxzZSwgcG9zaXRpb246ICgwLCB2ZWNfMS52ZWMpKCksIHdoZWVsOiAwIH07XG4gICAgICAgIHRoaXMucHJldmlvdXNNb3VzZVN0YXRlID0geyBidXR0b246IGZhbHNlLCBwb3NpdGlvbjogKDAsIHZlY18xLnZlYykoKSwgd2hlZWw6IDAgfTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgSW5wdXRNYW5hZ2VyLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fSk7XG4gICAgICAgIC8vIFNldCB1cCBldmVudCBoYW5kbGVyc1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vdXNlKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW91c2VTdGF0ZS5idXR0b24gPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlU3RhdGUuYnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW91c2VTdGF0ZS5idXR0b24gPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlLmJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlLnBvc2l0aW9uLnggPSBlLm9mZnNldFg7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlLnBvc2l0aW9uLnkgPSBlLm9mZnNldFk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW91c2VXaGVlbCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdXNlU3RhdGUud2hlZWwgPSBlLmRlbHRhWSA+IDAgPyAxIDogLTE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5rZXlib2FyZCkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkU3RhdGVbZS5jb2RlXSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRTdGF0ZVtlLmNvZGVdID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBpbnB1dCBtYW5hZ2VyIGZvciBtYW5hZ2luZyBtb3VzZSBhbmQga2V5Ym9hcmQgaW5wdXRcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5pdGlhbGlzZShvcHRpb25zKSB7XG4gICAgICAgIGlmIChJbnB1dE1hbmFnZXIuaW5zdGFuY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBtYW5hZ2VyIGFscmVhZHkgaW5pdGlhbGlzZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBJbnB1dE1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgSW5wdXRNYW5hZ2VyKG9wdGlvbnMpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmIChJbnB1dE1hbmFnZXIuaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBtYW5hZ2VyIG5vdCBwcm9wZXJseSBpbml0aWFsaXNlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBJbnB1dE1hbmFnZXIuaW5zdGFuY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IGRldmljZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBpbnN0YW5jZS5wcmV2aW91c0tleWJvYXJkU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBpbnN0YW5jZS5rZXlib2FyZFN0YXRlKTtcbiAgICAgICAgaW5zdGFuY2UucHJldmlvdXNNb3VzZVN0YXRlID0ge1xuICAgICAgICAgICAgLi4uaW5zdGFuY2UubW91c2VTdGF0ZSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB2ZWNfMS52ZWMuY3B5KGluc3RhbmNlLm1vdXNlU3RhdGUucG9zaXRpb24pLFxuICAgICAgICAgICAgd2hlZWw6IDAsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEga2V5IGlzIGN1cnJlbnRseSBwcmVzc2VkIGRvd25cbiAgICAgKi9cbiAgICBzdGF0aWMga2V5RG93bihjb2RlKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICAgIC8vIENoZWNrIGlmIGFueSBrZXkgaXMgZG93blxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgayBpbiBpbnN0YW5jZS5rZXlib2FyZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLmtleWJvYXJkU3RhdGVba10pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhIWluc3RhbmNlLmtleWJvYXJkU3RhdGVbY29kZV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEga2V5IGhhcyBiZWVuIHByZXNzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcbiAgICAgKi9cbiAgICBzdGF0aWMga2V5UHJlc3NlZChjb2RlKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICAgIC8vIENoZWNrIGlmIGFueSBrZXkgd2FzIHByZXNzZWRcbiAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGsgaW4gaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZS5rZXlib2FyZFN0YXRlW2tdICYmXG4gICAgICAgICAgICAgICAgICAgICghKGsgaW4gaW5zdGFuY2UucHJldmlvdXNLZXlib2FyZFN0YXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgIWluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZVtrXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhIWluc3RhbmNlLmtleWJvYXJkU3RhdGVbY29kZV0gJiYgIWluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZVtjb2RlXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBrZXkgaGFzIGJlZW4gcmVsZWFzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcbiAgICAgKi9cbiAgICBzdGF0aWMga2V5UmVsZWFzZWQoY29kZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICAvLyBDaGVjayBpZiBhbnkga2V5IHdhcyByZWxlYXNlZFxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgayBpbiBpbnN0YW5jZS5rZXlib2FyZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5rZXlib2FyZFN0YXRlW2tdICYmXG4gICAgICAgICAgICAgICAgICAgICEhaW5zdGFuY2UucHJldmlvdXNLZXlib2FyZFN0YXRlW2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIWluc3RhbmNlLmtleWJvYXJkU3RhdGVbY29kZV0gJiYgISFpbnN0YW5jZS5wcmV2aW91c0tleWJvYXJkU3RhdGVbY29kZV07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgbW91c2UgYnV0dG9uIGlzIGN1cnJlbnRseSBwcmVzc2VkIGRvd25cbiAgICAgKi9cbiAgICBzdGF0aWMgbW91c2VEb3duKCkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICByZXR1cm4gISFpbnN0YW5jZS5tb3VzZVN0YXRlLmJ1dHRvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBtb3VzZSBidXR0b24gaGFzIGJlZW4gcHJlc3NlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyBtb3VzZVByZXNzZWQoKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHJldHVybiAhIWluc3RhbmNlLm1vdXNlU3RhdGUuYnV0dG9uICYmICFpbnN0YW5jZS5wcmV2aW91c01vdXNlU3RhdGUuYnV0dG9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIG1vdXNlIGJ1dHRvbiBoYXMgYmVlbiByZWxlYXNlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyBtb3VzZVJlbGVhc2VkKCkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICByZXR1cm4gIWluc3RhbmNlLm1vdXNlU3RhdGUuYnV0dG9uICYmICEhaW5zdGFuY2UucHJldmlvdXNNb3VzZVN0YXRlLmJ1dHRvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIG1vdXNld2hlZWwgaXMgc2Nyb2xsaW5nIHVwXG4gICAgICovXG4gICAgc3RhdGljIG1vdXNlV2hlZWxVcCgpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLm1vdXNlU3RhdGUud2hlZWwgPiAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgbW91c2V3aGVlbCBpcyBzY3JvbGxpbmcgZG93blxuICAgICAqL1xuICAgIHN0YXRpYyBtb3VzZVdoZWVsRG93bigpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLm1vdXNlU3RhdGUud2hlZWwgPCAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgbW91c2UgcG9zaXRpb24gaW4gc2NyZWVuLXNwYWNlXG4gICAgICovXG4gICAgc3RhdGljIGdldCBtb3VzZVBvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UubW91c2VTdGF0ZS5wb3NpdGlvbjtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBJbnB1dE1hbmFnZXI7XG5JbnB1dE1hbmFnZXIuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgbW91c2U6IHRydWUsXG4gICAgbW91c2VXaGVlbDogdHJ1ZSxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5cGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMQ3REUVVFMFF6dEJRVFpDTlVNc1RVRkJjVUlzV1VGQldUdEpRVzFDTDBJc1dVRkJiMElzVDBGQkswSTdVVUZTTTBNc2EwSkJRV0VzUjBGQmEwSXNSVUZCUlN4RFFVRkRPMUZCUld4RExEQkNRVUZ4UWl4SFFVRnJRaXhGUVVGRkxFTkJRVU03VVVGRk1VTXNaVUZCVlN4SFFVRmxMRVZCUVVVc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFJRVUZSTEVWQlFVVXNTVUZCUVN4VFFVRkhMRWRCUVVVc1JVRkJSU3hMUVVGTExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdVVUZGZEVVc2RVSkJRV3RDTEVkQlFXVXNSVUZCUlN4TlFVRk5MRVZCUVVVc1MwRkJTeXhGUVVGRkxGRkJRVkVzUlVGQlJTeEpRVUZCTEZOQlFVY3NSMEZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF6dFJRVWR3Uml4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRmxCUVZrc1EwRkJReXhqUVVGakxFVkJRVVVzVDBGQlR5eGhRVUZRTEU5QlFVOHNZMEZCVUN4UFFVRlBMRWRCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU03VVVGRk4wVXNkMEpCUVhkQ08xRkJRM2hDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVU3V1VGRGRFSXNUVUZCVFN4RFFVRkRMR2RDUVVGblFpeERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkhMRVZCUVVVN1owSkJRM2hETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF6dFpRVU5vUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOSUxFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhUUVVGVExFVkJRVVVzUjBGQlJ5eEZRVUZGTzJkQ1FVTjBReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNN1dVRkRha01zUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEU0N4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWRCUVVjc1JVRkJSVHRuUWtGRGVrTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETzFsQlEyaERMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMGdzVFVGQlRTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExGVkJRVlVzUlVGQlJTeEhRVUZITEVWQlFVVTdaMEpCUTNaRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJRenRaUVVOcVF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTklMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVU3WjBKQlEzWkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRE8yZENRVU4yUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJRenRaUVVONlF5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTklMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVTdaMEpCUXpOQ0xFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVTdiMEpCUTI1RExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVTm9SQ3hEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5LTzFOQlEwWTdVVUZEUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlEzcENMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVU3WjBKQlEzSkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVOd1F5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTklMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVU3WjBKQlEyNURMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRaUVVOeVF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTktPMGxCUTBnc1EwRkJRenRKUVVWRU96dFBRVVZITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhQUVVFclFqdFJRVU4wUkN4SlFVRkpMRmxCUVZrc1EwRkJReXhSUVVGUkxFdEJRVXNzVTBGQlV5eEZRVUZGTzFsQlEzWkRMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYlVOQlFXMURMRU5CUVVNc1EwRkJRenRUUVVOMFJEdFJRVU5FTEZsQlFWa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTU3haUVVGWkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTVUZEY0VRc1EwRkJRenRKUVVWUExFMUJRVTBzUTBGQlF5eFhRVUZYTzFGQlEzaENMRWxCUVVrc1dVRkJXU3hEUVVGRExGRkJRVkVzUzBGQlN5eFRRVUZUTEVWQlFVVTdXVUZEZGtNc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eDNRMEZCZDBNc1EwRkJReXhEUVVGRE8xTkJRek5FTzFGQlJVUXNUMEZCVHl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRE8wbEJReTlDTEVOQlFVTTdTVUZGUkRzN1QwRkZSenRKUVVOSkxFMUJRVTBzUTBGQlF5eE5RVUZOTzFGQlEyeENMRTFCUVUwc1VVRkJVU3hIUVVGSExGbEJRVmtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVVTFReXhSUVVGUkxFTkJRVU1zY1VKQlFYRkNMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlFVVXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJRek5GTEZGQlFWRXNRMEZCUXl4clFrRkJhMElzUjBGQlJ6dFpRVU0xUWl4SFFVRkhMRkZCUVZFc1EwRkJReXhWUVVGVk8xbEJRM1JDTEZGQlFWRXNSVUZCUlN4VFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRPMWxCUXk5RExFdEJRVXNzUlVGQlJTeERRVUZETzFOQlExUXNRMEZCUXp0SlFVTktMRU5CUVVNN1NVRkZSRHM3VDBGRlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJZVHRSUVVOcVF5eE5RVUZOTEZGQlFWRXNSMEZCUnl4WlFVRlpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRk5VTXNNa0pCUVRKQ08xRkJRek5DTEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVN1dVRkRWQ3hMUVVGTExFMUJRVTBzUTBGQlF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4aFFVRmhMRVZCUVVVN1owSkJRM1JETEVsQlFVa3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdHZRa0ZETjBJc1QwRkJUeXhKUVVGSkxFTkJRVU03YVVKQlEySTdZVUZEUmp0WlFVTkVMRTlCUVU4c1MwRkJTeXhEUVVGRE8xTkJRMlE3VVVGRlJDeFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEzaERMRU5CUVVNN1NVRkZSRHM3VDBGRlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJZVHRSUVVOd1F5eE5RVUZOTEZGQlFWRXNSMEZCUnl4WlFVRlpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRk5VTXNLMEpCUVN0Q08xRkJReTlDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVN1dVRkRWQ3hMUVVGTExFMUJRVTBzUTBGQlF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4aFFVRmhMRVZCUVVVN1owSkJRM1JETEVsQlEwVXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlEzcENMRU5CUTBVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU03ZDBKQlEzUkRMRU5CUVVNc1VVRkJVU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVOdVF5eEZRVU5FTzI5Q1FVTkJMRTlCUVU4c1NVRkJTU3hEUVVGRE8ybENRVU5pTzJGQlEwWTdXVUZEUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRUUVVOa08xRkJSVVFzVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTnFSaXhEUVVGRE8wbEJSVVE3TzA5QlJVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRV0U3VVVGRGNrTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1dVRkJXU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlJUVkRMR2REUVVGblF6dFJRVU5vUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRk8xbEJRMVFzUzBGQlN5eE5RVUZOTEVOQlFVTXNTVUZCU1N4UlFVRlJMRU5CUVVNc1lVRkJZU3hGUVVGRk8yZENRVU4wUXl4SlFVTkZMRU5CUVVNc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETEVOQlFVTTdiMEpCUXpGQ0xFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVWQlEyNURPMjlDUVVOQkxFOUJRVThzU1VGQlNTeERRVUZETzJsQ1FVTmlPMkZCUTBZN1dVRkRSQ3hQUVVGUExFdEJRVXNzUTBGQlF6dFRRVU5rTzFGQlJVUXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOcVJpeERRVUZETzBsQlJVUTdPMDlCUlVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVTBGQlV6dFJRVU55UWl4TlFVRk5MRkZCUVZFc1IwRkJSeXhaUVVGWkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZGTlVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkRkRU1zUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1RVRkJUU3hEUVVGRExGbEJRVms3VVVGRGVFSXNUVUZCVFN4UlFVRlJMRWRCUVVjc1dVRkJXU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlJUVkRMRTlCUVU4c1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRTFCUVUwc1EwRkJRenRKUVVNM1JTeERRVUZETzBsQlJVUTdPMDlCUlVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWVVGQllUdFJRVU42UWl4TlFVRk5MRkZCUVZFc1IwRkJSeXhaUVVGWkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZGTlVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJRemRGTEVOQlFVTTdTVUZGUkRzN1QwRkZSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFpRVUZaTzFGQlEzaENMRTFCUVUwc1VVRkJVU3hIUVVGSExGbEJRVmtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVVTFReXhQUVVGUExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOMlF5eERRVUZETzBsQlJVUTdPMDlCUlVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zWTBGQll6dFJRVU14UWl4TlFVRk5MRkZCUVZFc1IwRkJSeXhaUVVGWkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZGTlVNc1QwRkJUeXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRka01zUTBGQlF6dEpRVVZFT3p0UFFVVkhPMGxCUTBrc1RVRkJUU3hMUVVGTExHRkJRV0U3VVVGRE4wSXNUVUZCVFN4UlFVRlJMRWRCUVVjc1dVRkJXU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETzFGQlJUVkRMRTlCUVU4c1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTTdTVUZEZEVNc1EwRkJRenM3UVVFNVRVZ3NLMEpCSzAxRE8wRkJOVTE1UWl3eVFrRkJZeXhIUVVGcFFqdEpRVU55UkN4TFFVRkxMRVZCUVVVc1NVRkJTVHRKUVVOWUxGVkJRVlVzUlVGQlJTeEpRVUZKTzBsQlEyaENMRkZCUVZFc1JVRkJSU3hKUVVGSk8wTkJRMllzUTBGQlF5SjkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./node_modules/@basementuniverse/scene-manager/build/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@basementuniverse/scene-manager/build/index.js ***!
  \*********************************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scene = exports.SceneTransitionState = void 0;
var SceneTransitionState;
(function (SceneTransitionState) {
    SceneTransitionState[SceneTransitionState["In"] = 0] = "In";
    SceneTransitionState[SceneTransitionState["Out"] = 1] = "Out";
    SceneTransitionState[SceneTransitionState["None"] = 2] = "None";
})(SceneTransitionState = exports.SceneTransitionState || (exports.SceneTransitionState = {}));
function clamp(a, min = 0, max = 1) {
    return a < min ? min : (a > max ? max : a);
}
class SceneManager {
    constructor() {
        this.scenes = [];
    }
    /**
     * Initialise the scene manager for managing game scenes
     */
    static initialise() {
        if (SceneManager.instance) {
            throw new Error('SceneManager already initialised');
        }
        SceneManager.instance = new SceneManager();
    }
    static getInstance() {
        if (!SceneManager.instance) {
            throw new Error('SceneManager not properly initialised');
        }
        return SceneManager.instance;
    }
    /**
     * Push a scene onto the scene stack and start transitioning in
     */
    static push(scene) {
        const instance = SceneManager.getInstance();
        instance.scenes.push(scene);
        // Initialise the scene and start the transition
        scene.initialise();
        scene.transitionIn();
        return scene;
    }
    /**
     * Remove a scene from the scene stack after transitioning out
     */
    static pop() {
        const instance = SceneManager.getInstance();
        if (instance.scenes.length > 0) {
            let last = instance.scenes.length - 1;
            // Remove the top-most scene that isn't currently transitioning out
            while (last > 0 &&
                instance.scenes[last].transitionState === SceneTransitionState.Out) {
                last--;
            }
            if (last >= 0) {
                const scene = instance.scenes[last];
                // Start transitioning out
                scene.transitionOut();
                return scene;
            }
        }
        return undefined;
    }
    /**
     * Remove all scene from the scene stack
     */
    static clear() {
        const instance = SceneManager.getInstance();
        instance.scenes.forEach(scene => {
            if (scene.transitionState !== SceneTransitionState.Out) {
                scene.transitionOut();
            }
        });
    }
    /**
     * Update the scene manager and the current scene
     */
    static update(dt, ...args) {
        const instance = SceneManager.getInstance();
        if (instance.scenes.length > 0) {
            // Only update the top-most scene that isn't currently transitioning out
            for (let i = instance.scenes.length; i--;) {
                if (instance.scenes[i].transitionState !== SceneTransitionState.Out) {
                    instance.scenes[i].update(dt, ...args);
                    break;
                }
            }
            // Update all scene transitions
            instance.scenes.forEach(scene => {
                scene.updateTransition(dt);
            });
            // Remove any disposed scenes
            instance.scenes = instance.scenes.filter(scene => !scene.disposed);
        }
    }
    /**
     * Render scenes on the screen
     */
    static draw(context, ...args) {
        const instance = SceneManager.getInstance();
        // Figure out which scenes we need to draw
        const drawList = [];
        for (let i = instance.scenes.length; i--;) {
            const scene = instance.scenes[i];
            drawList.push(scene);
            // If transitioning, this scene is assumed to be transparent
            // (we might want to show the scene underneath if we're doing e.g. a fade)
            if (!scene.transparent &&
                scene.transitionState === SceneTransitionState.None) {
                break;
            }
        }
        // Draw the scenes in bottom -> top order
        drawList.reverse().forEach(scene => {
            scene.draw(context, ...args);
        });
    }
}
exports["default"] = SceneManager;
class Scene {
    constructor(options) {
        this.defaultOptions = {
            transitionTime: 2,
            transparent: true,
        };
        this.transitionState = SceneTransitionState.None;
        this.transitionAmount = 0;
        this.transitionTime = 0;
        this.transparent = false;
        this.disposed = false;
        const actualOptions = Object.assign({}, this.defaultOptions, options);
        this.transitionTime = actualOptions.transitionTime;
        this.transparent = actualOptions.transparent;
    }
    dispose() {
        this.disposed = true;
    }
    transitionIn() {
        this.transitionState = SceneTransitionState.In;
    }
    transitionOut() {
        this.transitionState = SceneTransitionState.Out;
    }
    updateTransition(dt) {
        const amount = dt / this.transitionTime;
        // Transitioning in
        if (this.transitionState === SceneTransitionState.In) {
            if (this.transitionAmount < 1) {
                this.transitionAmount = clamp(this.transitionAmount + amount);
            }
            else {
                this.transitionState = SceneTransitionState.None;
            }
        }
        // Transitioning out
        if (this.transitionState === SceneTransitionState.Out) {
            if (this.transitionAmount > 0) {
                this.transitionAmount = clamp(this.transitionAmount - amount);
            }
            else {
                this.dispose();
            }
        }
    }
}
exports.Scene = Scene;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFZQSxJQUFZLG9CQUlYO0FBSkQsV0FBWSxvQkFBb0I7SUFDOUIsMkRBQUUsQ0FBQTtJQUNGLDZEQUFHLENBQUE7SUFDSCwrREFBSSxDQUFBO0FBQ04sQ0FBQyxFQUpXLG9CQUFvQixHQUFwQiw0QkFBb0IsS0FBcEIsNEJBQW9CLFFBSS9CO0FBRUQsU0FBUyxLQUFLLENBQUMsQ0FBUyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDeEMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBRUQsTUFBcUIsWUFBWTtJQUsvQjtRQUZRLFdBQU0sR0FBWSxFQUFFLENBQUM7SUFFTixDQUFDO0lBRXhCOztPQUVHO0lBQ0ksTUFBTSxDQUFDLFVBQVU7UUFDdEIsSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztTQUNyRDtRQUNELFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU8sTUFBTSxDQUFDLFdBQVc7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7WUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1NBQzFEO1FBRUQsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBWTtRQUM3QixNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.ts"](0, __nested_webpack_exports__);
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxhQUFhLEdBQUcsNEJBQTRCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDBEQUEwRCw0QkFBNEIsS0FBSztBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxJQUFJO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxJQUFJO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLDJDQUEyQzs7Ozs7OztVRXRLM0M7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3NjZW5lLW1hbmFnZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BiYXNlbWVudHVuaXZlcnNlL3NjZW5lLW1hbmFnZXIvLi9pbmRleC50cyIsIndlYnBhY2s6Ly9AYmFzZW1lbnR1bml2ZXJzZS9zY2VuZS1tYW5hZ2VyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvc2NlbmUtbWFuYWdlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQGJhc2VtZW50dW5pdmVyc2Uvc2NlbmUtbWFuYWdlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2NlbmUgPSBleHBvcnRzLlNjZW5lVHJhbnNpdGlvblN0YXRlID0gdm9pZCAwO1xudmFyIFNjZW5lVHJhbnNpdGlvblN0YXRlO1xuKGZ1bmN0aW9uIChTY2VuZVRyYW5zaXRpb25TdGF0ZSkge1xuICAgIFNjZW5lVHJhbnNpdGlvblN0YXRlW1NjZW5lVHJhbnNpdGlvblN0YXRlW1wiSW5cIl0gPSAwXSA9IFwiSW5cIjtcbiAgICBTY2VuZVRyYW5zaXRpb25TdGF0ZVtTY2VuZVRyYW5zaXRpb25TdGF0ZVtcIk91dFwiXSA9IDFdID0gXCJPdXRcIjtcbiAgICBTY2VuZVRyYW5zaXRpb25TdGF0ZVtTY2VuZVRyYW5zaXRpb25TdGF0ZVtcIk5vbmVcIl0gPSAyXSA9IFwiTm9uZVwiO1xufSkoU2NlbmVUcmFuc2l0aW9uU3RhdGUgPSBleHBvcnRzLlNjZW5lVHJhbnNpdGlvblN0YXRlIHx8IChleHBvcnRzLlNjZW5lVHJhbnNpdGlvblN0YXRlID0ge30pKTtcbmZ1bmN0aW9uIGNsYW1wKGEsIG1pbiA9IDAsIG1heCA9IDEpIHtcbiAgICByZXR1cm4gYSA8IG1pbiA/IG1pbiA6IChhID4gbWF4ID8gbWF4IDogYSk7XG59XG5jbGFzcyBTY2VuZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNjZW5lcyA9IFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBzY2VuZSBtYW5hZ2VyIGZvciBtYW5hZ2luZyBnYW1lIHNjZW5lc1xuICAgICAqL1xuICAgIHN0YXRpYyBpbml0aWFsaXNlKCkge1xuICAgICAgICBpZiAoU2NlbmVNYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjZW5lTWFuYWdlciBhbHJlYWR5IGluaXRpYWxpc2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgU2NlbmVNYW5hZ2VyLmluc3RhbmNlID0gbmV3IFNjZW5lTWFuYWdlcigpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghU2NlbmVNYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjZW5lTWFuYWdlciBub3QgcHJvcGVybHkgaW5pdGlhbGlzZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2NlbmVNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdXNoIGEgc2NlbmUgb250byB0aGUgc2NlbmUgc3RhY2sgYW5kIHN0YXJ0IHRyYW5zaXRpb25pbmcgaW5cbiAgICAgKi9cbiAgICBzdGF0aWMgcHVzaChzY2VuZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IFNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBpbnN0YW5jZS5zY2VuZXMucHVzaChzY2VuZSk7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgdGhlIHNjZW5lIGFuZCBzdGFydCB0aGUgdHJhbnNpdGlvblxuICAgICAgICBzY2VuZS5pbml0aWFsaXNlKCk7XG4gICAgICAgIHNjZW5lLnRyYW5zaXRpb25JbigpO1xuICAgICAgICByZXR1cm4gc2NlbmU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHNjZW5lIGZyb20gdGhlIHNjZW5lIHN0YWNrIGFmdGVyIHRyYW5zaXRpb25pbmcgb3V0XG4gICAgICovXG4gICAgc3RhdGljIHBvcCgpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBTY2VuZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnNjZW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgbGFzdCA9IGluc3RhbmNlLnNjZW5lcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSB0b3AtbW9zdCBzY2VuZSB0aGF0IGlzbid0IGN1cnJlbnRseSB0cmFuc2l0aW9uaW5nIG91dFxuICAgICAgICAgICAgd2hpbGUgKGxhc3QgPiAwICYmXG4gICAgICAgICAgICAgICAgaW5zdGFuY2Uuc2NlbmVzW2xhc3RdLnRyYW5zaXRpb25TdGF0ZSA9PT0gU2NlbmVUcmFuc2l0aW9uU3RhdGUuT3V0KSB7XG4gICAgICAgICAgICAgICAgbGFzdC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxhc3QgPj0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gaW5zdGFuY2Uuc2NlbmVzW2xhc3RdO1xuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHRyYW5zaXRpb25pbmcgb3V0XG4gICAgICAgICAgICAgICAgc2NlbmUudHJhbnNpdGlvbk91dCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzY2VuZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIHNjZW5lIGZyb20gdGhlIHNjZW5lIHN0YWNrXG4gICAgICovXG4gICAgc3RhdGljIGNsZWFyKCkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IFNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBpbnN0YW5jZS5zY2VuZXMuZm9yRWFjaChzY2VuZSA9PiB7XG4gICAgICAgICAgICBpZiAoc2NlbmUudHJhbnNpdGlvblN0YXRlICE9PSBTY2VuZVRyYW5zaXRpb25TdGF0ZS5PdXQpIHtcbiAgICAgICAgICAgICAgICBzY2VuZS50cmFuc2l0aW9uT3V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHNjZW5lIG1hbmFnZXIgYW5kIHRoZSBjdXJyZW50IHNjZW5lXG4gICAgICovXG4gICAgc3RhdGljIHVwZGF0ZShkdCwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IFNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBpZiAoaW5zdGFuY2Uuc2NlbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSB0b3AtbW9zdCBzY2VuZSB0aGF0IGlzbid0IGN1cnJlbnRseSB0cmFuc2l0aW9uaW5nIG91dFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGluc3RhbmNlLnNjZW5lcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2Uuc2NlbmVzW2ldLnRyYW5zaXRpb25TdGF0ZSAhPT0gU2NlbmVUcmFuc2l0aW9uU3RhdGUuT3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnNjZW5lc1tpXS51cGRhdGUoZHQsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgYWxsIHNjZW5lIHRyYW5zaXRpb25zXG4gICAgICAgICAgICBpbnN0YW5jZS5zY2VuZXMuZm9yRWFjaChzY2VuZSA9PiB7XG4gICAgICAgICAgICAgICAgc2NlbmUudXBkYXRlVHJhbnNpdGlvbihkdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbnkgZGlzcG9zZWQgc2NlbmVzXG4gICAgICAgICAgICBpbnN0YW5jZS5zY2VuZXMgPSBpbnN0YW5jZS5zY2VuZXMuZmlsdGVyKHNjZW5lID0+ICFzY2VuZS5kaXNwb3NlZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVuZGVyIHNjZW5lcyBvbiB0aGUgc2NyZWVuXG4gICAgICovXG4gICAgc3RhdGljIGRyYXcoY29udGV4dCwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IFNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICAvLyBGaWd1cmUgb3V0IHdoaWNoIHNjZW5lcyB3ZSBuZWVkIHRvIGRyYXdcbiAgICAgICAgY29uc3QgZHJhd0xpc3QgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGluc3RhbmNlLnNjZW5lcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gaW5zdGFuY2Uuc2NlbmVzW2ldO1xuICAgICAgICAgICAgZHJhd0xpc3QucHVzaChzY2VuZSk7XG4gICAgICAgICAgICAvLyBJZiB0cmFuc2l0aW9uaW5nLCB0aGlzIHNjZW5lIGlzIGFzc3VtZWQgdG8gYmUgdHJhbnNwYXJlbnRcbiAgICAgICAgICAgIC8vICh3ZSBtaWdodCB3YW50IHRvIHNob3cgdGhlIHNjZW5lIHVuZGVybmVhdGggaWYgd2UncmUgZG9pbmcgZS5nLiBhIGZhZGUpXG4gICAgICAgICAgICBpZiAoIXNjZW5lLnRyYW5zcGFyZW50ICYmXG4gICAgICAgICAgICAgICAgc2NlbmUudHJhbnNpdGlvblN0YXRlID09PSBTY2VuZVRyYW5zaXRpb25TdGF0ZS5Ob25lKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRHJhdyB0aGUgc2NlbmVzIGluIGJvdHRvbSAtPiB0b3Agb3JkZXJcbiAgICAgICAgZHJhd0xpc3QucmV2ZXJzZSgpLmZvckVhY2goc2NlbmUgPT4ge1xuICAgICAgICAgICAgc2NlbmUuZHJhdyhjb250ZXh0LCAuLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU2NlbmVNYW5hZ2VyO1xuY2xhc3MgU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25UaW1lOiAyLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHJhbnNpdGlvblN0YXRlID0gU2NlbmVUcmFuc2l0aW9uU3RhdGUuTm9uZTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uQW1vdW50ID0gMDtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVGltZSA9IDA7XG4gICAgICAgIHRoaXMudHJhbnNwYXJlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNwb3NlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBhY3R1YWxPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvblRpbWUgPSBhY3R1YWxPcHRpb25zLnRyYW5zaXRpb25UaW1lO1xuICAgICAgICB0aGlzLnRyYW5zcGFyZW50ID0gYWN0dWFsT3B0aW9ucy50cmFuc3BhcmVudDtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgdGhpcy5kaXNwb3NlZCA9IHRydWU7XG4gICAgfVxuICAgIHRyYW5zaXRpb25JbigpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uU3RhdGUgPSBTY2VuZVRyYW5zaXRpb25TdGF0ZS5JbjtcbiAgICB9XG4gICAgdHJhbnNpdGlvbk91dCgpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uU3RhdGUgPSBTY2VuZVRyYW5zaXRpb25TdGF0ZS5PdXQ7XG4gICAgfVxuICAgIHVwZGF0ZVRyYW5zaXRpb24oZHQpIHtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gZHQgLyB0aGlzLnRyYW5zaXRpb25UaW1lO1xuICAgICAgICAvLyBUcmFuc2l0aW9uaW5nIGluXG4gICAgICAgIGlmICh0aGlzLnRyYW5zaXRpb25TdGF0ZSA9PT0gU2NlbmVUcmFuc2l0aW9uU3RhdGUuSW4pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyYW5zaXRpb25BbW91bnQgPCAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uQW1vdW50ID0gY2xhbXAodGhpcy50cmFuc2l0aW9uQW1vdW50ICsgYW1vdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvblN0YXRlID0gU2NlbmVUcmFuc2l0aW9uU3RhdGUuTm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUcmFuc2l0aW9uaW5nIG91dFxuICAgICAgICBpZiAodGhpcy50cmFuc2l0aW9uU3RhdGUgPT09IFNjZW5lVHJhbnNpdGlvblN0YXRlLk91dCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvbkFtb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25BbW91bnQgPSBjbGFtcCh0aGlzLnRyYW5zaXRpb25BbW91bnQgLSBhbW91bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlNjZW5lID0gU2NlbmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5cGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRlpRU3hKUVVGWkxHOUNRVWxZTzBGQlNrUXNWMEZCV1N4dlFrRkJiMEk3U1VGRE9VSXNNa1JCUVVVc1EwRkJRVHRKUVVOR0xEWkVRVUZITEVOQlFVRTdTVUZEU0N3clJFRkJTU3hEUVVGQk8wRkJRMDRzUTBGQlF5eEZRVXBYTEc5Q1FVRnZRaXhIUVVGd1FpdzBRa0ZCYjBJc1MwRkJjRUlzTkVKQlFXOUNMRkZCU1M5Q08wRkJSVVFzVTBGQlV5eExRVUZMTEVOQlFVTXNRMEZCVXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTTdTVUZEZUVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTTNReXhEUVVGRE8wRkJSVVFzVFVGQmNVSXNXVUZCV1R0SlFVc3ZRanRSUVVaUkxGZEJRVTBzUjBGQldTeEZRVUZGTEVOQlFVTTdTVUZGVGl4RFFVRkRPMGxCUlhoQ096dFBRVVZITzBsQlEwa3NUVUZCVFN4RFFVRkRMRlZCUVZVN1VVRkRkRUlzU1VGQlNTeFpRVUZaTEVOQlFVTXNVVUZCVVN4RlFVRkZPMWxCUTNwQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNhME5CUVd0RExFTkJRVU1zUTBGQlF6dFRRVU55UkR0UlFVTkVMRmxCUVZrc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeFpRVUZaTEVWQlFVVXNRMEZCUXp0SlFVTTNReXhEUVVGRE8wbEJSVThzVFVGQlRTeERRVUZETEZkQlFWYzdVVUZEZUVJc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVWQlFVVTdXVUZETVVJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eDFRMEZCZFVNc1EwRkJReXhEUVVGRE8xTkJRekZFTzFGQlJVUXNUMEZCVHl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRE8wbEJReTlDTEVOQlFVTTdTVUZGUkRzN1QwRkZSenRKUVVOSkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCV1R0UlFVTTNRaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eFpRVUZaTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkZOVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VVVGRk5VSXNaMFJCUVdkRU8xRkJRMmhFTEV0QlFVc3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVOdVFpeExRVUZMTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNN1VVRkRja0lzVDBGQlR5eExRVUZMTEVOQlFVTTdTVUZEWml4RFFVRkRPMGxCUlVRN08wOUJSVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNSMEZCUnp0UlFVTm1MRTFCUVUwc1VVRkJVU3hIUVVGSExGbEJRVmtzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0UlFVVTFReXhKUVVGSkxGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVNNVFpeEpRVUZKTEVsQlFVa3NSMEZCVnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTTdXVUZGT1VNc2JVVkJRVzFGTzFsQlEyNUZMRTlCUTBVc1NVRkJTU3hIUVVGSExFTkJRVU03WjBKQlExSXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eGxRVUZsTEV0QlFVc3NiMEpCUVc5Q0xFTkJRVU1zUjBGQlJ5eEZRVU5zUlR0blFrRkRRU3hKUVVGSkxFVkJRVVVzUTBGQlF6dGhRVU5TTzFsQlEwUXNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhGUVVGRk8yZENRVU5pTEUxQlFVMHNTMEZCU3l4SFFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUlhCRExEQkNRVUV3UWp0blFrRkRNVUlzUzBGQlN5eERRVUZETEdGQlFXRXNSVUZCUlN4RFFVRkRPMmRDUVVOMFFpeFBRVUZQTEV0QlFVc3NRMEZCUXp0aFFVTmtPMU5CUTBZN1VVRkZSQ3hQUVVGUExGTkJRVk1zUTBGQlF6dEpRVU51UWl4RFFVRkRPMGxCUlVRN08wOUJSVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNTMEZCU3p0UlFVTnFRaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eFpRVUZaTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkZOVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRE9VSXNTVUZCU1N4TFFVRkxMRU5CUVVNc1pVRkJaU3hMUVVGTExHOUNRVUZ2UWl4RFFVRkRMRWRCUVVjc1JVRkJSVHRuUWtGRGRFUXNTMEZCU3l4RFFVRkRMR0ZCUVdFc1JVRkJSU3hEUVVGRE8yRkJRM1pDTzFGQlEwZ3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVE3TzA5QlJVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVlVzUlVGQlJTeEhRVUZITEVsQlFWYzdVVUZETjBNc1RVRkJUU3hSUVVGUkxFZEJRVWNzV1VGQldTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUlRWRExFbEJRVWtzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8xbEJRemxDTEhkRlFVRjNSVHRaUVVONFJTeExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4SFFVRkhPMmRDUVVONlF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zWlVGQlpTeExRVUZMTEc5Q1FVRnZRaXhEUVVGRExFZEJRVWNzUlVGQlJUdHZRa0ZEYmtVc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdiMEpCUTNaRExFMUJRVTA3YVVKQlExQTdZVUZEUmp0WlFVVkVMQ3RDUVVFclFqdFpRVU12UWl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlR0blFrRkRPVUlzUzBGQlN5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlF6ZENMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJSVWdzTmtKQlFUWkNPMWxCUXpkQ0xGRkJRVkVzUTBGQlF5eE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFRRVU53UlR0SlFVTklMRU5CUVVNN1NVRkZSRHM3VDBGRlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJhVU1zUlVGQlJTeEhRVUZITEVsQlFWYzdVVUZEYkVVc1RVRkJUU3hSUVVGUkxFZEJRVWNzV1VGQldTeERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUlRWRExEQkRRVUV3UXp0UlFVTXhReXhOUVVGTkxGRkJRVkVzUjBGQldTeEZRVUZGTEVOQlFVTTdVVUZETjBJc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ6dFpRVU42UXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1dVRkZja0lzTkVSQlFUUkVPMWxCUXpWRUxEQkZRVUV3UlR0WlFVTXhSU3hKUVVORkxFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWYzdaMEpCUTJ4Q0xFdEJRVXNzUTBGQlF5eGxRVUZsTEV0QlFVc3NiMEpCUVc5Q0xFTkJRVU1zU1VGQlNTeEZRVU51UkR0blFrRkRRU3hOUVVGTk8yRkJRMUE3VTBGRFJqdFJRVVZFTEhsRFFVRjVRenRSUVVONlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEycERMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRMMElzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVEN4RFFVRkRPME5CUTBZN1FVRndTVVFzSzBKQmIwbERPMEZCUlVRc1RVRkJjMElzUzBGQlN6dEpRV2RDZWtJc1dVRkJiVUlzVDBGQkswSTdVVUZtYWtNc2JVSkJRV01zUjBGQmFVSTdXVUZET1VNc1kwRkJZeXhGUVVGRkxFTkJRVU03V1VGRGFrSXNWMEZCVnl4RlFVRkZMRWxCUVVrN1UwRkRiRUlzUTBGQlF6dFJRVVZMTEc5Q1FVRmxMRWRCUVhsQ0xHOUNRVUZ2UWl4RFFVRkRMRWxCUVVrc1EwRkJRenRSUVVWc1JTeHhRa0ZCWjBJc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGRk4wSXNiVUpCUVdNc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGRk0wSXNaMEpCUVZjc1IwRkJXU3hMUVVGTExFTkJRVU03VVVGRk4wSXNZVUZCVVN4SFFVRlpMRXRCUVVzc1EwRkJRenRSUVVjdlFpeE5RVUZOTEdGQlFXRXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8xRkJRM1JGTEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1lVRkJZU3hEUVVGRExHTkJRV01zUTBGQlF6dFJRVU51UkN4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExHRkJRV0VzUTBGQlF5eFhRVUZYTEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVVWTkxFOUJRVTg3VVVGRFdpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenRKUVVOMlFpeERRVUZETzBsQlJVMHNXVUZCV1R0UlFVTnFRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEc5Q1FVRnZRaXhEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU5xUkN4RFFVRkRPMGxCUlUwc1lVRkJZVHRSUVVOc1FpeEpRVUZKTEVOQlFVTXNaVUZCWlN4SFFVRkhMRzlDUVVGdlFpeERRVUZETEVkQlFVY3NRMEZCUXp0SlFVTnNSQ3hEUVVGRE8wbEJSVTBzWjBKQlFXZENMRU5CUVVNc1JVRkJWVHRSUVVOb1F5eE5RVUZOTEUxQlFVMHNSMEZCVnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF6dFJRVVZvUkN4dFFrRkJiVUk3VVVGRGJrSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1pVRkJaU3hMUVVGTExHOUNRVUZ2UWl4RFFVRkRMRVZCUVVVc1JVRkJSVHRaUVVOd1JDeEpRVUZKTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUXpkQ0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETzJGQlF5OUVPMmxDUVVGTk8yZENRVU5NTEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc2IwSkJRVzlDTEVOQlFVTXNTVUZCU1N4RFFVRkRPMkZCUTJ4RU8xTkJRMFk3VVVGRlJDeHZRa0ZCYjBJN1VVRkRjRUlzU1VGQlNTeEpRVUZKTEVOQlFVTXNaVUZCWlN4TFFVRkxMRzlDUVVGdlFpeERRVUZETEVkQlFVY3NSVUZCUlR0WlFVTnlSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlF6ZENMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNSMEZCUnl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRE8yRkJReTlFTzJsQ1FVRk5PMmRDUVVOTUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0aFFVTm9RanRUUVVOR08wbEJRMGdzUTBGQlF6dERRVTlHTzBGQk4wUkVMSE5DUVRaRVF5SjkiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vaW5kZXgudHNcIl0oMCwgX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./node_modules/@basementuniverse/utils/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/@basementuniverse/utils/utils.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * @overview A library of useful functions
 * @author Gordon Larrigan
 */

/**
 * Check if two numbers are approximately equal
 * @param {number} a Number a
 * @param {number} b Number b
 * @param {number} [p=Number.EPSILON] The precision value
 * @return {boolean} True if numbers a and b are approximately equal
 */
const floatEquals = (a, b, p = Number.EPSILON) => Math.abs(a - b) < p;

/**
 * Clamp a number between min and max
 * @param {number} a The number to clamp
 * @param {number} [min=0] The minimum value
 * @param {number} [max=1] The maximum value
 * @return {number} A clamped number
 */
const clamp = (a, min = 0, max = 1) => a < min ? min : (a > max ? max : a);

/**
 * Get the fractional part of a number
 * @param {number} a The number from which to get the fractional part
 * @return {number} The fractional part of the number
 */
const frac = a => a >= 0 ? a - Math.floor(a) : a - Math.ceil(a);

/**
 * Round n to d decimal places
 * @param {number} n The number to round
 * @param {number} [d=0] The number of decimal places to round to
 * @return {number} A rounded number
 */
const round = (n, d = 0) => {
  const p = Math.pow(10, d);
  return Math.round(n * p + Number.EPSILON) / p;
}

/**
 * Do a linear interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} An interpolated value in the interval [a, b]
 */
const lerp = (a, b, i) => a + (b - a) * i;

/**
 * Get the position of i between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolated value in the interval [a, b]
 * @return {number} The position of i between a and b
 */
const unlerp = (a, b, i) => (i - a) / (b - a);

/**
 * Do a bilinear interpolation
 * @param {number} c00 Top-left value
 * @param {number} c10 Top-right value
 * @param {number} c01 Bottom-left value
 * @param {number} c11 Bottom-right value
 * @param {number} ix Interpolation value along x
 * @param {number} iy Interpolation value along y
 * @return {number} A bilinear interpolated value
 */
const blerp = (c00, c10, c01, c11, ix, iy) => lerp(lerp(c00, c10, ix), lerp(c01, c11, ix), iy);

/**
 * Re-map a number i from range a1...a2 to b1...b2
 * @param {number} i The number to re-map
 * @param {number} a1
 * @param {number} a2
 * @param {number} b1
 * @param {number} b2
 * @return {number}
 */
const remap = (i, a1, a2, b1, b2) => b1 + (i - a1) * (b2 - b1) / (a2 - a1);

/**
 * Do a smooth interpolation between a and b
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value
 * @return {number} An interpolated value in the interval [a, b]
 */
const smoothstep = (a, b, i) => lerp(a, b, 3 * Math.pow(i, 2) - 2 * Math.pow(i, 3));

/**
 * Get an angle in radians
 * @param {number} degrees The angle in degrees
 * @return {number} The angle in radians
 */
const radians = degrees => (Math.PI / 180) * degrees;

/**
 * Get an angle in degrees
 * @param {number} radians The angle in radians
 * @return {number} The angle in degrees
 */
const degrees = radians => (180 / Math.PI) * radians;

/**
 * Get a random float in the interval [min, max)
 * @param {number} min Inclusive min
 * @param {number} max Exclusive max
 * @return {number} A random float in the interval [min, max)
 */
const randomBetween = (min, max) => Math.random() * (max - min) + min;

/**
 * Get a random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A random integer in the interval [min, max]
 */
const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * Get a normally-distributed random number
 * @param {number} [mu=0.5] The mean value
 * @param {number} [sigma=0.5] The standard deviation
 * @param {number} [samples=2] The number of samples
 * @return {number} A normally-distributed random number
 */
const cltRandom = (mu = 0.5, sigma = 0.5, samples = 2) => {
  let total = 0;
  for (let i = samples; i--;) {
    total += Math.random();
  }
  return mu + (total - samples / 2) / (samples / 2) * sigma;
};

/**
 * Get a normally-distributed random integer in the interval [min, max]
 * @param {number} min Inclusive min
 * @param {number} max Inclusive max
 * @return {number} A normally-distributed random integer
 */
const cltRandomInt = (min, max) => Math.floor(min + cltRandom(0.5, 0.5, 2) * (max + 1 - min));

/**
 * Return a weighted random integer
 * @param {Array<number>} w An array of weights
 * @return {number} An index from w
 */
const weightedRandom = w => {
  let total = w.reduce((a, i) => a + i, 0), n = 0;
  const r = Math.random() * total;
  while (total > r) {
    total -= w[n++];
  }
  return n - 1;
};

/**
 * An interpolation function
 * @callback InterpolationFunction
 * @param {number} a The minimum number
 * @param {number} b The maximum number
 * @param {number} i The interpolation value, should be in the interval [0, 1]
 * @return {number} The interpolated value in the interval [a, b]
 */

/**
 * Return an interpolated value from an array
 * @param {Array<number>} a An array of values interpolate
 * @param {number} i A number in the interval [0, 1]
 * @param {InterpolationFunction} [f=Math.lerp] The interpolation function to use
 * @return {number} An interpolated value in the interval [min(a), max(a)]
 */
const lerpArray = (a, i, f = lerp) => {
  const s = i * (a.length - 1);
  const p = clamp(Math.trunc(s), 0, a.length - 1);
  return f(a[p] || 0, a[p + 1] || 0, frac(s));
};

/**
 * Get the dot product of two vectors
 * @param {Array<number>} a Vector a
 * @param {Array<number>} b Vector b
 * @return {number} a ∙ b
 */
const dot = (a, b) => a.reduce((n, v, i) => n + v * b[i], 0);

/**
 * Get the factorial of a number
 * @param {number} a
 * @return {number} a!
 */
const factorial = a => {
  let result = 1;
  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  return result;
};

/**
 * Get the number of permutations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nPr
 */
const npr = (n, r) => factorial(n) / factorial(n - r);

/**
 * Get the number of combinations of r elements from a set of n elements
 * @param {number} n
 * @param {number} r
 * @return {number} nCr
 */
const ncr = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

/**
 * Generate all combinations of r elements from an array
 *
 * @example
 * ```js
 * combinations([1, 2, 3], 2);
 * ```
 *
 * Output:
 * ```json
 * [
 *   [1, 2],
 *   [1, 3],
 *   [2, 3]
 * ]
 * ```
 * @param {Array<*>} a
 * @param {number} r The number of elements to choose in each combination
 * @return {Array<Array<*>>} An array of combination arrays
 */
const combinations = (a, r) => {
  if (r === 1) {
    return a.map(item => [item]);
  }

  return a.reduce(
    (acc, item, i) => [
      ...acc,
      ...combinations(a.slice(i + 1), r - 1).map(c => [item, ...c]),
    ],
    []
  );
};

/**
 * Get a cartesian product of arrays
 *
 * @example
 * ```js
 * cartesian([1, 2, 3], ['a', 'b']);
 * ```
 *
 * Output:
 * ```json
 * [
 *   [1, "a"],
 *   [1, "b"],
 *   [2, "a"],
 *   [2, "b"],
 *   [3, "a"],
 *   [3, "b"]
 * ]
 * ```
 */
const cartesian = (...arr) =>
  arr.reduce(
    (a, b) => a.flatMap(c => b.map(d => [...c, d])),
    [[]]
  );

/**
 * A function for generating array values
 * @callback TimesFunction
 * @param {number} i The array index
 * @return {*} The array value
 */

/**
 * Return a new array with length n by calling function f(i) on each element
 * @param {TimesFunction} f
 * @param {number} n The size of the array
 * @return {Array<*>}
 */
const times = (f, n) => Array(n).fill(0).map((_, i) => f(i));

/**
 * Return an array containing numbers 0->(n - 1)
 * @param {number} n The size of the array
 * @return {Array<number>} An array of integers 0->(n - 1)
 */
const range = n => times(i => i, n);

/**
 * Zip 2 arrays together, i.e. ([1, 2, 3], [a, b, c]) => [[1, a], [2, b], [3, c]]
 * @param {Array<*>} a
 * @param {Array<*>} b
 * @return {Array<Array<*>>}
 */
const zip = (a, b) => a.map((k, i) => [k, b[i]]);

/**
 * Return array[i] with positive and negative wrapping
 * @param {Array<*>} a
 * @param {number} i The positively/negatively wrapped array index
 * @return {*} An element from the array
 */
const at = (a, i) => a[i < 0 ? a.length - (Math.abs(i + 1) % a.length) - 1 : i % a.length];

/**
 * Return the last element of an array without removing it
 * @param {Array<*>} a
 * @return {*} The last element from the array
 */
const peek = (a) => {
  if (!a.length) {
    return undefined;
  }

  return a[a.length - 1];
};

/**
 * Chop an array into chunks of size n
 * @param {Array<*>} a
 * @param {number} n The chunk size
 * @return {Array<Array<*>>} An array of array chunks
 */
const chunk = (a, n) => times(i => a.slice(i * n, i * n + n), Math.ceil(a.length / n));

/**
 * Randomly shuffle a shallow copy of an array
 * @param {Array<*>} a
 * @return {Array<*>} The shuffled array
 */
const shuffle = a => a.slice().sort(() => Math.random() - 0.5);

/**
 * Flatten an object
 * @param {object} o
 * @param {string} concatenator The string to use for concatenating keys
 * @return {object} A flattened object
 */
const flat = (o, concatenator = '.') => {
  return Object.keys(o).reduce((acc, key) => {
    if (o[key] instanceof Date) {
      return {
        ...acc,
        [key]: o[key].toISOString(),
      };
    }

    if (typeof o[key] !== 'object' || !o[key]) {
      return {
        ...acc,
        [key]: o[key],
      };
    }
    const flattened = flat(o[key], concatenator);

    return {
      ...acc,
      ...Object.keys(flattened).reduce(
        (childAcc, childKey) => ({
          ...childAcc,
          [`${key}${concatenator}${childKey}`]: flattened[childKey],
        }),
        {}
      ),
    };
  }, {});
};

/**
 * Unflatten an object
 * @param {object} o
 * @param {string} concatenator The string to check for in concatenated keys
 * @return {object} An un-flattened object
 */
const unflat = (o, concatenator = '.') => {
  let result = {}, temp, substrings, property, i;

  for (property in o) {
    substrings = property.split(concatenator);
    temp = result;
    for (i = 0; i < substrings.length - 1; i++) {
      if (!(substrings[i] in temp)) {
        if (isFinite(substrings[i + 1])) {
          temp[substrings[i]] = [];
        } else {
          temp[substrings[i]] = {};
        }
      }
      temp = temp[substrings[i]];
    }
    temp[substrings[substrings.length - 1]] = o[property];
  }

  return result;
};

/**
 * A split predicate
 * @callback SplitPredicate
 * @param {any} value The current value
 * @return {boolean} True if the array should split at this index
 */

/**
 * Split an array into sub-arrays based on a predicate
 * @param {Array<*>} array
 * @param {SplitPredicate} predicate
 * @return {Array<Array<*>>} An array of arrays
 */
const split = (array, predicate) => {
  const result = [];
  let current = [];
  for (const value of array) {
    if (predicate(value)) {
      if (current.length) {
        result.push(current);
      }
      current = [value];
    } else {
      current.push(value);
    }
  }
  result.push(current);

  return result;
};

/**
 * Pluck keys from an object
 * @param {object} o
 * @param {...string} keys The keys to pluck from the object
 * @return {object} An object containing the plucked keys
 */
const pluck = (o, ...keys) => {
  return keys.reduce(
    (result, key) => Object.assign(result, { [key]: o[key] }),
    {}
  );
};

/**
 * Exclude keys from an object
 * @param {object} o
 * @param {...string} keys The keys to exclude from the object
 * @return {object} An object containing all keys except excluded keys
 */
const exclude = (o, ...keys) => {
  return Object.fromEntries(
    Object.entries(o).filter(([key]) => !keys.includes(key))
  );
};

/**
 * Deep-merge objects
 * @param {object} a
 * @param {object} b
 * @return {object}
 */
const merge = (a, b) => {
  const result = { ...a };
  for (const [key, value] of Object.entries(b)) {
    if (value instanceof Object && key in a) {
      result[key] = merge(a[key], value);
    } else {
      result[key] = value;
    }
  }

  return result;
};

if (true) {
  module.exports = {
    floatEquals,
    clamp,
    frac,
    round,
    lerp,
    unlerp,
    blerp,
    remap,
    smoothstep,
    radians,
    degrees,
    randomBetween,
    randomIntBetween,
    cltRandom,
    cltRandomInt,
    weightedRandom,
    lerpArray,
    dot,
    factorial,
    npr,
    ncr,
    combinations,
    cartesian,
    times,
    range,
    zip,
    at,
    peek,
    chunk,
    shuffle,
    flat,
    unflat,
    split,
    pluck,
    exclude,
    merge,
  };
}


/***/ }),

/***/ "./node_modules/@basementuniverse/vec/vec.js":
/*!***************************************************!*\
  !*** ./node_modules/@basementuniverse/vec/vec.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { times, chunk, dot } = __webpack_require__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");

/**
 * @overview A small vector and matrix library
 * @author Gordon Larrigan
 */

/**
 * A 2d vector
 * @typedef {Object} vec
 * @property {number} x The x component of the vector
 * @property {number} y The y component of the vector
 */

/**
 * Create a new vector
 * @param {number|vec} [x] The x component of the vector, or a vector to copy
 * @param {number} [y] The y component of the vector
 * @return {vec} A new vector
 * @example <caption>Various ways to initialise a vector</caption>
 * let a = vec(3, 2);  // (3, 2)
 * let b = vec(4);     // (4, 4)
 * let c = vec(a);     // (3, 2)
 * let d = vec();      // (0, 0)
 */
const vec = (x, y) => (!x && !y ?
  { x: 0, y: 0 } : (typeof x === 'object' ?
    { x: x.x || 0, y: x.y || 0 } : (y === null || y === undefined ?
      { x: x, y: x } : { x: x, y: y })
  )
);

/**
 * Get the components of a vector as an array
 * @param {vec} a The vector to get components from
 * @return {Array<number>} The vector components as an array
 */
vec.components = a => [a.x, a.y];

/**
 * Return a unit vector (1, 0)
 * @return {vec} A unit vector (1, 0)
 */
vec.ux = () => vec(1, 0);

/**
 * Return a unit vector (0, 1)
 * @return {vec} A unit vector (0, 1)
 */
vec.uy = () => vec(0, 1);

/**
 * Add vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {vec} a + b
 */
vec.add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });

/**
 * Scale a vector
 * @param {vec} a Vector a
 * @param {number} b Scalar b
 * @return {vec} a * b
 */
vec.mul = (a, b) => ({ x: a.x * b, y: a.y * b });

/**
 * Subtract vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {vec} a - b
 */
vec.sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });

/**
 * Get the length of a vector
 * @param {vec} a Vector a
 * @return {number} |a|
 */
vec.len = a => Math.sqrt(a.x * a.x + a.y * a.y);

/**
 * Get the length of a vector using taxicab geometry
 * @param {vec} a Vector a
 * @return {number} |a|
 */
vec.manhattan = a => Math.abs(a.x) + Math.abs(a.y);

/**
 * Normalise a vector
 * @param {vec} a The vector to normalise
 * @return {vec} ^a
 */
vec.nor = a => {
  let len = vec.len(a);
  return len ? { x: a.x / len, y: a.y / len } : vec();
};

/**
 * Get a dot product of vectors
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {number} a ∙ b
 */
vec.dot = (a, b) => a.x * b.x + a.y * b.y;

/**
 * Rotate a vector by r radians
 * @param {vec} a The vector to rotate
 * @param {number} r The angle to rotate by, measured in radians
 * @return {vec} A rotated vector
 */
vec.rot = (a, r) => {
  let s = Math.sin(r),
    c = Math.cos(r);
  return { x: c * a.x - s * a.y, y: s * a.x + c * a.y };
}

/**
 * Check if two vectors are equal
 * @param {vec} a Vector a
 * @param {vec} b Vector b
 * @return {boolean} True if vectors a and b are equal, false otherwise
 */
vec.eq = (a, b) => a.x === b.x && a.y === b.y;

/**
 * Get the angle of a vector
 * @param {vec} a Vector a
 * @return {number} The angle of vector a in radians
 */
vec.rad = a => Math.atan2(a.y, a.x);

/**
 * Copy a vector
 * @param {vec} a The vector to copy
 * @return {vec} A copy of vector a
 */
vec.cpy = a => vec(a);

/**
 * A function to call on each component of a vector
 * @callback vectorMapCallback
 * @param {number} value The component value
 * @param {'x' | 'y'} label The component label (x or y)
 * @return {number} The mapped component
 */

/**
 * Call a function on each component of a vector and build a new vector from the results
 * @param {vec} a Vector a
 * @param {vectorMapCallback} f The function to call on each component of the vector
 * @return {vec} Vector a mapped through f
 */
vec.map = (a, f) => ({ x: f(a.x, 'x'), y: f(a.y, 'y') });

/**
 * Convert a vector into a string
 * @param {vec} a The vector to convert
 * @param {string} [s=', '] The separator string
 * @return {string} A string representation of the vector
 */
vec.str = (a, s = ', ') => `${a.x}${s}${a.y}`;

/**
 * A matrix
 * @typedef {Object} mat
 * @property {number} m The number of rows in the matrix
 * @property {number} n The number of columns in the matrix
 * @property {Array<number>} entries The matrix values
 */

/**
 * Create a new matrix
 * @param {number} [m=4] The number of rows
 * @param {number} [n=4] The number of columns
 * @param {Array<number>} [entries=[]] Matrix values in reading order
 * @return {mat} A new matrix
 */
const mat = (m = 4, n = 4, entries = []) => ({
  m, n,
  entries: entries.concat(Array(m * n).fill(0)).slice(0, m * n)
});

/**
 * Get an identity matrix of size n
 * @param {number} n The size of the matrix
 * @return {mat} An identity matrix
 */
mat.identity = n => mat(n, n, Array(n * n).fill(0).map((v, i) => +(Math.floor(i / n) === i % n)));

/**
 * Get an entry from a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @return {number} The value at position (i, j) in matrix a
 */
mat.get = (a, i, j) => a.entries[(j - 1) + (i - 1) * a.n];

/**
 * Set an entry of a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @param {number} v The value to set in matrix a
 */
mat.set = (a, i, j, v) => { a.entries[(j - 1) + (i - 1) * a.n] = v; };

/**
 * Get a row from a matrix as an array
 * @param {mat} a Matrix a
 * @param {number} m The row offset
 * @return {Array<number>} Row m from matrix a
 */
mat.row = (a, m) => {
  const s = (m - 1) * a.n;
  return a.entries.slice(s, s + a.n);
};

/**
 * Get a column from a matrix as an array
 * @param {mat} a Matrix a
 * @param {number} n The column offset
 * @return {Array<number>} Column n from matrix a
 */
mat.col = (a, n) => times(i => mat.get(a, (i + 1), n), a.m);

/**
 * Add matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat} a + b
 */
mat.add = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v + b.entries[i]);

/**
 * Subtract matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat} a - b
 */
mat.sub = (a, b) => a.m === b.m && a.n === b.n && mat.map(a, (v, i) => v - b.entries[i]);

/**
 * Multiply matrices
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {mat|boolean} ab or false if the matrices cannot be multiplied
 */
mat.mul = (a, b) => {
  if (a.n !== b.m) { return false; }
  const result = mat(a.m, b.n);
  for (let i = 1; i <= a.m; i++) {
    for (let j = 1; j <= b.n; j++) {
      mat.set(result, i, j, dot(mat.row(a, i), mat.col(b, j)));
    }
  }
  return result;
};

/**
 * Scale a matrix
 * @param {mat} a Matrix a
 * @param {number} b Scalar b
 * @return {mat} a * b
 */
mat.scale = (a, b) => mat.map(a, v => v * b);

/**
 * Transpose a matrix
 * @param {mat} a The matrix to transpose
 * @return {mat} A transposed matrix
 */
mat.trans = a => mat(a.n, a.m, times(i => mat.col(a, (i + 1)), a.n).flat());

/**
 * Get the minor of a matrix
 * @param {mat} a Matrix a
 * @param {number} i The row offset
 * @param {number} j The column offset
 * @return {mat|boolean} The (i, j) minor of matrix a or false if the matrix is not square
 */
mat.minor = (a, i, j) => {
  if (a.m !== a.n) { return false; }
  const entries = [];
  for (let ii = 1; ii <= a.m; ii++) {
    if (ii === i) { continue; }
    for (let jj = 1; jj <= a.n; jj++) {
      if (jj === j) { continue; }
      entries.push(mat.get(a, ii, jj));
    }
  }
  return mat(a.m - 1, a.n - 1, entries);
};

/**
 * Get the determinant of a matrix
 * @param {mat} a Matrix a
 * @return {number|boolean} |a| or false if the matrix is not square
 */
mat.det = a => {
  if (a.m !== a.n) { return false; }
  if (a.m === 1) {
    return a.entries[0];
  }
  if (a.m === 2) {
    return a.entries[0] * a.entries[3] - a.entries[1] * a.entries[2];
  }
  let total = 0, sign = 1;
  for (let j = 1; j <= a.n; j++) {
    total += sign * a.entries[j - 1] * mat.det(mat.minor(a, 1, j));
    sign *= -1;
  }
  return total;
};

/**
 * Normalise a matrix
 * @param {mat} a The matrix to normalise
 * @return {mat|boolean} ^a or false if the matrix is not square
 */
mat.nor = a => {
  if (a.m !== a.n) { return false; }
  const d = mat.det(a);
  return mat.map(a, i => i * d);
};

/**
 * Get the adjugate of a matrix
 * @param {mat} a The matrix from which to get the adjugate
 * @return {mat} The adjugate of a
 */
mat.adj = a => {
  const minors = mat(a.m, a.n);
  for (let i = 1; i <= a.m; i++) {
    for (let j = 1; j <= a.n; j++) {
      mat.set(minors, i, j, mat.det(mat.minor(a, i, j)));
    }
  }
  const cofactors = mat.map(minors, (v, i) => v * (i % 2 ? -1 : 1));
  return mat.trans(cofactors);
};

/**
 * Get the inverse of a matrix
 * @param {mat} a The matrix to invert
 * @return {mat|boolean} a^-1 or false if the matrix has no inverse
 */
mat.inv = a => {
  if (a.m !== a.n) { return false; }
  const d = mat.det(a);
  if (d === 0) { return false; }
  return mat.scale(mat.adj(a), 1 / d);
};

/**
 * Check if two matrices are equal
 * @param {mat} a Matrix a
 * @param {mat} b Matrix b
 * @return {boolean} True if matrices a and b are identical, false otherwise
 */
mat.eq = (a, b) => a.m === b.m && a.n === b.n && mat.str(a) === mat.str(b);

/**
 * Copy a matrix
 * @param {mat} a The matrix to copy
 * @return {mat} A copy of matrix a
 */
mat.cpy = a => mat(a.m, a.n, [...a.entries]);

/**
 * A function to call on each entry of a matrix
 * @callback matrixMapCallback
 * @param {number} value The entry value
 * @param {number} index The entry index
 * @param {Array<number>} entries The array of matrix entries
 * @return {number} The mapped entry
 */

/**
 * Call a function on each entry of a matrix and build a new matrix from the results
 * @param {mat} a Matrix a
 * @param {matrixMapCallback} f The function to call on each entry of the matrix
 * @return {mat} Matrix a mapped through f
 */
mat.map = (a, f) => mat(a.m, a.n, a.entries.map(f));

/**
 * Convert a matrix into a string
 * @param {mat} a The matrix to convert
 * @param {string} [ms=', '] The separator string for columns
 * @param {string} [ns='\n'] The separator string for rows
 * @return {string} A string representation of the matrix
 */
mat.str = (a, ms = ', ', ns = '\n') => chunk(a.entries, a.n).map(r => r.join(ms)).join(ns);

if (true) {
  module.exports = { vec, mat };
}


/***/ }),

/***/ "./src/Actor.ts":
/*!**********************!*\
  !*** ./src/Actor.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class Actor {
}
exports["default"] = Actor;


/***/ }),

/***/ "./src/Axes.ts":
/*!*********************!*\
  !*** ./src/Axes.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const Actor_1 = __webpack_require__(/*! ./Actor */ "./src/Actor.ts");
class Axes extends Actor_1.default {
    constructor() {
        super();
        this.BACKGROUND = 'white';
        this.COLOUR = '#333';
        this.STROKE = 2;
        this.GAP = 100;
        this.BORDER = 100;
        this.FONT = '16px sans-serif';
    }
    update() { }
    draw(context, bounds) {
        context.save();
        context.fillStyle = this.BACKGROUND;
        const height = bounds.bottom - bounds.top;
        const width = bounds.right - bounds.left;
        context.fillRect(bounds.left, bounds.top, this.BORDER, height);
        context.fillRect(bounds.left, bounds.bottom - this.BORDER, width, this.BORDER);
        context.fillRect(bounds.right - this.BORDER, bounds.top, this.BORDER, height);
        context.fillRect(bounds.left + this.BORDER, bounds.top, width - this.BORDER, this.BORDER);
        context.strokeStyle = this.COLOUR;
        context.lineWidth = this.STROKE;
        this.drawLine(context, (0, vec_1.vec)(bounds.left + this.BORDER, bounds.top + this.BORDER), (0, vec_1.vec)(bounds.left + this.BORDER, bounds.bottom - this.BORDER));
        this.drawLine(context, (0, vec_1.vec)(bounds.left + this.BORDER, bounds.bottom - this.BORDER), (0, vec_1.vec)(bounds.right - this.BORDER, bounds.bottom - this.BORDER));
        const topLeft = (0, vec_1.vec)(Math.floor(bounds.left / this.GAP) * this.GAP, Math.floor(bounds.top / this.GAP) * this.GAP);
        const bottomRight = (0, vec_1.vec)(Math.ceil(bounds.right / this.GAP) * this.GAP, Math.ceil(bounds.bottom / this.GAP) * this.GAP);
        context.font = this.FONT;
        context.fillStyle = this.COLOUR;
        for (let x = topLeft.x; x <= bottomRight.x; x += this.GAP) {
            if (x >= bounds.left + this.BORDER && x <= bounds.right - this.BORDER) {
                const t = Math.round((x - 100) / this.GAP).toString();
                context.fillText(t, x, bounds.bottom - this.BORDER / 2);
            }
        }
        for (let y = topLeft.y; y <= bottomRight.y; y += this.GAP) {
            if (y >= this.BORDER && y <= bounds.bottom - this.BORDER) {
                const t = Math.round((bounds.bottom - y - 100) / this.GAP).toString();
                context.fillText(t, bounds.left + this.BORDER / 2, y);
            }
        }
        context.restore();
    }
    drawLine(context, a, b) {
        context.beginPath();
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
        context.stroke();
        context.closePath();
    }
}
exports["default"] = Axes;


/***/ }),

/***/ "./src/Chart.ts":
/*!**********************!*\
  !*** ./src/Chart.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const ts_perlin_simplex_1 = __webpack_require__(/*! ts-perlin-simplex */ "./node_modules/ts-perlin-simplex/index.js");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const Actor_1 = __webpack_require__(/*! ./Actor */ "./src/Actor.ts");
class Chart extends Actor_1.default {
    constructor() {
        super();
        this.AVG_COLOUR = 'rgba(64, 128, 255, 0.6)';
        this.MIN_COLOUR = 'rgba(255, 0, 0, 0.8)';
        this.MAX_COLOUR = 'rgba(255, 128, 0, 0.8)';
        this.STROKE = 2;
        this.SIZE = 50;
        this.MIN_SCALE_X = 0.003;
        this.MIN_SCALE_Y = 0.2;
        this.MIN_OFFSET = 0.75;
        this.MAX_SCALE_X = 0.003;
        this.MAX_SCALE_Y = 0.7;
        this.AVG_SCALE_X = 0.005;
        this.AVG_SCALE_Y = 0.3;
        this.AVG_OFFSET = 0.15;
        this.simplex = new ts_perlin_simplex_1.SimplexNoise();
    }
    update() { }
    draw(context, bounds) {
        context.save();
        context.lineWidth = this.STROKE;
        const left = Math.floor(bounds.left / this.SIZE);
        const right = Math.ceil(bounds.right / this.SIZE);
        const min = [];
        const max = [];
        const avg = [];
        for (let x = left; x <= right; x++) {
            const current = this.f(x * this.SIZE);
            min.push(current.min);
            max.push(current.max);
            avg.push(current.avg);
        }
        context.strokeStyle = this.MIN_COLOUR;
        context.setLineDash([]);
        context.beginPath();
        context.moveTo(left * this.SIZE, min[0]);
        for (let i = 1; i < min.length; i++) {
            context.lineTo((left + i) * this.SIZE, min[i]);
        }
        context.stroke();
        context.closePath();
        context.strokeStyle = this.MAX_COLOUR;
        context.beginPath();
        context.moveTo(left * this.SIZE, max[0]);
        for (let i = 1; i < max.length; i++) {
            context.lineTo((left + i) * this.SIZE, max[i]);
        }
        context.stroke();
        context.closePath();
        context.strokeStyle = this.AVG_COLOUR;
        context.setLineDash([8]);
        context.beginPath();
        context.moveTo(left * this.SIZE, avg[0]);
        for (let i = 1; i < avg.length; i++) {
            context.lineTo((left + i) * this.SIZE, avg[i]);
        }
        context.stroke();
        context.closePath();
        context.restore();
    }
    f(x) {
        const min = Game_1.default.screen.y * (this.simplex.noise(x * this.MIN_SCALE_X, 0) * this.MIN_SCALE_Y + this.MIN_OFFSET);
        const max = min - ((Game_1.default.screen.y * 0.75) * (0.5 + (this.simplex.noise(x * this.MAX_SCALE_X, 1000) * this.MAX_SCALE_Y) / 2));
        const avg = Game_1.default.screen.y * (0.5 + (this.simplex.noise(x * this.AVG_SCALE_X, 0.5) * this.AVG_SCALE_Y + this.AVG_OFFSET) / 2);
        return { min, max, avg };
    }
}
exports["default"] = Chart;


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const debug_1 = __webpack_require__(/*! @basementuniverse/debug */ "./node_modules/@basementuniverse/debug/build/index.js");
const input_manager_1 = __webpack_require__(/*! @basementuniverse/input-manager */ "./node_modules/@basementuniverse/input-manager/build/index.js");
const scene_manager_1 = __webpack_require__(/*! @basementuniverse/scene-manager */ "./node_modules/@basementuniverse/scene-manager/build/index.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const MenuScene_1 = __webpack_require__(/*! ./MenuScene */ "./src/MenuScene.ts");
const config = __webpack_require__(/*! ./config.json */ "./src/config.json");
const constants = __webpack_require__(/*! ./constants */ "./src/constants.ts");
class Game {
    constructor(container) {
        this.frameRate = 0;
        this.frameCount = 0;
        if (container === null) {
            throw new Error('A valid container element must be specified.');
        }
        if (container.tagName.toLowerCase() !== 'canvas') {
            throw new Error('Container element must be a canvas.');
        }
        this.canvas = container;
        const context = this.canvas.getContext('2d');
        if (context !== null) {
            this.context = context;
        }
        else {
            throw new Error("Couldn't get a 2d context.");
        }
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
    }
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    initialise() {
        debug_1.default.initialise();
        input_manager_1.default.initialise();
        scene_manager_1.default.initialise();
        this.lastFrameTime = this.lastFrameCountTime = performance.now();
        this.loop();
        scene_manager_1.default.push(new MenuScene_1.MenuScene());
    }
    loop() {
        const now = performance.now();
        const elapsedTime = Math.min(now - this.lastFrameTime, constants.FPS_MIN);
        if (now - this.lastFrameCountTime >= constants.SECOND) {
            this.lastFrameCountTime = now;
            this.frameRate = this.frameCount;
            this.frameCount = 0;
        }
        this.frameCount++;
        this.lastFrameTime = now;
        if (config.showFPS) {
            debug_1.default.value('FPS', this.frameRate, { align: 'right' });
        }
        this.update(elapsedTime);
        this.draw();
        window.requestAnimationFrame(this.loop.bind(this));
    }
    update(dt) {
        Game.screen = (0, vec_1.vec)(this.canvas.width, this.canvas.height);
        scene_manager_1.default.update(dt);
        input_manager_1.default.update();
    }
    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        scene_manager_1.default.draw(this.context);
        debug_1.default.draw(this.context);
    }
}
exports["default"] = Game;


/***/ }),

/***/ "./src/GameOverScene.ts":
/*!******************************!*\
  !*** ./src/GameOverScene.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameOverScene = void 0;
const input_manager_1 = __webpack_require__(/*! @basementuniverse/input-manager */ "./node_modules/@basementuniverse/input-manager/build/index.js");
const scene_manager_1 = __webpack_require__(/*! @basementuniverse/scene-manager */ "./node_modules/@basementuniverse/scene-manager/build/index.js");
const utils_1 = __webpack_require__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const GameScene_1 = __webpack_require__(/*! ./GameScene */ "./src/GameScene.ts");
class GameOverScene extends scene_manager_1.Scene {
    constructor(x) {
        super({
            transitionTime: 1,
        });
        this.x = 0;
        this.ttl = 1;
        this.x = x;
    }
    initialise() { }
    update(dt) {
        this.ttl -= dt;
        if (this.ttl <= 0 && input_manager_1.default.keyPressed()) {
            scene_manager_1.default.pop();
            scene_manager_1.default.push(new GameScene_1.GameScene());
        }
    }
    draw(context) {
        context.save();
        if (this.transitionState !== scene_manager_1.SceneTransitionState.None) {
            context.globalAlpha = this.transitionAmount;
        }
        context.fillStyle = 'white';
        context.fillRect(0, 0, Game_1.default.screen.x, Game_1.default.screen.y);
        const y = (0, utils_1.lerp)(-200, Game_1.default.screen.y / 2, this.transitionAmount);
        context.fillStyle = `rgba(255, 0, 0, ${Math.floor(this.transitionAmount * 100) / 100})`;
        context.font = '48px Times New Roman';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText('You died!', Game_1.default.screen.x / 2, y);
        context.font = '36px Times New Roman';
        context.fillText(`Score: ${Math.round(this.x)}`, Game_1.default.screen.x / 2, y + 70);
        context.restore();
    }
}
exports.GameOverScene = GameOverScene;


/***/ }),

/***/ "./src/GameScene.ts":
/*!**************************!*\
  !*** ./src/GameScene.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameScene = void 0;
const camera_1 = __webpack_require__(/*! @basementuniverse/camera */ "./node_modules/@basementuniverse/camera/build/index.js");
const input_manager_1 = __webpack_require__(/*! @basementuniverse/input-manager */ "./node_modules/@basementuniverse/input-manager/build/index.js");
const scene_manager_1 = __webpack_require__(/*! @basementuniverse/scene-manager */ "./node_modules/@basementuniverse/scene-manager/build/index.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const Grid_1 = __webpack_require__(/*! ./Grid */ "./src/Grid.ts");
const Axes_1 = __webpack_require__(/*! ./Axes */ "./src/Axes.ts");
const Chart_1 = __webpack_require__(/*! ./Chart */ "./src/Chart.ts");
const Rocket_1 = __webpack_require__(/*! ./Rocket */ "./src/Rocket.ts");
const GameOverScene_1 = __webpack_require__(/*! ./GameOverScene */ "./src/GameOverScene.ts");
const MenuScene_1 = __webpack_require__(/*! ./MenuScene */ "./src/MenuScene.ts");
const PauseScene_1 = __webpack_require__(/*! ./PauseScene */ "./src/PauseScene.ts");
class GameScene extends scene_manager_1.Scene {
    constructor() {
        super({
            transitionTime: GameScene.TRANSITION_TIME,
            transparent: false,
        });
        this.lastPointsTime = 0;
        this.points = 0;
        this.previousPosition = 0;
        this.previousPoints = 0;
    }
    initialise() {
        const center = vec_1.vec.mul(Game_1.default.screen, 1 / 2);
        this.camera = new camera_1.default(center, {
            moveEaseAmount: 0.8,
        });
        this.grid = new Grid_1.default();
        this.axes = new Axes_1.default();
        this.chart = new Chart_1.default();
        const { min, max } = this.chart.f(center.x);
        this.rocket = new Rocket_1.default((0, vec_1.vec)(center.x, (min + max) / 2));
    }
    update(dt) {
        const center = vec_1.vec.mul(Game_1.default.screen, 1 / 2);
        if (input_manager_1.default.keyPressed('Escape')) {
            scene_manager_1.default.pop();
            scene_manager_1.default.push(new MenuScene_1.MenuScene());
        }
        if (input_manager_1.default.keyPressed('Space')) {
            scene_manager_1.default.push(new PauseScene_1.PauseScene());
        }
        this.rocket.update(dt);
        this.camera.position = (0, vec_1.vec)(this.rocket.position.x, center.y);
        const { min, max, avg } = this.chart.f(this.rocket.position.x);
        this.lastPointsTime += dt;
        if (this.lastPointsTime > 1) {
            this.previousPosition = this.rocket.position.y;
            this.previousPoints = this.points;
            this.points += (100 - Math.abs(this.rocket.position.y - avg));
            this.lastPointsTime = 0;
        }
        if (this.rocket.position.y >= min || this.rocket.position.y <= max) {
            scene_manager_1.default.pop();
            scene_manager_1.default.push(new GameOverScene_1.GameOverScene(this.rocket.position.x + this.points));
        }
        if (this.rocket.position.y <= 0 ||
            this.rocket.position.y >= Game_1.default.screen.y) {
            scene_manager_1.default.pop();
            scene_manager_1.default.push(new GameOverScene_1.GameOverScene(this.rocket.position.x + this.points));
        }
    }
    draw(context) {
        context.save();
        if (this.transitionState !== scene_manager_1.SceneTransitionState.None) {
            context.globalAlpha = this.transitionAmount;
        }
        context.fillStyle = 'white';
        context.fillRect(0, 0, Game_1.default.screen.x, Game_1.default.screen.y);
        context.save();
        this.camera.draw(context, Game_1.default.screen.x, Game_1.default.screen.y);
        this.grid.draw(context, this.camera.bounds);
        this.chart.draw(context, this.camera.bounds);
        this.axes.draw(context, this.camera.bounds);
        this.rocket.draw(context);
        context.restore();
        context.fillStyle = this.rocket.position.x < this.previousPosition ? 'red' : 'blue';
        context.fillRect(30, 30, 200, 30);
        context.fillStyle = 'white';
        context.font = 'bold 16px sans-serif';
        const positionSymbol = this.rocket.position.x < this.previousPosition ? '\u{25BC}' : '\u{25B2}';
        context.fillText(`${positionSymbol} POS ${Math.round(this.rocket.position.x)}`, 40, 50);
        context.fillStyle = this.points < this.previousPoints ? 'red' : 'green';
        context.fillRect(240, 30, 200, 30);
        context.fillStyle = 'white';
        context.font = 'bold 16px sans-serif';
        const pointsSymbol = this.points < this.previousPoints ? '\u{25BC}' : '\u{25B2}';
        context.fillText(`${pointsSymbol} PTS ${Math.round(this.points)}`, 250, 50);
        context.restore();
    }
}
exports.GameScene = GameScene;
GameScene.TRANSITION_TIME = 1;


/***/ }),

/***/ "./src/Grid.ts":
/*!*********************!*\
  !*** ./src/Grid.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const Actor_1 = __webpack_require__(/*! ./Actor */ "./src/Actor.ts");
class Grid extends Actor_1.default {
    constructor() {
        super();
        this.COLOUR = '#ccc';
        this.STROKE = 1;
        this.SIZE = 100;
    }
    update() { }
    draw(context, bounds) {
        context.save();
        context.strokeStyle = this.COLOUR;
        context.lineWidth = this.STROKE;
        const topLeft = (0, vec_1.vec)(Math.floor(bounds.left / this.SIZE) * this.SIZE, Math.floor(bounds.top / this.SIZE) * this.SIZE);
        const bottomRight = (0, vec_1.vec)(Math.ceil(bounds.right / this.SIZE) * this.SIZE, Math.ceil(bounds.bottom / this.SIZE) * this.SIZE);
        for (let x = topLeft.x; x <= bottomRight.x; x += this.SIZE) {
            this.drawLine(context, (0, vec_1.vec)(x, topLeft.y), (0, vec_1.vec)(x, bottomRight.y));
        }
        for (let y = topLeft.y; y <= bottomRight.y; y += this.SIZE) {
            this.drawLine(context, (0, vec_1.vec)(topLeft.x, y), (0, vec_1.vec)(bottomRight.x, y));
        }
        context.restore();
    }
    drawLine(context, a, b) {
        context.beginPath();
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
        context.stroke();
        context.closePath();
    }
}
exports["default"] = Grid;


/***/ }),

/***/ "./src/MenuScene.ts":
/*!**************************!*\
  !*** ./src/MenuScene.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuScene = void 0;
const input_manager_1 = __webpack_require__(/*! @basementuniverse/input-manager */ "./node_modules/@basementuniverse/input-manager/build/index.js");
const scene_manager_1 = __webpack_require__(/*! @basementuniverse/scene-manager */ "./node_modules/@basementuniverse/scene-manager/build/index.js");
const utils_1 = __webpack_require__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const GameScene_1 = __webpack_require__(/*! ./GameScene */ "./src/GameScene.ts");
const config = __webpack_require__(/*! ./config.json */ "./src/config.json");
class MenuScene extends scene_manager_1.Scene {
    constructor() {
        super({
            transitionTime: 1,
        });
    }
    initialise() { }
    update(dt) {
        if (input_manager_1.default.keyPressed()) {
            scene_manager_1.default.pop();
            scene_manager_1.default.push(new GameScene_1.GameScene());
        }
    }
    draw(context) {
        context.save();
        if (this.transitionState !== scene_manager_1.SceneTransitionState.None) {
            context.globalAlpha = this.transitionAmount;
        }
        const y = (0, utils_1.lerp)(-200, Game_1.default.screen.y / 2, this.transitionAmount);
        context.fillStyle = `rgba(0, 0, 0, ${Math.floor(this.transitionAmount * 100) / 100})`;
        context.font = '48px Times New Roman';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(config.title, Game_1.default.screen.x / 2, y);
        context.font = '36px Times New Roman';
        context.fillText('Press any key', Game_1.default.screen.x / 2, y + 70);
        context.restore();
    }
}
exports.MenuScene = MenuScene;


/***/ }),

/***/ "./src/PauseScene.ts":
/*!***************************!*\
  !*** ./src/PauseScene.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PauseScene = void 0;
const input_manager_1 = __webpack_require__(/*! @basementuniverse/input-manager */ "./node_modules/@basementuniverse/input-manager/build/index.js");
const scene_manager_1 = __webpack_require__(/*! @basementuniverse/scene-manager */ "./node_modules/@basementuniverse/scene-manager/build/index.js");
const utils_1 = __webpack_require__(/*! @basementuniverse/utils */ "./node_modules/@basementuniverse/utils/utils.js");
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
class PauseScene extends scene_manager_1.Scene {
    constructor() {
        super({
            transitionTime: 1,
        });
    }
    initialise() { }
    update(dt) {
        if (input_manager_1.default.keyPressed()) {
            scene_manager_1.default.pop();
        }
    }
    draw(context) {
        context.save();
        if (this.transitionState !== scene_manager_1.SceneTransitionState.None) {
            context.globalAlpha = this.transitionAmount;
        }
        context.fillStyle = 'rgba(255, 255, 255, 0.75)';
        context.fillRect(0, 0, Game_1.default.screen.x, Game_1.default.screen.y);
        const y = (0, utils_1.lerp)(-200, Game_1.default.screen.y / 2, this.transitionAmount);
        context.fillStyle = `rgba(0, 0, 0, ${Math.floor(this.transitionAmount * 100) / 100})`;
        context.font = '48px Times New Roman';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText('Paused', Game_1.default.screen.x / 2, y);
        context.restore();
    }
}
exports.PauseScene = PauseScene;


/***/ }),

/***/ "./src/Rocket.ts":
/*!***********************!*\
  !*** ./src/Rocket.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const input_manager_1 = __webpack_require__(/*! @basementuniverse/input-manager */ "./node_modules/@basementuniverse/input-manager/build/index.js");
const vec_1 = __webpack_require__(/*! @basementuniverse/vec */ "./node_modules/@basementuniverse/vec/vec.js");
const Actor_1 = __webpack_require__(/*! ./Actor */ "./src/Actor.ts");
const config = __webpack_require__(/*! ./config.json */ "./src/config.json");
class Rocket extends Actor_1.default {
    constructor(position) {
        super();
        this.FILL_COLOUR = 'white';
        this.STROKE_COLOUR = 'black';
        this.SIZE = 32;
        this.STROKE = 2;
        this.THRUST = 5;
        this.TURN_SPEED = 1.8;
        this.FRICTION = 0.992;
        this.GRAVITY = 0.8;
        this.position = (0, vec_1.vec)();
        this.velocity = (0, vec_1.vec)();
        this.direction = 0;
        this.size = (0, vec_1.vec)(this.SIZE, this.SIZE);
        this.position = position;
    }
    update(dt) {
        if (input_manager_1.default.keyDown(config.controls.left)) {
            this.direction -= this.TURN_SPEED * dt;
        }
        else if (input_manager_1.default.keyDown(config.controls.right)) {
            this.direction += this.TURN_SPEED * dt;
        }
        let moveVector = (0, vec_1.vec)();
        if (input_manager_1.default.keyDown(config.controls.up)) {
            moveVector = (0, vec_1.vec)(this.THRUST, 0);
        }
        else if (input_manager_1.default.keyDown(config.controls.down)) {
            moveVector = (0, vec_1.vec)(-this.THRUST, 0);
        }
        moveVector = vec_1.vec.rot(moveVector, this.direction);
        moveVector = vec_1.vec.add(moveVector, (0, vec_1.vec)(0, this.GRAVITY));
        this.velocity = vec_1.vec.add(this.velocity, moveVector);
        this.velocity = vec_1.vec.mul(this.velocity, this.FRICTION);
        this.position = vec_1.vec.add(this.position, vec_1.vec.mul(this.velocity, dt));
    }
    draw(context) {
        context.save();
        context.translate(this.position.x, this.position.y);
        context.rotate(this.direction);
        context.strokeStyle = this.STROKE_COLOUR;
        context.fillStyle = this.FILL_COLOUR;
        context.lineWidth = this.STROKE;
        context.beginPath();
        context.moveTo(-this.size.x / 2, -this.size.y / 2);
        context.lineTo(this.size.x / 2, 0);
        context.lineTo(-this.size.x / 2, this.size.y / 2);
        context.lineTo(-this.size.x / 2, this.size.y * 0.1);
        context.lineTo(-this.size.x, this.size.y * 0.1);
        context.lineTo(-this.size.x, -this.size.y * 0.1);
        context.lineTo(-this.size.x / 2, -this.size.y * 0.1);
        context.closePath();
        context.fill();
        context.stroke();
        context.restore();
    }
}
exports["default"] = Rocket;


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SECOND = exports.FPS_MIN = exports.DEBUG = void 0;
exports.DEBUG = false;
exports.FPS_MIN = 1 / 30;
exports.SECOND = 1000;


/***/ }),

/***/ "./node_modules/ts-perlin-simplex/index.js":
/*!*************************************************!*\
  !*** ./node_modules/ts-perlin-simplex/index.js ***!
  \*************************************************/
/***/ ((module) => {

// https://gist.github.com/banksean/304522
//
// Ported from Stefan Gustavson's java implementation
// http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf
// Read Stefan's excellent paper for details on how this code works.
//
// Sean McCullough banksean@gmail.com

/**
 * You can pass in a random number generator object if you like.
 * It is assumed to have a random() method.
 */

Noise = {}

Noise.SimplexNoise = function(r) {
  if (r == undefined) r = Math;
  this.grad3 = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
                                 [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
                                 [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];
  this.p = [];
  for (var i=0; i<256; i++) {
    this.p[i] = Math.floor(r.random()*256);
  }
  // To remove the need for index wrapping, double the permutation table length
  this.perm = [];
  for(var i=0; i<512; i++) {
    this.perm[i]=this.p[i & 255];
  }

  // A lookup table to traverse the simplex around a given point in 4D.
  // Details can be found where this table is used, in the 4D noise method.
  this.simplex = [
    [0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],
    [0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],
    [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
    [1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],
    [1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],
    [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],
    [2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],
    [2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]];
};

Noise.SimplexNoise.prototype.dot = function(g, x, y) {
  return g[0]*x + g[1]*y;
};

Noise.SimplexNoise.prototype.dot3 = function(g, x, y, z) {
  return g[0]*x + g[1]*y + g[2]*z;
};

Noise.SimplexNoise.prototype.noise = function(xin, yin) {
  var n0, n1, n2; // Noise contributions from the three corners
  // Skew the input space to determine which simplex cell we're in
  var F2 = 0.5*(Math.sqrt(3.0)-1.0);
  var s = (xin+yin)*F2; // Hairy factor for 2D
  var i = Math.floor(xin+s);
  var j = Math.floor(yin+s);
  var G2 = (3.0-Math.sqrt(3.0))/6.0;
  var t = (i+j)*G2;
  var X0 = i-t; // Unskew the cell origin back to (x,y) space
  var Y0 = j-t;
  var x0 = xin-X0; // The x,y distances from the cell origin
  var y0 = yin-Y0;
  // For the 2D case, the simplex shape is an equilateral triangle.
  // Determine which simplex we are in.
  var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
  if(x0>y0) {i1=1; j1=0;} // lower triangle, XY order: (0,0)->(1,0)->(1,1)
  else {i1=0; j1=1;}      // upper triangle, YX order: (0,0)->(0,1)->(1,1)
  // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
  // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
  // c = (3-sqrt(3))/6
  var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
  var y1 = y0 - j1 + G2;
  var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
  var y2 = y0 - 1.0 + 2.0 * G2;
  // Work out the hashed gradient indices of the three simplex corners
  var ii = i & 255;
  var jj = j & 255;
  var gi0 = this.perm[ii+this.perm[jj]] % 12;
  var gi1 = this.perm[ii+i1+this.perm[jj+j1]] % 12;
  var gi2 = this.perm[ii+1+this.perm[jj+1]] % 12;
  // Calculate the contribution from the three corners
  var t0 = 0.5 - x0*x0-y0*y0;
  if(t0<0) n0 = 0.0;
  else {
    t0 *= t0;
    n0 = t0 * t0 * this.dot(this.grad3[gi0], x0, y0);  // (x,y) of grad3 used for 2D gradient
  }
  var t1 = 0.5 - x1*x1-y1*y1;
  if(t1<0) n1 = 0.0;
  else {
    t1 *= t1;
    n1 = t1 * t1 * this.dot(this.grad3[gi1], x1, y1);
  }
  var t2 = 0.5 - x2*x2-y2*y2;
  if(t2<0) n2 = 0.0;
  else {
    t2 *= t2;
    n2 = t2 * t2 * this.dot(this.grad3[gi2], x2, y2);
  }
  // Add contributions from each corner to get the final noise value.
  // The result is scaled to return values in the interval [-1,1].
  return 70.0 * (n0 + n1 + n2);
};

// 3D simplex noise
Noise.SimplexNoise.prototype.noise3d = function(xin, yin, zin) {
  var n0, n1, n2, n3; // Noise contributions from the four corners
  // Skew the input space to determine which simplex cell we're in
  var F3 = 1.0/3.0;
  var s = (xin+yin+zin)*F3; // Very nice and simple skew factor for 3D
  var i = Math.floor(xin+s);
  var j = Math.floor(yin+s);
  var k = Math.floor(zin+s);
  var G3 = 1.0/6.0; // Very nice and simple unskew factor, too
  var t = (i+j+k)*G3;
  var X0 = i-t; // Unskew the cell origin back to (x,y,z) space
  var Y0 = j-t;
  var Z0 = k-t;
  var x0 = xin-X0; // The x,y,z distances from the cell origin
  var y0 = yin-Y0;
  var z0 = zin-Z0;
  // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
  // Determine which simplex we are in.
  var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
  var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
  if(x0>=y0) {
    if(y0>=z0)
      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; } // X Y Z order
      else if(x0>=z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; } // X Z Y order
      else { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; } // Z X Y order
    }
  else { // x0<y0
    if(y0<z0) { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; } // Z Y X order
    else if(x0<z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; } // Y Z X order
    else { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; } // Y X Z order
  }
  // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
  // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
  // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
  // c = 1/6.
  var x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords
  var y1 = y0 - j1 + G3;
  var z1 = z0 - k1 + G3;
  var x2 = x0 - i2 + 2.0*G3; // Offsets for third corner in (x,y,z) coords
  var y2 = y0 - j2 + 2.0*G3;
  var z2 = z0 - k2 + 2.0*G3;
  var x3 = x0 - 1.0 + 3.0*G3; // Offsets for last corner in (x,y,z) coords
  var y3 = y0 - 1.0 + 3.0*G3;
  var z3 = z0 - 1.0 + 3.0*G3;
  // Work out the hashed gradient indices of the four simplex corners
  var ii = i & 255;
  var jj = j & 255;
  var kk = k & 255;
  var gi0 = this.perm[ii+this.perm[jj+this.perm[kk]]] % 12;
  var gi1 = this.perm[ii+i1+this.perm[jj+j1+this.perm[kk+k1]]] % 12;
  var gi2 = this.perm[ii+i2+this.perm[jj+j2+this.perm[kk+k2]]] % 12;
  var gi3 = this.perm[ii+1+this.perm[jj+1+this.perm[kk+1]]] % 12;
  // Calculate the contribution from the four corners
  var t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
  if(t0<0) n0 = 0.0;
  else {
    t0 *= t0;
    n0 = t0 * t0 * this.dot3(this.grad3[gi0], x0, y0, z0);
  }
  var t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
  if(t1<0) n1 = 0.0;
  else {
    t1 *= t1;
    n1 = t1 * t1 * this.dot3(this.grad3[gi1], x1, y1, z1);
  }
  var t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
  if(t2<0) n2 = 0.0;
  else {
    t2 *= t2;
    n2 = t2 * t2 * this.dot3(this.grad3[gi2], x2, y2, z2);
  }
  var t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
  if(t3<0) n3 = 0.0;
  else {
    t3 *= t3;
    n3 = t3 * t3 * this.dot3(this.grad3[gi3], x3, y3, z3);
  }
  // Add contributions from each corner to get the final noise value.
  // The result is scaled to stay just inside [-1,1]
  return 32.0*(n0 + n1 + n2 + n3);
};

module.exports = Noise;

/***/ }),

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"title":"ChartRocket.xls","showFPS":true,"controls":{"up":"ArrowUp","down":"ArrowDown","left":"ArrowLeft","right":"ArrowRight"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
window.onload = () => {
    const game = new Game_1.default(document.querySelector('#game'));
    game.initialise();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsSUFBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7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LFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFB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QUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxJQUFJO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxJQUFJO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDLE9BQU87O0FBRVAsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxj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YSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDcEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FB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LEdBQUcsSUFBSSxjQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNwQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFydHJvY2tldC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS9jYW1lcmEvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hhcnRyb2NrZXQvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvZGVidWcvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hhcnRyb2NrZXQvLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlci9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaGFydHJvY2tldC8uL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS9zY2VuZS1tYW5hZ2VyL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL2NoYXJ0cm9ja2V0Ly4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL2NoYXJ0cm9ja2V0Ly4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanMiLCJ3ZWJwYWNrOi8vY2hhcnRyb2NrZXQvLi9zcmMvQWN0b3IudHMiLCJ3ZWJwYWNrOi8vY2hhcnRyb2NrZXQvLi9zcmMvQXhlcy50cyIsIndlYnBhY2s6Ly9jaGFydHJvY2tldC8uL3NyYy9DaGFydC50cyIsIndlYnBhY2s6Ly9jaGFydHJvY2tldC8uL3NyYy9HYW1lLnRzIiwid2VicGFjazovL2NoYXJ0cm9ja2V0Ly4vc3JjL0dhbWVPdmVyU2NlbmUudHMiLCJ3ZWJwYWNrOi8vY2hhcnRyb2NrZXQvLi9zcmMvR2FtZVNjZW5lLnRzIiwid2VicGFjazovL2NoYXJ0cm9ja2V0Ly4vc3JjL0dyaWQudHMiLCJ3ZWJwYWNrOi8vY2hhcnRyb2NrZXQvLi9zcmMvTWVudVNjZW5lLnRzIiwid2VicGFjazovL2NoYXJ0cm9ja2V0Ly4vc3JjL1BhdXNlU2NlbmUudHMiLCJ3ZWJwYWNrOi8vY2hhcnRyb2NrZXQvLi9zcmMvUm9ja2V0LnRzIiwid2VicGFjazovL2NoYXJ0cm9ja2V0Ly4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9jaGFydHJvY2tldC8uL25vZGVfbW9kdWxlcy90cy1wZXJsaW4tc2ltcGxleC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaGFydHJvY2tldC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaGFydHJvY2tldC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuIC8qKioqKiovICgoKSA9PiB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzL3V0aWxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzL3V0aWxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKChtb2R1bGUpID0+IHtcblxuLyoqXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXG4gKi9cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbnVtYmVycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICogQHBhcmFtIHtudW1iZXJ9IGEgTnVtYmVyIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIE51bWJlciBiXG4gKiBAcGFyYW0ge251bWJlcn0gW3A9TnVtYmVyLkVQU0lMT05dIFRoZSBwcmVjaXNpb24gdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbnVtYmVycyBhIGFuZCBiIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gKi9cbmNvbnN0IGZsb2F0RXF1YWxzID0gKGEsIGIsIHAgPSBOdW1iZXIuRVBTSUxPTikgPT4gTWF0aC5hYnMoYSAtIGIpIDwgcDtcblxuLyoqXG4gKiBDbGFtcCBhIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIHRvIGNsYW1wXG4gKiBAcGFyYW0ge251bWJlcn0gW21pbj0wXSBUaGUgbWluaW11bSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IFttYXg9MV0gVGhlIG1heGltdW0gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gQSBjbGFtcGVkIG51bWJlclxuICovXG5jb25zdCBjbGFtcCA9IChhLCBtaW4gPSAwLCBtYXggPSAxKSA9PiBhIDwgbWluID8gbWluIDogKGEgPiBtYXggPyBtYXggOiBhKTtcblxuLyoqXG4gKiBHZXQgdGhlIGZyYWN0aW9uYWwgcGFydCBvZiBhIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG51bWJlciBmcm9tIHdoaWNoIHRvIGdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgdGhlIG51bWJlclxuICovXG5jb25zdCBmcmFjID0gYSA9PiBhID49IDAgPyBhIC0gTWF0aC5mbG9vcihhKSA6IGEgLSBNYXRoLmNlaWwoYSk7XG5cbi8qKlxuICogRG8gYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuY29uc3QgbGVycCA9IChhLCBiLCBpKSA9PiBhICsgKGIgLSBhKSAqIGk7XG5cbi8qKlxuICogR2V0IHRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgcG9zaXRpb24gb2YgaSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuY29uc3QgdW5sZXJwID0gKGEsIGIsIGkpID0+IChpIC0gYSkgLyAoYiAtIGEpO1xuXG4vKipcbiAqIERvIGEgYmlsaW5lYXIgaW50ZXJwb2xhdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGMwMCBUb3AtbGVmdCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMxMCBUb3AtcmlnaHQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDEgQm90dG9tLWxlZnQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTEgQm90dG9tLXJpZ2h0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaXggSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB4XG4gKiBAcGFyYW0ge251bWJlcn0gaXkgSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB5XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgYmlsaW5lYXIgaW50ZXJwb2xhdGVkIHZhbHVlXG4gKi9cbmNvbnN0IGJsZXJwID0gKGMwMCwgYzEwLCBjMDEsIGMxMSwgaXgsIGl5KSA9PiBsZXJwKGxlcnAoYzAwLCBjMTAsIGl4KSwgbGVycChjMDEsIGMxMSwgaXgpLCBpeSk7XG5cbi8qKlxuICogUmUtbWFwIGEgbnVtYmVyIGkgZnJvbSByYW5nZSBhMS4uLmEyIHRvIGIxLi4uYjJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBudW1iZXIgdG8gcmUtbWFwXG4gKiBAcGFyYW0ge251bWJlcn0gYTFcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMlxuICogQHBhcmFtIHtudW1iZXJ9IGIxXG4gKiBAcGFyYW0ge251bWJlcn0gYjJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuY29uc3QgcmVtYXAgPSAoaSwgYTEsIGEyLCBiMSwgYjIpID0+IGIxICsgKGkgLSBhMSkgKiAoYjIgLSBiMSkgLyAoYTIgLSBhMSk7XG5cbi8qKlxuICogRG8gYSBzbW9vdGggaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5jb25zdCBzbW9vdGhzdGVwID0gKGEsIGIsIGkpID0+IGxlcnAoYSwgYiwgMyAqIE1hdGgucG93KGksIDIpIC0gMiAqIE1hdGgucG93KGksIDMpKTtcblxuLyoqXG4gKiBHZXQgYW4gYW5nbGUgaW4gcmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXMgVGhlIGFuZ2xlIGluIGRlZ3JlZXNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqL1xuY29uc3QgcmFkaWFucyA9IGRlZ3JlZXMgPT4gKE1hdGguUEkgLyAxODApICogZGVncmVlcztcblxuLyoqXG4gKiBHZXQgYW4gYW5nbGUgaW4gZGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnMgVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIGRlZ3JlZXNcbiAqL1xuY29uc3QgZGVncmVlcyA9IHJhZGlhbnMgPT4gKDE4MCAvIE1hdGguUEkpICogcmFkaWFucztcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBFeGNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXG4gKi9cbmNvbnN0IHJhbmRvbUJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICovXG5jb25zdCByYW5kb21JbnRCZXR3ZWVuID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXG4vKipcbiAqIEdldCBhIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbXU9MC41XSBUaGUgbWVhbiB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IFtzaWdtYT0wLjVdIFRoZSBzdGFuZGFyZCBkZXZpYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2FtcGxlcz0yXSBUaGUgbnVtYmVyIG9mIHNhbXBsZXNcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXG4gKi9cbmNvbnN0IGNsdFJhbmRvbSA9IChtdSA9IDAuNSwgc2lnbWEgPSAwLjUsIHNhbXBsZXMgPSAyKSA9PiB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAobGV0IGkgPSBzYW1wbGVzOyBpLS07KSB7XG4gICAgdG90YWwgKz0gTWF0aC5yYW5kb20oKTtcbiAgfVxuICByZXR1cm4gbXUgKyAodG90YWwgLSBzYW1wbGVzIC8gMikgLyAoc2FtcGxlcyAvIDIpICogc2lnbWE7XG59O1xuXG4vKipcbiAqIEdldCBhIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBpbnRlZ2VyXG4gKi9cbmNvbnN0IGNsdFJhbmRvbUludCA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihtaW4gKyBjbHRSYW5kb20oMC41LCAwLjUsIDIpICogKG1heCArIDEgLSBtaW4pKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB3ZWlnaHRlZCByYW5kb20gaW50ZWdlclxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB3IEFuIGFycmF5IG9mIHdlaWdodHNcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW5kZXggZnJvbSB3XG4gKi9cbmNvbnN0IHdlaWdodGVkUmFuZG9tID0gdyA9PiB7XG4gIGxldCB0b3RhbCA9IHcucmVkdWNlKChhLCBpKSA9PiBhICsgaSwgMCksIG4gPSAwO1xuICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsO1xuICB3aGlsZSAodG90YWwgPiByKSB7XG4gICAgdG90YWwgLT0gd1tuKytdO1xuICB9XG4gIHJldHVybiBuIC0gMTtcbn07XG5cbi8qKlxuICogQW4gaW50ZXJwb2xhdGlvbiBmdW5jdGlvblxuICogQGNhbGxiYWNrIGludGVycG9sYXRpb25DYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuXG4vKipcbiAqIFJldHVybiBhbiBpbnRlcnBvbGF0ZWQgdmFsdWUgZnJvbSBhbiBhcnJheVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIEFuIGFycmF5IG9mIHZhbHVlcyBpbnRlcnBvbGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGkgQSBudW1iZXIgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHBhcmFtIHtpbnRlcnBvbGF0aW9uQ2FsbGJhY2t9IFtmPU1hdGgubGVycF0gVGhlIGludGVycG9sYXRpb24gZnVuY3Rpb24gdG8gdXNlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW21pbihhKSwgbWF4KGEpXVxuICovXG5jb25zdCBsZXJwQXJyYXkgPSAoYSwgaSwgZiA9IGxlcnApID0+IHtcbiAgY29uc3QgcyA9IGkgKiAoYS5sZW5ndGggLSAxKTtcbiAgY29uc3QgcCA9IGNsYW1wKE1hdGgudHJ1bmMocyksIDAsIGEubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBmKGFbcF0gfHwgMCwgYVtwICsgMV0gfHwgMCwgZnJhYyhzKSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xuY29uc3QgZG90ID0gKGEsIGIpID0+IGEucmVkdWNlKChuLCB2LCBpKSA9PiBuICsgdiAqIGJbaV0sIDApO1xuXG4vKipcbiAqIEdldCB0aGUgZmFjdG9yaWFsIG9mIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYVxuICogQHJldHVybiB7bnVtYmVyfSBhIVxuICovXG5jb25zdCBmYWN0b3JpYWwgPSBhID0+IHtcbiAgbGV0IHJlc3VsdCA9IDE7XG4gIGZvciAobGV0IGkgPSAyOyBpIDw9IGE7IGkrKykge1xuICAgIHJlc3VsdCAqPSBpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgbnVtYmVyIG9mIHBlcm11dGF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEBwYXJhbSB7bnVtYmVyfSByXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5QclxuICovXG5jb25zdCBwZXJtdXRhdGlvbiA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyBmYWN0b3JpYWwobiAtIHIpO1xuXG4vKipcbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNvbWJpbmF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEBwYXJhbSB7bnVtYmVyfSByXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5DclxuICovXG5jb25zdCBjb21iaW5hdGlvbiA9IChuLCByKSA9PiBmYWN0b3JpYWwobikgLyAoZmFjdG9yaWFsKHIpICogZmFjdG9yaWFsKG4gLSByKSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiBmb3IgZ2VuZXJhdGluZyBhcnJheSB2YWx1ZXNcbiAqIEBjYWxsYmFjayB0aW1lc0NhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgYXJyYXkgaW5kZXhcbiAqIEByZXR1cm4geyp9IFRoZSBhcnJheSB2YWx1ZVxuICovXG5cbi8qKlxuICogUmV0dXJuIGEgbmV3IGFycmF5IHdpdGggbGVuZ3RoIG4gYnkgY2FsbGluZyBmdW5jdGlvbiBmKGkpIG9uIGVhY2ggZWxlbWVudFxuICogQHBhcmFtIHt0aW1lc0NhbGxiYWNrfSBmXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PCo+fVxuICovXG5jb25zdCB0aW1lcyA9IChmLCBuKSA9PiBBcnJheShuKS5maWxsKDApLm1hcCgoXywgaSkgPT4gZihpKSk7XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgbnVtYmVycyAwLT4obiAtIDEpXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IEFuIGFycmF5IG9mIGludGVnZXJzIDAtPihuIC0gMSlcbiAqL1xuY29uc3QgcmFuZ2UgPSBuID0+IHRpbWVzKGkgPT4gaSwgbik7XG5cbi8qKlxuICogWmlwIDIgYXJyYXlzIHRvZ2V0aGVyLCBpLmUuIChbMSwgMiwgM10sIFthLCBiLCBjXSkgPT4gW1sxLCBhXSwgWzIsIGJdLCBbMywgY11dXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBiXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59XG4gKi9cbmNvbnN0IHppcCA9IChhLCBiKSA9PiBhLm1hcCgoaywgaSkgPT4gW2ssIGJbaV1dKTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXlbaV0gd2l0aCBwb3NpdGl2ZSBhbmQgbmVnYXRpdmUgd3JhcHBpbmdcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBwb3NpdGl2ZWx5L25lZ2F0aXZlbHkgd3JhcHBlZCBhcnJheSBpbmRleFxuICogQHJldHVybiB7Kn0gQW4gZWxlbWVudCBmcm9tIHRoZSBhcnJheVxuICovXG5jb25zdCBhdCA9IChhLCBpKSA9PiBhW2kgPCAwID8gYS5sZW5ndGggLSAoTWF0aC5hYnMoaSArIDEpICUgYS5sZW5ndGgpIC0gMSA6IGkgJSBhLmxlbmd0aF07XG5cbi8qKlxuICogQ2hvcCBhbiBhcnJheSBpbnRvIGNodW5rcyBvZiBzaXplIG5cbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjaHVuayBzaXplXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGFycmF5IGNodW5rc1xuICovXG5jb25zdCBjaHVuayA9IChhLCBuKSA9PiB0aW1lcyhpID0+IGEuc2xpY2UoaSAqIG4sIGkgKiBuICsgbiksIE1hdGguY2VpbChhLmxlbmd0aCAvIG4pKTtcblxuLyoqXG4gKiBSYW5kb21seSBzaHVmZmxlIGEgc2hhbGxvdyBjb3B5IG9mIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcmV0dXJuIHtBcnJheTwqPn0gVGhlIHNodWZmbGVkIGFycmF5XG4gKi9cbmNvbnN0IHNodWZmbGUgPSBhID0+IGEuc2xpY2UoKS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG5pZiAodHJ1ZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmbG9hdEVxdWFscyxcbiAgICBjbGFtcCxcbiAgICBmcmFjLFxuICAgIGxlcnAsXG4gICAgdW5sZXJwLFxuICAgIGJsZXJwLFxuICAgIHJlbWFwLFxuICAgIHNtb290aHN0ZXAsXG4gICAgcmFkaWFucyxcbiAgICBkZWdyZWVzLFxuICAgIHJhbmRvbUJldHdlZW4sXG4gICAgcmFuZG9tSW50QmV0d2VlbixcbiAgICBjbHRSYW5kb20sXG4gICAgY2x0UmFuZG9tSW50LFxuICAgIHdlaWdodGVkUmFuZG9tLFxuICAgIGxlcnBBcnJheSxcbiAgICBkb3QsXG4gICAgZmFjdG9yaWFsLFxuICAgIHBlcm11dGF0aW9uLFxuICAgIGNvbWJpbmF0aW9uLFxuICAgIHRpbWVzLFxuICAgIHJhbmdlLFxuICAgIHppcCxcbiAgICBhdCxcbiAgICBjaHVuayxcbiAgICBzaHVmZmxlLFxuICB9O1xufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS92ZWMvdmVjLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSA9PiB7XG5cbmNvbnN0IHsgdGltZXMsIGNodW5rLCBkb3QgfSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYXNlbWVudHVuaXZlcnNlL3V0aWxzICovIFwiLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMvdXRpbHMuanNcIik7XG5cbi8qKlxuICogQG92ZXJ2aWV3IEEgbGlicmFyeSBvZiB1c2VmdWwgZnVuY3Rpb25zXG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxuICovXG5cbi8qKlxuICogQSAyZCB2ZWN0b3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHZlY1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHggVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB5IFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcnx2ZWN9IFt4XSBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3Rvciwgb3IgYSB2ZWN0b3IgdG8gY29weVxuICogQHBhcmFtIHtudW1iZXJ9IFt5XSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjfSBBIG5ldyB2ZWN0b3JcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlZhcmlvdXMgd2F5cyB0byBpbml0aWFsaXNlIGEgdmVjdG9yPC9jYXB0aW9uPlxuICogbGV0IGEgPSB2ZWMoMywgMik7ICAvLyAoMywgMilcbiAqIGxldCBiID0gdmVjKDQpOyAgICAgLy8gKDQsIDQpXG4gKiBsZXQgYyA9IHZlYyhhKTsgICAgIC8vICgzLCAyKVxuICogbGV0IGQgPSB2ZWMoKTsgICAgICAvLyAoMCwgMClcbiAqL1xuY29uc3QgdmVjID0gKHgsIHkpID0+ICgheCAmJiAheSA/XG4gIHsgeDogMCwgeTogMCB9IDogKHR5cGVvZiB4ID09PSAnb2JqZWN0JyA/XG4gICAgeyB4OiB4LnggfHwgMCwgeTogeC55IHx8IDAgfSA6ICh5ID09PSBudWxsIHx8IHkgPT09IHVuZGVmaW5lZCA/XG4gICAgICB7IHg6IHgsIHk6IHggfSA6IHsgeDogeCwgeTogeSB9KVxuICApXG4pO1xuXG4vKipcbiAqIEdldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlY3RvciBhcyBhbiBhcnJheVxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBnZXQgY29tcG9uZW50cyBmcm9tXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUaGUgdmVjdG9yIGNvbXBvbmVudHMgYXMgYW4gYXJyYXlcbiAqL1xudmVjLmNvbXBvbmVudHMgPSBhID0+IFthLngsIGEueV07XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDEsIDApXG4gKiBAcmV0dXJuIHt2ZWN9IEEgdW5pdCB2ZWN0b3IgKDEsIDApXG4gKi9cbnZlYy51eCA9ICgpID0+IHZlYygxLCAwKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMSlcbiAqIEByZXR1cm4ge3ZlY30gQSB1bml0IHZlY3RvciAoMCwgMSlcbiAqL1xudmVjLnV5ID0gKCkgPT4gdmVjKDAsIDEpO1xuXG4vKipcbiAqIEFkZCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge3ZlY30gYSArIGJcbiAqL1xudmVjLmFkZCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKyBiLngsIHk6IGEueSArIGIueSB9KTtcblxuLyoqXG4gKiBTY2FsZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWN9IGEgKiBiXG4gKi9cbnZlYy5tdWwgPSAoYSwgYikgPT4gKHsgeDogYS54ICogYiwgeTogYS55ICogYiB9KTtcblxuLyoqXG4gKiBTdWJ0cmFjdCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge3ZlY30gYSAtIGJcbiAqL1xudmVjLnN1YiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLSBiLngsIHk6IGEueSAtIGIueSB9KTtcblxuLyoqXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYy5sZW4gPSBhID0+IE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkpO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIHVzaW5nIHRheGljYWIgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxuICovXG52ZWMubWFuaGF0dGFuID0gYSA9PiBNYXRoLmFicyhhLngpICsgTWF0aC5hYnMoYS55KTtcblxuLyoqXG4gKiBOb3JtYWxpc2UgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXNlXG4gKiBAcmV0dXJuIHt2ZWN9IF5hXG4gKi9cbnZlYy5ub3IgPSBhID0+IHtcbiAgbGV0IGxlbiA9IHZlYy5sZW4oYSk7XG4gIHJldHVybiBsZW4gPyB7IHg6IGEueCAvIGxlbiwgeTogYS55IC8gbGVuIH0gOiB2ZWMoKTtcbn07XG5cbi8qKlxuICogR2V0IGEgZG90IHByb2R1Y3Qgb2YgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xudmVjLmRvdCA9IChhLCBiKSA9PiBhLnggKiBiLnggKyBhLnkgKiBiLnk7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIGJ5IHIgcmFkaWFuc1xuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBhbmdsZSB0byByb3RhdGUgYnksIG1lYXN1cmVkIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge3ZlY30gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMucm90ID0gKGEsIHIpID0+IHtcbiAgbGV0IHMgPSBNYXRoLnNpbihyKSxcbiAgICBjID0gTWF0aC5jb3Mocik7XG4gIHJldHVybiB7IHg6IGMgKiBhLnggLSBzICogYS55LCB5OiBzICogYS54ICsgYyAqIGEueSB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2ZWN0b3JzIGFyZSBlcXVhbFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZlY3RvcnMgYSBhbmQgYiBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZVxuICovXG52ZWMuZXEgPSAoYSwgYikgPT4gYS54ID09PSBiLnggJiYgYS55ID09PSBiLnk7XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcbiAqL1xudmVjLnJhZCA9IGEgPT4gTWF0aC5hdGFuMihhLnksIGEueCk7XG5cbi8qKlxuICogQ29weSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb3B5XG4gKiBAcmV0dXJuIHt2ZWN9IEEgY29weSBvZiB2ZWN0b3IgYVxuICovXG52ZWMuY3B5ID0gYSA9PiB2ZWMoYSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yXG4gKiBAY2FsbGJhY2sgdmVjdG9yTWFwQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgY29tcG9uZW50IHZhbHVlXG4gKiBAcGFyYW0geyd4JyB8ICd5J30gbGFiZWwgVGhlIGNvbXBvbmVudCBsYWJlbCAoeCBvciB5KVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGNvbXBvbmVudFxuICovXG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yIGFuZCBidWlsZCBhIG5ldyB2ZWN0b3IgZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjdG9yTWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjfSBWZWN0b3IgYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbnZlYy5tYXAgPSAoYSwgZikgPT4gKHsgeDogZihhLngsICd4JyksIHk6IGYoYS55LCAneScpIH0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSB2ZWN0b3IgaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG52ZWMuc3RyID0gKGEsIHMgPSAnLCAnKSA9PiBgJHthLnh9JHtzfSR7YS55fWA7XG5cbi8qKlxuICogQSBtYXRyaXhcbiAqIEB0eXBlZGVmIHtPYmplY3R9IG1hdFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG0gVGhlIG51bWJlciBvZiByb3dzIGluIHRoZSBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgbWF0cml4XG4gKiBAcHJvcGVydHkge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIG1hdHJpeCB2YWx1ZXNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBtYXRyaXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbT00XSBUaGUgbnVtYmVyIG9mIHJvd3NcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbj00XSBUaGUgbnVtYmVyIG9mIGNvbHVtbnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2VudHJpZXM9W11dIE1hdHJpeCB2YWx1ZXMgaW4gcmVhZGluZyBvcmRlclxuICogQHJldHVybiB7bWF0fSBBIG5ldyBtYXRyaXhcbiAqL1xuY29uc3QgbWF0ID0gKG0gPSA0LCBuID0gNCwgZW50cmllcyA9IFtdKSA9PiAoe1xuICBtLCBuLFxuICBlbnRyaWVzOiBlbnRyaWVzLmNvbmNhdChBcnJheShtICogbikuZmlsbCgwKSkuc2xpY2UoMCwgbSAqIG4pXG59KTtcblxuLyoqXG4gKiBHZXQgYW4gaWRlbnRpdHkgbWF0cml4IG9mIHNpemUgblxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybiB7bWF0fSBBbiBpZGVudGl0eSBtYXRyaXhcbiAqL1xubWF0LmlkZW50aXR5ID0gbiA9PiBtYXQobiwgbiwgQXJyYXkobiAqIG4pLmZpbGwoMCkubWFwKCh2LCBpKSA9PiArKE1hdGguZmxvb3IoaSAvIG4pID09PSBpICUgbikpKTtcblxuLyoqXG4gKiBHZXQgYW4gZW50cnkgZnJvbSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgdmFsdWUgYXQgcG9zaXRpb24gKGksIGopIGluIG1hdHJpeCBhXG4gKi9cbm1hdC5nZXQgPSAoYSwgaSwgaikgPT4gYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXTtcblxuLyoqXG4gKiBTZXQgYW4gZW50cnkgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB2IFRoZSB2YWx1ZSB0byBzZXQgaW4gbWF0cml4IGFcbiAqL1xubWF0LnNldCA9IChhLCBpLCBqLCB2KSA9PiB7IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl0gPSB2OyB9O1xuXG4vKipcbiAqIEdldCBhIHJvdyBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IG0gVGhlIHJvdyBvZmZzZXRcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFJvdyBtIGZyb20gbWF0cml4IGFcbiAqL1xubWF0LnJvdyA9IChhLCBtKSA9PiB7XG4gIGNvbnN0IHMgPSAobSAtIDEpICogYS5uO1xuICByZXR1cm4gYS5lbnRyaWVzLnNsaWNlKHMsIHMgKyBhLm4pO1xufTtcblxuLyoqXG4gKiBHZXQgYSBjb2x1bW4gZnJvbSBhIG1hdHJpeCBhcyBhbiBhcnJheVxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBDb2x1bW4gbiBmcm9tIG1hdHJpeCBhXG4gKi9cbm1hdC5jb2wgPSAoYSwgbikgPT4gdGltZXMoaSA9PiBtYXQuZ2V0KGEsIChpICsgMSksIG4pLCBhLm0pO1xuXG4vKipcbiAqIEFkZCBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR9IGEgKyBiXG4gKi9cbm1hdC5hZGQgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiArIGIuZW50cmllc1tpXSk7XG5cbi8qKlxuICogU3VidHJhY3QgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fSBhIC0gYlxuICovXG5tYXQuc3ViID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5tYXAoYSwgKHYsIGkpID0+IHYgLSBiLmVudHJpZXNbaV0pO1xuXG4vKipcbiAqIE11bHRpcGx5IG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBhYiBvciBmYWxzZSBpZiB0aGUgbWF0cmljZXMgY2Fubm90IGJlIG11bHRpcGxpZWRcbiAqL1xubWF0Lm11bCA9IChhLCBiKSA9PiB7XG4gIGlmIChhLm4gIT09IGIubSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgcmVzdWx0ID0gbWF0KGEubSwgYi5uKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBiLm47IGorKykge1xuICAgICAgbWF0LnNldChyZXN1bHQsIGksIGosIGRvdChtYXQucm93KGEsIGkpLCBtYXQuY29sKGIsIGopKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFNjYWxlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcbiAqIEByZXR1cm4ge21hdH0gYSAqIGJcbiAqL1xubWF0LnNjYWxlID0gKGEsIGIpID0+IG1hdC5tYXAoYSwgdiA9PiB2ICogYik7XG5cbi8qKlxuICogVHJhbnNwb3NlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIHRyYW5zcG9zZVxuICogQHJldHVybiB7bWF0fSBBIHRyYW5zcG9zZWQgbWF0cml4XG4gKi9cbm1hdC50cmFucyA9IGEgPT4gbWF0KGEubiwgYS5tLCB0aW1lcyhpID0+IG1hdC5jb2woYSwgKGkgKyAxKSksIGEubikuZmxhdCgpKTtcblxuLyoqXG4gKiBHZXQgdGhlIG1pbm9yIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gVGhlIChpLCBqKSBtaW5vciBvZiBtYXRyaXggYSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0Lm1pbm9yID0gKGEsIGksIGopID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBlbnRyaWVzID0gW107XG4gIGZvciAobGV0IGlpID0gMTsgaWkgPD0gYS5tOyBpaSsrKSB7XG4gICAgaWYgKGlpID09PSBpKSB7IGNvbnRpbnVlOyB9XG4gICAgZm9yIChsZXQgamogPSAxOyBqaiA8PSBhLm47IGpqKyspIHtcbiAgICAgIGlmIChqaiA9PT0gaikgeyBjb250aW51ZTsgfVxuICAgICAgZW50cmllcy5wdXNoKG1hdC5nZXQoYSwgaWksIGpqKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXQoYS5tIC0gMSwgYS5uIC0gMSwgZW50cmllcyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcmV0dXJuIHtudW1iZXJ8Ym9vbGVhbn0gfGF8IG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQuZGV0ID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGEubSA9PT0gMSkge1xuICAgIHJldHVybiBhLmVudHJpZXNbMF07XG4gIH1cbiAgaWYgKGEubSA9PT0gMikge1xuICAgIHJldHVybiBhLmVudHJpZXNbMF0gKiBhLmVudHJpZXNbM10gLSBhLmVudHJpZXNbMV0gKiBhLmVudHJpZXNbMl07XG4gIH1cbiAgbGV0IHRvdGFsID0gMCwgc2lnbiA9IDE7XG4gIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XG4gICAgdG90YWwgKz0gc2lnbiAqIGEuZW50cmllc1tqIC0gMV0gKiBtYXQuZGV0KG1hdC5taW5vcihhLCAxLCBqKSk7XG4gICAgc2lnbiAqPSAtMTtcbiAgfVxuICByZXR1cm4gdG90YWw7XG59O1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBub3JtYWxpc2VcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBeYSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0Lm5vciA9IGEgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGQgPSBtYXQuZGV0KGEpO1xuICByZXR1cm4gbWF0Lm1hcChhLCBpID0+IGkgKiBkKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCBmcm9tIHdoaWNoIHRvIGdldCB0aGUgYWRqdWdhdGVcbiAqIEByZXR1cm4ge21hdH0gVGhlIGFkanVnYXRlIG9mIGFcbiAqL1xubWF0LmFkaiA9IGEgPT4ge1xuICBjb25zdCBtaW5vcnMgPSBtYXQoYS5tLCBhLm4pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XG4gICAgICBtYXQuc2V0KG1pbm9ycywgaSwgaiwgbWF0LmRldChtYXQubWlub3IoYSwgaSwgaikpKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY29mYWN0b3JzID0gbWF0Lm1hcChtaW5vcnMsICh2LCBpKSA9PiB2ICogKGkgJSAyID8gLTEgOiAxKSk7XG4gIHJldHVybiBtYXQudHJhbnMoY29mYWN0b3JzKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBpbnZlcnNlIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGludmVydFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IGFeLTEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBoYXMgbm8gaW52ZXJzZVxuICovXG5tYXQuaW52ID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XG4gIGlmIChkID09PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuICByZXR1cm4gbWF0LnNjYWxlKG1hdC5hZGooYSksIDEgLyBkKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIG1hdHJpY2VzIGFyZSBlcXVhbFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1hdHJpY2VzIGEgYW5kIGIgYXJlIGlkZW50aWNhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbm1hdC5lcSA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQuc3RyKGEpID09PSBtYXQuc3RyKGIpO1xuXG4vKipcbiAqIENvcHkgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29weVxuICogQHJldHVybiB7bWF0fSBBIGNvcHkgb2YgbWF0cml4IGFcbiAqL1xubWF0LmNweSA9IGEgPT4gbWF0KGEubSwgYS5uLCBbLi4uYS5lbnRyaWVzXSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXhcbiAqIEBjYWxsYmFjayBtYXRyaXhNYXBDYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBlbnRyeSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBlbnRyeSBpbmRleFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBhcnJheSBvZiBtYXRyaXggZW50cmllc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGVudHJ5XG4gKi9cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeCBhbmQgYnVpbGQgYSBuZXcgbWF0cml4IGZyb20gdGhlIHJlc3VsdHNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdHJpeE1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybiB7bWF0fSBNYXRyaXggYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbm1hdC5tYXAgPSAoYSwgZikgPT4gbWF0KGEubSwgYS5uLCBhLmVudHJpZXMubWFwKGYpKTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgbWF0cml4IGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29udmVydFxuICogQHBhcmFtIHtzdHJpbmd9IFttcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3IgY29sdW1uc1xuICogQHBhcmFtIHtzdHJpbmd9IFtucz0nXFxuJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIHJvd3NcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5tYXQuc3RyID0gKGEsIG1zID0gJywgJywgbnMgPSAnXFxuJykgPT4gY2h1bmsoYS5lbnRyaWVzLCBhLm4pLm1hcChyID0+IHIuam9pbihtcykpLmpvaW4obnMpO1xuXG5pZiAodHJ1ZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHsgdmVjLCBtYXQgfTtcbn1cblxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbi8vIFRoaXMgZW50cnkgbmVlZCB0byBiZSB3cmFwcGVkIGluIGFuIElJRkUgYmVjYXVzZSBpdCBuZWVkIHRvIGJlIGluIHN0cmljdCBtb2RlLlxuKCgpID0+IHtcblwidXNlIHN0cmljdFwiO1xudmFyIGV4cG9ydHMgPSBfX3dlYnBhY2tfZXhwb3J0c19fO1xuLyohKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vaW5kZXgudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKi9cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCAoeyB2YWx1ZTogdHJ1ZSB9KSk7XG5jb25zdCB2ZWNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYXNlbWVudHVuaXZlcnNlL3ZlYyAqLyBcIi4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanNcIik7XG5mdW5jdGlvbiBjbGFtcChhLCBtaW4gPSAwLCBtYXggPSAxKSB7XG4gICAgcmV0dXJuIGEgPCBtaW4gPyBtaW4gOiAoYSA+IG1heCA/IG1heCA6IGEpO1xufVxuY2xhc3MgQ2FtZXJhIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnNpemUgPSAoMCwgdmVjXzEudmVjKSgpO1xuICAgICAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gKDAsIHZlY18xLnZlYykoKTtcbiAgICAgICAgdGhpcy50YXJnZXRQb3NpdGlvbiA9ICgwLCB2ZWNfMS52ZWMpKCk7XG4gICAgICAgIHRoaXMuYWN0dWFsU2NhbGUgPSAxO1xuICAgICAgICB0aGlzLnRhcmdldFNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLnRhcmdldFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIENhbWVyYS5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30pO1xuICAgIH1cbiAgICBnZXQgcG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldFBvc2l0aW9uO1xuICAgIH1cbiAgICBzZXQgcG9zaXRpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy50YXJnZXRQb3NpdGlvbiA9IHZhbHVlO1xuICAgIH1cbiAgICBzZXQgcG9zaXRpb25JbW1lZGlhdGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IHZhbHVlO1xuICAgICAgICB0aGlzLnRhcmdldFBvc2l0aW9uID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBzY2FsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0U2NhbGU7XG4gICAgfVxuICAgIHNldCBzY2FsZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnRhcmdldFNjYWxlID0gY2xhbXAodmFsdWUsIHRoaXMub3B0aW9ucy5taW5TY2FsZSwgdGhpcy5vcHRpb25zLm1heFNjYWxlKTtcbiAgICB9XG4gICAgc2V0IHNjYWxlSW1tZWRpYXRlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWN0dWFsU2NhbGUgPSBjbGFtcCh2YWx1ZSwgdGhpcy5vcHRpb25zLm1pblNjYWxlLCB0aGlzLm9wdGlvbnMubWF4U2NhbGUpO1xuICAgICAgICB0aGlzLnRhcmdldFNjYWxlID0gdGhpcy5hY3R1YWxTY2FsZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHNjcmVlbiBib3VuZHMgYmFzZWQgb24gdGhlIGN1cnJlbnQgY2FtZXJhIHBvc2l0aW9uIGFuZCBzY2FsZVxuICAgICAqL1xuICAgIGdldCBib3VuZHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IHRoaXMuYWN0dWFsUG9zaXRpb24ueSAtICh0aGlzLnNpemUueSAvIDIpIC8gdGhpcy5hY3R1YWxTY2FsZSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5hY3R1YWxQb3NpdGlvbi55ICsgKHRoaXMuc2l6ZS55IC8gMikgLyB0aGlzLmFjdHVhbFNjYWxlLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5hY3R1YWxQb3NpdGlvbi54IC0gKHRoaXMuc2l6ZS54IC8gMikgLyB0aGlzLmFjdHVhbFNjYWxlLFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMuYWN0dWFsUG9zaXRpb24ueCArICh0aGlzLnNpemUueCAvIDIpIC8gdGhpcy5hY3R1YWxTY2FsZVxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgc2NyZWVuIHBvc2l0aW9uIHRvIGEgd29ybGQgcG9zaXRpb25cbiAgICAgKi9cbiAgICBwb3NpdGlvblRvV29ybGQocG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgYm91bmRzID0gdGhpcy5ib3VuZHM7XG4gICAgICAgIHJldHVybiB2ZWNfMS52ZWMuYWRkKHsgeDogYm91bmRzLmxlZnQsIHk6IGJvdW5kcy50b3AgfSwgdmVjXzEudmVjLm11bChwb3NpdGlvbiwgMSAvIHRoaXMuc2NhbGUpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNvbnRleHQgdHJhbnNmb3JtcyB0byBtYXRjaCBjYW1lcmEgcG9zaXRpb24gYW5kIHNjYWxlXG4gICAgICovXG4gICAgZHJhdyhjb250ZXh0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9ICgwLCB2ZWNfMS52ZWMpKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjb25zdCBkID0gdmVjXzEudmVjLnN1Yih0aGlzLmFjdHVhbFBvc2l0aW9uLCB0aGlzLnRhcmdldFBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IHZlY18xLnZlYy5hZGQodGhpcy5wb3NpdGlvbiwgdmVjXzEudmVjLm11bChkLCB0aGlzLm9wdGlvbnMubW92ZUVhc2VBbW91bnQpKTtcbiAgICAgICAgY29uc3QgcyA9IGNsYW1wKHRoaXMudGFyZ2V0U2NhbGUsIHRoaXMub3B0aW9ucy5taW5TY2FsZSwgdGhpcy5vcHRpb25zLm1heFNjYWxlKTtcbiAgICAgICAgdGhpcy5hY3R1YWxTY2FsZSA9IHMgKyAodGhpcy5hY3R1YWxTY2FsZSAtIHMpICogdGhpcy5vcHRpb25zLnNjYWxlRWFzZUFtb3VudDtcbiAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIGNvbnRleHQudHJhbnNsYXRlKCh0aGlzLnNpemUueCAvIDIpIC0gdGhpcy5hY3R1YWxQb3NpdGlvbi54ICogdGhpcy5hY3R1YWxTY2FsZSwgKHRoaXMuc2l6ZS55IC8gMikgLSB0aGlzLmFjdHVhbFBvc2l0aW9uLnkgKiB0aGlzLmFjdHVhbFNjYWxlKTtcbiAgICAgICAgY29udGV4dC5zY2FsZSh0aGlzLmFjdHVhbFNjYWxlLCB0aGlzLmFjdHVhbFNjYWxlKTtcbiAgICB9XG59XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IENhbWVyYTtcbkNhbWVyYS5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBhbGxvd1NjYWxlOiB0cnVlLFxuICAgIG1pblNjYWxlOiAwLjUsXG4gICAgbWF4U2NhbGU6IDQsXG4gICAgbW92ZUVhc2VBbW91bnQ6IDAuMSxcbiAgICBzY2FsZUVhc2VBbW91bnQ6IDAuMSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5cGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMQ3REUVVFMFF6dEJRWGRETlVNc1UwRkJVeXhMUVVGTExFTkJRVU1zUTBGQlV5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhIUVVGSExFTkJRVU03U1VGRGVFTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU0zUXl4RFFVRkRPMEZCUlVRc1RVRkJjVUlzVFVGQlRUdEpRWEZDZWtJc1dVRkJiVUlzVVVGQllTeEZRVUZGTEU5QlFXZERPMUZCVmpGRUxGTkJRVWtzUjBGQlVTeEpRVUZCTEZOQlFVY3NSMEZCUlN4RFFVRkRPMUZCUld4Q0xHMUNRVUZqTEVkQlFWRXNTVUZCUVN4VFFVRkhMRWRCUVVVc1EwRkJRenRSUVVVMVFpeHRRa0ZCWXl4SFFVRlJMRWxCUVVFc1UwRkJSeXhIUVVGRkxFTkJRVU03VVVGRk5VSXNaMEpCUVZjc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGRmVFSXNaMEpCUVZjc1IwRkJWeXhEUVVGRExFTkJRVU03VVVGSE9VSXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGREwwSXNTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhSUVVGUkxFTkJRVU03VVVGREwwSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVU14UWl4RlFVRkZMRVZCUTBZc1RVRkJUU3hEUVVGRExHTkJRV01zUlVGRGNrSXNUMEZCVHl4aFFVRlFMRTlCUVU4c1kwRkJVQ3hQUVVGUExFZEJRVWtzUlVGQlJTeERRVU5rTEVOQlFVTTdTVUZEU2l4RFFVRkRPMGxCUlVRc1NVRkJWeXhSUVVGUk8xRkJRMnBDTEU5QlFVOHNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJRenRKUVVNM1FpeERRVUZETzBsQlJVUXNTVUZCVnl4UlFVRlJMRU5CUVVNc1MwRkJWVHRSUVVNMVFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVNNVFpeERRVUZETzBsQlJVUXNTVUZCVnl4cFFrRkJhVUlzUTBGQlF5eExRVUZWTzFGQlEzSkRMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzUzBGQlN5eERRVUZETzFGQlF6VkNMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzUzBGQlN5eERRVUZETzBsQlF6bENMRU5CUVVNN1NVRkZSQ3hKUVVGWExFdEJRVXM3VVVGRFpDeFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1NVRkRNVUlzUTBGQlF6dEpRVVZFTEVsQlFWY3NTMEZCU3l4RFFVRkRMRXRCUVdFN1VVRkROVUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdTVUZEYUVZc1EwRkJRenRKUVVWRUxFbEJRVmNzWTBGQll5eERRVUZETEV0QlFXRTdVVUZEY2tNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRE9VVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzBsQlEzUkRMRU5CUVVNN1NVRkZSRHM3VDBGRlJ6dEpRVU5JTEVsQlFWY3NUVUZCVFR0UlFVTm1MRTlCUVU4N1dVRkRUQ3hIUVVGSExFVkJRVVVzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ6dFpRVU5xUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1YwRkJWenRaUVVOd1JTeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnp0WlFVTnNSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ6dFRRVU53UlN4RFFVRkRPMGxCUTBvc1EwRkJRenRKUVVWRU96dFBRVVZITzBsQlEwa3NaVUZCWlN4RFFVRkRMRkZCUVdFN1VVRkRiRU1zVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVVelFpeFBRVUZQTEZOQlFVY3NRMEZCUXl4SFFVRkhMRU5CUTFvc1JVRkJSU3hEUVVGRExFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEZRVU5xUXl4VFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVOc1F5eERRVUZETzBsQlEwb3NRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzU1VGQlNTeERRVUZETEU5QlFXbERMRVZCUVVVc1MwRkJZU3hGUVVGRkxFMUJRV003VVVGRE1VVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGQkxGTkJRVWNzUlVGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkZMMElzVFVGQlRTeERRVUZETEVkQlFVY3NVMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVUZGTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRSUVVNMVJDeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRk5CUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4VFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRmRFWXNUVUZCVFN4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOb1JpeEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlFVTTdVVUZGTjBVc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTNaRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlEyWXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVTTFSQ3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRemRFTEVOQlFVTTdVVUZEUml4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wbEJRM0JFTEVOQlFVTTdPMEZCYmtkSUxIbENRVzlIUXp0QlFXNUhlVUlzY1VKQlFXTXNSMEZCYTBJN1NVRkRkRVFzVlVGQlZTeEZRVUZGTEVsQlFVazdTVUZEYUVJc1VVRkJVU3hGUVVGRkxFZEJRVWM3U1VGRFlpeFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVTllMR05CUVdNc1JVRkJSU3hIUVVGSE8wbEJRMjVDTEdWQlFXVXNSVUZCUlN4SFFVRkhPME5CUTNKQ0xFTkJRVU1pZlE9PVxufSkoKTtcblxuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX2V4cG9ydHNfXztcbi8qKioqKiovIH0pKClcbjtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3T3pzN096czdPenRCUTFaQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WlFVRlpMRk5CUVZNN1FVRkRja0k3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNXVUZCV1N4UlFVRlJPMEZCUTNCQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1VVRkJVVHRCUVVOdVFpeFpRVUZaTEZGQlFWRTdRVUZEY0VJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzV1VGQldTeFJRVUZSTzBGQlEzQkNPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGbEJRVmtzVVVGQlVUdEJRVU53UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WlFVRlpMRkZCUVZFN1FVRkRjRUk3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WlFVRlpPMEZCUTFvN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzV1VGQldTeFJRVUZSTzBGQlEzQkNPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhaUVVGWkxGRkJRVkU3UVVGRGNFSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmxCUVZrc1VVRkJVVHRCUVVOd1FqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGbEJRVmtzVVVGQlVUdEJRVU53UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZsQlFWa3NVVUZCVVR0QlFVTndRanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRkZCUVZFN1FVRkRia0lzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmRCUVZjc1VVRkJVVHRCUVVOdVFpeFpRVUZaTEZGQlFWRTdRVUZEY0VJN1FVRkRRVHRCUVVOQk8wRkJRMEVzZDBKQlFYZENMRWxCUVVrN1FVRkROVUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVVVGQlVUdEJRVU51UWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzV1VGQldTeFJRVUZSTzBGQlEzQkNPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NaVUZCWlR0QlFVTXhRaXhaUVVGWkxGRkJRVkU3UVVGRGNFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVVVGQlVUdEJRVU51UWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmxCUVZrc1VVRkJVVHRCUVVOd1FqczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhsUVVGbE8wRkJRekZDTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExIVkNRVUYxUWp0QlFVTnNReXhaUVVGWkxGRkJRVkU3UVVGRGNFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMR1ZCUVdVN1FVRkRNVUlzVjBGQlZ5eGxRVUZsTzBGQlF6RkNMRmxCUVZrc1VVRkJVVHRCUVVOd1FqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExGRkJRVkU3UVVGRGJrSXNXVUZCV1N4UlFVRlJPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CTEd0Q1FVRnJRaXhSUVVGUk8wRkJRekZDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZsQlFWa3NVVUZCVVR0QlFVTndRanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRkZCUVZFN1FVRkRia0lzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmxCUVZrc1VVRkJVVHRCUVVOd1FqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVVVGQlVUdEJRVU51UWl4WlFVRlpMRWRCUVVjN1FVRkRaanM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4bFFVRmxPMEZCUXpGQ0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WlFVRlpPMEZCUTFvN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGbEJRVmtzWlVGQlpUdEJRVU16UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEZWQlFWVTdRVUZEY2tJc1YwRkJWeXhWUVVGVk8wRkJRM0pDTEZsQlFWazdRVUZEV2p0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEZWQlFWVTdRVUZEY2tJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZsQlFWa3NSMEZCUnp0QlFVTm1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NWVUZCVlR0QlFVTnlRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNXVUZCV1N4cFFrRkJhVUk3UVVGRE4wSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFZRVUZWTzBGQlEzSkNMRmxCUVZrc1ZVRkJWVHRCUVVOMFFqdEJRVU5CT3p0QlFVVkJMRWxCUVVrc1NVRkJOa0k3UVVGRGFrTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN1FVTm9VMEVzVVVGQlVTeHZRa0ZCYjBJc1JVRkJSU3h0UWtGQlR5eERRVUZETEdkR1FVRjVRanM3UVVGRkwwUTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEdGQlFXRXNVVUZCVVR0QlFVTnlRaXhqUVVGakxGRkJRVkU3UVVGRGRFSXNZMEZCWXl4UlFVRlJPMEZCUTNSQ096dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRmxCUVZrN1FVRkRka0lzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmxCUVZrc1MwRkJTenRCUVVOcVFqdEJRVU5CTEhWQ1FVRjFRanRCUVVOMlFpeDFRa0ZCZFVJN1FVRkRka0lzZFVKQlFYVkNPMEZCUTNaQ0xIVkNRVUYxUWp0QlFVTjJRanRCUVVOQk8wRkJRMEVzU1VGQlNTeGhRVUZoTzBGQlEycENMRTFCUVUwc01rSkJRVEpDTzBGQlEycERMRkZCUVZFc1lVRkJZU3hKUVVGSkxGbEJRVms3UVVGRGNrTTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eExRVUZMTzBGQlEyaENMRmxCUVZrc1pVRkJaVHRCUVVNelFqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3haUVVGWkxFdEJRVXM3UVVGRGFrSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzV1VGQldTeExRVUZMTzBGQlEycENPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4TFFVRkxPMEZCUTJwQ08wRkJRMEVzZFVKQlFYVkNMRFJDUVVFMFFqczdRVUZGYmtRN1FVRkRRVHRCUVVOQkxGZEJRVmNzUzBGQlN6dEJRVU5vUWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzV1VGQldTeExRVUZMTzBGQlEycENPMEZCUTBFc2RVSkJRWFZDTEhkQ1FVRjNRanM3UVVGRkwwTTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFhRVUZYTEV0QlFVczdRVUZEYUVJc1dVRkJXU3hMUVVGTE8wRkJRMnBDTzBGQlEwRXNkVUpCUVhWQ0xEUkNRVUUwUWpzN1FVRkZia1E3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhaUVVGWkxGRkJRVkU3UVVGRGNFSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eExRVUZMTzBGQlEyaENMRmxCUVZrc1VVRkJVVHRCUVVOd1FqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4TFFVRkxPMEZCUTJwQ08wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRnBRaXcyUWtGQk5rSTdRVUZET1VNN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4UlFVRlJPMEZCUTNCQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1dVRkJXU3hMUVVGTE8wRkJRMnBDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWenRCUVVOWU96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRXRCUVVzN1FVRkRhRUlzVjBGQlZ5eExRVUZMTzBGQlEyaENMRmxCUVZrc1UwRkJVenRCUVVOeVFqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4UlFVRlJPMEZCUTNCQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFpRVUZaTEV0QlFVczdRVUZEYWtJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRkZCUVZFN1FVRkRia0lzVjBGQlZ5eFhRVUZYTzBGQlEzUkNMRmxCUVZrc1VVRkJVVHRCUVVOd1FqczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhMUVVGTE8wRkJRMmhDTEZkQlFWY3NiVUpCUVcxQ08wRkJRemxDTEZsQlFWa3NTMEZCU3p0QlFVTnFRanRCUVVOQkxIVkNRVUYxUWl4blEwRkJaME03TzBGQlJYWkVPMEZCUTBFN1FVRkRRU3hYUVVGWExFdEJRVXM3UVVGRGFFSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGbEJRVmtzVVVGQlVUdEJRVU53UWp0QlFVTkJMRGhDUVVFNFFpeEpRVUZKTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWxCUVVrN08wRkJSVFZETzBGQlEwRTdRVUZEUVN4aFFVRmhMRkZCUVZFN1FVRkRja0lzWTBGQll5eFJRVUZSTzBGQlEzUkNMR05CUVdNc1VVRkJVVHRCUVVOMFFpeGpRVUZqTEdWQlFXVTdRVUZETjBJN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4bFFVRmxPMEZCUXpGQ0xGbEJRVmtzUzBGQlN6dEJRVU5xUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03TzBGQlJVUTdRVUZEUVR0QlFVTkJMRmRCUVZjc1VVRkJVVHRCUVVOdVFpeFpRVUZaTEV0QlFVczdRVUZEYWtJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4TFFVRkxPMEZCUTJoQ0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzV1VGQldTeFJRVUZSTzBGQlEzQkNPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGZEJRVmNzVVVGQlVUdEJRVU51UWp0QlFVTkJMRFJDUVVFMFFqczdRVUZGTlVJN1FVRkRRVHRCUVVOQkxGZEJRVmNzUzBGQlN6dEJRVU5vUWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzV1VGQldTeGxRVUZsTzBGQlF6TkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1dVRkJXU3hsUVVGbE8wRkJRek5DTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxGZEJRVmNzUzBGQlN6dEJRVU5vUWl4WFFVRlhMRXRCUVVzN1FVRkRhRUlzV1VGQldTeExRVUZMTzBGQlEycENPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4TFFVRkxPMEZCUTJwQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFhRVUZYTEV0QlFVczdRVUZEYUVJc1dVRkJXU3hoUVVGaE8wRkJRM3BDTzBGQlEwRTdRVUZEUVN4eFFrRkJjVUk3UVVGRGNrSTdRVUZEUVN4clFrRkJhMElzVlVGQlZUdEJRVU0xUWl4dlFrRkJiMElzVlVGQlZUdEJRVU01UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRXRCUVVzN1FVRkRhRUlzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmxCUVZrc1MwRkJTenRCUVVOcVFqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4TFFVRkxPMEZCUTJwQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZsQlFWa3NZVUZCWVR0QlFVTjZRanRCUVVOQk8wRkJRMEVzY1VKQlFYRkNPMEZCUTNKQ08wRkJRMEVzYlVKQlFXMUNMRmRCUVZjN1FVRkRPVUlzYjBKQlFXOUNPMEZCUTNCQ0xIRkNRVUZ4UWl4WFFVRlhPMEZCUTJoRExITkNRVUZ6UWp0QlFVTjBRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4blFrRkJaMEk3UVVGRE5VSTdRVUZEUVR0QlFVTkJMSEZDUVVGeFFqdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEd0Q1FVRnJRaXhWUVVGVk8wRkJRelZDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhaUVVGWkxHRkJRV0U3UVVGRGVrSTdRVUZEUVR0QlFVTkJMSEZDUVVGeFFqdEJRVU55UWp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhaUVVGWkxFdEJRVXM3UVVGRGFrSTdRVUZEUVR0QlFVTkJPMEZCUTBFc2EwSkJRV3RDTEZWQlFWVTdRVUZETlVJc2IwSkJRVzlDTEZWQlFWVTdRVUZET1VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4aFFVRmhPMEZCUTNwQ08wRkJRMEU3UVVGRFFTeHhRa0ZCY1VJN1FVRkRja0k3UVVGRFFTeHBRa0ZCYVVJN1FVRkRha0k3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhMUVVGTE8wRkJRMmhDTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhaUVVGWkxGTkJRVk03UVVGRGNrSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eExRVUZMTzBGQlEyaENMRmxCUVZrc1MwRkJTenRCUVVOcVFqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVVVGQlVUdEJRVU51UWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzVjBGQlZ5eGxRVUZsTzBGQlF6RkNMRmxCUVZrc1VVRkJVVHRCUVVOd1FqczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhMUVVGTE8wRkJRMmhDTEZkQlFWY3NiVUpCUVcxQ08wRkJRemxDTEZsQlFWa3NTMEZCU3p0QlFVTnFRanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRXRCUVVzN1FVRkRhRUlzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmRCUVZjc1VVRkJVVHRCUVVOdVFpeFpRVUZaTEZGQlFWRTdRVUZEY0VJN1FVRkRRVHM3UVVGRlFTeEpRVUZKTEVsQlFUWkNPMEZCUTJwRExIRkNRVUZ4UWp0QlFVTnlRanM3T3pzN096dFZRMmhhUVR0VlFVTkJPenRWUVVWQk8xVkJRMEU3VlVGRFFUdFZRVU5CTzFWQlEwRTdWVUZEUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHRWUVVOQk8xVkJRMEU3VlVGRFFUdFZRVU5CT3p0VlFVVkJPMVZCUTBFN08xVkJSVUU3VlVGRFFUdFZRVU5CT3pzN096czdPenM3T3p0QlEzUkNZVHRCUVVOaUxEaERRVUUyUXl4RlFVRkZMR0ZCUVdFc1JVRkJRenRCUVVNM1JDeGpRVUZqTEcxQ1FVRlBMRU5CUVVNc01FVkJRWFZDTzBGQlF6ZERPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIVkRRVUYxUXl3NFJVRkJPRVU3UVVGRGNrZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN3clFrRkJLMElzSzBKQlFTdENPMEZCUXpsRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR3RDUVVGbE8wRkJRMlk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3d5UTBGQk1rTXNkWFZKSWl3aWMyOTFjbU5sY3lJNld5SjNaV0p3WVdOck9pOHZRR0poYzJWdFpXNTBkVzVwZG1WeWMyVXZZMkZ0WlhKaEwzZGxZbkJoWTJzdmRXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmlJc0luZGxZbkJoWTJzNkx5OUFZbUZ6WlcxbGJuUjFibWwyWlhKelpTOWpZVzFsY21FdkxpOXViMlJsWDIxdlpIVnNaWE12UUdKaGMyVnRaVzUwZFc1cGRtVnljMlV2ZFhScGJITXZkWFJwYkhNdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdKaGMyVnRaVzUwZFc1cGRtVnljMlV2WTJGdFpYSmhMeTR2Ym05a1pWOXRiMlIxYkdWekwwQmlZWE5sYldWdWRIVnVhWFpsY25ObEwzWmxZeTkyWldNdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdKaGMyVnRaVzUwZFc1cGRtVnljMlV2WTJGdFpYSmhMM2RsWW5CaFkyc3ZZbTl2ZEhOMGNtRndJaXdpZDJWaWNHRmphem92TDBCaVlYTmxiV1Z1ZEhWdWFYWmxjbk5sTDJOaGJXVnlZUzh1TDJsdVpHVjRMblJ6SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWkdWbWFXNWxJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JR1JsWm1sdVpTNWhiV1FwWEc1Y2RGeDBaR1ZtYVc1bEtGdGRMQ0JtWVdOMGIzSjVLVHRjYmx4MFpXeHpaU0I3WEc1Y2RGeDBkbUZ5SUdFZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEZ4MFptOXlLSFpoY2lCcElHbHVJR0VwSUNoMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ1B5QmxlSEJ2Y25SeklEb2djbTl2ZENsYmFWMGdQU0JoVzJsZE8xeHVYSFI5WEc1OUtTaHpaV3htTENBb0tTQTlQaUI3WEc1eVpYUjFjbTRnSWl3aUx5b3FYRzRnS2lCQWIzWmxjblpwWlhjZ1FTQnNhV0p5WVhKNUlHOW1JSFZ6WldaMWJDQm1kVzVqZEdsdmJuTmNiaUFxSUVCaGRYUm9iM0lnUjI5eVpHOXVJRXhoY25KcFoyRnVYRzRnS2k5Y2JseHVMeW9xWEc0Z0tpQkRhR1ZqYXlCcFppQjBkMjhnYm5WdFltVnljeUJoY21VZ1lYQndjbTk0YVcxaGRHVnNlU0JsY1hWaGJGeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJR0VnVG5WdFltVnlJR0ZjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCaUlFNTFiV0psY2lCaVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdXM0E5VG5WdFltVnlMa1ZRVTBsTVQwNWRJRlJvWlNCd2NtVmphWE5wYjI0Z2RtRnNkV1ZjYmlBcUlFQnlaWFIxY200Z2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2JuVnRZbVZ5Y3lCaElHRnVaQ0JpSUdGeVpTQmhjSEJ5YjNocGJXRjBaV3g1SUdWeGRXRnNYRzRnS2k5Y2JtTnZibk4wSUdac2IyRjBSWEYxWVd4eklEMGdLR0VzSUdJc0lIQWdQU0JPZFcxaVpYSXVSVkJUU1V4UFRpa2dQVDRnVFdGMGFDNWhZbk1vWVNBdElHSXBJRHdnY0R0Y2JseHVMeW9xWEc0Z0tpQkRiR0Z0Y0NCaElHNTFiV0psY2lCaVpYUjNaV1Z1SUcxcGJpQmhibVFnYldGNFhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdZU0JVYUdVZ2JuVnRZbVZ5SUhSdklHTnNZVzF3WEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ1cyMXBiajB3WFNCVWFHVWdiV2x1YVcxMWJTQjJZV3gxWlZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlGdHRZWGc5TVYwZ1ZHaGxJRzFoZUdsdGRXMGdkbUZzZFdWY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMGdRU0JqYkdGdGNHVmtJRzUxYldKbGNseHVJQ292WEc1amIyNXpkQ0JqYkdGdGNDQTlJQ2hoTENCdGFXNGdQU0F3TENCdFlYZ2dQU0F4S1NBOVBpQmhJRHdnYldsdUlEOGdiV2x1SURvZ0tHRWdQaUJ0WVhnZ1B5QnRZWGdnT2lCaEtUdGNibHh1THlvcVhHNGdLaUJIWlhRZ2RHaGxJR1p5WVdOMGFXOXVZV3dnY0dGeWRDQnZaaUJoSUc1MWJXSmxjbHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdFZ1ZHaGxJRzUxYldKbGNpQm1jbTl0SUhkb2FXTm9JSFJ2SUdkbGRDQjBhR1VnWm5KaFkzUnBiMjVoYkNCd1lYSjBYRzRnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5SUZSb1pTQm1jbUZqZEdsdmJtRnNJSEJoY25RZ2IyWWdkR2hsSUc1MWJXSmxjbHh1SUNvdlhHNWpiMjV6ZENCbWNtRmpJRDBnWVNBOVBpQmhJRDQ5SURBZ1B5QmhJQzBnVFdGMGFDNW1iRzl2Y2loaEtTQTZJR0VnTFNCTllYUm9MbU5sYVd3b1lTazdYRzVjYmk4cUtseHVJQ29nUkc4Z1lTQnNhVzVsWVhJZ2FXNTBaWEp3YjJ4aGRHbHZiaUJpWlhSM1pXVnVJR0VnWVc1a0lHSmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JoSUZSb1pTQnRhVzVwYlhWdElHNTFiV0psY2x4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHSWdWR2hsSUcxaGVHbHRkVzBnYm5WdFltVnlYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYVNCVWFHVWdhVzUwWlhKd2IyeGhkR2x2YmlCMllXeDFaU3dnYzJodmRXeGtJR0psSUdsdUlIUm9aU0JwYm5SbGNuWmhiQ0JiTUN3Z01WMWNiaUFxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjBnUVc0Z2FXNTBaWEp3YjJ4aGRHVmtJSFpoYkhWbElHbHVJSFJvWlNCcGJuUmxjblpoYkNCYllTd2dZbDFjYmlBcUwxeHVZMjl1YzNRZ2JHVnljQ0E5SUNoaExDQmlMQ0JwS1NBOVBpQmhJQ3NnS0dJZ0xTQmhLU0FxSUdrN1hHNWNiaThxS2x4dUlDb2dSMlYwSUhSb1pTQndiM05wZEdsdmJpQnZaaUJwSUdKbGRIZGxaVzRnWVNCaGJtUWdZbHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdFZ1ZHaGxJRzFwYm1sdGRXMGdiblZ0WW1WeVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdZaUJVYUdVZ2JXRjRhVzExYlNCdWRXMWlaWEpjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCcElGUm9aU0JwYm5SbGNuQnZiR0YwWldRZ2RtRnNkV1VnYVc0Z2RHaGxJR2x1ZEdWeWRtRnNJRnRoTENCaVhWeHVJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmU0JVYUdVZ2NHOXphWFJwYjI0Z2IyWWdhU0JpWlhSM1pXVnVJR0VnWVc1a0lHSmNiaUFxTDF4dVkyOXVjM1FnZFc1c1pYSndJRDBnS0dFc0lHSXNJR2twSUQwK0lDaHBJQzBnWVNrZ0x5QW9ZaUF0SUdFcE8xeHVYRzR2S2lwY2JpQXFJRVJ2SUdFZ1ltbHNhVzVsWVhJZ2FXNTBaWEp3YjJ4aGRHbHZibHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdNd01DQlViM0F0YkdWbWRDQjJZV3gxWlZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHTXhNQ0JVYjNBdGNtbG5hSFFnZG1Gc2RXVmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JqTURFZ1FtOTBkRzl0TFd4bFpuUWdkbUZzZFdWY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmpNVEVnUW05MGRHOXRMWEpwWjJoMElIWmhiSFZsWEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2FYZ2dTVzUwWlhKd2IyeGhkR2x2YmlCMllXeDFaU0JoYkc5dVp5QjRYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYVhrZ1NXNTBaWEp3YjJ4aGRHbHZiaUIyWVd4MVpTQmhiRzl1WnlCNVhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlJRUVnWW1sc2FXNWxZWElnYVc1MFpYSndiMnhoZEdWa0lIWmhiSFZsWEc0Z0tpOWNibU52Ym5OMElHSnNaWEp3SUQwZ0tHTXdNQ3dnWXpFd0xDQmpNREVzSUdNeE1Td2dhWGdzSUdsNUtTQTlQaUJzWlhKd0tHeGxjbkFvWXpBd0xDQmpNVEFzSUdsNEtTd2diR1Z5Y0Noak1ERXNJR014TVN3Z2FYZ3BMQ0JwZVNrN1hHNWNiaThxS2x4dUlDb2dVbVV0YldGd0lHRWdiblZ0WW1WeUlHa2dabkp2YlNCeVlXNW5aU0JoTVM0dUxtRXlJSFJ2SUdJeExpNHVZakpjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCcElGUm9aU0J1ZFcxaVpYSWdkRzhnY21VdGJXRndYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnWVRGY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmhNbHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdJeFhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdZakpjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24xY2JpQXFMMXh1WTI5dWMzUWdjbVZ0WVhBZ1BTQW9hU3dnWVRFc0lHRXlMQ0JpTVN3Z1lqSXBJRDArSUdJeElDc2dLR2tnTFNCaE1Ta2dLaUFvWWpJZ0xTQmlNU2tnTHlBb1lUSWdMU0JoTVNrN1hHNWNiaThxS2x4dUlDb2dSRzhnWVNCemJXOXZkR2dnYVc1MFpYSndiMnhoZEdsdmJpQmlaWFIzWldWdUlHRWdZVzVrSUdKY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmhJRlJvWlNCdGFXNXBiWFZ0SUc1MWJXSmxjbHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdJZ1ZHaGxJRzFoZUdsdGRXMGdiblZ0WW1WeVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdhU0JVYUdVZ2FXNTBaWEp3YjJ4aGRHbHZiaUIyWVd4MVpWeHVJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmU0JCYmlCcGJuUmxjbkJ2YkdGMFpXUWdkbUZzZFdVZ2FXNGdkR2hsSUdsdWRHVnlkbUZzSUZ0aExDQmlYVnh1SUNvdlhHNWpiMjV6ZENCemJXOXZkR2h6ZEdWd0lEMGdLR0VzSUdJc0lHa3BJRDArSUd4bGNuQW9ZU3dnWWl3Z015QXFJRTFoZEdndWNHOTNLR2tzSURJcElDMGdNaUFxSUUxaGRHZ3VjRzkzS0drc0lETXBLVHRjYmx4dUx5b3FYRzRnS2lCSFpYUWdZVzRnWVc1bmJHVWdhVzRnY21Ga2FXRnVjMXh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdSbFozSmxaWE1nVkdobElHRnVaMnhsSUdsdUlHUmxaM0psWlhOY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMGdWR2hsSUdGdVoyeGxJR2x1SUhKaFpHbGhibk5jYmlBcUwxeHVZMjl1YzNRZ2NtRmthV0Z1Y3lBOUlHUmxaM0psWlhNZ1BUNGdLRTFoZEdndVVFa2dMeUF4T0RBcElDb2daR1ZuY21WbGN6dGNibHh1THlvcVhHNGdLaUJIWlhRZ1lXNGdZVzVuYkdVZ2FXNGdaR1ZuY21WbGMxeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJSEpoWkdsaGJuTWdWR2hsSUdGdVoyeGxJR2x1SUhKaFpHbGhibk5jYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24wZ1ZHaGxJR0Z1WjJ4bElHbHVJR1JsWjNKbFpYTmNiaUFxTDF4dVkyOXVjM1FnWkdWbmNtVmxjeUE5SUhKaFpHbGhibk1nUFQ0Z0tERTRNQ0F2SUUxaGRHZ3VVRWtwSUNvZ2NtRmthV0Z1Y3p0Y2JseHVMeW9xWEc0Z0tpQkhaWFFnWVNCeVlXNWtiMjBnWm14dllYUWdhVzRnZEdobElHbHVkR1Z5ZG1Gc0lGdHRhVzRzSUcxaGVDbGNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J0YVc0Z1NXNWpiSFZ6YVhabElHMXBibHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUcxaGVDQkZlR05zZFhOcGRtVWdiV0Y0WEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOUlFRWdjbUZ1Wkc5dElHWnNiMkYwSUdsdUlIUm9aU0JwYm5SbGNuWmhiQ0JiYldsdUxDQnRZWGdwWEc0Z0tpOWNibU52Ym5OMElISmhibVJ2YlVKbGRIZGxaVzRnUFNBb2JXbHVMQ0J0WVhncElEMCtJRTFoZEdndWNtRnVaRzl0S0NrZ0tpQW9iV0Y0SUMwZ2JXbHVLU0FySUcxcGJqdGNibHh1THlvcVhHNGdLaUJIWlhRZ1lTQnlZVzVrYjIwZ2FXNTBaV2RsY2lCcGJpQjBhR1VnYVc1MFpYSjJZV3dnVzIxcGJpd2diV0Y0WFZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHMXBiaUJKYm1Oc2RYTnBkbVVnYldsdVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdiV0Y0SUVsdVkyeDFjMmwyWlNCdFlYaGNiaUFxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjBnUVNCeVlXNWtiMjBnYVc1MFpXZGxjaUJwYmlCMGFHVWdhVzUwWlhKMllXd2dXMjFwYml3Z2JXRjRYVnh1SUNvdlhHNWpiMjV6ZENCeVlXNWtiMjFKYm5SQ1pYUjNaV1Z1SUQwZ0tHMXBiaXdnYldGNEtTQTlQaUJOWVhSb0xtWnNiMjl5S0UxaGRHZ3VjbUZ1Wkc5dEtDa2dLaUFvYldGNElDMGdiV2x1SUNzZ01Ta3BJQ3NnYldsdU8xeHVYRzR2S2lwY2JpQXFJRWRsZENCaElHNXZjbTFoYkd4NUxXUnBjM1J5YVdKMWRHVmtJSEpoYm1SdmJTQnVkVzFpWlhKY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmJiWFU5TUM0MVhTQlVhR1VnYldWaGJpQjJZV3gxWlZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlGdHphV2R0WVQwd0xqVmRJRlJvWlNCemRHRnVaR0Z5WkNCa1pYWnBZWFJwYjI1Y2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmJjMkZ0Y0d4bGN6MHlYU0JVYUdVZ2JuVnRZbVZ5SUc5bUlITmhiWEJzWlhOY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMGdRU0J1YjNKdFlXeHNlUzFrYVhOMGNtbGlkWFJsWkNCeVlXNWtiMjBnYm5WdFltVnlYRzRnS2k5Y2JtTnZibk4wSUdOc2RGSmhibVJ2YlNBOUlDaHRkU0E5SURBdU5Td2djMmxuYldFZ1BTQXdMalVzSUhOaGJYQnNaWE1nUFNBeUtTQTlQaUI3WEc0Z0lHeGxkQ0IwYjNSaGJDQTlJREE3WEc0Z0lHWnZjaUFvYkdWMElHa2dQU0J6WVcxd2JHVnpPeUJwTFMwN0tTQjdYRzRnSUNBZ2RHOTBZV3dnS3owZ1RXRjBhQzV5WVc1a2IyMG9LVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdiWFVnS3lBb2RHOTBZV3dnTFNCellXMXdiR1Z6SUM4Z01pa2dMeUFvYzJGdGNHeGxjeUF2SURJcElDb2djMmxuYldFN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVkbGRDQmhJRzV2Y20xaGJHeDVMV1JwYzNSeWFXSjFkR1ZrSUhKaGJtUnZiU0JwYm5SbFoyVnlJR2x1SUhSb1pTQnBiblJsY25aaGJDQmJiV2x1TENCdFlYaGRYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYldsdUlFbHVZMngxYzJsMlpTQnRhVzVjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCdFlYZ2dTVzVqYkhWemFYWmxJRzFoZUZ4dUlDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZTQkJJRzV2Y20xaGJHeDVMV1JwYzNSeWFXSjFkR1ZrSUhKaGJtUnZiU0JwYm5SbFoyVnlYRzRnS2k5Y2JtTnZibk4wSUdOc2RGSmhibVJ2YlVsdWRDQTlJQ2h0YVc0c0lHMWhlQ2tnUFQ0Z1RXRjBhQzVtYkc5dmNpaHRhVzRnS3lCamJIUlNZVzVrYjIwb01DNDFMQ0F3TGpVc0lESXBJQ29nS0cxaGVDQXJJREVnTFNCdGFXNHBLVHRjYmx4dUx5b3FYRzRnS2lCU1pYUjFjbTRnWVNCM1pXbG5hSFJsWkNCeVlXNWtiMjBnYVc1MFpXZGxjbHh1SUNvZ1FIQmhjbUZ0SUh0QmNuSmhlVHh1ZFcxaVpYSStmU0IzSUVGdUlHRnljbUY1SUc5bUlIZGxhV2RvZEhOY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMGdRVzRnYVc1a1pYZ2dabkp2YlNCM1hHNGdLaTljYm1OdmJuTjBJSGRsYVdkb2RHVmtVbUZ1Wkc5dElEMGdkeUE5UGlCN1hHNGdJR3hsZENCMGIzUmhiQ0E5SUhjdWNtVmtkV05sS0NoaExDQnBLU0E5UGlCaElDc2dhU3dnTUNrc0lHNGdQU0F3TzF4dUlDQmpiMjV6ZENCeUlEMGdUV0YwYUM1eVlXNWtiMjBvS1NBcUlIUnZkR0ZzTzF4dUlDQjNhR2xzWlNBb2RHOTBZV3dnUGlCeUtTQjdYRzRnSUNBZ2RHOTBZV3dnTFQwZ2QxdHVLeXRkTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJ1SUMwZ01UdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1FXNGdhVzUwWlhKd2IyeGhkR2x2YmlCbWRXNWpkR2x2Ymx4dUlDb2dRR05oYkd4aVlXTnJJR2x1ZEdWeWNHOXNZWFJwYjI1RFlXeHNZbUZqYTF4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHRWdWR2hsSUcxcGJtbHRkVzBnYm5WdFltVnlYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnWWlCVWFHVWdiV0Y0YVcxMWJTQnVkVzFpWlhKY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQnBJRlJvWlNCcGJuUmxjbkJ2YkdGMGFXOXVJSFpoYkhWbExDQnphRzkxYkdRZ1ltVWdhVzRnZEdobElHbHVkR1Z5ZG1Gc0lGc3dMQ0F4WFZ4dUlDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZTQlVhR1VnYVc1MFpYSndiMnhoZEdWa0lIWmhiSFZsSUdsdUlIUm9aU0JwYm5SbGNuWmhiQ0JiWVN3Z1lsMWNiaUFxTDF4dVhHNHZLaXBjYmlBcUlGSmxkSFZ5YmlCaGJpQnBiblJsY25CdmJHRjBaV1FnZG1Gc2RXVWdabkp2YlNCaGJpQmhjbkpoZVZ4dUlDb2dRSEJoY21GdElIdEJjbkpoZVR4dWRXMWlaWEkrZlNCaElFRnVJR0Z5Y21GNUlHOW1JSFpoYkhWbGN5QnBiblJsY25CdmJHRjBaVnh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdrZ1FTQnVkVzFpWlhJZ2FXNGdkR2hsSUdsdWRHVnlkbUZzSUZzd0xDQXhYVnh1SUNvZ1FIQmhjbUZ0SUh0cGJuUmxjbkJ2YkdGMGFXOXVRMkZzYkdKaFkydDlJRnRtUFUxaGRHZ3ViR1Z5Y0YwZ1ZHaGxJR2x1ZEdWeWNHOXNZWFJwYjI0Z1puVnVZM1JwYjI0Z2RHOGdkWE5sWEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOUlFRnVJR2x1ZEdWeWNHOXNZWFJsWkNCMllXeDFaU0JwYmlCMGFHVWdhVzUwWlhKMllXd2dXMjFwYmloaEtTd2diV0Y0S0dFcFhWeHVJQ292WEc1amIyNXpkQ0JzWlhKd1FYSnlZWGtnUFNBb1lTd2dhU3dnWmlBOUlHeGxjbkFwSUQwK0lIdGNiaUFnWTI5dWMzUWdjeUE5SUdrZ0tpQW9ZUzVzWlc1bmRHZ2dMU0F4S1R0Y2JpQWdZMjl1YzNRZ2NDQTlJR05zWVcxd0tFMWhkR2d1ZEhKMWJtTW9jeWtzSURBc0lHRXViR1Z1WjNSb0lDMGdNU2s3WEc0Z0lISmxkSFZ5YmlCbUtHRmJjRjBnZkh3Z01Dd2dZVnR3SUNzZ01WMGdmSHdnTUN3Z1puSmhZeWh6S1NrN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVkbGRDQjBhR1VnWkc5MElIQnliMlIxWTNRZ2IyWWdkSGR2SUhabFkzUnZjbk5jYmlBcUlFQndZWEpoYlNCN1FYSnlZWGs4Ym5WdFltVnlQbjBnWVNCV1pXTjBiM0lnWVZ4dUlDb2dRSEJoY21GdElIdEJjbkpoZVR4dWRXMWlaWEkrZlNCaUlGWmxZM1J2Y2lCaVhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlJR0VnNG9pWklHSmNiaUFxTDF4dVkyOXVjM1FnWkc5MElEMGdLR0VzSUdJcElEMCtJR0V1Y21Wa2RXTmxLQ2h1TENCMkxDQnBLU0E5UGlCdUlDc2dkaUFxSUdKYmFWMHNJREFwTzF4dVhHNHZLaXBjYmlBcUlFZGxkQ0IwYUdVZ1ptRmpkRzl5YVdGc0lHOW1JR0VnYm5WdFltVnlYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnWVZ4dUlDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZTQmhJVnh1SUNvdlhHNWpiMjV6ZENCbVlXTjBiM0pwWVd3Z1BTQmhJRDArSUh0Y2JpQWdiR1YwSUhKbGMzVnNkQ0E5SURFN1hHNGdJR1p2Y2lBb2JHVjBJR2tnUFNBeU95QnBJRHc5SUdFN0lHa3JLeWtnZTF4dUlDQWdJSEpsYzNWc2RDQXFQU0JwTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJ5WlhOMWJIUTdYRzU5TzF4dVhHNHZLaXBjYmlBcUlFZGxkQ0IwYUdVZ2JuVnRZbVZ5SUc5bUlIQmxjbTExZEdGMGFXOXVjeUJ2WmlCeUlHVnNaVzFsYm5SeklHWnliMjBnWVNCelpYUWdiMllnYmlCbGJHVnRaVzUwYzF4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHNWNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J5WEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOUlHNVFjbHh1SUNvdlhHNWpiMjV6ZENCd1pYSnRkWFJoZEdsdmJpQTlJQ2h1TENCeUtTQTlQaUJtWVdOMGIzSnBZV3dvYmlrZ0x5Qm1ZV04wYjNKcFlXd29iaUF0SUhJcE8xeHVYRzR2S2lwY2JpQXFJRWRsZENCMGFHVWdiblZ0WW1WeUlHOW1JR052YldKcGJtRjBhVzl1Y3lCdlppQnlJR1ZzWlcxbGJuUnpJR1p5YjIwZ1lTQnpaWFFnYjJZZ2JpQmxiR1Z0Wlc1MGMxeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRzVjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCeVhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlJRzVEY2x4dUlDb3ZYRzVqYjI1emRDQmpiMjFpYVc1aGRHbHZiaUE5SUNodUxDQnlLU0E5UGlCbVlXTjBiM0pwWVd3b2Jpa2dMeUFvWm1GamRHOXlhV0ZzS0hJcElDb2dabUZqZEc5eWFXRnNLRzRnTFNCeUtTazdYRzVjYmk4cUtseHVJQ29nUVNCbWRXNWpkR2x2YmlCbWIzSWdaMlZ1WlhKaGRHbHVaeUJoY25KaGVTQjJZV3gxWlhOY2JpQXFJRUJqWVd4c1ltRmpheUIwYVcxbGMwTmhiR3hpWVdOclhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdhU0JVYUdVZ1lYSnlZWGtnYVc1a1pYaGNiaUFxSUVCeVpYUjFjbTRnZXlwOUlGUm9aU0JoY25KaGVTQjJZV3gxWlZ4dUlDb3ZYRzVjYmk4cUtseHVJQ29nVW1WMGRYSnVJR0VnYm1WM0lHRnljbUY1SUhkcGRHZ2diR1Z1WjNSb0lHNGdZbmtnWTJGc2JHbHVaeUJtZFc1amRHbHZiaUJtS0drcElHOXVJR1ZoWTJnZ1pXeGxiV1Z1ZEZ4dUlDb2dRSEJoY21GdElIdDBhVzFsYzBOaGJHeGlZV05yZlNCbVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdiaUJVYUdVZ2MybDZaU0J2WmlCMGFHVWdZWEp5WVhsY2JpQXFJRUJ5WlhSMWNtNGdlMEZ5Y21GNVBDbytmVnh1SUNvdlhHNWpiMjV6ZENCMGFXMWxjeUE5SUNobUxDQnVLU0E5UGlCQmNuSmhlU2h1S1M1bWFXeHNLREFwTG0xaGNDZ29YeXdnYVNrZ1BUNGdaaWhwS1NrN1hHNWNiaThxS2x4dUlDb2dVbVYwZFhKdUlHRnVJR0Z5Y21GNUlHTnZiblJoYVc1cGJtY2diblZ0WW1WeWN5QXdMVDRvYmlBdElERXBYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYmlCVWFHVWdjMmw2WlNCdlppQjBhR1VnWVhKeVlYbGNiaUFxSUVCeVpYUjFjbTRnZTBGeWNtRjVQRzUxYldKbGNqNTlJRUZ1SUdGeWNtRjVJRzltSUdsdWRHVm5aWEp6SURBdFBpaHVJQzBnTVNsY2JpQXFMMXh1WTI5dWMzUWdjbUZ1WjJVZ1BTQnVJRDArSUhScGJXVnpLR2tnUFQ0Z2FTd2diaWs3WEc1Y2JpOHFLbHh1SUNvZ1dtbHdJRElnWVhKeVlYbHpJSFJ2WjJWMGFHVnlMQ0JwTG1VdUlDaGJNU3dnTWl3Z00xMHNJRnRoTENCaUxDQmpYU2tnUFQ0Z1cxc3hMQ0JoWFN3Z1d6SXNJR0pkTENCYk15d2dZMTFkWEc0Z0tpQkFjR0Z5WVcwZ2UwRnljbUY1UENvK2ZTQmhYRzRnS2lCQWNHRnlZVzBnZTBGeWNtRjVQQ28rZlNCaVhHNGdLaUJBY21WMGRYSnVJSHRCY25KaGVUeEJjbkpoZVR3cVBqNTlYRzRnS2k5Y2JtTnZibk4wSUhwcGNDQTlJQ2hoTENCaUtTQTlQaUJoTG0xaGNDZ29heXdnYVNrZ1BUNGdXMnNzSUdKYmFWMWRLVHRjYmx4dUx5b3FYRzRnS2lCU1pYUjFjbTRnWVhKeVlYbGJhVjBnZDJsMGFDQndiM05wZEdsMlpTQmhibVFnYm1WbllYUnBkbVVnZDNKaGNIQnBibWRjYmlBcUlFQndZWEpoYlNCN1FYSnlZWGs4S2o1OUlHRmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JwSUZSb1pTQndiM05wZEdsMlpXeDVMMjVsWjJGMGFYWmxiSGtnZDNKaGNIQmxaQ0JoY25KaGVTQnBibVJsZUZ4dUlDb2dRSEpsZEhWeWJpQjdLbjBnUVc0Z1pXeGxiV1Z1ZENCbWNtOXRJSFJvWlNCaGNuSmhlVnh1SUNvdlhHNWpiMjV6ZENCaGRDQTlJQ2hoTENCcEtTQTlQaUJoVzJrZ1BDQXdJRDhnWVM1c1pXNW5kR2dnTFNBb1RXRjBhQzVoWW5Nb2FTQXJJREVwSUNVZ1lTNXNaVzVuZEdncElDMGdNU0E2SUdrZ0pTQmhMbXhsYm1kMGFGMDdYRzVjYmk4cUtseHVJQ29nUTJodmNDQmhiaUJoY25KaGVTQnBiblJ2SUdOb2RXNXJjeUJ2WmlCemFYcGxJRzVjYmlBcUlFQndZWEpoYlNCN1FYSnlZWGs4S2o1OUlHRmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J1SUZSb1pTQmphSFZ1YXlCemFYcGxYRzRnS2lCQWNtVjBkWEp1SUh0QmNuSmhlVHhCY25KaGVUd3FQajU5SUVGdUlHRnljbUY1SUc5bUlHRnljbUY1SUdOb2RXNXJjMXh1SUNvdlhHNWpiMjV6ZENCamFIVnVheUE5SUNoaExDQnVLU0E5UGlCMGFXMWxjeWhwSUQwK0lHRXVjMnhwWTJVb2FTQXFJRzRzSUdrZ0tpQnVJQ3NnYmlrc0lFMWhkR2d1WTJWcGJDaGhMbXhsYm1kMGFDQXZJRzRwS1R0Y2JseHVMeW9xWEc0Z0tpQlNZVzVrYjIxc2VTQnphSFZtWm14bElHRWdjMmhoYkd4dmR5QmpiM0I1SUc5bUlHRnVJR0Z5Y21GNVhHNGdLaUJBY0dGeVlXMGdlMEZ5Y21GNVBDbytmU0JoWEc0Z0tpQkFjbVYwZFhKdUlIdEJjbkpoZVR3cVBuMGdWR2hsSUhOb2RXWm1iR1ZrSUdGeWNtRjVYRzRnS2k5Y2JtTnZibk4wSUhOb2RXWm1iR1VnUFNCaElEMCtJR0V1YzJ4cFkyVW9LUzV6YjNKMEtDZ3BJRDArSUUxaGRHZ3VjbUZ1Wkc5dEtDa2dMU0F3TGpVcE8xeHVYRzVwWmlBb2RIbHdaVzltSUcxdlpIVnNaU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN1hHNGdJQ0FnWm14dllYUkZjWFZoYkhNc1hHNGdJQ0FnWTJ4aGJYQXNYRzRnSUNBZ1puSmhZeXhjYmlBZ0lDQnNaWEp3TEZ4dUlDQWdJSFZ1YkdWeWNDeGNiaUFnSUNCaWJHVnljQ3hjYmlBZ0lDQnlaVzFoY0N4Y2JpQWdJQ0J6Ylc5dmRHaHpkR1Z3TEZ4dUlDQWdJSEpoWkdsaGJuTXNYRzRnSUNBZ1pHVm5jbVZsY3l4Y2JpQWdJQ0J5WVc1a2IyMUNaWFIzWldWdUxGeHVJQ0FnSUhKaGJtUnZiVWx1ZEVKbGRIZGxaVzRzWEc0Z0lDQWdZMngwVW1GdVpHOXRMRnh1SUNBZ0lHTnNkRkpoYm1SdmJVbHVkQ3hjYmlBZ0lDQjNaV2xuYUhSbFpGSmhibVJ2YlN4Y2JpQWdJQ0JzWlhKd1FYSnlZWGtzWEc0Z0lDQWdaRzkwTEZ4dUlDQWdJR1poWTNSdmNtbGhiQ3hjYmlBZ0lDQndaWEp0ZFhSaGRHbHZiaXhjYmlBZ0lDQmpiMjFpYVc1aGRHbHZiaXhjYmlBZ0lDQjBhVzFsY3l4Y2JpQWdJQ0J5WVc1blpTeGNiaUFnSUNCNmFYQXNYRzRnSUNBZ1lYUXNYRzRnSUNBZ1kyaDFibXNzWEc0Z0lDQWdjMmgxWm1ac1pTeGNiaUFnZlR0Y2JuMWNiaUlzSW1OdmJuTjBJSHNnZEdsdFpYTXNJR05vZFc1ckxDQmtiM1FnZlNBOUlISmxjWFZwY21Vb0owQmlZWE5sYldWdWRIVnVhWFpsY25ObEwzVjBhV3h6SnlrN1hHNWNiaThxS2x4dUlDb2dRRzkyWlhKMmFXVjNJRUVnYkdsaWNtRnllU0J2WmlCMWMyVm1kV3dnWm5WdVkzUnBiMjV6WEc0Z0tpQkFZWFYwYUc5eUlFZHZjbVJ2YmlCTVlYSnlhV2RoYmx4dUlDb3ZYRzVjYmk4cUtseHVJQ29nUVNBeVpDQjJaV04wYjNKY2JpQXFJRUIwZVhCbFpHVm1JSHRQWW1wbFkzUjlJSFpsWTF4dUlDb2dRSEJ5YjNCbGNuUjVJSHR1ZFcxaVpYSjlJSGdnVkdobElIZ2dZMjl0Y0c5dVpXNTBJRzltSUhSb1pTQjJaV04wYjNKY2JpQXFJRUJ3Y205d1pYSjBlU0I3Ym5WdFltVnlmU0I1SUZSb1pTQjVJR052YlhCdmJtVnVkQ0J2WmlCMGFHVWdkbVZqZEc5eVhHNGdLaTljYmx4dUx5b3FYRzRnS2lCRGNtVmhkR1VnWVNCdVpYY2dkbVZqZEc5eVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNueDJaV045SUZ0NFhTQlVhR1VnZUNCamIyMXdiMjVsYm5RZ2IyWWdkR2hsSUhabFkzUnZjaXdnYjNJZ1lTQjJaV04wYjNJZ2RHOGdZMjl3ZVZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlGdDVYU0JVYUdVZ2VTQmpiMjF3YjI1bGJuUWdiMllnZEdobElIWmxZM1J2Y2x4dUlDb2dRSEpsZEhWeWJpQjdkbVZqZlNCQklHNWxkeUIyWldOMGIzSmNiaUFxSUVCbGVHRnRjR3hsSUR4allYQjBhVzl1UGxaaGNtbHZkWE1nZDJGNWN5QjBieUJwYm1sMGFXRnNhWE5sSUdFZ2RtVmpkRzl5UEM5allYQjBhVzl1UGx4dUlDb2diR1YwSUdFZ1BTQjJaV01vTXl3Z01pazdJQ0F2THlBb015d2dNaWxjYmlBcUlHeGxkQ0JpSUQwZ2RtVmpLRFFwT3lBZ0lDQWdMeThnS0RRc0lEUXBYRzRnS2lCc1pYUWdZeUE5SUhabFl5aGhLVHNnSUNBZ0lDOHZJQ2d6TENBeUtWeHVJQ29nYkdWMElHUWdQU0IyWldNb0tUc2dJQ0FnSUNBdkx5QW9NQ3dnTUNsY2JpQXFMMXh1WTI5dWMzUWdkbVZqSUQwZ0tIZ3NJSGtwSUQwK0lDZ2hlQ0FtSmlBaGVTQS9YRzRnSUhzZ2VEb2dNQ3dnZVRvZ01DQjlJRG9nS0hSNWNHVnZaaUI0SUQwOVBTQW5iMkpxWldOMEp5QS9YRzRnSUNBZ2V5QjRPaUI0TG5nZ2ZId2dNQ3dnZVRvZ2VDNTVJSHg4SURBZ2ZTQTZJQ2g1SUQwOVBTQnVkV3hzSUh4OElIa2dQVDA5SUhWdVpHVm1hVzVsWkNBL1hHNGdJQ0FnSUNCN0lIZzZJSGdzSUhrNklIZ2dmU0E2SUhzZ2VEb2dlQ3dnZVRvZ2VTQjlLVnh1SUNBcFhHNHBPMXh1WEc0dktpcGNiaUFxSUVkbGRDQjBhR1VnWTI5dGNHOXVaVzUwY3lCdlppQmhJSFpsWTNSdmNpQmhjeUJoYmlCaGNuSmhlVnh1SUNvZ1FIQmhjbUZ0SUh0MlpXTjlJR0VnVkdobElIWmxZM1J2Y2lCMGJ5Qm5aWFFnWTI5dGNHOXVaVzUwY3lCbWNtOXRYRzRnS2lCQWNtVjBkWEp1SUh0QmNuSmhlVHh1ZFcxaVpYSStmU0JVYUdVZ2RtVmpkRzl5SUdOdmJYQnZibVZ1ZEhNZ1lYTWdZVzRnWVhKeVlYbGNiaUFxTDF4dWRtVmpMbU52YlhCdmJtVnVkSE1nUFNCaElEMCtJRnRoTG5nc0lHRXVlVjA3WEc1Y2JpOHFLbHh1SUNvZ1VtVjBkWEp1SUdFZ2RXNXBkQ0IyWldOMGIzSWdLREVzSURBcFhHNGdLaUJBY21WMGRYSnVJSHQyWldOOUlFRWdkVzVwZENCMlpXTjBiM0lnS0RFc0lEQXBYRzRnS2k5Y2JuWmxZeTUxZUNBOUlDZ3BJRDArSUhabFl5Z3hMQ0F3S1R0Y2JseHVMeW9xWEc0Z0tpQlNaWFIxY200Z1lTQjFibWwwSUhabFkzUnZjaUFvTUN3Z01TbGNiaUFxSUVCeVpYUjFjbTRnZTNabFkzMGdRU0IxYm1sMElIWmxZM1J2Y2lBb01Dd2dNU2xjYmlBcUwxeHVkbVZqTG5WNUlEMGdLQ2tnUFQ0Z2RtVmpLREFzSURFcE8xeHVYRzR2S2lwY2JpQXFJRUZrWkNCMlpXTjBiM0p6WEc0Z0tpQkFjR0Z5WVcwZ2UzWmxZMzBnWVNCV1pXTjBiM0lnWVZ4dUlDb2dRSEJoY21GdElIdDJaV045SUdJZ1ZtVmpkRzl5SUdKY2JpQXFJRUJ5WlhSMWNtNGdlM1psWTMwZ1lTQXJJR0pjYmlBcUwxeHVkbVZqTG1Ga1pDQTlJQ2hoTENCaUtTQTlQaUFvZXlCNE9pQmhMbmdnS3lCaUxuZ3NJSGs2SUdFdWVTQXJJR0l1ZVNCOUtUdGNibHh1THlvcVhHNGdLaUJUWTJGc1pTQmhJSFpsWTNSdmNseHVJQ29nUUhCaGNtRnRJSHQyWldOOUlHRWdWbVZqZEc5eUlHRmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JpSUZOallXeGhjaUJpWEc0Z0tpQkFjbVYwZFhKdUlIdDJaV045SUdFZ0tpQmlYRzRnS2k5Y2JuWmxZeTV0ZFd3Z1BTQW9ZU3dnWWlrZ1BUNGdLSHNnZURvZ1lTNTRJQ29nWWl3Z2VUb2dZUzU1SUNvZ1lpQjlLVHRjYmx4dUx5b3FYRzRnS2lCVGRXSjBjbUZqZENCMlpXTjBiM0p6WEc0Z0tpQkFjR0Z5WVcwZ2UzWmxZMzBnWVNCV1pXTjBiM0lnWVZ4dUlDb2dRSEJoY21GdElIdDJaV045SUdJZ1ZtVmpkRzl5SUdKY2JpQXFJRUJ5WlhSMWNtNGdlM1psWTMwZ1lTQXRJR0pjYmlBcUwxeHVkbVZqTG5OMVlpQTlJQ2hoTENCaUtTQTlQaUFvZXlCNE9pQmhMbmdnTFNCaUxuZ3NJSGs2SUdFdWVTQXRJR0l1ZVNCOUtUdGNibHh1THlvcVhHNGdLaUJIWlhRZ2RHaGxJR3hsYm1kMGFDQnZaaUJoSUhabFkzUnZjbHh1SUNvZ1FIQmhjbUZ0SUh0MlpXTjlJR0VnVm1WamRHOXlJR0ZjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24wZ2ZHRjhYRzRnS2k5Y2JuWmxZeTVzWlc0Z1BTQmhJRDArSUUxaGRHZ3VjM0Z5ZENoaExuZ2dLaUJoTG5nZ0t5QmhMbmtnS2lCaExua3BPMXh1WEc0dktpcGNiaUFxSUVkbGRDQjBhR1VnYkdWdVozUm9JRzltSUdFZ2RtVmpkRzl5SUhWemFXNW5JSFJoZUdsallXSWdaMlZ2YldWMGNubGNiaUFxSUVCd1lYSmhiU0I3ZG1WamZTQmhJRlpsWTNSdmNpQmhYRzRnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5SUh4aGZGeHVJQ292WEc1MlpXTXViV0Z1YUdGMGRHRnVJRDBnWVNBOVBpQk5ZWFJvTG1GaWN5aGhMbmdwSUNzZ1RXRjBhQzVoWW5Nb1lTNTVLVHRjYmx4dUx5b3FYRzRnS2lCT2IzSnRZV3hwYzJVZ1lTQjJaV04wYjNKY2JpQXFJRUJ3WVhKaGJTQjdkbVZqZlNCaElGUm9aU0IyWldOMGIzSWdkRzhnYm05eWJXRnNhWE5sWEc0Z0tpQkFjbVYwZFhKdUlIdDJaV045SUY1aFhHNGdLaTljYm5abFl5NXViM0lnUFNCaElEMCtJSHRjYmlBZ2JHVjBJR3hsYmlBOUlIWmxZeTVzWlc0b1lTazdYRzRnSUhKbGRIVnliaUJzWlc0Z1B5QjdJSGc2SUdFdWVDQXZJR3hsYml3Z2VUb2dZUzU1SUM4Z2JHVnVJSDBnT2lCMlpXTW9LVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dSMlYwSUdFZ1pHOTBJSEJ5YjJSMVkzUWdiMllnZG1WamRHOXljMXh1SUNvZ1FIQmhjbUZ0SUh0MlpXTjlJR0VnVm1WamRHOXlJR0ZjYmlBcUlFQndZWEpoYlNCN2RtVmpmU0JpSUZabFkzUnZjaUJpWEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOUlHRWc0b2laSUdKY2JpQXFMMXh1ZG1WakxtUnZkQ0E5SUNoaExDQmlLU0E5UGlCaExuZ2dLaUJpTG5nZ0t5QmhMbmtnS2lCaUxuazdYRzVjYmk4cUtseHVJQ29nVW05MFlYUmxJR0VnZG1WamRHOXlJR0o1SUhJZ2NtRmthV0Z1YzF4dUlDb2dRSEJoY21GdElIdDJaV045SUdFZ1ZHaGxJSFpsWTNSdmNpQjBieUJ5YjNSaGRHVmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J5SUZSb1pTQmhibWRzWlNCMGJ5QnliM1JoZEdVZ1lua3NJRzFsWVhOMWNtVmtJR2x1SUhKaFpHbGhibk5jYmlBcUlFQnlaWFIxY200Z2UzWmxZMzBnUVNCeWIzUmhkR1ZrSUhabFkzUnZjbHh1SUNvdlhHNTJaV011Y205MElEMGdLR0VzSUhJcElEMCtJSHRjYmlBZ2JHVjBJSE1nUFNCTllYUm9Mbk5wYmloeUtTeGNiaUFnSUNCaklEMGdUV0YwYUM1amIzTW9jaWs3WEc0Z0lISmxkSFZ5YmlCN0lIZzZJR01nS2lCaExuZ2dMU0J6SUNvZ1lTNTVMQ0I1T2lCeklDb2dZUzU0SUNzZ1l5QXFJR0V1ZVNCOU8xeHVmVnh1WEc0dktpcGNiaUFxSUVOb1pXTnJJR2xtSUhSM2J5QjJaV04wYjNKeklHRnlaU0JsY1hWaGJGeHVJQ29nUUhCaGNtRnRJSHQyWldOOUlHRWdWbVZqZEc5eUlHRmNiaUFxSUVCd1lYSmhiU0I3ZG1WamZTQmlJRlpsWTNSdmNpQmlYRzRnS2lCQWNtVjBkWEp1SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhabFkzUnZjbk1nWVNCaGJtUWdZaUJoY21VZ1pYRjFZV3dzSUdaaGJITmxJRzkwYUdWeWQybHpaVnh1SUNvdlhHNTJaV011WlhFZ1BTQW9ZU3dnWWlrZ1BUNGdZUzU0SUQwOVBTQmlMbmdnSmlZZ1lTNTVJRDA5UFNCaUxuazdYRzVjYmk4cUtseHVJQ29nUjJWMElIUm9aU0JoYm1kc1pTQnZaaUJoSUhabFkzUnZjbHh1SUNvZ1FIQmhjbUZ0SUh0MlpXTjlJR0VnVm1WamRHOXlJR0ZjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24wZ1ZHaGxJR0Z1WjJ4bElHOW1JSFpsWTNSdmNpQmhJR2x1SUhKaFpHbGhibk5jYmlBcUwxeHVkbVZqTG5KaFpDQTlJR0VnUFQ0Z1RXRjBhQzVoZEdGdU1paGhMbmtzSUdFdWVDazdYRzVjYmk4cUtseHVJQ29nUTI5d2VTQmhJSFpsWTNSdmNseHVJQ29nUUhCaGNtRnRJSHQyWldOOUlHRWdWR2hsSUhabFkzUnZjaUIwYnlCamIzQjVYRzRnS2lCQWNtVjBkWEp1SUh0MlpXTjlJRUVnWTI5d2VTQnZaaUIyWldOMGIzSWdZVnh1SUNvdlhHNTJaV011WTNCNUlEMGdZU0E5UGlCMlpXTW9ZU2s3WEc1Y2JpOHFLbHh1SUNvZ1FTQm1kVzVqZEdsdmJpQjBieUJqWVd4c0lHOXVJR1ZoWTJnZ1kyOXRjRzl1Wlc1MElHOW1JR0VnZG1WamRHOXlYRzRnS2lCQVkyRnNiR0poWTJzZ2RtVmpkRzl5VFdGd1EyRnNiR0poWTJ0Y2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQjJZV3gxWlNCVWFHVWdZMjl0Y0c5dVpXNTBJSFpoYkhWbFhHNGdLaUJBY0dGeVlXMGdleWQ0SnlCOElDZDVKMzBnYkdGaVpXd2dWR2hsSUdOdmJYQnZibVZ1ZENCc1lXSmxiQ0FvZUNCdmNpQjVLVnh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlNCVWFHVWdiV0Z3Y0dWa0lHTnZiWEJ2Ym1WdWRGeHVJQ292WEc1Y2JpOHFLbHh1SUNvZ1EyRnNiQ0JoSUdaMWJtTjBhVzl1SUc5dUlHVmhZMmdnWTI5dGNHOXVaVzUwSUc5bUlHRWdkbVZqZEc5eUlHRnVaQ0JpZFdsc1pDQmhJRzVsZHlCMlpXTjBiM0lnWm5KdmJTQjBhR1VnY21WemRXeDBjMXh1SUNvZ1FIQmhjbUZ0SUh0MlpXTjlJR0VnVm1WamRHOXlJR0ZjYmlBcUlFQndZWEpoYlNCN2RtVmpkRzl5VFdGd1EyRnNiR0poWTJ0OUlHWWdWR2hsSUdaMWJtTjBhVzl1SUhSdklHTmhiR3dnYjI0Z1pXRmphQ0JqYjIxd2IyNWxiblFnYjJZZ2RHaGxJSFpsWTNSdmNseHVJQ29nUUhKbGRIVnliaUI3ZG1WamZTQldaV04wYjNJZ1lTQnRZWEJ3WldRZ2RHaHliM1ZuYUNCbVhHNGdLaTljYm5abFl5NXRZWEFnUFNBb1lTd2daaWtnUFQ0Z0tIc2dlRG9nWmloaExuZ3NJQ2Q0Snlrc0lIazZJR1lvWVM1NUxDQW5lU2NwSUgwcE8xeHVYRzR2S2lwY2JpQXFJRU52Ym5abGNuUWdZU0IyWldOMGIzSWdhVzUwYnlCaElITjBjbWx1WjF4dUlDb2dRSEJoY21GdElIdDJaV045SUdFZ1ZHaGxJSFpsWTNSdmNpQjBieUJqYjI1MlpYSjBYRzRnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnVzNNOUp5d2dKMTBnVkdobElITmxjR0Z5WVhSdmNpQnpkSEpwYm1kY2JpQXFJRUJ5WlhSMWNtNGdlM04wY21sdVozMGdRU0J6ZEhKcGJtY2djbVZ3Y21WelpXNTBZWFJwYjI0Z2IyWWdkR2hsSUhabFkzUnZjbHh1SUNvdlhHNTJaV011YzNSeUlEMGdLR0VzSUhNZ1BTQW5MQ0FuS1NBOVBpQmdKSHRoTG5oOUpIdHpmU1I3WVM1NWZXQTdYRzVjYmk4cUtseHVJQ29nUVNCdFlYUnlhWGhjYmlBcUlFQjBlWEJsWkdWbUlIdFBZbXBsWTNSOUlHMWhkRnh1SUNvZ1FIQnliM0JsY25SNUlIdHVkVzFpWlhKOUlHMGdWR2hsSUc1MWJXSmxjaUJ2WmlCeWIzZHpJR2x1SUhSb1pTQnRZWFJ5YVhoY2JpQXFJRUJ3Y205d1pYSjBlU0I3Ym5WdFltVnlmU0J1SUZSb1pTQnVkVzFpWlhJZ2IyWWdZMjlzZFcxdWN5QnBiaUIwYUdVZ2JXRjBjbWw0WEc0Z0tpQkFjSEp2Y0dWeWRIa2dlMEZ5Y21GNVBHNTFiV0psY2o1OUlHVnVkSEpwWlhNZ1ZHaGxJRzFoZEhKcGVDQjJZV3gxWlhOY2JpQXFMMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaU0JoSUc1bGR5QnRZWFJ5YVhoY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmJiVDAwWFNCVWFHVWdiblZ0WW1WeUlHOW1JSEp2ZDNOY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmJiajAwWFNCVWFHVWdiblZ0WW1WeUlHOW1JR052YkhWdGJuTmNiaUFxSUVCd1lYSmhiU0I3UVhKeVlYazhiblZ0WW1WeVBuMGdXMlZ1ZEhKcFpYTTlXMTFkSUUxaGRISnBlQ0IyWVd4MVpYTWdhVzRnY21WaFpHbHVaeUJ2Y21SbGNseHVJQ29nUUhKbGRIVnliaUI3YldGMGZTQkJJRzVsZHlCdFlYUnlhWGhjYmlBcUwxeHVZMjl1YzNRZ2JXRjBJRDBnS0cwZ1BTQTBMQ0J1SUQwZ05Dd2daVzUwY21sbGN5QTlJRnRkS1NBOVBpQW9lMXh1SUNCdExDQnVMRnh1SUNCbGJuUnlhV1Z6T2lCbGJuUnlhV1Z6TG1OdmJtTmhkQ2hCY25KaGVTaHRJQ29nYmlrdVptbHNiQ2d3S1NrdWMyeHBZMlVvTUN3Z2JTQXFJRzRwWEc1OUtUdGNibHh1THlvcVhHNGdLaUJIWlhRZ1lXNGdhV1JsYm5ScGRIa2diV0YwY21sNElHOW1JSE5wZW1VZ2JseHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRzRnVkdobElITnBlbVVnYjJZZ2RHaGxJRzFoZEhKcGVGeHVJQ29nUUhKbGRIVnliaUI3YldGMGZTQkJiaUJwWkdWdWRHbDBlU0J0WVhSeWFYaGNiaUFxTDF4dWJXRjBMbWxrWlc1MGFYUjVJRDBnYmlBOVBpQnRZWFFvYml3Z2Jpd2dRWEp5WVhrb2JpQXFJRzRwTG1acGJHd29NQ2t1YldGd0tDaDJMQ0JwS1NBOVBpQXJLRTFoZEdndVpteHZiM0lvYVNBdklHNHBJRDA5UFNCcElDVWdiaWtwS1R0Y2JseHVMeW9xWEc0Z0tpQkhaWFFnWVc0Z1pXNTBjbmtnWm5KdmJTQmhJRzFoZEhKcGVGeHVJQ29nUUhCaGNtRnRJSHR0WVhSOUlHRWdUV0YwY21sNElHRmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JwSUZSb1pTQnliM2NnYjJabWMyVjBYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYWlCVWFHVWdZMjlzZFcxdUlHOW1abk5sZEZ4dUlDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZTQlVhR1VnZG1Gc2RXVWdZWFFnY0c5emFYUnBiMjRnS0drc0lHb3BJR2x1SUcxaGRISnBlQ0JoWEc0Z0tpOWNibTFoZEM1blpYUWdQU0FvWVN3Z2FTd2dhaWtnUFQ0Z1lTNWxiblJ5YVdWeld5aHFJQzBnTVNrZ0t5QW9hU0F0SURFcElDb2dZUzV1WFR0Y2JseHVMeW9xWEc0Z0tpQlRaWFFnWVc0Z1pXNTBjbmtnYjJZZ1lTQnRZWFJ5YVhoY2JpQXFJRUJ3WVhKaGJTQjdiV0YwZlNCaElFMWhkSEpwZUNCaFhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdhU0JVYUdVZ2NtOTNJRzltWm5ObGRGeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJR29nVkdobElHTnZiSFZ0YmlCdlptWnpaWFJjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCMklGUm9aU0IyWVd4MVpTQjBieUJ6WlhRZ2FXNGdiV0YwY21sNElHRmNiaUFxTDF4dWJXRjBMbk5sZENBOUlDaGhMQ0JwTENCcUxDQjJLU0E5UGlCN0lHRXVaVzUwY21sbGMxc29haUF0SURFcElDc2dLR2tnTFNBeEtTQXFJR0V1YmwwZ1BTQjJPeUI5TzF4dVhHNHZLaXBjYmlBcUlFZGxkQ0JoSUhKdmR5Qm1jbTl0SUdFZ2JXRjBjbWw0SUdGeklHRnVJR0Z5Y21GNVhHNGdLaUJBY0dGeVlXMGdlMjFoZEgwZ1lTQk5ZWFJ5YVhnZ1lWeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRzBnVkdobElISnZkeUJ2Wm1aelpYUmNiaUFxSUVCeVpYUjFjbTRnZTBGeWNtRjVQRzUxYldKbGNqNTlJRkp2ZHlCdElHWnliMjBnYldGMGNtbDRJR0ZjYmlBcUwxeHViV0YwTG5KdmR5QTlJQ2hoTENCdEtTQTlQaUI3WEc0Z0lHTnZibk4wSUhNZ1BTQW9iU0F0SURFcElDb2dZUzV1TzF4dUlDQnlaWFIxY200Z1lTNWxiblJ5YVdWekxuTnNhV05sS0hNc0lITWdLeUJoTG00cE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCSFpYUWdZU0JqYjJ4MWJXNGdabkp2YlNCaElHMWhkSEpwZUNCaGN5QmhiaUJoY25KaGVWeHVJQ29nUUhCaGNtRnRJSHR0WVhSOUlHRWdUV0YwY21sNElHRmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J1SUZSb1pTQmpiMngxYlc0Z2IyWm1jMlYwWEc0Z0tpQkFjbVYwZFhKdUlIdEJjbkpoZVR4dWRXMWlaWEkrZlNCRGIyeDFiVzRnYmlCbWNtOXRJRzFoZEhKcGVDQmhYRzRnS2k5Y2JtMWhkQzVqYjJ3Z1BTQW9ZU3dnYmlrZ1BUNGdkR2x0WlhNb2FTQTlQaUJ0WVhRdVoyVjBLR0VzSUNocElDc2dNU2tzSUc0cExDQmhMbTBwTzF4dVhHNHZLaXBjYmlBcUlFRmtaQ0J0WVhSeWFXTmxjMXh1SUNvZ1FIQmhjbUZ0SUh0dFlYUjlJR0VnVFdGMGNtbDRJR0ZjYmlBcUlFQndZWEpoYlNCN2JXRjBmU0JpSUUxaGRISnBlQ0JpWEc0Z0tpQkFjbVYwZFhKdUlIdHRZWFI5SUdFZ0t5QmlYRzRnS2k5Y2JtMWhkQzVoWkdRZ1BTQW9ZU3dnWWlrZ1BUNGdZUzV0SUQwOVBTQmlMbTBnSmlZZ1lTNXVJRDA5UFNCaUxtNGdKaVlnYldGMExtMWhjQ2hoTENBb2Rpd2dhU2tnUFQ0Z2RpQXJJR0l1Wlc1MGNtbGxjMXRwWFNrN1hHNWNiaThxS2x4dUlDb2dVM1ZpZEhKaFkzUWdiV0YwY21salpYTmNiaUFxSUVCd1lYSmhiU0I3YldGMGZTQmhJRTFoZEhKcGVDQmhYRzRnS2lCQWNHRnlZVzBnZTIxaGRIMGdZaUJOWVhSeWFYZ2dZbHh1SUNvZ1FISmxkSFZ5YmlCN2JXRjBmU0JoSUMwZ1lseHVJQ292WEc1dFlYUXVjM1ZpSUQwZ0tHRXNJR0lwSUQwK0lHRXViU0E5UFQwZ1lpNXRJQ1ltSUdFdWJpQTlQVDBnWWk1dUlDWW1JRzFoZEM1dFlYQW9ZU3dnS0hZc0lHa3BJRDArSUhZZ0xTQmlMbVZ1ZEhKcFpYTmJhVjBwTzF4dVhHNHZLaXBjYmlBcUlFMTFiSFJwY0d4NUlHMWhkSEpwWTJWelhHNGdLaUJBY0dGeVlXMGdlMjFoZEgwZ1lTQk5ZWFJ5YVhnZ1lWeHVJQ29nUUhCaGNtRnRJSHR0WVhSOUlHSWdUV0YwY21sNElHSmNiaUFxSUVCeVpYUjFjbTRnZTIxaGRIeGliMjlzWldGdWZTQmhZaUJ2Y2lCbVlXeHpaU0JwWmlCMGFHVWdiV0YwY21salpYTWdZMkZ1Ym05MElHSmxJRzExYkhScGNHeHBaV1JjYmlBcUwxeHViV0YwTG0xMWJDQTlJQ2hoTENCaUtTQTlQaUI3WEc0Z0lHbG1JQ2hoTG00Z0lUMDlJR0l1YlNrZ2V5QnlaWFIxY200Z1ptRnNjMlU3SUgxY2JpQWdZMjl1YzNRZ2NtVnpkV3gwSUQwZ2JXRjBLR0V1YlN3Z1lpNXVLVHRjYmlBZ1ptOXlJQ2hzWlhRZ2FTQTlJREU3SUdrZ1BEMGdZUzV0T3lCcEt5c3BJSHRjYmlBZ0lDQm1iM0lnS0d4bGRDQnFJRDBnTVRzZ2FpQThQU0JpTG00N0lHb3JLeWtnZTF4dUlDQWdJQ0FnYldGMExuTmxkQ2h5WlhOMWJIUXNJR2tzSUdvc0lHUnZkQ2h0WVhRdWNtOTNLR0VzSUdrcExDQnRZWFF1WTI5c0tHSXNJR29wS1NrN1hHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhKbGRIVnliaUJ5WlhOMWJIUTdYRzU5TzF4dVhHNHZLaXBjYmlBcUlGTmpZV3hsSUdFZ2JXRjBjbWw0WEc0Z0tpQkFjR0Z5WVcwZ2UyMWhkSDBnWVNCTllYUnlhWGdnWVZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHSWdVMk5oYkdGeUlHSmNiaUFxSUVCeVpYUjFjbTRnZTIxaGRIMGdZU0FxSUdKY2JpQXFMMXh1YldGMExuTmpZV3hsSUQwZ0tHRXNJR0lwSUQwK0lHMWhkQzV0WVhBb1lTd2dkaUE5UGlCMklDb2dZaWs3WEc1Y2JpOHFLbHh1SUNvZ1ZISmhibk53YjNObElHRWdiV0YwY21sNFhHNGdLaUJBY0dGeVlXMGdlMjFoZEgwZ1lTQlVhR1VnYldGMGNtbDRJSFJ2SUhSeVlXNXpjRzl6WlZ4dUlDb2dRSEpsZEhWeWJpQjdiV0YwZlNCQklIUnlZVzV6Y0c5elpXUWdiV0YwY21sNFhHNGdLaTljYm0xaGRDNTBjbUZ1Y3lBOUlHRWdQVDRnYldGMEtHRXViaXdnWVM1dExDQjBhVzFsY3locElEMCtJRzFoZEM1amIyd29ZU3dnS0drZ0t5QXhLU2tzSUdFdWJpa3VabXhoZENncEtUdGNibHh1THlvcVhHNGdLaUJIWlhRZ2RHaGxJRzFwYm05eUlHOW1JR0VnYldGMGNtbDRYRzRnS2lCQWNHRnlZVzBnZTIxaGRIMGdZU0JOWVhSeWFYZ2dZVnh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdrZ1ZHaGxJSEp2ZHlCdlptWnpaWFJjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCcUlGUm9aU0JqYjJ4MWJXNGdiMlptYzJWMFhHNGdLaUJBY21WMGRYSnVJSHR0WVhSOFltOXZiR1ZoYm4wZ1ZHaGxJQ2hwTENCcUtTQnRhVzV2Y2lCdlppQnRZWFJ5YVhnZ1lTQnZjaUJtWVd4elpTQnBaaUIwYUdVZ2JXRjBjbWw0SUdseklHNXZkQ0J6Y1hWaGNtVmNiaUFxTDF4dWJXRjBMbTFwYm05eUlEMGdLR0VzSUdrc0lHb3BJRDArSUh0Y2JpQWdhV1lnS0dFdWJTQWhQVDBnWVM1dUtTQjdJSEpsZEhWeWJpQm1ZV3h6WlRzZ2ZWeHVJQ0JqYjI1emRDQmxiblJ5YVdWeklEMGdXMTA3WEc0Z0lHWnZjaUFvYkdWMElHbHBJRDBnTVRzZ2FXa2dQRDBnWVM1dE95QnBhU3NyS1NCN1hHNGdJQ0FnYVdZZ0tHbHBJRDA5UFNCcEtTQjdJR052Ym5ScGJuVmxPeUI5WEc0Z0lDQWdabTl5SUNoc1pYUWdhbW9nUFNBeE95QnFhaUE4UFNCaExtNDdJR3BxS3lzcElIdGNiaUFnSUNBZ0lHbG1JQ2hxYWlBOVBUMGdhaWtnZXlCamIyNTBhVzUxWlRzZ2ZWeHVJQ0FnSUNBZ1pXNTBjbWxsY3k1d2RYTm9LRzFoZEM1blpYUW9ZU3dnYVdrc0lHcHFLU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNGdJSEpsZEhWeWJpQnRZWFFvWVM1dElDMGdNU3dnWVM1dUlDMGdNU3dnWlc1MGNtbGxjeWs3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRWRsZENCMGFHVWdaR1YwWlhKdGFXNWhiblFnYjJZZ1lTQnRZWFJ5YVhoY2JpQXFJRUJ3WVhKaGJTQjdiV0YwZlNCaElFMWhkSEpwZUNCaFhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjhZbTl2YkdWaGJuMGdmR0Y4SUc5eUlHWmhiSE5sSUdsbUlIUm9aU0J0WVhSeWFYZ2dhWE1nYm05MElITnhkV0Z5WlZ4dUlDb3ZYRzV0WVhRdVpHVjBJRDBnWVNBOVBpQjdYRzRnSUdsbUlDaGhMbTBnSVQwOUlHRXViaWtnZXlCeVpYUjFjbTRnWm1Gc2MyVTdJSDFjYmlBZ2FXWWdLR0V1YlNBOVBUMGdNU2tnZTF4dUlDQWdJSEpsZEhWeWJpQmhMbVZ1ZEhKcFpYTmJNRjA3WEc0Z0lIMWNiaUFnYVdZZ0tHRXViU0E5UFQwZ01pa2dlMXh1SUNBZ0lISmxkSFZ5YmlCaExtVnVkSEpwWlhOYk1GMGdLaUJoTG1WdWRISnBaWE5iTTEwZ0xTQmhMbVZ1ZEhKcFpYTmJNVjBnS2lCaExtVnVkSEpwWlhOYk1sMDdYRzRnSUgxY2JpQWdiR1YwSUhSdmRHRnNJRDBnTUN3Z2MybG5iaUE5SURFN1hHNGdJR1p2Y2lBb2JHVjBJR29nUFNBeE95QnFJRHc5SUdFdWJqc2dhaXNyS1NCN1hHNGdJQ0FnZEc5MFlXd2dLejBnYzJsbmJpQXFJR0V1Wlc1MGNtbGxjMXRxSUMwZ01WMGdLaUJ0WVhRdVpHVjBLRzFoZEM1dGFXNXZjaWhoTENBeExDQnFLU2s3WEc0Z0lDQWdjMmxuYmlBcVBTQXRNVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdkRzkwWVd3N1hHNTlPMXh1WEc0dktpcGNiaUFxSUU1dmNtMWhiR2x6WlNCaElHMWhkSEpwZUZ4dUlDb2dRSEJoY21GdElIdHRZWFI5SUdFZ1ZHaGxJRzFoZEhKcGVDQjBieUJ1YjNKdFlXeHBjMlZjYmlBcUlFQnlaWFIxY200Z2UyMWhkSHhpYjI5c1pXRnVmU0JlWVNCdmNpQm1ZV3h6WlNCcFppQjBhR1VnYldGMGNtbDRJR2x6SUc1dmRDQnpjWFZoY21WY2JpQXFMMXh1YldGMExtNXZjaUE5SUdFZ1BUNGdlMXh1SUNCcFppQW9ZUzV0SUNFOVBTQmhMbTRwSUhzZ2NtVjBkWEp1SUdaaGJITmxPeUI5WEc0Z0lHTnZibk4wSUdRZ1BTQnRZWFF1WkdWMEtHRXBPMXh1SUNCeVpYUjFjbTRnYldGMExtMWhjQ2hoTENCcElEMCtJR2tnS2lCa0tUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1IyVjBJSFJvWlNCaFpHcDFaMkYwWlNCdlppQmhJRzFoZEhKcGVGeHVJQ29nUUhCaGNtRnRJSHR0WVhSOUlHRWdWR2hsSUcxaGRISnBlQ0JtY205dElIZG9hV05vSUhSdklHZGxkQ0IwYUdVZ1lXUnFkV2RoZEdWY2JpQXFJRUJ5WlhSMWNtNGdlMjFoZEgwZ1ZHaGxJR0ZrYW5WbllYUmxJRzltSUdGY2JpQXFMMXh1YldGMExtRmthaUE5SUdFZ1BUNGdlMXh1SUNCamIyNXpkQ0J0YVc1dmNuTWdQU0J0WVhRb1lTNXRMQ0JoTG00cE8xeHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Uc2dhU0E4UFNCaExtMDdJR2tyS3lrZ2UxeHVJQ0FnSUdadmNpQW9iR1YwSUdvZ1BTQXhPeUJxSUR3OUlHRXVianNnYWlzcktTQjdYRzRnSUNBZ0lDQnRZWFF1YzJWMEtHMXBibTl5Y3l3Z2FTd2dhaXdnYldGMExtUmxkQ2h0WVhRdWJXbHViM0lvWVN3Z2FTd2dhaWtwS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNiaUFnWTI5dWMzUWdZMjltWVdOMGIzSnpJRDBnYldGMExtMWhjQ2h0YVc1dmNuTXNJQ2gyTENCcEtTQTlQaUIySUNvZ0tHa2dKU0F5SUQ4Z0xURWdPaUF4S1NrN1hHNGdJSEpsZEhWeWJpQnRZWFF1ZEhKaGJuTW9ZMjltWVdOMGIzSnpLVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dSMlYwSUhSb1pTQnBiblpsY25ObElHOW1JR0VnYldGMGNtbDRYRzRnS2lCQWNHRnlZVzBnZTIxaGRIMGdZU0JVYUdVZ2JXRjBjbWw0SUhSdklHbHVkbVZ5ZEZ4dUlDb2dRSEpsZEhWeWJpQjdiV0YwZkdKdmIyeGxZVzU5SUdGZUxURWdiM0lnWm1Gc2MyVWdhV1lnZEdobElHMWhkSEpwZUNCb1lYTWdibThnYVc1MlpYSnpaVnh1SUNvdlhHNXRZWFF1YVc1MklEMGdZU0E5UGlCN1hHNGdJR2xtSUNoaExtMGdJVDA5SUdFdWJpa2dleUJ5WlhSMWNtNGdabUZzYzJVN0lIMWNiaUFnWTI5dWMzUWdaQ0E5SUcxaGRDNWtaWFFvWVNrN1hHNGdJR2xtSUNoa0lEMDlQU0F3S1NCN0lISmxkSFZ5YmlCbVlXeHpaVHNnZlZ4dUlDQnlaWFIxY200Z2JXRjBMbk5qWVd4bEtHMWhkQzVoWkdvb1lTa3NJREVnTHlCa0tUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1EyaGxZMnNnYVdZZ2RIZHZJRzFoZEhKcFkyVnpJR0Z5WlNCbGNYVmhiRnh1SUNvZ1FIQmhjbUZ0SUh0dFlYUjlJR0VnVFdGMGNtbDRJR0ZjYmlBcUlFQndZWEpoYlNCN2JXRjBmU0JpSUUxaGRISnBlQ0JpWEc0Z0tpQkFjbVYwZFhKdUlIdGliMjlzWldGdWZTQlVjblZsSUdsbUlHMWhkSEpwWTJWeklHRWdZVzVrSUdJZ1lYSmxJR2xrWlc1MGFXTmhiQ3dnWm1Gc2MyVWdiM1JvWlhKM2FYTmxYRzRnS2k5Y2JtMWhkQzVsY1NBOUlDaGhMQ0JpS1NBOVBpQmhMbTBnUFQwOUlHSXViU0FtSmlCaExtNGdQVDA5SUdJdWJpQW1KaUJ0WVhRdWMzUnlLR0VwSUQwOVBTQnRZWFF1YzNSeUtHSXBPMXh1WEc0dktpcGNiaUFxSUVOdmNIa2dZU0J0WVhSeWFYaGNiaUFxSUVCd1lYSmhiU0I3YldGMGZTQmhJRlJvWlNCdFlYUnlhWGdnZEc4Z1kyOXdlVnh1SUNvZ1FISmxkSFZ5YmlCN2JXRjBmU0JCSUdOdmNIa2diMllnYldGMGNtbDRJR0ZjYmlBcUwxeHViV0YwTG1Od2VTQTlJR0VnUFQ0Z2JXRjBLR0V1YlN3Z1lTNXVMQ0JiTGk0dVlTNWxiblJ5YVdWelhTazdYRzVjYmk4cUtseHVJQ29nUVNCbWRXNWpkR2x2YmlCMGJ5QmpZV3hzSUc5dUlHVmhZMmdnWlc1MGNua2diMllnWVNCdFlYUnlhWGhjYmlBcUlFQmpZV3hzWW1GamF5QnRZWFJ5YVhoTllYQkRZV3hzWW1GamExeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJSFpoYkhWbElGUm9aU0JsYm5SeWVTQjJZV3gxWlZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHbHVaR1Y0SUZSb1pTQmxiblJ5ZVNCcGJtUmxlRnh1SUNvZ1FIQmhjbUZ0SUh0QmNuSmhlVHh1ZFcxaVpYSStmU0JsYm5SeWFXVnpJRlJvWlNCaGNuSmhlU0J2WmlCdFlYUnlhWGdnWlc1MGNtbGxjMXh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlNCVWFHVWdiV0Z3Y0dWa0lHVnVkSEo1WEc0Z0tpOWNibHh1THlvcVhHNGdLaUJEWVd4c0lHRWdablZ1WTNScGIyNGdiMjRnWldGamFDQmxiblJ5ZVNCdlppQmhJRzFoZEhKcGVDQmhibVFnWW5WcGJHUWdZU0J1WlhjZ2JXRjBjbWw0SUdaeWIyMGdkR2hsSUhKbGMzVnNkSE5jYmlBcUlFQndZWEpoYlNCN2JXRjBmU0JoSUUxaGRISnBlQ0JoWEc0Z0tpQkFjR0Z5WVcwZ2UyMWhkSEpwZUUxaGNFTmhiR3hpWVdOcmZTQm1JRlJvWlNCbWRXNWpkR2x2YmlCMGJ5QmpZV3hzSUc5dUlHVmhZMmdnWlc1MGNua2diMllnZEdobElHMWhkSEpwZUZ4dUlDb2dRSEpsZEhWeWJpQjdiV0YwZlNCTllYUnlhWGdnWVNCdFlYQndaV1FnZEdoeWIzVm5hQ0JtWEc0Z0tpOWNibTFoZEM1dFlYQWdQU0FvWVN3Z1ppa2dQVDRnYldGMEtHRXViU3dnWVM1dUxDQmhMbVZ1ZEhKcFpYTXViV0Z3S0dZcEtUdGNibHh1THlvcVhHNGdLaUJEYjI1MlpYSjBJR0VnYldGMGNtbDRJR2x1ZEc4Z1lTQnpkSEpwYm1kY2JpQXFJRUJ3WVhKaGJTQjdiV0YwZlNCaElGUm9aU0J0WVhSeWFYZ2dkRzhnWTI5dWRtVnlkRnh1SUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ5SUZ0dGN6MG5MQ0FuWFNCVWFHVWdjMlZ3WVhKaGRHOXlJSE4wY21sdVp5Qm1iM0lnWTI5c2RXMXVjMXh1SUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ5SUZ0dWN6MG5YRnh1SjEwZ1ZHaGxJSE5sY0dGeVlYUnZjaUJ6ZEhKcGJtY2dabTl5SUhKdmQzTmNiaUFxSUVCeVpYUjFjbTRnZTNOMGNtbHVaMzBnUVNCemRISnBibWNnY21Wd2NtVnpaVzUwWVhScGIyNGdiMllnZEdobElHMWhkSEpwZUZ4dUlDb3ZYRzV0WVhRdWMzUnlJRDBnS0dFc0lHMXpJRDBnSnl3Z0p5d2dibk1nUFNBblhGeHVKeWtnUFQ0Z1kyaDFibXNvWVM1bGJuUnlhV1Z6TENCaExtNHBMbTFoY0NoeUlEMCtJSEl1YW05cGJpaHRjeWtwTG1wdmFXNG9ibk1wTzF4dVhHNXBaaUFvZEhsd1pXOW1JRzF2WkhWc1pTQWhQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3SUhabFl5d2diV0YwSUgwN1hHNTlYRzRpTENJdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNTJZWElnWDE5M1pXSndZV05yWDIxdlpIVnNaVjlqWVdOb1pWOWZJRDBnZTMwN1hHNWNiaTh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNW1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1WEhSMllYSWdZMkZqYUdWa1RXOWtkV3hsSUQwZ1gxOTNaV0p3WVdOclgyMXZaSFZzWlY5allXTm9aVjlmVzIxdlpIVnNaVWxrWFR0Y2JseDBhV1lnS0dOaFkyaGxaRTF2WkhWc1pTQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNWNkRngwY21WMGRYSnVJR05oWTJobFpFMXZaSFZzWlM1bGVIQnZjblJ6TzF4dVhIUjlYRzVjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzVjZEhaaGNpQnRiMlIxYkdVZ1BTQmZYM2RsWW5CaFkydGZiVzlrZFd4bFgyTmhZMmhsWDE5YmJXOWtkV3hsU1dSZElEMGdlMXh1WEhSY2RDOHZJRzV2SUcxdlpIVnNaUzVwWkNCdVpXVmtaV1JjYmx4MFhIUXZMeUJ1YnlCdGIyUjFiR1V1Ykc5aFpHVmtJRzVsWldSbFpGeHVYSFJjZEdWNGNHOXlkSE02SUh0OVhHNWNkSDA3WEc1Y2JseDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc1Y2RGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOWJiVzlrZFd4bFNXUmRLRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc1Y2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNWNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JuMWNibHh1SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dYQ0pmWDJWelRXOWtkV3hsWENJc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNWpiMjV6ZENCMlpXTmZNU0E5SUhKbGNYVnBjbVVvWENKQVltRnpaVzFsYm5SMWJtbDJaWEp6WlM5MlpXTmNJaWs3WEc1bWRXNWpkR2x2YmlCamJHRnRjQ2hoTENCdGFXNGdQU0F3TENCdFlYZ2dQU0F4S1NCN1hHNGdJQ0FnY21WMGRYSnVJR0VnUENCdGFXNGdQeUJ0YVc0Z09pQW9ZU0ErSUcxaGVDQS9JRzFoZUNBNklHRXBPMXh1ZlZ4dVkyeGhjM01nUTJGdFpYSmhJSHRjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWh3YjNOcGRHbHZiaXdnYjNCMGFXOXVjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5wZW1VZ1BTQW9NQ3dnZG1Walh6RXVkbVZqS1NncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1GamRIVmhiRkJ2YzJsMGFXOXVJRDBnS0RBc0lIWmxZMTh4TG5abFl5a29LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTBZWEpuWlhSUWIzTnBkR2x2YmlBOUlDZ3dMQ0IyWldOZk1TNTJaV01wS0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WVdOMGRXRnNVMk5oYkdVZ1BTQXhPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuUmhjbWRsZEZOallXeGxJRDBnTVR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWTNSMVlXeFFiM05wZEdsdmJpQTlJSEJ2YzJsMGFXOXVPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuUmhjbWRsZEZCdmMybDBhVzl1SUQwZ2NHOXphWFJwYjI0N1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjNCMGFXOXVjeUE5SUU5aWFtVmpkQzVoYzNOcFoyNG9lMzBzSUVOaGJXVnlZUzVrWldaaGRXeDBUM0IwYVc5dWN5d2diM0IwYVc5dWN5QWhQVDBnYm5Wc2JDQW1KaUJ2Y0hScGIyNXpJQ0U5UFNCMmIybGtJREFnUHlCdmNIUnBiMjV6SURvZ2UzMHBPMXh1SUNBZ0lIMWNiaUFnSUNCblpYUWdjRzl6YVhScGIyNG9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuUmhjbWRsZEZCdmMybDBhVzl1TzF4dUlDQWdJSDFjYmlBZ0lDQnpaWFFnY0c5emFYUnBiMjRvZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTBZWEpuWlhSUWIzTnBkR2x2YmlBOUlIWmhiSFZsTzF4dUlDQWdJSDFjYmlBZ0lDQnpaWFFnY0c5emFYUnBiMjVKYlcxbFpHbGhkR1VvZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWhZM1IxWVd4UWIzTnBkR2x2YmlBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMblJoY21kbGRGQnZjMmwwYVc5dUlEMGdkbUZzZFdVN1hHNGdJQ0FnZlZ4dUlDQWdJR2RsZENCelkyRnNaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVkR0Z5WjJWMFUyTmhiR1U3WEc0Z0lDQWdmVnh1SUNBZ0lITmxkQ0J6WTJGc1pTaDJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5SaGNtZGxkRk5qWVd4bElEMGdZMnhoYlhBb2RtRnNkV1VzSUhSb2FYTXViM0IwYVc5dWN5NXRhVzVUWTJGc1pTd2dkR2hwY3k1dmNIUnBiMjV6TG0xaGVGTmpZV3hsS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjMlYwSUhOallXeGxTVzF0WldScFlYUmxLSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXTjBkV0ZzVTJOaGJHVWdQU0JqYkdGdGNDaDJZV3gxWlN3Z2RHaHBjeTV2Y0hScGIyNXpMbTFwYmxOallXeGxMQ0IwYUdsekxtOXdkR2x2Ym5NdWJXRjRVMk5oYkdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5SaGNtZGxkRk5qWVd4bElEMGdkR2hwY3k1aFkzUjFZV3hUWTJGc1pUdGNiaUFnSUNCOVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1IyVjBJSE5qY21WbGJpQmliM1Z1WkhNZ1ltRnpaV1FnYjI0Z2RHaGxJR04xY25KbGJuUWdZMkZ0WlhKaElIQnZjMmwwYVc5dUlHRnVaQ0J6WTJGc1pWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdkbGRDQmliM1Z1WkhNb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGIzQTZJSFJvYVhNdVlXTjBkV0ZzVUc5emFYUnBiMjR1ZVNBdElDaDBhR2x6TG5OcGVtVXVlU0F2SURJcElDOGdkR2hwY3k1aFkzUjFZV3hUWTJGc1pTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdKdmRIUnZiVG9nZEdocGN5NWhZM1IxWVd4UWIzTnBkR2x2Ymk1NUlDc2dLSFJvYVhNdWMybDZaUzU1SUM4Z01pa2dMeUIwYUdsekxtRmpkSFZoYkZOallXeGxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVm1kRG9nZEdocGN5NWhZM1IxWVd4UWIzTnBkR2x2Ymk1NElDMGdLSFJvYVhNdWMybDZaUzU0SUM4Z01pa2dMeUIwYUdsekxtRmpkSFZoYkZOallXeGxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtbG5hSFE2SUhSb2FYTXVZV04wZFdGc1VHOXphWFJwYjI0dWVDQXJJQ2gwYUdsekxuTnBlbVV1ZUNBdklESXBJQzhnZEdocGN5NWhZM1IxWVd4VFkyRnNaVnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDFjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEYjI1MlpYSjBJR0VnYzJOeVpXVnVJSEJ2YzJsMGFXOXVJSFJ2SUdFZ2QyOXliR1FnY0c5emFYUnBiMjVjYmlBZ0lDQWdLaTljYmlBZ0lDQndiM05wZEdsdmJsUnZWMjl5YkdRb2NHOXphWFJwYjI0cElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1ltOTFibVJ6SUQwZ2RHaHBjeTVpYjNWdVpITTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjJaV05mTVM1MlpXTXVZV1JrS0hzZ2VEb2dZbTkxYm1SekxteGxablFzSUhrNklHSnZkVzVrY3k1MGIzQWdmU3dnZG1Walh6RXVkbVZqTG0xMWJDaHdiM05wZEdsdmJpd2dNU0F2SUhSb2FYTXVjMk5oYkdVcEtUdGNiaUFnSUNCOVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1ZYQmtZWFJsSUdOdmJuUmxlSFFnZEhKaGJuTm1iM0p0Y3lCMGJ5QnRZWFJqYUNCallXMWxjbUVnY0c5emFYUnBiMjRnWVc1a0lITmpZV3hsWEc0Z0lDQWdJQ292WEc0Z0lDQWdaSEpoZHloamIyNTBaWGgwTENCM2FXUjBhQ3dnYUdWcFoyaDBLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMmw2WlNBOUlDZ3dMQ0IyWldOZk1TNTJaV01wS0hkcFpIUm9MQ0JvWldsbmFIUXBPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmtJRDBnZG1Walh6RXVkbVZqTG5OMVlpaDBhR2x6TG1GamRIVmhiRkJ2YzJsMGFXOXVMQ0IwYUdsekxuUmhjbWRsZEZCdmMybDBhVzl1S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWTNSMVlXeFFiM05wZEdsdmJpQTlJSFpsWTE4eExuWmxZeTVoWkdRb2RHaHBjeTV3YjNOcGRHbHZiaXdnZG1Walh6RXVkbVZqTG0xMWJDaGtMQ0IwYUdsekxtOXdkR2x2Ym5NdWJXOTJaVVZoYzJWQmJXOTFiblFwS1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnY3lBOUlHTnNZVzF3S0hSb2FYTXVkR0Z5WjJWMFUyTmhiR1VzSUhSb2FYTXViM0IwYVc5dWN5NXRhVzVUWTJGc1pTd2dkR2hwY3k1dmNIUnBiMjV6TG0xaGVGTmpZV3hsS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWTNSMVlXeFRZMkZzWlNBOUlITWdLeUFvZEdocGN5NWhZM1IxWVd4VFkyRnNaU0F0SUhNcElDb2dkR2hwY3k1dmNIUnBiMjV6TG5OallXeGxSV0Z6WlVGdGIzVnVkRHRjYmlBZ0lDQWdJQ0FnWTI5dWRHVjRkQzV6WlhSVWNtRnVjMlp2Y20wb01Td2dNQ3dnTUN3Z01Td2dNQ3dnTUNrN1hHNGdJQ0FnSUNBZ0lHTnZiblJsZUhRdWRISmhibk5zWVhSbEtDaDBhR2x6TG5OcGVtVXVlQ0F2SURJcElDMGdkR2hwY3k1aFkzUjFZV3hRYjNOcGRHbHZiaTU0SUNvZ2RHaHBjeTVoWTNSMVlXeFRZMkZzWlN3Z0tIUm9hWE11YzJsNlpTNTVJQzhnTWlrZ0xTQjBhR2x6TG1GamRIVmhiRkJ2YzJsMGFXOXVMbmtnS2lCMGFHbHpMbUZqZEhWaGJGTmpZV3hsS1R0Y2JpQWdJQ0FnSUNBZ1kyOXVkR1Y0ZEM1elkyRnNaU2gwYUdsekxtRmpkSFZoYkZOallXeGxMQ0IwYUdsekxtRmpkSFZoYkZOallXeGxLVHRjYmlBZ0lDQjlYRzU5WEc1bGVIQnZjblJ6TG1SbFptRjFiSFFnUFNCRFlXMWxjbUU3WEc1RFlXMWxjbUV1WkdWbVlYVnNkRTl3ZEdsdmJuTWdQU0I3WEc0Z0lDQWdZV3hzYjNkVFkyRnNaVG9nZEhKMVpTeGNiaUFnSUNCdGFXNVRZMkZzWlRvZ01DNDFMRnh1SUNBZ0lHMWhlRk5qWVd4bE9pQTBMRnh1SUNBZ0lHMXZkbVZGWVhObFFXMXZkVzUwT2lBd0xqRXNYRzRnSUNBZ2MyTmhiR1ZGWVhObFFXMXZkVzUwT2lBd0xqRXNYRzU5TzF4dUx5OGpJSE52ZFhKalpVMWhjSEJwYm1kVlVrdzlaR0YwWVRwaGNIQnNhV05oZEdsdmJpOXFjMjl1TzJKaGMyVTJOQ3hsZVVveVdsaEtlbUZYT1hWSmFtOTZURU5LYldGWGVHeEphbTlwWVZjMWExcFlaM1ZoYmsxcFRFTktlbUl6Vm5sWk1sWlRZakk1TUVscWIybEphWGRwWXpJNU1XTnRUbXhqZVVrMlYzbEpkVXhwT1hCaWJWSnNaVU0xTUdONVNtUk1RMHAxV1ZjeGJHTjVTVFpYTVRCelNXMHhhR05JUW5CaWJXUjZTV3B2YVU5NmRFSlJWVVpDVEVOMFJGRlZSVEJSZW5SQ1VWaGtSRTVWVFhOVk1FWkNWWGw0VEZGVlJreE1SVTVDVVZWTmMxRXdSa0pWZVhoR1VWVkdSa3hGWkVKUlZXTnpVakJHUWxKNWVFUlJWVVpFVEVWV1FsRlZWWE5TTUVaQ1VubDRTRkZWUmtoTVJVNUNVVlZOTjFOVlJrUmxSVTF6VkRCR1FsUjVlRVJSVlVaRVRFVmtRbEZWWTNOU01FWkNVbmw0UkZGVlJrUk1SVTVDVVZWTmMxRXdSa0pSZVhoSVVWVkdTRXhGVGtKUlZVMXpVVEJHUWxGNWVFUlJWVVpFVEVWT1FsRlZUWE5STUVaQ1VYbDRTRkZWUmtoTVJXUkNVVlZqYzFFd1JrSlJlWGhFVVZWR1JFeEZUa0pSVlUxelVqQkdRbEo1ZUVSUlZVWkVURVZPUWxGVlRYTlJNRVpDVVhsNFJGRlZSa1JNUlU1Q1VWVk5jMUV3UmtKUmVuUkNVVlZOTTFGNWVFUlJWVVpFVHpCR1FsSlZVWE5VVlVaQ1kxVkpjMVJWUmtKVVZIUktVVmhHUTJWclNYTlhWVVpDWWxWSmMxVlZSa0paVTNoR1VWVkdSa3hGT1VKUlYyUkVUekZHUWxacVJrVk1SazVDVVZWcmMxSXdSa0pWVTNoS1VWVkdRa3hHVGtKUlZXTnpVakJHUWxKVGVFUlJWVVpFVHpGR1FsSlhlRU5NUnpGRFVWVkdha3hGWkVKUlZrVnpVMVZHUWxGVGVGUlJWVVpJVEVWa1FsRlZWWE5STUVaQ1VYcDBVbEZWVlRGUmFYaDBVV3RHUWxsNWVFaFJWVVpTVEVWc1FsRlZSWE5WTUVaQ1VubDRTRkZWUmtaTVJVNUNVVlZOTjFWVlJrWk9WVWx6V2pCS1FsRldZM05TTUVaQ1ZubDRSRkZWUmtSTVJVNUNVVlZOTjFWVlJrWmxSVWx6V2pCS1FsRldZM05TTUVaQ1ZubDRSRkZWUmtSTVJVNUNVVlZOTjFWVlJraFBWVWx6VTFWR1FsTlRlRVJSVlVaRVRFZE9RbEZYVFhOU01FWkNVbmw0VWxGVlJsSk1SVTVDVVZWTk4xVlZSa1JNTUVselUxVkdRbE5UZUVSUlZVWkVURWRPUWxGWFRYTlNNRVpDVW5sNFVsRlZSbEpNUlU1Q1VWVk5OMVZWUmtSTU1FbHpVMVZHUWxOVGVFUlJWVVpFVEVVNVFsRlZPSE5TTUVaQ1VubDRUbEZWUms1TVJVNUNVVlZOYzFSVlJrSlVVM2hFVVZWTmVGRnBlRVpSVlVaR1RFVldRbEV3V1hOVVZVWkNWRk40UkZGVlJrUk1SMDVDVVZkTmMxSlZSa1JqYTBselZEQkdRbFI1ZUdoUlZVWlJURVU1UWxGVk9ITlpNRVpDVlVONFVGRlZSbEJNUldSQ1VWVnJjMUpWUmtKU1UzaEVVVlZPYTB4RlRrSlJWVTAzVTFWR1JGTnBlRVJSVlVaRVR6QnNRbEpWVVhOVFZVWkNWbmw0VWxGVlJsSlBNVVpDVVRKd1EweEZPVUpSVlRoelUxVkdRbE5UZUVSUlZVWkVURWRPUWxGWFRYTlJNRVpDVVhwMFNsRlZUVE5SYVhoRVVWVkdSRTh3YkVKU1ZWRnpVMVZHUWxaNWVGSlJWVVpTVEVWT1FsRlZUWE5UTUVaQ1ZsUjBVbEZWVFRGUmFYaEtVVlZHU2t4RlRrSlJWVTF6V1RCR1FsbDVlRWhSVlVaSVRFVjBRbEZWYzNOUk1FWkNVWHAwU2xGVlRUVlJhWGhFVVZWR1JFOHdiRUpTVlZGelUxVkdRbFo1ZUhCUmEwWkNZVlZKYzFFd1JrSlJlWGhNVVZWR1ZrOHhSa0pSTTBwRVRFVnNRbEZWYTNOUk1FWkNVWGw0YWxGVlJtcE1SV1JDVVZWamMxTXdSa0pUZVhoRVVWVkdSRTh4UmtKUmVsWkRURVZzUWxGVmEzTlJNRVpDVVhsNGFsRlZSbXBNUldSQ1VWVmpjMU13UmtKVGVYaEVVVlZHUkU4d2JFSlJlbXhEVEVWT1FsRlZUVGRUVlVaR1VrTjRTbEZWUmxoTVJYUkNVVlZ6TjFWVlJrUmFRM2hRVVZWR1VFeEZiRUpSVld0elVUQkdRbEY1ZUZoUlZVWllURVZPUWxGVlRUZFRWVVpFVFZWSmMxRXdSa0pSZW5SS1VWVldSVXhGYkVKUlZtTnpVekJHUWxONWVFUlJWVVpFVEVWMFFsRlhSVGRWVlVaRVRsVkpjMU5WUmtKVFUzaEVVVlZHUkV4R1pFSlJWbU56VWpCR1FsSjVlRXhSVlVaTVRFVk9RbEZWVFhOVE1FWkNVM2w0UmxGVlJrWk1SV3hDVVZWcmMxRXdSa0pSZVhoUVVWVkdVRXhGVGtKUlZVMXpWVlZHUWxWVGVFWlJWVVpHVEVWc1FsRlZhM05STUVaQ1VYbDRVRkZWUmxCTVJVNUNVVlZOYzFWVlJrSlZVM2hFVVZWR1JFeEZUa0pSVlUwM1UxVkdSR0ZGV1hOUk1FWkNVWHAwU2xGVlZrVk1SV3hDVVZaamMxa3dSa0paZVhoRVVWVkdSRXhGZEVKUlYwVTNWVlZHUkdOclRYTlRWVVpDVTFONFJGRlZSa1JNUm1SQ1VWWmpjMUl3UmtKU2VYaE1VVlZHVEV4RlRrSlJWVTF6VXpCR1FsTjVlRVpSVlVaR1RFVnNRbEZWYTNOUk1FWkNVWGw0VUZGVlJsQk1SVTVDVVZWTmMxVlZSa0pWVTNoR1VWVkdSa3hGYkVKUlZXdHpVVEJHUWxGNWVGQlJWVVpRVEVWT1FsRlZUWE5WVlVaQ1ZWTjRSRkZWUmtSTVJVNUNVVlZOTjFWVlJrUlBWVlZ6VTFWR1FsTlRlRVJSVlVaRVRFWmtRbEZXWTNOU01FWkNVbmw0U2xGVlJrcE1SVTVDVVZWTmMxWXdSa0pXZVhoRVVWVkdSRTh3YkVKUk0xSkVURVZPUWxGVlRUZFRWVVpHVWtSek4xUXdSa1pTZW5SS1VWVk9TVXhGYkVKUlZtTnpWRlZHUWxSVWRGSlJWVTV0VEVVNVFsRlZPRGRYVlVaRVZFTjRTRkZWUmtoTVJWWkNVVlZWYzFOVlJrSlRVM2hFVVZWR1JFeEhUa0pSVjAxelVUQkdRbEY1ZUVSUlZVWkVURVZrUWxGVlkzTlJNRVpDVVhsNFNsRlZSa3BNUlU1Q1VWVk5jMU5WUmtKVFUzaEVVVlZHUkV4RlRrSlJWVTF6VWpCR1FsSjVlRVJSVlVaRVRFVk9RbEZWVFhOU01FWkNVbmw0U2xGVlJrcE1SVTVDVVZWTmMxWXdSa0pXZW5SYVVWVk9jVkpUZUU1UlZVWk9URVZXUWxGVlZYTlRWVVpDVTFONFJGRlZSa1JNUjA1Q1VWZE5jMUV3UmtKUmVYaEVVVlZHUkV4RlpFSlJWV056VVRCR1FsRjVlRXBSVlVaS1RFVk9RbEZWVFhOVFZVWkNVMU40UkZGVlJrUk1SVTVDVVZWTmMxSXdSa0pTZVhoRVVWVkdSRXhGVGtKUlZVMXpVakJHUWxKNWVFcFJWVVpLVEVWT1FsRlZUWE5XTUVaQ1ZucDBXbEZWVG5kU1UzaEtVVlZHU2t4RlZrSlJWVlZ6VTFWR1FsTlRlRVJSVlVaRVRFZE9RbEZYVFhOUk1FWkNVWGw0UkZGVlJrUk1SV1JDVVZWamMxRXdSa0pSZVhoS1VWVkdTa3hGVGtKUlZVMXpVMVZHUWxOVGVFUlJWVVpFVEVWT1FsRlZUWE5TTUVaQ1VubDRSRkZWUmtSTVJVNUNVVlZOYzFJd1JrSlNlWGhLVVZWR1NreEZUa0pSVlUxelZqQkdRbFo2ZEZwUlZVNXpVbE40VEZGVlJreE1SVlpDVVZWVmMxTlZSa0pUVTNoRVVWVkdSRXhIVGtKUlYwMXpVVEJHUWxGNWVFUlJWVVpFVEVWa1FsRlZZM05STUVaQ1VYbDRTbEZWUmtwTVJVNUNVVlZOYzFOVlJrSlRVM2hFVVZWR1JFeEZUa0pSVlUxelVqQkdRbEo1ZUVSUlZVWkVURVZPUWxGVlRYTlNNRVpDVW5sNFNsRlZSa3BNUlU1Q1VWVk5jMVl3UmtKV2VuUlVVVlZPZDFKVGVFUlJWVVpFVHpCc1FsRXdiM05STUVaQ1VYcDBTbEZWVmtWUGVuUlFVVlZXU0U4d2JFSlJNR3R6V2xWR1FscFRlRVJSVlVaRVRFWkdRbEZYUlRkVlZVWkVZa1ZOYzFSVlJrSlVVM2hPVVZWR1RreEZaRUpSVldOelUxVkdRbE5UZUVSUlZVWkVURVV4UWxGVk1ITlJNRVpDVVhwMFVsRlZWWHBSYVhoUVVWVkdVRXhHVGtKUlZXTnpVVEJHUWxGNWVFaFJWVVpJVEVWT1FsRXhiM05TVlVaQ1VsTjRSRkZWUmtSTVJWWkNVVlZWYzFSVlJrSlVVM2hFVVZWR1JFeEZiRUpSVld0elVsVkdRbEpUZUVSUlZVWkVURVZXUWxGVlZYTlVWVVpDVkZONFJGRlZSa1JNUldSQ1VWVmpjMUpWUmtKU1UzaEdVVlZPY1ZGNWVGUlJWVVpJVEVWT1FsRlZUWE5TTUVaQ1VubDRSRkZWUmtSTVJrWkNVVlpGYzFKVlJrSlNVM2hFVVZWR1JFeEZaRUpSVldOelUxVkdRbE5UZUVSUlZVWkVURVYwUWxGVmMzTlJNRVpDVVhsNFJGRlZUbk5SZVhoRVVWVkdSRTh3YkVKUk1HOXpVVEJHUWxGNmRFcFJWVlpGVDNwMFVGRlZWa2hQTUd4Q1VUQnJjMU5WUmtKVFUzaEVVVlZHUkV4Rk9VSlJWMnhFVEVWV1FsRlZWWE5UTUVaQ1dWTjRSbEZWUmtaTVJURkNVVmROTjFWVlJrUk5WVlZ6VTFWR1FsTlRlRVJSVlVaRVRFVnNRbEZWYTNOU01FWkNVbmw0U2xGVlJrSk1SazVDVVZWamMxSlZSa0pSZVhoTVVWVkdURXhGVmtKUlZWVnpWRlZHUWxSVGVFUlJWVVpFVEVWT1FsRlZUVGRWVlVaR1REQkpjMVJWUmtKVVUzaEVVVlZHUkV4RlpFSlJWV056VlRCR1FsSjVlRVJSVlVaRVRFVmtRbEZWWTNOUk1FWkNVWGw0U2xGVlJrcE1SVTVDVVZWTmMxa3dSa0paZVhoR1VWVkdSa3hGYkVKUlZXdHpVVEJHUWxGNWVHcFJWVVpxVEVWT1FsRlZUWE5STUVaQ1VYcDBVbEZWVFRGU1EzaEtVVlZHU2t4RlRrSlJWVTF6V1RCR1FsbDVlRWhSVlVaSVRFWk9RbEZWWTNOUk1FWkNVWGw0U0ZGVlJraE1SVTVDVVZWTmMxTlZSa0pUVTNoRVVWVkdSRXhHUmtKUlZrVnpVbFZHUWxKVGVGUlJWVVpJVEVWT1FsRlZUWE5TTUVaQ1VubDRSRkZWUmtSTVJVNUNVVlZOYzFKVlJrSlNVM2hLVVZWR1NreEZUa0pSVlUxelZEQkdRbFI1ZUVSUlZVWkVURWRPUWxGWFRYTlJNRVpDVVhsNFJGRlZSa1JNUlU1Q1VWVk5OMVZWUmtaa1JWbHpWRlZHUWxSVGVFUlJWVVpFVEVWa1FsRlZZM05UTUVaQ1UzbDRSRkZWUmtSTVJXeENVVlZyYzFFd1JrSlJlWGhZVVZWR1dFeEZWa0pSVlZWelUxVkdRbE5UZUVSUlZVWkVURVU1UWxGVk9ITlJNRVpDVVhsNFVsRlZSbEpNUlZaQ1VWVlZjMU5WUmtKVFUzaEVVVlZHUkV4Rk9VSlJWVGh6VVRCR1FsRjVlRkpSVlVaU1RFVk9RbEZWVFhOUk1FWkNVWHAwVWxGVlRtOVNhWGhLVVZWR1NreEZUa0pSVlUxelZqQkdRbFo1ZUVoUlZVWklURVZPUWxGVlRYTlNNRVpDVW5sNFJGRlZSa1JNUld4Q1VWVnJjMUV3UmtKUmVYaFlVVlZHV0V4RlpFSlJWV056VVRCR1FsRjVlRVJSVlVaRVRFVmtRbEZWWTNOVFZVWkNVMU40UkZGVlJrUk1SVGxDVVZVNGMxRXdSa0pSZVhoc1VWVkdiRXhGVGtKUlZVMDNWVlZHUms0d1ZYTlVNRVpDVkhsNFJGRlZSa1JNUm14Q1VWWnJjMUV3UmtKUmVYaEVVVlZHUkV4RlZrSlJWVlZ6VVRCR1FsRjVlRVpSVlVaR1RFVk9RbEZWVFhOU1ZVWkNVbE40UkZGVlJrUk1SVlpDVVZWVmMxRXdSa0pSZVhoR1VWVkdSa3hGVGtKUlZVMXpVVEJHUWxGNWVFUlJWVVpFVHpGR1FsRXpXa1JNUlRsQ1VWVTRjMUV3UmtKUmVYaFVVVlZHVkV4RlRrSlJNbGx6VVRCR1FsRjVlRXBSVlVaS1RFVk9RbEZWVFhOVFZVWkNVMU40UkZGVlJrUk1SVTVDVVZWTmMxSXdSa0pTZVhoRVVWVkdSRXhGVGtKUlZVMXpVakJHUWxKNWVFcFJWVVpLVEVWT1FsRlZUWE5aTUVaQ1dYbDRSRkZWUmtSTVJVNUNVVlZOYzFJd1JrSlNlWGhLVVZWR1NreEZUa0pSVlUxelZqQkdRbFo1ZUVaUlZVMHhVa040UkZGVlJrUk1SV3hDVVZWcmMxRXdSa0pSZVhoS1VWVkdTa3hGVGtKUlZVMXpVVEJHUWxGNWVFaFJWVVpJVEVWT1FsRlZUWE5STUVaQ1VYbDRTRkZWUmtoTVJXeENVVlZyYzFFd1JrSlJlWGhxVVZWR2FreEZUa0pSVlUxelVUQkdRbEY1ZUVoUlZVWklURVZzUWxGVmEzTlJNRVpDVVhsNFdGRlZSbGhNUlU1Q1VYcGtSVXhGVGtKUlZVMDNWVlZHUkZKcGVGQlJWVVpRVEVWT1FsRlZUWE5UTUVaQ1UzbDRSRkZWUmtSTVJXeENVVlZyYzFFd1JrSlJlWGhZVVZWR1dFeEZWa0pSVlZWelUxVkdRbE5UZUVSUlZVWkVURVprUWxGV1kzTlJNRVpDVVhsNFJGRlZSa1JQTUd4Q1VUTkNSVXhGVGtKUlZVMDNUekJHUW1KclpFbE1TR3hEVVZjNVNGRjZkRUpSVnpWSVpWVkpjMk5WU2tKUlYwMXpVakJHUW1Fd1NUZFRWVVpFWkVWUmMxWlZSa0pXVTNoR1VWVkdSa3hGYkVKUlZXczNVMVZHUkdGRlNYTlZWVVpDVlZONFJsRlZSa1pNUldSQ1VWVmpOMU5WUmtSWmFYaFNVVlZHVWt4RlZrSlJWVlZ6VVRCR1FsRjZkRXBSVlU1WlRFZE9RbEZYVFhOU1ZVWkNVbE40U0ZGVlJraFBNR3hDVVRJMVEweEhWa0pSVjFWelVsVkdRbEpUZUVoUlZVWklUekJPUWxFelNrTk1SVTVDVVZWTmFXWlJQVDBpWFN3aWJtRnRaWE1pT2x0ZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPSIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gLyoqKioqKi8gKCgpID0+IHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMvdXRpbHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMvdXRpbHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKG1vZHVsZSkgPT4ge1xuXG4vKipcbiAqIEBvdmVydmlldyBBIGxpYnJhcnkgb2YgdXNlZnVsIGZ1bmN0aW9uc1xuICogQGF1dGhvciBHb3Jkb24gTGFycmlnYW5cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gKiBAcGFyYW0ge251bWJlcn0gYSBOdW1iZXIgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgTnVtYmVyIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcD1OdW1iZXIuRVBTSUxPTl0gVGhlIHByZWNpc2lvbiB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBudW1iZXJzIGEgYW5kIGIgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAqL1xuY29uc3QgZmxvYXRFcXVhbHMgPSAoYSwgYiwgcCA9IE51bWJlci5FUFNJTE9OKSA9PiBNYXRoLmFicyhhIC0gYikgPCBwO1xuXG4vKipcbiAqIENsYW1wIGEgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgdG8gY2xhbXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIFRoZSBtaW5pbXVtIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSBUaGUgbWF4aW11bSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBIGNsYW1wZWQgbnVtYmVyXG4gKi9cbmNvbnN0IGNsYW1wID0gKGEsIG1pbiA9IDAsIG1heCA9IDEpID0+IGEgPCBtaW4gPyBtaW4gOiAoYSA+IG1heCA/IG1heCA6IGEpO1xuXG4vKipcbiAqIEdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0IG9mIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBmcmFjdGlvbmFsIHBhcnRcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGZyYWN0aW9uYWwgcGFydCBvZiB0aGUgbnVtYmVyXG4gKi9cbmNvbnN0IGZyYWMgPSBhID0+IGEgPj0gMCA/IGEgLSBNYXRoLmZsb29yKGEpIDogYSAtIE1hdGguY2VpbChhKTtcblxuLyoqXG4gKiBEbyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5jb25zdCBsZXJwID0gKGEsIGIsIGkpID0+IGEgKyAoYiAtIGEpICogaTtcblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxuICovXG5jb25zdCB1bmxlcnAgPSAoYSwgYiwgaSkgPT4gKGkgLSBhKSAvIChiIC0gYSk7XG5cbi8qKlxuICogRG8gYSBiaWxpbmVhciBpbnRlcnBvbGF0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gYzAwIFRvcC1sZWZ0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzEwIFRvcC1yaWdodCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMwMSBCb3R0b20tbGVmdCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMxMSBCb3R0b20tcmlnaHQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeCBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHhcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeSBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHlcbiAqIEByZXR1cm4ge251bWJlcn0gQSBiaWxpbmVhciBpbnRlcnBvbGF0ZWQgdmFsdWVcbiAqL1xuY29uc3QgYmxlcnAgPSAoYzAwLCBjMTAsIGMwMSwgYzExLCBpeCwgaXkpID0+IGxlcnAobGVycChjMDAsIGMxMCwgaXgpLCBsZXJwKGMwMSwgYzExLCBpeCksIGl5KTtcblxuLyoqXG4gKiBSZS1tYXAgYSBudW1iZXIgaSBmcm9tIHJhbmdlIGExLi4uYTIgdG8gYjEuLi5iMlxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIG51bWJlciB0byByZS1tYXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMVxuICogQHBhcmFtIHtudW1iZXJ9IGEyXG4gKiBAcGFyYW0ge251bWJlcn0gYjFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5jb25zdCByZW1hcCA9IChpLCBhMSwgYTIsIGIxLCBiMikgPT4gYjEgKyAoaSAtIGExKSAqIChiMiAtIGIxKSAvIChhMiAtIGExKTtcblxuLyoqXG4gKiBEbyBhIHNtb290aCBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cbmNvbnN0IHNtb290aHN0ZXAgPSAoYSwgYiwgaSkgPT4gbGVycChhLCBiLCAzICogTWF0aC5wb3coaSwgMikgLSAyICogTWF0aC5wb3coaSwgMykpO1xuXG4vKipcbiAqIEdldCBhbiBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlcyBUaGUgYW5nbGUgaW4gZGVncmVlc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICovXG5jb25zdCByYWRpYW5zID0gZGVncmVlcyA9PiAoTWF0aC5QSSAvIDE4MCkgKiBkZWdyZWVzO1xuXG4vKipcbiAqIEdldCBhbiBhbmdsZSBpbiBkZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFucyBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gZGVncmVlc1xuICovXG5jb25zdCBkZWdyZWVzID0gcmFkaWFucyA9PiAoMTgwIC8gTWF0aC5QSSkgKiByYWRpYW5zO1xuXG4vKipcbiAqIEdldCBhIHJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4KVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEV4Y2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcbiAqL1xuY29uc3QgcmFuZG9tQmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuXG4vKipcbiAqIEdldCBhIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKi9cbmNvbnN0IHJhbmRvbUludEJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cbi8qKlxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IFttdT0wLjVdIFRoZSBtZWFuIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpZ21hPTAuNV0gVGhlIHN0YW5kYXJkIGRldmlhdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IFtzYW1wbGVzPTJdIFRoZSBudW1iZXIgb2Ygc2FtcGxlc1xuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcbiAqL1xuY29uc3QgY2x0UmFuZG9tID0gKG11ID0gMC41LCBzaWdtYSA9IDAuNSwgc2FtcGxlcyA9IDIpID0+IHtcbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChsZXQgaSA9IHNhbXBsZXM7IGktLTspIHtcbiAgICB0b3RhbCArPSBNYXRoLnJhbmRvbSgpO1xuICB9XG4gIHJldHVybiBtdSArICh0b3RhbCAtIHNhbXBsZXMgLyAyKSAvIChzYW1wbGVzIC8gMikgKiBzaWdtYTtcbn07XG5cbi8qKlxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBJbmNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXJcbiAqL1xuY29uc3QgY2x0UmFuZG9tSW50ID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKG1pbiArIGNsdFJhbmRvbSgwLjUsIDAuNSwgMikgKiAobWF4ICsgMSAtIG1pbikpO1xuXG4vKipcbiAqIFJldHVybiBhIHdlaWdodGVkIHJhbmRvbSBpbnRlZ2VyXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHcgQW4gYXJyYXkgb2Ygd2VpZ2h0c1xuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbmRleCBmcm9tIHdcbiAqL1xuY29uc3Qgd2VpZ2h0ZWRSYW5kb20gPSB3ID0+IHtcbiAgbGV0IHRvdGFsID0gdy5yZWR1Y2UoKGEsIGkpID0+IGEgKyBpLCAwKSwgbiA9IDA7XG4gIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogdG90YWw7XG4gIHdoaWxlICh0b3RhbCA+IHIpIHtcbiAgICB0b3RhbCAtPSB3W24rK107XG4gIH1cbiAgcmV0dXJuIG4gLSAxO1xufTtcblxuLyoqXG4gKiBBbiBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uXG4gKiBAY2FsbGJhY2sgaW50ZXJwb2xhdGlvbkNhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWUsIHNob3VsZCBiZSBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5cbi8qKlxuICogUmV0dXJuIGFuIGludGVycG9sYXRlZCB2YWx1ZSBmcm9tIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGEgQW4gYXJyYXkgb2YgdmFsdWVzIGludGVycG9sYXRlXG4gKiBAcGFyYW0ge251bWJlcn0gaSBBIG51bWJlciBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcGFyYW0ge2ludGVycG9sYXRpb25DYWxsYmFja30gW2Y9TWF0aC5sZXJwXSBUaGUgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiB0byB1c2VcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbbWluKGEpLCBtYXgoYSldXG4gKi9cbmNvbnN0IGxlcnBBcnJheSA9IChhLCBpLCBmID0gbGVycCkgPT4ge1xuICBjb25zdCBzID0gaSAqIChhLmxlbmd0aCAtIDEpO1xuICBjb25zdCBwID0gY2xhbXAoTWF0aC50cnVuYyhzKSwgMCwgYS5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIGYoYVtwXSB8fCAwLCBhW3AgKyAxXSB8fCAwLCBmcmFjKHMpKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjdG9yc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge251bWJlcn0gYSDiiJkgYlxuICovXG5jb25zdCBkb3QgPSAoYSwgYikgPT4gYS5yZWR1Y2UoKG4sIHYsIGkpID0+IG4gKyB2ICogYltpXSwgMCk7XG5cbi8qKlxuICogR2V0IHRoZSBmYWN0b3JpYWwgb2YgYSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEhXG4gKi9cbmNvbnN0IGZhY3RvcmlhbCA9IGEgPT4ge1xuICBsZXQgcmVzdWx0ID0gMTtcbiAgZm9yIChsZXQgaSA9IDI7IGkgPD0gYTsgaSsrKSB7XG4gICAgcmVzdWx0ICo9IGk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBudW1iZXIgb2YgcGVybXV0YXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHBhcmFtIHtudW1iZXJ9IHJcbiAqIEByZXR1cm4ge251bWJlcn0gblByXG4gKi9cbmNvbnN0IHBlcm11dGF0aW9uID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIGZhY3RvcmlhbChuIC0gcik7XG5cbi8qKlxuICogR2V0IHRoZSBudW1iZXIgb2YgY29tYmluYXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHBhcmFtIHtudW1iZXJ9IHJcbiAqIEByZXR1cm4ge251bWJlcn0gbkNyXG4gKi9cbmNvbnN0IGNvbWJpbmF0aW9uID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIChmYWN0b3JpYWwocikgKiBmYWN0b3JpYWwobiAtIHIpKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIGFycmF5IHZhbHVlc1xuICogQGNhbGxiYWNrIHRpbWVzQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBhcnJheSBpbmRleFxuICogQHJldHVybiB7Kn0gVGhlIGFycmF5IHZhbHVlXG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBsZW5ndGggbiBieSBjYWxsaW5nIGZ1bmN0aW9uIGYoaSkgb24gZWFjaCBlbGVtZW50XG4gKiBAcGFyYW0ge3RpbWVzQ2FsbGJhY2t9IGZcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXk8Kj59XG4gKi9cbmNvbnN0IHRpbWVzID0gKGYsIG4pID0+IEFycmF5KG4pLmZpbGwoMCkubWFwKChfLCBpKSA9PiBmKGkpKTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyBudW1iZXJzIDAtPihuIC0gMSlcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gQW4gYXJyYXkgb2YgaW50ZWdlcnMgMC0+KG4gLSAxKVxuICovXG5jb25zdCByYW5nZSA9IG4gPT4gdGltZXMoaSA9PiBpLCBuKTtcblxuLyoqXG4gKiBaaXAgMiBhcnJheXMgdG9nZXRoZXIsIGkuZS4gKFsxLCAyLCAzXSwgW2EsIGIsIGNdKSA9PiBbWzEsIGFdLCBbMiwgYl0sIFszLCBjXV1cbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn1cbiAqL1xuY29uc3QgemlwID0gKGEsIGIpID0+IGEubWFwKChrLCBpKSA9PiBbaywgYltpXV0pO1xuXG4vKipcbiAqIFJldHVybiBhcnJheVtpXSB3aXRoIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB3cmFwcGluZ1xuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHBvc2l0aXZlbHkvbmVnYXRpdmVseSB3cmFwcGVkIGFycmF5IGluZGV4XG4gKiBAcmV0dXJuIHsqfSBBbiBlbGVtZW50IGZyb20gdGhlIGFycmF5XG4gKi9cbmNvbnN0IGF0ID0gKGEsIGkpID0+IGFbaSA8IDAgPyBhLmxlbmd0aCAtIChNYXRoLmFicyhpICsgMSkgJSBhLmxlbmd0aCkgLSAxIDogaSAlIGEubGVuZ3RoXTtcblxuLyoqXG4gKiBDaG9wIGFuIGFycmF5IGludG8gY2h1bmtzIG9mIHNpemUgblxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNodW5rIHNpemVcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgYXJyYXkgY2h1bmtzXG4gKi9cbmNvbnN0IGNodW5rID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gYS5zbGljZShpICogbiwgaSAqIG4gKyBuKSwgTWF0aC5jZWlsKGEubGVuZ3RoIC8gbikpO1xuXG4vKipcbiAqIFJhbmRvbWx5IHNodWZmbGUgYSBzaGFsbG93IGNvcHkgb2YgYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEByZXR1cm4ge0FycmF5PCo+fSBUaGUgc2h1ZmZsZWQgYXJyYXlcbiAqL1xuY29uc3Qgc2h1ZmZsZSA9IGEgPT4gYS5zbGljZSgpLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG5cbmlmICh0cnVlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZsb2F0RXF1YWxzLFxuICAgIGNsYW1wLFxuICAgIGZyYWMsXG4gICAgbGVycCxcbiAgICB1bmxlcnAsXG4gICAgYmxlcnAsXG4gICAgcmVtYXAsXG4gICAgc21vb3Roc3RlcCxcbiAgICByYWRpYW5zLFxuICAgIGRlZ3JlZXMsXG4gICAgcmFuZG9tQmV0d2VlbixcbiAgICByYW5kb21JbnRCZXR3ZWVuLFxuICAgIGNsdFJhbmRvbSxcbiAgICBjbHRSYW5kb21JbnQsXG4gICAgd2VpZ2h0ZWRSYW5kb20sXG4gICAgbGVycEFycmF5LFxuICAgIGRvdCxcbiAgICBmYWN0b3JpYWwsXG4gICAgcGVybXV0YXRpb24sXG4gICAgY29tYmluYXRpb24sXG4gICAgdGltZXMsXG4gICAgcmFuZ2UsXG4gICAgemlwLFxuICAgIGF0LFxuICAgIGNodW5rLFxuICAgIHNodWZmbGUsXG4gIH07XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdmVjL3ZlYy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovICgobW9kdWxlLCBfX3VudXNlZF93ZWJwYWNrX2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuY29uc3QgeyB0aW1lcywgY2h1bmssIGRvdCB9ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qc1wiKTtcblxuLyoqXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXG4gKi9cblxuLyoqXG4gKiBBIDJkIHZlY3RvclxuICogQHR5cGVkZWYge09iamVjdH0gdmVjXG4gKiBAcHJvcGVydHkge251bWJlcn0geCBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHkgVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfHZlY30gW3hdIFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yLCBvciBhIHZlY3RvciB0byBjb3B5XG4gKiBAcGFyYW0ge251bWJlcn0gW3ldIFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWN9IEEgbmV3IHZlY3RvclxuICogQGV4YW1wbGUgPGNhcHRpb24+VmFyaW91cyB3YXlzIHRvIGluaXRpYWxpc2UgYSB2ZWN0b3I8L2NhcHRpb24+XG4gKiBsZXQgYSA9IHZlYygzLCAyKTsgIC8vICgzLCAyKVxuICogbGV0IGIgPSB2ZWMoNCk7ICAgICAvLyAoNCwgNClcbiAqIGxldCBjID0gdmVjKGEpOyAgICAgLy8gKDMsIDIpXG4gKiBsZXQgZCA9IHZlYygpOyAgICAgIC8vICgwLCAwKVxuICovXG5jb25zdCB2ZWMgPSAoeCwgeSkgPT4gKCF4ICYmICF5ID9cbiAgeyB4OiAwLCB5OiAwIH0gOiAodHlwZW9mIHggPT09ICdvYmplY3QnID9cbiAgICB7IHg6IHgueCB8fCAwLCB5OiB4LnkgfHwgMCB9IDogKHkgPT09IG51bGwgfHwgeSA9PT0gdW5kZWZpbmVkID9cbiAgICAgIHsgeDogeCwgeTogeCB9IDogeyB4OiB4LCB5OiB5IH0pXG4gIClcbik7XG5cbi8qKlxuICogR2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjdG9yIGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGdldCBjb21wb25lbnRzIGZyb21cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRoZSB2ZWN0b3IgY29tcG9uZW50cyBhcyBhbiBhcnJheVxuICovXG52ZWMuY29tcG9uZW50cyA9IGEgPT4gW2EueCwgYS55XTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMSwgMClcbiAqIEByZXR1cm4ge3ZlY30gQSB1bml0IHZlY3RvciAoMSwgMClcbiAqL1xudmVjLnV4ID0gKCkgPT4gdmVjKDEsIDApO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgwLCAxKVxuICogQHJldHVybiB7dmVjfSBBIHVuaXQgdmVjdG9yICgwLCAxKVxuICovXG52ZWMudXkgPSAoKSA9PiB2ZWMoMCwgMSk7XG5cbi8qKlxuICogQWRkIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7dmVjfSBhICsgYlxuICovXG52ZWMuYWRkID0gKGEsIGIpID0+ICh7IHg6IGEueCArIGIueCwgeTogYS55ICsgYi55IH0pO1xuXG4vKipcbiAqIFNjYWxlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlY30gYSAqIGJcbiAqL1xudmVjLm11bCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKiBiLCB5OiBhLnkgKiBiIH0pO1xuXG4vKipcbiAqIFN1YnRyYWN0IHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7dmVjfSBhIC0gYlxuICovXG52ZWMuc3ViID0gKGEsIGIpID0+ICh7IHg6IGEueCAtIGIueCwgeTogYS55IC0gYi55IH0pO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjLmxlbiA9IGEgPT4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSk7XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgdXNpbmcgdGF4aWNhYiBnZW9tZXRyeVxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYy5tYW5oYXR0YW4gPSBhID0+IE1hdGguYWJzKGEueCkgKyBNYXRoLmFicyhhLnkpO1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBub3JtYWxpc2VcbiAqIEByZXR1cm4ge3ZlY30gXmFcbiAqL1xudmVjLm5vciA9IGEgPT4ge1xuICBsZXQgbGVuID0gdmVjLmxlbihhKTtcbiAgcmV0dXJuIGxlbiA/IHsgeDogYS54IC8gbGVuLCB5OiBhLnkgLyBsZW4gfSA6IHZlYygpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBkb3QgcHJvZHVjdCBvZiB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge251bWJlcn0gYSDiiJkgYlxuICovXG52ZWMuZG90ID0gKGEsIGIpID0+IGEueCAqIGIueCArIGEueSAqIGIueTtcblxuLyoqXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIGFuZ2xlIHRvIHJvdGF0ZSBieSwgbWVhc3VyZWQgaW4gcmFkaWFuc1xuICogQHJldHVybiB7dmVjfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYy5yb3QgPSAoYSwgcikgPT4ge1xuICBsZXQgcyA9IE1hdGguc2luKHIpLFxuICAgIGMgPSBNYXRoLmNvcyhyKTtcbiAgcmV0dXJuIHsgeDogYyAqIGEueCAtIHMgKiBhLnksIHk6IHMgKiBhLnggKyBjICogYS55IH07XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZlY3RvcnMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmVjdG9ycyBhIGFuZCBiIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbnZlYy5lcSA9IChhLCBiKSA9PiBhLnggPT09IGIueCAmJiBhLnkgPT09IGIueTtcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgb2YgdmVjdG9yIGEgaW4gcmFkaWFuc1xuICovXG52ZWMucmFkID0gYSA9PiBNYXRoLmF0YW4yKGEueSwgYS54KTtcblxuLyoqXG4gKiBDb3B5IGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGNvcHlcbiAqIEByZXR1cm4ge3ZlY30gQSBjb3B5IG9mIHZlY3RvciBhXG4gKi9cbnZlYy5jcHkgPSBhID0+IHZlYyhhKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3JcbiAqIEBjYWxsYmFjayB2ZWN0b3JNYXBDYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBjb21wb25lbnQgdmFsdWVcbiAqIEBwYXJhbSB7J3gnIHwgJ3knfSBsYWJlbCBUaGUgY29tcG9uZW50IGxhYmVsICh4IG9yIHkpXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgY29tcG9uZW50XG4gKi9cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3IgYW5kIGJ1aWxkIGEgbmV3IHZlY3RvciBmcm9tIHRoZSByZXN1bHRzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN0b3JNYXBDYWxsYmFja30gZiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWN9IFZlY3RvciBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xudmVjLm1hcCA9IChhLCBmKSA9PiAoeyB4OiBmKGEueCwgJ3gnKSwgeTogZihhLnksICd5JykgfSk7XG5cbi8qKlxuICogQ29udmVydCBhIHZlY3RvciBpbnRvIGEgc3RyaW5nXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbnZlYy5zdHIgPSAoYSwgcyA9ICcsICcpID0+IGAke2EueH0ke3N9JHthLnl9YDtcblxuLyoqXG4gKiBBIG1hdHJpeFxuICogQHR5cGVkZWYge09iamVjdH0gbWF0XG4gKiBAcHJvcGVydHkge251bWJlcn0gbSBUaGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIG1hdHJpeFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgbWF0cml4IHZhbHVlc1xuICovXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1hdHJpeFxuICogQHBhcmFtIHtudW1iZXJ9IFttPTRdIFRoZSBudW1iZXIgb2Ygcm93c1xuICogQHBhcmFtIHtudW1iZXJ9IFtuPTRdIFRoZSBudW1iZXIgb2YgY29sdW1uc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbZW50cmllcz1bXV0gTWF0cml4IHZhbHVlcyBpbiByZWFkaW5nIG9yZGVyXG4gKiBAcmV0dXJuIHttYXR9IEEgbmV3IG1hdHJpeFxuICovXG5jb25zdCBtYXQgPSAobSA9IDQsIG4gPSA0LCBlbnRyaWVzID0gW10pID0+ICh7XG4gIG0sIG4sXG4gIGVudHJpZXM6IGVudHJpZXMuY29uY2F0KEFycmF5KG0gKiBuKS5maWxsKDApKS5zbGljZSgwLCBtICogbilcbn0pO1xuXG4vKipcbiAqIEdldCBhbiBpZGVudGl0eSBtYXRyaXggb2Ygc2l6ZSBuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJuIHttYXR9IEFuIGlkZW50aXR5IG1hdHJpeFxuICovXG5tYXQuaWRlbnRpdHkgPSBuID0+IG1hdChuLCBuLCBBcnJheShuICogbikuZmlsbCgwKS5tYXAoKHYsIGkpID0+ICsoTWF0aC5mbG9vcihpIC8gbikgPT09IGkgJSBuKSkpO1xuXG4vKipcbiAqIEdldCBhbiBlbnRyeSBmcm9tIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSB2YWx1ZSBhdCBwb3NpdGlvbiAoaSwgaikgaW4gbWF0cml4IGFcbiAqL1xubWF0LmdldCA9IChhLCBpLCBqKSA9PiBhLmVudHJpZXNbKGogLSAxKSArIChpIC0gMSkgKiBhLm5dO1xuXG4vKipcbiAqIFNldCBhbiBlbnRyeSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IHYgVGhlIHZhbHVlIHRvIHNldCBpbiBtYXRyaXggYVxuICovXG5tYXQuc2V0ID0gKGEsIGksIGosIHYpID0+IHsgYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXSA9IHY7IH07XG5cbi8qKlxuICogR2V0IGEgcm93IGZyb20gYSBtYXRyaXggYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gbSBUaGUgcm93IG9mZnNldFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gUm93IG0gZnJvbSBtYXRyaXggYVxuICovXG5tYXQucm93ID0gKGEsIG0pID0+IHtcbiAgY29uc3QgcyA9IChtIC0gMSkgKiBhLm47XG4gIHJldHVybiBhLmVudHJpZXMuc2xpY2UocywgcyArIGEubik7XG59O1xuXG4vKipcbiAqIEdldCBhIGNvbHVtbiBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IENvbHVtbiBuIGZyb20gbWF0cml4IGFcbiAqL1xubWF0LmNvbCA9IChhLCBuKSA9PiB0aW1lcyhpID0+IG1hdC5nZXQoYSwgKGkgKyAxKSwgbiksIGEubSk7XG5cbi8qKlxuICogQWRkIG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdH0gYSArIGJcbiAqL1xubWF0LmFkZCA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQubWFwKGEsICh2LCBpKSA9PiB2ICsgYi5lbnRyaWVzW2ldKTtcblxuLyoqXG4gKiBTdWJ0cmFjdCBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR9IGEgLSBiXG4gKi9cbm1hdC5zdWIgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiAtIGIuZW50cmllc1tpXSk7XG5cbi8qKlxuICogTXVsdGlwbHkgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IGFiIG9yIGZhbHNlIGlmIHRoZSBtYXRyaWNlcyBjYW5ub3QgYmUgbXVsdGlwbGllZFxuICovXG5tYXQubXVsID0gKGEsIGIpID0+IHtcbiAgaWYgKGEubiAhPT0gYi5tKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCByZXN1bHQgPSBtYXQoYS5tLCBiLm4pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGIubjsgaisrKSB7XG4gICAgICBtYXQuc2V0KHJlc3VsdCwgaSwgaiwgZG90KG1hdC5yb3coYSwgaSksIG1hdC5jb2woYiwgaikpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogU2NhbGUgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxuICogQHJldHVybiB7bWF0fSBhICogYlxuICovXG5tYXQuc2NhbGUgPSAoYSwgYikgPT4gbWF0Lm1hcChhLCB2ID0+IHYgKiBiKTtcblxuLyoqXG4gKiBUcmFuc3Bvc2UgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gdHJhbnNwb3NlXG4gKiBAcmV0dXJuIHttYXR9IEEgdHJhbnNwb3NlZCBtYXRyaXhcbiAqL1xubWF0LnRyYW5zID0gYSA9PiBtYXQoYS5uLCBhLm0sIHRpbWVzKGkgPT4gbWF0LmNvbChhLCAoaSArIDEpKSwgYS5uKS5mbGF0KCkpO1xuXG4vKipcbiAqIEdldCB0aGUgbWlub3Igb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBUaGUgKGksIGopIG1pbm9yIG9mIG1hdHJpeCBhIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubWlub3IgPSAoYSwgaSwgaikgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgZm9yIChsZXQgaWkgPSAxOyBpaSA8PSBhLm07IGlpKyspIHtcbiAgICBpZiAoaWkgPT09IGkpIHsgY29udGludWU7IH1cbiAgICBmb3IgKGxldCBqaiA9IDE7IGpqIDw9IGEubjsgamorKykge1xuICAgICAgaWYgKGpqID09PSBqKSB7IGNvbnRpbnVlOyB9XG4gICAgICBlbnRyaWVzLnB1c2gobWF0LmdldChhLCBpaSwgamopKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdChhLm0gLSAxLCBhLm4gLSAxLCBlbnRyaWVzKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEByZXR1cm4ge251bWJlcnxib29sZWFufSB8YXwgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5kZXQgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYS5tID09PSAxKSB7XG4gICAgcmV0dXJuIGEuZW50cmllc1swXTtcbiAgfVxuICBpZiAoYS5tID09PSAyKSB7XG4gICAgcmV0dXJuIGEuZW50cmllc1swXSAqIGEuZW50cmllc1szXSAtIGEuZW50cmllc1sxXSAqIGEuZW50cmllc1syXTtcbiAgfVxuICBsZXQgdG90YWwgPSAwLCBzaWduID0gMTtcbiAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcbiAgICB0b3RhbCArPSBzaWduICogYS5lbnRyaWVzW2ogLSAxXSAqIG1hdC5kZXQobWF0Lm1pbm9yKGEsIDEsIGopKTtcbiAgICBzaWduICo9IC0xO1xuICB9XG4gIHJldHVybiB0b3RhbDtcbn07XG5cbi8qKlxuICogTm9ybWFsaXNlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIG5vcm1hbGlzZVxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IF5hIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubm9yID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XG4gIHJldHVybiBtYXQubWFwKGEsIGkgPT4gaSAqIGQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGFkanVnYXRlIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBhZGp1Z2F0ZVxuICogQHJldHVybiB7bWF0fSBUaGUgYWRqdWdhdGUgb2YgYVxuICovXG5tYXQuYWRqID0gYSA9PiB7XG4gIGNvbnN0IG1pbm9ycyA9IG1hdChhLm0sIGEubik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcbiAgICAgIG1hdC5zZXQobWlub3JzLCBpLCBqLCBtYXQuZGV0KG1hdC5taW5vcihhLCBpLCBqKSkpO1xuICAgIH1cbiAgfVxuICBjb25zdCBjb2ZhY3RvcnMgPSBtYXQubWFwKG1pbm9ycywgKHYsIGkpID0+IHYgKiAoaSAlIDIgPyAtMSA6IDEpKTtcbiAgcmV0dXJuIG1hdC50cmFucyhjb2ZhY3RvcnMpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGludmVyc2Ugb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gaW52ZXJ0XG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gYV4tMSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGhhcyBubyBpbnZlcnNlXG4gKi9cbm1hdC5pbnYgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBkID0gbWF0LmRldChhKTtcbiAgaWYgKGQgPT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG4gIHJldHVybiBtYXQuc2NhbGUobWF0LmFkaihhKSwgMSAvIGQpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbWF0cmljZXMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbWF0cmljZXMgYSBhbmQgYiBhcmUgaWRlbnRpY2FsLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xubWF0LmVxID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5zdHIoYSkgPT09IG1hdC5zdHIoYik7XG5cbi8qKlxuICogQ29weSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb3B5XG4gKiBAcmV0dXJuIHttYXR9IEEgY29weSBvZiBtYXRyaXggYVxuICovXG5tYXQuY3B5ID0gYSA9PiBtYXQoYS5tLCBhLm4sIFsuLi5hLmVudHJpZXNdKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeFxuICogQGNhbGxiYWNrIG1hdHJpeE1hcENhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGVudHJ5IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGVudHJ5IGluZGV4XG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIGFycmF5IG9mIG1hdHJpeCBlbnRyaWVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgZW50cnlcbiAqL1xuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGVudHJ5IG9mIGEgbWF0cml4IGFuZCBidWlsZCBhIG5ldyBtYXRyaXggZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0cml4TWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJuIHttYXR9IE1hdHJpeCBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xubWF0Lm1hcCA9IChhLCBmKSA9PiBtYXQoYS5tLCBhLm4sIGEuZW50cmllcy5tYXAoZikpO1xuXG4vKipcbiAqIENvbnZlcnQgYSBtYXRyaXggaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW21zPScsICddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciBjb2x1bW5zXG4gKiBAcGFyYW0ge3N0cmluZ30gW25zPSdcXG4nXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3Igcm93c1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbm1hdC5zdHIgPSAoYSwgbXMgPSAnLCAnLCBucyA9ICdcXG4nKSA9PiBjaHVuayhhLmVudHJpZXMsIGEubikubWFwKHIgPT4gci5qb2luKG1zKSkuam9pbihucyk7XG5cbmlmICh0cnVlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0geyB2ZWMsIG1hdCB9O1xufVxuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuLy8gVGhpcyBlbnRyeSBuZWVkIHRvIGJlIHdyYXBwZWQgaW4gYW4gSUlGRSBiZWNhdXNlIGl0IG5lZWQgdG8gYmUgaW4gc3RyaWN0IG1vZGUuXG4oKCkgPT4ge1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgZXhwb3J0cyA9IF9fd2VicGFja19leHBvcnRzX187XG4vKiEqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9pbmRleC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqL1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7IHZhbHVlOiB0cnVlIH0pKTtcbmNvbnN0IHZlY18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhc2VtZW50dW5pdmVyc2UvdmVjICovIFwiLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdmVjL3ZlYy5qc1wiKTtcbmNsYXNzIERlYnVnIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIERlYnVnLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fSk7XG4gICAgICAgIHRoaXMudmFsdWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm1hcmtlcnMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2UgdGhlIGRlYnVnIHJlbmRlcmVyIGZvciBkaXNwbGF5aW5nIHZhbHVlcyBhbmQgbWFya2Vyc1xuICAgICAqL1xuICAgIHN0YXRpYyBpbml0aWFsaXNlKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAoRGVidWcuaW5zdGFuY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEZWJ1ZyBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpc2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgRGVidWcuaW5zdGFuY2UgPSBuZXcgRGVidWcob3B0aW9ucyk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKERlYnVnLmluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGVidWcgbm90IHByb3Blcmx5IGluaXRpYWxpc2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIERlYnVnLmluc3RhbmNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaG93IGEgZGVidWcgdmFsdWVcbiAgICAgKi9cbiAgICBzdGF0aWMgdmFsdWUobGFiZWwsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gRGVidWcuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgaW5zdGFuY2UudmFsdWVzLnNldChsYWJlbCwgT2JqZWN0LmFzc2lnbih7IGxhYmVsLCB2YWx1ZSB9LCBpbnN0YW5jZS5vcHRpb25zLmRlZmF1bHRWYWx1ZSwgb3B0aW9ucykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTaG93IGEgbWFya2VyIGluIHdvcmxkIG9yIHNjcmVlbiBzcGFjZVxuICAgICAqL1xuICAgIHN0YXRpYyBtYXJrZXIobGFiZWwsIHZhbHVlLCBwb3NpdGlvbiwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IERlYnVnLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGluc3RhbmNlLm1hcmtlcnMuc2V0KGxhYmVsLCBPYmplY3QuYXNzaWduKHsgbGFiZWwsIHZhbHVlLCBwb3NpdGlvbiB9LCBpbnN0YW5jZS5vcHRpb25zLmRlZmF1bHRNYXJrZXIsIG9wdGlvbnMpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBkZWJ1ZyB2YWx1ZXMgYW5kIG1hcmtlcnMgb250byBhIGNhbnZhc1xuICAgICAqL1xuICAgIHN0YXRpYyBkcmF3KGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBEZWJ1Zy5nZXRJbnN0YW5jZSgpO1xuICAgICAgICAvLyBEcmF3IHdvcmxkLXNwYWNlIG1hcmtlcnNcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgIGluc3RhbmNlLm1hcmtlcnMuZm9yRWFjaChtYXJrZXIgPT4ge1xuICAgICAgICAgICAgaWYgKG1hcmtlci5zcGFjZSA9PT0gJ3dvcmxkJykge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLmRyYXdNYXJrZXIoY29udGV4dCwgbWFya2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICAvLyBEcmF3IHZhbHVlcyBhbmQgc2NyZWVuLXNwYWNlIG1hcmtlcnNcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICBsZXQgcG9zaXRpb247XG4gICAgICAgIGxldCBsZWZ0WSA9IGluc3RhbmNlLm9wdGlvbnMubWFyZ2luO1xuICAgICAgICBsZXQgcmlnaHRZID0gaW5zdGFuY2Uub3B0aW9ucy5tYXJnaW47XG4gICAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSAoaW5zdGFuY2Uub3B0aW9ucy5saW5lSGVpZ2h0ICsgaW5zdGFuY2Uub3B0aW9ucy5wYWRkaW5nICogMik7XG4gICAgICAgIGluc3RhbmNlLnZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgIHN3aXRjaCAodmFsdWUuYWxpZ24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSAoMCwgdmVjXzEudmVjKShpbnN0YW5jZS5vcHRpb25zLm1hcmdpbiwgbGVmdFkpO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0WSArPSBsaW5lSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gKDAsIHZlY18xLnZlYykoY29udGV4dC5jYW52YXMuY2xpZW50V2lkdGggLSBpbnN0YW5jZS5vcHRpb25zLm1hcmdpbiwgcmlnaHRZKTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRZICs9IGxpbmVIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5zdGFuY2UuZHJhd0xhYmVsKGNvbnRleHQsICh2YWx1ZS5zaG93TGFiZWwgPyBgJHt2YWx1ZS5sYWJlbH06IGAgOiAnJykgKyBgJHt2YWx1ZS52YWx1ZX1gLCBwb3NpdGlvbiwgdmFsdWUuYWxpZ24sIChfYSA9IHZhbHVlLnBhZGRpbmcpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGluc3RhbmNlLm9wdGlvbnMucGFkZGluZywgKF9iID0gdmFsdWUuZm9udCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogaW5zdGFuY2Uub3B0aW9ucy5mb250LCAoX2MgPSB2YWx1ZS5mb3JlZ3JvdW5kQ29sb3VyKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBpbnN0YW5jZS5vcHRpb25zLmZvcmVncm91bmRDb2xvdXIsIChfZCA9IHZhbHVlLmJhY2tncm91bmRDb2xvdXIpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IGluc3RhbmNlLm9wdGlvbnMuYmFja2dyb3VuZENvbG91cik7XG4gICAgICAgIH0pO1xuICAgICAgICBpbnN0YW5jZS5tYXJrZXJzLmZvckVhY2gobWFya2VyID0+IHtcbiAgICAgICAgICAgIGlmIChtYXJrZXIuc3BhY2UgPT09ICdzY3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuZHJhd01hcmtlcihjb250ZXh0LCBtYXJrZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIC8vIENsZWFyIHZhbHVlcyBhbmQgbWFya2VycyByZWFkeSBmb3IgbmV4dCBmcmFtZVxuICAgICAgICBpbnN0YW5jZS52YWx1ZXMuY2xlYXIoKTtcbiAgICAgICAgaW5zdGFuY2UubWFya2Vycy5jbGVhcigpO1xuICAgIH1cbiAgICBkcmF3TWFya2VyKGNvbnRleHQsIG1hcmtlcikge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSAoX2EgPSBtYXJrZXIucG9zaXRpb24pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICgwLCB2ZWNfMS52ZWMpKCk7XG4gICAgICAgIGlmIChtYXJrZXIuc2hvd0xhYmVsIHx8IG1hcmtlci5zaG93VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0xhYmVsKGNvbnRleHQsIChtYXJrZXIuc2hvd0xhYmVsID8gYCR7bWFya2VyLmxhYmVsfTogYCA6ICcnKSArIChtYXJrZXIuc2hvd1ZhbHVlID8gYCR7bWFya2VyLnZhbHVlfWAgOiAnJyksIHZlY18xLnZlYy5hZGQocG9zaXRpb24gIT09IG51bGwgJiYgcG9zaXRpb24gIT09IHZvaWQgMCA/IHBvc2l0aW9uIDogKDAsIHZlY18xLnZlYykoKSwgbWFya2VyLmxhYmVsT2Zmc2V0KSwgJ2xlZnQnLCAoX2IgPSBtYXJrZXIucGFkZGluZykgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogdGhpcy5vcHRpb25zLnBhZGRpbmcsIChfYyA9IG1hcmtlci5mb250KSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiB0aGlzLm9wdGlvbnMuZm9udCwgKF9kID0gbWFya2VyLmZvcmVncm91bmRDb2xvdXIpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IHRoaXMub3B0aW9ucy5mb3JlZ3JvdW5kQ29sb3VyLCAoX2UgPSBtYXJrZXIuYmFja2dyb3VuZENvbG91cikgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvdXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXJrZXIuc2hvd01hcmtlcikge1xuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbnRleHQuZmlsbFN0eWxlID0gbWFya2VyLm1hcmtlckNvbG91cjtcbiAgICAgICAgICAgIHN3aXRjaCAobWFya2VyLm1hcmtlclN0eWxlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0Nyb3NzKGNvbnRleHQsIHBvc2l0aW9uLCBtYXJrZXIubWFya2VyU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdQbHVzKGNvbnRleHQsIHBvc2l0aW9uLCBtYXJrZXIubWFya2VyU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdEb3QoY29udGV4dCwgcG9zaXRpb24sIG1hcmtlci5tYXJrZXJTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgfVxuICAgIGRyYXdMYWJlbChjb250ZXh0LCB0ZXh0LCBwb3NpdGlvbiwgYWxpZ24sIHBhZGRpbmcsIGZvbnQsIGZvcmVncm91bmRDb2xvdXIsIGJhY2tncm91bmRDb2xvdXIpIHtcbiAgICAgICAgY29udGV4dC5zYXZlKCk7XG4gICAgICAgIGNvbnRleHQuZm9udCA9IGZvbnQ7XG4gICAgICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRTaXplID0ge1xuICAgICAgICAgICAgd2lkdGg6IGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGggKyBwYWRkaW5nICogMixcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5vcHRpb25zLmxpbmVIZWlnaHQgKyBwYWRkaW5nICogMixcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgeCA9IGFsaWduID09PSAncmlnaHQnID8gKHBvc2l0aW9uLnggLSBiYWNrZ3JvdW5kU2l6ZS53aWR0aCkgOiBwb3NpdGlvbi54O1xuICAgICAgICAvLyBEcmF3IGJhY2tncm91bmRcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBiYWNrZ3JvdW5kQ29sb3VyO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHggLSBwYWRkaW5nLCBwb3NpdGlvbi55IC0gcGFkZGluZywgYmFja2dyb3VuZFNpemUud2lkdGgsIGJhY2tncm91bmRTaXplLmhlaWdodCk7XG4gICAgICAgIC8vIERyYXcgdGV4dFxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGZvcmVncm91bmRDb2xvdXI7XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQodGV4dCwgeCwgcG9zaXRpb24ueSk7XG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgIH1cbiAgICBkcmF3Q3Jvc3MoY29udGV4dCwgcG9zaXRpb24sIHNpemUpIHtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgY29uc3QgaGFsZlNpemUgPSBzaXplIC8gMjtcbiAgICAgICAgY29udGV4dC5tb3ZlVG8ocG9zaXRpb24ueCAtIGhhbGZTaXplLCBwb3NpdGlvbi55IC0gaGFsZlNpemUpO1xuICAgICAgICBjb250ZXh0LmxpbmVUbyhwb3NpdGlvbi54ICsgaGFsZlNpemUsIHBvc2l0aW9uLnkgKyBoYWxmU2l6ZSk7XG4gICAgICAgIGNvbnRleHQubW92ZVRvKHBvc2l0aW9uLnggLSBoYWxmU2l6ZSwgcG9zaXRpb24ueSArIGhhbGZTaXplKTtcbiAgICAgICAgY29udGV4dC5saW5lVG8ocG9zaXRpb24ueCArIGhhbGZTaXplLCBwb3NpdGlvbi55IC0gaGFsZlNpemUpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cbiAgICBkcmF3UGx1cyhjb250ZXh0LCBwb3NpdGlvbiwgc2l6ZSkge1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb25zdCBoYWxmU2l6ZSA9IHNpemUgLyAyO1xuICAgICAgICBjb250ZXh0Lm1vdmVUbyhwb3NpdGlvbi54LCBwb3NpdGlvbi55IC0gaGFsZlNpemUpO1xuICAgICAgICBjb250ZXh0LmxpbmVUbyhwb3NpdGlvbi54LCBwb3NpdGlvbi55ICsgaGFsZlNpemUpO1xuICAgICAgICBjb250ZXh0Lm1vdmVUbyhwb3NpdGlvbi54IC0gaGFsZlNpemUsIHBvc2l0aW9uLnkpO1xuICAgICAgICBjb250ZXh0LmxpbmVUbyhwb3NpdGlvbi54ICsgaGFsZlNpemUsIHBvc2l0aW9uLnkpO1xuICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIH1cbiAgICBkcmF3RG90KGNvbnRleHQsIHBvc2l0aW9uLCBzaXplKSB7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQuYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUgLyAyLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIH1cbn1cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRGVidWc7XG5EZWJ1Zy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBtYXJnaW46IDEwLFxuICAgIHBhZGRpbmc6IDQsXG4gICAgZm9udDogJzEwcHQgTHVjaWRhIENvbnNvbGUsIG1vbm9zcGFjZScsXG4gICAgbGluZUhlaWdodDogMTIsXG4gICAgZm9yZWdyb3VuZENvbG91cjogJyNmZmYnLFxuICAgIGJhY2tncm91bmRDb2xvdXI6ICcjMzMzJyxcbiAgICBkZWZhdWx0VmFsdWU6IHtcbiAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgc2hvd0xhYmVsOiB0cnVlLFxuICAgIH0sXG4gICAgZGVmYXVsdE1hcmtlcjoge1xuICAgICAgICBzaG93TGFiZWw6IHRydWUsXG4gICAgICAgIHNob3dWYWx1ZTogdHJ1ZSxcbiAgICAgICAgc2hvd01hcmtlcjogdHJ1ZSxcbiAgICAgICAgbWFya2VyU2l6ZTogNixcbiAgICAgICAgbWFya2VyU3R5bGU6ICd4JyxcbiAgICAgICAgbWFya2VyQ29sb3VyOiAnI2NjYycsXG4gICAgICAgIHNwYWNlOiAnd29ybGQnLFxuICAgICAgICBsYWJlbE9mZnNldDogKDAsIHZlY18xLnZlYykoMTApLFxuICAgIH0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEN0RFFVRTBRenRCUVhsRk5VTXNUVUZCY1VJc1MwRkJTenRKUVdkRGVFSXNXVUZCYjBJc1QwRkJLMEk3VVVGRGFrUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1kwRkJZeXhGUVVGRkxFOUJRVThzWVVGQlVDeFBRVUZQTEdOQlFWQXNUMEZCVHl4SFFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRE8xRkJRM1JGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hIUVVGSExFVkJRWE5DTEVOQlFVTTdVVUZETlVNc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVkQlFVY3NSVUZCZFVJc1EwRkJRenRKUVVOb1JDeERRVUZETzBsQlJVUTdPMDlCUlVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEZWQlFXbERMRVZCUVVVN1VVRkRNVVFzU1VGQlNTeExRVUZMTEVOQlFVTXNVVUZCVVN4TFFVRkxMRk5CUVZNc1JVRkJSVHRaUVVOb1F5eE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRzlEUVVGdlF5eERRVUZETEVOQlFVTTdVMEZEZGtRN1VVRkRSQ3hMUVVGTExFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8wbEJRM1JETEVOQlFVTTdTVUZGVHl4TlFVRk5MRU5CUVVNc1YwRkJWenRSUVVONFFpeEpRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRlJMRXRCUVVzc1UwRkJVeXhGUVVGRk8xbEJRMmhETEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1owTkJRV2RETEVOQlFVTXNRMEZCUXp0VFFVTnVSRHRSUVVWRUxFOUJRVThzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXp0SlFVTjRRaXhEUVVGRE8wbEJSVVE3TzA5QlJVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVOcVFpeExRVUZoTEVWQlEySXNTMEZCYzBJc1JVRkRkRUlzVDBGQk5rSTdVVUZGTjBJc1RVRkJUU3hSUVVGUkxFZEJRVWNzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUlhKRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hOUVVGTkxFTkJRVU1zVFVGQlRTeERRVU4wUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVVzUlVGRGFFSXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFVkJRemRDTEU5QlFVOHNRMEZEVWl4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wbEJSVVE3TzA5QlJVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVOc1FpeExRVUZoTEVWQlEySXNTMEZCYzBJc1JVRkRkRUlzVVVGQllTeEZRVU5pTEU5QlFUaENPMUZCUlRsQ0xFMUJRVTBzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRSUVVWeVF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZEZGtNc1JVRkJSU3hMUVVGTExFVkJRVVVzUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlN4RlFVTXhRaXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNSVUZET1VJc1QwRkJUeXhEUVVOU0xFTkJRVU1zUTBGQlF6dEpRVU5NTEVOQlFVTTdTVUZGUkRzN1QwRkZSenRKUVVOSkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCYVVNN1VVRkRiRVFzVFVGQlRTeFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJSWEpETERKQ1FVRXlRanRSUVVNelFpeFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRaaXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSVHRaUVVOb1F5eEpRVUZKTEUxQlFVMHNRMEZCUXl4TFFVRkxMRXRCUVVzc1QwRkJUeXhGUVVGRk8yZENRVU0xUWl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0aFFVTjBRenRSUVVOSUxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEwZ3NUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJSV3hDTEhWRFFVRjFRenRSUVVOMlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRaaXhQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRka01zU1VGQlNTeFJRVUZoTEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRjRU1zU1VGQlNTeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRGNrTXNUVUZCVFN4VlFVRlZMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTm9SaXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHM3V1VGRE9VSXNVVUZCVVN4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRk8yZENRVU51UWl4TFFVRkxMRTFCUVUwN2IwSkJRMVFzVVVGQlVTeEhRVUZITEVsQlFVRXNVMEZCUnl4RlFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMjlDUVVNdlF5eExRVUZMTEVsQlFVa3NWVUZCVlN4RFFVRkRPMjlDUVVOd1FpeE5RVUZOTzJkQ1FVTlNMRXRCUVVzc1QwRkJUenR2UWtGRFZpeFJRVUZSTEVkQlFVY3NTVUZCUVN4VFFVRkhMRVZCUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdiMEpCUXpkRkxFMUJRVTBzU1VGQlNTeFZRVUZWTEVOQlFVTTdiMEpCUTNKQ0xFMUJRVTA3WVVGRFZEdFpRVU5FTEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUTJoQ0xFOUJRVThzUlVGRFVDeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEV0QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkRPVVFzVVVGQlVTeEZRVU5TTEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUTFnc1RVRkJRU3hMUVVGTExFTkJRVU1zVDBGQlR5eHRRMEZCU1N4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGRGVrTXNUVUZCUVN4TFFVRkxMRU5CUVVNc1NVRkJTU3h0UTBGQlNTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkRia01zVFVGQlFTeExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xHMURRVUZKTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVWQlF6TkVMRTFCUVVFc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4dFEwRkJTU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEdkQ1FVRm5RaXhEUVVNMVJDeERRVUZETzFGQlEwb3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRTQ3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSVHRaUVVOb1F5eEpRVUZKTEUxQlFVMHNRMEZCUXl4TFFVRkxMRXRCUVVzc1VVRkJVU3hGUVVGRk8yZENRVU0zUWl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0aFFVTjBRenRSUVVOSUxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEwZ3NUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xRkJSV3hDTEdkRVFVRm5SRHRSUVVOb1JDeFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRM2hDTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03U1VGRE0wSXNRMEZCUXp0SlFVVlBMRlZCUVZVc1EwRkJReXhQUVVGcFF5eEZRVUZGTEUxQlFXMUNPenRSUVVOMlJTeFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1VVRkRaaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eE5RVUZCTEUxQlFVMHNRMEZCUXl4UlFVRlJMRzFEUVVGSkxFbEJRVUVzVTBGQlJ5eEhRVUZGTEVOQlFVTTdVVUZETVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eEpRVUZKTEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVN1dVRkRlRU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZEV2l4UFFVRlBMRVZCUTFBc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUXpOR0xGTkJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4aFFVRlNMRkZCUVZFc1kwRkJVaXhSUVVGUkxFZEJRVWtzU1VGQlFTeFRRVUZITEVkQlFVVXNSVUZCUlN4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRemxETEUxQlFVMHNSVUZEVGl4TlFVRkJMRTFCUVUwc1EwRkJReXhQUVVGUExHMURRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVOMFF5eE5RVUZCTEUxQlFVMHNRMEZCUXl4SlFVRkpMRzFEUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVTm9ReXhOUVVGQkxFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc2JVTkJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUlVGRGVFUXNUVUZCUVN4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEcxRFFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUTNwRUxFTkJRVU03VTBGRFNEdFJRVU5FTEVsQlFVa3NUVUZCVFN4RFFVRkRMRlZCUVZVc1JVRkJSVHRaUVVOeVFpeFBRVUZQTEVOQlFVTXNVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOMFFpeFBRVUZQTEVOQlFVTXNWMEZCVnl4SFFVRkhMRTlCUVU4c1EwRkJReXhUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETEZsQlFWa3NRMEZCUXp0WlFVTTVSQ3hSUVVGUkxFMUJRVTBzUTBGQlF5eFhRVUZYTEVWQlFVVTdaMEpCUXpGQ0xFdEJRVXNzUjBGQlJ6dHZRa0ZEVGl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVWQlFVVXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8yOUNRVU55UkN4TlFVRk5PMmRDUVVOU0xFdEJRVXNzUjBGQlJ6dHZRa0ZEVGl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVWQlFVVXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8yOUNRVU53UkN4TlFVRk5PMmRDUVVOU0xFdEJRVXNzUjBGQlJ6dHZRa0ZEVGl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVWQlFVVXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8yOUNRVU51UkN4TlFVRk5PMkZCUTFRN1UwRkRSanRSUVVORUxFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0SlFVTndRaXhEUVVGRE8wbEJSVThzVTBGQlV5eERRVU5tTEU5QlFXbERMRVZCUTJwRExFbEJRVmtzUlVGRFdpeFJRVUZoTEVWQlEySXNTMEZCZFVJc1JVRkRka0lzVDBGQlpTeEZRVU5tTEVsQlFWa3NSVUZEV2l4blFrRkJkMElzUlVGRGVFSXNaMEpCUVhkQ08xRkJSWGhDTEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVObUxFOUJRVThzUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMUZCUTNCQ0xFOUJRVThzUTBGQlF5eFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRPMUZCUXpkQ0xFMUJRVTBzWTBGQll5eEhRVUZITzFsQlEzSkNMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhQUVVGUExFZEJRVWNzUTBGQlF6dFpRVU53UkN4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVkQlFVY3NUMEZCVHl4SFFVRkhMRU5CUVVNN1UwRkRPVU1zUTBGQlF6dFJRVU5HTEUxQlFVMHNRMEZCUXl4SFFVRkhMRXRCUVVzc1MwRkJTeXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhqUVVGakxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRkwwVXNhMEpCUVd0Q08xRkJRMnhDTEU5QlFVOHNRMEZCUXl4VFFVRlRMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdVVUZEY2tNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGRFpDeERRVUZETEVkQlFVY3NUMEZCVHl4RlFVTllMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzVDBGQlR5eEZRVU53UWl4alFVRmpMRU5CUVVNc1MwRkJTeXhGUVVOd1FpeGpRVUZqTEVOQlFVTXNUVUZCVFN4RFFVTjBRaXhEUVVGRE8xRkJSVVlzV1VGQldUdFJRVU5hTEU5QlFVOHNRMEZCUXl4VFFVRlRMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdVVUZEY2tNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU4wUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03U1VGRGNFSXNRMEZCUXp0SlFVVlBMRk5CUVZNc1EwRkJReXhQUVVGcFF5eEZRVUZGTEZGQlFXRXNSVUZCUlN4SlFVRlpPMUZCUXpsRkxFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0UlFVTndRaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUXpGQ0xFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVNM1JDeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU03VVVGRE4wUXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eEhRVUZITEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlF6ZEVMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTTNSQ3hQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVTTdTVUZEYmtJc1EwRkJRenRKUVVWUExGRkJRVkVzUTBGQlF5eFBRVUZwUXl4RlFVRkZMRkZCUVdFc1JVRkJSU3hKUVVGWk8xRkJRemRGTEU5QlFVOHNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVOd1FpeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRekZDTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRMnhFTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRMnhFTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhFTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhFTEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRenRKUVVOdVFpeERRVUZETzBsQlJVOHNUMEZCVHl4RFFVRkRMRTlCUVdsRExFVkJRVVVzVVVGQllTeEZRVUZGTEVsQlFWazdVVUZETlVVc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzFGQlEzQkNMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFbEJRVWtzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZET1VRc1QwRkJUeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzBsQlEycENMRU5CUVVNN08wRkJPVTlJTEhkQ1FTdFBRenRCUVRWUGVVSXNiMEpCUVdNc1IwRkJhVUk3U1VGRGNrUXNUVUZCVFN4RlFVRkZMRVZCUVVVN1NVRkRWaXhQUVVGUExFVkJRVVVzUTBGQlF6dEpRVU5XTEVsQlFVa3NSVUZCUlN4blEwRkJaME03U1VGRGRFTXNWVUZCVlN4RlFVRkZMRVZCUVVVN1NVRkRaQ3huUWtGQlowSXNSVUZCUlN4TlFVRk5PMGxCUTNoQ0xHZENRVUZuUWl4RlFVRkZMRTFCUVUwN1NVRkRlRUlzV1VGQldTeEZRVUZGTzFGQlExb3NTMEZCU3l4RlFVRkZMRTFCUVUwN1VVRkRZaXhUUVVGVExFVkJRVVVzU1VGQlNUdExRVU5vUWp0SlFVTkVMR0ZCUVdFc1JVRkJSVHRSUVVOaUxGTkJRVk1zUlVGQlJTeEpRVUZKTzFGQlEyWXNVMEZCVXl4RlFVRkZMRWxCUVVrN1VVRkRaaXhWUVVGVkxFVkJRVVVzU1VGQlNUdFJRVU5vUWl4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVOaUxGZEJRVmNzUlVGQlJTeEhRVUZITzFGQlEyaENMRmxCUVZrc1JVRkJSU3hOUVVGTk8xRkJRM0JDTEV0QlFVc3NSVUZCUlN4UFFVRlBPMUZCUTJRc1YwRkJWeXhGUVVGRkxFbEJRVUVzVTBGQlJ5eEZRVUZETEVWQlFVVXNRMEZCUXp0TFFVTnlRanREUVVOR0xFTkJRVU1pZlE9PVxufSkoKTtcblxuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX2V4cG9ydHNfXztcbi8qKioqKiovIH0pKClcbjtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3T3pzN096czdPenRCUTFaQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WlFVRlpMRk5CUVZNN1FVRkRja0k3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNXVUZCV1N4UlFVRlJPMEZCUTNCQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1VVRkJVVHRCUVVOdVFpeFpRVUZaTEZGQlFWRTdRVUZEY0VJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzV1VGQldTeFJRVUZSTzBGQlEzQkNPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGbEJRVmtzVVVGQlVUdEJRVU53UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WlFVRlpMRkZCUVZFN1FVRkRjRUk3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WlFVRlpPMEZCUTFvN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzV1VGQldTeFJRVUZSTzBGQlEzQkNPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhaUVVGWkxGRkJRVkU3UVVGRGNFSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmxCUVZrc1VVRkJVVHRCUVVOd1FqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGbEJRVmtzVVVGQlVUdEJRVU53UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZsQlFWa3NVVUZCVVR0QlFVTndRanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRkZCUVZFN1FVRkRia0lzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmRCUVZjc1VVRkJVVHRCUVVOdVFpeFpRVUZaTEZGQlFWRTdRVUZEY0VJN1FVRkRRVHRCUVVOQk8wRkJRMEVzZDBKQlFYZENMRWxCUVVrN1FVRkROVUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVVVGQlVUdEJRVU51UWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzV1VGQldTeFJRVUZSTzBGQlEzQkNPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NaVUZCWlR0QlFVTXhRaXhaUVVGWkxGRkJRVkU3UVVGRGNFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVVVGQlVUdEJRVU51UWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmxCUVZrc1VVRkJVVHRCUVVOd1FqczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhsUVVGbE8wRkJRekZDTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExIVkNRVUYxUWp0QlFVTnNReXhaUVVGWkxGRkJRVkU3UVVGRGNFSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMR1ZCUVdVN1FVRkRNVUlzVjBGQlZ5eGxRVUZsTzBGQlF6RkNMRmxCUVZrc1VVRkJVVHRCUVVOd1FqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExGRkJRVkU3UVVGRGJrSXNXVUZCV1N4UlFVRlJPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CTEd0Q1FVRnJRaXhSUVVGUk8wRkJRekZDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZsQlFWa3NVVUZCVVR0QlFVTndRanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRkZCUVZFN1FVRkRia0lzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmxCUVZrc1VVRkJVVHRCUVVOd1FqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVVVGQlVUdEJRVU51UWl4WlFVRlpMRWRCUVVjN1FVRkRaanM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4bFFVRmxPMEZCUXpGQ0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WlFVRlpPMEZCUTFvN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGbEJRVmtzWlVGQlpUdEJRVU16UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEZWQlFWVTdRVUZEY2tJc1YwRkJWeXhWUVVGVk8wRkJRM0pDTEZsQlFWazdRVUZEV2p0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEZWQlFWVTdRVUZEY2tJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZsQlFWa3NSMEZCUnp0QlFVTm1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NWVUZCVlR0QlFVTnlRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNXVUZCV1N4cFFrRkJhVUk3UVVGRE4wSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFZRVUZWTzBGQlEzSkNMRmxCUVZrc1ZVRkJWVHRCUVVOMFFqdEJRVU5CT3p0QlFVVkJMRWxCUVVrc1NVRkJOa0k3UVVGRGFrTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN1FVTm9VMEVzVVVGQlVTeHZRa0ZCYjBJc1JVRkJSU3h0UWtGQlR5eERRVUZETEdkR1FVRjVRanM3UVVGRkwwUTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEdGQlFXRXNVVUZCVVR0QlFVTnlRaXhqUVVGakxGRkJRVkU3UVVGRGRFSXNZMEZCWXl4UlFVRlJPMEZCUTNSQ096dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRmxCUVZrN1FVRkRka0lzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmxCUVZrc1MwRkJTenRCUVVOcVFqdEJRVU5CTEhWQ1FVRjFRanRCUVVOMlFpeDFRa0ZCZFVJN1FVRkRka0lzZFVKQlFYVkNPMEZCUTNaQ0xIVkNRVUYxUWp0QlFVTjJRanRCUVVOQk8wRkJRMEVzU1VGQlNTeGhRVUZoTzBGQlEycENMRTFCUVUwc01rSkJRVEpDTzBGQlEycERMRkZCUVZFc1lVRkJZU3hKUVVGSkxGbEJRVms3UVVGRGNrTTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eExRVUZMTzBGQlEyaENMRmxCUVZrc1pVRkJaVHRCUVVNelFqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3haUVVGWkxFdEJRVXM3UVVGRGFrSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzV1VGQldTeExRVUZMTzBGQlEycENPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4TFFVRkxPMEZCUTJwQ08wRkJRMEVzZFVKQlFYVkNMRFJDUVVFMFFqczdRVUZGYmtRN1FVRkRRVHRCUVVOQkxGZEJRVmNzUzBGQlN6dEJRVU5vUWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzV1VGQldTeExRVUZMTzBGQlEycENPMEZCUTBFc2RVSkJRWFZDTEhkQ1FVRjNRanM3UVVGRkwwTTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFhRVUZYTEV0QlFVczdRVUZEYUVJc1dVRkJXU3hMUVVGTE8wRkJRMnBDTzBGQlEwRXNkVUpCUVhWQ0xEUkNRVUUwUWpzN1FVRkZia1E3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhaUVVGWkxGRkJRVkU3UVVGRGNFSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eExRVUZMTzBGQlEyaENMRmxCUVZrc1VVRkJVVHRCUVVOd1FqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4TFFVRkxPMEZCUTJwQ08wRkJRMEU3UVVGRFFUdEJRVU5CTEdsQ1FVRnBRaXcyUWtGQk5rSTdRVUZET1VNN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4UlFVRlJPMEZCUTNCQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1dVRkJXU3hMUVVGTE8wRkJRMnBDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1YwRkJWenRCUVVOWU96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRXRCUVVzN1FVRkRhRUlzVjBGQlZ5eExRVUZMTzBGQlEyaENMRmxCUVZrc1UwRkJVenRCUVVOeVFqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4UlFVRlJPMEZCUTNCQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFpRVUZaTEV0QlFVczdRVUZEYWtJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRkZCUVZFN1FVRkRia0lzVjBGQlZ5eFhRVUZYTzBGQlEzUkNMRmxCUVZrc1VVRkJVVHRCUVVOd1FqczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhMUVVGTE8wRkJRMmhDTEZkQlFWY3NiVUpCUVcxQ08wRkJRemxDTEZsQlFWa3NTMEZCU3p0QlFVTnFRanRCUVVOQkxIVkNRVUYxUWl4blEwRkJaME03TzBGQlJYWkVPMEZCUTBFN1FVRkRRU3hYUVVGWExFdEJRVXM3UVVGRGFFSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGbEJRVmtzVVVGQlVUdEJRVU53UWp0QlFVTkJMRGhDUVVFNFFpeEpRVUZKTEVWQlFVVXNSVUZCUlN4RlFVRkZMRWxCUVVrN08wRkJSVFZETzBGQlEwRTdRVUZEUVN4aFFVRmhMRkZCUVZFN1FVRkRja0lzWTBGQll5eFJRVUZSTzBGQlEzUkNMR05CUVdNc1VVRkJVVHRCUVVOMFFpeGpRVUZqTEdWQlFXVTdRVUZETjBJN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4bFFVRmxPMEZCUXpGQ0xGbEJRVmtzUzBGQlN6dEJRVU5xUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03TzBGQlJVUTdRVUZEUVR0QlFVTkJMRmRCUVZjc1VVRkJVVHRCUVVOdVFpeFpRVUZaTEV0QlFVczdRVUZEYWtJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4TFFVRkxPMEZCUTJoQ0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzV1VGQldTeFJRVUZSTzBGQlEzQkNPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGZEJRVmNzVVVGQlVUdEJRVU51UWp0QlFVTkJMRFJDUVVFMFFqczdRVUZGTlVJN1FVRkRRVHRCUVVOQkxGZEJRVmNzUzBGQlN6dEJRVU5vUWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzV1VGQldTeGxRVUZsTzBGQlF6TkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1dVRkJXU3hsUVVGbE8wRkJRek5DTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxGZEJRVmNzUzBGQlN6dEJRVU5vUWl4WFFVRlhMRXRCUVVzN1FVRkRhRUlzV1VGQldTeExRVUZMTzBGQlEycENPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4TFFVRkxPMEZCUTJwQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFhRVUZYTEV0QlFVczdRVUZEYUVJc1dVRkJXU3hoUVVGaE8wRkJRM3BDTzBGQlEwRTdRVUZEUVN4eFFrRkJjVUk3UVVGRGNrSTdRVUZEUVN4clFrRkJhMElzVlVGQlZUdEJRVU0xUWl4dlFrRkJiMElzVlVGQlZUdEJRVU01UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRXRCUVVzN1FVRkRhRUlzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmxCUVZrc1MwRkJTenRCUVVOcVFqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4TFFVRkxPMEZCUTJwQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZsQlFWa3NZVUZCWVR0QlFVTjZRanRCUVVOQk8wRkJRMEVzY1VKQlFYRkNPMEZCUTNKQ08wRkJRMEVzYlVKQlFXMUNMRmRCUVZjN1FVRkRPVUlzYjBKQlFXOUNPMEZCUTNCQ0xIRkNRVUZ4UWl4WFFVRlhPMEZCUTJoRExITkNRVUZ6UWp0QlFVTjBRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4blFrRkJaMEk3UVVGRE5VSTdRVUZEUVR0QlFVTkJMSEZDUVVGeFFqdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEd0Q1FVRnJRaXhWUVVGVk8wRkJRelZDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhaUVVGWkxHRkJRV0U3UVVGRGVrSTdRVUZEUVR0QlFVTkJMSEZDUVVGeFFqdEJRVU55UWp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhaUVVGWkxFdEJRVXM3UVVGRGFrSTdRVUZEUVR0QlFVTkJPMEZCUTBFc2EwSkJRV3RDTEZWQlFWVTdRVUZETlVJc2IwSkJRVzlDTEZWQlFWVTdRVUZET1VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4aFFVRmhPMEZCUTNwQ08wRkJRMEU3UVVGRFFTeHhRa0ZCY1VJN1FVRkRja0k3UVVGRFFTeHBRa0ZCYVVJN1FVRkRha0k3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhMUVVGTE8wRkJRMmhDTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhaUVVGWkxGTkJRVk03UVVGRGNrSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eExRVUZMTzBGQlEyaENMRmxCUVZrc1MwRkJTenRCUVVOcVFqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVVVGQlVUdEJRVU51UWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzVjBGQlZ5eGxRVUZsTzBGQlF6RkNMRmxCUVZrc1VVRkJVVHRCUVVOd1FqczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhMUVVGTE8wRkJRMmhDTEZkQlFWY3NiVUpCUVcxQ08wRkJRemxDTEZsQlFWa3NTMEZCU3p0QlFVTnFRanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRXRCUVVzN1FVRkRhRUlzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmRCUVZjc1VVRkJVVHRCUVVOdVFpeFpRVUZaTEZGQlFWRTdRVUZEY0VJN1FVRkRRVHM3UVVGRlFTeEpRVUZKTEVsQlFUWkNPMEZCUTJwRExIRkNRVUZ4UWp0QlFVTnlRanM3T3pzN096dFZRMmhhUVR0VlFVTkJPenRWUVVWQk8xVkJRMEU3VlVGRFFUdFZRVU5CTzFWQlEwRTdWVUZEUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHRWUVVOQk8xVkJRMEU3VlVGRFFUdFZRVU5CT3p0VlFVVkJPMVZCUTBFN08xVkJSVUU3VlVGRFFUdFZRVU5CT3pzN096czdPenM3T3p0QlEzUkNZVHRCUVVOaUxEaERRVUUyUXl4RlFVRkZMR0ZCUVdFc1JVRkJRenRCUVVNM1JDeGpRVUZqTEcxQ1FVRlBMRU5CUVVNc01FVkJRWFZDTzBGQlF6ZERPMEZCUTBFN1FVRkRRU3gxUTBGQmRVTXNOa1ZCUVRaRk8wRkJRM0JJTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHdERRVUZyUXp0QlFVTnNRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFFUVVGdFJDeGpRVUZqTzBGQlEycEZPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEc5RVFVRnZSQ3gzUWtGQmQwSTdRVUZETlVVN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN3NFJFRkJPRVFzV1VGQldTeGxRVUZsTEZsQlFWazdRVUZEY2tjc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc01rUkJRVEpFTEdGQlFXRXNiVU5CUVcxRExHRkJRV0U3UVVGRGVFZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHdENRVUZsTzBGQlEyWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEVzTWtOQlFUSkRMRElyVWlJc0luTnZkWEpqWlhNaU9sc2lkMlZpY0dGamF6b3ZMMEJpWVhObGJXVnVkSFZ1YVhabGNuTmxMMlJsWW5WbkwzZGxZbkJoWTJzdmRXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmlJc0luZGxZbkJoWTJzNkx5OUFZbUZ6WlcxbGJuUjFibWwyWlhKelpTOWtaV0oxWnk4dUwyNXZaR1ZmYlc5a2RXeGxjeTlBWW1GelpXMWxiblIxYm1sMlpYSnpaUzkxZEdsc2N5OTFkR2xzY3k1cWN5SXNJbmRsWW5CaFkyczZMeTlBWW1GelpXMWxiblIxYm1sMlpYSnpaUzlrWldKMVp5OHVMMjV2WkdWZmJXOWtkV3hsY3k5QVltRnpaVzFsYm5SMWJtbDJaWEp6WlM5MlpXTXZkbVZqTG1weklpd2lkMlZpY0dGamF6b3ZMMEJpWVhObGJXVnVkSFZ1YVhabGNuTmxMMlJsWW5WbkwzZGxZbkJoWTJzdlltOXZkSE4wY21Gd0lpd2lkMlZpY0dGamF6b3ZMMEJpWVhObGJXVnVkSFZ1YVhabGNuTmxMMlJsWW5Wbkx5NHZhVzVrWlhndWRITWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvVzEwc0lHWmhZM1J2Y25rcE8xeHVYSFJsYkhObElIdGNibHgwWEhSMllYSWdZU0E5SUdaaFkzUnZjbmtvS1R0Y2JseDBYSFJtYjNJb2RtRnlJR2tnYVc0Z1lTa2dLSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUEvSUdWNGNHOXlkSE1nT2lCeWIyOTBLVnRwWFNBOUlHRmJhVjA3WEc1Y2RIMWNibjBwS0hObGJHWXNJQ2dwSUQwK0lIdGNibkpsZEhWeWJpQWlMQ0l2S2lwY2JpQXFJRUJ2ZG1WeWRtbGxkeUJCSUd4cFluSmhjbmtnYjJZZ2RYTmxablZzSUdaMWJtTjBhVzl1YzF4dUlDb2dRR0YxZEdodmNpQkhiM0prYjI0Z1RHRnljbWxuWVc1Y2JpQXFMMXh1WEc0dktpcGNiaUFxSUVOb1pXTnJJR2xtSUhSM2J5QnVkVzFpWlhKeklHRnlaU0JoY0hCeWIzaHBiV0YwWld4NUlHVnhkV0ZzWEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ1lTQk9kVzFpWlhJZ1lWeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJR0lnVG5WdFltVnlJR0pjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCYmNEMU9kVzFpWlhJdVJWQlRTVXhQVGwwZ1ZHaGxJSEJ5WldOcGMybHZiaUIyWVd4MVpWeHVJQ29nUUhKbGRIVnliaUI3WW05dmJHVmhibjBnVkhKMVpTQnBaaUJ1ZFcxaVpYSnpJR0VnWVc1a0lHSWdZWEpsSUdGd2NISnZlR2x0WVhSbGJIa2daWEYxWVd4Y2JpQXFMMXh1WTI5dWMzUWdabXh2WVhSRmNYVmhiSE1nUFNBb1lTd2dZaXdnY0NBOUlFNTFiV0psY2k1RlVGTkpURTlPS1NBOVBpQk5ZWFJvTG1GaWN5aGhJQzBnWWlrZ1BDQndPMXh1WEc0dktpcGNiaUFxSUVOc1lXMXdJR0VnYm5WdFltVnlJR0psZEhkbFpXNGdiV2x1SUdGdVpDQnRZWGhjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCaElGUm9aU0J1ZFcxaVpYSWdkRzhnWTJ4aGJYQmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JiYldsdVBUQmRJRlJvWlNCdGFXNXBiWFZ0SUhaaGJIVmxYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnVzIxaGVEMHhYU0JVYUdVZ2JXRjRhVzExYlNCMllXeDFaVnh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlNCQklHTnNZVzF3WldRZ2JuVnRZbVZ5WEc0Z0tpOWNibU52Ym5OMElHTnNZVzF3SUQwZ0tHRXNJRzFwYmlBOUlEQXNJRzFoZUNBOUlERXBJRDArSUdFZ1BDQnRhVzRnUHlCdGFXNGdPaUFvWVNBK0lHMWhlQ0EvSUcxaGVDQTZJR0VwTzF4dVhHNHZLaXBjYmlBcUlFZGxkQ0IwYUdVZ1puSmhZM1JwYjI1aGJDQndZWEowSUc5bUlHRWdiblZ0WW1WeVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdZU0JVYUdVZ2JuVnRZbVZ5SUdaeWIyMGdkMmhwWTJnZ2RHOGdaMlYwSUhSb1pTQm1jbUZqZEdsdmJtRnNJSEJoY25SY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMGdWR2hsSUdaeVlXTjBhVzl1WVd3Z2NHRnlkQ0J2WmlCMGFHVWdiblZ0WW1WeVhHNGdLaTljYm1OdmJuTjBJR1p5WVdNZ1BTQmhJRDArSUdFZ1BqMGdNQ0EvSUdFZ0xTQk5ZWFJvTG1ac2IyOXlLR0VwSURvZ1lTQXRJRTFoZEdndVkyVnBiQ2hoS1R0Y2JseHVMeW9xWEc0Z0tpQkVieUJoSUd4cGJtVmhjaUJwYm5SbGNuQnZiR0YwYVc5dUlHSmxkSGRsWlc0Z1lTQmhibVFnWWx4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHRWdWR2hsSUcxcGJtbHRkVzBnYm5WdFltVnlYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnWWlCVWFHVWdiV0Y0YVcxMWJTQnVkVzFpWlhKY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQnBJRlJvWlNCcGJuUmxjbkJ2YkdGMGFXOXVJSFpoYkhWbExDQnphRzkxYkdRZ1ltVWdhVzRnZEdobElHbHVkR1Z5ZG1Gc0lGc3dMQ0F4WFZ4dUlDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZTQkJiaUJwYm5SbGNuQnZiR0YwWldRZ2RtRnNkV1VnYVc0Z2RHaGxJR2x1ZEdWeWRtRnNJRnRoTENCaVhWeHVJQ292WEc1amIyNXpkQ0JzWlhKd0lEMGdLR0VzSUdJc0lHa3BJRDArSUdFZ0t5QW9ZaUF0SUdFcElDb2dhVHRjYmx4dUx5b3FYRzRnS2lCSFpYUWdkR2hsSUhCdmMybDBhVzl1SUc5bUlHa2dZbVYwZDJWbGJpQmhJR0Z1WkNCaVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdZU0JVYUdVZ2JXbHVhVzExYlNCdWRXMWlaWEpjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCaUlGUm9aU0J0WVhocGJYVnRJRzUxYldKbGNseHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJR2tnVkdobElHbHVkR1Z5Y0c5c1lYUmxaQ0IyWVd4MVpTQnBiaUIwYUdVZ2FXNTBaWEoyWVd3Z1cyRXNJR0pkWEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOUlGUm9aU0J3YjNOcGRHbHZiaUJ2WmlCcElHSmxkSGRsWlc0Z1lTQmhibVFnWWx4dUlDb3ZYRzVqYjI1emRDQjFibXhsY25BZ1BTQW9ZU3dnWWl3Z2FTa2dQVDRnS0drZ0xTQmhLU0F2SUNoaUlDMGdZU2s3WEc1Y2JpOHFLbHh1SUNvZ1JHOGdZU0JpYVd4cGJtVmhjaUJwYm5SbGNuQnZiR0YwYVc5dVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdZekF3SUZSdmNDMXNaV1owSUhaaGJIVmxYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnWXpFd0lGUnZjQzF5YVdkb2RDQjJZV3gxWlZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHTXdNU0JDYjNSMGIyMHRiR1ZtZENCMllXeDFaVnh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdNeE1TQkNiM1IwYjIwdGNtbG5hSFFnZG1Gc2RXVmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JwZUNCSmJuUmxjbkJ2YkdGMGFXOXVJSFpoYkhWbElHRnNiMjVuSUhoY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQnBlU0JKYm5SbGNuQnZiR0YwYVc5dUlIWmhiSFZsSUdGc2IyNW5JSGxjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24wZ1FTQmlhV3hwYm1WaGNpQnBiblJsY25CdmJHRjBaV1FnZG1Gc2RXVmNiaUFxTDF4dVkyOXVjM1FnWW14bGNuQWdQU0FvWXpBd0xDQmpNVEFzSUdNd01Td2dZekV4TENCcGVDd2dhWGtwSUQwK0lHeGxjbkFvYkdWeWNDaGpNREFzSUdNeE1Dd2dhWGdwTENCc1pYSndLR013TVN3Z1l6RXhMQ0JwZUNrc0lHbDVLVHRjYmx4dUx5b3FYRzRnS2lCU1pTMXRZWEFnWVNCdWRXMWlaWElnYVNCbWNtOXRJSEpoYm1kbElHRXhMaTR1WVRJZ2RHOGdZakV1TGk1aU1seHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJR2tnVkdobElHNTFiV0psY2lCMGJ5QnlaUzF0WVhCY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmhNVnh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdFeVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdZakZjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCaU1seHVJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmVnh1SUNvdlhHNWpiMjV6ZENCeVpXMWhjQ0E5SUNocExDQmhNU3dnWVRJc0lHSXhMQ0JpTWlrZ1BUNGdZakVnS3lBb2FTQXRJR0V4S1NBcUlDaGlNaUF0SUdJeEtTQXZJQ2hoTWlBdElHRXhLVHRjYmx4dUx5b3FYRzRnS2lCRWJ5QmhJSE50YjI5MGFDQnBiblJsY25CdmJHRjBhVzl1SUdKbGRIZGxaVzRnWVNCaGJtUWdZbHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdFZ1ZHaGxJRzFwYm1sdGRXMGdiblZ0WW1WeVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdZaUJVYUdVZ2JXRjRhVzExYlNCdWRXMWlaWEpjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCcElGUm9aU0JwYm5SbGNuQnZiR0YwYVc5dUlIWmhiSFZsWEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOUlFRnVJR2x1ZEdWeWNHOXNZWFJsWkNCMllXeDFaU0JwYmlCMGFHVWdhVzUwWlhKMllXd2dXMkVzSUdKZFhHNGdLaTljYm1OdmJuTjBJSE50YjI5MGFITjBaWEFnUFNBb1lTd2dZaXdnYVNrZ1BUNGdiR1Z5Y0NoaExDQmlMQ0F6SUNvZ1RXRjBhQzV3YjNjb2FTd2dNaWtnTFNBeUlDb2dUV0YwYUM1d2IzY29hU3dnTXlrcE8xeHVYRzR2S2lwY2JpQXFJRWRsZENCaGJpQmhibWRzWlNCcGJpQnlZV1JwWVc1elhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdaR1ZuY21WbGN5QlVhR1VnWVc1bmJHVWdhVzRnWkdWbmNtVmxjMXh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlNCVWFHVWdZVzVuYkdVZ2FXNGdjbUZrYVdGdWMxeHVJQ292WEc1amIyNXpkQ0J5WVdScFlXNXpJRDBnWkdWbmNtVmxjeUE5UGlBb1RXRjBhQzVRU1NBdklERTRNQ2tnS2lCa1pXZHlaV1Z6TzF4dVhHNHZLaXBjYmlBcUlFZGxkQ0JoYmlCaGJtZHNaU0JwYmlCa1pXZHlaV1Z6WEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2NtRmthV0Z1Y3lCVWFHVWdZVzVuYkdVZ2FXNGdjbUZrYVdGdWMxeHVJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmU0JVYUdVZ1lXNW5iR1VnYVc0Z1pHVm5jbVZsYzF4dUlDb3ZYRzVqYjI1emRDQmtaV2R5WldWeklEMGdjbUZrYVdGdWN5QTlQaUFvTVRnd0lDOGdUV0YwYUM1UVNTa2dLaUJ5WVdScFlXNXpPMXh1WEc0dktpcGNiaUFxSUVkbGRDQmhJSEpoYm1SdmJTQm1iRzloZENCcGJpQjBhR1VnYVc1MFpYSjJZV3dnVzIxcGJpd2diV0Y0S1Z4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHMXBiaUJKYm1Oc2RYTnBkbVVnYldsdVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdiV0Y0SUVWNFkyeDFjMmwyWlNCdFlYaGNiaUFxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjBnUVNCeVlXNWtiMjBnWm14dllYUWdhVzRnZEdobElHbHVkR1Z5ZG1Gc0lGdHRhVzRzSUcxaGVDbGNiaUFxTDF4dVkyOXVjM1FnY21GdVpHOXRRbVYwZDJWbGJpQTlJQ2h0YVc0c0lHMWhlQ2tnUFQ0Z1RXRjBhQzV5WVc1a2IyMG9LU0FxSUNodFlYZ2dMU0J0YVc0cElDc2diV2x1TzF4dVhHNHZLaXBjYmlBcUlFZGxkQ0JoSUhKaGJtUnZiU0JwYm5SbFoyVnlJR2x1SUhSb1pTQnBiblJsY25aaGJDQmJiV2x1TENCdFlYaGRYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYldsdUlFbHVZMngxYzJsMlpTQnRhVzVjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCdFlYZ2dTVzVqYkhWemFYWmxJRzFoZUZ4dUlDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZTQkJJSEpoYm1SdmJTQnBiblJsWjJWeUlHbHVJSFJvWlNCcGJuUmxjblpoYkNCYmJXbHVMQ0J0WVhoZFhHNGdLaTljYm1OdmJuTjBJSEpoYm1SdmJVbHVkRUpsZEhkbFpXNGdQU0FvYldsdUxDQnRZWGdwSUQwK0lFMWhkR2d1Wm14dmIzSW9UV0YwYUM1eVlXNWtiMjBvS1NBcUlDaHRZWGdnTFNCdGFXNGdLeUF4S1NrZ0t5QnRhVzQ3WEc1Y2JpOHFLbHh1SUNvZ1IyVjBJR0VnYm05eWJXRnNiSGt0WkdsemRISnBZblYwWldRZ2NtRnVaRzl0SUc1MWJXSmxjbHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUZ0dGRUMHdMalZkSUZSb1pTQnRaV0Z1SUhaaGJIVmxYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnVzNOcFoyMWhQVEF1TlYwZ1ZHaGxJSE4wWVc1a1lYSmtJR1JsZG1saGRHbHZibHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUZ0ellXMXdiR1Z6UFRKZElGUm9aU0J1ZFcxaVpYSWdiMllnYzJGdGNHeGxjMXh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlNCQklHNXZjbTFoYkd4NUxXUnBjM1J5YVdKMWRHVmtJSEpoYm1SdmJTQnVkVzFpWlhKY2JpQXFMMXh1WTI5dWMzUWdZMngwVW1GdVpHOXRJRDBnS0cxMUlEMGdNQzQxTENCemFXZHRZU0E5SURBdU5Td2djMkZ0Y0d4bGN5QTlJRElwSUQwK0lIdGNiaUFnYkdWMElIUnZkR0ZzSUQwZ01EdGNiaUFnWm05eUlDaHNaWFFnYVNBOUlITmhiWEJzWlhNN0lHa3RMVHNwSUh0Y2JpQWdJQ0IwYjNSaGJDQXJQU0JOWVhSb0xuSmhibVJ2YlNncE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCdGRTQXJJQ2gwYjNSaGJDQXRJSE5oYlhCc1pYTWdMeUF5S1NBdklDaHpZVzF3YkdWeklDOGdNaWtnS2lCemFXZHRZVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dSMlYwSUdFZ2JtOXliV0ZzYkhrdFpHbHpkSEpwWW5WMFpXUWdjbUZ1Wkc5dElHbHVkR1ZuWlhJZ2FXNGdkR2hsSUdsdWRHVnlkbUZzSUZ0dGFXNHNJRzFoZUYxY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQnRhVzRnU1c1amJIVnphWFpsSUcxcGJseHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRzFoZUNCSmJtTnNkWE5wZG1VZ2JXRjRYRzRnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5SUVFZ2JtOXliV0ZzYkhrdFpHbHpkSEpwWW5WMFpXUWdjbUZ1Wkc5dElHbHVkR1ZuWlhKY2JpQXFMMXh1WTI5dWMzUWdZMngwVW1GdVpHOXRTVzUwSUQwZ0tHMXBiaXdnYldGNEtTQTlQaUJOWVhSb0xtWnNiMjl5S0cxcGJpQXJJR05zZEZKaGJtUnZiU2d3TGpVc0lEQXVOU3dnTWlrZ0tpQW9iV0Y0SUNzZ01TQXRJRzFwYmlrcE8xeHVYRzR2S2lwY2JpQXFJRkpsZEhWeWJpQmhJSGRsYVdkb2RHVmtJSEpoYm1SdmJTQnBiblJsWjJWeVhHNGdLaUJBY0dGeVlXMGdlMEZ5Y21GNVBHNTFiV0psY2o1OUlIY2dRVzRnWVhKeVlYa2diMllnZDJWcFoyaDBjMXh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlNCQmJpQnBibVJsZUNCbWNtOXRJSGRjYmlBcUwxeHVZMjl1YzNRZ2QyVnBaMmgwWldSU1lXNWtiMjBnUFNCM0lEMCtJSHRjYmlBZ2JHVjBJSFJ2ZEdGc0lEMGdkeTV5WldSMVkyVW9LR0VzSUdrcElEMCtJR0VnS3lCcExDQXdLU3dnYmlBOUlEQTdYRzRnSUdOdmJuTjBJSElnUFNCTllYUm9MbkpoYm1SdmJTZ3BJQ29nZEc5MFlXdzdYRzRnSUhkb2FXeGxJQ2gwYjNSaGJDQStJSElwSUh0Y2JpQWdJQ0IwYjNSaGJDQXRQU0IzVzI0cksxMDdYRzRnSUgxY2JpQWdjbVYwZFhKdUlHNGdMU0F4TzF4dWZUdGNibHh1THlvcVhHNGdLaUJCYmlCcGJuUmxjbkJ2YkdGMGFXOXVJR1oxYm1OMGFXOXVYRzRnS2lCQVkyRnNiR0poWTJzZ2FXNTBaWEp3YjJ4aGRHbHZia05oYkd4aVlXTnJYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnWVNCVWFHVWdiV2x1YVcxMWJTQnVkVzFpWlhKY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmlJRlJvWlNCdFlYaHBiWFZ0SUc1MWJXSmxjbHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdrZ1ZHaGxJR2x1ZEdWeWNHOXNZWFJwYjI0Z2RtRnNkV1VzSUhOb2IzVnNaQ0JpWlNCcGJpQjBhR1VnYVc1MFpYSjJZV3dnV3pBc0lERmRYRzRnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5SUZSb1pTQnBiblJsY25CdmJHRjBaV1FnZG1Gc2RXVWdhVzRnZEdobElHbHVkR1Z5ZG1Gc0lGdGhMQ0JpWFZ4dUlDb3ZYRzVjYmk4cUtseHVJQ29nVW1WMGRYSnVJR0Z1SUdsdWRHVnljRzlzWVhSbFpDQjJZV3gxWlNCbWNtOXRJR0Z1SUdGeWNtRjVYRzRnS2lCQWNHRnlZVzBnZTBGeWNtRjVQRzUxYldKbGNqNTlJR0VnUVc0Z1lYSnlZWGtnYjJZZ2RtRnNkV1Z6SUdsdWRHVnljRzlzWVhSbFhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdhU0JCSUc1MWJXSmxjaUJwYmlCMGFHVWdhVzUwWlhKMllXd2dXekFzSURGZFhHNGdLaUJBY0dGeVlXMGdlMmx1ZEdWeWNHOXNZWFJwYjI1RFlXeHNZbUZqYTMwZ1cyWTlUV0YwYUM1c1pYSndYU0JVYUdVZ2FXNTBaWEp3YjJ4aGRHbHZiaUJtZFc1amRHbHZiaUIwYnlCMWMyVmNiaUFxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjBnUVc0Z2FXNTBaWEp3YjJ4aGRHVmtJSFpoYkhWbElHbHVJSFJvWlNCcGJuUmxjblpoYkNCYmJXbHVLR0VwTENCdFlYZ29ZU2xkWEc0Z0tpOWNibU52Ym5OMElHeGxjbkJCY25KaGVTQTlJQ2hoTENCcExDQm1JRDBnYkdWeWNDa2dQVDRnZTF4dUlDQmpiMjV6ZENCeklEMGdhU0FxSUNoaExteGxibWQwYUNBdElERXBPMXh1SUNCamIyNXpkQ0J3SUQwZ1kyeGhiWEFvVFdGMGFDNTBjblZ1WXloektTd2dNQ3dnWVM1c1pXNW5kR2dnTFNBeEtUdGNiaUFnY21WMGRYSnVJR1lvWVZ0d1hTQjhmQ0F3TENCaFczQWdLeUF4WFNCOGZDQXdMQ0JtY21GaktITXBLVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dSMlYwSUhSb1pTQmtiM1FnY0hKdlpIVmpkQ0J2WmlCMGQyOGdkbVZqZEc5eWMxeHVJQ29nUUhCaGNtRnRJSHRCY25KaGVUeHVkVzFpWlhJK2ZTQmhJRlpsWTNSdmNpQmhYRzRnS2lCQWNHRnlZVzBnZTBGeWNtRjVQRzUxYldKbGNqNTlJR0lnVm1WamRHOXlJR0pjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24wZ1lTRGlpSmtnWWx4dUlDb3ZYRzVqYjI1emRDQmtiM1FnUFNBb1lTd2dZaWtnUFQ0Z1lTNXlaV1IxWTJVb0tHNHNJSFlzSUdrcElEMCtJRzRnS3lCMklDb2dZbHRwWFN3Z01DazdYRzVjYmk4cUtseHVJQ29nUjJWMElIUm9aU0JtWVdOMGIzSnBZV3dnYjJZZ1lTQnVkVzFpWlhKY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmhYRzRnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5SUdFaFhHNGdLaTljYm1OdmJuTjBJR1poWTNSdmNtbGhiQ0E5SUdFZ1BUNGdlMXh1SUNCc1pYUWdjbVZ6ZFd4MElEMGdNVHRjYmlBZ1ptOXlJQ2hzWlhRZ2FTQTlJREk3SUdrZ1BEMGdZVHNnYVNzcktTQjdYRzRnSUNBZ2NtVnpkV3gwSUNvOUlHazdYRzRnSUgxY2JpQWdjbVYwZFhKdUlISmxjM1ZzZER0Y2JuMDdYRzVjYmk4cUtseHVJQ29nUjJWMElIUm9aU0J1ZFcxaVpYSWdiMllnY0dWeWJYVjBZWFJwYjI1eklHOW1JSElnWld4bGJXVnVkSE1nWm5KdmJTQmhJSE5sZENCdlppQnVJR1ZzWlcxbGJuUnpYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYmx4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlISmNiaUFxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjBnYmxCeVhHNGdLaTljYm1OdmJuTjBJSEJsY20xMWRHRjBhVzl1SUQwZ0tHNHNJSElwSUQwK0lHWmhZM1J2Y21saGJDaHVLU0F2SUdaaFkzUnZjbWxoYkNodUlDMGdjaWs3WEc1Y2JpOHFLbHh1SUNvZ1IyVjBJSFJvWlNCdWRXMWlaWElnYjJZZ1kyOXRZbWx1WVhScGIyNXpJRzltSUhJZ1pXeGxiV1Z1ZEhNZ1puSnZiU0JoSUhObGRDQnZaaUJ1SUdWc1pXMWxiblJ6WEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2JseHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJSEpjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24wZ2JrTnlYRzRnS2k5Y2JtTnZibk4wSUdOdmJXSnBibUYwYVc5dUlEMGdLRzRzSUhJcElEMCtJR1poWTNSdmNtbGhiQ2h1S1NBdklDaG1ZV04wYjNKcFlXd29jaWtnS2lCbVlXTjBiM0pwWVd3b2JpQXRJSElwS1R0Y2JseHVMeW9xWEc0Z0tpQkJJR1oxYm1OMGFXOXVJR1p2Y2lCblpXNWxjbUYwYVc1bklHRnljbUY1SUhaaGJIVmxjMXh1SUNvZ1FHTmhiR3hpWVdOcklIUnBiV1Z6UTJGc2JHSmhZMnRjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCcElGUm9aU0JoY25KaGVTQnBibVJsZUZ4dUlDb2dRSEpsZEhWeWJpQjdLbjBnVkdobElHRnljbUY1SUhaaGJIVmxYRzRnS2k5Y2JseHVMeW9xWEc0Z0tpQlNaWFIxY200Z1lTQnVaWGNnWVhKeVlYa2dkMmwwYUNCc1pXNW5kR2dnYmlCaWVTQmpZV3hzYVc1bklHWjFibU4wYVc5dUlHWW9hU2tnYjI0Z1pXRmphQ0JsYkdWdFpXNTBYRzRnS2lCQWNHRnlZVzBnZTNScGJXVnpRMkZzYkdKaFkydDlJR1pjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCdUlGUm9aU0J6YVhwbElHOW1JSFJvWlNCaGNuSmhlVnh1SUNvZ1FISmxkSFZ5YmlCN1FYSnlZWGs4S2o1OVhHNGdLaTljYm1OdmJuTjBJSFJwYldWeklEMGdLR1lzSUc0cElEMCtJRUZ5Y21GNUtHNHBMbVpwYkd3b01Da3ViV0Z3S0NoZkxDQnBLU0E5UGlCbUtHa3BLVHRjYmx4dUx5b3FYRzRnS2lCU1pYUjFjbTRnWVc0Z1lYSnlZWGtnWTI5dWRHRnBibWx1WnlCdWRXMWlaWEp6SURBdFBpaHVJQzBnTVNsY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQnVJRlJvWlNCemFYcGxJRzltSUhSb1pTQmhjbkpoZVZ4dUlDb2dRSEpsZEhWeWJpQjdRWEp5WVhrOGJuVnRZbVZ5UG4wZ1FXNGdZWEp5WVhrZ2IyWWdhVzUwWldkbGNuTWdNQzArS0c0Z0xTQXhLVnh1SUNvdlhHNWpiMjV6ZENCeVlXNW5aU0E5SUc0Z1BUNGdkR2x0WlhNb2FTQTlQaUJwTENCdUtUdGNibHh1THlvcVhHNGdLaUJhYVhBZ01pQmhjbkpoZVhNZ2RHOW5aWFJvWlhJc0lHa3VaUzRnS0ZzeExDQXlMQ0F6WFN3Z1cyRXNJR0lzSUdOZEtTQTlQaUJiV3pFc0lHRmRMQ0JiTWl3Z1lsMHNJRnN6TENCalhWMWNiaUFxSUVCd1lYSmhiU0I3UVhKeVlYazhLajU5SUdGY2JpQXFJRUJ3WVhKaGJTQjdRWEp5WVhrOEtqNTlJR0pjYmlBcUlFQnlaWFIxY200Z2UwRnljbUY1UEVGeWNtRjVQQ28rUG4xY2JpQXFMMXh1WTI5dWMzUWdlbWx3SUQwZ0tHRXNJR0lwSUQwK0lHRXViV0Z3S0NockxDQnBLU0E5UGlCYmF5d2dZbHRwWFYwcE8xeHVYRzR2S2lwY2JpQXFJRkpsZEhWeWJpQmhjbkpoZVZ0cFhTQjNhWFJvSUhCdmMybDBhWFpsSUdGdVpDQnVaV2RoZEdsMlpTQjNjbUZ3Y0dsdVoxeHVJQ29nUUhCaGNtRnRJSHRCY25KaGVUd3FQbjBnWVZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHa2dWR2hsSUhCdmMybDBhWFpsYkhrdmJtVm5ZWFJwZG1Wc2VTQjNjbUZ3Y0dWa0lHRnljbUY1SUdsdVpHVjRYRzRnS2lCQWNtVjBkWEp1SUhzcWZTQkJiaUJsYkdWdFpXNTBJR1p5YjIwZ2RHaGxJR0Z5Y21GNVhHNGdLaTljYm1OdmJuTjBJR0YwSUQwZ0tHRXNJR2twSUQwK0lHRmJhU0E4SURBZ1B5QmhMbXhsYm1kMGFDQXRJQ2hOWVhSb0xtRmljeWhwSUNzZ01Ta2dKU0JoTG14bGJtZDBhQ2tnTFNBeElEb2dhU0FsSUdFdWJHVnVaM1JvWFR0Y2JseHVMeW9xWEc0Z0tpQkRhRzl3SUdGdUlHRnljbUY1SUdsdWRHOGdZMmgxYm10eklHOW1JSE5wZW1VZ2JseHVJQ29nUUhCaGNtRnRJSHRCY25KaGVUd3FQbjBnWVZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHNGdWR2hsSUdOb2RXNXJJSE5wZW1WY2JpQXFJRUJ5WlhSMWNtNGdlMEZ5Y21GNVBFRnljbUY1UENvK1BuMGdRVzRnWVhKeVlYa2diMllnWVhKeVlYa2dZMmgxYm10elhHNGdLaTljYm1OdmJuTjBJR05vZFc1cklEMGdLR0VzSUc0cElEMCtJSFJwYldWektHa2dQVDRnWVM1emJHbGpaU2hwSUNvZ2Jpd2dhU0FxSUc0Z0t5QnVLU3dnVFdGMGFDNWpaV2xzS0dFdWJHVnVaM1JvSUM4Z2Jpa3BPMXh1WEc0dktpcGNiaUFxSUZKaGJtUnZiV3g1SUhOb2RXWm1iR1VnWVNCemFHRnNiRzkzSUdOdmNIa2diMllnWVc0Z1lYSnlZWGxjYmlBcUlFQndZWEpoYlNCN1FYSnlZWGs4S2o1OUlHRmNiaUFxSUVCeVpYUjFjbTRnZTBGeWNtRjVQQ28rZlNCVWFHVWdjMmgxWm1ac1pXUWdZWEp5WVhsY2JpQXFMMXh1WTI5dWMzUWdjMmgxWm1ac1pTQTlJR0VnUFQ0Z1lTNXpiR2xqWlNncExuTnZjblFvS0NrZ1BUNGdUV0YwYUM1eVlXNWtiMjBvS1NBdElEQXVOU2s3WEc1Y2JtbG1JQ2gwZVhCbGIyWWdiVzlrZFd4bElDRTlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHRjYmlBZ0lDQm1iRzloZEVWeGRXRnNjeXhjYmlBZ0lDQmpiR0Z0Y0N4Y2JpQWdJQ0JtY21GakxGeHVJQ0FnSUd4bGNuQXNYRzRnSUNBZ2RXNXNaWEp3TEZ4dUlDQWdJR0pzWlhKd0xGeHVJQ0FnSUhKbGJXRndMRnh1SUNBZ0lITnRiMjkwYUhOMFpYQXNYRzRnSUNBZ2NtRmthV0Z1Y3l4Y2JpQWdJQ0JrWldkeVpXVnpMRnh1SUNBZ0lISmhibVJ2YlVKbGRIZGxaVzRzWEc0Z0lDQWdjbUZ1Wkc5dFNXNTBRbVYwZDJWbGJpeGNiaUFnSUNCamJIUlNZVzVrYjIwc1hHNGdJQ0FnWTJ4MFVtRnVaRzl0U1c1MExGeHVJQ0FnSUhkbGFXZG9kR1ZrVW1GdVpHOXRMRnh1SUNBZ0lHeGxjbkJCY25KaGVTeGNiaUFnSUNCa2IzUXNYRzRnSUNBZ1ptRmpkRzl5YVdGc0xGeHVJQ0FnSUhCbGNtMTFkR0YwYVc5dUxGeHVJQ0FnSUdOdmJXSnBibUYwYVc5dUxGeHVJQ0FnSUhScGJXVnpMRnh1SUNBZ0lISmhibWRsTEZ4dUlDQWdJSHBwY0N4Y2JpQWdJQ0JoZEN4Y2JpQWdJQ0JqYUhWdWF5eGNiaUFnSUNCemFIVm1abXhsTEZ4dUlDQjlPMXh1ZlZ4dUlpd2lZMjl1YzNRZ2V5QjBhVzFsY3l3Z1kyaDFibXNzSUdSdmRDQjlJRDBnY21WeGRXbHlaU2duUUdKaGMyVnRaVzUwZFc1cGRtVnljMlV2ZFhScGJITW5LVHRjYmx4dUx5b3FYRzRnS2lCQWIzWmxjblpwWlhjZ1FTQnNhV0p5WVhKNUlHOW1JSFZ6WldaMWJDQm1kVzVqZEdsdmJuTmNiaUFxSUVCaGRYUm9iM0lnUjI5eVpHOXVJRXhoY25KcFoyRnVYRzRnS2k5Y2JseHVMeW9xWEc0Z0tpQkJJREprSUhabFkzUnZjbHh1SUNvZ1FIUjVjR1ZrWldZZ2UwOWlhbVZqZEgwZ2RtVmpYRzRnS2lCQWNISnZjR1Z5ZEhrZ2UyNTFiV0psY24wZ2VDQlVhR1VnZUNCamIyMXdiMjVsYm5RZ2IyWWdkR2hsSUhabFkzUnZjbHh1SUNvZ1FIQnliM0JsY25SNUlIdHVkVzFpWlhKOUlIa2dWR2hsSUhrZ1kyOXRjRzl1Wlc1MElHOW1JSFJvWlNCMlpXTjBiM0pjYmlBcUwxeHVYRzR2S2lwY2JpQXFJRU55WldGMFpTQmhJRzVsZHlCMlpXTjBiM0pjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZkhabFkzMGdXM2hkSUZSb1pTQjRJR052YlhCdmJtVnVkQ0J2WmlCMGFHVWdkbVZqZEc5eUxDQnZjaUJoSUhabFkzUnZjaUIwYnlCamIzQjVYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnVzNsZElGUm9aU0I1SUdOdmJYQnZibVZ1ZENCdlppQjBhR1VnZG1WamRHOXlYRzRnS2lCQWNtVjBkWEp1SUh0MlpXTjlJRUVnYm1WM0lIWmxZM1J2Y2x4dUlDb2dRR1Y0WVcxd2JHVWdQR05oY0hScGIyNCtWbUZ5YVc5MWN5QjNZWGx6SUhSdklHbHVhWFJwWVd4cGMyVWdZU0IyWldOMGIzSThMMk5oY0hScGIyNCtYRzRnS2lCc1pYUWdZU0E5SUhabFl5Z3pMQ0F5S1RzZ0lDOHZJQ2d6TENBeUtWeHVJQ29nYkdWMElHSWdQU0IyWldNb05DazdJQ0FnSUNBdkx5QW9OQ3dnTkNsY2JpQXFJR3hsZENCaklEMGdkbVZqS0dFcE95QWdJQ0FnTHk4Z0tETXNJRElwWEc0Z0tpQnNaWFFnWkNBOUlIWmxZeWdwT3lBZ0lDQWdJQzh2SUNnd0xDQXdLVnh1SUNvdlhHNWpiMjV6ZENCMlpXTWdQU0FvZUN3Z2VTa2dQVDRnS0NGNElDWW1JQ0Y1SUQ5Y2JpQWdleUI0T2lBd0xDQjVPaUF3SUgwZ09pQW9kSGx3Wlc5bUlIZ2dQVDA5SUNkdlltcGxZM1FuSUQ5Y2JpQWdJQ0I3SUhnNklIZ3VlQ0I4ZkNBd0xDQjVPaUI0TG5rZ2ZId2dNQ0I5SURvZ0tIa2dQVDA5SUc1MWJHd2dmSHdnZVNBOVBUMGdkVzVrWldacGJtVmtJRDljYmlBZ0lDQWdJSHNnZURvZ2VDd2dlVG9nZUNCOUlEb2dleUI0T2lCNExDQjVPaUI1SUgwcFhHNGdJQ2xjYmlrN1hHNWNiaThxS2x4dUlDb2dSMlYwSUhSb1pTQmpiMjF3YjI1bGJuUnpJRzltSUdFZ2RtVmpkRzl5SUdGeklHRnVJR0Z5Y21GNVhHNGdLaUJBY0dGeVlXMGdlM1psWTMwZ1lTQlVhR1VnZG1WamRHOXlJSFJ2SUdkbGRDQmpiMjF3YjI1bGJuUnpJR1p5YjIxY2JpQXFJRUJ5WlhSMWNtNGdlMEZ5Y21GNVBHNTFiV0psY2o1OUlGUm9aU0IyWldOMGIzSWdZMjl0Y0c5dVpXNTBjeUJoY3lCaGJpQmhjbkpoZVZ4dUlDb3ZYRzUyWldNdVkyOXRjRzl1Wlc1MGN5QTlJR0VnUFQ0Z1cyRXVlQ3dnWVM1NVhUdGNibHh1THlvcVhHNGdLaUJTWlhSMWNtNGdZU0IxYm1sMElIWmxZM1J2Y2lBb01Td2dNQ2xjYmlBcUlFQnlaWFIxY200Z2UzWmxZMzBnUVNCMWJtbDBJSFpsWTNSdmNpQW9NU3dnTUNsY2JpQXFMMXh1ZG1WakxuVjRJRDBnS0NrZ1BUNGdkbVZqS0RFc0lEQXBPMXh1WEc0dktpcGNiaUFxSUZKbGRIVnliaUJoSUhWdWFYUWdkbVZqZEc5eUlDZ3dMQ0F4S1Z4dUlDb2dRSEpsZEhWeWJpQjdkbVZqZlNCQklIVnVhWFFnZG1WamRHOXlJQ2d3TENBeEtWeHVJQ292WEc1MlpXTXVkWGtnUFNBb0tTQTlQaUIyWldNb01Dd2dNU2s3WEc1Y2JpOHFLbHh1SUNvZ1FXUmtJSFpsWTNSdmNuTmNiaUFxSUVCd1lYSmhiU0I3ZG1WamZTQmhJRlpsWTNSdmNpQmhYRzRnS2lCQWNHRnlZVzBnZTNabFkzMGdZaUJXWldOMGIzSWdZbHh1SUNvZ1FISmxkSFZ5YmlCN2RtVmpmU0JoSUNzZ1lseHVJQ292WEc1MlpXTXVZV1JrSUQwZ0tHRXNJR0lwSUQwK0lDaDdJSGc2SUdFdWVDQXJJR0l1ZUN3Z2VUb2dZUzU1SUNzZ1lpNTVJSDBwTzF4dVhHNHZLaXBjYmlBcUlGTmpZV3hsSUdFZ2RtVmpkRzl5WEc0Z0tpQkFjR0Z5WVcwZ2UzWmxZMzBnWVNCV1pXTjBiM0lnWVZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHSWdVMk5oYkdGeUlHSmNiaUFxSUVCeVpYUjFjbTRnZTNabFkzMGdZU0FxSUdKY2JpQXFMMXh1ZG1WakxtMTFiQ0E5SUNoaExDQmlLU0E5UGlBb2V5QjRPaUJoTG5nZ0tpQmlMQ0I1T2lCaExua2dLaUJpSUgwcE8xeHVYRzR2S2lwY2JpQXFJRk4xWW5SeVlXTjBJSFpsWTNSdmNuTmNiaUFxSUVCd1lYSmhiU0I3ZG1WamZTQmhJRlpsWTNSdmNpQmhYRzRnS2lCQWNHRnlZVzBnZTNabFkzMGdZaUJXWldOMGIzSWdZbHh1SUNvZ1FISmxkSFZ5YmlCN2RtVmpmU0JoSUMwZ1lseHVJQ292WEc1MlpXTXVjM1ZpSUQwZ0tHRXNJR0lwSUQwK0lDaDdJSGc2SUdFdWVDQXRJR0l1ZUN3Z2VUb2dZUzU1SUMwZ1lpNTVJSDBwTzF4dVhHNHZLaXBjYmlBcUlFZGxkQ0IwYUdVZ2JHVnVaM1JvSUc5bUlHRWdkbVZqZEc5eVhHNGdLaUJBY0dGeVlXMGdlM1psWTMwZ1lTQldaV04wYjNJZ1lWeHVJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmU0I4WVh4Y2JpQXFMMXh1ZG1WakxteGxiaUE5SUdFZ1BUNGdUV0YwYUM1emNYSjBLR0V1ZUNBcUlHRXVlQ0FySUdFdWVTQXFJR0V1ZVNrN1hHNWNiaThxS2x4dUlDb2dSMlYwSUhSb1pTQnNaVzVuZEdnZ2IyWWdZU0IyWldOMGIzSWdkWE5wYm1jZ2RHRjRhV05oWWlCblpXOXRaWFJ5ZVZ4dUlDb2dRSEJoY21GdElIdDJaV045SUdFZ1ZtVmpkRzl5SUdGY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMGdmR0Y4WEc0Z0tpOWNiblpsWXk1dFlXNW9ZWFIwWVc0Z1BTQmhJRDArSUUxaGRHZ3VZV0p6S0dFdWVDa2dLeUJOWVhSb0xtRmljeWhoTG5rcE8xeHVYRzR2S2lwY2JpQXFJRTV2Y20xaGJHbHpaU0JoSUhabFkzUnZjbHh1SUNvZ1FIQmhjbUZ0SUh0MlpXTjlJR0VnVkdobElIWmxZM1J2Y2lCMGJ5QnViM0p0WVd4cGMyVmNiaUFxSUVCeVpYUjFjbTRnZTNabFkzMGdYbUZjYmlBcUwxeHVkbVZqTG01dmNpQTlJR0VnUFQ0Z2UxeHVJQ0JzWlhRZ2JHVnVJRDBnZG1WakxteGxiaWhoS1R0Y2JpQWdjbVYwZFhKdUlHeGxiaUEvSUhzZ2VEb2dZUzU0SUM4Z2JHVnVMQ0I1T2lCaExua2dMeUJzWlc0Z2ZTQTZJSFpsWXlncE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCSFpYUWdZU0JrYjNRZ2NISnZaSFZqZENCdlppQjJaV04wYjNKelhHNGdLaUJBY0dGeVlXMGdlM1psWTMwZ1lTQldaV04wYjNJZ1lWeHVJQ29nUUhCaGNtRnRJSHQyWldOOUlHSWdWbVZqZEc5eUlHSmNiaUFxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjBnWVNEaWlKa2dZbHh1SUNvdlhHNTJaV011Wkc5MElEMGdLR0VzSUdJcElEMCtJR0V1ZUNBcUlHSXVlQ0FySUdFdWVTQXFJR0l1ZVR0Y2JseHVMeW9xWEc0Z0tpQlNiM1JoZEdVZ1lTQjJaV04wYjNJZ1lua2djaUJ5WVdScFlXNXpYRzRnS2lCQWNHRnlZVzBnZTNabFkzMGdZU0JVYUdVZ2RtVmpkRzl5SUhSdklISnZkR0YwWlZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlISWdWR2hsSUdGdVoyeGxJSFJ2SUhKdmRHRjBaU0JpZVN3Z2JXVmhjM1Z5WldRZ2FXNGdjbUZrYVdGdWMxeHVJQ29nUUhKbGRIVnliaUI3ZG1WamZTQkJJSEp2ZEdGMFpXUWdkbVZqZEc5eVhHNGdLaTljYm5abFl5NXliM1FnUFNBb1lTd2djaWtnUFQ0Z2UxeHVJQ0JzWlhRZ2N5QTlJRTFoZEdndWMybHVLSElwTEZ4dUlDQWdJR01nUFNCTllYUm9MbU52Y3loeUtUdGNiaUFnY21WMGRYSnVJSHNnZURvZ1l5QXFJR0V1ZUNBdElITWdLaUJoTG5rc0lIazZJSE1nS2lCaExuZ2dLeUJqSUNvZ1lTNTVJSDA3WEc1OVhHNWNiaThxS2x4dUlDb2dRMmhsWTJzZ2FXWWdkSGR2SUhabFkzUnZjbk1nWVhKbElHVnhkV0ZzWEc0Z0tpQkFjR0Z5WVcwZ2UzWmxZMzBnWVNCV1pXTjBiM0lnWVZ4dUlDb2dRSEJoY21GdElIdDJaV045SUdJZ1ZtVmpkRzl5SUdKY2JpQXFJRUJ5WlhSMWNtNGdlMkp2YjJ4bFlXNTlJRlJ5ZFdVZ2FXWWdkbVZqZEc5eWN5QmhJR0Z1WkNCaUlHRnlaU0JsY1hWaGJDd2dabUZzYzJVZ2IzUm9aWEozYVhObFhHNGdLaTljYm5abFl5NWxjU0E5SUNoaExDQmlLU0E5UGlCaExuZ2dQVDA5SUdJdWVDQW1KaUJoTG5rZ1BUMDlJR0l1ZVR0Y2JseHVMeW9xWEc0Z0tpQkhaWFFnZEdobElHRnVaMnhsSUc5bUlHRWdkbVZqZEc5eVhHNGdLaUJBY0dGeVlXMGdlM1psWTMwZ1lTQldaV04wYjNJZ1lWeHVJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmU0JVYUdVZ1lXNW5iR1VnYjJZZ2RtVmpkRzl5SUdFZ2FXNGdjbUZrYVdGdWMxeHVJQ292WEc1MlpXTXVjbUZrSUQwZ1lTQTlQaUJOWVhSb0xtRjBZVzR5S0dFdWVTd2dZUzU0S1R0Y2JseHVMeW9xWEc0Z0tpQkRiM0I1SUdFZ2RtVmpkRzl5WEc0Z0tpQkFjR0Z5WVcwZ2UzWmxZMzBnWVNCVWFHVWdkbVZqZEc5eUlIUnZJR052Y0hsY2JpQXFJRUJ5WlhSMWNtNGdlM1psWTMwZ1FTQmpiM0I1SUc5bUlIWmxZM1J2Y2lCaFhHNGdLaTljYm5abFl5NWpjSGtnUFNCaElEMCtJSFpsWXloaEtUdGNibHh1THlvcVhHNGdLaUJCSUdaMWJtTjBhVzl1SUhSdklHTmhiR3dnYjI0Z1pXRmphQ0JqYjIxd2IyNWxiblFnYjJZZ1lTQjJaV04wYjNKY2JpQXFJRUJqWVd4c1ltRmpheUIyWldOMGIzSk5ZWEJEWVd4c1ltRmphMXh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUhaaGJIVmxJRlJvWlNCamIyMXdiMjVsYm5RZ2RtRnNkV1ZjYmlBcUlFQndZWEpoYlNCN0ozZ25JSHdnSjNrbmZTQnNZV0psYkNCVWFHVWdZMjl0Y0c5dVpXNTBJR3hoWW1Wc0lDaDRJRzl5SUhrcFhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlJRlJvWlNCdFlYQndaV1FnWTI5dGNHOXVaVzUwWEc0Z0tpOWNibHh1THlvcVhHNGdLaUJEWVd4c0lHRWdablZ1WTNScGIyNGdiMjRnWldGamFDQmpiMjF3YjI1bGJuUWdiMllnWVNCMlpXTjBiM0lnWVc1a0lHSjFhV3hrSUdFZ2JtVjNJSFpsWTNSdmNpQm1jbTl0SUhSb1pTQnlaWE4xYkhSelhHNGdLaUJBY0dGeVlXMGdlM1psWTMwZ1lTQldaV04wYjNJZ1lWeHVJQ29nUUhCaGNtRnRJSHQyWldOMGIzSk5ZWEJEWVd4c1ltRmphMzBnWmlCVWFHVWdablZ1WTNScGIyNGdkRzhnWTJGc2JDQnZiaUJsWVdOb0lHTnZiWEJ2Ym1WdWRDQnZaaUIwYUdVZ2RtVmpkRzl5WEc0Z0tpQkFjbVYwZFhKdUlIdDJaV045SUZabFkzUnZjaUJoSUcxaGNIQmxaQ0IwYUhKdmRXZG9JR1pjYmlBcUwxeHVkbVZqTG0xaGNDQTlJQ2hoTENCbUtTQTlQaUFvZXlCNE9pQm1LR0V1ZUN3Z0ozZ25LU3dnZVRvZ1ppaGhMbmtzSUNkNUp5a2dmU2s3WEc1Y2JpOHFLbHh1SUNvZ1EyOXVkbVZ5ZENCaElIWmxZM1J2Y2lCcGJuUnZJR0VnYzNSeWFXNW5YRzRnS2lCQWNHRnlZVzBnZTNabFkzMGdZU0JVYUdVZ2RtVmpkRzl5SUhSdklHTnZiblpsY25SY2JpQXFJRUJ3WVhKaGJTQjdjM1J5YVc1bmZTQmJjejBuTENBblhTQlVhR1VnYzJWd1lYSmhkRzl5SUhOMGNtbHVaMXh1SUNvZ1FISmxkSFZ5YmlCN2MzUnlhVzVuZlNCQklITjBjbWx1WnlCeVpYQnlaWE5sYm5SaGRHbHZiaUJ2WmlCMGFHVWdkbVZqZEc5eVhHNGdLaTljYm5abFl5NXpkSElnUFNBb1lTd2djeUE5SUNjc0lDY3BJRDArSUdBa2UyRXVlSDBrZTNOOUpIdGhMbmw5WUR0Y2JseHVMeW9xWEc0Z0tpQkJJRzFoZEhKcGVGeHVJQ29nUUhSNWNHVmtaV1lnZTA5aWFtVmpkSDBnYldGMFhHNGdLaUJBY0hKdmNHVnlkSGtnZTI1MWJXSmxjbjBnYlNCVWFHVWdiblZ0WW1WeUlHOW1JSEp2ZDNNZ2FXNGdkR2hsSUcxaGRISnBlRnh1SUNvZ1FIQnliM0JsY25SNUlIdHVkVzFpWlhKOUlHNGdWR2hsSUc1MWJXSmxjaUJ2WmlCamIyeDFiVzV6SUdsdUlIUm9aU0J0WVhSeWFYaGNiaUFxSUVCd2NtOXdaWEowZVNCN1FYSnlZWGs4Ym5WdFltVnlQbjBnWlc1MGNtbGxjeUJVYUdVZ2JXRjBjbWw0SUhaaGJIVmxjMXh1SUNvdlhHNWNiaThxS2x4dUlDb2dRM0psWVhSbElHRWdibVYzSUcxaGRISnBlRnh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUZ0dFBUUmRJRlJvWlNCdWRXMWlaWElnYjJZZ2NtOTNjMXh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUZ0dVBUUmRJRlJvWlNCdWRXMWlaWElnYjJZZ1kyOXNkVzF1YzF4dUlDb2dRSEJoY21GdElIdEJjbkpoZVR4dWRXMWlaWEkrZlNCYlpXNTBjbWxsY3oxYlhWMGdUV0YwY21sNElIWmhiSFZsY3lCcGJpQnlaV0ZrYVc1bklHOXlaR1Z5WEc0Z0tpQkFjbVYwZFhKdUlIdHRZWFI5SUVFZ2JtVjNJRzFoZEhKcGVGeHVJQ292WEc1amIyNXpkQ0J0WVhRZ1BTQW9iU0E5SURRc0lHNGdQU0EwTENCbGJuUnlhV1Z6SUQwZ1cxMHBJRDArSUNoN1hHNGdJRzBzSUc0c1hHNGdJR1Z1ZEhKcFpYTTZJR1Z1ZEhKcFpYTXVZMjl1WTJGMEtFRnljbUY1S0cwZ0tpQnVLUzVtYVd4c0tEQXBLUzV6YkdsalpTZ3dMQ0J0SUNvZ2JpbGNibjBwTzF4dVhHNHZLaXBjYmlBcUlFZGxkQ0JoYmlCcFpHVnVkR2wwZVNCdFlYUnlhWGdnYjJZZ2MybDZaU0J1WEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2JpQlVhR1VnYzJsNlpTQnZaaUIwYUdVZ2JXRjBjbWw0WEc0Z0tpQkFjbVYwZFhKdUlIdHRZWFI5SUVGdUlHbGtaVzUwYVhSNUlHMWhkSEpwZUZ4dUlDb3ZYRzV0WVhRdWFXUmxiblJwZEhrZ1BTQnVJRDArSUcxaGRDaHVMQ0J1TENCQmNuSmhlU2h1SUNvZ2Jpa3VabWxzYkNnd0tTNXRZWEFvS0hZc0lHa3BJRDArSUNzb1RXRjBhQzVtYkc5dmNpaHBJQzhnYmlrZ1BUMDlJR2tnSlNCdUtTa3BPMXh1WEc0dktpcGNiaUFxSUVkbGRDQmhiaUJsYm5SeWVTQm1jbTl0SUdFZ2JXRjBjbWw0WEc0Z0tpQkFjR0Z5WVcwZ2UyMWhkSDBnWVNCTllYUnlhWGdnWVZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHa2dWR2hsSUhKdmR5QnZabVp6WlhSY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQnFJRlJvWlNCamIyeDFiVzRnYjJabWMyVjBYRzRnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5SUZSb1pTQjJZV3gxWlNCaGRDQndiM05wZEdsdmJpQW9hU3dnYWlrZ2FXNGdiV0YwY21sNElHRmNiaUFxTDF4dWJXRjBMbWRsZENBOUlDaGhMQ0JwTENCcUtTQTlQaUJoTG1WdWRISnBaWE5iS0dvZ0xTQXhLU0FySUNocElDMGdNU2tnS2lCaExtNWRPMXh1WEc0dktpcGNiaUFxSUZObGRDQmhiaUJsYm5SeWVTQnZaaUJoSUcxaGRISnBlRnh1SUNvZ1FIQmhjbUZ0SUh0dFlYUjlJR0VnVFdGMGNtbDRJR0ZjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCcElGUm9aU0J5YjNjZ2IyWm1jMlYwWEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2FpQlVhR1VnWTI5c2RXMXVJRzltWm5ObGRGeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJSFlnVkdobElIWmhiSFZsSUhSdklITmxkQ0JwYmlCdFlYUnlhWGdnWVZ4dUlDb3ZYRzV0WVhRdWMyVjBJRDBnS0dFc0lHa3NJR29zSUhZcElEMCtJSHNnWVM1bGJuUnlhV1Z6V3locUlDMGdNU2tnS3lBb2FTQXRJREVwSUNvZ1lTNXVYU0E5SUhZN0lIMDdYRzVjYmk4cUtseHVJQ29nUjJWMElHRWdjbTkzSUdaeWIyMGdZU0J0WVhSeWFYZ2dZWE1nWVc0Z1lYSnlZWGxjYmlBcUlFQndZWEpoYlNCN2JXRjBmU0JoSUUxaGRISnBlQ0JoWEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2JTQlVhR1VnY205M0lHOW1abk5sZEZ4dUlDb2dRSEpsZEhWeWJpQjdRWEp5WVhrOGJuVnRZbVZ5UG4wZ1VtOTNJRzBnWm5KdmJTQnRZWFJ5YVhnZ1lWeHVJQ292WEc1dFlYUXVjbTkzSUQwZ0tHRXNJRzBwSUQwK0lIdGNiaUFnWTI5dWMzUWdjeUE5SUNodElDMGdNU2tnS2lCaExtNDdYRzRnSUhKbGRIVnliaUJoTG1WdWRISnBaWE11YzJ4cFkyVW9jeXdnY3lBcklHRXViaWs3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRWRsZENCaElHTnZiSFZ0YmlCbWNtOXRJR0VnYldGMGNtbDRJR0Z6SUdGdUlHRnljbUY1WEc0Z0tpQkFjR0Z5WVcwZ2UyMWhkSDBnWVNCTllYUnlhWGdnWVZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHNGdWR2hsSUdOdmJIVnRiaUJ2Wm1aelpYUmNiaUFxSUVCeVpYUjFjbTRnZTBGeWNtRjVQRzUxYldKbGNqNTlJRU52YkhWdGJpQnVJR1p5YjIwZ2JXRjBjbWw0SUdGY2JpQXFMMXh1YldGMExtTnZiQ0E5SUNoaExDQnVLU0E5UGlCMGFXMWxjeWhwSUQwK0lHMWhkQzVuWlhRb1lTd2dLR2tnS3lBeEtTd2diaWtzSUdFdWJTazdYRzVjYmk4cUtseHVJQ29nUVdSa0lHMWhkSEpwWTJWelhHNGdLaUJBY0dGeVlXMGdlMjFoZEgwZ1lTQk5ZWFJ5YVhnZ1lWeHVJQ29nUUhCaGNtRnRJSHR0WVhSOUlHSWdUV0YwY21sNElHSmNiaUFxSUVCeVpYUjFjbTRnZTIxaGRIMGdZU0FySUdKY2JpQXFMMXh1YldGMExtRmtaQ0E5SUNoaExDQmlLU0E5UGlCaExtMGdQVDA5SUdJdWJTQW1KaUJoTG00Z1BUMDlJR0l1YmlBbUppQnRZWFF1YldGd0tHRXNJQ2gyTENCcEtTQTlQaUIySUNzZ1lpNWxiblJ5YVdWelcybGRLVHRjYmx4dUx5b3FYRzRnS2lCVGRXSjBjbUZqZENCdFlYUnlhV05sYzF4dUlDb2dRSEJoY21GdElIdHRZWFI5SUdFZ1RXRjBjbWw0SUdGY2JpQXFJRUJ3WVhKaGJTQjdiV0YwZlNCaUlFMWhkSEpwZUNCaVhHNGdLaUJBY21WMGRYSnVJSHR0WVhSOUlHRWdMU0JpWEc0Z0tpOWNibTFoZEM1emRXSWdQU0FvWVN3Z1lpa2dQVDRnWVM1dElEMDlQU0JpTG0wZ0ppWWdZUzV1SUQwOVBTQmlMbTRnSmlZZ2JXRjBMbTFoY0NoaExDQW9kaXdnYVNrZ1BUNGdkaUF0SUdJdVpXNTBjbWxsYzF0cFhTazdYRzVjYmk4cUtseHVJQ29nVFhWc2RHbHdiSGtnYldGMGNtbGpaWE5jYmlBcUlFQndZWEpoYlNCN2JXRjBmU0JoSUUxaGRISnBlQ0JoWEc0Z0tpQkFjR0Z5WVcwZ2UyMWhkSDBnWWlCTllYUnlhWGdnWWx4dUlDb2dRSEpsZEhWeWJpQjdiV0YwZkdKdmIyeGxZVzU5SUdGaUlHOXlJR1poYkhObElHbG1JSFJvWlNCdFlYUnlhV05sY3lCallXNXViM1FnWW1VZ2JYVnNkR2x3YkdsbFpGeHVJQ292WEc1dFlYUXViWFZzSUQwZ0tHRXNJR0lwSUQwK0lIdGNiaUFnYVdZZ0tHRXViaUFoUFQwZ1lpNXRLU0I3SUhKbGRIVnliaUJtWVd4elpUc2dmVnh1SUNCamIyNXpkQ0J5WlhOMWJIUWdQU0J0WVhRb1lTNXRMQ0JpTG00cE8xeHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Uc2dhU0E4UFNCaExtMDdJR2tyS3lrZ2UxeHVJQ0FnSUdadmNpQW9iR1YwSUdvZ1BTQXhPeUJxSUR3OUlHSXVianNnYWlzcktTQjdYRzRnSUNBZ0lDQnRZWFF1YzJWMEtISmxjM1ZzZEN3Z2FTd2dhaXdnWkc5MEtHMWhkQzV5YjNjb1lTd2dhU2tzSUcxaGRDNWpiMndvWWl3Z2Fpa3BLVHRjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjbVYwZFhKdUlISmxjM1ZzZER0Y2JuMDdYRzVjYmk4cUtseHVJQ29nVTJOaGJHVWdZU0J0WVhSeWFYaGNiaUFxSUVCd1lYSmhiU0I3YldGMGZTQmhJRTFoZEhKcGVDQmhYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnWWlCVFkyRnNZWElnWWx4dUlDb2dRSEpsZEhWeWJpQjdiV0YwZlNCaElDb2dZbHh1SUNvdlhHNXRZWFF1YzJOaGJHVWdQU0FvWVN3Z1lpa2dQVDRnYldGMExtMWhjQ2hoTENCMklEMCtJSFlnS2lCaUtUdGNibHh1THlvcVhHNGdLaUJVY21GdWMzQnZjMlVnWVNCdFlYUnlhWGhjYmlBcUlFQndZWEpoYlNCN2JXRjBmU0JoSUZSb1pTQnRZWFJ5YVhnZ2RHOGdkSEpoYm5Od2IzTmxYRzRnS2lCQWNtVjBkWEp1SUh0dFlYUjlJRUVnZEhKaGJuTndiM05sWkNCdFlYUnlhWGhjYmlBcUwxeHViV0YwTG5SeVlXNXpJRDBnWVNBOVBpQnRZWFFvWVM1dUxDQmhMbTBzSUhScGJXVnpLR2tnUFQ0Z2JXRjBMbU52YkNoaExDQW9hU0FySURFcEtTd2dZUzV1S1M1bWJHRjBLQ2twTzF4dVhHNHZLaXBjYmlBcUlFZGxkQ0IwYUdVZ2JXbHViM0lnYjJZZ1lTQnRZWFJ5YVhoY2JpQXFJRUJ3WVhKaGJTQjdiV0YwZlNCaElFMWhkSEpwZUNCaFhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdhU0JVYUdVZ2NtOTNJRzltWm5ObGRGeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJR29nVkdobElHTnZiSFZ0YmlCdlptWnpaWFJjYmlBcUlFQnlaWFIxY200Z2UyMWhkSHhpYjI5c1pXRnVmU0JVYUdVZ0tHa3NJR29wSUcxcGJtOXlJRzltSUcxaGRISnBlQ0JoSUc5eUlHWmhiSE5sSUdsbUlIUm9aU0J0WVhSeWFYZ2dhWE1nYm05MElITnhkV0Z5WlZ4dUlDb3ZYRzV0WVhRdWJXbHViM0lnUFNBb1lTd2dhU3dnYWlrZ1BUNGdlMXh1SUNCcFppQW9ZUzV0SUNFOVBTQmhMbTRwSUhzZ2NtVjBkWEp1SUdaaGJITmxPeUI5WEc0Z0lHTnZibk4wSUdWdWRISnBaWE1nUFNCYlhUdGNiaUFnWm05eUlDaHNaWFFnYVdrZ1BTQXhPeUJwYVNBOFBTQmhMbTA3SUdscEt5c3BJSHRjYmlBZ0lDQnBaaUFvYVdrZ1BUMDlJR2twSUhzZ1kyOXVkR2x1ZFdVN0lIMWNiaUFnSUNCbWIzSWdLR3hsZENCcWFpQTlJREU3SUdwcUlEdzlJR0V1YmpzZ2Ftb3JLeWtnZTF4dUlDQWdJQ0FnYVdZZ0tHcHFJRDA5UFNCcUtTQjdJR052Ym5ScGJuVmxPeUI5WEc0Z0lDQWdJQ0JsYm5SeWFXVnpMbkIxYzJnb2JXRjBMbWRsZENoaExDQnBhU3dnYW1vcEtUdGNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NtVjBkWEp1SUcxaGRDaGhMbTBnTFNBeExDQmhMbTRnTFNBeExDQmxiblJ5YVdWektUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1IyVjBJSFJvWlNCa1pYUmxjbTFwYm1GdWRDQnZaaUJoSUcxaGRISnBlRnh1SUNvZ1FIQmhjbUZ0SUh0dFlYUjlJR0VnVFdGMGNtbDRJR0ZjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY254aWIyOXNaV0Z1ZlNCOFlYd2diM0lnWm1Gc2MyVWdhV1lnZEdobElHMWhkSEpwZUNCcGN5QnViM1FnYzNGMVlYSmxYRzRnS2k5Y2JtMWhkQzVrWlhRZ1BTQmhJRDArSUh0Y2JpQWdhV1lnS0dFdWJTQWhQVDBnWVM1dUtTQjdJSEpsZEhWeWJpQm1ZV3h6WlRzZ2ZWeHVJQ0JwWmlBb1lTNXRJRDA5UFNBeEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdFdVpXNTBjbWxsYzFzd1hUdGNiaUFnZlZ4dUlDQnBaaUFvWVM1dElEMDlQU0F5S1NCN1hHNGdJQ0FnY21WMGRYSnVJR0V1Wlc1MGNtbGxjMXN3WFNBcUlHRXVaVzUwY21sbGMxc3pYU0F0SUdFdVpXNTBjbWxsYzFzeFhTQXFJR0V1Wlc1MGNtbGxjMXN5WFR0Y2JpQWdmVnh1SUNCc1pYUWdkRzkwWVd3Z1BTQXdMQ0J6YVdkdUlEMGdNVHRjYmlBZ1ptOXlJQ2hzWlhRZ2FpQTlJREU3SUdvZ1BEMGdZUzV1T3lCcUt5c3BJSHRjYmlBZ0lDQjBiM1JoYkNBclBTQnphV2R1SUNvZ1lTNWxiblJ5YVdWelcyb2dMU0F4WFNBcUlHMWhkQzVrWlhRb2JXRjBMbTFwYm05eUtHRXNJREVzSUdvcEtUdGNiaUFnSUNCemFXZHVJQ285SUMweE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCMGIzUmhiRHRjYm4wN1hHNWNiaThxS2x4dUlDb2dUbTl5YldGc2FYTmxJR0VnYldGMGNtbDRYRzRnS2lCQWNHRnlZVzBnZTIxaGRIMGdZU0JVYUdVZ2JXRjBjbWw0SUhSdklHNXZjbTFoYkdselpWeHVJQ29nUUhKbGRIVnliaUI3YldGMGZHSnZiMnhsWVc1OUlGNWhJRzl5SUdaaGJITmxJR2xtSUhSb1pTQnRZWFJ5YVhnZ2FYTWdibTkwSUhOeGRXRnlaVnh1SUNvdlhHNXRZWFF1Ym05eUlEMGdZU0E5UGlCN1hHNGdJR2xtSUNoaExtMGdJVDA5SUdFdWJpa2dleUJ5WlhSMWNtNGdabUZzYzJVN0lIMWNiaUFnWTI5dWMzUWdaQ0E5SUcxaGRDNWtaWFFvWVNrN1hHNGdJSEpsZEhWeWJpQnRZWFF1YldGd0tHRXNJR2tnUFQ0Z2FTQXFJR1FwTzF4dWZUdGNibHh1THlvcVhHNGdLaUJIWlhRZ2RHaGxJR0ZrYW5WbllYUmxJRzltSUdFZ2JXRjBjbWw0WEc0Z0tpQkFjR0Z5WVcwZ2UyMWhkSDBnWVNCVWFHVWdiV0YwY21sNElHWnliMjBnZDJocFkyZ2dkRzhnWjJWMElIUm9aU0JoWkdwMVoyRjBaVnh1SUNvZ1FISmxkSFZ5YmlCN2JXRjBmU0JVYUdVZ1lXUnFkV2RoZEdVZ2IyWWdZVnh1SUNvdlhHNXRZWFF1WVdScUlEMGdZU0E5UGlCN1hHNGdJR052Ym5OMElHMXBibTl5Y3lBOUlHMWhkQ2hoTG0wc0lHRXViaWs3WEc0Z0lHWnZjaUFvYkdWMElHa2dQU0F4T3lCcElEdzlJR0V1YlRzZ2FTc3JLU0I3WEc0Z0lDQWdabTl5SUNoc1pYUWdhaUE5SURFN0lHb2dQRDBnWVM1dU95QnFLeXNwSUh0Y2JpQWdJQ0FnSUcxaGRDNXpaWFFvYldsdWIzSnpMQ0JwTENCcUxDQnRZWFF1WkdWMEtHMWhkQzV0YVc1dmNpaGhMQ0JwTENCcUtTa3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dUlDQmpiMjV6ZENCamIyWmhZM1J2Y25NZ1BTQnRZWFF1YldGd0tHMXBibTl5Y3l3Z0tIWXNJR2twSUQwK0lIWWdLaUFvYVNBbElESWdQeUF0TVNBNklERXBLVHRjYmlBZ2NtVjBkWEp1SUcxaGRDNTBjbUZ1Y3loamIyWmhZM1J2Y25NcE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCSFpYUWdkR2hsSUdsdWRtVnljMlVnYjJZZ1lTQnRZWFJ5YVhoY2JpQXFJRUJ3WVhKaGJTQjdiV0YwZlNCaElGUm9aU0J0WVhSeWFYZ2dkRzhnYVc1MlpYSjBYRzRnS2lCQWNtVjBkWEp1SUh0dFlYUjhZbTl2YkdWaGJuMGdZVjR0TVNCdmNpQm1ZV3h6WlNCcFppQjBhR1VnYldGMGNtbDRJR2hoY3lCdWJ5QnBiblpsY25ObFhHNGdLaTljYm0xaGRDNXBibllnUFNCaElEMCtJSHRjYmlBZ2FXWWdLR0V1YlNBaFBUMGdZUzV1S1NCN0lISmxkSFZ5YmlCbVlXeHpaVHNnZlZ4dUlDQmpiMjV6ZENCa0lEMGdiV0YwTG1SbGRDaGhLVHRjYmlBZ2FXWWdLR1FnUFQwOUlEQXBJSHNnY21WMGRYSnVJR1poYkhObE95QjlYRzRnSUhKbGRIVnliaUJ0WVhRdWMyTmhiR1VvYldGMExtRmthaWhoS1N3Z01TQXZJR1FwTzF4dWZUdGNibHh1THlvcVhHNGdLaUJEYUdWamF5QnBaaUIwZDI4Z2JXRjBjbWxqWlhNZ1lYSmxJR1Z4ZFdGc1hHNGdLaUJBY0dGeVlXMGdlMjFoZEgwZ1lTQk5ZWFJ5YVhnZ1lWeHVJQ29nUUhCaGNtRnRJSHR0WVhSOUlHSWdUV0YwY21sNElHSmNiaUFxSUVCeVpYUjFjbTRnZTJKdmIyeGxZVzU5SUZSeWRXVWdhV1lnYldGMGNtbGpaWE1nWVNCaGJtUWdZaUJoY21VZ2FXUmxiblJwWTJGc0xDQm1ZV3h6WlNCdmRHaGxjbmRwYzJWY2JpQXFMMXh1YldGMExtVnhJRDBnS0dFc0lHSXBJRDArSUdFdWJTQTlQVDBnWWk1dElDWW1JR0V1YmlBOVBUMGdZaTV1SUNZbUlHMWhkQzV6ZEhJb1lTa2dQVDA5SUcxaGRDNXpkSElvWWlrN1hHNWNiaThxS2x4dUlDb2dRMjl3ZVNCaElHMWhkSEpwZUZ4dUlDb2dRSEJoY21GdElIdHRZWFI5SUdFZ1ZHaGxJRzFoZEhKcGVDQjBieUJqYjNCNVhHNGdLaUJBY21WMGRYSnVJSHR0WVhSOUlFRWdZMjl3ZVNCdlppQnRZWFJ5YVhnZ1lWeHVJQ292WEc1dFlYUXVZM0I1SUQwZ1lTQTlQaUJ0WVhRb1lTNXRMQ0JoTG00c0lGc3VMaTVoTG1WdWRISnBaWE5kS1R0Y2JseHVMeW9xWEc0Z0tpQkJJR1oxYm1OMGFXOXVJSFJ2SUdOaGJHd2diMjRnWldGamFDQmxiblJ5ZVNCdlppQmhJRzFoZEhKcGVGeHVJQ29nUUdOaGJHeGlZV05ySUcxaGRISnBlRTFoY0VOaGJHeGlZV05yWEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2RtRnNkV1VnVkdobElHVnVkSEo1SUhaaGJIVmxYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYVc1a1pYZ2dWR2hsSUdWdWRISjVJR2x1WkdWNFhHNGdLaUJBY0dGeVlXMGdlMEZ5Y21GNVBHNTFiV0psY2o1OUlHVnVkSEpwWlhNZ1ZHaGxJR0Z5Y21GNUlHOW1JRzFoZEhKcGVDQmxiblJ5YVdWelhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlJRlJvWlNCdFlYQndaV1FnWlc1MGNubGNiaUFxTDF4dVhHNHZLaXBjYmlBcUlFTmhiR3dnWVNCbWRXNWpkR2x2YmlCdmJpQmxZV05vSUdWdWRISjVJRzltSUdFZ2JXRjBjbWw0SUdGdVpDQmlkV2xzWkNCaElHNWxkeUJ0WVhSeWFYZ2dabkp2YlNCMGFHVWdjbVZ6ZFd4MGMxeHVJQ29nUUhCaGNtRnRJSHR0WVhSOUlHRWdUV0YwY21sNElHRmNiaUFxSUVCd1lYSmhiU0I3YldGMGNtbDRUV0Z3UTJGc2JHSmhZMnQ5SUdZZ1ZHaGxJR1oxYm1OMGFXOXVJSFJ2SUdOaGJHd2diMjRnWldGamFDQmxiblJ5ZVNCdlppQjBhR1VnYldGMGNtbDRYRzRnS2lCQWNtVjBkWEp1SUh0dFlYUjlJRTFoZEhKcGVDQmhJRzFoY0hCbFpDQjBhSEp2ZFdkb0lHWmNiaUFxTDF4dWJXRjBMbTFoY0NBOUlDaGhMQ0JtS1NBOVBpQnRZWFFvWVM1dExDQmhMbTRzSUdFdVpXNTBjbWxsY3k1dFlYQW9aaWtwTzF4dVhHNHZLaXBjYmlBcUlFTnZiblpsY25RZ1lTQnRZWFJ5YVhnZ2FXNTBieUJoSUhOMGNtbHVaMXh1SUNvZ1FIQmhjbUZ0SUh0dFlYUjlJR0VnVkdobElHMWhkSEpwZUNCMGJ5QmpiMjUyWlhKMFhHNGdLaUJBY0dGeVlXMGdlM04wY21sdVozMGdXMjF6UFNjc0lDZGRJRlJvWlNCelpYQmhjbUYwYjNJZ2MzUnlhVzVuSUdadmNpQmpiMngxYlc1elhHNGdLaUJBY0dGeVlXMGdlM04wY21sdVozMGdXMjV6UFNkY1hHNG5YU0JVYUdVZ2MyVndZWEpoZEc5eUlITjBjbWx1WnlCbWIzSWdjbTkzYzF4dUlDb2dRSEpsZEhWeWJpQjdjM1J5YVc1bmZTQkJJSE4wY21sdVp5QnlaWEJ5WlhObGJuUmhkR2x2YmlCdlppQjBhR1VnYldGMGNtbDRYRzRnS2k5Y2JtMWhkQzV6ZEhJZ1BTQW9ZU3dnYlhNZ1BTQW5MQ0FuTENCdWN5QTlJQ2RjWEc0bktTQTlQaUJqYUhWdWF5aGhMbVZ1ZEhKcFpYTXNJR0V1YmlrdWJXRndLSElnUFQ0Z2NpNXFiMmx1S0cxektTa3VhbTlwYmlodWN5azdYRzVjYm1sbUlDaDBlWEJsYjJZZ2JXOWtkV3hsSUNFOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dUlDQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlIc2dkbVZqTENCdFlYUWdmVHRjYm4xY2JpSXNJaTh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYm5aaGNpQmZYM2RsWW5CaFkydGZiVzlrZFd4bFgyTmhZMmhsWDE4Z1BTQjdmVHRjYmx4dUx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYm1aMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHgwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNWNkSFpoY2lCallXTm9aV1JOYjJSMWJHVWdQU0JmWDNkbFluQmhZMnRmYlc5a2RXeGxYMk5oWTJobFgxOWJiVzlrZFd4bFNXUmRPMXh1WEhScFppQW9ZMkZqYUdWa1RXOWtkV3hsSUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmx4MFhIUnlaWFIxY200Z1kyRmphR1ZrVFc5a2RXeGxMbVY0Y0c5eWRITTdYRzVjZEgxY2JseDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JseDBkbUZ5SUcxdlpIVnNaU0E5SUY5ZmQyVmljR0ZqYTE5dGIyUjFiR1ZmWTJGamFHVmZYMXR0YjJSMWJHVkpaRjBnUFNCN1hHNWNkRngwTHk4Z2JtOGdiVzlrZFd4bExtbGtJRzVsWldSbFpGeHVYSFJjZEM4dklHNXZJRzF2WkhWc1pTNXNiMkZrWldRZ2JtVmxaR1ZrWEc1Y2RGeDBaWGh3YjNKMGN6b2dlMzFjYmx4MGZUdGNibHh1WEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNibHgwWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWDF0dGIyUjFiR1ZKWkYwb2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNWNibHgwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmx4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1ZlZ4dVhHNGlMQ0pjSW5WelpTQnpkSEpwWTNSY0lqdGNiazlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCY0lsOWZaWE5OYjJSMWJHVmNJaXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYm1OdmJuTjBJSFpsWTE4eElEMGdjbVZ4ZFdseVpTaGNJa0JpWVhObGJXVnVkSFZ1YVhabGNuTmxMM1psWTF3aUtUdGNibU5zWVhOeklFUmxZblZuSUh0Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lodmNIUnBiMjV6S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjNCMGFXOXVjeUE5SUU5aWFtVmpkQzVoYzNOcFoyNG9lMzBzSUVSbFluVm5MbVJsWm1GMWJIUlBjSFJwYjI1ekxDQnZjSFJwYjI1eklDRTlQU0J1ZFd4c0lDWW1JRzl3ZEdsdmJuTWdJVDA5SUhadmFXUWdNQ0EvSUc5d2RHbHZibk1nT2lCN2ZTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRtRnNkV1Z6SUQwZ2JtVjNJRTFoY0NncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG0xaGNtdGxjbk1nUFNCdVpYY2dUV0Z3S0NrN1hHNGdJQ0FnZlZ4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVsdWFYUnBZV3hwYzJVZ2RHaGxJR1JsWW5WbklISmxibVJsY21WeUlHWnZjaUJrYVhOd2JHRjVhVzVuSUhaaGJIVmxjeUJoYm1RZ2JXRnlhMlZ5YzF4dUlDQWdJQ0FxTDF4dUlDQWdJSE4wWVhScFl5QnBibWwwYVdGc2FYTmxLRzl3ZEdsdmJuTWdQU0I3ZlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvUkdWaWRXY3VhVzV6ZEdGdVkyVWdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RFWldKMVp5Qm9ZWE1nWVd4eVpXRmtlU0JpWldWdUlHbHVhWFJwWVd4cGMyVmtKeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1JHVmlkV2N1YVc1emRHRnVZMlVnUFNCdVpYY2dSR1ZpZFdjb2IzQjBhVzl1Y3lrN1hHNGdJQ0FnZlZ4dUlDQWdJSE4wWVhScFl5Qm5aWFJKYm5OMFlXNWpaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLRVJsWW5WbkxtbHVjM1JoYm1ObElEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25SR1ZpZFdjZ2JtOTBJSEJ5YjNCbGNteDVJR2x1YVhScFlXeHBjMlZrSnlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlFUmxZblZuTG1sdWMzUmhibU5sTzF4dUlDQWdJSDFjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJUYUc5M0lHRWdaR1ZpZFdjZ2RtRnNkV1ZjYmlBZ0lDQWdLaTljYmlBZ0lDQnpkR0YwYVdNZ2RtRnNkV1VvYkdGaVpXd3NJSFpoYkhWbExDQnZjSFJwYjI1ektTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHVjM1JoYm1ObElEMGdSR1ZpZFdjdVoyVjBTVzV6ZEdGdVkyVW9LVHRjYmlBZ0lDQWdJQ0FnYVc1emRHRnVZMlV1ZG1Gc2RXVnpMbk5sZENoc1lXSmxiQ3dnVDJKcVpXTjBMbUZ6YzJsbmJpaDdJR3hoWW1Wc0xDQjJZV3gxWlNCOUxDQnBibk4wWVc1alpTNXZjSFJwYjI1ekxtUmxabUYxYkhSV1lXeDFaU3dnYjNCMGFXOXVjeWtwTzF4dUlDQWdJSDFjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJUYUc5M0lHRWdiV0Z5YTJWeUlHbHVJSGR2Y214a0lHOXlJSE5qY21WbGJpQnpjR0ZqWlZ4dUlDQWdJQ0FxTDF4dUlDQWdJSE4wWVhScFl5QnRZWEpyWlhJb2JHRmlaV3dzSUhaaGJIVmxMQ0J3YjNOcGRHbHZiaXdnYjNCMGFXOXVjeWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JwYm5OMFlXNWpaU0E5SUVSbFluVm5MbWRsZEVsdWMzUmhibU5sS0NrN1hHNGdJQ0FnSUNBZ0lHbHVjM1JoYm1ObExtMWhjbXRsY25NdWMyVjBLR3hoWW1Wc0xDQlBZbXBsWTNRdVlYTnphV2R1S0hzZ2JHRmlaV3dzSUhaaGJIVmxMQ0J3YjNOcGRHbHZiaUI5TENCcGJuTjBZVzVqWlM1dmNIUnBiMjV6TG1SbFptRjFiSFJOWVhKclpYSXNJRzl3ZEdsdmJuTXBLVHRjYmlBZ0lDQjlYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVZ1WkdWeUlIUm9aU0JrWldKMVp5QjJZV3gxWlhNZ1lXNWtJRzFoY210bGNuTWdiMjUwYnlCaElHTmhiblpoYzF4dUlDQWdJQ0FxTDF4dUlDQWdJSE4wWVhScFl5QmtjbUYzS0dOdmJuUmxlSFFwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYVc1emRHRnVZMlVnUFNCRVpXSjFaeTVuWlhSSmJuTjBZVzVqWlNncE8xeHVJQ0FnSUNBZ0lDQXZMeUJFY21GM0lIZHZjbXhrTFhOd1lXTmxJRzFoY210bGNuTmNiaUFnSUNBZ0lDQWdZMjl1ZEdWNGRDNXpZWFpsS0NrN1hHNGdJQ0FnSUNBZ0lHbHVjM1JoYm1ObExtMWhjbXRsY25NdVptOXlSV0ZqYUNodFlYSnJaWElnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHMWhjbXRsY2k1emNHRmpaU0E5UFQwZ0ozZHZjbXhrSnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHVjM1JoYm1ObExtUnlZWGROWVhKclpYSW9ZMjl1ZEdWNGRDd2diV0Z5YTJWeUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJR052Ym5SbGVIUXVjbVZ6ZEc5eVpTZ3BPMXh1SUNBZ0lDQWdJQ0F2THlCRWNtRjNJSFpoYkhWbGN5QmhibVFnYzJOeVpXVnVMWE53WVdObElHMWhjbXRsY25OY2JpQWdJQ0FnSUNBZ1kyOXVkR1Y0ZEM1ellYWmxLQ2s3WEc0Z0lDQWdJQ0FnSUdOdmJuUmxlSFF1YzJWMFZISmhibk5tYjNKdEtERXNJREFzSURBc0lERXNJREFzSURBcE8xeHVJQ0FnSUNBZ0lDQnNaWFFnY0c5emFYUnBiMjQ3WEc0Z0lDQWdJQ0FnSUd4bGRDQnNaV1owV1NBOUlHbHVjM1JoYm1ObExtOXdkR2x2Ym5NdWJXRnlaMmx1TzF4dUlDQWdJQ0FnSUNCc1pYUWdjbWxuYUhSWklEMGdhVzV6ZEdGdVkyVXViM0IwYVc5dWN5NXRZWEpuYVc0N1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUd4cGJtVklaV2xuYUhRZ1BTQW9hVzV6ZEdGdVkyVXViM0IwYVc5dWN5NXNhVzVsU0dWcFoyaDBJQ3NnYVc1emRHRnVZMlV1YjNCMGFXOXVjeTV3WVdSa2FXNW5JQ29nTWlrN1hHNGdJQ0FnSUNBZ0lHbHVjM1JoYm1ObExuWmhiSFZsY3k1bWIzSkZZV05vS0haaGJIVmxJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCZllTd2dYMklzSUY5akxDQmZaRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITjNhWFJqYUNBb2RtRnNkV1V1WVd4cFoyNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDZHNaV1owSnpwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjRzl6YVhScGIyNGdQU0FvTUN3Z2RtVmpYekV1ZG1WaktTaHBibk4wWVc1alpTNXZjSFJwYjI1ekxtMWhjbWRwYml3Z2JHVm1kRmtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaV1owV1NBclBTQnNhVzVsU0dWcFoyaDBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDZHlhV2RvZENjNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ2YzJsMGFXOXVJRDBnS0RBc0lIWmxZMTh4TG5abFl5a29ZMjl1ZEdWNGRDNWpZVzUyWVhNdVkyeHBaVzUwVjJsa2RHZ2dMU0JwYm5OMFlXNWpaUzV2Y0hScGIyNXpMbTFoY21kcGJpd2djbWxuYUhSWktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21sbmFIUlpJQ3M5SUd4cGJtVklaV2xuYUhRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhVzV6ZEdGdVkyVXVaSEpoZDB4aFltVnNLR052Ym5SbGVIUXNJQ2gyWVd4MVpTNXphRzkzVEdGaVpXd2dQeUJnSkh0MllXeDFaUzVzWVdKbGJIMDZJR0FnT2lBbkp5a2dLeUJnSkh0MllXeDFaUzUyWVd4MVpYMWdMQ0J3YjNOcGRHbHZiaXdnZG1Gc2RXVXVZV3hwWjI0c0lDaGZZU0E5SUhaaGJIVmxMbkJoWkdScGJtY3BJQ0U5UFNCdWRXeHNJQ1ltSUY5aElDRTlQU0IyYjJsa0lEQWdQeUJmWVNBNklHbHVjM1JoYm1ObExtOXdkR2x2Ym5NdWNHRmtaR2x1Wnl3Z0tGOWlJRDBnZG1Gc2RXVXVabTl1ZENrZ0lUMDlJRzUxYkd3Z0ppWWdYMklnSVQwOUlIWnZhV1FnTUNBL0lGOWlJRG9nYVc1emRHRnVZMlV1YjNCMGFXOXVjeTVtYjI1MExDQW9YMk1nUFNCMllXeDFaUzVtYjNKbFozSnZkVzVrUTI5c2IzVnlLU0FoUFQwZ2JuVnNiQ0FtSmlCZll5QWhQVDBnZG05cFpDQXdJRDhnWDJNZ09pQnBibk4wWVc1alpTNXZjSFJwYjI1ekxtWnZjbVZuY205MWJtUkRiMnh2ZFhJc0lDaGZaQ0E5SUhaaGJIVmxMbUpoWTJ0bmNtOTFibVJEYjJ4dmRYSXBJQ0U5UFNCdWRXeHNJQ1ltSUY5a0lDRTlQU0IyYjJsa0lEQWdQeUJmWkNBNklHbHVjM1JoYm1ObExtOXdkR2x2Ym5NdVltRmphMmR5YjNWdVpFTnZiRzkxY2lrN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0JwYm5OMFlXNWpaUzV0WVhKclpYSnpMbVp2Y2tWaFkyZ29iV0Z5YTJWeUlEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h0WVhKclpYSXVjM0JoWTJVZ1BUMDlJQ2R6WTNKbFpXNG5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVc1emRHRnVZMlV1WkhKaGQwMWhjbXRsY2loamIyNTBaWGgwTENCdFlYSnJaWElwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ1kyOXVkR1Y0ZEM1eVpYTjBiM0psS0NrN1hHNGdJQ0FnSUNBZ0lDOHZJRU5zWldGeUlIWmhiSFZsY3lCaGJtUWdiV0Z5YTJWeWN5QnlaV0ZrZVNCbWIzSWdibVY0ZENCbWNtRnRaVnh1SUNBZ0lDQWdJQ0JwYm5OMFlXNWpaUzUyWVd4MVpYTXVZMnhsWVhJb0tUdGNiaUFnSUNBZ0lDQWdhVzV6ZEdGdVkyVXViV0Z5YTJWeWN5NWpiR1ZoY2lncE8xeHVJQ0FnSUgxY2JpQWdJQ0JrY21GM1RXRnlhMlZ5S0dOdmJuUmxlSFFzSUcxaGNtdGxjaWtnZTF4dUlDQWdJQ0FnSUNCMllYSWdYMkVzSUY5aUxDQmZZeXdnWDJRc0lGOWxPMXh1SUNBZ0lDQWdJQ0JqYjI1MFpYaDBMbk5oZG1Vb0tUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2NHOXphWFJwYjI0Z1BTQW9YMkVnUFNCdFlYSnJaWEl1Y0c5emFYUnBiMjRwSUNFOVBTQnVkV3hzSUNZbUlGOWhJQ0U5UFNCMmIybGtJREFnUHlCZllTQTZJQ2d3TENCMlpXTmZNUzUyWldNcEtDazdYRzRnSUNBZ0lDQWdJR2xtSUNodFlYSnJaWEl1YzJodmQweGhZbVZzSUh4OElHMWhjbXRsY2k1emFHOTNWbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaSEpoZDB4aFltVnNLR052Ym5SbGVIUXNJQ2h0WVhKclpYSXVjMmh2ZDB4aFltVnNJRDhnWUNSN2JXRnlhMlZ5TG14aFltVnNmVG9nWUNBNklDY25LU0FySUNodFlYSnJaWEl1YzJodmQxWmhiSFZsSUQ4Z1lDUjdiV0Z5YTJWeUxuWmhiSFZsZldBZ09pQW5KeWtzSUhabFkxOHhMblpsWXk1aFpHUW9jRzl6YVhScGIyNGdJVDA5SUc1MWJHd2dKaVlnY0c5emFYUnBiMjRnSVQwOUlIWnZhV1FnTUNBL0lIQnZjMmwwYVc5dUlEb2dLREFzSUhabFkxOHhMblpsWXlrb0tTd2diV0Z5YTJWeUxteGhZbVZzVDJabWMyVjBLU3dnSjJ4bFpuUW5MQ0FvWDJJZ1BTQnRZWEpyWlhJdWNHRmtaR2x1WnlrZ0lUMDlJRzUxYkd3Z0ppWWdYMklnSVQwOUlIWnZhV1FnTUNBL0lGOWlJRG9nZEdocGN5NXZjSFJwYjI1ekxuQmhaR1JwYm1jc0lDaGZZeUE5SUcxaGNtdGxjaTVtYjI1MEtTQWhQVDBnYm5Wc2JDQW1KaUJmWXlBaFBUMGdkbTlwWkNBd0lEOGdYMk1nT2lCMGFHbHpMbTl3ZEdsdmJuTXVabTl1ZEN3Z0tGOWtJRDBnYldGeWEyVnlMbVp2Y21WbmNtOTFibVJEYjJ4dmRYSXBJQ0U5UFNCdWRXeHNJQ1ltSUY5a0lDRTlQU0IyYjJsa0lEQWdQeUJmWkNBNklIUm9hWE11YjNCMGFXOXVjeTVtYjNKbFozSnZkVzVrUTI5c2IzVnlMQ0FvWDJVZ1BTQnRZWEpyWlhJdVltRmphMmR5YjNWdVpFTnZiRzkxY2lrZ0lUMDlJRzUxYkd3Z0ppWWdYMlVnSVQwOUlIWnZhV1FnTUNBL0lGOWxJRG9nZEdocGN5NXZjSFJwYjI1ekxtSmhZMnRuY205MWJtUkRiMnh2ZFhJcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR2xtSUNodFlYSnJaWEl1YzJodmQwMWhjbXRsY2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWRHVjRkQzVzYVc1bFYybGtkR2dnUFNBeU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWRHVjRkQzV6ZEhKdmEyVlRkSGxzWlNBOUlHTnZiblJsZUhRdVptbHNiRk4wZVd4bElEMGdiV0Z5YTJWeUxtMWhjbXRsY2tOdmJHOTFjanRjYmlBZ0lDQWdJQ0FnSUNBZ0lITjNhWFJqYUNBb2JXRnlhMlZ5TG0xaGNtdGxjbE4wZVd4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmVDYzZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaSEpoZDBOeWIzTnpLR052Ym5SbGVIUXNJSEJ2YzJsMGFXOXVMQ0J0WVhKclpYSXViV0Z5YTJWeVUybDZaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKeXNuT2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1SeVlYZFFiSFZ6S0dOdmJuUmxlSFFzSUhCdmMybDBhVzl1TENCdFlYSnJaWEl1YldGeWEyVnlVMmw2WlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSnk0bk9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtUnlZWGRFYjNRb1kyOXVkR1Y0ZEN3Z2NHOXphWFJwYjI0c0lHMWhjbXRsY2k1dFlYSnJaWEpUYVhwbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdZMjl1ZEdWNGRDNXlaWE4wYjNKbEtDazdYRzRnSUNBZ2ZWeHVJQ0FnSUdSeVlYZE1ZV0psYkNoamIyNTBaWGgwTENCMFpYaDBMQ0J3YjNOcGRHbHZiaXdnWVd4cFoyNHNJSEJoWkdScGJtY3NJR1p2Ym5Rc0lHWnZjbVZuY205MWJtUkRiMnh2ZFhJc0lHSmhZMnRuY205MWJtUkRiMnh2ZFhJcElIdGNiaUFnSUNBZ0lDQWdZMjl1ZEdWNGRDNXpZWFpsS0NrN1hHNGdJQ0FnSUNBZ0lHTnZiblJsZUhRdVptOXVkQ0E5SUdadmJuUTdYRzRnSUNBZ0lDQWdJR052Ym5SbGVIUXVkR1Y0ZEVKaGMyVnNhVzVsSUQwZ0ozUnZjQ2M3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR0poWTJ0bmNtOTFibVJUYVhwbElEMGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2QybGtkR2c2SUdOdmJuUmxlSFF1YldWaGMzVnlaVlJsZUhRb2RHVjRkQ2t1ZDJsa2RHZ2dLeUJ3WVdSa2FXNW5JQ29nTWl4Y2JpQWdJQ0FnSUNBZ0lDQWdJR2hsYVdkb2REb2dkR2hwY3k1dmNIUnBiMjV6TG14cGJtVklaV2xuYUhRZ0t5QndZV1JrYVc1bklDb2dNaXhjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZUNBOUlHRnNhV2R1SUQwOVBTQW5jbWxuYUhRbklEOGdLSEJ2YzJsMGFXOXVMbmdnTFNCaVlXTnJaM0p2ZFc1a1UybDZaUzUzYVdSMGFDa2dPaUJ3YjNOcGRHbHZiaTU0TzF4dUlDQWdJQ0FnSUNBdkx5QkVjbUYzSUdKaFkydG5jbTkxYm1SY2JpQWdJQ0FnSUNBZ1kyOXVkR1Y0ZEM1bWFXeHNVM1I1YkdVZ1BTQmlZV05yWjNKdmRXNWtRMjlzYjNWeU8xeHVJQ0FnSUNBZ0lDQmpiMjUwWlhoMExtWnBiR3hTWldOMEtIZ2dMU0J3WVdSa2FXNW5MQ0J3YjNOcGRHbHZiaTU1SUMwZ2NHRmtaR2x1Wnl3Z1ltRmphMmR5YjNWdVpGTnBlbVV1ZDJsa2RHZ3NJR0poWTJ0bmNtOTFibVJUYVhwbExtaGxhV2RvZENrN1hHNGdJQ0FnSUNBZ0lDOHZJRVJ5WVhjZ2RHVjRkRnh1SUNBZ0lDQWdJQ0JqYjI1MFpYaDBMbVpwYkd4VGRIbHNaU0E5SUdadmNtVm5jbTkxYm1SRGIyeHZkWEk3WEc0Z0lDQWdJQ0FnSUdOdmJuUmxlSFF1Wm1sc2JGUmxlSFFvZEdWNGRDd2dlQ3dnY0c5emFYUnBiMjR1ZVNrN1hHNGdJQ0FnSUNBZ0lHTnZiblJsZUhRdWNtVnpkRzl5WlNncE8xeHVJQ0FnSUgxY2JpQWdJQ0JrY21GM1EzSnZjM01vWTI5dWRHVjRkQ3dnY0c5emFYUnBiMjRzSUhOcGVtVXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWRHVjRkQzVpWldkcGJsQmhkR2dvS1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYUdGc1psTnBlbVVnUFNCemFYcGxJQzhnTWp0Y2JpQWdJQ0FnSUNBZ1kyOXVkR1Y0ZEM1dGIzWmxWRzhvY0c5emFYUnBiMjR1ZUNBdElHaGhiR1pUYVhwbExDQndiM05wZEdsdmJpNTVJQzBnYUdGc1psTnBlbVVwTzF4dUlDQWdJQ0FnSUNCamIyNTBaWGgwTG14cGJtVlVieWh3YjNOcGRHbHZiaTU0SUNzZ2FHRnNabE5wZW1Vc0lIQnZjMmwwYVc5dUxua2dLeUJvWVd4bVUybDZaU2s3WEc0Z0lDQWdJQ0FnSUdOdmJuUmxlSFF1Ylc5MlpWUnZLSEJ2YzJsMGFXOXVMbmdnTFNCb1lXeG1VMmw2WlN3Z2NHOXphWFJwYjI0dWVTQXJJR2hoYkdaVGFYcGxLVHRjYmlBZ0lDQWdJQ0FnWTI5dWRHVjRkQzVzYVc1bFZHOG9jRzl6YVhScGIyNHVlQ0FySUdoaGJHWlRhWHBsTENCd2IzTnBkR2x2Ymk1NUlDMGdhR0ZzWmxOcGVtVXBPMXh1SUNBZ0lDQWdJQ0JqYjI1MFpYaDBMbk4wY205clpTZ3BPMXh1SUNBZ0lIMWNiaUFnSUNCa2NtRjNVR3gxY3loamIyNTBaWGgwTENCd2IzTnBkR2x2Yml3Z2MybDZaU2tnZTF4dUlDQWdJQ0FnSUNCamIyNTBaWGgwTG1KbFoybHVVR0YwYUNncE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCb1lXeG1VMmw2WlNBOUlITnBlbVVnTHlBeU8xeHVJQ0FnSUNBZ0lDQmpiMjUwWlhoMExtMXZkbVZVYnlod2IzTnBkR2x2Ymk1NExDQndiM05wZEdsdmJpNTVJQzBnYUdGc1psTnBlbVVwTzF4dUlDQWdJQ0FnSUNCamIyNTBaWGgwTG14cGJtVlVieWh3YjNOcGRHbHZiaTU0TENCd2IzTnBkR2x2Ymk1NUlDc2dhR0ZzWmxOcGVtVXBPMXh1SUNBZ0lDQWdJQ0JqYjI1MFpYaDBMbTF2ZG1WVWJ5aHdiM05wZEdsdmJpNTRJQzBnYUdGc1psTnBlbVVzSUhCdmMybDBhVzl1TG5rcE8xeHVJQ0FnSUNBZ0lDQmpiMjUwWlhoMExteHBibVZVYnlod2IzTnBkR2x2Ymk1NElDc2dhR0ZzWmxOcGVtVXNJSEJ2YzJsMGFXOXVMbmtwTzF4dUlDQWdJQ0FnSUNCamIyNTBaWGgwTG5OMGNtOXJaU2dwTzF4dUlDQWdJSDFjYmlBZ0lDQmtjbUYzUkc5MEtHTnZiblJsZUhRc0lIQnZjMmwwYVc5dUxDQnphWHBsS1NCN1hHNGdJQ0FnSUNBZ0lHTnZiblJsZUhRdVltVm5hVzVRWVhSb0tDazdYRzRnSUNBZ0lDQWdJR052Ym5SbGVIUXVZWEpqS0hCdmMybDBhVzl1TG5nc0lIQnZjMmwwYVc5dUxua3NJSE5wZW1VZ0x5QXlMQ0F3TENCTllYUm9MbEJKSUNvZ01pazdYRzRnSUNBZ0lDQWdJR052Ym5SbGVIUXVabWxzYkNncE8xeHVJQ0FnSUgxY2JuMWNibVY0Y0c5eWRITXVaR1ZtWVhWc2RDQTlJRVJsWW5Wbk8xeHVSR1ZpZFdjdVpHVm1ZWFZzZEU5d2RHbHZibk1nUFNCN1hHNGdJQ0FnYldGeVoybHVPaUF4TUN4Y2JpQWdJQ0J3WVdSa2FXNW5PaUEwTEZ4dUlDQWdJR1p2Ym5RNklDY3hNSEIwSUV4MVkybGtZU0JEYjI1emIyeGxMQ0J0YjI1dmMzQmhZMlVuTEZ4dUlDQWdJR3hwYm1WSVpXbG5hSFE2SURFeUxGeHVJQ0FnSUdadmNtVm5jbTkxYm1SRGIyeHZkWEk2SUNjalptWm1KeXhjYmlBZ0lDQmlZV05yWjNKdmRXNWtRMjlzYjNWeU9pQW5Jek16TXljc1hHNGdJQ0FnWkdWbVlYVnNkRlpoYkhWbE9pQjdYRzRnSUNBZ0lDQWdJR0ZzYVdkdU9pQW5iR1ZtZENjc1hHNGdJQ0FnSUNBZ0lITm9iM2RNWVdKbGJEb2dkSEoxWlN4Y2JpQWdJQ0I5TEZ4dUlDQWdJR1JsWm1GMWJIUk5ZWEpyWlhJNklIdGNiaUFnSUNBZ0lDQWdjMmh2ZDB4aFltVnNPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQnphRzkzVm1Gc2RXVTZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lITm9iM2ROWVhKclpYSTZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lHMWhjbXRsY2xOcGVtVTZJRFlzWEc0Z0lDQWdJQ0FnSUcxaGNtdGxjbE4wZVd4bE9pQW5lQ2NzWEc0Z0lDQWdJQ0FnSUcxaGNtdGxja052Ykc5MWNqb2dKeU5qWTJNbkxGeHVJQ0FnSUNBZ0lDQnpjR0ZqWlRvZ0ozZHZjbXhrSnl4Y2JpQWdJQ0FnSUNBZ2JHRmlaV3hQWm1aelpYUTZJQ2d3TENCMlpXTmZNUzUyWldNcEtERXdLU3hjYmlBZ0lDQjlMRnh1ZlR0Y2JpOHZJeUJ6YjNWeVkyVk5ZWEJ3YVc1blZWSk1QV1JoZEdFNllYQndiR2xqWVhScGIyNHZhbk52Ymp0aVlYTmxOalFzWlhsS01scFlTbnBoVnpsMVNXcHZla3hEU20xaFYzaHNTV3B2YVdGWE5XdGFXR2QxWVc1TmFVeERTbnBpTTFaNVdUSldVMkl5T1RCSmFtOXBTV2wzYVdNeU9URmpiVTVzWTNsSk5sZDVTWFZNYVRsd1ltMVNiR1ZETlRCamVVcGtURU5LZFZsWE1XeGplVWsyVnpFd2MwbHRNV2hqU0VKd1ltMWtla2xxYjJsUGVuUkNVVlZHUWt4RGRFUlJWVVV3VVhwMFFsRlliRVpPVlUxelZGVkdRbU5WU1hOVE1FWkNVM3AwU2xGWFpFUmxSVWx6VjFWR1FtSXdTWE5VTUVaQ1N6QkpOMVZWUmtSaGExRnpVMVZHUWxOVGVFUlJWVVpFVEVVNVFsRlZPSE5TTUVaQ1VubDRUbEZWUms1TVJVNUNVVlZOYzFSVlJrSlVVM2hFVVZWR1JFeEZWa0pSVlZWelVsVkdRbEpUZUV4UlZVWk1URVZPUWxGVlRYTlpNRVpDV1hsNFJsRlZSa1pNUlRsQ1VWVTRjMWxWUmtKVlEzaFFVVlZHVUV4SFRrSlJWa0Z6VkRCR1FsUjVlRWhSVlVaS1RFVldRbEZWVlhOUk1FWkNVWGw0UkZGVlJrUlBNVVpDVVROU1JreEZiRUpSVld0elVUQkdRbEY1ZUU1UlZVWk9URVZrUWxGVlkzTlRWVVpDVTFONFNGRlZSa2hNUlZaQ1VWaE9RMHhGVGtKUlZVMDNWVlZHUkU1VlRYTlRWVVpDVTFONFJGRlZSa1JNUlRsQ1VWVTRjMUl3UmtKU2VYaEtVVlZHU2t4RlpFSlJWV056VWxWR1FtUlZTWE5STUVaQ1VYcDBTbEZWVG05U1EzaEVVVlZHUkU4d2JFSlNWVkUzVHpBNVFsSlZZemRUVlVaRVUxTjRUbEZWUms1TVJVNUNVVlZOYzFaVlJrSldVM2hFVVZWR1JFeEdWa0pSVjJ4RVRFVldRbEZWVlRkVlZVWkVUVlZSYzFOVlJrSlRVM2hNVVZWR1RFeEZUa0pSVlUxelZWVkdRbFZUZUV4UlZVWk1URVpPUWxGV1RYTlNWVVpDVWxSMFdsRlZUbTlSZVhoT1VWVkdUa3hGYkVKUlZXdHpVekJHUWxONWVFUlJWVVpFVEVjNVJGRlZSblpSZVhoRVVWVkdSRXhGVGtKUlZVMDNWVEJHUkdSclVUZFZWVVpFVWtONFRGRlZSa3hNUlU1Q1VWVk5jMVZWUmtKVlUzaElVVlZHU0V4RmJFSlJWV3R6VXpCR1FsTjVlRVJSVlVaRVRFVTVRbEZWT0hOUk1FWkNVWGw0UkZGVlJrUlBNR3hDVVROU1JFeEZUa0pSVlUwM1UxVkdSbFI1ZUU1UlZVWk9URVZPUWxGVlRYTldNRVpDVm5wMFVsRlZUalJSYVhoS1VWVkdTa3hGZEVKUlZYTnpVVEJHUWxGNWVGSlJWVVpTVEVWMFFsRlZjM05WTUVaQ1ZYbDRSbEZWUmtaUE1XeENVVEpvUkV4Rk1VSlJWVEJ6VTFWR1FsTlRlRXhSVlVaTVRFVk9RbEZWVFhOYU1FNUNVVmRrUkV4RlRrSlJWVTF6VVRCR1FsRjZkRlJSVlU1MVVrUjBVbEZWVmtWTVJUbENVVlU0YzFNd1JrSlRlWGhFVVZWR1JFeEdSa0pSVmtWelVUQkdRbEY2ZEVwUlZVNDBVV2w0UkZGVlJrUlBNR3hDVWxWUk4wOHdPVUpTVldNM1UxVkdSRk5UZUU1UlZVWk9URVZPUWxGVlRYTlRNRVpDVTNsNFJGRlZUbkZSYVhoTVVWVkdhRXhGVmtKUk1rbHpVekJHUW1Nd1NYTlNWVVpFWkVWSmMxUXdSa0pPYTBrM1ZWVkdSazR3U1hOVVZVWkNWRk40VWxGVlJsSk1SV1JDVVZWamMxTXdSa0pUZVhoRVVWVkdSRXhHWkVKUlZtTnpVbFZHUWxKVGVFUlJWVVpFVHpGR1FsSllTa1JNUmtaQ1VWWkZjMUV3UmtKUmVYaE9VVlZHVGt4RlRrSlJWVTF6VWpCR1FsSjVlRVJSVlVaRVRFVjBRbEZWYzNOU1ZVWkNVbE40VGxGVlJrNU1SVTVDVVZWTmMxUlZSa0pVVTNoRVVWVk9NRkY1ZUVaUlZVWkdURVYwUWxGVmMzTlNWVVpDVWxONFRGRlZSa3hNUlZaQ1VWVlZjMUpWUmtSaFJVbHpWVlZHUWxWVGVFUlJWVVpFVEVVNVFsRlZPSE5STUVaQ1VYbDRXbEZWUmxwTVJWWkNVWHBrUTB4Rk9VSlJWVGh6VVRCR1JGVnBlRVJSVlVaRVRFVk9RbEZWVFRkVFZVWkVWRU40UkZGVlJrUlBNR3hDVWxWUk4wOHdPVUpTVldNM1UxVkdSRk5UZUU1UlZVWk9URVZPUWxGVlRYTlVWVVpDVkZONFJGRlZUbk5SYVhoTVVWVkdhRXhGVmtKUk1rbHpVekJHUW1Nd1NYTlNWVVpFWkVWSmMxVlZSa0paVTNoR1VWVk9hVXhGT1VKUlZHaERUekZHUWxKVWJFTk1SVEZDVVZVd2MxVlZSa0pWVTNoSVVWVkdTRXhGZEVKUlZYTnpVVEJHUWxGNWVGaFJWVVpZVEVWV1FsRlZWWE5STUVaQ1VYcDBVbEZWVm5sUmVYaFNVVlZHVWt4RlRrSlJWVTF6VkRCR1FsUjVlRVJSVlVaRVRFVmtRbEZWWTNOUk1FWkNVWGw0VEZGVlJreE1SVlpDVVZWVmMxUlZSa0pVVTNoRVVWVkdSRXhGTVVKUlZUQnpVVEJHUkdSclRYTlNWVVpDVWxONFRGRlZSa3hNUlZaQ1VWVlZjMU13UmtKVGVYaEdVVlZHUmt4R1JrSlJWa1Z6VWxWR1FsSlRlRVpSVlUxNFVXbDRVbEZWUmxKTVJVNUNVVlZOYzFRd1JrSlVlWGhFVVZWR1JFeEhSa0pSVjBWelVsVkdSRTlWU1hOVU1FWkNWSGw0UkZGVlRsTk1SVTVDVVZWTmMxRXdSa0pSZW5SS1VWVk9UVXhGVGtKUlZVMDNVMVZHUmxKRWN6ZFVNRVpHVW5wMFNsRlZUa3BNUlRGQ1VWVXdjMUV3UmtKUmVYaEtVVlZHU2t4RlRrSlJWVTF6VkRCR1FtRlZUVGRWVlVaRVlrVlJjMVJWUmtKVVUzaFNVVlZHVWt4RlpFSlJWV056VXpCR1FsTjVlRVJSVlVaRVRFWmtRbEZXWTNOU1ZVWkNVbE40UkZGVlJrUlBNVVpDVWxoS1JFeEVTa05SVlVWNVVXcDBVbEZWVFhwUmFYaFFVVlZHVUV4RlRrSlJWVTF6VTFWR1FsTlRlRVpSVlVaR1RFVk9RbEZWVFRkVlZVWkVXbWw0VWxGVlJsSk1SVTVDVVZWTmMxUXdSa0pVZVhoRVVWVkdSRXhGT1VKUlZUaHpVVEJHUWxGNWVFNVJWVVpPVEVWT1FsRlZUWE5TVlVaQ1VsUjBXbEZWVG05UmVYaEtVVlZHU2t4Rk1VSlJWVEJ6VVRCR1FsRjVlRXhSVlVaTVRFVjBRbEZWYzNOVU1FWkNWSGw0UmxGVlJrWlBNbVJEVVZWTk1WRnBlRkpSVlVaU1RFVk9RbEZWVFhOV1ZVWkNWbE40UkZGVlJrUk1SVGxDVVZVNGMxSlZSa0pTVTNoT1VWVkdUa3hGVGtKUlZVMXpVVEJHUWxGNmRHaFJWVTR3VVhwMFVsRlZUa2xNUlU1Q1VWVk5jMUV3UmtKUmVYaEVVVlZHUkU4eFJrSlJNR2R6VkRCR1FsUjVlRVJSVlVaRVRFVTVRbEZWT0hOU1ZVWkNVbE40UkZGVlJrUlBNVVpDVWxkNFEweElWa1JSVlVZeFVYcDBVbEZWVGpKUmVYaFFVVlZHVUV4RlRrSlJWVTF6VTFWR1FsTlRlRVpSVlVaR1RFVk9RbEZWVFRkVlZVWkVXbWw0VUZGVlJsQk1SVTVDVVZWTmMxZFZSa0pYVTNoRVVWVkdSRXhGVGtKUlZVMXpVbFZHUWxKVGVFUlJWVVpFVEVWV1FsRlZWWE5STUVaQ1VYbDRSbEZWUmtaTVJVNUNVVlZOYzFKVlJrSlNVM2hFVVZWR1JFeEZWa0pSVlZWelVUQkdRbEY1ZUVSUlZVWkVURVZPUWxGVlRUZFZWVVpFWkd0TmMxTlZSa0pUVTNoU1VWVkdhRXhGVGtKUlZVMDNWVlZHUkdKRlNYTlRWVVpDVTFONFRGRlZSa3hNUldSQ1VWVmpjMVZWUmtKVlUzaEVVVlZHUkV4Rk9VSlJWVGh6VVRCR1FsRjVlRTVSVlVaT1RFVk9RbEZWVFRkVlZVWkVZMFZOYzFOVlJrSlRVM2hPVVZWR1RreEZaRUpSVldOelZWVkdRbFZUZUVSUlZVWkVURVU1UWxGVk9ITlJNRVpDVVhsNFRsRlZSazVNUlU1Q1VWVk5OMVZWUmtSamEwMXpWRlZHUWxSVGVGWlJWVVpXVEVWa1FsRlZZM05STUVaQ1VYbDRVbEZWUmxKTVJVNUNVVlZOYzFRd1JrSlVlWGhFVVZWR1JFeEdWa0pSVmxWelVqQkdRbEo1ZUZKUlZVWlNURVZPUWxGVlRYTlVNRVpDVkhsNFJGRlZSa1JNUlRsQ1VWVTRjMUl3UmtKU2VYaEVVVlZHUkV4RlRrSlJWVTF6VVRCR1FsRjZkRkpSVlU1dlVtbDRVbEZWUmxKTVJVNUNVVlZOYzFSVlJrSlVVM2hFVVZWR1JFeEZPVUpSVlRoelVUQkdRbEY1ZUV4UlZVWk1URVZPUWxGVlRYTlNWVVpDVWxSek4xZFZSa1JQVlVselZWVkdRbFZUZUV4UlZVWk1URVZPUWxGVlRYTlRNRVpDVTNsNFJsRlZSa1pQTW1SRFVWVk9kVkZwZUV4UlZVWk1URVV4UWxGVk1EZGlNRXBDVVRGUmMxVlZSa0pWVTNoSVVWVkdTRXhGYkVKUlZVVnpWVEJHUWxKNWVFWlJWVVpFVEVaR1FsRldSWE5STUVaQ1VYbDRVRkZWUmxCTVJVNUNVVlZOYzFSVlJrSlVVM2hHVVZWR1JreEZkRUpSVlhOelVUQkdRbEY1ZUVSUlZVWkVUekk1UTFGVlRYWlJlWGhNVVZWR1RFeEZiRUpSVld0elZsVkdRbFpUZUVSUlZVWkVUekk1UTFGVlRuZFJhWGhPVVZWR1RrOHlaRU5SVlU1VFRFVjBRbEZWYzNOVU1FWkNWSHAwZGxGclJrUldhWGhTVVZWR1VreEZaRUpSVldOelUxVkdRbEZUZUZSUlZVWklURVZXUWxGVlRYTlVNRVpDVkhsNFJGRlZSa1JNUlRGQ1VWVXdjMUV3UmtKUmVYaFlVVlZHV0V4RlpFSlJWV056VlZWR1FsVlRlRVJSVlVaRVRFVTVRbEZWT0hOUk1FWkNVWGw0VGxGVlJrNU1SVlpDVVZWVmMxUlZSa0pVVTNoRVVWVkdSRXhGVGtKUlZVMDNZakJLUWxGNlpFWk1SVEZDVVZVd2MxTlZSa0pUVTNoV1VWVkdWa3hGVGtKUlZVMDNZakJLUWxFelNrTk1SVEZDVVZVd04xbFZSa1JXUkhSYVVWVk9SVXhHUmtKUlZrVnpVVEJHUWxGNWVGUlJWVVpVVEVWT1FsRXlhRU5NUlRsQ1VWVTRjMUpWUmtSVlEzaEVVVlZHUkV4RmRFSlJWWE56VVRCR1FsRjVlRlJSVlVaVVRFVk9RbEZWVFhOUk1FWkNVWGw0UkZGVlJrUk1SV1JDVVZWamMxTXdSa0pUZVhoRVVWVkdSRXhGZEVKUlZYTnpVMVZHUWxOVGVFUlJWVVpFVEVWT1FsRlZUWE5STUVaQ1VYbDRSbEZWUmtaTVJVNUNVVlZOYzFJd1JrSlNlWGhJVVZWR1NFeEZkRUpSVlhOelVUQkdRbEY1ZUV4UlZVWk1URVZXUWxGVlZYTlNWVVpFVDFWUmMxVlZSa0pWVTNoR1VWVk9VMHhGZEVKUlZYTnpVVEJHUWxGNWVFeFJWVVpNVEVWV1FsRXhaM05VVlVaQ1VWTjRURkZWUmt4TVJVNUNVVlZOYzFRd1JrSlVlWGgwVVRCR1FsTlRlRkpSVlVaU1RFVk9RbEZWVFhOVU1FWkNWSGw0UkZGVlJrUk1SVGxDVVZVNGMxSlZSa1JsYTAxelZGVkdRbEZUZUV4UlZVWk1URVZPUWxGVlRYTlRWVVpDVTFONGRGRXdSa0pUVTNoU1VWVkdVa3hGVGtKUlZVMXpWREJHUWxSNWVFUlJWVVpFVEVWc1FsRlZhM05TVlVaRVltdE5jMVJWUmtKUlUzaE1VVlZHVEV4RlRrSlJWVTF6V2pCS1FsRlhaRU5NUnpGRVVWVkdTa3hHUmtKUlZrVnpVVEJHUWxGNWVGQlJWVVpRVEVWT1FsRlZUWE5hTUVwQ1VWZGtRMHhGVmtKUmVrNUZURVV4UWxGVlJYTlRNRVpDVTNsNFJGRlZSa1JNUjJSRFVWVkdibEZwZUhSUk1FWkNVMU40VWxGVlJsSk1SVTVDVVZWTmMxUXdSa0pVZVhoRVVWVkdSRXhIWkVOUlZVWnVVV2w0UkZGVlRURlNRM2hFVVZWR1JFOHhSa0pSTUc5elVUQkdRbEY1ZUVSUlZVWkVURVZPUWxGVlRUZFZWVVpFVTBONFVsRlZSbEpNUlU1Q1VWVk5jMVF3UmtKVWVYaEVVVlZHUkV4Rk9VSlJWVGh6VVRCR1FsRjVlRTVSVlVaT1RFVk9RbEZWVFhOU1ZVWkNVbFIwV2xGVlRtOVJlWGhLVVZWR1NreEZNVUpSVlRCelVUQkdRbEY1ZUV4UlZVWk1URVYwUWxGVmMzTlZWVVpDVlZONFJsRlZSa1pQTW1SRFVWVk5NMUZwZUZKUlZVWlNURVZPUWxGVlRYTldWVVpDVmxONFJGRlZSa1JNUlRsQ1VWVTRjMUpWUmtKU1UzaE9VVlZHVGt4RlRrSlJWVTF6VVRCR1FsRjZkR2hSVlU0d1VYcDBVbEZWVGtsTVJVNUNVVlZOYzFFd1JrSlJlWGhFVVZWR1JFOHhSa0pSTUdkelZEQkdRbFI1ZUVSUlZVWkVURVU1UWxGVk9ITlNWVVpDVWxONFJGRlZSa1JQTVVaQ1VsZDRRMHhIWkVWUlZVWnVVa1IwVWxGVlRtOVNRM2hTVVZWR1VreEZUa0pSVlUxelZGVkdRbFJUZUVSUlZVWkVURVYwUWxGVmMzTlNWVVpDVWxONFJGRlZSa1JQTVVaQ1VUTm9RMHhHUmtKUlZrVnpVVEJHUWxGNWVGQlJWVVpRVEVWT1FsRlZUWE5UTUVaQ1UzbDRSbEZWUmtaTVJVNUNVVlZOTjFOVlJrUk5NRWx6VVRCR1FsRjZkRXBSVlZaUVRFWldRbEZXVlhOUk1FWkNVWGw0VUZGVlJuQlJlWGhHVVZWR1JreEZNVUpSVnpGRFQzcDBVbEZWVGpKU1UzaFFVVlZHVUV4RlRrSlJWVTF6VTFWR1FsTlRlRVpSVlVaR1RFVk9RbEZWVFRkVlZVWkVXbWw0VGxGVlJrNU1Sa1pDVVZaRmMxSXdSa0pTZVhoT1VWVkdRa3hGTVVKUlZUQnpVVEJHUWxGNWVGSlJWVVpTVEVjeFJGRlZSa3BNUld4Q1VWVkZjMVV3UmtKU2VYaElVVlZHUmt4RlRrSlJWVTAzVlZWR1JFMVZUWE5UVlVaQ1UxTjRUbEZWUms1TVJVNUNVVlZOYzFVd1JrSlZlWGhLVVZWR1NreEZNVUpSVlRCelVUQkdRbEY1ZUZSUlZVWlVURVZXUWxGVlZUZFhWVVpFWlVWTmMxTlZSa0pUVTNoRVVWVkdSRXhHVGtKUlZrMXpVVEJHUkZkcGVGQlJWVVpRVEVWV1FsRXhRWE5STUVaQ1VYbDRUbEZWUms1TVJVNUNVVlZOYzFVd1JrSlZlWGhFVVZWR1JFeEZUa0pSVlUxelVUQkdRbEY1ZUVoUlZVWklURVV4UWxGVk1ITlJNRVpDVVhsNFRGRlZSa3hNUld4Q1VWVnJjMUV3UmtKUmVYaEVVVlZHUkV4RlRrSlJWVTF6VWxWR1FsSlRlRVJSVlVaRVRFVmtRbEZWWTNOUk1FWkNVWGw0VGxGVlJrNU1SVTVDVVZWTmMxVXdSa0pWZVhoRVVWVkdSRXhGVGtKUlZVMXpVVEJHUWxGNWVFaFJWVVpJVEVVeFFsRlZNSE5STUVaQ1VYbDRURkZWUmt4TVJWWkNVVlZWYzFFd1JrSlJlWGhFVVZWR1JFeEZUa0pSVlUxelVsVkdRbEpUZUVSUlZVWkVURVZXUWxGNlRrZE1SazVDVVZWamMxRXdSa0pSZVhoSVVWVkdTRXhGVGtKUlZVMXpWVlZHUWxWVGVHaFJWVVpUVEVaR1FsRldSWE5aTUVaQ1ZXbDRVbEZWUmxKTVJXUkNVVlZyYzFOVlJrSlJVM2hVVVZWR1NFeEZaRUpSVlZWelVsVkdRbEpUZUU1UlZVWk9URVZPUWxGVlRYTldNRVpDVm5sNFJGRlZSa1JNUlZaQ1VYcHNSRXhGTVVKUlZUQnpVbFZHUkZScGVFNVJWVVpDVEVVeFFsRlZNSE5STUVaQ1VYbDRVRkZWUmxCTVJ6RkVVVlZHU2t4RmJFSlJWV3R6VVRCR1FsRjVlRkJSVlVaUVRFVk9RbEZWVFhOVU1FWkNWSGw0UmxGVlRqQlJlWGhPVVZWR1FreEZNVUpSVlRCelVUQkdRbEY1ZUVwUlZVWktURWN4UkZGVlJrcE1SV3hDVVZWcmMxRXdSa0pSZVhoUVVWVkdVRXhGVGtKUlZVMXpVMVZHUWxOVGVFWlJWVTV2VVhsNFRsRlZSa0pNUlRGQ1VWVXdjMUV3UmtKUmVYaHVVV3RHUWxvd1NYTmlWVTVDVVZWcmMxTlZSa0pUVTNoRVVWVkdSRXhGT1VKUlZUaHpVVEJHUWxGNWVHNVJhMFpDV2pCSmMxSlZSa1JsUlZGelZGVkdRbEZUZUU1UlZVWk9URVZPUWxGVlRYTmFNRXBDVVZka1EweEhNVVJSVlVaS1RFVnNRbEZWYTNOUk1FWkNVWGw0VUZGVlJsQk1SVTVDVVZWTmMxb3dTa0pSVjJSRFRFVk9RbEV6Y0VWTVJVNUNVVlZOTjFVd1JrUlRSSFJTVVZWT1JVeEZiRUpSVld0elZGVkdRbFJUZUVSUlZVWkVURVpXUWxGV1ZYTlNWVVpDVWxSMFdsRlZUbmxSYVhoUVVWVkdVRXhGVGtKUlZVMXpWVEJHUWxWNWVFaFJWVVpJVEVWT1FsRlZUWE5STUVaQ1VYcDBXbEZWVGpCUmFYaFFVVlZHVUV4RlRrSlJWVTF6VmpCR1FsWjVlRWhSVlVaSVRFVTVRbEZWT0hOUk1FWkNVWGw0VkZGVlJsUk1SV1JDVVZWamMxUlZSa0pVVTNoRVVWVkdSRXhHYkVKUlZtdHpVVEJHUWxGNmRGcFJWVTAxVWtONFVsRlZSbEpNUlRGQ1VWVXdjMUV3UmtKUmVYaFlVVlZHV0V4RlZrSlJWVlUzV2pCS1FsRjZSa05NUlhSQ1VWVnpjMUl3UmtKU2VuUjJVV3RHUkZScGVFcFJWVVpLVEVWT1FsRlZUWE5WTUVaQ1ZYbDRSRkZWUmtSTVJUbENVVlU0YzFKVlJrSlNVM2hTVVZWR1VreEZWa0pSVlZWelZGVkdRbFJUZUVSUlZVWkVURVpXUWxGV1ZYTlJNRVpDVVhsNFJGRlZSa1JQTWpsRFVWVk9lVkpEZUU1UlZVWk9UekprUTFGVlRsTk1SWFJDVVZWemMxSXdSa0pTZW5SMlVXdEdSRlJwZUVwUlZVWktURVZPUWxGVlRYTlZWVVpDVlZONFJGRlZSa1JNUlRsQ1VWVTRjMUpWUmtKU1UzaFNVVlZHVWt4RlZrSlJWVlZ6VkZWR1FsUlRlRVJSVlVaRVRFWldRbEZXVlhOUk1FWkNVWGw0UkZGVlJrUlBNamxEVVZWT2QxSkRlRTVSVlVaT1R6SmtRMUZWVGxOTVJYUkNVVlZ6YzFJd1JrSlNlblIyVVd0R1JGUnBlRXBSVlVaS1RFVk9RbEZWVFhOVU1FWkNWSGw0UkZGVlJrUk1SVGxDVVZVNGMxSlZSa0pTVTNoU1VWVkdVa3hGVmtKUlZWVnpWRlZHUWxSVGVFUlJWVVpFVEVaV1FsRldWWE5STUVaQ1VYbDRSRkZWUmtSUE1qbERVVlZPZFZKRGVFNVJWVVpPVHpKR1FsRXhVVGRWTUVaRVVtcDBVbEZWVGtWTVJUbENVVlU0YzFFd1JrSlJlWGhRVVZWR1VFeEZWa0pSVlZWelVUQkdRbEY2ZEVwUlZVNTNVV2w0UkZGVlJrUlBNR3hDVWxVNGMxVXdSa0pWZVhoRVVWVk9iVXhGT1VKUlYyeEVURVZXUWxFeWNFUk1SV3hDVVZacmMxSlZSa1JYYVhoU1VWVkdhRXhGVmtKUk1rbHpVekJHUW1SVlNYTlNWVVpFWkd0SmMxUXdSa0phVTNoR1VWVk9iVXhGYkVKUlZtdHpVbFZHUkZkcGVHNVJhMFpDWkRCSmMxSlZSa1JsUlVseldqQktRbEZZWkVOUE1VWkNVbGhvUTB4Rk9VSlJWVGh6VVRCR1FsRjVlRXBSVlVaS1RFVldRbEZWVlhOUk1FWkNVWHAwVWxGVlRtMU1SVGxDVVZVNGMxRXdSa0pSZVhoS1VWVkdTa3hGWkVKUlZXTnpVMVZHUWxOVGVFUlJWVVpFVHpGR1FsRXpRa05NUlRsQ1VWVTRjMUV3UmtKUmVYaGFVVlZHV2t4RlpFSlJWV056VXpCR1FsTjVlRVJSVlVaRVR6RkdRbEY2WkVOTVJURkNVVlV3YzFrd1JrSlplWGhJVVZWR1NFOHhiRUpSTTBwRFRFVjBRbEZWYzNOU1ZVWkNVbE40VUZGVlJsQk1SVTVDVVZWTmMxWXdSa0pXZVhoRVVWVkdSRXhGYkVKUlZXdHpVVEJHUWxGNWVFUlJWVVpFVEVWMFFsRlZjM05TTUVaQ1VubDRVRkZWUmxCTVJXUkNVVlZqYzFFd1JrSlJlblJhVVZWT2QxSkRlRTVSVlVaT1RFVldRbEZWVlhOVFZVWkNVMU40UkZGVlJrUk1SVGxDVVZVNGMxRXdSa0pSZVhoV1VWVkdWa3hGWkVKUlZXTnpWREJHUWxSNWVFaFJWVVpJVEVWT1FsRlZUVGRWTUVaRVQxVk5jMUV3UmtKUmVuUlNVVlZPUjB4Rk1VSlJWVEJ6VVRCR1FsRjVlRWhSVlVaSVRFVjBRbEZWYzNOVE1FWkNVM2w0VUZGVlJsQk1SVTVDVVZWTmMxRXdSa0pSZVhoRVVWVkdSRXhGVGtKUlZVMXpWVlZHUWxWVGVFUlJWVVpFVEVWT1FsRlZUWE5TTUVaQ1VubDRhbEZWUm1wTVJVNUNVVlZOYzFNd1JrSlRlWGhFVVZWR1JFeEZUa0pSVlUxelVUQkdRbEY1ZUVSUlZVWkVURVpHUWxGV1JYTlJNRVpDVVhsNFJGRlZSa1JNUlU1Q1VWVk5OMVZWUmtaTU1GVnpZVEJLUWxGWGRFTlBNVVpDVVRKNFEweEZPVUpSVlRoelVUQkdRbEY1ZUZSUlZVWlVURVZrUWxGVlkzTmFNRXBDVVZka1EweEZUa0pSVlUwM1ZWVkdSR05yVFhOVU1FWkNWSGw0UkZGVlJrUk1Sa1pDVVZaRmMxRXdSa1JhUTNoRVVWVkdSRXhGWkVKUlZXTnpWREJHUWxSNWVFWlJWVTVaVEVaR1FsRldSWE5STUVaQ1VYbDRSRkZWUmtSTVJXUkNVVlZqYzFRd1JrSlVlWGhHVVZWT2QxRnBlR3BSVlVacVRFVk9RbEZWVFhOVE1FWkNVM2w0UmxGVlRuZFJhWGhxVVZWR2FreEZUa0pSVlUxelZGVkdRbFJUZUVSUlZVNHdVV2w0UkZGVlJrUlBNVVpDVWxWWmMxZFZSa0pYVkhSU1VWVk9ZVXhGT1VKUlZUaHpVVEJHUWxGNWVGUlJWVVpVVEVWa1FsRlZZM05hTUVwQ1VWZGtRMHhGVGtKUlZVMDNWVlZHUkdOclRYTlVNRVpDVkhsNFJGRlZSa1JNUmtaQ1VWWkZjMUV3UmtKUmVYaEtVVlZHU2t4RlZrSlJWVlZ6VVRCR1FsRjVlRVpSVlVaR1RFWkdRbEZXUlhOUk1FWkNVWGw0UkZGVlJrUk1SVTVDVVZWTmMxRXdSa0pSZW5SU1VWVk9NRkY1ZUZCUlZVWlFURVZPUWxGVlRYTlVNRVpDVkhsNFJsRlZSa1pNUlU1Q1VWVk5OMU5WUmtSalJVbHpVVEJHUWxGNmRFcFJWVlpRVEVaT1FsRldUWE5STUVaQ1VYbDRVRkZWUm5CUmVYaEdVVlZHUmt4R1JrSlJWMFZ6VWxWR1FsSlRlRXBSVlVaYVR6RkdRbEY2YkVaTVJUbENVVlU0YzFFd1JrSlJlWGhVVVZWR1ZFeEZWa0pSVlZWelVUQkdRbEY2ZEZKUlZVNTNVV2w0VGxGVlJrNU1Sa1pDVVZaRmMxSXdSa0pTZVhoS1VWVkdTa3hGWkVKUlZXTnpVVEJHUWxGNWVFUlJWVVpFVHpGR1FsRjZSa05NUlRsQ1VWVTRjMUV3UmtKUmVYaE9VVlZHVGt4RlRrSlJWVTF6VlZWR1FsVlRlRVJSVlVaRVRFVk9RbEZWVFhOU01FWkNVbmw0VWxGVlJsSk1SVlpDVVZWVmMxVlZSa0pWVTNoRVVWVkdSRXhGVGtKUlZVMXpVakJHUWxKNWVGSlJWVVpTVEVWT1FsRlZUWE5STUVaQ1VYcDBVbEZWVFROU1EzaFFVVlZHVUV4RlRrSlJWVTF6VkZWR1FsUlRlRVJSVlVaRVRFWkdRbEZXUlhOUk1FWkNVWGw0UkZGVlJrUk1SV1JDVVZWamMxVlZSa0pWVTNoR1VWVkdSa3hHUmtKUlZrVnpVVEJHUWxGNWVFUlJWVVpFVEVWa1FsRlZZM05WVlVaQ1ZWTjRSRkZWUmtSTVJVNUNVVlZOTjFWVlJrUk9NRkZ6VkRCR1FsUjVlRVJSVlVaRVRFVXhRbEZWTUhOUk1FWkNVWGw0VWxGVlJsSk1SVTVDVVZWTmMxRXdSa0pSZVhoSVVWVkdTRXhHUmtKUlZrVnpVbFZHUWxKVGVGSlJWVVpTVEVWT1FsRlZUWE5STUVaQ1VYbDRTRkZWUmtoTVJrWkNVVlpGYzFFd1JrSlJlWGhFVVZWR1JFOHhSa0pSZW1SRlRFVTVRbEZWT0hOUk1FWkNVWGw0VGxGVlJrNU1SVTVDVVZWTmMxVlZSa0pWVTNoRVVWVkdSRXhGVGtKUlZVMXpVakJHUWxKNWVGSlJWVVpTVEVWV1FsRlZWWE5WVlVaQ1ZWTjRSRkZWUmtSTVJVNUNVVlZOYzFJd1JrSlNlWGhTVVZWR1VreEZUa0pSVlUxelVUQkdRbEY2ZEZKUlZVMHpVa040VUZGVlJsQk1SVTVDVVZWTmMxUlZSa0pVVTNoR1VWVkdSa3hGVGtKUlZVMDNVMVZHUkdKclNYTlJNRVpDVVhwMFNsRlZWbEJNUmtaQ1VWWkZjMUV3UmtKUmVYaFFVVlZHY0ZGNWVFWlJWVVpHVEVaR1FsRlhSWE5TVlVaQ1VsTjRTbEZWUmxwUE1VWkNVWHBrUmt4Rk9VSlJWVGh6VVRCR1FsRjVlRlJSVlVaVVRFVldRbEZWVlhOUk1FWkNVWHAwVWxGVlRuZFJhWGhPVVZWR1RreEdSa0pSVmtWelVqQkdRbEo1ZUVwUlZVWktURVZrUWxGVlkzTlJNRVpDVVhsNFJGRlZSa1JQTVVaQ1VYcEdRMHhGT1VKUlZUaHpVVEJHUWxGNWVFNVJWVVpPVEVWT1FsRlZUWE5WVlVaQ1ZWTjRSRkZWUmtSTVJVNUNVVlZOYzFKVlJrSlNVM2hTVVZWR1VreEZUa0pSVlUxelVUQkdRbEY1ZUVoUlZVWklURVpHUWxGV1JYTlJNRVpDVVhsNFJGRlZSa1JQTVVaQ1VUSjRSVXhGT1VKUlZUaHpVVEJHUWxGNWVFNVJWVVpPVEVWT1FsRlZUWE5WVlVaQ1ZWTjRSRkZWUmtSTVJVNUNVVlZOYzFKVlJrSlNVM2hTVVZWR1VreEZUa0pSVlUxelVUQkdRbEY1ZUVoUlZVWklURVpHUWxGV1JYTlJNRVpDVVhsNFJGRlZSa1JQTVVaQ1VUSjRSVXhGT1VKUlZUaHpVVEJHUWxGNWVFNVJWVVpPVEVWT1FsRlZUWE5WVlVaQ1ZWTjRSRkZWUmtSTVJVNUNVVlZOYzFJd1JrSlNlWGhTVVZWR1VreEZWa0pSVlZWelZWVkdRbFZUZUVSUlZVWkVURVZPUWxGVlRYTlJNRVpDVVhsNFJGRlZSa1JQTVVaQ1VUSjRSVXhGT1VKUlZUaHpVVEJHUWxGNWVFNVJWVVpPVEVWT1FsRlZUWE5WVlVaQ1ZWTjRSRkZWUmtSTVJVNUNVVlZOYzFJd1JrSlNlWGhTVVZWR1VreEZWa0pSVlZWelZWVkdRbFZUZUVSUlZVWkVURVZPUWxGVlRYTlJNRVpDVVhsNFJGRlZSa1JQTVVaQ1VUSjRSVXhGT1VKUlZUaHpVVEJHUWxGNWVFNVJWVVpPVEVWV1FsRlZWWE5STUVaQ1VYcDBTbEZWVG5WUmFYaEVVVlZHUkU4d2JFSlNWVGh6VkRCR1FsUjVlRVJSVlVaRVRFVTVRbEZYYkVSTVJWWkNVVlZWYzFWVlJrSlpVM2hHVVZWR1JreEZiRUpSVm1zM1ZWVkdSRTVWVlhOVU1FWkNWSGw0UkZGVlJrUk1SazVDVVZaTmMxSlZSa0pTVTNoRVVWVkdSRTh4UmtKUk0wSkRURVU1UWxGVk9ITlJNRVpDVVhsNFNGRlZSa2hNUlU1Q1VWVk5jMVZWUmtKVlUzaEVVVlZHUkV4RlRrSlJWVTF6VWxWR1FsSlRlRkpSVlVaU1RFVk9RbEZWVFhOUk1FWkNVWGw0UmxGVlJrWk1SV3hDVVZWcmMxSXdSa0pTZVhoRVVWVkdSRXhGVmtKUlZWVnpVVEJHUWxGNWVFWlJWVVpHVEVWc1FsRlZhM05STUVaQ1VYbDRSbEZWUmtaTVJXUkNVVlZqYzFFd1JrSlJlWGhFVVZWR1JFeEZUa0pSVlUwM1ZWVkdSRTlWVVhOVU1FWkNWSGw0UkZGVlJrUk1SV3hDVVZWcmMxSlZSa0pTVTNoRVVWVkdSRTh3YkVKUk1uQkRURVZPUWxGVlRUZFBNRVpDVDFVNVNVeElaRU5SVTNSUVVYcDBRbEZVVmxCbFZVbHpZakJLUWxGWFRYTlNNRVpDWVZWSk4xTlZSa1JqYTFGelZGVkdRbFJUZUVaUlZVWkdURVZXUWxGVlZUZFRWVVpFVm1sNFVGRlZSbEJNUlZaQ1VWVlZjMUV3UmtKUmVuUktVVlZPVjB4RmJFSlJWV3R6VWxWR1FsSlRlRzVSTUVaQ1dqQk5OMU5WUmtSa1JVMXpWbFZHUWxaVGVFWlJWVVpHVEVWV1FsRlZWVGRUVlVaRVdrTjRibEZyUmtKYU1FbHpVbFZHUWxKVGVFNVJWVVpPVHpCc1FsRXphRU5NUjJSRFVWVkdibEZwZUVaUlZVWkdURVV4UWxGVk1EZFRWVVpFWlVWSmMxZFZSa0pYVTNoR1VWVkdSazh4UmtKUk1XOXpVekJHUWxONWVFWlJWVVpHVEVVeFFsRlZNRGRWVlVaRVdXbDRWRkZWUmxSTVJWWkNVVlZWYzFOVlJrSlRWSFJNVVZWT2IxRnFkRXBSVlU1RlRFZEdRbEZYUlhOU1ZVWkNVbFIwVWxGVlRtbE1SazVDVVZaTmMxSlZSa0pTVTNoS1VWVkdTazh4UmtKUk1sbHpWVEJHUWxWNWVFWlJWVVpHVEVWc1FsRlZhemRWVlVaRVdtbDRWbEZWUmxaTVJWWkNVVlZWYzFOVlJrSlRWSFJTVVZWT2IxRnBlRlpSVlVaV1RFVldRbEZWVlhOUk1FWkNVWHAwVWxGVlRtbE1SbVJDVVZaamMxSlZSa0pTVTNoSVVWVkdTRTh4UmtKUk1taERURVpzUWxGV2EzTlNWVVpDVWxONFRsRlZSazVQTVVaQ1VUTkNRMHhGZEVKUlZYTnpVbFZHUWxKVGVGQlJWVVpRVHpGR1FsRXlVWE5XTUVaQ1ZubDRSbEZWUmtaTVJXeENVVlZGYzFVd1JrSlNlWGhHVVZWR1JFeEZWa0pSVlZWelVUQkdRbEY2ZEV4UlZVNTVVV3AwUkZGVlRrZE1SVTVDVVZWTmFXWlJQVDBpWFN3aWJtRnRaWE1pT2x0ZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPSIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gLyoqKioqKi8gKCgpID0+IHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMvdXRpbHMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMvdXRpbHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoKG1vZHVsZSkgPT4ge1xuXG4vKipcbiAqIEBvdmVydmlldyBBIGxpYnJhcnkgb2YgdXNlZnVsIGZ1bmN0aW9uc1xuICogQGF1dGhvciBHb3Jkb24gTGFycmlnYW5cbiAqL1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsXG4gKiBAcGFyYW0ge251bWJlcn0gYSBOdW1iZXIgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgTnVtYmVyIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbcD1OdW1iZXIuRVBTSUxPTl0gVGhlIHByZWNpc2lvbiB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBudW1iZXJzIGEgYW5kIGIgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAqL1xuY29uc3QgZmxvYXRFcXVhbHMgPSAoYSwgYiwgcCA9IE51bWJlci5FUFNJTE9OKSA9PiBNYXRoLmFicyhhIC0gYikgPCBwO1xuXG4vKipcbiAqIENsYW1wIGEgbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgdG8gY2xhbXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWluPTBdIFRoZSBtaW5pbXVtIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW21heD0xXSBUaGUgbWF4aW11bSB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBIGNsYW1wZWQgbnVtYmVyXG4gKi9cbmNvbnN0IGNsYW1wID0gKGEsIG1pbiA9IDAsIG1heCA9IDEpID0+IGEgPCBtaW4gPyBtaW4gOiAoYSA+IG1heCA/IG1heCA6IGEpO1xuXG4vKipcbiAqIEdldCB0aGUgZnJhY3Rpb25hbCBwYXJ0IG9mIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbnVtYmVyIGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBmcmFjdGlvbmFsIHBhcnRcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGZyYWN0aW9uYWwgcGFydCBvZiB0aGUgbnVtYmVyXG4gKi9cbmNvbnN0IGZyYWMgPSBhID0+IGEgPj0gMCA/IGEgLSBNYXRoLmZsb29yKGEpIDogYSAtIE1hdGguY2VpbChhKTtcblxuLyoqXG4gKiBEbyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5jb25zdCBsZXJwID0gKGEsIGIsIGkpID0+IGEgKyAoYiAtIGEpICogaTtcblxuLyoqXG4gKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGkgYmV0d2VlbiBhIGFuZCBiXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxuICovXG5jb25zdCB1bmxlcnAgPSAoYSwgYiwgaSkgPT4gKGkgLSBhKSAvIChiIC0gYSk7XG5cbi8qKlxuICogRG8gYSBiaWxpbmVhciBpbnRlcnBvbGF0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gYzAwIFRvcC1sZWZ0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gYzEwIFRvcC1yaWdodCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMwMSBCb3R0b20tbGVmdCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMxMSBCb3R0b20tcmlnaHQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeCBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHhcbiAqIEBwYXJhbSB7bnVtYmVyfSBpeSBJbnRlcnBvbGF0aW9uIHZhbHVlIGFsb25nIHlcbiAqIEByZXR1cm4ge251bWJlcn0gQSBiaWxpbmVhciBpbnRlcnBvbGF0ZWQgdmFsdWVcbiAqL1xuY29uc3QgYmxlcnAgPSAoYzAwLCBjMTAsIGMwMSwgYzExLCBpeCwgaXkpID0+IGxlcnAobGVycChjMDAsIGMxMCwgaXgpLCBsZXJwKGMwMSwgYzExLCBpeCksIGl5KTtcblxuLyoqXG4gKiBSZS1tYXAgYSBudW1iZXIgaSBmcm9tIHJhbmdlIGExLi4uYTIgdG8gYjEuLi5iMlxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIG51bWJlciB0byByZS1tYXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMVxuICogQHBhcmFtIHtudW1iZXJ9IGEyXG4gKiBAcGFyYW0ge251bWJlcn0gYjFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiMlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5jb25zdCByZW1hcCA9IChpLCBhMSwgYTIsIGIxLCBiMikgPT4gYjEgKyAoaSAtIGExKSAqIChiMiAtIGIxKSAvIChhMiAtIGExKTtcblxuLyoqXG4gKiBEbyBhIHNtb290aCBpbnRlcnBvbGF0aW9uIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW2EsIGJdXG4gKi9cbmNvbnN0IHNtb290aHN0ZXAgPSAoYSwgYiwgaSkgPT4gbGVycChhLCBiLCAzICogTWF0aC5wb3coaSwgMikgLSAyICogTWF0aC5wb3coaSwgMykpO1xuXG4vKipcbiAqIEdldCBhbiBhbmdsZSBpbiByYWRpYW5zXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlcyBUaGUgYW5nbGUgaW4gZGVncmVlc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICovXG5jb25zdCByYWRpYW5zID0gZGVncmVlcyA9PiAoTWF0aC5QSSAvIDE4MCkgKiBkZWdyZWVzO1xuXG4vKipcbiAqIEdldCBhbiBhbmdsZSBpbiBkZWdyZWVzXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFucyBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgaW4gZGVncmVlc1xuICovXG5jb25zdCBkZWdyZWVzID0gcmFkaWFucyA9PiAoMTgwIC8gTWF0aC5QSSkgKiByYWRpYW5zO1xuXG4vKipcbiAqIEdldCBhIHJhbmRvbSBmbG9hdCBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4KVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEV4Y2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcbiAqL1xuY29uc3QgcmFuZG9tQmV0d2VlbiA9IChtaW4sIG1heCkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuXG4vKipcbiAqIEdldCBhIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKi9cbmNvbnN0IHJhbmRvbUludEJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG5cbi8qKlxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IFttdT0wLjVdIFRoZSBtZWFuIHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gW3NpZ21hPTAuNV0gVGhlIHN0YW5kYXJkIGRldmlhdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IFtzYW1wbGVzPTJdIFRoZSBudW1iZXIgb2Ygc2FtcGxlc1xuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcbiAqL1xuY29uc3QgY2x0UmFuZG9tID0gKG11ID0gMC41LCBzaWdtYSA9IDAuNSwgc2FtcGxlcyA9IDIpID0+IHtcbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChsZXQgaSA9IHNhbXBsZXM7IGktLTspIHtcbiAgICB0b3RhbCArPSBNYXRoLnJhbmRvbSgpO1xuICB9XG4gIHJldHVybiBtdSArICh0b3RhbCAtIHNhbXBsZXMgLyAyKSAvIChzYW1wbGVzIC8gMikgKiBzaWdtYTtcbn07XG5cbi8qKlxuICogR2V0IGEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXIgaW4gdGhlIGludGVydmFsIFttaW4sIG1heF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBJbmNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgbm9ybWFsbHktZGlzdHJpYnV0ZWQgcmFuZG9tIGludGVnZXJcbiAqL1xuY29uc3QgY2x0UmFuZG9tSW50ID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKG1pbiArIGNsdFJhbmRvbSgwLjUsIDAuNSwgMikgKiAobWF4ICsgMSAtIG1pbikpO1xuXG4vKipcbiAqIFJldHVybiBhIHdlaWdodGVkIHJhbmRvbSBpbnRlZ2VyXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IHcgQW4gYXJyYXkgb2Ygd2VpZ2h0c1xuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbmRleCBmcm9tIHdcbiAqL1xuY29uc3Qgd2VpZ2h0ZWRSYW5kb20gPSB3ID0+IHtcbiAgbGV0IHRvdGFsID0gdy5yZWR1Y2UoKGEsIGkpID0+IGEgKyBpLCAwKSwgbiA9IDA7XG4gIGNvbnN0IHIgPSBNYXRoLnJhbmRvbSgpICogdG90YWw7XG4gIHdoaWxlICh0b3RhbCA+IHIpIHtcbiAgICB0b3RhbCAtPSB3W24rK107XG4gIH1cbiAgcmV0dXJuIG4gLSAxO1xufTtcblxuLyoqXG4gKiBBbiBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uXG4gKiBAY2FsbGJhY2sgaW50ZXJwb2xhdGlvbkNhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gYSBUaGUgbWluaW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFRoZSBtYXhpbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIGludGVycG9sYXRpb24gdmFsdWUsIHNob3VsZCBiZSBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5cbi8qKlxuICogUmV0dXJuIGFuIGludGVycG9sYXRlZCB2YWx1ZSBmcm9tIGFuIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGEgQW4gYXJyYXkgb2YgdmFsdWVzIGludGVycG9sYXRlXG4gKiBAcGFyYW0ge251bWJlcn0gaSBBIG51bWJlciBpbiB0aGUgaW50ZXJ2YWwgWzAsIDFdXG4gKiBAcGFyYW0ge2ludGVycG9sYXRpb25DYWxsYmFja30gW2Y9TWF0aC5sZXJwXSBUaGUgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiB0byB1c2VcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbbWluKGEpLCBtYXgoYSldXG4gKi9cbmNvbnN0IGxlcnBBcnJheSA9IChhLCBpLCBmID0gbGVycCkgPT4ge1xuICBjb25zdCBzID0gaSAqIChhLmxlbmd0aCAtIDEpO1xuICBjb25zdCBwID0gY2xhbXAoTWF0aC50cnVuYyhzKSwgMCwgYS5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIGYoYVtwXSB8fCAwLCBhW3AgKyAxXSB8fCAwLCBmcmFjKHMpKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjdG9yc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge251bWJlcn0gYSDiiJkgYlxuICovXG5jb25zdCBkb3QgPSAoYSwgYikgPT4gYS5yZWR1Y2UoKG4sIHYsIGkpID0+IG4gKyB2ICogYltpXSwgMCk7XG5cbi8qKlxuICogR2V0IHRoZSBmYWN0b3JpYWwgb2YgYSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEhXG4gKi9cbmNvbnN0IGZhY3RvcmlhbCA9IGEgPT4ge1xuICBsZXQgcmVzdWx0ID0gMTtcbiAgZm9yIChsZXQgaSA9IDI7IGkgPD0gYTsgaSsrKSB7XG4gICAgcmVzdWx0ICo9IGk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBudW1iZXIgb2YgcGVybXV0YXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHBhcmFtIHtudW1iZXJ9IHJcbiAqIEByZXR1cm4ge251bWJlcn0gblByXG4gKi9cbmNvbnN0IHBlcm11dGF0aW9uID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIGZhY3RvcmlhbChuIC0gcik7XG5cbi8qKlxuICogR2V0IHRoZSBudW1iZXIgb2YgY29tYmluYXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhIHNldCBvZiBuIGVsZW1lbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHBhcmFtIHtudW1iZXJ9IHJcbiAqIEByZXR1cm4ge251bWJlcn0gbkNyXG4gKi9cbmNvbnN0IGNvbWJpbmF0aW9uID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIChmYWN0b3JpYWwocikgKiBmYWN0b3JpYWwobiAtIHIpKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIGFycmF5IHZhbHVlc1xuICogQGNhbGxiYWNrIHRpbWVzQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBhcnJheSBpbmRleFxuICogQHJldHVybiB7Kn0gVGhlIGFycmF5IHZhbHVlXG4gKi9cblxuLyoqXG4gKiBSZXR1cm4gYSBuZXcgYXJyYXkgd2l0aCBsZW5ndGggbiBieSBjYWxsaW5nIGZ1bmN0aW9uIGYoaSkgb24gZWFjaCBlbGVtZW50XG4gKiBAcGFyYW0ge3RpbWVzQ2FsbGJhY2t9IGZcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXk8Kj59XG4gKi9cbmNvbnN0IHRpbWVzID0gKGYsIG4pID0+IEFycmF5KG4pLmZpbGwoMCkubWFwKChfLCBpKSA9PiBmKGkpKTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyBudW1iZXJzIDAtPihuIC0gMSlcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBzaXplIG9mIHRoZSBhcnJheVxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gQW4gYXJyYXkgb2YgaW50ZWdlcnMgMC0+KG4gLSAxKVxuICovXG5jb25zdCByYW5nZSA9IG4gPT4gdGltZXMoaSA9PiBpLCBuKTtcblxuLyoqXG4gKiBaaXAgMiBhcnJheXMgdG9nZXRoZXIsIGkuZS4gKFsxLCAyLCAzXSwgW2EsIGIsIGNdKSA9PiBbWzEsIGFdLCBbMiwgYl0sIFszLCBjXV1cbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGJcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn1cbiAqL1xuY29uc3QgemlwID0gKGEsIGIpID0+IGEubWFwKChrLCBpKSA9PiBbaywgYltpXV0pO1xuXG4vKipcbiAqIFJldHVybiBhcnJheVtpXSB3aXRoIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB3cmFwcGluZ1xuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHBvc2l0aXZlbHkvbmVnYXRpdmVseSB3cmFwcGVkIGFycmF5IGluZGV4XG4gKiBAcmV0dXJuIHsqfSBBbiBlbGVtZW50IGZyb20gdGhlIGFycmF5XG4gKi9cbmNvbnN0IGF0ID0gKGEsIGkpID0+IGFbaSA8IDAgPyBhLmxlbmd0aCAtIChNYXRoLmFicyhpICsgMSkgJSBhLmxlbmd0aCkgLSAxIDogaSAlIGEubGVuZ3RoXTtcblxuLyoqXG4gKiBDaG9wIGFuIGFycmF5IGludG8gY2h1bmtzIG9mIHNpemUgblxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNodW5rIHNpemVcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgYXJyYXkgY2h1bmtzXG4gKi9cbmNvbnN0IGNodW5rID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gYS5zbGljZShpICogbiwgaSAqIG4gKyBuKSwgTWF0aC5jZWlsKGEubGVuZ3RoIC8gbikpO1xuXG4vKipcbiAqIFJhbmRvbWx5IHNodWZmbGUgYSBzaGFsbG93IGNvcHkgb2YgYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEByZXR1cm4ge0FycmF5PCo+fSBUaGUgc2h1ZmZsZWQgYXJyYXlcbiAqL1xuY29uc3Qgc2h1ZmZsZSA9IGEgPT4gYS5zbGljZSgpLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG5cbmlmICh0cnVlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZsb2F0RXF1YWxzLFxuICAgIGNsYW1wLFxuICAgIGZyYWMsXG4gICAgbGVycCxcbiAgICB1bmxlcnAsXG4gICAgYmxlcnAsXG4gICAgcmVtYXAsXG4gICAgc21vb3Roc3RlcCxcbiAgICByYWRpYW5zLFxuICAgIGRlZ3JlZXMsXG4gICAgcmFuZG9tQmV0d2VlbixcbiAgICByYW5kb21JbnRCZXR3ZWVuLFxuICAgIGNsdFJhbmRvbSxcbiAgICBjbHRSYW5kb21JbnQsXG4gICAgd2VpZ2h0ZWRSYW5kb20sXG4gICAgbGVycEFycmF5LFxuICAgIGRvdCxcbiAgICBmYWN0b3JpYWwsXG4gICAgcGVybXV0YXRpb24sXG4gICAgY29tYmluYXRpb24sXG4gICAgdGltZXMsXG4gICAgcmFuZ2UsXG4gICAgemlwLFxuICAgIGF0LFxuICAgIGNodW5rLFxuICAgIHNodWZmbGUsXG4gIH07XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdmVjL3ZlYy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL0BiYXNlbWVudHVuaXZlcnNlL3ZlYy92ZWMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovICgobW9kdWxlLCBfX3VudXNlZF93ZWJwYWNrX2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuY29uc3QgeyB0aW1lcywgY2h1bmssIGRvdCB9ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMgKi8gXCIuL25vZGVfbW9kdWxlcy9AYmFzZW1lbnR1bml2ZXJzZS91dGlscy91dGlscy5qc1wiKTtcblxuLyoqXG4gKiBAb3ZlcnZpZXcgQSBsaWJyYXJ5IG9mIHVzZWZ1bCBmdW5jdGlvbnNcbiAqIEBhdXRob3IgR29yZG9uIExhcnJpZ2FuXG4gKi9cblxuLyoqXG4gKiBBIDJkIHZlY3RvclxuICogQHR5cGVkZWYge09iamVjdH0gdmVjXG4gKiBAcHJvcGVydHkge251bWJlcn0geCBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHkgVGhlIHkgY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyB2ZWN0b3JcbiAqIEBwYXJhbSB7bnVtYmVyfHZlY30gW3hdIFRoZSB4IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yLCBvciBhIHZlY3RvciB0byBjb3B5XG4gKiBAcGFyYW0ge251bWJlcn0gW3ldIFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWN9IEEgbmV3IHZlY3RvclxuICogQGV4YW1wbGUgPGNhcHRpb24+VmFyaW91cyB3YXlzIHRvIGluaXRpYWxpc2UgYSB2ZWN0b3I8L2NhcHRpb24+XG4gKiBsZXQgYSA9IHZlYygzLCAyKTsgIC8vICgzLCAyKVxuICogbGV0IGIgPSB2ZWMoNCk7ICAgICAvLyAoNCwgNClcbiAqIGxldCBjID0gdmVjKGEpOyAgICAgLy8gKDMsIDIpXG4gKiBsZXQgZCA9IHZlYygpOyAgICAgIC8vICgwLCAwKVxuICovXG5jb25zdCB2ZWMgPSAoeCwgeSkgPT4gKCF4ICYmICF5ID9cbiAgeyB4OiAwLCB5OiAwIH0gOiAodHlwZW9mIHggPT09ICdvYmplY3QnID9cbiAgICB7IHg6IHgueCB8fCAwLCB5OiB4LnkgfHwgMCB9IDogKHkgPT09IG51bGwgfHwgeSA9PT0gdW5kZWZpbmVkID9cbiAgICAgIHsgeDogeCwgeTogeCB9IDogeyB4OiB4LCB5OiB5IH0pXG4gIClcbik7XG5cbi8qKlxuICogR2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjdG9yIGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGdldCBjb21wb25lbnRzIGZyb21cbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFRoZSB2ZWN0b3IgY29tcG9uZW50cyBhcyBhbiBhcnJheVxuICovXG52ZWMuY29tcG9uZW50cyA9IGEgPT4gW2EueCwgYS55XTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMSwgMClcbiAqIEByZXR1cm4ge3ZlY30gQSB1bml0IHZlY3RvciAoMSwgMClcbiAqL1xudmVjLnV4ID0gKCkgPT4gdmVjKDEsIDApO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXQgdmVjdG9yICgwLCAxKVxuICogQHJldHVybiB7dmVjfSBBIHVuaXQgdmVjdG9yICgwLCAxKVxuICovXG52ZWMudXkgPSAoKSA9PiB2ZWMoMCwgMSk7XG5cbi8qKlxuICogQWRkIHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7dmVjfSBhICsgYlxuICovXG52ZWMuYWRkID0gKGEsIGIpID0+ICh7IHg6IGEueCArIGIueCwgeTogYS55ICsgYi55IH0pO1xuXG4vKipcbiAqIFNjYWxlIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcbiAqIEByZXR1cm4ge3ZlY30gYSAqIGJcbiAqL1xudmVjLm11bCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKiBiLCB5OiBhLnkgKiBiIH0pO1xuXG4vKipcbiAqIFN1YnRyYWN0IHZlY3RvcnNcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcGFyYW0ge3ZlY30gYiBWZWN0b3IgYlxuICogQHJldHVybiB7dmVjfSBhIC0gYlxuICovXG52ZWMuc3ViID0gKGEsIGIpID0+ICh7IHg6IGEueCAtIGIueCwgeTogYS55IC0gYi55IH0pO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSB8YXxcbiAqL1xudmVjLmxlbiA9IGEgPT4gTWF0aC5zcXJ0KGEueCAqIGEueCArIGEueSAqIGEueSk7XG5cbi8qKlxuICogR2V0IHRoZSBsZW5ndGggb2YgYSB2ZWN0b3IgdXNpbmcgdGF4aWNhYiBnZW9tZXRyeVxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYy5tYW5oYXR0YW4gPSBhID0+IE1hdGguYWJzKGEueCkgKyBNYXRoLmFicyhhLnkpO1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBub3JtYWxpc2VcbiAqIEByZXR1cm4ge3ZlY30gXmFcbiAqL1xudmVjLm5vciA9IGEgPT4ge1xuICBsZXQgbGVuID0gdmVjLmxlbihhKTtcbiAgcmV0dXJuIGxlbiA/IHsgeDogYS54IC8gbGVuLCB5OiBhLnkgLyBsZW4gfSA6IHZlYygpO1xufTtcblxuLyoqXG4gKiBHZXQgYSBkb3QgcHJvZHVjdCBvZiB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge251bWJlcn0gYSDiiJkgYlxuICovXG52ZWMuZG90ID0gKGEsIGIpID0+IGEueCAqIGIueCArIGEueSAqIGIueTtcblxuLyoqXG4gKiBSb3RhdGUgYSB2ZWN0b3IgYnkgciByYWRpYW5zXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIGFuZ2xlIHRvIHJvdGF0ZSBieSwgbWVhc3VyZWQgaW4gcmFkaWFuc1xuICogQHJldHVybiB7dmVjfSBBIHJvdGF0ZWQgdmVjdG9yXG4gKi9cbnZlYy5yb3QgPSAoYSwgcikgPT4ge1xuICBsZXQgcyA9IE1hdGguc2luKHIpLFxuICAgIGMgPSBNYXRoLmNvcyhyKTtcbiAgcmV0dXJuIHsgeDogYyAqIGEueCAtIHMgKiBhLnksIHk6IHMgKiBhLnggKyBjICogYS55IH07XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZlY3RvcnMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmVjdG9ycyBhIGFuZCBiIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbnZlYy5lcSA9IChhLCBiKSA9PiBhLnggPT09IGIueCAmJiBhLnkgPT09IGIueTtcblxuLyoqXG4gKiBHZXQgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgYW5nbGUgb2YgdmVjdG9yIGEgaW4gcmFkaWFuc1xuICovXG52ZWMucmFkID0gYSA9PiBNYXRoLmF0YW4yKGEueSwgYS54KTtcblxuLyoqXG4gKiBDb3B5IGEgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGNvcHlcbiAqIEByZXR1cm4ge3ZlY30gQSBjb3B5IG9mIHZlY3RvciBhXG4gKi9cbnZlYy5jcHkgPSBhID0+IHZlYyhhKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3JcbiAqIEBjYWxsYmFjayB2ZWN0b3JNYXBDYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBjb21wb25lbnQgdmFsdWVcbiAqIEBwYXJhbSB7J3gnIHwgJ3knfSBsYWJlbCBUaGUgY29tcG9uZW50IGxhYmVsICh4IG9yIHkpXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgY29tcG9uZW50XG4gKi9cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBjb21wb25lbnQgb2YgYSB2ZWN0b3IgYW5kIGJ1aWxkIGEgbmV3IHZlY3RvciBmcm9tIHRoZSByZXN1bHRzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN0b3JNYXBDYWxsYmFja30gZiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKiBAcmV0dXJuIHt2ZWN9IFZlY3RvciBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xudmVjLm1hcCA9IChhLCBmKSA9PiAoeyB4OiBmKGEueCwgJ3gnKSwgeTogZihhLnksICd5JykgfSk7XG5cbi8qKlxuICogQ29udmVydCBhIHZlY3RvciBpbnRvIGEgc3RyaW5nXG4gKiBAcGFyYW0ge3ZlY30gYSBUaGUgdmVjdG9yIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cbnZlYy5zdHIgPSAoYSwgcyA9ICcsICcpID0+IGAke2EueH0ke3N9JHthLnl9YDtcblxuLyoqXG4gKiBBIG1hdHJpeFxuICogQHR5cGVkZWYge09iamVjdH0gbWF0XG4gKiBAcHJvcGVydHkge251bWJlcn0gbSBUaGUgbnVtYmVyIG9mIHJvd3MgaW4gdGhlIG1hdHJpeFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjb2x1bW5zIGluIHRoZSBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7QXJyYXk8bnVtYmVyPn0gZW50cmllcyBUaGUgbWF0cml4IHZhbHVlc1xuICovXG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1hdHJpeFxuICogQHBhcmFtIHtudW1iZXJ9IFttPTRdIFRoZSBudW1iZXIgb2Ygcm93c1xuICogQHBhcmFtIHtudW1iZXJ9IFtuPTRdIFRoZSBudW1iZXIgb2YgY29sdW1uc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBbZW50cmllcz1bXV0gTWF0cml4IHZhbHVlcyBpbiByZWFkaW5nIG9yZGVyXG4gKiBAcmV0dXJuIHttYXR9IEEgbmV3IG1hdHJpeFxuICovXG5jb25zdCBtYXQgPSAobSA9IDQsIG4gPSA0LCBlbnRyaWVzID0gW10pID0+ICh7XG4gIG0sIG4sXG4gIGVudHJpZXM6IGVudHJpZXMuY29uY2F0KEFycmF5KG0gKiBuKS5maWxsKDApKS5zbGljZSgwLCBtICogbilcbn0pO1xuXG4vKipcbiAqIEdldCBhbiBpZGVudGl0eSBtYXRyaXggb2Ygc2l6ZSBuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJuIHttYXR9IEFuIGlkZW50aXR5IG1hdHJpeFxuICovXG5tYXQuaWRlbnRpdHkgPSBuID0+IG1hdChuLCBuLCBBcnJheShuICogbikuZmlsbCgwKS5tYXAoKHYsIGkpID0+ICsoTWF0aC5mbG9vcihpIC8gbikgPT09IGkgJSBuKSkpO1xuXG4vKipcbiAqIEdldCBhbiBlbnRyeSBmcm9tIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSB2YWx1ZSBhdCBwb3NpdGlvbiAoaSwgaikgaW4gbWF0cml4IGFcbiAqL1xubWF0LmdldCA9IChhLCBpLCBqKSA9PiBhLmVudHJpZXNbKGogLSAxKSArIChpIC0gMSkgKiBhLm5dO1xuXG4vKipcbiAqIFNldCBhbiBlbnRyeSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IHYgVGhlIHZhbHVlIHRvIHNldCBpbiBtYXRyaXggYVxuICovXG5tYXQuc2V0ID0gKGEsIGksIGosIHYpID0+IHsgYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXSA9IHY7IH07XG5cbi8qKlxuICogR2V0IGEgcm93IGZyb20gYSBtYXRyaXggYXMgYW4gYXJyYXlcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gbSBUaGUgcm93IG9mZnNldFxuICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gUm93IG0gZnJvbSBtYXRyaXggYVxuICovXG5tYXQucm93ID0gKGEsIG0pID0+IHtcbiAgY29uc3QgcyA9IChtIC0gMSkgKiBhLm47XG4gIHJldHVybiBhLmVudHJpZXMuc2xpY2UocywgcyArIGEubik7XG59O1xuXG4vKipcbiAqIEdldCBhIGNvbHVtbiBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IENvbHVtbiBuIGZyb20gbWF0cml4IGFcbiAqL1xubWF0LmNvbCA9IChhLCBuKSA9PiB0aW1lcyhpID0+IG1hdC5nZXQoYSwgKGkgKyAxKSwgbiksIGEubSk7XG5cbi8qKlxuICogQWRkIG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdH0gYSArIGJcbiAqL1xubWF0LmFkZCA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQubWFwKGEsICh2LCBpKSA9PiB2ICsgYi5lbnRyaWVzW2ldKTtcblxuLyoqXG4gKiBTdWJ0cmFjdCBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR9IGEgLSBiXG4gKi9cbm1hdC5zdWIgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiAtIGIuZW50cmllc1tpXSk7XG5cbi8qKlxuICogTXVsdGlwbHkgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IGFiIG9yIGZhbHNlIGlmIHRoZSBtYXRyaWNlcyBjYW5ub3QgYmUgbXVsdGlwbGllZFxuICovXG5tYXQubXVsID0gKGEsIGIpID0+IHtcbiAgaWYgKGEubiAhPT0gYi5tKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCByZXN1bHQgPSBtYXQoYS5tLCBiLm4pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGIubjsgaisrKSB7XG4gICAgICBtYXQuc2V0KHJlc3VsdCwgaSwgaiwgZG90KG1hdC5yb3coYSwgaSksIG1hdC5jb2woYiwgaikpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogU2NhbGUgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBTY2FsYXIgYlxuICogQHJldHVybiB7bWF0fSBhICogYlxuICovXG5tYXQuc2NhbGUgPSAoYSwgYikgPT4gbWF0Lm1hcChhLCB2ID0+IHYgKiBiKTtcblxuLyoqXG4gKiBUcmFuc3Bvc2UgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gdHJhbnNwb3NlXG4gKiBAcmV0dXJuIHttYXR9IEEgdHJhbnNwb3NlZCBtYXRyaXhcbiAqL1xubWF0LnRyYW5zID0gYSA9PiBtYXQoYS5uLCBhLm0sIHRpbWVzKGkgPT4gbWF0LmNvbChhLCAoaSArIDEpKSwgYS5uKS5mbGF0KCkpO1xuXG4vKipcbiAqIEdldCB0aGUgbWlub3Igb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBUaGUgKGksIGopIG1pbm9yIG9mIG1hdHJpeCBhIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubWlub3IgPSAoYSwgaSwgaikgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgZm9yIChsZXQgaWkgPSAxOyBpaSA8PSBhLm07IGlpKyspIHtcbiAgICBpZiAoaWkgPT09IGkpIHsgY29udGludWU7IH1cbiAgICBmb3IgKGxldCBqaiA9IDE7IGpqIDw9IGEubjsgamorKykge1xuICAgICAgaWYgKGpqID09PSBqKSB7IGNvbnRpbnVlOyB9XG4gICAgICBlbnRyaWVzLnB1c2gobWF0LmdldChhLCBpaSwgamopKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdChhLm0gLSAxLCBhLm4gLSAxLCBlbnRyaWVzKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEByZXR1cm4ge251bWJlcnxib29sZWFufSB8YXwgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBpcyBub3Qgc3F1YXJlXG4gKi9cbm1hdC5kZXQgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBpZiAoYS5tID09PSAxKSB7XG4gICAgcmV0dXJuIGEuZW50cmllc1swXTtcbiAgfVxuICBpZiAoYS5tID09PSAyKSB7XG4gICAgcmV0dXJuIGEuZW50cmllc1swXSAqIGEuZW50cmllc1szXSAtIGEuZW50cmllc1sxXSAqIGEuZW50cmllc1syXTtcbiAgfVxuICBsZXQgdG90YWwgPSAwLCBzaWduID0gMTtcbiAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcbiAgICB0b3RhbCArPSBzaWduICogYS5lbnRyaWVzW2ogLSAxXSAqIG1hdC5kZXQobWF0Lm1pbm9yKGEsIDEsIGopKTtcbiAgICBzaWduICo9IC0xO1xuICB9XG4gIHJldHVybiB0b3RhbDtcbn07XG5cbi8qKlxuICogTm9ybWFsaXNlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIG5vcm1hbGlzZVxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IF5hIG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQubm9yID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XG4gIHJldHVybiBtYXQubWFwKGEsIGkgPT4gaSAqIGQpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGFkanVnYXRlIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IGZyb20gd2hpY2ggdG8gZ2V0IHRoZSBhZGp1Z2F0ZVxuICogQHJldHVybiB7bWF0fSBUaGUgYWRqdWdhdGUgb2YgYVxuICovXG5tYXQuYWRqID0gYSA9PiB7XG4gIGNvbnN0IG1pbm9ycyA9IG1hdChhLm0sIGEubik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IGEubTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5uOyBqKyspIHtcbiAgICAgIG1hdC5zZXQobWlub3JzLCBpLCBqLCBtYXQuZGV0KG1hdC5taW5vcihhLCBpLCBqKSkpO1xuICAgIH1cbiAgfVxuICBjb25zdCBjb2ZhY3RvcnMgPSBtYXQubWFwKG1pbm9ycywgKHYsIGkpID0+IHYgKiAoaSAlIDIgPyAtMSA6IDEpKTtcbiAgcmV0dXJuIG1hdC50cmFucyhjb2ZhY3RvcnMpO1xufTtcblxuLyoqXG4gKiBHZXQgdGhlIGludmVyc2Ugb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gaW52ZXJ0XG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gYV4tMSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGhhcyBubyBpbnZlcnNlXG4gKi9cbm1hdC5pbnYgPSBhID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBkID0gbWF0LmRldChhKTtcbiAgaWYgKGQgPT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG4gIHJldHVybiBtYXQuc2NhbGUobWF0LmFkaihhKSwgMSAvIGQpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0d28gbWF0cmljZXMgYXJlIGVxdWFsXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbWF0cmljZXMgYSBhbmQgYiBhcmUgaWRlbnRpY2FsLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xubWF0LmVxID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5zdHIoYSkgPT09IG1hdC5zdHIoYik7XG5cbi8qKlxuICogQ29weSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb3B5XG4gKiBAcmV0dXJuIHttYXR9IEEgY29weSBvZiBtYXRyaXggYVxuICovXG5tYXQuY3B5ID0gYSA9PiBtYXQoYS5tLCBhLm4sIFsuLi5hLmVudHJpZXNdKTtcblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeFxuICogQGNhbGxiYWNrIG1hdHJpeE1hcENhbGxiYWNrXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgVGhlIGVudHJ5IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGVudHJ5IGluZGV4XG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIGFycmF5IG9mIG1hdHJpeCBlbnRyaWVzXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYXBwZWQgZW50cnlcbiAqL1xuXG4vKipcbiAqIENhbGwgYSBmdW5jdGlvbiBvbiBlYWNoIGVudHJ5IG9mIGEgbWF0cml4IGFuZCBidWlsZCBhIG5ldyBtYXRyaXggZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0cml4TWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBlbnRyeSBvZiB0aGUgbWF0cml4XG4gKiBAcmV0dXJuIHttYXR9IE1hdHJpeCBhIG1hcHBlZCB0aHJvdWdoIGZcbiAqL1xubWF0Lm1hcCA9IChhLCBmKSA9PiBtYXQoYS5tLCBhLm4sIGEuZW50cmllcy5tYXAoZikpO1xuXG4vKipcbiAqIENvbnZlcnQgYSBtYXRyaXggaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW21zPScsICddIFRoZSBzZXBhcmF0b3Igc3RyaW5nIGZvciBjb2x1bW5zXG4gKiBAcGFyYW0ge3N0cmluZ30gW25zPSdcXG4nXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3Igcm93c1xuICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cbm1hdC5zdHIgPSAoYSwgbXMgPSAnLCAnLCBucyA9ICdcXG4nKSA9PiBjaHVuayhhLmVudHJpZXMsIGEubikubWFwKHIgPT4gci5qb2luKG1zKSkuam9pbihucyk7XG5cbmlmICh0cnVlKSB7XG4gIG1vZHVsZS5leHBvcnRzID0geyB2ZWMsIG1hdCB9O1xufVxuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuLy8gVGhpcyBlbnRyeSBuZWVkIHRvIGJlIHdyYXBwZWQgaW4gYW4gSUlGRSBiZWNhdXNlIGl0IG5lZWQgdG8gYmUgaW4gc3RyaWN0IG1vZGUuXG4oKCkgPT4ge1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgZXhwb3J0cyA9IF9fd2VicGFja19leHBvcnRzX187XG4vKiEqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9pbmRleC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqL1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7IHZhbHVlOiB0cnVlIH0pKTtcbmNvbnN0IHZlY18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhc2VtZW50dW5pdmVyc2UvdmVjICovIFwiLi9ub2RlX21vZHVsZXMvQGJhc2VtZW50dW5pdmVyc2UvdmVjL3ZlYy5qc1wiKTtcbmNsYXNzIElucHV0TWFuYWdlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLmtleWJvYXJkU3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0tleWJvYXJkU3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5tb3VzZVN0YXRlID0geyBidXR0b246IGZhbHNlLCBwb3NpdGlvbjogKDAsIHZlY18xLnZlYykoKSwgd2hlZWw6IDAgfTtcbiAgICAgICAgdGhpcy5wcmV2aW91c01vdXNlU3RhdGUgPSB7IGJ1dHRvbjogZmFsc2UsIHBvc2l0aW9uOiAoMCwgdmVjXzEudmVjKSgpLCB3aGVlbDogMCB9O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBJbnB1dE1hbmFnZXIuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwID8gb3B0aW9ucyA6IHt9KTtcbiAgICAgICAgLy8gU2V0IHVwIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubW91c2UpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlLmJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW91c2VTdGF0ZS5idXR0b24gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVN0YXRlLmJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlU3RhdGUuYnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlU3RhdGUucG9zaXRpb24ueCA9IGUub2Zmc2V0WDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlU3RhdGUucG9zaXRpb24ueSA9IGUub2Zmc2V0WTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb3VzZVdoZWVsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2VTdGF0ZS53aGVlbCA9IGUuZGVsdGFZID4gMCA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmtleWJvYXJkKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRTdGF0ZVtlLmNvZGVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlib2FyZFN0YXRlW2UuY29kZV0gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2UgdGhlIGlucHV0IG1hbmFnZXIgZm9yIG1hbmFnaW5nIG1vdXNlIGFuZCBrZXlib2FyZCBpbnB1dFxuICAgICAqL1xuICAgIHN0YXRpYyBpbml0aWFsaXNlKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKElucHV0TWFuYWdlci5pbnN0YW5jZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lucHV0IG1hbmFnZXIgYWxyZWFkeSBpbml0aWFsaXNlZCcpO1xuICAgICAgICB9XG4gICAgICAgIElucHV0TWFuYWdlci5pbnN0YW5jZSA9IG5ldyBJbnB1dE1hbmFnZXIob3B0aW9ucyk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKElucHV0TWFuYWdlci5pbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lucHV0IG1hbmFnZXIgbm90IHByb3Blcmx5IGluaXRpYWxpc2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIElucHV0TWFuYWdlci5pbnN0YW5jZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgaW5wdXQgZGV2aWNlc1xuICAgICAqL1xuICAgIHN0YXRpYyB1cGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluc3RhbmNlLmtleWJvYXJkU3RhdGUpO1xuICAgICAgICBpbnN0YW5jZS5wcmV2aW91c01vdXNlU3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5pbnN0YW5jZS5tb3VzZVN0YXRlLFxuICAgICAgICAgICAgcG9zaXRpb246IHZlY18xLnZlYy5jcHkoaW5zdGFuY2UubW91c2VTdGF0ZS5wb3NpdGlvbiksXG4gICAgICAgICAgICB3aGVlbDogMCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBrZXkgaXMgY3VycmVudGx5IHByZXNzZWQgZG93blxuICAgICAqL1xuICAgIHN0YXRpYyBrZXlEb3duKGNvZGUpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGtleSBpcyBkb3duXG4gICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrIGluIGluc3RhbmNlLmtleWJvYXJkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtrXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtjb2RlXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBrZXkgaGFzIGJlZW4gcHJlc3NlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyBrZXlQcmVzc2VkKGNvZGUpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGtleSB3YXMgcHJlc3NlZFxuICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgayBpbiBpbnN0YW5jZS5rZXlib2FyZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLmtleWJvYXJkU3RhdGVba10gJiZcbiAgICAgICAgICAgICAgICAgICAgKCEoayBpbiBpbnN0YW5jZS5wcmV2aW91c0tleWJvYXJkU3RhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAhaW5zdGFuY2UucHJldmlvdXNLZXlib2FyZFN0YXRlW2tdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtjb2RlXSAmJiAhaW5zdGFuY2UucHJldmlvdXNLZXlib2FyZFN0YXRlW2NvZGVdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIGtleSBoYXMgYmVlbiByZWxlYXNlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyBrZXlSZWxlYXNlZChjb2RlKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICAgIC8vIENoZWNrIGlmIGFueSBrZXkgd2FzIHJlbGVhc2VkXG4gICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrIGluIGluc3RhbmNlLmtleWJvYXJkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWluc3RhbmNlLmtleWJvYXJkU3RhdGVba10gJiZcbiAgICAgICAgICAgICAgICAgICAgISFpbnN0YW5jZS5wcmV2aW91c0tleWJvYXJkU3RhdGVba10pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtjb2RlXSAmJiAhIWluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZVtjb2RlXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgYSBtb3VzZSBidXR0b24gaXMgY3VycmVudGx5IHByZXNzZWQgZG93blxuICAgICAqL1xuICAgIHN0YXRpYyBtb3VzZURvd24oKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHJldHVybiAhIWluc3RhbmNlLm1vdXNlU3RhdGUuYnV0dG9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBhIG1vdXNlIGJ1dHRvbiBoYXMgYmVlbiBwcmVzc2VkIHNpbmNlIHRoZSBsYXN0IGZyYW1lXG4gICAgICovXG4gICAgc3RhdGljIG1vdXNlUHJlc3NlZCgpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgcmV0dXJuICEhaW5zdGFuY2UubW91c2VTdGF0ZS5idXR0b24gJiYgIWluc3RhbmNlLnByZXZpb3VzTW91c2VTdGF0ZS5idXR0b247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgbW91c2UgYnV0dG9uIGhhcyBiZWVuIHJlbGVhc2VkIHNpbmNlIHRoZSBsYXN0IGZyYW1lXG4gICAgICovXG4gICAgc3RhdGljIG1vdXNlUmVsZWFzZWQoKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHJldHVybiAhaW5zdGFuY2UubW91c2VTdGF0ZS5idXR0b24gJiYgISFpbnN0YW5jZS5wcmV2aW91c01vdXNlU3RhdGUuYnV0dG9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgbW91c2V3aGVlbCBpcyBzY3JvbGxpbmcgdXBcbiAgICAgKi9cbiAgICBzdGF0aWMgbW91c2VXaGVlbFVwKCkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UubW91c2VTdGF0ZS53aGVlbCA+IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBtb3VzZXdoZWVsIGlzIHNjcm9sbGluZyBkb3duXG4gICAgICovXG4gICAgc3RhdGljIG1vdXNlV2hlZWxEb3duKCkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UubW91c2VTdGF0ZS53aGVlbCA8IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBtb3VzZSBwb3NpdGlvbiBpbiBzY3JlZW4tc3BhY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IG1vdXNlUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXRNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5tb3VzZVN0YXRlLnBvc2l0aW9uO1xuICAgIH1cbn1cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSW5wdXRNYW5hZ2VyO1xuSW5wdXRNYW5hZ2VyLmRlZmF1bHRPcHRpb25zID0ge1xuICAgIG1vdXNlOiB0cnVlLFxuICAgIG1vdXNlV2hlZWw6IHRydWUsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXBibVJsZUM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEN0RFFVRTBRenRCUVRaQ05VTXNUVUZCY1VJc1dVRkJXVHRKUVcxQ0wwSXNXVUZCYjBJc1QwRkJLMEk3VVVGU00wTXNhMEpCUVdFc1IwRkJhMElzUlVGQlJTeERRVUZETzFGQlJXeERMREJDUVVGeFFpeEhRVUZyUWl4RlFVRkZMRU5CUVVNN1VVRkZNVU1zWlVGQlZTeEhRVUZsTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hSUVVGUkxFVkJRVVVzU1VGQlFTeFRRVUZITEVkQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU03VVVGRmRFVXNkVUpCUVd0Q0xFZEJRV1VzUlVGQlJTeE5RVUZOTEVWQlFVVXNTMEZCU3l4RlFVRkZMRkZCUVZFc1JVRkJSU3hKUVVGQkxGTkJRVWNzUjBGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJRenRSUVVkd1JpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEZsQlFWa3NRMEZCUXl4alFVRmpMRVZCUVVVc1QwRkJUeXhoUVVGUUxFOUJRVThzWTBGQlVDeFBRVUZQTEVkQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNN1VVRkZOMFVzZDBKQlFYZENPMUZCUTNoQ0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRkRUlzVFVGQlRTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExGZEJRVmNzUlVGQlJTeEhRVUZITEVWQlFVVTdaMEpCUTNoRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVOb1F5eERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTklMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4VFFVRlRMRVZCUVVVc1IwRkJSeXhGUVVGRk8yZENRVU4wUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTTdXVUZEYWtNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRFNDeE5RVUZOTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zV1VGQldTeEZRVUZGTEVkQlFVY3NSVUZCUlR0blFrRkRla01zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRE8xbEJRMmhETEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTBnc1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRlZCUVZVc1JVRkJSU3hIUVVGSExFVkJRVVU3WjBKQlEzWkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeEhRVUZITEV0QlFVc3NRMEZCUXp0WlFVTnFReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5JTEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVN1owSkJRM1pETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRPMmRDUVVOMlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXp0WlFVTjZReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5JTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVU3WjBKQlF6TkNMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVU3YjBKQlEyNURMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVU5vUkN4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOS08xTkJRMFk3VVVGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJRM3BDTEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVN1owSkJRM0pETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVTndReXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5JTEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVN1owSkJRMjVETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0WlFVTnlReXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU5LTzBsQlEwZ3NRMEZCUXp0SlFVVkVPenRQUVVWSE8wbEJRMGtzVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRXJRanRSUVVOMFJDeEpRVUZKTEZsQlFWa3NRMEZCUXl4UlFVRlJMRXRCUVVzc1UwRkJVeXhGUVVGRk8xbEJRM1pETEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2JVTkJRVzFETEVOQlFVTXNRMEZCUXp0VFFVTjBSRHRSUVVORUxGbEJRVmtzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4WlFVRlpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRGNFUXNRMEZCUXp0SlFVVlBMRTFCUVUwc1EwRkJReXhYUVVGWE8xRkJRM2hDTEVsQlFVa3NXVUZCV1N4RFFVRkRMRkZCUVZFc1MwRkJTeXhUUVVGVExFVkJRVVU3V1VGRGRrTXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXgzUTBGQmQwTXNRMEZCUXl4RFFVRkRPMU5CUXpORU8xRkJSVVFzVDBGQlR5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRPMGxCUXk5Q0xFTkJRVU03U1VGRlJEczdUMEZGUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhOUVVGTk8xRkJRMnhDTEUxQlFVMHNVVUZCVVN4SFFVRkhMRmxCUVZrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFJRVVUxUXl4UlFVRlJMRU5CUVVNc2NVSkJRWEZDTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFVkJRVVVzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUXpORkxGRkJRVkVzUTBGQlF5eHJRa0ZCYTBJc1IwRkJSenRaUVVNMVFpeEhRVUZITEZGQlFWRXNRMEZCUXl4VlFVRlZPMWxCUTNSQ0xGRkJRVkVzUlVGQlJTeFRRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETzFsQlF5OURMRXRCUVVzc1JVRkJSU3hEUVVGRE8xTkJRMVFzUTBGQlF6dEpRVU5LTEVOQlFVTTdTVUZGUkRzN1QwRkZSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCWVR0UlFVTnFReXhOUVVGTkxGRkJRVkVzUjBGQlJ5eFpRVUZaTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkZOVU1zTWtKQlFUSkNPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVTdXVUZEVkN4TFFVRkxMRTFCUVUwc1EwRkJReXhKUVVGSkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVWQlFVVTdaMEpCUTNSRExFbEJRVWtzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHR2UWtGRE4wSXNUMEZCVHl4SlFVRkpMRU5CUVVNN2FVSkJRMkk3WVVGRFJqdFpRVU5FTEU5QlFVOHNTMEZCU3l4RFFVRkRPMU5CUTJRN1VVRkZSQ3hQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRM2hETEVOQlFVTTdTVUZGUkRzN1QwRkZSenRKUVVOSkxFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCWVR0UlFVTndReXhOUVVGTkxGRkJRVkVzUjBGQlJ5eFpRVUZaTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1VVRkZOVU1zSzBKQlFTdENPMUZCUXk5Q0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVTdXVUZEVkN4TFFVRkxMRTFCUVUwc1EwRkJReXhKUVVGSkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVWQlFVVTdaMEpCUTNSRExFbEJRMFVzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRMRU5CUVVNN2IwSkJRM3BDTEVOQlEwVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hSUVVGUkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNN2QwSkJRM1JETEVOQlFVTXNVVUZCVVN4RFFVRkRMSEZDUVVGeFFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVTnVReXhGUVVORU8yOUNRVU5CTEU5QlFVOHNTVUZCU1N4RFFVRkRPMmxDUVVOaU8yRkJRMFk3V1VGRFJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0VFFVTmtPMUZCUlVRc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU5xUml4RFFVRkRPMGxCUlVRN08wOUJSVWM3U1VGRFNTeE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVdFN1VVRkRja01zVFVGQlRTeFJRVUZSTEVkQlFVY3NXVUZCV1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJSVFZETEdkRFFVRm5RenRSUVVOb1F5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZPMWxCUTFRc1MwRkJTeXhOUVVGTkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNZVUZCWVN4RlFVRkZPMmRDUVVOMFF5eEpRVU5GTEVOQlFVTXNVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRExFTkJRVU03YjBKQlF6RkNMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRMjVETzI5Q1FVTkJMRTlCUVU4c1NVRkJTU3hEUVVGRE8ybENRVU5pTzJGQlEwWTdXVUZEUkN4UFFVRlBMRXRCUVVzc1EwRkJRenRUUVVOa08xRkJSVVFzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTnFSaXhEUVVGRE8wbEJSVVE3TzA5QlJVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1UwRkJVenRSUVVOeVFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4WlFVRlpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRk5VTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTTdTVUZEZEVNc1EwRkJRenRKUVVWRU96dFBRVVZITzBsQlEwa3NUVUZCVFN4RFFVRkRMRmxCUVZrN1VVRkRlRUlzVFVGQlRTeFJRVUZSTEVkQlFVY3NXVUZCV1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJSVFZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMR3RDUVVGclFpeERRVUZETEUxQlFVMHNRMEZCUXp0SlFVTTNSU3hEUVVGRE8wbEJSVVE3TzA5QlJVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1lVRkJZVHRSUVVONlFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4WlFVRlpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRk5VTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUXpkRkxFTkJRVU03U1VGRlJEczdUMEZGUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhaUVVGWk8xRkJRM2hDTEUxQlFVMHNVVUZCVVN4SFFVRkhMRmxCUVZrc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dFJRVVUxUXl4UFFVRlBMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTjJReXhEUVVGRE8wbEJSVVE3TzA5QlJVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1kwRkJZenRSUVVNeFFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4WlFVRlpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRk5VTXNUMEZCVHl4UlFVRlJMRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEZGtNc1EwRkJRenRKUVVWRU96dFBRVVZITzBsQlEwa3NUVUZCVFN4TFFVRkxMR0ZCUVdFN1VVRkROMElzVFVGQlRTeFJRVUZSTEVkQlFVY3NXVUZCV1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJSVFZETEU5QlFVOHNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU03U1VGRGRFTXNRMEZCUXpzN1FVRTVUVWdzSzBKQkswMURPMEZCTlUxNVFpd3lRa0ZCWXl4SFFVRnBRanRKUVVOeVJDeExRVUZMTEVWQlFVVXNTVUZCU1R0SlFVTllMRlZCUVZVc1JVRkJSU3hKUVVGSk8wbEJRMmhDTEZGQlFWRXNSVUZCUlN4SlFVRkpPME5CUTJZc1EwRkJReUo5XG59KSgpO1xuXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfZXhwb3J0c19fO1xuLyoqKioqKi8gfSkoKVxuO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenRCUVVORUxFODdPenM3T3pzN096dEJRMVpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhaUVVGWkxGTkJRVk03UVVGRGNrSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmRCUVZjc1VVRkJVVHRCUVVOdVFpeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1dVRkJXU3hSUVVGUk8wRkJRM0JDTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVVVGQlVUdEJRVU51UWl4WlFVRlpMRkZCUVZFN1FVRkRjRUk3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNXVUZCV1N4UlFVRlJPMEZCUTNCQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1VVRkJVVHRCUVVOdVFpeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZsQlFWa3NVVUZCVVR0QlFVTndRanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRkZCUVZFN1FVRkRia0lzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmRCUVZjc1VVRkJVVHRCUVVOdVFpeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhaUVVGWkxGRkJRVkU3UVVGRGNFSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmRCUVZjc1VVRkJVVHRCUVVOdVFpeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhaUVVGWk8wRkJRMW83UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNXVUZCV1N4UlFVRlJPMEZCUTNCQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1VVRkJVVHRCUVVOdVFpeFpRVUZaTEZGQlFWRTdRVUZEY0VJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGbEJRVmtzVVVGQlVUdEJRVU53UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZsQlFWa3NVVUZCVVR0QlFVTndRanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRkZCUVZFN1FVRkRia0lzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmxCUVZrc1VVRkJVVHRCUVVOd1FqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WlFVRlpMRkZCUVZFN1FVRkRjRUk3UVVGRFFUdEJRVU5CTzBGQlEwRXNkMEpCUVhkQ0xFbEJRVWs3UVVGRE5VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNXVUZCV1N4UlFVRlJPMEZCUTNCQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1pVRkJaVHRCUVVNeFFpeFpRVUZaTEZGQlFWRTdRVUZEY0VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGbEJRVmtzVVVGQlVUdEJRVU53UWpzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eGxRVUZsTzBGQlF6RkNMRmRCUVZjc1VVRkJVVHRCUVVOdVFpeFhRVUZYTEhWQ1FVRjFRanRCUVVOc1F5eFpRVUZaTEZGQlFWRTdRVUZEY0VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExHVkJRV1U3UVVGRE1VSXNWMEZCVnl4bFFVRmxPMEZCUXpGQ0xGbEJRVmtzVVVGQlVUdEJRVU53UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1dVRkJXU3hSUVVGUk8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJMR3RDUVVGclFpeFJRVUZSTzBGQlF6RkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRkZCUVZFN1FVRkRia0lzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmxCUVZrc1VVRkJVVHRCUVVOd1FqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGbEJRVmtzVVVGQlVUdEJRVU53UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhaUVVGWkxFZEJRVWM3UVVGRFpqczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhsUVVGbE8wRkJRekZDTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhaUVVGWk8wRkJRMW83UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZsQlFWa3NaVUZCWlR0QlFVTXpRanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRlZCUVZVN1FVRkRja0lzVjBGQlZ5eFZRVUZWTzBGQlEzSkNMRmxCUVZrN1FVRkRXanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRlZCUVZVN1FVRkRja0lzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmxCUVZrc1IwRkJSenRCUVVObU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1ZVRkJWVHRCUVVOeVFpeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1dVRkJXU3hwUWtGQmFVSTdRVUZETjBJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4VlFVRlZPMEZCUTNKQ0xGbEJRVmtzVlVGQlZUdEJRVU4wUWp0QlFVTkJPenRCUVVWQkxFbEJRVWtzU1VGQk5rSTdRVUZEYWtNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3UVVOb1UwRXNVVUZCVVN4dlFrRkJiMElzUlVGQlJTeHRRa0ZCVHl4RFFVRkRMR2RHUVVGNVFqczdRVUZGTDBRN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMR0ZCUVdFc1VVRkJVVHRCUVVOeVFpeGpRVUZqTEZGQlFWRTdRVUZEZEVJc1kwRkJZeXhSUVVGUk8wRkJRM1JDT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExGbEJRVms3UVVGRGRrSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGbEJRVmtzUzBGQlN6dEJRVU5xUWp0QlFVTkJMSFZDUVVGMVFqdEJRVU4yUWl4MVFrRkJkVUk3UVVGRGRrSXNkVUpCUVhWQ08wRkJRM1pDTEhWQ1FVRjFRanRCUVVOMlFqdEJRVU5CTzBGQlEwRXNTVUZCU1N4aFFVRmhPMEZCUTJwQ0xFMUJRVTBzTWtKQlFUSkNPMEZCUTJwRExGRkJRVkVzWVVGQllTeEpRVUZKTEZsQlFWazdRVUZEY2tNN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4TFFVRkxPMEZCUTJoQ0xGbEJRVmtzWlVGQlpUdEJRVU16UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFpRVUZaTEV0QlFVczdRVUZEYWtJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNXVUZCV1N4TFFVRkxPMEZCUTJwQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFhRVUZYTEV0QlFVczdRVUZEYUVJc1dVRkJXU3hMUVVGTE8wRkJRMnBDTzBGQlEwRXNkVUpCUVhWQ0xEUkNRVUUwUWpzN1FVRkZia1E3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNXVUZCV1N4TFFVRkxPMEZCUTJwQ08wRkJRMEVzZFVKQlFYVkNMSGRDUVVGM1FqczdRVUZGTDBNN1FVRkRRVHRCUVVOQkxGZEJRVmNzUzBGQlN6dEJRVU5vUWl4WFFVRlhMRXRCUVVzN1FVRkRhRUlzV1VGQldTeExRVUZMTzBGQlEycENPMEZCUTBFc2RVSkJRWFZDTERSQ1FVRTBRanM3UVVGRmJrUTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFpRVUZaTEZGQlFWRTdRVUZEY0VJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4TFFVRkxPMEZCUTJoQ0xGbEJRVmtzVVVGQlVUdEJRVU53UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEV0QlFVczdRVUZEYUVJc1dVRkJXU3hMUVVGTE8wRkJRMnBDTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xDUVVGcFFpdzJRa0ZCTmtJN1FVRkRPVU03TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFhRVUZYTEV0QlFVczdRVUZEYUVJc1dVRkJXU3hSUVVGUk8wRkJRM0JDTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxGZEJRVmNzUzBGQlN6dEJRVU5vUWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzV1VGQldTeExRVUZMTzBGQlEycENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ6dEJRVU5ZT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFdEJRVXM3UVVGRGFFSXNWMEZCVnl4TFFVRkxPMEZCUTJoQ0xGbEJRVmtzVTBGQlV6dEJRVU55UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEV0QlFVczdRVUZEYUVJc1dVRkJXU3hSUVVGUk8wRkJRM0JDTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxGZEJRVmNzUzBGQlN6dEJRVU5vUWl4WlFVRlpMRXRCUVVzN1FVRkRha0k3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4WFFVRlhPMEZCUTNSQ0xGbEJRVmtzVVVGQlVUdEJRVU53UWpzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eExRVUZMTzBGQlEyaENMRmRCUVZjc2JVSkJRVzFDTzBGQlF6bENMRmxCUVZrc1MwRkJTenRCUVVOcVFqdEJRVU5CTEhWQ1FVRjFRaXhuUTBGQlowTTdPMEZCUlhaRU8wRkJRMEU3UVVGRFFTeFhRVUZYTEV0QlFVczdRVUZEYUVJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZsQlFWa3NVVUZCVVR0QlFVTndRanRCUVVOQkxEaENRVUU0UWl4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGRkxFbEJRVWs3TzBGQlJUVkRPMEZCUTBFN1FVRkRRU3hoUVVGaExGRkJRVkU3UVVGRGNrSXNZMEZCWXl4UlFVRlJPMEZCUTNSQ0xHTkJRV01zVVVGQlVUdEJRVU4wUWl4alFVRmpMR1ZCUVdVN1FVRkROMEk3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1VVRkJVVHRCUVVOdVFpeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1YwRkJWeXhsUVVGbE8wRkJRekZDTEZsQlFWa3NTMEZCU3p0QlFVTnFRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdPMEZCUlVRN1FVRkRRVHRCUVVOQkxGZEJRVmNzVVVGQlVUdEJRVU51UWl4WlFVRlpMRXRCUVVzN1FVRkRha0k3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1YwRkJWeXhMUVVGTE8wRkJRMmhDTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNXVUZCV1N4UlFVRlJPMEZCUTNCQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFhRVUZYTEZGQlFWRTdRVUZEYmtJc1YwRkJWeXhSUVVGUk8wRkJRMjVDTEZkQlFWY3NVVUZCVVR0QlFVTnVRanRCUVVOQkxEUkNRVUUwUWpzN1FVRkZOVUk3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNXVUZCV1N4bFFVRmxPMEZCUXpOQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxGZEJRVmNzUzBGQlN6dEJRVU5vUWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzV1VGQldTeGxRVUZsTzBGQlF6TkNPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWY3NTMEZCU3p0QlFVTm9RaXhYUVVGWExFdEJRVXM3UVVGRGFFSXNXVUZCV1N4TFFVRkxPMEZCUTJwQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFhRVUZYTEV0QlFVczdRVUZEYUVJc1dVRkJXU3hMUVVGTE8wRkJRMnBDTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxGZEJRVmNzUzBGQlN6dEJRVU5vUWl4WFFVRlhMRXRCUVVzN1FVRkRhRUlzV1VGQldTeGhRVUZoTzBGQlEzcENPMEZCUTBFN1FVRkRRU3h4UWtGQmNVSTdRVUZEY2tJN1FVRkRRU3hyUWtGQmEwSXNWVUZCVlR0QlFVTTFRaXh2UWtGQmIwSXNWVUZCVlR0QlFVTTVRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFdEJRVXM3UVVGRGFFSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGbEJRVmtzUzBGQlN6dEJRVU5xUWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEV0QlFVczdRVUZEYUVJc1dVRkJXU3hMUVVGTE8wRkJRMnBDTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxGZEJRVmNzUzBGQlN6dEJRVU5vUWl4WFFVRlhMRkZCUVZFN1FVRkRia0lzVjBGQlZ5eFJRVUZSTzBGQlEyNUNMRmxCUVZrc1lVRkJZVHRCUVVONlFqdEJRVU5CTzBGQlEwRXNjVUpCUVhGQ08wRkJRM0pDTzBGQlEwRXNiVUpCUVcxQ0xGZEJRVmM3UVVGRE9VSXNiMEpCUVc5Q08wRkJRM0JDTEhGQ1FVRnhRaXhYUVVGWE8wRkJRMmhETEhOQ1FVRnpRanRCUVVOMFFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEV0QlFVczdRVUZEYUVJc1dVRkJXU3huUWtGQlowSTdRVUZETlVJN1FVRkRRVHRCUVVOQkxIRkNRVUZ4UWp0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR3RDUVVGclFpeFZRVUZWTzBGQlF6VkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFpRVUZaTEdGQlFXRTdRVUZEZWtJN1FVRkRRVHRCUVVOQkxIRkNRVUZ4UWp0QlFVTnlRanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFpRVUZaTEV0QlFVczdRVUZEYWtJN1FVRkRRVHRCUVVOQk8wRkJRMEVzYTBKQlFXdENMRlZCUVZVN1FVRkROVUlzYjBKQlFXOUNMRlZCUVZVN1FVRkRPVUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFhRVUZYTEV0QlFVczdRVUZEYUVJc1dVRkJXU3hoUVVGaE8wRkJRM3BDTzBGQlEwRTdRVUZEUVN4eFFrRkJjVUk3UVVGRGNrSTdRVUZEUVN4cFFrRkJhVUk3UVVGRGFrSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eExRVUZMTzBGQlEyaENMRmRCUVZjc1MwRkJTenRCUVVOb1FpeFpRVUZaTEZOQlFWTTdRVUZEY2tJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWMEZCVnl4TFFVRkxPMEZCUTJoQ0xGbEJRVmtzUzBGQlN6dEJRVU5xUWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NVVUZCVVR0QlFVTnVRaXhYUVVGWExGRkJRVkU3UVVGRGJrSXNWMEZCVnl4bFFVRmxPMEZCUXpGQ0xGbEJRVmtzVVVGQlVUdEJRVU53UWpzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eExRVUZMTzBGQlEyaENMRmRCUVZjc2JVSkJRVzFDTzBGQlF6bENMRmxCUVZrc1MwRkJTenRCUVVOcVFqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hYUVVGWExFdEJRVXM3UVVGRGFFSXNWMEZCVnl4UlFVRlJPMEZCUTI1Q0xGZEJRVmNzVVVGQlVUdEJRVU51UWl4WlFVRlpMRkZCUVZFN1FVRkRjRUk3UVVGRFFUczdRVUZGUVN4SlFVRkpMRWxCUVRaQ08wRkJRMnBETEhGQ1FVRnhRanRCUVVOeVFqczdPenM3T3p0VlEyaGFRVHRWUVVOQk96dFZRVVZCTzFWQlEwRTdWVUZEUVR0VlFVTkJPMVZCUTBFN1ZVRkRRVHRWUVVOQk8xVkJRMEU3VlVGRFFUdFZRVU5CTzFWQlEwRTdWVUZEUVR0VlFVTkJPenRWUVVWQk8xVkJRMEU3TzFWQlJVRTdWVUZEUVR0VlFVTkJPenM3T3pzN096czdPenRCUTNSQ1lUdEJRVU5pTERoRFFVRTJReXhGUVVGRkxHRkJRV0VzUlVGQlF6dEJRVU0zUkN4alFVRmpMRzFDUVVGUExFTkJRVU1zTUVWQlFYVkNPMEZCUXpkRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNORUpCUVRSQ08wRkJRelZDTEc5RFFVRnZRenRCUVVOd1F5eDFRMEZCZFVNc2IwWkJRVzlHTzBGQlF6TklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWVVGQllUdEJRVU5pTzBGQlEwRTdRVUZEUVN4aFFVRmhPMEZCUTJJN1FVRkRRVHRCUVVOQkxHRkJRV0U3UVVGRFlqdEJRVU5CTzBGQlEwRXNZVUZCWVR0QlFVTmlPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRV0U3UVVGRFlqdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUk3UVVGRGFrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRV0U3UVVGRFlqdEJRVU5CTzBGQlEwRXNZVUZCWVR0QlFVTmlPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzZVVSQlFYbEVPMEZCUTNwRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYTBKQlFXVTdRVUZEWmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzTWtOQlFUSkRMQ3R5VFNJc0luTnZkWEpqWlhNaU9sc2lkMlZpY0dGamF6b3ZMMEJpWVhObGJXVnVkSFZ1YVhabGNuTmxMMmx1Y0hWMExXMWhibUZuWlhJdmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkwwQmlZWE5sYldWdWRIVnVhWFpsY25ObEwybHVjSFYwTFcxaGJtRm5aWEl2TGk5dWIyUmxYMjF2WkhWc1pYTXZRR0poYzJWdFpXNTBkVzVwZG1WeWMyVXZkWFJwYkhNdmRYUnBiSE11YW5NaUxDSjNaV0p3WVdOck9pOHZRR0poYzJWdFpXNTBkVzVwZG1WeWMyVXZhVzV3ZFhRdGJXRnVZV2RsY2k4dUwyNXZaR1ZmYlc5a2RXeGxjeTlBWW1GelpXMWxiblIxYm1sMlpYSnpaUzkyWldNdmRtVmpMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmlZWE5sYldWdWRIVnVhWFpsY25ObEwybHVjSFYwTFcxaGJtRm5aWEl2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dlFHSmhjMlZ0Wlc1MGRXNXBkbVZ5YzJVdmFXNXdkWFF0YldGdVlXZGxjaTh1TDJsdVpHVjRMblJ6SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29LVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWkdWbWFXNWxJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JR1JsWm1sdVpTNWhiV1FwWEc1Y2RGeDBaR1ZtYVc1bEtGdGRMQ0JtWVdOMGIzSjVLVHRjYmx4MFpXeHpaU0I3WEc1Y2RGeDBkbUZ5SUdFZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEZ4MFptOXlLSFpoY2lCcElHbHVJR0VwSUNoMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ1B5QmxlSEJ2Y25SeklEb2djbTl2ZENsYmFWMGdQU0JoVzJsZE8xeHVYSFI5WEc1OUtTaHpaV3htTENBb0tTQTlQaUI3WEc1eVpYUjFjbTRnSWl3aUx5b3FYRzRnS2lCQWIzWmxjblpwWlhjZ1FTQnNhV0p5WVhKNUlHOW1JSFZ6WldaMWJDQm1kVzVqZEdsdmJuTmNiaUFxSUVCaGRYUm9iM0lnUjI5eVpHOXVJRXhoY25KcFoyRnVYRzRnS2k5Y2JseHVMeW9xWEc0Z0tpQkRhR1ZqYXlCcFppQjBkMjhnYm5WdFltVnljeUJoY21VZ1lYQndjbTk0YVcxaGRHVnNlU0JsY1hWaGJGeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJR0VnVG5WdFltVnlJR0ZjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCaUlFNTFiV0psY2lCaVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdXM0E5VG5WdFltVnlMa1ZRVTBsTVQwNWRJRlJvWlNCd2NtVmphWE5wYjI0Z2RtRnNkV1ZjYmlBcUlFQnlaWFIxY200Z2UySnZiMnhsWVc1OUlGUnlkV1VnYVdZZ2JuVnRZbVZ5Y3lCaElHRnVaQ0JpSUdGeVpTQmhjSEJ5YjNocGJXRjBaV3g1SUdWeGRXRnNYRzRnS2k5Y2JtTnZibk4wSUdac2IyRjBSWEYxWVd4eklEMGdLR0VzSUdJc0lIQWdQU0JPZFcxaVpYSXVSVkJUU1V4UFRpa2dQVDRnVFdGMGFDNWhZbk1vWVNBdElHSXBJRHdnY0R0Y2JseHVMeW9xWEc0Z0tpQkRiR0Z0Y0NCaElHNTFiV0psY2lCaVpYUjNaV1Z1SUcxcGJpQmhibVFnYldGNFhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdZU0JVYUdVZ2JuVnRZbVZ5SUhSdklHTnNZVzF3WEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ1cyMXBiajB3WFNCVWFHVWdiV2x1YVcxMWJTQjJZV3gxWlZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlGdHRZWGc5TVYwZ1ZHaGxJRzFoZUdsdGRXMGdkbUZzZFdWY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMGdRU0JqYkdGdGNHVmtJRzUxYldKbGNseHVJQ292WEc1amIyNXpkQ0JqYkdGdGNDQTlJQ2hoTENCdGFXNGdQU0F3TENCdFlYZ2dQU0F4S1NBOVBpQmhJRHdnYldsdUlEOGdiV2x1SURvZ0tHRWdQaUJ0WVhnZ1B5QnRZWGdnT2lCaEtUdGNibHh1THlvcVhHNGdLaUJIWlhRZ2RHaGxJR1p5WVdOMGFXOXVZV3dnY0dGeWRDQnZaaUJoSUc1MWJXSmxjbHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdFZ1ZHaGxJRzUxYldKbGNpQm1jbTl0SUhkb2FXTm9JSFJ2SUdkbGRDQjBhR1VnWm5KaFkzUnBiMjVoYkNCd1lYSjBYRzRnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5SUZSb1pTQm1jbUZqZEdsdmJtRnNJSEJoY25RZ2IyWWdkR2hsSUc1MWJXSmxjbHh1SUNvdlhHNWpiMjV6ZENCbWNtRmpJRDBnWVNBOVBpQmhJRDQ5SURBZ1B5QmhJQzBnVFdGMGFDNW1iRzl2Y2loaEtTQTZJR0VnTFNCTllYUm9MbU5sYVd3b1lTazdYRzVjYmk4cUtseHVJQ29nUkc4Z1lTQnNhVzVsWVhJZ2FXNTBaWEp3YjJ4aGRHbHZiaUJpWlhSM1pXVnVJR0VnWVc1a0lHSmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JoSUZSb1pTQnRhVzVwYlhWdElHNTFiV0psY2x4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHSWdWR2hsSUcxaGVHbHRkVzBnYm5WdFltVnlYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYVNCVWFHVWdhVzUwWlhKd2IyeGhkR2x2YmlCMllXeDFaU3dnYzJodmRXeGtJR0psSUdsdUlIUm9aU0JwYm5SbGNuWmhiQ0JiTUN3Z01WMWNiaUFxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjBnUVc0Z2FXNTBaWEp3YjJ4aGRHVmtJSFpoYkhWbElHbHVJSFJvWlNCcGJuUmxjblpoYkNCYllTd2dZbDFjYmlBcUwxeHVZMjl1YzNRZ2JHVnljQ0E5SUNoaExDQmlMQ0JwS1NBOVBpQmhJQ3NnS0dJZ0xTQmhLU0FxSUdrN1hHNWNiaThxS2x4dUlDb2dSMlYwSUhSb1pTQndiM05wZEdsdmJpQnZaaUJwSUdKbGRIZGxaVzRnWVNCaGJtUWdZbHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdFZ1ZHaGxJRzFwYm1sdGRXMGdiblZ0WW1WeVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdZaUJVYUdVZ2JXRjRhVzExYlNCdWRXMWlaWEpjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCcElGUm9aU0JwYm5SbGNuQnZiR0YwWldRZ2RtRnNkV1VnYVc0Z2RHaGxJR2x1ZEdWeWRtRnNJRnRoTENCaVhWeHVJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmU0JVYUdVZ2NHOXphWFJwYjI0Z2IyWWdhU0JpWlhSM1pXVnVJR0VnWVc1a0lHSmNiaUFxTDF4dVkyOXVjM1FnZFc1c1pYSndJRDBnS0dFc0lHSXNJR2twSUQwK0lDaHBJQzBnWVNrZ0x5QW9ZaUF0SUdFcE8xeHVYRzR2S2lwY2JpQXFJRVJ2SUdFZ1ltbHNhVzVsWVhJZ2FXNTBaWEp3YjJ4aGRHbHZibHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdNd01DQlViM0F0YkdWbWRDQjJZV3gxWlZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHTXhNQ0JVYjNBdGNtbG5hSFFnZG1Gc2RXVmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JqTURFZ1FtOTBkRzl0TFd4bFpuUWdkbUZzZFdWY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmpNVEVnUW05MGRHOXRMWEpwWjJoMElIWmhiSFZsWEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ2FYZ2dTVzUwWlhKd2IyeGhkR2x2YmlCMllXeDFaU0JoYkc5dVp5QjRYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYVhrZ1NXNTBaWEp3YjJ4aGRHbHZiaUIyWVd4MVpTQmhiRzl1WnlCNVhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlJRUVnWW1sc2FXNWxZWElnYVc1MFpYSndiMnhoZEdWa0lIWmhiSFZsWEc0Z0tpOWNibU52Ym5OMElHSnNaWEp3SUQwZ0tHTXdNQ3dnWXpFd0xDQmpNREVzSUdNeE1Td2dhWGdzSUdsNUtTQTlQaUJzWlhKd0tHeGxjbkFvWXpBd0xDQmpNVEFzSUdsNEtTd2diR1Z5Y0Noak1ERXNJR014TVN3Z2FYZ3BMQ0JwZVNrN1hHNWNiaThxS2x4dUlDb2dVbVV0YldGd0lHRWdiblZ0WW1WeUlHa2dabkp2YlNCeVlXNW5aU0JoTVM0dUxtRXlJSFJ2SUdJeExpNHVZakpjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCcElGUm9aU0J1ZFcxaVpYSWdkRzhnY21VdGJXRndYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnWVRGY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmhNbHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdJeFhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdZakpjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24xY2JpQXFMMXh1WTI5dWMzUWdjbVZ0WVhBZ1BTQW9hU3dnWVRFc0lHRXlMQ0JpTVN3Z1lqSXBJRDArSUdJeElDc2dLR2tnTFNCaE1Ta2dLaUFvWWpJZ0xTQmlNU2tnTHlBb1lUSWdMU0JoTVNrN1hHNWNiaThxS2x4dUlDb2dSRzhnWVNCemJXOXZkR2dnYVc1MFpYSndiMnhoZEdsdmJpQmlaWFIzWldWdUlHRWdZVzVrSUdKY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmhJRlJvWlNCdGFXNXBiWFZ0SUc1MWJXSmxjbHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdJZ1ZHaGxJRzFoZUdsdGRXMGdiblZ0WW1WeVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdhU0JVYUdVZ2FXNTBaWEp3YjJ4aGRHbHZiaUIyWVd4MVpWeHVJQ29nUUhKbGRIVnliaUI3Ym5WdFltVnlmU0JCYmlCcGJuUmxjbkJ2YkdGMFpXUWdkbUZzZFdVZ2FXNGdkR2hsSUdsdWRHVnlkbUZzSUZ0aExDQmlYVnh1SUNvdlhHNWpiMjV6ZENCemJXOXZkR2h6ZEdWd0lEMGdLR0VzSUdJc0lHa3BJRDArSUd4bGNuQW9ZU3dnWWl3Z015QXFJRTFoZEdndWNHOTNLR2tzSURJcElDMGdNaUFxSUUxaGRHZ3VjRzkzS0drc0lETXBLVHRjYmx4dUx5b3FYRzRnS2lCSFpYUWdZVzRnWVc1bmJHVWdhVzRnY21Ga2FXRnVjMXh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdSbFozSmxaWE1nVkdobElHRnVaMnhsSUdsdUlHUmxaM0psWlhOY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMGdWR2hsSUdGdVoyeGxJR2x1SUhKaFpHbGhibk5jYmlBcUwxeHVZMjl1YzNRZ2NtRmthV0Z1Y3lBOUlHUmxaM0psWlhNZ1BUNGdLRTFoZEdndVVFa2dMeUF4T0RBcElDb2daR1ZuY21WbGN6dGNibHh1THlvcVhHNGdLaUJIWlhRZ1lXNGdZVzVuYkdVZ2FXNGdaR1ZuY21WbGMxeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJSEpoWkdsaGJuTWdWR2hsSUdGdVoyeGxJR2x1SUhKaFpHbGhibk5jYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24wZ1ZHaGxJR0Z1WjJ4bElHbHVJR1JsWjNKbFpYTmNiaUFxTDF4dVkyOXVjM1FnWkdWbmNtVmxjeUE5SUhKaFpHbGhibk1nUFQ0Z0tERTRNQ0F2SUUxaGRHZ3VVRWtwSUNvZ2NtRmthV0Z1Y3p0Y2JseHVMeW9xWEc0Z0tpQkhaWFFnWVNCeVlXNWtiMjBnWm14dllYUWdhVzRnZEdobElHbHVkR1Z5ZG1Gc0lGdHRhVzRzSUcxaGVDbGNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J0YVc0Z1NXNWpiSFZ6YVhabElHMXBibHh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUcxaGVDQkZlR05zZFhOcGRtVWdiV0Y0WEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOUlFRWdjbUZ1Wkc5dElHWnNiMkYwSUdsdUlIUm9aU0JwYm5SbGNuWmhiQ0JiYldsdUxDQnRZWGdwWEc0Z0tpOWNibU52Ym5OMElISmhibVJ2YlVKbGRIZGxaVzRnUFNBb2JXbHVMQ0J0WVhncElEMCtJRTFoZEdndWNtRnVaRzl0S0NrZ0tpQW9iV0Y0SUMwZ2JXbHVLU0FySUcxcGJqdGNibHh1THlvcVhHNGdLaUJIWlhRZ1lTQnlZVzVrYjIwZ2FXNTBaV2RsY2lCcGJpQjBhR1VnYVc1MFpYSjJZV3dnVzIxcGJpd2diV0Y0WFZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHMXBiaUJKYm1Oc2RYTnBkbVVnYldsdVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdiV0Y0SUVsdVkyeDFjMmwyWlNCdFlYaGNiaUFxSUVCeVpYUjFjbTRnZTI1MWJXSmxjbjBnUVNCeVlXNWtiMjBnYVc1MFpXZGxjaUJwYmlCMGFHVWdhVzUwWlhKMllXd2dXMjFwYml3Z2JXRjRYVnh1SUNvdlhHNWpiMjV6ZENCeVlXNWtiMjFKYm5SQ1pYUjNaV1Z1SUQwZ0tHMXBiaXdnYldGNEtTQTlQaUJOWVhSb0xtWnNiMjl5S0UxaGRHZ3VjbUZ1Wkc5dEtDa2dLaUFvYldGNElDMGdiV2x1SUNzZ01Ta3BJQ3NnYldsdU8xeHVYRzR2S2lwY2JpQXFJRWRsZENCaElHNXZjbTFoYkd4NUxXUnBjM1J5YVdKMWRHVmtJSEpoYm1SdmJTQnVkVzFpWlhKY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmJiWFU5TUM0MVhTQlVhR1VnYldWaGJpQjJZV3gxWlZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlGdHphV2R0WVQwd0xqVmRJRlJvWlNCemRHRnVaR0Z5WkNCa1pYWnBZWFJwYjI1Y2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmJjMkZ0Y0d4bGN6MHlYU0JVYUdVZ2JuVnRZbVZ5SUc5bUlITmhiWEJzWlhOY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMGdRU0J1YjNKdFlXeHNlUzFrYVhOMGNtbGlkWFJsWkNCeVlXNWtiMjBnYm5WdFltVnlYRzRnS2k5Y2JtTnZibk4wSUdOc2RGSmhibVJ2YlNBOUlDaHRkU0E5SURBdU5Td2djMmxuYldFZ1BTQXdMalVzSUhOaGJYQnNaWE1nUFNBeUtTQTlQaUI3WEc0Z0lHeGxkQ0IwYjNSaGJDQTlJREE3WEc0Z0lHWnZjaUFvYkdWMElHa2dQU0J6WVcxd2JHVnpPeUJwTFMwN0tTQjdYRzRnSUNBZ2RHOTBZV3dnS3owZ1RXRjBhQzV5WVc1a2IyMG9LVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdiWFVnS3lBb2RHOTBZV3dnTFNCellXMXdiR1Z6SUM4Z01pa2dMeUFvYzJGdGNHeGxjeUF2SURJcElDb2djMmxuYldFN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVkbGRDQmhJRzV2Y20xaGJHeDVMV1JwYzNSeWFXSjFkR1ZrSUhKaGJtUnZiU0JwYm5SbFoyVnlJR2x1SUhSb1pTQnBiblJsY25aaGJDQmJiV2x1TENCdFlYaGRYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYldsdUlFbHVZMngxYzJsMlpTQnRhVzVjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCdFlYZ2dTVzVqYkhWemFYWmxJRzFoZUZ4dUlDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZTQkJJRzV2Y20xaGJHeDVMV1JwYzNSeWFXSjFkR1ZrSUhKaGJtUnZiU0JwYm5SbFoyVnlYRzRnS2k5Y2JtTnZibk4wSUdOc2RGSmhibVJ2YlVsdWRDQTlJQ2h0YVc0c0lHMWhlQ2tnUFQ0Z1RXRjBhQzVtYkc5dmNpaHRhVzRnS3lCamJIUlNZVzVrYjIwb01DNDFMQ0F3TGpVc0lESXBJQ29nS0cxaGVDQXJJREVnTFNCdGFXNHBLVHRjYmx4dUx5b3FYRzRnS2lCU1pYUjFjbTRnWVNCM1pXbG5hSFJsWkNCeVlXNWtiMjBnYVc1MFpXZGxjbHh1SUNvZ1FIQmhjbUZ0SUh0QmNuSmhlVHh1ZFcxaVpYSStmU0IzSUVGdUlHRnljbUY1SUc5bUlIZGxhV2RvZEhOY2JpQXFJRUJ5WlhSMWNtNGdlMjUxYldKbGNuMGdRVzRnYVc1a1pYZ2dabkp2YlNCM1hHNGdLaTljYm1OdmJuTjBJSGRsYVdkb2RHVmtVbUZ1Wkc5dElEMGdkeUE5UGlCN1hHNGdJR3hsZENCMGIzUmhiQ0E5SUhjdWNtVmtkV05sS0NoaExDQnBLU0E5UGlCaElDc2dhU3dnTUNrc0lHNGdQU0F3TzF4dUlDQmpiMjV6ZENCeUlEMGdUV0YwYUM1eVlXNWtiMjBvS1NBcUlIUnZkR0ZzTzF4dUlDQjNhR2xzWlNBb2RHOTBZV3dnUGlCeUtTQjdYRzRnSUNBZ2RHOTBZV3dnTFQwZ2QxdHVLeXRkTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJ1SUMwZ01UdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1FXNGdhVzUwWlhKd2IyeGhkR2x2YmlCbWRXNWpkR2x2Ymx4dUlDb2dRR05oYkd4aVlXTnJJR2x1ZEdWeWNHOXNZWFJwYjI1RFlXeHNZbUZqYTF4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHRWdWR2hsSUcxcGJtbHRkVzBnYm5WdFltVnlYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnWWlCVWFHVWdiV0Y0YVcxMWJTQnVkVzFpWlhKY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQnBJRlJvWlNCcGJuUmxjbkJ2YkdGMGFXOXVJSFpoYkhWbExDQnphRzkxYkdRZ1ltVWdhVzRnZEdobElHbHVkR1Z5ZG1Gc0lGc3dMQ0F4WFZ4dUlDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZTQlVhR1VnYVc1MFpYSndiMnhoZEdWa0lIWmhiSFZsSUdsdUlIUm9aU0JwYm5SbGNuWmhiQ0JiWVN3Z1lsMWNiaUFxTDF4dVhHNHZLaXBjYmlBcUlGSmxkSFZ5YmlCaGJpQnBiblJsY25CdmJHRjBaV1FnZG1Gc2RXVWdabkp2YlNCaGJpQmhjbkpoZVZ4dUlDb2dRSEJoY21GdElIdEJjbkpoZVR4dWRXMWlaWEkrZlNCaElFRnVJR0Z5Y21GNUlHOW1JSFpoYkhWbGN5QnBiblJsY25CdmJHRjBaVnh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdrZ1FTQnVkVzFpWlhJZ2FXNGdkR2hsSUdsdWRHVnlkbUZzSUZzd0xDQXhYVnh1SUNvZ1FIQmhjbUZ0SUh0cGJuUmxjbkJ2YkdGMGFXOXVRMkZzYkdKaFkydDlJRnRtUFUxaGRHZ3ViR1Z5Y0YwZ1ZHaGxJR2x1ZEdWeWNHOXNZWFJwYjI0Z1puVnVZM1JwYjI0Z2RHOGdkWE5sWEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOUlFRnVJR2x1ZEdWeWNHOXNZWFJsWkNCMllXeDFaU0JwYmlCMGFHVWdhVzUwWlhKMllXd2dXMjFwYmloaEtTd2diV0Y0S0dFcFhWeHVJQ292WEc1amIyNXpkQ0JzWlhKd1FYSnlZWGtnUFNBb1lTd2dhU3dnWmlBOUlHeGxjbkFwSUQwK0lIdGNiaUFnWTI5dWMzUWdjeUE5SUdrZ0tpQW9ZUzVzWlc1bmRHZ2dMU0F4S1R0Y2JpQWdZMjl1YzNRZ2NDQTlJR05zWVcxd0tFMWhkR2d1ZEhKMWJtTW9jeWtzSURBc0lHRXViR1Z1WjNSb0lDMGdNU2s3WEc0Z0lISmxkSFZ5YmlCbUtHRmJjRjBnZkh3Z01Dd2dZVnR3SUNzZ01WMGdmSHdnTUN3Z1puSmhZeWh6S1NrN1hHNTlPMXh1WEc0dktpcGNiaUFxSUVkbGRDQjBhR1VnWkc5MElIQnliMlIxWTNRZ2IyWWdkSGR2SUhabFkzUnZjbk5jYmlBcUlFQndZWEpoYlNCN1FYSnlZWGs4Ym5WdFltVnlQbjBnWVNCV1pXTjBiM0lnWVZ4dUlDb2dRSEJoY21GdElIdEJjbkpoZVR4dWRXMWlaWEkrZlNCaUlGWmxZM1J2Y2lCaVhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlJR0VnNG9pWklHSmNiaUFxTDF4dVkyOXVjM1FnWkc5MElEMGdLR0VzSUdJcElEMCtJR0V1Y21Wa2RXTmxLQ2h1TENCMkxDQnBLU0E5UGlCdUlDc2dkaUFxSUdKYmFWMHNJREFwTzF4dVhHNHZLaXBjYmlBcUlFZGxkQ0IwYUdVZ1ptRmpkRzl5YVdGc0lHOW1JR0VnYm5WdFltVnlYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnWVZ4dUlDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZTQmhJVnh1SUNvdlhHNWpiMjV6ZENCbVlXTjBiM0pwWVd3Z1BTQmhJRDArSUh0Y2JpQWdiR1YwSUhKbGMzVnNkQ0E5SURFN1hHNGdJR1p2Y2lBb2JHVjBJR2tnUFNBeU95QnBJRHc5SUdFN0lHa3JLeWtnZTF4dUlDQWdJSEpsYzNWc2RDQXFQU0JwTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJ5WlhOMWJIUTdYRzU5TzF4dVhHNHZLaXBjYmlBcUlFZGxkQ0IwYUdVZ2JuVnRZbVZ5SUc5bUlIQmxjbTExZEdGMGFXOXVjeUJ2WmlCeUlHVnNaVzFsYm5SeklHWnliMjBnWVNCelpYUWdiMllnYmlCbGJHVnRaVzUwYzF4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHNWNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J5WEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOUlHNVFjbHh1SUNvdlhHNWpiMjV6ZENCd1pYSnRkWFJoZEdsdmJpQTlJQ2h1TENCeUtTQTlQaUJtWVdOMGIzSnBZV3dvYmlrZ0x5Qm1ZV04wYjNKcFlXd29iaUF0SUhJcE8xeHVYRzR2S2lwY2JpQXFJRWRsZENCMGFHVWdiblZ0WW1WeUlHOW1JR052YldKcGJtRjBhVzl1Y3lCdlppQnlJR1ZzWlcxbGJuUnpJR1p5YjIwZ1lTQnpaWFFnYjJZZ2JpQmxiR1Z0Wlc1MGMxeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRzVjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCeVhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjlJRzVEY2x4dUlDb3ZYRzVqYjI1emRDQmpiMjFpYVc1aGRHbHZiaUE5SUNodUxDQnlLU0E5UGlCbVlXTjBiM0pwWVd3b2Jpa2dMeUFvWm1GamRHOXlhV0ZzS0hJcElDb2dabUZqZEc5eWFXRnNLRzRnTFNCeUtTazdYRzVjYmk4cUtseHVJQ29nUVNCbWRXNWpkR2x2YmlCbWIzSWdaMlZ1WlhKaGRHbHVaeUJoY25KaGVTQjJZV3gxWlhOY2JpQXFJRUJqWVd4c1ltRmpheUIwYVcxbGMwTmhiR3hpWVdOclhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdhU0JVYUdVZ1lYSnlZWGtnYVc1a1pYaGNiaUFxSUVCeVpYUjFjbTRnZXlwOUlGUm9aU0JoY25KaGVTQjJZV3gxWlZ4dUlDb3ZYRzVjYmk4cUtseHVJQ29nVW1WMGRYSnVJR0VnYm1WM0lHRnljbUY1SUhkcGRHZ2diR1Z1WjNSb0lHNGdZbmtnWTJGc2JHbHVaeUJtZFc1amRHbHZiaUJtS0drcElHOXVJR1ZoWTJnZ1pXeGxiV1Z1ZEZ4dUlDb2dRSEJoY21GdElIdDBhVzFsYzBOaGJHeGlZV05yZlNCbVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdiaUJVYUdVZ2MybDZaU0J2WmlCMGFHVWdZWEp5WVhsY2JpQXFJRUJ5WlhSMWNtNGdlMEZ5Y21GNVBDbytmVnh1SUNvdlhHNWpiMjV6ZENCMGFXMWxjeUE5SUNobUxDQnVLU0E5UGlCQmNuSmhlU2h1S1M1bWFXeHNLREFwTG0xaGNDZ29YeXdnYVNrZ1BUNGdaaWhwS1NrN1hHNWNiaThxS2x4dUlDb2dVbVYwZFhKdUlHRnVJR0Z5Y21GNUlHTnZiblJoYVc1cGJtY2diblZ0WW1WeWN5QXdMVDRvYmlBdElERXBYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYmlCVWFHVWdjMmw2WlNCdlppQjBhR1VnWVhKeVlYbGNiaUFxSUVCeVpYUjFjbTRnZTBGeWNtRjVQRzUxYldKbGNqNTlJRUZ1SUdGeWNtRjVJRzltSUdsdWRHVm5aWEp6SURBdFBpaHVJQzBnTVNsY2JpQXFMMXh1WTI5dWMzUWdjbUZ1WjJVZ1BTQnVJRDArSUhScGJXVnpLR2tnUFQ0Z2FTd2diaWs3WEc1Y2JpOHFLbHh1SUNvZ1dtbHdJRElnWVhKeVlYbHpJSFJ2WjJWMGFHVnlMQ0JwTG1VdUlDaGJNU3dnTWl3Z00xMHNJRnRoTENCaUxDQmpYU2tnUFQ0Z1cxc3hMQ0JoWFN3Z1d6SXNJR0pkTENCYk15d2dZMTFkWEc0Z0tpQkFjR0Z5WVcwZ2UwRnljbUY1UENvK2ZTQmhYRzRnS2lCQWNHRnlZVzBnZTBGeWNtRjVQQ28rZlNCaVhHNGdLaUJBY21WMGRYSnVJSHRCY25KaGVUeEJjbkpoZVR3cVBqNTlYRzRnS2k5Y2JtTnZibk4wSUhwcGNDQTlJQ2hoTENCaUtTQTlQaUJoTG0xaGNDZ29heXdnYVNrZ1BUNGdXMnNzSUdKYmFWMWRLVHRjYmx4dUx5b3FYRzRnS2lCU1pYUjFjbTRnWVhKeVlYbGJhVjBnZDJsMGFDQndiM05wZEdsMlpTQmhibVFnYm1WbllYUnBkbVVnZDNKaGNIQnBibWRjYmlBcUlFQndZWEpoYlNCN1FYSnlZWGs4S2o1OUlHRmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JwSUZSb1pTQndiM05wZEdsMlpXeDVMMjVsWjJGMGFYWmxiSGtnZDNKaGNIQmxaQ0JoY25KaGVTQnBibVJsZUZ4dUlDb2dRSEpsZEhWeWJpQjdLbjBnUVc0Z1pXeGxiV1Z1ZENCbWNtOXRJSFJvWlNCaGNuSmhlVnh1SUNvdlhHNWpiMjV6ZENCaGRDQTlJQ2hoTENCcEtTQTlQaUJoVzJrZ1BDQXdJRDhnWVM1c1pXNW5kR2dnTFNBb1RXRjBhQzVoWW5Nb2FTQXJJREVwSUNVZ1lTNXNaVzVuZEdncElDMGdNU0E2SUdrZ0pTQmhMbXhsYm1kMGFGMDdYRzVjYmk4cUtseHVJQ29nUTJodmNDQmhiaUJoY25KaGVTQnBiblJ2SUdOb2RXNXJjeUJ2WmlCemFYcGxJRzVjYmlBcUlFQndZWEpoYlNCN1FYSnlZWGs4S2o1OUlHRmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J1SUZSb1pTQmphSFZ1YXlCemFYcGxYRzRnS2lCQWNtVjBkWEp1SUh0QmNuSmhlVHhCY25KaGVUd3FQajU5SUVGdUlHRnljbUY1SUc5bUlHRnljbUY1SUdOb2RXNXJjMXh1SUNvdlhHNWpiMjV6ZENCamFIVnVheUE5SUNoaExDQnVLU0E5UGlCMGFXMWxjeWhwSUQwK0lHRXVjMnhwWTJVb2FTQXFJRzRzSUdrZ0tpQnVJQ3NnYmlrc0lFMWhkR2d1WTJWcGJDaGhMbXhsYm1kMGFDQXZJRzRwS1R0Y2JseHVMeW9xWEc0Z0tpQlNZVzVrYjIxc2VTQnphSFZtWm14bElHRWdjMmhoYkd4dmR5QmpiM0I1SUc5bUlHRnVJR0Z5Y21GNVhHNGdLaUJBY0dGeVlXMGdlMEZ5Y21GNVBDbytmU0JoWEc0Z0tpQkFjbVYwZFhKdUlIdEJjbkpoZVR3cVBuMGdWR2hsSUhOb2RXWm1iR1ZrSUdGeWNtRjVYRzRnS2k5Y2JtTnZibk4wSUhOb2RXWm1iR1VnUFNCaElEMCtJR0V1YzJ4cFkyVW9LUzV6YjNKMEtDZ3BJRDArSUUxaGRHZ3VjbUZ1Wkc5dEtDa2dMU0F3TGpVcE8xeHVYRzVwWmlBb2RIbHdaVzltSUcxdlpIVnNaU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN1hHNGdJQ0FnWm14dllYUkZjWFZoYkhNc1hHNGdJQ0FnWTJ4aGJYQXNYRzRnSUNBZ1puSmhZeXhjYmlBZ0lDQnNaWEp3TEZ4dUlDQWdJSFZ1YkdWeWNDeGNiaUFnSUNCaWJHVnljQ3hjYmlBZ0lDQnlaVzFoY0N4Y2JpQWdJQ0J6Ylc5dmRHaHpkR1Z3TEZ4dUlDQWdJSEpoWkdsaGJuTXNYRzRnSUNBZ1pHVm5jbVZsY3l4Y2JpQWdJQ0J5WVc1a2IyMUNaWFIzWldWdUxGeHVJQ0FnSUhKaGJtUnZiVWx1ZEVKbGRIZGxaVzRzWEc0Z0lDQWdZMngwVW1GdVpHOXRMRnh1SUNBZ0lHTnNkRkpoYm1SdmJVbHVkQ3hjYmlBZ0lDQjNaV2xuYUhSbFpGSmhibVJ2YlN4Y2JpQWdJQ0JzWlhKd1FYSnlZWGtzWEc0Z0lDQWdaRzkwTEZ4dUlDQWdJR1poWTNSdmNtbGhiQ3hjYmlBZ0lDQndaWEp0ZFhSaGRHbHZiaXhjYmlBZ0lDQmpiMjFpYVc1aGRHbHZiaXhjYmlBZ0lDQjBhVzFsY3l4Y2JpQWdJQ0J5WVc1blpTeGNiaUFnSUNCNmFYQXNYRzRnSUNBZ1lYUXNYRzRnSUNBZ1kyaDFibXNzWEc0Z0lDQWdjMmgxWm1ac1pTeGNiaUFnZlR0Y2JuMWNiaUlzSW1OdmJuTjBJSHNnZEdsdFpYTXNJR05vZFc1ckxDQmtiM1FnZlNBOUlISmxjWFZwY21Vb0owQmlZWE5sYldWdWRIVnVhWFpsY25ObEwzVjBhV3h6SnlrN1hHNWNiaThxS2x4dUlDb2dRRzkyWlhKMmFXVjNJRUVnYkdsaWNtRnllU0J2WmlCMWMyVm1kV3dnWm5WdVkzUnBiMjV6WEc0Z0tpQkFZWFYwYUc5eUlFZHZjbVJ2YmlCTVlYSnlhV2RoYmx4dUlDb3ZYRzVjYmk4cUtseHVJQ29nUVNBeVpDQjJaV04wYjNKY2JpQXFJRUIwZVhCbFpHVm1JSHRQWW1wbFkzUjlJSFpsWTF4dUlDb2dRSEJ5YjNCbGNuUjVJSHR1ZFcxaVpYSjlJSGdnVkdobElIZ2dZMjl0Y0c5dVpXNTBJRzltSUhSb1pTQjJaV04wYjNKY2JpQXFJRUJ3Y205d1pYSjBlU0I3Ym5WdFltVnlmU0I1SUZSb1pTQjVJR052YlhCdmJtVnVkQ0J2WmlCMGFHVWdkbVZqZEc5eVhHNGdLaTljYmx4dUx5b3FYRzRnS2lCRGNtVmhkR1VnWVNCdVpYY2dkbVZqZEc5eVhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNueDJaV045SUZ0NFhTQlVhR1VnZUNCamIyMXdiMjVsYm5RZ2IyWWdkR2hsSUhabFkzUnZjaXdnYjNJZ1lTQjJaV04wYjNJZ2RHOGdZMjl3ZVZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlGdDVYU0JVYUdVZ2VTQmpiMjF3YjI1bGJuUWdiMllnZEdobElIWmxZM1J2Y2x4dUlDb2dRSEpsZEhWeWJpQjdkbVZqZlNCQklHNWxkeUIyWldOMGIzSmNiaUFxSUVCbGVHRnRjR3hsSUR4allYQjBhVzl1UGxaaGNtbHZkWE1nZDJGNWN5QjBieUJwYm1sMGFXRnNhWE5sSUdFZ2RtVmpkRzl5UEM5allYQjBhVzl1UGx4dUlDb2diR1YwSUdFZ1BTQjJaV01vTXl3Z01pazdJQ0F2THlBb015d2dNaWxjYmlBcUlHeGxkQ0JpSUQwZ2RtVmpLRFFwT3lBZ0lDQWdMeThnS0RRc0lEUXBYRzRnS2lCc1pYUWdZeUE5SUhabFl5aGhLVHNnSUNBZ0lDOHZJQ2d6TENBeUtWeHVJQ29nYkdWMElHUWdQU0IyWldNb0tUc2dJQ0FnSUNBdkx5QW9NQ3dnTUNsY2JpQXFMMXh1WTI5dWMzUWdkbVZqSUQwZ0tIZ3NJSGtwSUQwK0lDZ2hlQ0FtSmlBaGVTQS9YRzRnSUhzZ2VEb2dNQ3dnZVRvZ01DQjlJRG9nS0hSNWNHVnZaaUI0SUQwOVBTQW5iMkpxWldOMEp5QS9YRzRnSUNBZ2V5QjRPaUI0TG5nZ2ZId2dNQ3dnZVRvZ2VDNTVJSHg4SURBZ2ZTQTZJQ2g1SUQwOVBTQnVkV3hzSUh4OElIa2dQVDA5SUhWdVpHVm1hVzVsWkNBL1hHNGdJQ0FnSUNCN0lIZzZJSGdzSUhrNklIZ2dmU0E2SUhzZ2VEb2dlQ3dnZVRvZ2VTQjlLVnh1SUNBcFhHNHBPMXh1WEc0dktpcGNiaUFxSUVkbGRDQjBhR1VnWTI5dGNHOXVaVzUwY3lCdlppQmhJSFpsWTNSdmNpQmhjeUJoYmlCaGNuSmhlVnh1SUNvZ1FIQmhjbUZ0SUh0MlpXTjlJR0VnVkdobElIWmxZM1J2Y2lCMGJ5Qm5aWFFnWTI5dGNHOXVaVzUwY3lCbWNtOXRYRzRnS2lCQWNtVjBkWEp1SUh0QmNuSmhlVHh1ZFcxaVpYSStmU0JVYUdVZ2RtVmpkRzl5SUdOdmJYQnZibVZ1ZEhNZ1lYTWdZVzRnWVhKeVlYbGNiaUFxTDF4dWRtVmpMbU52YlhCdmJtVnVkSE1nUFNCaElEMCtJRnRoTG5nc0lHRXVlVjA3WEc1Y2JpOHFLbHh1SUNvZ1VtVjBkWEp1SUdFZ2RXNXBkQ0IyWldOMGIzSWdLREVzSURBcFhHNGdLaUJBY21WMGRYSnVJSHQyWldOOUlFRWdkVzVwZENCMlpXTjBiM0lnS0RFc0lEQXBYRzRnS2k5Y2JuWmxZeTUxZUNBOUlDZ3BJRDArSUhabFl5Z3hMQ0F3S1R0Y2JseHVMeW9xWEc0Z0tpQlNaWFIxY200Z1lTQjFibWwwSUhabFkzUnZjaUFvTUN3Z01TbGNiaUFxSUVCeVpYUjFjbTRnZTNabFkzMGdRU0IxYm1sMElIWmxZM1J2Y2lBb01Dd2dNU2xjYmlBcUwxeHVkbVZqTG5WNUlEMGdLQ2tnUFQ0Z2RtVmpLREFzSURFcE8xeHVYRzR2S2lwY2JpQXFJRUZrWkNCMlpXTjBiM0p6WEc0Z0tpQkFjR0Z5WVcwZ2UzWmxZMzBnWVNCV1pXTjBiM0lnWVZ4dUlDb2dRSEJoY21GdElIdDJaV045SUdJZ1ZtVmpkRzl5SUdKY2JpQXFJRUJ5WlhSMWNtNGdlM1psWTMwZ1lTQXJJR0pjYmlBcUwxeHVkbVZqTG1Ga1pDQTlJQ2hoTENCaUtTQTlQaUFvZXlCNE9pQmhMbmdnS3lCaUxuZ3NJSGs2SUdFdWVTQXJJR0l1ZVNCOUtUdGNibHh1THlvcVhHNGdLaUJUWTJGc1pTQmhJSFpsWTNSdmNseHVJQ29nUUhCaGNtRnRJSHQyWldOOUlHRWdWbVZqZEc5eUlHRmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JpSUZOallXeGhjaUJpWEc0Z0tpQkFjbVYwZFhKdUlIdDJaV045SUdFZ0tpQmlYRzRnS2k5Y2JuWmxZeTV0ZFd3Z1BTQW9ZU3dnWWlrZ1BUNGdLSHNnZURvZ1lTNTRJQ29nWWl3Z2VUb2dZUzU1SUNvZ1lpQjlLVHRjYmx4dUx5b3FYRzRnS2lCVGRXSjBjbUZqZENCMlpXTjBiM0p6WEc0Z0tpQkFjR0Z5WVcwZ2UzWmxZMzBnWVNCV1pXTjBiM0lnWVZ4dUlDb2dRSEJoY21GdElIdDJaV045SUdJZ1ZtVmpkRzl5SUdKY2JpQXFJRUJ5WlhSMWNtNGdlM1psWTMwZ1lTQXRJR0pjYmlBcUwxeHVkbVZqTG5OMVlpQTlJQ2hoTENCaUtTQTlQaUFvZXlCNE9pQmhMbmdnTFNCaUxuZ3NJSGs2SUdFdWVTQXRJR0l1ZVNCOUtUdGNibHh1THlvcVhHNGdLaUJIWlhRZ2RHaGxJR3hsYm1kMGFDQnZaaUJoSUhabFkzUnZjbHh1SUNvZ1FIQmhjbUZ0SUh0MlpXTjlJR0VnVm1WamRHOXlJR0ZjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24wZ2ZHRjhYRzRnS2k5Y2JuWmxZeTVzWlc0Z1BTQmhJRDArSUUxaGRHZ3VjM0Z5ZENoaExuZ2dLaUJoTG5nZ0t5QmhMbmtnS2lCaExua3BPMXh1WEc0dktpcGNiaUFxSUVkbGRDQjBhR1VnYkdWdVozUm9JRzltSUdFZ2RtVmpkRzl5SUhWemFXNW5JSFJoZUdsallXSWdaMlZ2YldWMGNubGNiaUFxSUVCd1lYSmhiU0I3ZG1WamZTQmhJRlpsWTNSdmNpQmhYRzRnS2lCQWNtVjBkWEp1SUh0dWRXMWlaWEo5SUh4aGZGeHVJQ292WEc1MlpXTXViV0Z1YUdGMGRHRnVJRDBnWVNBOVBpQk5ZWFJvTG1GaWN5aGhMbmdwSUNzZ1RXRjBhQzVoWW5Nb1lTNTVLVHRjYmx4dUx5b3FYRzRnS2lCT2IzSnRZV3hwYzJVZ1lTQjJaV04wYjNKY2JpQXFJRUJ3WVhKaGJTQjdkbVZqZlNCaElGUm9aU0IyWldOMGIzSWdkRzhnYm05eWJXRnNhWE5sWEc0Z0tpQkFjbVYwZFhKdUlIdDJaV045SUY1aFhHNGdLaTljYm5abFl5NXViM0lnUFNCaElEMCtJSHRjYmlBZ2JHVjBJR3hsYmlBOUlIWmxZeTVzWlc0b1lTazdYRzRnSUhKbGRIVnliaUJzWlc0Z1B5QjdJSGc2SUdFdWVDQXZJR3hsYml3Z2VUb2dZUzU1SUM4Z2JHVnVJSDBnT2lCMlpXTW9LVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dSMlYwSUdFZ1pHOTBJSEJ5YjJSMVkzUWdiMllnZG1WamRHOXljMXh1SUNvZ1FIQmhjbUZ0SUh0MlpXTjlJR0VnVm1WamRHOXlJR0ZjYmlBcUlFQndZWEpoYlNCN2RtVmpmU0JpSUZabFkzUnZjaUJpWEc0Z0tpQkFjbVYwZFhKdUlIdHVkVzFpWlhKOUlHRWc0b2laSUdKY2JpQXFMMXh1ZG1WakxtUnZkQ0E5SUNoaExDQmlLU0E5UGlCaExuZ2dLaUJpTG5nZ0t5QmhMbmtnS2lCaUxuazdYRzVjYmk4cUtseHVJQ29nVW05MFlYUmxJR0VnZG1WamRHOXlJR0o1SUhJZ2NtRmthV0Z1YzF4dUlDb2dRSEJoY21GdElIdDJaV045SUdFZ1ZHaGxJSFpsWTNSdmNpQjBieUJ5YjNSaGRHVmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J5SUZSb1pTQmhibWRzWlNCMGJ5QnliM1JoZEdVZ1lua3NJRzFsWVhOMWNtVmtJR2x1SUhKaFpHbGhibk5jYmlBcUlFQnlaWFIxY200Z2UzWmxZMzBnUVNCeWIzUmhkR1ZrSUhabFkzUnZjbHh1SUNvdlhHNTJaV011Y205MElEMGdLR0VzSUhJcElEMCtJSHRjYmlBZ2JHVjBJSE1nUFNCTllYUm9Mbk5wYmloeUtTeGNiaUFnSUNCaklEMGdUV0YwYUM1amIzTW9jaWs3WEc0Z0lISmxkSFZ5YmlCN0lIZzZJR01nS2lCaExuZ2dMU0J6SUNvZ1lTNTVMQ0I1T2lCeklDb2dZUzU0SUNzZ1l5QXFJR0V1ZVNCOU8xeHVmVnh1WEc0dktpcGNiaUFxSUVOb1pXTnJJR2xtSUhSM2J5QjJaV04wYjNKeklHRnlaU0JsY1hWaGJGeHVJQ29nUUhCaGNtRnRJSHQyWldOOUlHRWdWbVZqZEc5eUlHRmNiaUFxSUVCd1lYSmhiU0I3ZG1WamZTQmlJRlpsWTNSdmNpQmlYRzRnS2lCQWNtVjBkWEp1SUh0aWIyOXNaV0Z1ZlNCVWNuVmxJR2xtSUhabFkzUnZjbk1nWVNCaGJtUWdZaUJoY21VZ1pYRjFZV3dzSUdaaGJITmxJRzkwYUdWeWQybHpaVnh1SUNvdlhHNTJaV011WlhFZ1BTQW9ZU3dnWWlrZ1BUNGdZUzU0SUQwOVBTQmlMbmdnSmlZZ1lTNTVJRDA5UFNCaUxuazdYRzVjYmk4cUtseHVJQ29nUjJWMElIUm9aU0JoYm1kc1pTQnZaaUJoSUhabFkzUnZjbHh1SUNvZ1FIQmhjbUZ0SUh0MlpXTjlJR0VnVm1WamRHOXlJR0ZjYmlBcUlFQnlaWFIxY200Z2UyNTFiV0psY24wZ1ZHaGxJR0Z1WjJ4bElHOW1JSFpsWTNSdmNpQmhJR2x1SUhKaFpHbGhibk5jYmlBcUwxeHVkbVZqTG5KaFpDQTlJR0VnUFQ0Z1RXRjBhQzVoZEdGdU1paGhMbmtzSUdFdWVDazdYRzVjYmk4cUtseHVJQ29nUTI5d2VTQmhJSFpsWTNSdmNseHVJQ29nUUhCaGNtRnRJSHQyWldOOUlHRWdWR2hsSUhabFkzUnZjaUIwYnlCamIzQjVYRzRnS2lCQWNtVjBkWEp1SUh0MlpXTjlJRUVnWTI5d2VTQnZaaUIyWldOMGIzSWdZVnh1SUNvdlhHNTJaV011WTNCNUlEMGdZU0E5UGlCMlpXTW9ZU2s3WEc1Y2JpOHFLbHh1SUNvZ1FTQm1kVzVqZEdsdmJpQjBieUJqWVd4c0lHOXVJR1ZoWTJnZ1kyOXRjRzl1Wlc1MElHOW1JR0VnZG1WamRHOXlYRzRnS2lCQVkyRnNiR0poWTJzZ2RtVmpkRzl5VFdGd1EyRnNiR0poWTJ0Y2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQjJZV3gxWlNCVWFHVWdZMjl0Y0c5dVpXNTBJSFpoYkhWbFhHNGdLaUJBY0dGeVlXMGdleWQ0SnlCOElDZDVKMzBnYkdGaVpXd2dWR2hsSUdOdmJYQnZibVZ1ZENCc1lXSmxiQ0FvZUNCdmNpQjVLVnh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlNCVWFHVWdiV0Z3Y0dWa0lHTnZiWEJ2Ym1WdWRGeHVJQ292WEc1Y2JpOHFLbHh1SUNvZ1EyRnNiQ0JoSUdaMWJtTjBhVzl1SUc5dUlHVmhZMmdnWTI5dGNHOXVaVzUwSUc5bUlHRWdkbVZqZEc5eUlHRnVaQ0JpZFdsc1pDQmhJRzVsZHlCMlpXTjBiM0lnWm5KdmJTQjBhR1VnY21WemRXeDBjMXh1SUNvZ1FIQmhjbUZ0SUh0MlpXTjlJR0VnVm1WamRHOXlJR0ZjYmlBcUlFQndZWEpoYlNCN2RtVmpkRzl5VFdGd1EyRnNiR0poWTJ0OUlHWWdWR2hsSUdaMWJtTjBhVzl1SUhSdklHTmhiR3dnYjI0Z1pXRmphQ0JqYjIxd2IyNWxiblFnYjJZZ2RHaGxJSFpsWTNSdmNseHVJQ29nUUhKbGRIVnliaUI3ZG1WamZTQldaV04wYjNJZ1lTQnRZWEJ3WldRZ2RHaHliM1ZuYUNCbVhHNGdLaTljYm5abFl5NXRZWEFnUFNBb1lTd2daaWtnUFQ0Z0tIc2dlRG9nWmloaExuZ3NJQ2Q0Snlrc0lIazZJR1lvWVM1NUxDQW5lU2NwSUgwcE8xeHVYRzR2S2lwY2JpQXFJRU52Ym5abGNuUWdZU0IyWldOMGIzSWdhVzUwYnlCaElITjBjbWx1WjF4dUlDb2dRSEJoY21GdElIdDJaV045SUdFZ1ZHaGxJSFpsWTNSdmNpQjBieUJqYjI1MlpYSjBYRzRnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnVzNNOUp5d2dKMTBnVkdobElITmxjR0Z5WVhSdmNpQnpkSEpwYm1kY2JpQXFJRUJ5WlhSMWNtNGdlM04wY21sdVozMGdRU0J6ZEhKcGJtY2djbVZ3Y21WelpXNTBZWFJwYjI0Z2IyWWdkR2hsSUhabFkzUnZjbHh1SUNvdlhHNTJaV011YzNSeUlEMGdLR0VzSUhNZ1BTQW5MQ0FuS1NBOVBpQmdKSHRoTG5oOUpIdHpmU1I3WVM1NWZXQTdYRzVjYmk4cUtseHVJQ29nUVNCdFlYUnlhWGhjYmlBcUlFQjBlWEJsWkdWbUlIdFBZbXBsWTNSOUlHMWhkRnh1SUNvZ1FIQnliM0JsY25SNUlIdHVkVzFpWlhKOUlHMGdWR2hsSUc1MWJXSmxjaUJ2WmlCeWIzZHpJR2x1SUhSb1pTQnRZWFJ5YVhoY2JpQXFJRUJ3Y205d1pYSjBlU0I3Ym5WdFltVnlmU0J1SUZSb1pTQnVkVzFpWlhJZ2IyWWdZMjlzZFcxdWN5QnBiaUIwYUdVZ2JXRjBjbWw0WEc0Z0tpQkFjSEp2Y0dWeWRIa2dlMEZ5Y21GNVBHNTFiV0psY2o1OUlHVnVkSEpwWlhNZ1ZHaGxJRzFoZEhKcGVDQjJZV3gxWlhOY2JpQXFMMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaU0JoSUc1bGR5QnRZWFJ5YVhoY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmJiVDAwWFNCVWFHVWdiblZ0WW1WeUlHOW1JSEp2ZDNOY2JpQXFJRUJ3WVhKaGJTQjdiblZ0WW1WeWZTQmJiajAwWFNCVWFHVWdiblZ0WW1WeUlHOW1JR052YkhWdGJuTmNiaUFxSUVCd1lYSmhiU0I3UVhKeVlYazhiblZ0WW1WeVBuMGdXMlZ1ZEhKcFpYTTlXMTFkSUUxaGRISnBlQ0IyWVd4MVpYTWdhVzRnY21WaFpHbHVaeUJ2Y21SbGNseHVJQ29nUUhKbGRIVnliaUI3YldGMGZTQkJJRzVsZHlCdFlYUnlhWGhjYmlBcUwxeHVZMjl1YzNRZ2JXRjBJRDBnS0cwZ1BTQTBMQ0J1SUQwZ05Dd2daVzUwY21sbGN5QTlJRnRkS1NBOVBpQW9lMXh1SUNCdExDQnVMRnh1SUNCbGJuUnlhV1Z6T2lCbGJuUnlhV1Z6TG1OdmJtTmhkQ2hCY25KaGVTaHRJQ29nYmlrdVptbHNiQ2d3S1NrdWMyeHBZMlVvTUN3Z2JTQXFJRzRwWEc1OUtUdGNibHh1THlvcVhHNGdLaUJIWlhRZ1lXNGdhV1JsYm5ScGRIa2diV0YwY21sNElHOW1JSE5wZW1VZ2JseHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRzRnVkdobElITnBlbVVnYjJZZ2RHaGxJRzFoZEhKcGVGeHVJQ29nUUhKbGRIVnliaUI3YldGMGZTQkJiaUJwWkdWdWRHbDBlU0J0WVhSeWFYaGNiaUFxTDF4dWJXRjBMbWxrWlc1MGFYUjVJRDBnYmlBOVBpQnRZWFFvYml3Z2Jpd2dRWEp5WVhrb2JpQXFJRzRwTG1acGJHd29NQ2t1YldGd0tDaDJMQ0JwS1NBOVBpQXJLRTFoZEdndVpteHZiM0lvYVNBdklHNHBJRDA5UFNCcElDVWdiaWtwS1R0Y2JseHVMeW9xWEc0Z0tpQkhaWFFnWVc0Z1pXNTBjbmtnWm5KdmJTQmhJRzFoZEhKcGVGeHVJQ29nUUhCaGNtRnRJSHR0WVhSOUlHRWdUV0YwY21sNElHRmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JwSUZSb1pTQnliM2NnYjJabWMyVjBYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnYWlCVWFHVWdZMjlzZFcxdUlHOW1abk5sZEZ4dUlDb2dRSEpsZEhWeWJpQjdiblZ0WW1WeWZTQlVhR1VnZG1Gc2RXVWdZWFFnY0c5emFYUnBiMjRnS0drc0lHb3BJR2x1SUcxaGRISnBlQ0JoWEc0Z0tpOWNibTFoZEM1blpYUWdQU0FvWVN3Z2FTd2dhaWtnUFQ0Z1lTNWxiblJ5YVdWeld5aHFJQzBnTVNrZ0t5QW9hU0F0SURFcElDb2dZUzV1WFR0Y2JseHVMeW9xWEc0Z0tpQlRaWFFnWVc0Z1pXNTBjbmtnYjJZZ1lTQnRZWFJ5YVhoY2JpQXFJRUJ3WVhKaGJTQjdiV0YwZlNCaElFMWhkSEpwZUNCaFhHNGdLaUJBY0dGeVlXMGdlMjUxYldKbGNuMGdhU0JVYUdVZ2NtOTNJRzltWm5ObGRGeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJR29nVkdobElHTnZiSFZ0YmlCdlptWnpaWFJjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCMklGUm9aU0IyWVd4MVpTQjBieUJ6WlhRZ2FXNGdiV0YwY21sNElHRmNiaUFxTDF4dWJXRjBMbk5sZENBOUlDaGhMQ0JwTENCcUxDQjJLU0E5UGlCN0lHRXVaVzUwY21sbGMxc29haUF0SURFcElDc2dLR2tnTFNBeEtTQXFJR0V1YmwwZ1BTQjJPeUI5TzF4dVhHNHZLaXBjYmlBcUlFZGxkQ0JoSUhKdmR5Qm1jbTl0SUdFZ2JXRjBjbWw0SUdGeklHRnVJR0Z5Y21GNVhHNGdLaUJBY0dGeVlXMGdlMjFoZEgwZ1lTQk5ZWFJ5YVhnZ1lWeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRzBnVkdobElISnZkeUJ2Wm1aelpYUmNiaUFxSUVCeVpYUjFjbTRnZTBGeWNtRjVQRzUxYldKbGNqNTlJRkp2ZHlCdElHWnliMjBnYldGMGNtbDRJR0ZjYmlBcUwxeHViV0YwTG5KdmR5QTlJQ2hoTENCdEtTQTlQaUI3WEc0Z0lHTnZibk4wSUhNZ1BTQW9iU0F0SURFcElDb2dZUzV1TzF4dUlDQnlaWFIxY200Z1lTNWxiblJ5YVdWekxuTnNhV05sS0hNc0lITWdLeUJoTG00cE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCSFpYUWdZU0JqYjJ4MWJXNGdabkp2YlNCaElHMWhkSEpwZUNCaGN5QmhiaUJoY25KaGVWeHVJQ29nUUhCaGNtRnRJSHR0WVhSOUlHRWdUV0YwY21sNElHRmNiaUFxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J1SUZSb1pTQmpiMngxYlc0Z2IyWm1jMlYwWEc0Z0tpQkFjbVYwZFhKdUlIdEJjbkpoZVR4dWRXMWlaWEkrZlNCRGIyeDFiVzRnYmlCbWNtOXRJRzFoZEhKcGVDQmhYRzRnS2k5Y2JtMWhkQzVqYjJ3Z1BTQW9ZU3dnYmlrZ1BUNGdkR2x0WlhNb2FTQTlQaUJ0WVhRdVoyVjBLR0VzSUNocElDc2dNU2tzSUc0cExDQmhMbTBwTzF4dVhHNHZLaXBjYmlBcUlFRmtaQ0J0WVhSeWFXTmxjMXh1SUNvZ1FIQmhjbUZ0SUh0dFlYUjlJR0VnVFdGMGNtbDRJR0ZjYmlBcUlFQndZWEpoYlNCN2JXRjBmU0JpSUUxaGRISnBlQ0JpWEc0Z0tpQkFjbVYwZFhKdUlIdHRZWFI5SUdFZ0t5QmlYRzRnS2k5Y2JtMWhkQzVoWkdRZ1BTQW9ZU3dnWWlrZ1BUNGdZUzV0SUQwOVBTQmlMbTBnSmlZZ1lTNXVJRDA5UFNCaUxtNGdKaVlnYldGMExtMWhjQ2hoTENBb2Rpd2dhU2tnUFQ0Z2RpQXJJR0l1Wlc1MGNtbGxjMXRwWFNrN1hHNWNiaThxS2x4dUlDb2dVM1ZpZEhKaFkzUWdiV0YwY21salpYTmNiaUFxSUVCd1lYSmhiU0I3YldGMGZTQmhJRTFoZEhKcGVDQmhYRzRnS2lCQWNHRnlZVzBnZTIxaGRIMGdZaUJOWVhSeWFYZ2dZbHh1SUNvZ1FISmxkSFZ5YmlCN2JXRjBmU0JoSUMwZ1lseHVJQ292WEc1dFlYUXVjM1ZpSUQwZ0tHRXNJR0lwSUQwK0lHRXViU0E5UFQwZ1lpNXRJQ1ltSUdFdWJpQTlQVDBnWWk1dUlDWW1JRzFoZEM1dFlYQW9ZU3dnS0hZc0lHa3BJRDArSUhZZ0xTQmlMbVZ1ZEhKcFpYTmJhVjBwTzF4dVhHNHZLaXBjYmlBcUlFMTFiSFJwY0d4NUlHMWhkSEpwWTJWelhHNGdLaUJBY0dGeVlXMGdlMjFoZEgwZ1lTQk5ZWFJ5YVhnZ1lWeHVJQ29nUUhCaGNtRnRJSHR0WVhSOUlHSWdUV0YwY21sNElHSmNiaUFxSUVCeVpYUjFjbTRnZTIxaGRIeGliMjlzWldGdWZTQmhZaUJ2Y2lCbVlXeHpaU0JwWmlCMGFHVWdiV0YwY21salpYTWdZMkZ1Ym05MElHSmxJRzExYkhScGNHeHBaV1JjYmlBcUwxeHViV0YwTG0xMWJDQTlJQ2hoTENCaUtTQTlQaUI3WEc0Z0lHbG1JQ2hoTG00Z0lUMDlJR0l1YlNrZ2V5QnlaWFIxY200Z1ptRnNjMlU3SUgxY2JpQWdZMjl1YzNRZ2NtVnpkV3gwSUQwZ2JXRjBLR0V1YlN3Z1lpNXVLVHRjYmlBZ1ptOXlJQ2hzWlhRZ2FTQTlJREU3SUdrZ1BEMGdZUzV0T3lCcEt5c3BJSHRjYmlBZ0lDQm1iM0lnS0d4bGRDQnFJRDBnTVRzZ2FpQThQU0JpTG00N0lHb3JLeWtnZTF4dUlDQWdJQ0FnYldGMExuTmxkQ2h5WlhOMWJIUXNJR2tzSUdvc0lHUnZkQ2h0WVhRdWNtOTNLR0VzSUdrcExDQnRZWFF1WTI5c0tHSXNJR29wS1NrN1hHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhKbGRIVnliaUJ5WlhOMWJIUTdYRzU5TzF4dVhHNHZLaXBjYmlBcUlGTmpZV3hsSUdFZ2JXRjBjbWw0WEc0Z0tpQkFjR0Z5WVcwZ2UyMWhkSDBnWVNCTllYUnlhWGdnWVZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHSWdVMk5oYkdGeUlHSmNiaUFxSUVCeVpYUjFjbTRnZTIxaGRIMGdZU0FxSUdKY2JpQXFMMXh1YldGMExuTmpZV3hsSUQwZ0tHRXNJR0lwSUQwK0lHMWhkQzV0WVhBb1lTd2dkaUE5UGlCMklDb2dZaWs3WEc1Y2JpOHFLbHh1SUNvZ1ZISmhibk53YjNObElHRWdiV0YwY21sNFhHNGdLaUJBY0dGeVlXMGdlMjFoZEgwZ1lTQlVhR1VnYldGMGNtbDRJSFJ2SUhSeVlXNXpjRzl6WlZ4dUlDb2dRSEpsZEhWeWJpQjdiV0YwZlNCQklIUnlZVzV6Y0c5elpXUWdiV0YwY21sNFhHNGdLaTljYm0xaGRDNTBjbUZ1Y3lBOUlHRWdQVDRnYldGMEtHRXViaXdnWVM1dExDQjBhVzFsY3locElEMCtJRzFoZEM1amIyd29ZU3dnS0drZ0t5QXhLU2tzSUdFdWJpa3VabXhoZENncEtUdGNibHh1THlvcVhHNGdLaUJIWlhRZ2RHaGxJRzFwYm05eUlHOW1JR0VnYldGMGNtbDRYRzRnS2lCQWNHRnlZVzBnZTIxaGRIMGdZU0JOWVhSeWFYZ2dZVnh1SUNvZ1FIQmhjbUZ0SUh0dWRXMWlaWEo5SUdrZ1ZHaGxJSEp2ZHlCdlptWnpaWFJjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCcUlGUm9aU0JqYjJ4MWJXNGdiMlptYzJWMFhHNGdLaUJBY21WMGRYSnVJSHR0WVhSOFltOXZiR1ZoYm4wZ1ZHaGxJQ2hwTENCcUtTQnRhVzV2Y2lCdlppQnRZWFJ5YVhnZ1lTQnZjaUJtWVd4elpTQnBaaUIwYUdVZ2JXRjBjbWw0SUdseklHNXZkQ0J6Y1hWaGNtVmNiaUFxTDF4dWJXRjBMbTFwYm05eUlEMGdLR0VzSUdrc0lHb3BJRDArSUh0Y2JpQWdhV1lnS0dFdWJTQWhQVDBnWVM1dUtTQjdJSEpsZEhWeWJpQm1ZV3h6WlRzZ2ZWeHVJQ0JqYjI1emRDQmxiblJ5YVdWeklEMGdXMTA3WEc0Z0lHWnZjaUFvYkdWMElHbHBJRDBnTVRzZ2FXa2dQRDBnWVM1dE95QnBhU3NyS1NCN1hHNGdJQ0FnYVdZZ0tHbHBJRDA5UFNCcEtTQjdJR052Ym5ScGJuVmxPeUI5WEc0Z0lDQWdabTl5SUNoc1pYUWdhbW9nUFNBeE95QnFhaUE4UFNCaExtNDdJR3BxS3lzcElIdGNiaUFnSUNBZ0lHbG1JQ2hxYWlBOVBUMGdhaWtnZXlCamIyNTBhVzUxWlRzZ2ZWeHVJQ0FnSUNBZ1pXNTBjbWxsY3k1d2RYTm9LRzFoZEM1blpYUW9ZU3dnYVdrc0lHcHFLU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNGdJSEpsZEhWeWJpQnRZWFFvWVM1dElDMGdNU3dnWVM1dUlDMGdNU3dnWlc1MGNtbGxjeWs3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRWRsZENCMGFHVWdaR1YwWlhKdGFXNWhiblFnYjJZZ1lTQnRZWFJ5YVhoY2JpQXFJRUJ3WVhKaGJTQjdiV0YwZlNCaElFMWhkSEpwZUNCaFhHNGdLaUJBY21WMGRYSnVJSHR1ZFcxaVpYSjhZbTl2YkdWaGJuMGdmR0Y4SUc5eUlHWmhiSE5sSUdsbUlIUm9aU0J0WVhSeWFYZ2dhWE1nYm05MElITnhkV0Z5WlZ4dUlDb3ZYRzV0WVhRdVpHVjBJRDBnWVNBOVBpQjdYRzRnSUdsbUlDaGhMbTBnSVQwOUlHRXViaWtnZXlCeVpYUjFjbTRnWm1Gc2MyVTdJSDFjYmlBZ2FXWWdLR0V1YlNBOVBUMGdNU2tnZTF4dUlDQWdJSEpsZEhWeWJpQmhMbVZ1ZEhKcFpYTmJNRjA3WEc0Z0lIMWNiaUFnYVdZZ0tHRXViU0E5UFQwZ01pa2dlMXh1SUNBZ0lISmxkSFZ5YmlCaExtVnVkSEpwWlhOYk1GMGdLaUJoTG1WdWRISnBaWE5iTTEwZ0xTQmhMbVZ1ZEhKcFpYTmJNVjBnS2lCaExtVnVkSEpwWlhOYk1sMDdYRzRnSUgxY2JpQWdiR1YwSUhSdmRHRnNJRDBnTUN3Z2MybG5iaUE5SURFN1hHNGdJR1p2Y2lBb2JHVjBJR29nUFNBeE95QnFJRHc5SUdFdWJqc2dhaXNyS1NCN1hHNGdJQ0FnZEc5MFlXd2dLejBnYzJsbmJpQXFJR0V1Wlc1MGNtbGxjMXRxSUMwZ01WMGdLaUJ0WVhRdVpHVjBLRzFoZEM1dGFXNXZjaWhoTENBeExDQnFLU2s3WEc0Z0lDQWdjMmxuYmlBcVBTQXRNVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdkRzkwWVd3N1hHNTlPMXh1WEc0dktpcGNiaUFxSUU1dmNtMWhiR2x6WlNCaElHMWhkSEpwZUZ4dUlDb2dRSEJoY21GdElIdHRZWFI5SUdFZ1ZHaGxJRzFoZEhKcGVDQjBieUJ1YjNKdFlXeHBjMlZjYmlBcUlFQnlaWFIxY200Z2UyMWhkSHhpYjI5c1pXRnVmU0JlWVNCdmNpQm1ZV3h6WlNCcFppQjBhR1VnYldGMGNtbDRJR2x6SUc1dmRDQnpjWFZoY21WY2JpQXFMMXh1YldGMExtNXZjaUE5SUdFZ1BUNGdlMXh1SUNCcFppQW9ZUzV0SUNFOVBTQmhMbTRwSUhzZ2NtVjBkWEp1SUdaaGJITmxPeUI5WEc0Z0lHTnZibk4wSUdRZ1BTQnRZWFF1WkdWMEtHRXBPMXh1SUNCeVpYUjFjbTRnYldGMExtMWhjQ2hoTENCcElEMCtJR2tnS2lCa0tUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1IyVjBJSFJvWlNCaFpHcDFaMkYwWlNCdlppQmhJRzFoZEhKcGVGeHVJQ29nUUhCaGNtRnRJSHR0WVhSOUlHRWdWR2hsSUcxaGRISnBlQ0JtY205dElIZG9hV05vSUhSdklHZGxkQ0IwYUdVZ1lXUnFkV2RoZEdWY2JpQXFJRUJ5WlhSMWNtNGdlMjFoZEgwZ1ZHaGxJR0ZrYW5WbllYUmxJRzltSUdGY2JpQXFMMXh1YldGMExtRmthaUE5SUdFZ1BUNGdlMXh1SUNCamIyNXpkQ0J0YVc1dmNuTWdQU0J0WVhRb1lTNXRMQ0JoTG00cE8xeHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Uc2dhU0E4UFNCaExtMDdJR2tyS3lrZ2UxeHVJQ0FnSUdadmNpQW9iR1YwSUdvZ1BTQXhPeUJxSUR3OUlHRXVianNnYWlzcktTQjdYRzRnSUNBZ0lDQnRZWFF1YzJWMEtHMXBibTl5Y3l3Z2FTd2dhaXdnYldGMExtUmxkQ2h0WVhRdWJXbHViM0lvWVN3Z2FTd2dhaWtwS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNiaUFnWTI5dWMzUWdZMjltWVdOMGIzSnpJRDBnYldGMExtMWhjQ2h0YVc1dmNuTXNJQ2gyTENCcEtTQTlQaUIySUNvZ0tHa2dKU0F5SUQ4Z0xURWdPaUF4S1NrN1hHNGdJSEpsZEhWeWJpQnRZWFF1ZEhKaGJuTW9ZMjltWVdOMGIzSnpLVHRjYm4wN1hHNWNiaThxS2x4dUlDb2dSMlYwSUhSb1pTQnBiblpsY25ObElHOW1JR0VnYldGMGNtbDRYRzRnS2lCQWNHRnlZVzBnZTIxaGRIMGdZU0JVYUdVZ2JXRjBjbWw0SUhSdklHbHVkbVZ5ZEZ4dUlDb2dRSEpsZEhWeWJpQjdiV0YwZkdKdmIyeGxZVzU5SUdGZUxURWdiM0lnWm1Gc2MyVWdhV1lnZEdobElHMWhkSEpwZUNCb1lYTWdibThnYVc1MlpYSnpaVnh1SUNvdlhHNXRZWFF1YVc1MklEMGdZU0E5UGlCN1hHNGdJR2xtSUNoaExtMGdJVDA5SUdFdWJpa2dleUJ5WlhSMWNtNGdabUZzYzJVN0lIMWNiaUFnWTI5dWMzUWdaQ0E5SUcxaGRDNWtaWFFvWVNrN1hHNGdJR2xtSUNoa0lEMDlQU0F3S1NCN0lISmxkSFZ5YmlCbVlXeHpaVHNnZlZ4dUlDQnlaWFIxY200Z2JXRjBMbk5qWVd4bEtHMWhkQzVoWkdvb1lTa3NJREVnTHlCa0tUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1EyaGxZMnNnYVdZZ2RIZHZJRzFoZEhKcFkyVnpJR0Z5WlNCbGNYVmhiRnh1SUNvZ1FIQmhjbUZ0SUh0dFlYUjlJR0VnVFdGMGNtbDRJR0ZjYmlBcUlFQndZWEpoYlNCN2JXRjBmU0JpSUUxaGRISnBlQ0JpWEc0Z0tpQkFjbVYwZFhKdUlIdGliMjlzWldGdWZTQlVjblZsSUdsbUlHMWhkSEpwWTJWeklHRWdZVzVrSUdJZ1lYSmxJR2xrWlc1MGFXTmhiQ3dnWm1Gc2MyVWdiM1JvWlhKM2FYTmxYRzRnS2k5Y2JtMWhkQzVsY1NBOUlDaGhMQ0JpS1NBOVBpQmhMbTBnUFQwOUlHSXViU0FtSmlCaExtNGdQVDA5SUdJdWJpQW1KaUJ0WVhRdWMzUnlLR0VwSUQwOVBTQnRZWFF1YzNSeUtHSXBPMXh1WEc0dktpcGNiaUFxSUVOdmNIa2dZU0J0WVhSeWFYaGNiaUFxSUVCd1lYSmhiU0I3YldGMGZTQmhJRlJvWlNCdFlYUnlhWGdnZEc4Z1kyOXdlVnh1SUNvZ1FISmxkSFZ5YmlCN2JXRjBmU0JCSUdOdmNIa2diMllnYldGMGNtbDRJR0ZjYmlBcUwxeHViV0YwTG1Od2VTQTlJR0VnUFQ0Z2JXRjBLR0V1YlN3Z1lTNXVMQ0JiTGk0dVlTNWxiblJ5YVdWelhTazdYRzVjYmk4cUtseHVJQ29nUVNCbWRXNWpkR2x2YmlCMGJ5QmpZV3hzSUc5dUlHVmhZMmdnWlc1MGNua2diMllnWVNCdFlYUnlhWGhjYmlBcUlFQmpZV3hzWW1GamF5QnRZWFJ5YVhoTllYQkRZV3hzWW1GamExeHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJSFpoYkhWbElGUm9aU0JsYm5SeWVTQjJZV3gxWlZ4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlHbHVaR1Y0SUZSb1pTQmxiblJ5ZVNCcGJtUmxlRnh1SUNvZ1FIQmhjbUZ0SUh0QmNuSmhlVHh1ZFcxaVpYSStmU0JsYm5SeWFXVnpJRlJvWlNCaGNuSmhlU0J2WmlCdFlYUnlhWGdnWlc1MGNtbGxjMXh1SUNvZ1FISmxkSFZ5YmlCN2JuVnRZbVZ5ZlNCVWFHVWdiV0Z3Y0dWa0lHVnVkSEo1WEc0Z0tpOWNibHh1THlvcVhHNGdLaUJEWVd4c0lHRWdablZ1WTNScGIyNGdiMjRnWldGamFDQmxiblJ5ZVNCdlppQmhJRzFoZEhKcGVDQmhibVFnWW5WcGJHUWdZU0J1WlhjZ2JXRjBjbWw0SUdaeWIyMGdkR2hsSUhKbGMzVnNkSE5jYmlBcUlFQndZWEpoYlNCN2JXRjBmU0JoSUUxaGRISnBlQ0JoWEc0Z0tpQkFjR0Z5WVcwZ2UyMWhkSEpwZUUxaGNFTmhiR3hpWVdOcmZTQm1JRlJvWlNCbWRXNWpkR2x2YmlCMGJ5QmpZV3hzSUc5dUlHVmhZMmdnWlc1MGNua2diMllnZEdobElHMWhkSEpwZUZ4dUlDb2dRSEpsZEhWeWJpQjdiV0YwZlNCTllYUnlhWGdnWVNCdFlYQndaV1FnZEdoeWIzVm5hQ0JtWEc0Z0tpOWNibTFoZEM1dFlYQWdQU0FvWVN3Z1ppa2dQVDRnYldGMEtHRXViU3dnWVM1dUxDQmhMbVZ1ZEhKcFpYTXViV0Z3S0dZcEtUdGNibHh1THlvcVhHNGdLaUJEYjI1MlpYSjBJR0VnYldGMGNtbDRJR2x1ZEc4Z1lTQnpkSEpwYm1kY2JpQXFJRUJ3WVhKaGJTQjdiV0YwZlNCaElGUm9aU0J0WVhSeWFYZ2dkRzhnWTI5dWRtVnlkRnh1SUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ5SUZ0dGN6MG5MQ0FuWFNCVWFHVWdjMlZ3WVhKaGRHOXlJSE4wY21sdVp5Qm1iM0lnWTI5c2RXMXVjMXh1SUNvZ1FIQmhjbUZ0SUh0emRISnBibWQ5SUZ0dWN6MG5YRnh1SjEwZ1ZHaGxJSE5sY0dGeVlYUnZjaUJ6ZEhKcGJtY2dabTl5SUhKdmQzTmNiaUFxSUVCeVpYUjFjbTRnZTNOMGNtbHVaMzBnUVNCemRISnBibWNnY21Wd2NtVnpaVzUwWVhScGIyNGdiMllnZEdobElHMWhkSEpwZUZ4dUlDb3ZYRzV0WVhRdWMzUnlJRDBnS0dFc0lHMXpJRDBnSnl3Z0p5d2dibk1nUFNBblhGeHVKeWtnUFQ0Z1kyaDFibXNvWVM1bGJuUnlhV1Z6TENCaExtNHBMbTFoY0NoeUlEMCtJSEl1YW05cGJpaHRjeWtwTG1wdmFXNG9ibk1wTzF4dVhHNXBaaUFvZEhsd1pXOW1JRzF2WkhWc1pTQWhQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0I3SUhabFl5d2diV0YwSUgwN1hHNTlYRzRpTENJdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNTJZWElnWDE5M1pXSndZV05yWDIxdlpIVnNaVjlqWVdOb1pWOWZJRDBnZTMwN1hHNWNiaTh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNW1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1WEhSMllYSWdZMkZqYUdWa1RXOWtkV3hsSUQwZ1gxOTNaV0p3WVdOclgyMXZaSFZzWlY5allXTm9aVjlmVzIxdlpIVnNaVWxrWFR0Y2JseDBhV1lnS0dOaFkyaGxaRTF2WkhWc1pTQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNWNkRngwY21WMGRYSnVJR05oWTJobFpFMXZaSFZzWlM1bGVIQnZjblJ6TzF4dVhIUjlYRzVjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzVjZEhaaGNpQnRiMlIxYkdVZ1BTQmZYM2RsWW5CaFkydGZiVzlrZFd4bFgyTmhZMmhsWDE5YmJXOWtkV3hsU1dSZElEMGdlMXh1WEhSY2RDOHZJRzV2SUcxdlpIVnNaUzVwWkNCdVpXVmtaV1JjYmx4MFhIUXZMeUJ1YnlCdGIyUjFiR1V1Ykc5aFpHVmtJRzVsWldSbFpGeHVYSFJjZEdWNGNHOXlkSE02SUh0OVhHNWNkSDA3WEc1Y2JseDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc1Y2RGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOWJiVzlrZFd4bFNXUmRLRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc1Y2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNWNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JuMWNibHh1SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dYQ0pmWDJWelRXOWtkV3hsWENJc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNWpiMjV6ZENCMlpXTmZNU0E5SUhKbGNYVnBjbVVvWENKQVltRnpaVzFsYm5SMWJtbDJaWEp6WlM5MlpXTmNJaWs3WEc1amJHRnpjeUJKYm5CMWRFMWhibUZuWlhJZ2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHOXdkR2x2Ym5NcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1clpYbGliMkZ5WkZOMFlYUmxJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0hKbGRtbHZkWE5MWlhsaWIyRnlaRk4wWVhSbElEMGdlMzA3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViVzkxYzJWVGRHRjBaU0E5SUhzZ1luVjBkRzl1T2lCbVlXeHpaU3dnY0c5emFYUnBiMjQ2SUNnd0xDQjJaV05mTVM1MlpXTXBLQ2tzSUhkb1pXVnNPaUF3SUgwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0hKbGRtbHZkWE5OYjNWelpWTjBZWFJsSUQwZ2V5QmlkWFIwYjI0NklHWmhiSE5sTENCd2IzTnBkR2x2YmpvZ0tEQXNJSFpsWTE4eExuWmxZeWtvS1N3Z2QyaGxaV3c2SURBZ2ZUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z1NXNXdkWFJOWVc1aFoyVnlMbVJsWm1GMWJIUlBjSFJwYjI1ekxDQnZjSFJwYjI1eklDRTlQU0J1ZFd4c0lDWW1JRzl3ZEdsdmJuTWdJVDA5SUhadmFXUWdNQ0EvSUc5d2RHbHZibk1nT2lCN2ZTazdYRzRnSUNBZ0lDQWdJQzh2SUZObGRDQjFjQ0JsZG1WdWRDQm9ZVzVrYkdWeWMxeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXZjSFJwYjI1ekxtMXZkWE5sS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25iVzkxYzJWa2IzZHVKeXdnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJXOTFjMlZUZEdGMFpTNWlkWFIwYjI0Z1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmJXOTFjMlYxY0Njc0lDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTF2ZFhObFUzUmhkR1V1WW5WMGRHOXVJRDBnWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhkcGJtUnZkeTVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2QwYjNWamFITjBZWEowSnl3Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViVzkxYzJWVGRHRjBaUzVpZFhSMGIyNGdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25kRzkxWTJobGJtUW5MQ0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dGIzVnpaVk4wWVhSbExtSjFkSFJ2YmlBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmJXOTFjMlZ0YjNabEp5d2daU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV0YjNWelpWTjBZWFJsTG5CdmMybDBhVzl1TG5nZ1BTQmxMbTltWm5ObGRGZzdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dGIzVnpaVk4wWVhSbExuQnZjMmwwYVc5dUxua2dQU0JsTG05bVpuTmxkRms3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdWJXOTFjMlZYYUdWbGJDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSGRwYm1SdmR5NWhaR1JGZG1WdWRFeHBjM1JsYm1WeUtDZDNhR1ZsYkNjc0lHVWdQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG0xdmRYTmxVM1JoZEdVdWQyaGxaV3dnUFNCbExtUmxiSFJoV1NBK0lEQWdQeUF4SURvZ0xURTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YjNCMGFXOXVjeTVyWlhsaWIyRnlaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkMmx1Wkc5M0xtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb0oydGxlV1J2ZDI0bkxDQmxJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbXRsZVdKdllYSmtVM1JoZEdWYlpTNWpiMlJsWFNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIZHBibVJ2ZHk1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkclpYbDFjQ2NzSUdVZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWEyVjVZbTloY21SVGRHRjBaVnRsTG1OdlpHVmRJRDBnWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkpibWwwYVdGc2FYTmxJSFJvWlNCcGJuQjFkQ0J0WVc1aFoyVnlJR1p2Y2lCdFlXNWhaMmx1WnlCdGIzVnpaU0JoYm1RZ2EyVjVZbTloY21RZ2FXNXdkWFJjYmlBZ0lDQWdLaTljYmlBZ0lDQnpkR0YwYVdNZ2FXNXBkR2xoYkdselpTaHZjSFJwYjI1ektTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoSmJuQjFkRTFoYm1GblpYSXVhVzV6ZEdGdVkyVWdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RKYm5CMWRDQnRZVzVoWjJWeUlHRnNjbVZoWkhrZ2FXNXBkR2xoYkdselpXUW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCSmJuQjFkRTFoYm1GblpYSXVhVzV6ZEdGdVkyVWdQU0J1WlhjZ1NXNXdkWFJOWVc1aFoyVnlLRzl3ZEdsdmJuTXBPMXh1SUNBZ0lIMWNiaUFnSUNCemRHRjBhV01nWjJWMFNXNXpkR0Z1WTJVb0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoSmJuQjFkRTFoYm1GblpYSXVhVzV6ZEdGdVkyVWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RKYm5CMWRDQnRZVzVoWjJWeUlHNXZkQ0J3Y205d1pYSnNlU0JwYm1sMGFXRnNhWE5sWkNjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQkpibkIxZEUxaGJtRm5aWEl1YVc1emRHRnVZMlU3WEc0Z0lDQWdmVnh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRlZ3WkdGMFpTQjBhR1VnYzNSaGRHVWdiMllnZEdobElHbHVjSFYwSUdSbGRtbGpaWE5jYmlBZ0lDQWdLaTljYmlBZ0lDQnpkR0YwYVdNZ2RYQmtZWFJsS0NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCcGJuTjBZVzVqWlNBOUlFbHVjSFYwVFdGdVlXZGxjaTVuWlhSSmJuTjBZVzVqWlNncE8xeHVJQ0FnSUNBZ0lDQnBibk4wWVc1alpTNXdjbVYyYVc5MWMwdGxlV0p2WVhKa1UzUmhkR1VnUFNCUFltcGxZM1F1WVhOemFXZHVLSHQ5TENCcGJuTjBZVzVqWlM1clpYbGliMkZ5WkZOMFlYUmxLVHRjYmlBZ0lDQWdJQ0FnYVc1emRHRnVZMlV1Y0hKbGRtbHZkWE5OYjNWelpWTjBZWFJsSUQwZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTGk0dWFXNXpkR0Z1WTJVdWJXOTFjMlZUZEdGMFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhCdmMybDBhVzl1T2lCMlpXTmZNUzUyWldNdVkzQjVLR2x1YzNSaGJtTmxMbTF2ZFhObFUzUmhkR1V1Y0c5emFYUnBiMjRwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkMmhsWld3NklEQXNYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmVnh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRU5vWldOcklHbG1JR0VnYTJWNUlHbHpJR04xY25KbGJuUnNlU0J3Y21WemMyVmtJR1J2ZDI1Y2JpQWdJQ0FnS2k5Y2JpQWdJQ0J6ZEdGMGFXTWdhMlY1Ukc5M2JpaGpiMlJsS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdsdWMzUmhibU5sSUQwZ1NXNXdkWFJOWVc1aFoyVnlMbWRsZEVsdWMzUmhibU5sS0NrN1hHNGdJQ0FnSUNBZ0lDOHZJRU5vWldOcklHbG1JR0Z1ZVNCclpYa2dhWE1nWkc5M2JseHVJQ0FnSUNBZ0lDQnBaaUFvSVdOdlpHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvWTI5dWMzUWdheUJwYmlCcGJuTjBZVzVqWlM1clpYbGliMkZ5WkZOMFlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHbHVjM1JoYm1ObExtdGxlV0p2WVhKa1UzUmhkR1ZiYTEwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBaElXbHVjM1JoYm1ObExtdGxlV0p2WVhKa1UzUmhkR1ZiWTI5a1pWMDdYRzRnSUNBZ2ZWeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTm9aV05ySUdsbUlHRWdhMlY1SUdoaGN5QmlaV1Z1SUhCeVpYTnpaV1FnYzJsdVkyVWdkR2hsSUd4aGMzUWdabkpoYldWY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J6ZEdGMGFXTWdhMlY1VUhKbGMzTmxaQ2hqYjJSbEtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHVjM1JoYm1ObElEMGdTVzV3ZFhSTllXNWhaMlZ5TG1kbGRFbHVjM1JoYm1ObEtDazdYRzRnSUNBZ0lDQWdJQzh2SUVOb1pXTnJJR2xtSUdGdWVTQnJaWGtnZDJGeklIQnlaWE56WldSY2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZqYjJSbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLR052Ym5OMElHc2dhVzRnYVc1emRHRnVZMlV1YTJWNVltOWhjbVJUZEdGMFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNocGJuTjBZVzVqWlM1clpYbGliMkZ5WkZOMFlYUmxXMnRkSUNZbVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2doS0dzZ2FXNGdhVzV6ZEdGdVkyVXVjSEpsZG1sdmRYTkxaWGxpYjJGeVpGTjBZWFJsS1NCOGZGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lXbHVjM1JoYm1ObExuQnlaWFpwYjNWelMyVjVZbTloY21SVGRHRjBaVnRyWFNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBaElXbHVjM1JoYm1ObExtdGxlV0p2WVhKa1UzUmhkR1ZiWTI5a1pWMGdKaVlnSVdsdWMzUmhibU5sTG5CeVpYWnBiM1Z6UzJWNVltOWhjbVJUZEdGMFpWdGpiMlJsWFR0Y2JpQWdJQ0I5WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUTJobFkyc2dhV1lnWVNCclpYa2dhR0Z6SUdKbFpXNGdjbVZzWldGelpXUWdjMmx1WTJVZ2RHaGxJR3hoYzNRZ1puSmhiV1ZjYmlBZ0lDQWdLaTljYmlBZ0lDQnpkR0YwYVdNZ2EyVjVVbVZzWldGelpXUW9ZMjlrWlNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCcGJuTjBZVzVqWlNBOUlFbHVjSFYwVFdGdVlXZGxjaTVuWlhSSmJuTjBZVzVqWlNncE8xeHVJQ0FnSUNBZ0lDQXZMeUJEYUdWamF5QnBaaUJoYm5rZ2EyVjVJSGRoY3lCeVpXeGxZWE5sWkZ4dUlDQWdJQ0FnSUNCcFppQW9JV052WkdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9ZMjl1YzNRZ2F5QnBiaUJwYm5OMFlXNWpaUzVyWlhsaWIyRnlaRk4wWVhSbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGcGJuTjBZVzVqWlM1clpYbGliMkZ5WkZOMFlYUmxXMnRkSUNZbVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0VoYVc1emRHRnVZMlV1Y0hKbGRtbHZkWE5MWlhsaWIyRnlaRk4wWVhSbFcydGRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdJV2x1YzNSaGJtTmxMbXRsZVdKdllYSmtVM1JoZEdWYlkyOWtaVjBnSmlZZ0lTRnBibk4wWVc1alpTNXdjbVYyYVc5MWMwdGxlV0p2WVhKa1UzUmhkR1ZiWTI5a1pWMDdYRzRnSUNBZ2ZWeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFTm9aV05ySUdsbUlHRWdiVzkxYzJVZ1luVjBkRzl1SUdseklHTjFjbkpsYm5Sc2VTQndjbVZ6YzJWa0lHUnZkMjVjYmlBZ0lDQWdLaTljYmlBZ0lDQnpkR0YwYVdNZ2JXOTFjMlZFYjNkdUtDa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnBibk4wWVc1alpTQTlJRWx1Y0hWMFRXRnVZV2RsY2k1blpYUkpibk4wWVc1alpTZ3BPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdJU0ZwYm5OMFlXNWpaUzV0YjNWelpWTjBZWFJsTG1KMWRIUnZianRjYmlBZ0lDQjlYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRMmhsWTJzZ2FXWWdZU0J0YjNWelpTQmlkWFIwYjI0Z2FHRnpJR0psWlc0Z2NISmxjM05sWkNCemFXNWpaU0IwYUdVZ2JHRnpkQ0JtY21GdFpWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhOMFlYUnBZeUJ0YjNWelpWQnlaWE56WldRb0tTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHVjM1JoYm1ObElEMGdTVzV3ZFhSTllXNWhaMlZ5TG1kbGRFbHVjM1JoYm1ObEtDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQWhJV2x1YzNSaGJtTmxMbTF2ZFhObFUzUmhkR1V1WW5WMGRHOXVJQ1ltSUNGcGJuTjBZVzVqWlM1d2NtVjJhVzkxYzAxdmRYTmxVM1JoZEdVdVluVjBkRzl1TzF4dUlDQWdJSDFjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEYUdWamF5QnBaaUJoSUcxdmRYTmxJR0oxZEhSdmJpQm9ZWE1nWW1WbGJpQnlaV3hsWVhObFpDQnphVzVqWlNCMGFHVWdiR0Z6ZENCbWNtRnRaVnh1SUNBZ0lDQXFMMXh1SUNBZ0lITjBZWFJwWXlCdGIzVnpaVkpsYkdWaGMyVmtLQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JwYm5OMFlXNWpaU0E5SUVsdWNIVjBUV0Z1WVdkbGNpNW5aWFJKYm5OMFlXNWpaU2dwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnSVdsdWMzUmhibU5sTG0xdmRYTmxVM1JoZEdVdVluVjBkRzl1SUNZbUlDRWhhVzV6ZEdGdVkyVXVjSEpsZG1sdmRYTk5iM1Z6WlZOMFlYUmxMbUoxZEhSdmJqdGNiaUFnSUNCOVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EyaGxZMnNnYVdZZ2RHaGxJRzF2ZFhObGQyaGxaV3dnYVhNZ2MyTnliMnhzYVc1bklIVndYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2MzUmhkR2xqSUcxdmRYTmxWMmhsWld4VmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhVzV6ZEdGdVkyVWdQU0JKYm5CMWRFMWhibUZuWlhJdVoyVjBTVzV6ZEdGdVkyVW9LVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR2x1YzNSaGJtTmxMbTF2ZFhObFUzUmhkR1V1ZDJobFpXd2dQaUF3TzF4dUlDQWdJSDFjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEYUdWamF5QnBaaUIwYUdVZ2JXOTFjMlYzYUdWbGJDQnBjeUJ6WTNKdmJHeHBibWNnWkc5M2JseHVJQ0FnSUNBcUwxeHVJQ0FnSUhOMFlYUnBZeUJ0YjNWelpWZG9aV1ZzUkc5M2JpZ3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhVzV6ZEdGdVkyVWdQU0JKYm5CMWRFMWhibUZuWlhJdVoyVjBTVzV6ZEdGdVkyVW9LVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR2x1YzNSaGJtTmxMbTF2ZFhObFUzUmhkR1V1ZDJobFpXd2dQQ0F3TzF4dUlDQWdJSDFjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJIWlhRZ2RHaGxJR04xY25KbGJuUWdiVzkxYzJVZ2NHOXphWFJwYjI0Z2FXNGdjMk55WldWdUxYTndZV05sWEc0Z0lDQWdJQ292WEc0Z0lDQWdjM1JoZEdsaklHZGxkQ0J0YjNWelpWQnZjMmwwYVc5dUtDa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnBibk4wWVc1alpTQTlJRWx1Y0hWMFRXRnVZV2RsY2k1blpYUkpibk4wWVc1alpTZ3BPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdhVzV6ZEdGdVkyVXViVzkxYzJWVGRHRjBaUzV3YjNOcGRHbHZianRjYmlBZ0lDQjlYRzU5WEc1bGVIQnZjblJ6TG1SbFptRjFiSFFnUFNCSmJuQjFkRTFoYm1GblpYSTdYRzVKYm5CMWRFMWhibUZuWlhJdVpHVm1ZWFZzZEU5d2RHbHZibk1nUFNCN1hHNGdJQ0FnYlc5MWMyVTZJSFJ5ZFdVc1hHNGdJQ0FnYlc5MWMyVlhhR1ZsYkRvZ2RISjFaU3hjYmlBZ0lDQnJaWGxpYjJGeVpEb2dkSEoxWlN4Y2JuMDdYRzR2THlNZ2MyOTFjbU5sVFdGd2NHbHVaMVZTVEQxa1lYUmhPbUZ3Y0d4cFkyRjBhVzl1TDJwemIyNDdZbUZ6WlRZMExHVjVTakphV0VwNllWYzVkVWxxYjNwTVEwcHRZVmQ0YkVscWIybGhWelZyV2xobmRXRnVUV2xNUTBwNllqTldlVmt5VmxOaU1qa3dTV3B2YVVscGQybGpNamt4WTIxT2JHTjVTVFpYZVVsMVRHazVjR0p0VW14bFF6VXdZM2xLWkV4RFNuVlpWekZzWTNsSk5sY3hNSE5KYlRGb1kwaENjR0p0WkhwSmFtOXBUM3AwUWxGVlJrSk1RM1JFVVZWRk1GRjZkRUpSVkZwRFRsVk5jMVJWUmtKalZVbHpWMVZHUWxkVWRFcFJWekZEVERCSmMxZFZSa0ppTUVselZEQkdRa3N3U1RkVlZVWlRUVEJOYzJFd1NrSlJWMFZ6VWpCR1FtRXdTWE5TVlVaQ1VsTjRSRkZWUmtSUE1VWkNVbGQ0UkV4RVFrTlJWVVo0VVdsNFNGRlZSbkpSYVhoR1VWVkdSa3hGVGtKUlZVMDNWVlZHUmsxVlRYTmFWVVpDVmxONFNGRlZSbXhNUlZaQ1VWVlZjMVJWUmtKVVUzaEdVVlZHUmt4RmRFSlJWWE56VWxWR1FsSlRlRkpSVlVaU1RFVldRbEZWVlhOVFZVWkNVVk40VkZGVlJraE1SV1JDVVZWVmMxSlZSa0pTVTNoTVVWVkdURXhGVmtKUlZWVnpVVEJHUWxGNWVFWlJWVVpHVEVWT1FsRlZUVGRWVlVaR1pFVlZjMlJWU2tKUlYzUkRURVZrUWxGWFZYTlNWVVpDVWxONFRsRlZSazVNUlZaQ1VWVlZjMU13UmtKVGVYaEdVVlZHUmt4R1JrSlJWa1Z6VWxWR1FsSlRlRXBSVlVaQ1RFWk9RbEZWWTNOU01FWkNVbE40UmxGVlJrWk1SWFJDVVZWemMxSlZSa0pTVTNoRVVWVkdSRXhGVmtKUlZWVnpVVEJHUWxGNmRGSlJWV1IzVW1sNFNsRlZSa3BNUlU1Q1VWVk5jMVF3UmtKVWVYaElVVlZHU0V4Rk1VSlJWVEJ6VVRCR1FsRjVlRTVSVlVaT1RFVk9RbEZWVFhOU1ZVWkNVbE40UmxGVlJrWk1SbXhDVVZacmMxRXdSa0pSZVhocVVWVkdha3hGVmtKUlZWVnpWREJHUWxSNWVHaFJWVVpSVEVVNVFsRlZPSE5aTUVaQ1ZVTjRVRkZWUmxCTVJXUkNVVlZyYzFKVlJrSlNVM2hFVVZWR1JFeEZUa0pSVlUwM1ZWVkdSazR3VlhOa01FcENVVmhrUTA4eFJrSlJNMmhEVEVWc1FsRlZhM05UVlVaQ1UxTjRSRkZWUmtSTVJUbENVVlU0YzFFd1JrSlJlWGhNVVZWR1RFeEZWa0pSVlZVM1YxVkdSR1JGU1hOVVZVWkNWRk40UkZGVlJrUk1SMlJEVVZWR2JsRnBlRVJSVlVaRVRFWmtRbEZXWTNOU1ZVWkNVbE40U0ZGVlJraE1SVlpDVVZWVk4xb3dTa0pSTTJoRVRFVnNRbEZWYTNOUk1FWkNVWGw0VmxGVlJsWk1SVTVDVVZWTmMxUlZSa0pVVTNoSVVWVkdTRXhGYkVKUlZXdHpVVEJHUWxGNmRGcFJWVTV2VVhsNFJGRlZSa1JNUlU1Q1VWVk5jMUV3UmtKUmVuUmFVVlZPU1V4Rk1VSlJWVEJ6VVRCR1FsRjVlRzVSYTBaQ1dqQkpjMUV3UmtKUmVYaFVVVlZHVkV4RlZrSlJWVlZ6VWpCR1FsSjVlRVpSVlVaR1R6SmtRMUZWVGpCUmVYaEtVVlZHU2t4RlRrSlJWVTF6VmxWR1FsWlRlRVJSVlVaRVRFVXhRbEZWTUhOU01FWkNVbmw0VEZGVlJreE1SVTVDVVZWTk4xZFZSa1JoYTAxelVUQkdRbEY1ZUVSUlZVWkVURVZPUWxGVlRUZFhWVVpFVTBONFRsRlZSazVNUlU1Q1VWVk5jMW93U2tKUlYyUkRURVZPUWxGVlRYTlhWVVpDVjFONFJsRlZSa1pNUldSQ1VWVmpjMUpWUmtKU1ZIUnVVV3RHUkdWclRYTlRWVVpDVTFONFJGRlZSa1JNUmxaQ1VWWlZjMUV3UmtKUmVYaE9VVlZHVGt4RlpFSlJWV056VTFWR1FsTlRlRVJSVlVaRVR6RnNRbEV5YUVSTVJVNUNVVlZOYzFFd1JrSlJlWGhFVVZWR1JFOHhiRUpSTUdkelZGVkdRbFJUZUVSUlZVWkVURWRrUTFGVlJtNVJhWGhFVVZWR1JFeEdWa0pSVmxWelVsVkdRbEpUZUVoUlZVWklURVZXUWxGVlZUZGFNRXBDVVROYVJFeEZiRUpSVld0elVUQkdRbEY1ZUZaUlZVWldURVZPUWxGVlRYTlVWVVpDVkZONFNGRlZSa2hNUlhSQ1VWVnpjMUV3UmtKUmVuUmFVVlZPY1ZGNWVFUlJWVVpFVEVWT1FsRlZUWE5STUVaQ1VYcDBXbEZWVGtsTVJURkNVVlV3YzFFd1JrSlJlWGh1VVd0R1Fsb3dTWE5STUVaQ1VYbDRXRkZWUmxoTVJWWkNVVlZWYzFFd1JrSlJlWGhFVVZWR1JFeEZWa0pSVlZVM1dqQktRbEV6V2tSTVJXeENVVlZyYzFFd1JrSlJlWGhXVVZWR1ZreEZUa0pSVlUxelZWVkdRbFZUZUVSUlZVWkVURVZPUWxGVlRYTlNNRVpDVW5sNFJGRlZSa1JNUlU1Q1VWVk5jMVF3UmtKVWVYaEVVVlZHUkU4eVpFTlJWVTR5VVhsNFNsRlZSa3BNUlU1Q1VWVk5jMVpWUmtKV1UzaEVVVlZHUkV4R1JrSlJWa1Z6VVRCR1FsRjVlRVJSVlVaRVRFVmtRbEZWWTNOUk1FWkNVWGw0UkZGVlJrUk1SVGxDVVZVNGMxRXdSa0pSZW5SYVVWVk9ObEY1ZUVSUlZVWkVURVZPUWxGVlRYTlJNRVpDVVhwMFdsRlZUa2xNUld4Q1VWVnJjMU5WUmtKVFUzaEVVVlZHUkV4Rk9VSlJWVGh6VVRCR1FsRjVlRlpSVlVaV1RFVldRbEZWVlRkYU1FcENVWHBPUTB4Rk1VSlJWVEJ6VVRCR1FsRjVlRzVSYTBaQ1dqQkpjMUV3UmtKUmVYaFFVVlZHVUV4RlZrSlJWVlZ6VVRCR1FsRjVlRVJSVlVaRVRFVldRbEZWVlRkaU1FcENVVEkxUkV4RmJFSlJWV3R6VVRCR1FsRjVlRlpSVlVaV1RFVk9RbEZWVFhOVE1FWkNVM2w0U0ZGVlJraE1SVTVDVVZWTmMxRXdSa0pSZVhoT1VWVkdUa3hGWkVKUlZXTnpVVEJHUWxGNWVFUlJWVVpFVEVWT1FsRlZUWE5STUVaQ1VYbDRSRkZWUmtSTVJVNUNVVlZOYzFFd1JrSlJlWGhFVVZWR1JFeEZUa0pSVlUxelVUQkdRbEY1ZUVSUlZVWkVUekprUTFGVlRtOVNRM2hFVVZWR1JFeEZUa0pSVlUxelVUQkdRbEY2ZEdoUlZVNUxUekZPUWxFd1dUZFZWVVpFVWtONFNsRlZSa3BNUld4Q1VWVnJjMUV3UmtKUmVYaFFVVlZHVUV4RlRrSlJWVTF6VlZWR1FsVlRlRVpSVlVaR1R6RnNRbEV6Y0VOTVJURkNVVlV3YzFFd1JrSlJlWGh1VVd0R1Fsb3dTWE5STUVaQ1VYbDRWRkZWUmxSTVJWWkNVVlZWYzFFd1JrSlJlWGhFVVZWR1JFeEZWa0pSVlZVM1dqQktRbEV6U2tSTVJXeENVVlZyYzFFd1JrSlJlWGhvVVZWR2FFeEZUa0pSVlUxelVUQkdRbEY1ZUVSUlZVWkVURVZzUWxGVmEzTlJNRVpDVVhsNFNGRlZSa2hNUld4Q1VWVnJjMUV3UmtKUmVuUmFVVlZPZDFGNWVFUlJWVVpFVEVWT1FsRlZUWE5STUVaQ1VYcDBXbEZWVGtsTVJURkNVVlV3YzFFd1JrSlJlWGh1VVd0R1Fsb3dTWE5STUVaQ1VYbDRVRkZWUmxCTVJWWkNVVlZWYzFFd1JrSlJlWGhFVVZWR1JFeEZWa0pSVlZVM1dqQktRbEV5TlVSTVJXeENVVlZyYzFFd1JrSlJlWGhvVVZWR2FFeEZUa0pSVlUxelVUQkdRbEY1ZUVSUlZVWkVURVZzUWxGVmEzTlJNRVpDVVhsNFNGRlZSa2hNUlhSQ1VWVnpjMUV3UmtKUmVuUmFVVlZPZVZGNWVFUlJWVVpFVEVWT1FsRlZUWE5STUVaQ1VYcDBWRkZWVGt0UE1HeENVVEJuYzFFd1JrSlJlblJLVVZWV1JVOTZkRkJSVlZaSVR6QnNRbEV3YTNOVVZVWkNWRk40UkZGVlJrUk1SbFpDVVZaVmMxRXdSa0pSZVhoUVVWVkZjbEZxZEZKUlZVNHdVa040U2xGVlJrcE1SbXhDVVZacmMxRXdSa0pSZVhoU1VWVkdVa3hGZEVKUlZYTnpWVEJHUWxWNWVFWlJWVVpHVHpGc1FsRXpXa1JNUlRGQ1VWVXdjMU5WUmtKVFUzaE1VVlZHVEV4RlRrSlJWVTF6WWxWT1FsRlhNVVJNUlU1Q1VWVk5jMUV3UmtKUmVuUlVVVlZPTUZKRWRGSlJWVTVGVEVac1FsRldhM05STUVaQ1VYbDRVbEZWUmxKTVJXUkNVVlZqYzFOVlJrSlRVM2hhVVZWR1dreEZUa0pSVlUxelZEQkdRbFI1ZUVSUlZVWkVURVZPUWxGVlRUZFRWVVpFWTBWUmMxRXdSa0pSZW5SS1VWVldVRXhGTVVKUlZUQnpVVEJHUWxGNWVGaFJWVVpZVHpGR1FsRXphRU5NUld4Q1VWVnJjMWRWUmtKWFUzaEVVVlZHUkV4R1JrSlJWa1Z6VXpCR1FsTjVlRlJSVlVaVVRFVldRbEZWVlRkWFZVWkVaR3ROYzFSVlJrSlVVM2hLVVZWR1NreEZkRUpSVlhOelVUQkdRbEY1ZUROUk1FWkNaREJOYzFFd1JrSlJlWGhFVVZWR1JFOHhUa0pSZWs1RlR6RkdRbEpWVVhOVU1FWkNWSGw0V2xGVlJscE1SVTVDVVZWTmMxVlZSa0pWVTNoRVVWVkdSRTh3YkVKUmVUbERURVZPUWxGVlRUZFRWVVpHVWtSek4xUXdSa1pTZW5SS1VWVk9Ta3hGTVVKUlZUQnpVVEJHUWxGNWVFNVJWVVpPVHpGR1FsRXllRU5NUlRGQ1VWVXdjMVZWUmtKVlUzaElVVlZHU0V4R2JFSlJWbXR6VVRCR1FsRjVlRmhSVlVaWVRFVldRbEZWVlhOUk1FWkNVWHAwVWxGVlZURlJlWGhTVVZWR1VreEZUa0pSVlUxelkxVktRbEZZUmtOTVJXUkNVVlZqYzFSVlJrSlVVM2hFVVZWR1JFeEZNVUpSVlRCelVUQkdRbEY1ZUVaUlZVWkdURVZXUWxGVlZYTlZWVVpDVlZONFJGRlZSa1JNUjBaQ1VWZEZjMUV3UmtKUmVYaEVVVlZHUkU4eFJrSlJlazVHVEVaR1FsRldSWE5STUVaQ1VYbDRjbEZyUmtKaE1FbHpVakJHUWxKNmRGcFJWVTB4VVdsNFNGRlZSa2hNUmtaQ1VWWkZjMUV3UmtKUmVYaFdVVlZHVms4eGJFSlJNMUpEVEVaR1FsRldSWE5TVlVaQ1VsTjRWRkZWUmtoTVJVNUNVVlZOYzFJd1JrSlNlWGhFVVZWR1JFeEdSa0pSVmtWelVUQkdRbEY1ZUZaUlZVWldURVZPUWxGVlRYTlZWVVpDVlZONFJGRlZSa1JQTVd4Q1VYazVSRXhGZEVKUlZYTnpVbFZHUWxKVGVFUlJWVVpFVHpGT1FsRXhVWE5STUVaQ1VYcDBTbEZWVGt0TVJVNUNVVlZOTjFOVlJrWlNSSE0zVkRCR1JsSjZkRXBSVlU1S1RFVXhRbEZWTUhOUk1FWkNVWGw0VUZGVlJsQk1SVTVDVVZWTmMxTlZSa0paVkhSU1VWVk9jVkY1ZUU1UlZVWk9URVpHUWxGV1JYTlNNRVpDVW5sNFdsRlZSbHBNUlU1Q1VWVk5jMVl3UmtKV2VYaEdVVlZHUmt4RlRrSlJWVTAzVlZWR1JrNVZUWE5OYTBwQ1VWUktRMDh4UmtKUmVrNURURVZzUWxGVmEzTlJNRVpDVVhsNFNsRlZSa3BNUlZaQ1VWVlZOMWRWUmtSV1EzaE1VVlZHVEV4Rk1VSlJWVEJ6VVRCR1FsRjVlRXBSVlVaS1RFWkdRbEZXUlhOUk1FWkNVWGw0YUZGVlJtaE1SVlpDVVZWVk4xb3dTa0pSTTFKRVRFVnNRbEZWYTNOVlZVWkNWVk40UkZGVlJrUk1SMFpDVVZkRmMxRXdSa0pSZVhoRVVWVkdSRXhGVGtKUlZVMXpVbFZHUWxKVWRIWlJhMFpFVGpCSmMxUXdSa0pVZVhoS1VWVkdTa3hGVGtKUlZVMDNZVlZLUWxFeVNUZFpWVVpFVW1wMFdsRlZUa1ZNUlRsQ1VWVTRjMU13UmtKVGVYaEVVVlZHUkU4eFRrSlJNbEUzVlZWR1JsSkRlRkJSVlVaUVRFVk9RbEZWVFhOUk1FWkNVWGw0VWxGVlJsSk1SVTVDVVZWTmMxbFZSa0paVTNoRVVWVkdSRXhGYkVKUlZXdHpVVEJHUWxGNWVFUlJWVVpFVHpCc1FsRXphRVJNUlU1Q1VWVk5OMU5WUmtaU1JITTNWREJHUmxKNmRFcFJWVTVLVEVVeFFsRlZNSE5STUVaQ1VYbDRWbEZWUmxaTVJVNUNVVlZOYzFOVlJrSlpWSFJTVVZWT2QxRjVlRTVSVlVaT1RFWkdRbEZXUlhOU01FWkNVbmw0V2xGVlJscE1SVTVDVVZWTmMxWXdSa0pXZVhoR1VWVkdSa3hGVGtKUlZVMDNWVlZHUms1VlRYTkxNRXBDVVZOMFEwOHhSa0pSZVRsRFRFVnNRbEZWYTNOUk1FWkNVWGw0U2xGVlJrcE1SVlpDVVZWVk4xZFZSa1JXUTNoTVVWVkdURXhGTVVKUlZUQnpVVEJHUWxGNWVFcFJWVVpLVEVaR1FsRldSWE5STUVaQ1VYbDRhRkZWUm1oTVJWWkNVVlZWTjFvd1NrSlJNMUpFVEVWc1FsRXdWWE5WVlVaQ1ZWTjRSRkZWUmtSTVIwWkNVVmRGYzFFd1JrSlJlWGhFVVZWR1JFeEZUa0pSVlUwM1lqQktRbEV6Y0VOTVJVNUNVVEJWYzFFd1JrSlJlWGhFVVZWR1JFeEZUa0pSVlUxelUxVkdRbE5UZUZKUlZVWlNURVZPUWxGVlRYTmpWVXBDVVZoR1EweEZUa0pSVlUwM1pEQktRbEV6VWtSTVJVNUNVVlZOYzFWVlJrSlZVM2hFVVZWR1JFeElSa05SVlVaNFVXbDRSRkZWUmtSTVJVNUNVVlZOYzFFd1JrSlJlWGhFVVZWT2RWRjVlRVpSVlU1RlR6STVRMUZWVGtKTVJUbENVVlU0YzFOVlJrSlRVM2hFVVZWR1JFOHliRU5SVlU1cFR6SkdRbEV3V1RkWFZVWkVVa040VUZGVlJsQk1SWFJDVVZWemMxRXdSa0pSZW5SVVVWVk9hMDh4UmtKU1ZWRnpWREJHUWxSNWVFUlJWVVpFVEVWT1FsRlZUWE5WVlVaQ1ZWTjRSRkZWUmtSTVIwWkNVVmRGYzFFd1JrSlJlWGhLVVZWR1NreEZUa0pSVlUxelUxVkdRbE5UZUVSUlZVWkVURVpHUWxGV1JYTlJNRVpDVVhsNGVGRnJSa0pqVlVselVUQkdRbEY1ZUVwUlZVWktURVZPUWxGVlRYTlJNRVpDVVhwMFNsRlZUbkZTYVhoRVVWVkdSRTh3YkVKU1ZWRTNUekE1UWxKVll6ZFRWVVpFVTFONFRsRlZSazVNUlU1Q1VWVk5jMVl3UmtKV2VYaEVVVlZHUkV4RmJFSlJWMFUzVlZWR1JHTnJUWE5VVlVaQ1ZGTjRVbEZWUmxKTVJXUkNVVlZqYzFkVlJrSlhVM2hFVVZWR1JFeEdaRUpSVm1OelVsVkdRbEpUZUVSUlZVWkVUekZHUWxKVVZrUk1SMlJFVVZWR2JsRjZkRkpSVlU1dlVYbDRTbEZWUmtwTVJVNUNVVlZOYzFOVlJrSlRVM2hHVVZWR1JrOHhiRUpSTVZGelV6QkdRbE41ZUU1UlZVWk9URVZPUWxGVlRYTlRWVVpDVTFONFVsRlZSbEpNUlU1Q1VWVk5jMWxWUmtKWlUzaEdVVlZHUms4eVpFTlJWVTR3VVhsNFNsRlZUa1pNUlU1Q1VWVk5jMVZWUmtKVlUzaEVVVlZHUkV4SFJrSlJWMFZ6VVRCR1FsRjVlRVJSVlVaRVRFVk9RbEZWVFRkaU1FcENVWHBHUTB4RlRrSlJWVTF6VVRCR1FsRjVlRkpSVlVaU1RFVk9RbEZWVFhOalZVcENVVmhHUTB4RlRrSlJWVTF6VVRCR1FsRjVlRVJSVlVaRVRFVldRbEV5TlVSUE1qbERVVlZPUWt4Rk9VSlJWVGh6VTFWR1FsTlRlRVJSVlVaRVR6SnNRMUZWVG1sUE1rWkNVVEJaTjFkVlJrUlNRM2hRVVZWR1VFeEZkRUpSVlhOelVUQkdRbEY2ZEZSUlZVNXJUekZHUWxKVlVYTlVNRVpDVkhsNFJGRlZSa1JNUmtaQ1VWWkZjMUV3UmtKUmVYaG9VVlZHYUV4RlRrSlJWVTF6VTFWR1FsTlRlRVJSVlVaRVRFVnNRbEZWYTNOUk1FWkNVWGw0UkZGVlJrUk1Sa1pDVVZaRmMxRXdSa0pSZVhoNFVXdEdRbU5WU1hOUk1FWkNVWGw0U2xGVlJrcE1SVTVDVVZWTmMxRXdSa0pSZW5SS1VWVk9jVkpwZUVSUlZVWkVUekJzUWxKVlVUZFBNRGxDVWxWak4xTlZSa1JUVTNoT1VWVkdUa3hGVGtKUlZVMXpWVEJHUWxWNmRGSlJWVTU1VVdsNFRsRlZSazVNUmtaQ1VWWkZjMUl3UmtKU2VYaGFVVlZHV2t4RlRrSlJWVTF6VmpCR1FsWjVlRVpSVlVaR1RFVk9RbEZWVFRkVlZVWkdUbFZOYzFRd1JrSlVlWGhFVVZWR1JFeEZUa0pSVlUxelZWVkdRbFZUZUVSUlZVWkVURVpXUWxGV1ZYTlJNRVpDVVhsNFRsRlZSazVNUlU1Q1VWVk5OMU5WUmtSa1JVMXpVVEJHUWxGNmRFcFJWVlpGVDNwMFVGRlZWa2hQTUd4Q1VUQnJjMVJWUmtKVVUzaEVVVlZHUkV4R2JFSlJWbXMzVlZWR1JHVkZTWE5VVlVaQ1ZGTjRVbEZWUmxKTVJXUkNVVlZqYzFkVlJrSlhVM2hFVVZWR1JFeEdaRUpSVm1OelVsVkdRbEpUZUVSUlZVWkVUekZHUWxKVVZrUk1SVGxDVVZVNGMxRXdSa0pSZVhoRVVWVkdSRXhHUmtKUlZrVnpVVEJHUWxGNWVGWlJWVVpXVEVWT1FsRlZUWE5VVlVaQ1ZGTjRTbEZWUmtwTVJVNUNVVlZOYzFWVlJrSlZVM2hFVVZWR1JFeEhkRU5SVlVaeVVXbDRSRkZWUmtSTVJURkNVVlV3YzFFd1JrSlJlblJLVVZWTk0xSlRlRVJSVlVaRVR6QnNRbEpWVVRkUE1EbENVbFZqTjFOVlJrUlRVM2hPVVZWR1RreEZUa0pSVlUxeldWVkdRbGxVZEZKUlZVNDJVV2w0VGxGVlJrNU1Sa1pDVVZaRmMxSXdSa0pTZVhoYVVWVkdXa3hGVGtKUlZVMXpWakJHUWxaNWVFWlJWVVpHVEVWT1FsRlZUVGRWVlVaR1RsVk5jMVF3UmtKVWVYaEVVVlZHUkV4R1JrSlJWa1Z6VVRCR1FsRjVlRlpSVlVaV1RFVk9RbEZWVFhOVVZVWkNWRk40U2xGVlJrcE1SVTVDVVZWTmMxRXdSa0pSZVhoU1VWVkdVa3hGVGtKUlZVMXpZVEJLUWxGWGRFTk1SVTVDVVZWTmMxUlZSa0pVVTNoRVVWVkdSRTh3YkVKUmVtUkdURVZPUWxGVlRUZFRWVVpHVWtSek4xUXdSa1pTZW5SS1VWVk9Ta3hGTVVKUlZUQnpVVEJHUWxGNWVGcFJWVVphVHpGR1FsRXphRU5NUlRGQ1VWVXdjMVZWUmtKVlUzaElVVlZHU0V4R2JFSlJWbXR6VVRCR1FsRjVlRmhSVlVaWVRFVldRbEZWVlhOUk1FWkNVWHAwVWxGVlZURlJlWGhRVVZWR1VFeEdSa0pSVmtWelVUQkdRbEY1ZUZaUlZVWldURVZPUWxGVlRYTlRNRVpDVTNsNFNGRlZSa2hNUlU1Q1VWVk5jMUV3UmtKUmVuUktVVlZPTWxGNWVFUlJWVVpFVHpCc1FsSlZVVGRQTURsQ1VsVmpOMU5WUmtSVFUzaE9VVlZHVGt4RlRrSlJWVTF6V1RCR1FsbDZkRkpSVlUxNFVXbDRUbEZWUms1TVJrWkNVVlpGYzFJd1JrSlNlWGhhVVZWR1dreEZUa0pSVlUxelZqQkdRbFo1ZUVaUlZVWkdURVZPUWxGVlRUZFZWVVpHVGxWTmMxUXdSa0pVZVhoU1VWVkdVa3hGVGtKUlZVMXpWbFZHUWxaVGVFUlJWVVpFVEVWMFFsRlZjM05TTUVaQ1VubDRSRkZWUmtSTVJVNUNVVlZOTjFOVlJrUmthMDF6VVRCR1FsRjZkRXBSVlZaRlQzcDBVRkZWVmtoUE1HeENVVEJyYzFSVlJrSlVVM2hNVVZWR1RFeEhSa0pSVjBVM1ZWVkdSRTR3U1hOVVZVWkNWRk40VWxGVlJsSk1SV1JDVVZWamMxZFZSa0pYVTNoRVVWVkdSRXhHWkVKUlZtTnpVbFZHUWxKVGVFUlJWVVpFVHpGR1FsSlVWa1JNUlRsQ1VWVTRjMVZWUmtKVlUzaEVVVlZHUkV4R1ZrSlJWbFZ6VVRCR1FsRjVlRkpSVlVaU1RFVk9RbEZWVFRkVFZVWkVaRVZOYzFFd1JrSlJlbk0zVVZWRk5WUlZaM05MTUVwQ1N6QXhSRTh3UmtKT1ZURTFVV2wzZVZGclJrSlplWGhJVVZWR2NGRnFkRXBSVlU1NVVrTjRURkZWUmt4TVJWWkNVVlZWYzFOVlJrSlRWSFJLVVZWT1dVeEdWa0pSVmxWelVsVkdRbEpUZUVwUlZVWktUekJzUWxFeWFFTk1Sa1pDVVZaRmMxSlZSa0pTVTNoS1VWVkdTazh3VGtKUk1sbHpVVEJHUWxGNVNqa2lYU3dpYm1GdFpYTWlPbHRkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAvKioqKioqLyAoKCkgPT4geyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdFwidXNlIHN0cmljdFwiO1xuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIFwiLi9pbmRleC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vaW5kZXgudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKi9cbi8qKiovICgoX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMpID0+IHtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsICh7IHZhbHVlOiB0cnVlIH0pKTtcbmV4cG9ydHMuU2NlbmUgPSBleHBvcnRzLlNjZW5lVHJhbnNpdGlvblN0YXRlID0gdm9pZCAwO1xudmFyIFNjZW5lVHJhbnNpdGlvblN0YXRlO1xuKGZ1bmN0aW9uIChTY2VuZVRyYW5zaXRpb25TdGF0ZSkge1xuICAgIFNjZW5lVHJhbnNpdGlvblN0YXRlW1NjZW5lVHJhbnNpdGlvblN0YXRlW1wiSW5cIl0gPSAwXSA9IFwiSW5cIjtcbiAgICBTY2VuZVRyYW5zaXRpb25TdGF0ZVtTY2VuZVRyYW5zaXRpb25TdGF0ZVtcIk91dFwiXSA9IDFdID0gXCJPdXRcIjtcbiAgICBTY2VuZVRyYW5zaXRpb25TdGF0ZVtTY2VuZVRyYW5zaXRpb25TdGF0ZVtcIk5vbmVcIl0gPSAyXSA9IFwiTm9uZVwiO1xufSkoU2NlbmVUcmFuc2l0aW9uU3RhdGUgPSBleHBvcnRzLlNjZW5lVHJhbnNpdGlvblN0YXRlIHx8IChleHBvcnRzLlNjZW5lVHJhbnNpdGlvblN0YXRlID0ge30pKTtcbmZ1bmN0aW9uIGNsYW1wKGEsIG1pbiA9IDAsIG1heCA9IDEpIHtcbiAgICByZXR1cm4gYSA8IG1pbiA/IG1pbiA6IChhID4gbWF4ID8gbWF4IDogYSk7XG59XG5jbGFzcyBTY2VuZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNjZW5lcyA9IFtdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXNlIHRoZSBzY2VuZSBtYW5hZ2VyIGZvciBtYW5hZ2luZyBnYW1lIHNjZW5lc1xuICAgICAqL1xuICAgIHN0YXRpYyBpbml0aWFsaXNlKCkge1xuICAgICAgICBpZiAoU2NlbmVNYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjZW5lTWFuYWdlciBhbHJlYWR5IGluaXRpYWxpc2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgU2NlbmVNYW5hZ2VyLmluc3RhbmNlID0gbmV3IFNjZW5lTWFuYWdlcigpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghU2NlbmVNYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjZW5lTWFuYWdlciBub3QgcHJvcGVybHkgaW5pdGlhbGlzZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2NlbmVNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdXNoIGEgc2NlbmUgb250byB0aGUgc2NlbmUgc3RhY2sgYW5kIHN0YXJ0IHRyYW5zaXRpb25pbmcgaW5cbiAgICAgKi9cbiAgICBzdGF0aWMgcHVzaChzY2VuZSkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IFNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBpbnN0YW5jZS5zY2VuZXMucHVzaChzY2VuZSk7XG4gICAgICAgIC8vIEluaXRpYWxpc2UgdGhlIHNjZW5lIGFuZCBzdGFydCB0aGUgdHJhbnNpdGlvblxuICAgICAgICBzY2VuZS5pbml0aWFsaXNlKCk7XG4gICAgICAgIHNjZW5lLnRyYW5zaXRpb25JbigpO1xuICAgICAgICByZXR1cm4gc2NlbmU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHNjZW5lIGZyb20gdGhlIHNjZW5lIHN0YWNrIGFmdGVyIHRyYW5zaXRpb25pbmcgb3V0XG4gICAgICovXG4gICAgc3RhdGljIHBvcCgpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBTY2VuZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgaWYgKGluc3RhbmNlLnNjZW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgbGFzdCA9IGluc3RhbmNlLnNjZW5lcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSB0b3AtbW9zdCBzY2VuZSB0aGF0IGlzbid0IGN1cnJlbnRseSB0cmFuc2l0aW9uaW5nIG91dFxuICAgICAgICAgICAgd2hpbGUgKGxhc3QgPiAwICYmXG4gICAgICAgICAgICAgICAgaW5zdGFuY2Uuc2NlbmVzW2xhc3RdLnRyYW5zaXRpb25TdGF0ZSA9PT0gU2NlbmVUcmFuc2l0aW9uU3RhdGUuT3V0KSB7XG4gICAgICAgICAgICAgICAgbGFzdC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxhc3QgPj0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gaW5zdGFuY2Uuc2NlbmVzW2xhc3RdO1xuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHRyYW5zaXRpb25pbmcgb3V0XG4gICAgICAgICAgICAgICAgc2NlbmUudHJhbnNpdGlvbk91dCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzY2VuZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIHNjZW5lIGZyb20gdGhlIHNjZW5lIHN0YWNrXG4gICAgICovXG4gICAgc3RhdGljIGNsZWFyKCkge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IFNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBpbnN0YW5jZS5zY2VuZXMuZm9yRWFjaChzY2VuZSA9PiB7XG4gICAgICAgICAgICBpZiAoc2NlbmUudHJhbnNpdGlvblN0YXRlICE9PSBTY2VuZVRyYW5zaXRpb25TdGF0ZS5PdXQpIHtcbiAgICAgICAgICAgICAgICBzY2VuZS50cmFuc2l0aW9uT3V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHNjZW5lIG1hbmFnZXIgYW5kIHRoZSBjdXJyZW50IHNjZW5lXG4gICAgICovXG4gICAgc3RhdGljIHVwZGF0ZShkdCwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IFNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBpZiAoaW5zdGFuY2Uuc2NlbmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSB0b3AtbW9zdCBzY2VuZSB0aGF0IGlzbid0IGN1cnJlbnRseSB0cmFuc2l0aW9uaW5nIG91dFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGluc3RhbmNlLnNjZW5lcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2Uuc2NlbmVzW2ldLnRyYW5zaXRpb25TdGF0ZSAhPT0gU2NlbmVUcmFuc2l0aW9uU3RhdGUuT3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnNjZW5lc1tpXS51cGRhdGUoZHQsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgYWxsIHNjZW5lIHRyYW5zaXRpb25zXG4gICAgICAgICAgICBpbnN0YW5jZS5zY2VuZXMuZm9yRWFjaChzY2VuZSA9PiB7XG4gICAgICAgICAgICAgICAgc2NlbmUudXBkYXRlVHJhbnNpdGlvbihkdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbnkgZGlzcG9zZWQgc2NlbmVzXG4gICAgICAgICAgICBpbnN0YW5jZS5zY2VuZXMgPSBpbnN0YW5jZS5zY2VuZXMuZmlsdGVyKHNjZW5lID0+ICFzY2VuZS5kaXNwb3NlZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVuZGVyIHNjZW5lcyBvbiB0aGUgc2NyZWVuXG4gICAgICovXG4gICAgc3RhdGljIGRyYXcoY29udGV4dCwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IFNjZW5lTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICAvLyBGaWd1cmUgb3V0IHdoaWNoIHNjZW5lcyB3ZSBuZWVkIHRvIGRyYXdcbiAgICAgICAgY29uc3QgZHJhd0xpc3QgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGluc3RhbmNlLnNjZW5lcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gaW5zdGFuY2Uuc2NlbmVzW2ldO1xuICAgICAgICAgICAgZHJhd0xpc3QucHVzaChzY2VuZSk7XG4gICAgICAgICAgICAvLyBJZiB0cmFuc2l0aW9uaW5nLCB0aGlzIHNjZW5lIGlzIGFzc3VtZWQgdG8gYmUgdHJhbnNwYXJlbnRcbiAgICAgICAgICAgIC8vICh3ZSBtaWdodCB3YW50IHRvIHNob3cgdGhlIHNjZW5lIHVuZGVybmVhdGggaWYgd2UncmUgZG9pbmcgZS5nLiBhIGZhZGUpXG4gICAgICAgICAgICBpZiAoIXNjZW5lLnRyYW5zcGFyZW50ICYmXG4gICAgICAgICAgICAgICAgc2NlbmUudHJhbnNpdGlvblN0YXRlID09PSBTY2VuZVRyYW5zaXRpb25TdGF0ZS5Ob25lKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gRHJhdyB0aGUgc2NlbmVzIGluIGJvdHRvbSAtPiB0b3Agb3JkZXJcbiAgICAgICAgZHJhd0xpc3QucmV2ZXJzZSgpLmZvckVhY2goc2NlbmUgPT4ge1xuICAgICAgICAgICAgc2NlbmUuZHJhdyhjb250ZXh0LCAuLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTY2VuZU1hbmFnZXI7XG5jbGFzcyBTY2VuZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgdHJhbnNpdGlvblRpbWU6IDIsXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uU3RhdGUgPSBTY2VuZVRyYW5zaXRpb25TdGF0ZS5Ob25lO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25BbW91bnQgPSAwO1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25UaW1lID0gMDtcbiAgICAgICAgdGhpcy50cmFuc3BhcmVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc3Bvc2VkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGFjdHVhbE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uVGltZSA9IGFjdHVhbE9wdGlvbnMudHJhbnNpdGlvblRpbWU7XG4gICAgICAgIHRoaXMudHJhbnNwYXJlbnQgPSBhY3R1YWxPcHRpb25zLnRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLmRpc3Bvc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgdHJhbnNpdGlvbkluKCkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25TdGF0ZSA9IFNjZW5lVHJhbnNpdGlvblN0YXRlLkluO1xuICAgIH1cbiAgICB0cmFuc2l0aW9uT3V0KCkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25TdGF0ZSA9IFNjZW5lVHJhbnNpdGlvblN0YXRlLk91dDtcbiAgICB9XG4gICAgdXBkYXRlVHJhbnNpdGlvbihkdCkge1xuICAgICAgICBjb25zdCBhbW91bnQgPSBkdCAvIHRoaXMudHJhbnNpdGlvblRpbWU7XG4gICAgICAgIC8vIFRyYW5zaXRpb25pbmcgaW5cbiAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvblN0YXRlID09PSBTY2VuZVRyYW5zaXRpb25TdGF0ZS5Jbikge1xuICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvbkFtb3VudCA8IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25BbW91bnQgPSBjbGFtcCh0aGlzLnRyYW5zaXRpb25BbW91bnQgKyBhbW91bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uU3RhdGUgPSBTY2VuZVRyYW5zaXRpb25TdGF0ZS5Ob25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRyYW5zaXRpb25pbmcgb3V0XG4gICAgICAgIGlmICh0aGlzLnRyYW5zaXRpb25TdGF0ZSA9PT0gU2NlbmVUcmFuc2l0aW9uU3RhdGUuT3V0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFuc2l0aW9uQW1vdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNpdGlvbkFtb3VudCA9IGNsYW1wKHRoaXMudHJhbnNpdGlvbkFtb3VudCAtIGFtb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuU2NlbmUgPSBTY2VuZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTlwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGWlFTeEpRVUZaTEc5Q1FVbFlPMEZCU2tRc1YwRkJXU3h2UWtGQmIwSTdTVUZET1VJc01rUkJRVVVzUTBGQlFUdEpRVU5HTERaRVFVRkhMRU5CUVVFN1NVRkRTQ3dyUkVGQlNTeERRVUZCTzBGQlEwNHNRMEZCUXl4RlFVcFhMRzlDUVVGdlFpeEhRVUZ3UWl3MFFrRkJiMElzUzBGQmNFSXNORUpCUVc5Q0xGRkJTUzlDTzBGQlJVUXNVMEZCVXl4TFFVRkxMRU5CUVVNc1EwRkJVeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMRU5CUVVNN1NVRkRlRU1zVDBGQlR5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVNM1F5eERRVUZETzBGQlJVUXNUVUZCY1VJc1dVRkJXVHRKUVVzdlFqdFJRVVpSTEZkQlFVMHNSMEZCV1N4RlFVRkZMRU5CUVVNN1NVRkZUaXhEUVVGRE8wbEJSWGhDT3p0UFFVVkhPMGxCUTBrc1RVRkJUU3hEUVVGRExGVkJRVlU3VVVGRGRFSXNTVUZCU1N4WlFVRlpMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJRM3BDTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2EwTkJRV3RETEVOQlFVTXNRMEZCUXp0VFFVTnlSRHRSUVVORUxGbEJRVmtzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4WlFVRlpMRVZCUVVVc1EwRkJRenRKUVVNM1F5eERRVUZETzBsQlJVOHNUVUZCVFN4RFFVRkRMRmRCUVZjN1VVRkRlRUlzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRVZCUVVVN1dVRkRNVUlzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4MVEwRkJkVU1zUTBGQlF5eERRVUZETzFOQlF6RkVPMUZCUlVRc1QwRkJUeXhaUVVGWkxFTkJRVU1zVVVGQlVTeERRVUZETzBsQlF5OUNMRU5CUVVNN1NVRkZSRHM3VDBGRlJ6dEpRVU5KTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJXVHRSUVVNM1FpeE5RVUZOTEZGQlFWRXNSMEZCUnl4WlFVRlpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRk5VTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZGTlVJc1owUkJRV2RFTzFGQlEyaEVMRXRCUVVzc1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF6dFJRVU51UWl4TFFVRkxMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU03VVVGRGNrSXNUMEZCVHl4TFFVRkxMRU5CUVVNN1NVRkRaaXhEUVVGRE8wbEJSVVE3TzA5QlJVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1IwRkJSenRSUVVObUxFMUJRVTBzVVVGQlVTeEhRVUZITEZsQlFWa3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRSUVVVMVF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFpRVU01UWl4SlFVRkpMRWxCUVVrc1IwRkJWeXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNN1dVRkZPVU1zYlVWQlFXMUZPMWxCUTI1RkxFOUJRMFVzU1VGQlNTeEhRVUZITEVOQlFVTTdaMEpCUTFJc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4bFFVRmxMRXRCUVVzc2IwSkJRVzlDTEVOQlFVTXNSMEZCUnl4RlFVTnNSVHRuUWtGRFFTeEpRVUZKTEVWQlFVVXNRMEZCUXp0aFFVTlNPMWxCUTBRc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eEZRVUZGTzJkQ1FVTmlMRTFCUVUwc1MwRkJTeXhIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJSWEJETERCQ1FVRXdRanRuUWtGRE1VSXNTMEZCU3l4RFFVRkRMR0ZCUVdFc1JVRkJSU3hEUVVGRE8yZENRVU4wUWl4UFFVRlBMRXRCUVVzc1EwRkJRenRoUVVOa08xTkJRMFk3VVVGRlJDeFBRVUZQTEZOQlFWTXNRMEZCUXp0SlFVTnVRaXhEUVVGRE8wbEJSVVE3TzA5QlJVYzdTVUZEU1N4TlFVRk5MRU5CUVVNc1MwRkJTenRSUVVOcVFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4WlFVRlpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRk5VTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdXVUZET1VJc1NVRkJTU3hMUVVGTExFTkJRVU1zWlVGQlpTeExRVUZMTEc5Q1FVRnZRaXhEUVVGRExFZEJRVWNzUlVGQlJUdG5Ra0ZEZEVRc1MwRkJTeXhEUVVGRExHRkJRV0VzUlVGQlJTeERRVUZETzJGQlEzWkNPMUZCUTBnc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFRDeERRVUZETzBsQlJVUTdPMDlCUlVjN1NVRkRTU3hOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFWVXNSVUZCUlN4SFFVRkhMRWxCUVZjN1VVRkROME1zVFVGQlRTeFJRVUZSTEVkQlFVY3NXVUZCV1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJSVFZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTzFsQlF6bENMSGRGUVVGM1JUdFpRVU40UlN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hIUVVGSE8yZENRVU42UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNaVUZCWlN4TFFVRkxMRzlDUVVGdlFpeERRVUZETEVkQlFVY3NSVUZCUlR0dlFrRkRia1VzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN2IwSkJRM1pETEUxQlFVMDdhVUpCUTFBN1lVRkRSanRaUVVWRUxDdENRVUVyUWp0WlFVTXZRaXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRuUWtGRE9VSXNTMEZCU3l4RFFVRkRMR2RDUVVGblFpeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUXpkQ0xFTkJRVU1zUTBGQlF5eERRVUZETzFsQlJVZ3NOa0pCUVRaQ08xbEJRemRDTEZGQlFWRXNRMEZCUXl4TlFVRk5MRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0VFFVTndSVHRKUVVOSUxFTkJRVU03U1VGRlJEczdUMEZGUnp0SlFVTkpMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQmFVTXNSVUZCUlN4SFFVRkhMRWxCUVZjN1VVRkRiRVVzVFVGQlRTeFJRVUZSTEVkQlFVY3NXVUZCV1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRE8xRkJSVFZETERCRFFVRXdRenRSUVVNeFF5eE5RVUZOTEZGQlFWRXNSMEZCV1N4RlFVRkZMRU5CUVVNN1VVRkROMElzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSMEZCUnp0WlFVTjZReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRMnBETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRmNrSXNORVJCUVRSRU8xbEJRelZFTERCRlFVRXdSVHRaUVVNeFJTeEpRVU5GTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjN1owSkJRMnhDTEV0QlFVc3NRMEZCUXl4bFFVRmxMRXRCUVVzc2IwSkJRVzlDTEVOQlFVTXNTVUZCU1N4RlFVTnVSRHRuUWtGRFFTeE5RVUZOTzJGQlExQTdVMEZEUmp0UlFVVkVMSGxEUVVGNVF6dFJRVU42UXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUTJwRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03VVVGREwwSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRUQ3hEUVVGRE8wTkJRMFk3UVVGd1NVUXNLMEpCYjBsRE8wRkJSVVFzVFVGQmMwSXNTMEZCU3p0SlFXZENla0lzV1VGQmJVSXNUMEZCSzBJN1VVRm1ha01zYlVKQlFXTXNSMEZCYVVJN1dVRkRPVU1zWTBGQll5eEZRVUZGTEVOQlFVTTdXVUZEYWtJc1YwRkJWeXhGUVVGRkxFbEJRVWs3VTBGRGJFSXNRMEZCUXp0UlFVVkxMRzlDUVVGbExFZEJRWGxDTEc5Q1FVRnZRaXhEUVVGRExFbEJRVWtzUTBGQlF6dFJRVVZzUlN4eFFrRkJaMElzUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZGTjBJc2JVSkJRV01zUjBGQlZ5eERRVUZETEVOQlFVTTdVVUZGTTBJc1owSkJRVmNzUjBGQldTeExRVUZMTEVOQlFVTTdVVUZGTjBJc1lVRkJVU3hIUVVGWkxFdEJRVXNzUTBGQlF6dFJRVWN2UWl4TlFVRk5MR0ZCUVdFc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1kwRkJZeXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFGQlEzUkZMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzWVVGQllTeERRVUZETEdOQlFXTXNRMEZCUXp0UlFVTnVSQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEdGQlFXRXNRMEZCUXl4WFFVRlhMRU5CUVVNN1NVRkRMME1zUTBGQlF6dEpRVVZOTEU5QlFVODdVVUZEV2l4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF6dEpRVU4yUWl4RFFVRkRPMGxCUlUwc1dVRkJXVHRSUVVOcVFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4SFFVRkhMRzlDUVVGdlFpeERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTnFSQ3hEUVVGRE8wbEJSVTBzWVVGQllUdFJRVU5zUWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExHOUNRVUZ2UWl4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVOc1JDeERRVUZETzBsQlJVMHNaMEpCUVdkQ0xFTkJRVU1zUlVGQlZUdFJRVU5vUXl4TlFVRk5MRTFCUVUwc1IwRkJWeXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXp0UlFVVm9SQ3h0UWtGQmJVSTdVVUZEYmtJc1NVRkJTU3hKUVVGSkxFTkJRVU1zWlVGQlpTeExRVUZMTEc5Q1FVRnZRaXhEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU53UkN4SlFVRkpMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNSMEZCUnl4RFFVRkRMRVZCUVVVN1owSkJRemRDTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUjBGQlJ5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRPMkZCUXk5RU8ybENRVUZOTzJkQ1FVTk1MRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hEUVVGRE8yRkJRMnhFTzFOQlEwWTdVVUZGUkN4dlFrRkJiMEk3VVVGRGNFSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1pVRkJaU3hMUVVGTExHOUNRVUZ2UWl4RFFVRkRMRWRCUVVjc1JVRkJSVHRaUVVOeVJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUXpkQ0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETzJGQlF5OUVPMmxDUVVGTk8yZENRVU5NTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRoUVVOb1FqdFRRVU5HTzBsQlEwZ3NRMEZCUXp0RFFVOUdPMEZCTjBSRUxITkNRVFpFUXlKOVxuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIHN0YXJ0dXBcbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdC8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG4vKioqKioqLyBcdF9fd2VicGFja19tb2R1bGVzX19bXCIuL2luZGV4LnRzXCJdKDAsIF9fd2VicGFja19leHBvcnRzX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19leHBvcnRzX187XG4vKioqKioqLyB9KSgpXG47XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6dEJRVU5FTEU4N096czdPenM3T3pzN1FVTldZVHRCUVVOaUxEaERRVUUyUXl4RlFVRkZMR0ZCUVdFc1JVRkJRenRCUVVNM1JDeGhRVUZoTEVkQlFVY3NORUpCUVRSQ08wRkJRelZETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRExEQkVRVUV3UkN3MFFrRkJORUlzUzBGQlN6dEJRVU0xUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xFUVVGcFJDeEpRVUZKTzBGQlEzSkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4aFFVRmhPMEZCUTJJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxEWkRRVUUyUXl4SlFVRkpPMEZCUTJwRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFc2EwSkJRV1U3UVVGRFpqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNPRU5CUVRoRE8wRkJRemxETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWVVGQllUdEJRVU5pTERKRFFVRXlRenM3T3pzN096dFZSWFJMTTBNN1ZVRkRRVHRWUVVOQk8xVkJRMEU3VlVGRFFTSXNJbk52ZFhKalpYTWlPbHNpZDJWaWNHRmphem92TDBCaVlYTmxiV1Z1ZEhWdWFYWmxjbk5sTDNOalpXNWxMVzFoYm1GblpYSXZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMMEJpWVhObGJXVnVkSFZ1YVhabGNuTmxMM05qWlc1bExXMWhibUZuWlhJdkxpOXBibVJsZUM1MGN5SXNJbmRsWW5CaFkyczZMeTlBWW1GelpXMWxiblIxYm1sMlpYSnpaUzl6WTJWdVpTMXRZVzVoWjJWeUwzZGxZbkJoWTJzdlltVm1iM0psTFhOMFlYSjBkWEFpTENKM1pXSndZV05yT2k4dlFHSmhjMlZ0Wlc1MGRXNXBkbVZ5YzJVdmMyTmxibVV0YldGdVlXZGxjaTkzWldKd1lXTnJMM04wWVhKMGRYQWlMQ0ozWldKd1lXTnJPaTh2UUdKaGMyVnRaVzUwZFc1cGRtVnljMlV2YzJObGJtVXRiV0Z1WVdkbGNpOTNaV0p3WVdOckwyRm1kR1Z5TFhOMFlYSjBkWEFpWFN3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUlIZGxZbkJoWTJ0VmJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1S0hKdmIzUXNJR1poWTNSdmNua3BJSHRjYmx4MGFXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhSNWNHVnZaaUJ0YjJSMWJHVWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdabUZqZEc5eWVTZ3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJrWldacGJtVWdQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdaR1ZtYVc1bExtRnRaQ2xjYmx4MFhIUmtaV1pwYm1Vb1cxMHNJR1poWTNSdmNua3BPMXh1WEhSbGJITmxJSHRjYmx4MFhIUjJZWElnWVNBOUlHWmhZM1J2Y25rb0tUdGNibHgwWEhSbWIzSW9kbUZ5SUdrZ2FXNGdZU2tnS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlBL0lHVjRjRzl5ZEhNZ09pQnliMjkwS1Z0cFhTQTlJR0ZiYVYwN1hHNWNkSDFjYm4wcEtITmxiR1lzSUNncElEMCtJSHRjYm5KbGRIVnliaUFpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQmNJbDlmWlhOTmIyUjFiR1ZjSWl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JtVjRjRzl5ZEhNdVUyTmxibVVnUFNCbGVIQnZjblJ6TGxOalpXNWxWSEpoYm5OcGRHbHZibE4wWVhSbElEMGdkbTlwWkNBd08xeHVkbUZ5SUZOalpXNWxWSEpoYm5OcGRHbHZibE4wWVhSbE8xeHVLR1oxYm1OMGFXOXVJQ2hUWTJWdVpWUnlZVzV6YVhScGIyNVRkR0YwWlNrZ2UxeHVJQ0FnSUZOalpXNWxWSEpoYm5OcGRHbHZibE4wWVhSbFcxTmpaVzVsVkhKaGJuTnBkR2x2YmxOMFlYUmxXMXdpU1c1Y0lsMGdQU0F3WFNBOUlGd2lTVzVjSWp0Y2JpQWdJQ0JUWTJWdVpWUnlZVzV6YVhScGIyNVRkR0YwWlZ0VFkyVnVaVlJ5WVc1emFYUnBiMjVUZEdGMFpWdGNJazkxZEZ3aVhTQTlJREZkSUQwZ1hDSlBkWFJjSWp0Y2JpQWdJQ0JUWTJWdVpWUnlZVzV6YVhScGIyNVRkR0YwWlZ0VFkyVnVaVlJ5WVc1emFYUnBiMjVUZEdGMFpWdGNJazV2Ym1WY0lsMGdQU0F5WFNBOUlGd2lUbTl1WlZ3aU8xeHVmU2tvVTJObGJtVlVjbUZ1YzJsMGFXOXVVM1JoZEdVZ1BTQmxlSEJ2Y25SekxsTmpaVzVsVkhKaGJuTnBkR2x2YmxOMFlYUmxJSHg4SUNobGVIQnZjblJ6TGxOalpXNWxWSEpoYm5OcGRHbHZibE4wWVhSbElEMGdlMzBwS1R0Y2JtWjFibU4wYVc5dUlHTnNZVzF3S0dFc0lHMXBiaUE5SURBc0lHMWhlQ0E5SURFcElIdGNiaUFnSUNCeVpYUjFjbTRnWVNBOElHMXBiaUEvSUcxcGJpQTZJQ2hoSUQ0Z2JXRjRJRDhnYldGNElEb2dZU2s3WEc1OVhHNWpiR0Z6Y3lCVFkyVnVaVTFoYm1GblpYSWdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5qWlc1bGN5QTlJRnRkTzF4dUlDQWdJSDFjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJKYm1sMGFXRnNhWE5sSUhSb1pTQnpZMlZ1WlNCdFlXNWhaMlZ5SUdadmNpQnRZVzVoWjJsdVp5Qm5ZVzFsSUhOalpXNWxjMXh1SUNBZ0lDQXFMMXh1SUNBZ0lITjBZWFJwWXlCcGJtbDBhV0ZzYVhObEtDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1UyTmxibVZOWVc1aFoyVnlMbWx1YzNSaGJtTmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0oxTmpaVzVsVFdGdVlXZGxjaUJoYkhKbFlXUjVJR2x1YVhScFlXeHBjMlZrSnlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdVMk5sYm1WTllXNWhaMlZ5TG1sdWMzUmhibU5sSUQwZ2JtVjNJRk5qWlc1bFRXRnVZV2RsY2lncE8xeHVJQ0FnSUgxY2JpQWdJQ0J6ZEdGMGFXTWdaMlYwU1c1emRHRnVZMlVvS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2doVTJObGJtVk5ZVzVoWjJWeUxtbHVjM1JoYm1ObEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjFOalpXNWxUV0Z1WVdkbGNpQnViM1FnY0hKdmNHVnliSGtnYVc1cGRHbGhiR2x6WldRbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdVMk5sYm1WTllXNWhaMlZ5TG1sdWMzUmhibU5sTzF4dUlDQWdJSDFjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJRZFhOb0lHRWdjMk5sYm1VZ2IyNTBieUIwYUdVZ2MyTmxibVVnYzNSaFkyc2dZVzVrSUhOMFlYSjBJSFJ5WVc1emFYUnBiMjVwYm1jZ2FXNWNiaUFnSUNBZ0tpOWNiaUFnSUNCemRHRjBhV01nY0hWemFDaHpZMlZ1WlNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCcGJuTjBZVzVqWlNBOUlGTmpaVzVsVFdGdVlXZGxjaTVuWlhSSmJuTjBZVzVqWlNncE8xeHVJQ0FnSUNBZ0lDQnBibk4wWVc1alpTNXpZMlZ1WlhNdWNIVnphQ2h6WTJWdVpTazdYRzRnSUNBZ0lDQWdJQzh2SUVsdWFYUnBZV3hwYzJVZ2RHaGxJSE5qWlc1bElHRnVaQ0J6ZEdGeWRDQjBhR1VnZEhKaGJuTnBkR2x2Ymx4dUlDQWdJQ0FnSUNCelkyVnVaUzVwYm1sMGFXRnNhWE5sS0NrN1hHNGdJQ0FnSUNBZ0lITmpaVzVsTG5SeVlXNXphWFJwYjI1SmJpZ3BPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjMk5sYm1VN1hHNGdJQ0FnZlZ4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZKbGJXOTJaU0JoSUhOalpXNWxJR1p5YjIwZ2RHaGxJSE5qWlc1bElITjBZV05ySUdGbWRHVnlJSFJ5WVc1emFYUnBiMjVwYm1jZ2IzVjBYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2MzUmhkR2xqSUhCdmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhVzV6ZEdGdVkyVWdQU0JUWTJWdVpVMWhibUZuWlhJdVoyVjBTVzV6ZEdGdVkyVW9LVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHbHVjM1JoYm1ObExuTmpaVzVsY3k1c1pXNW5kR2dnUGlBd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdiR0Z6ZENBOUlHbHVjM1JoYm1ObExuTmpaVzVsY3k1c1pXNW5kR2dnTFNBeE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1VtVnRiM1psSUhSb1pTQjBiM0F0Ylc5emRDQnpZMlZ1WlNCMGFHRjBJR2x6YmlkMElHTjFjbkpsYm5Sc2VTQjBjbUZ1YzJsMGFXOXVhVzVuSUc5MWRGeHVJQ0FnSUNBZ0lDQWdJQ0FnZDJocGJHVWdLR3hoYzNRZ1BpQXdJQ1ltWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVc1emRHRnVZMlV1YzJObGJtVnpXMnhoYzNSZExuUnlZVzV6YVhScGIyNVRkR0YwWlNBOVBUMGdVMk5sYm1WVWNtRnVjMmwwYVc5dVUzUmhkR1V1VDNWMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR0Z6ZEMwdE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0d4aGMzUWdQajBnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhOalpXNWxJRDBnYVc1emRHRnVZMlV1YzJObGJtVnpXMnhoYzNSZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRk4wWVhKMElIUnlZVzV6YVhScGIyNXBibWNnYjNWMFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MyTmxibVV1ZEhKaGJuTnBkR2x2Yms5MWRDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnpZMlZ1WlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZFc1a1pXWnBibVZrTzF4dUlDQWdJSDFjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlcxdmRtVWdZV3hzSUhOalpXNWxJR1p5YjIwZ2RHaGxJSE5qWlc1bElITjBZV05yWEc0Z0lDQWdJQ292WEc0Z0lDQWdjM1JoZEdsaklHTnNaV0Z5S0NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCcGJuTjBZVzVqWlNBOUlGTmpaVzVsVFdGdVlXZGxjaTVuWlhSSmJuTjBZVzVqWlNncE8xeHVJQ0FnSUNBZ0lDQnBibk4wWVc1alpTNXpZMlZ1WlhNdVptOXlSV0ZqYUNoelkyVnVaU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2MyTmxibVV1ZEhKaGJuTnBkR2x2YmxOMFlYUmxJQ0U5UFNCVFkyVnVaVlJ5WVc1emFYUnBiMjVUZEdGMFpTNVBkWFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCelkyVnVaUzUwY21GdWMybDBhVzl1VDNWMEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lIMWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlZjR1JoZEdVZ2RHaGxJSE5qWlc1bElHMWhibUZuWlhJZ1lXNWtJSFJvWlNCamRYSnlaVzUwSUhOalpXNWxYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2MzUmhkR2xqSUhWd1pHRjBaU2hrZEN3Z0xpNHVZWEpuY3lrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCcGJuTjBZVzVqWlNBOUlGTmpaVzVsVFdGdVlXZGxjaTVuWlhSSmJuTjBZVzVqWlNncE8xeHVJQ0FnSUNBZ0lDQnBaaUFvYVc1emRHRnVZMlV1YzJObGJtVnpMbXhsYm1kMGFDQStJREFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUU5dWJIa2dkWEJrWVhSbElIUm9aU0IwYjNBdGJXOXpkQ0J6WTJWdVpTQjBhR0YwSUdsemJpZDBJR04xY25KbGJuUnNlU0IwY21GdWMybDBhVzl1YVc1bklHOTFkRnh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJR2x1YzNSaGJtTmxMbk5qWlc1bGN5NXNaVzVuZEdnN0lHa3RMVHNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hVzV6ZEdGdVkyVXVjMk5sYm1WelcybGRMblJ5WVc1emFYUnBiMjVUZEdGMFpTQWhQVDBnVTJObGJtVlVjbUZ1YzJsMGFXOXVVM1JoZEdVdVQzVjBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbHVjM1JoYm1ObExuTmpaVzVsYzF0cFhTNTFjR1JoZEdVb1pIUXNJQzR1TG1GeVozTXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlZjR1JoZEdVZ1lXeHNJSE5qWlc1bElIUnlZVzV6YVhScGIyNXpYRzRnSUNBZ0lDQWdJQ0FnSUNCcGJuTjBZVzVqWlM1elkyVnVaWE11Wm05eVJXRmphQ2h6WTJWdVpTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJObGJtVXVkWEJrWVhSbFZISmhibk5wZEdsdmJpaGtkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRkpsYlc5MlpTQmhibmtnWkdsemNHOXpaV1FnYzJObGJtVnpYRzRnSUNBZ0lDQWdJQ0FnSUNCcGJuTjBZVzVqWlM1elkyVnVaWE1nUFNCcGJuTjBZVzVqWlM1elkyVnVaWE11Wm1sc2RHVnlLSE5qWlc1bElEMCtJQ0Z6WTJWdVpTNWthWE53YjNObFpDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVbVZ1WkdWeUlITmpaVzVsY3lCdmJpQjBhR1VnYzJOeVpXVnVYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2MzUmhkR2xqSUdSeVlYY29ZMjl1ZEdWNGRDd2dMaTR1WVhKbmN5a2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnBibk4wWVc1alpTQTlJRk5qWlc1bFRXRnVZV2RsY2k1blpYUkpibk4wWVc1alpTZ3BPMXh1SUNBZ0lDQWdJQ0F2THlCR2FXZDFjbVVnYjNWMElIZG9hV05vSUhOalpXNWxjeUIzWlNCdVpXVmtJSFJ2SUdSeVlYZGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pISmhkMHhwYzNRZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlHbHVjM1JoYm1ObExuTmpaVzVsY3k1c1pXNW5kR2c3SUdrdExUc3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhOalpXNWxJRDBnYVc1emRHRnVZMlV1YzJObGJtVnpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaSEpoZDB4cGMzUXVjSFZ6YUNoelkyVnVaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGNtRnVjMmwwYVc5dWFXNW5MQ0IwYUdseklITmpaVzVsSUdseklHRnpjM1Z0WldRZ2RHOGdZbVVnZEhKaGJuTndZWEpsYm5SY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUNoM1pTQnRhV2RvZENCM1lXNTBJSFJ2SUhOb2IzY2dkR2hsSUhOalpXNWxJSFZ1WkdWeWJtVmhkR2dnYVdZZ2QyVW5jbVVnWkc5cGJtY2daUzVuTGlCaElHWmhaR1VwWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVhOalpXNWxMblJ5WVc1emNHRnlaVzUwSUNZbVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MyTmxibVV1ZEhKaGJuTnBkR2x2YmxOMFlYUmxJRDA5UFNCVFkyVnVaVlJ5WVc1emFYUnBiMjVUZEdGMFpTNU9iMjVsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnTHk4Z1JISmhkeUIwYUdVZ2MyTmxibVZ6SUdsdUlHSnZkSFJ2YlNBdFBpQjBiM0FnYjNKa1pYSmNiaUFnSUNBZ0lDQWdaSEpoZDB4cGMzUXVjbVYyWlhKelpTZ3BMbVp2Y2tWaFkyZ29jMk5sYm1VZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2MyTmxibVV1WkhKaGR5aGpiMjUwWlhoMExDQXVMaTVoY21kektUdGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1ZlZ4dVpYaHdiM0owY3k1a1pXWmhkV3gwSUQwZ1UyTmxibVZOWVc1aFoyVnlPMXh1WTJ4aGMzTWdVMk5sYm1VZ2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHOXdkR2x2Ym5NcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1a1pXWmhkV3gwVDNCMGFXOXVjeUE5SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJ5WVc1emFYUnBiMjVVYVcxbE9pQXlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RISmhibk53WVhKbGJuUTZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRISmhibk5wZEdsdmJsTjBZWFJsSUQwZ1UyTmxibVZVY21GdWMybDBhVzl1VTNSaGRHVXVUbTl1WlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwY21GdWMybDBhVzl1UVcxdmRXNTBJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwY21GdWMybDBhVzl1VkdsdFpTQTlJREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkSEpoYm5Od1lYSmxiblFnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWthWE53YjNObFpDQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCaFkzUjFZV3hQY0hScGIyNXpJRDBnVDJKcVpXTjBMbUZ6YzJsbmJpaDdmU3dnZEdocGN5NWtaV1poZFd4MFQzQjBhVzl1Y3l3Z2IzQjBhVzl1Y3lrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZEhKaGJuTnBkR2x2YmxScGJXVWdQU0JoWTNSMVlXeFBjSFJwYjI1ekxuUnlZVzV6YVhScGIyNVVhVzFsTzF4dUlDQWdJQ0FnSUNCMGFHbHpMblJ5WVc1emNHRnlaVzUwSUQwZ1lXTjBkV0ZzVDNCMGFXOXVjeTUwY21GdWMzQmhjbVZ1ZER0Y2JpQWdJQ0I5WEc0Z0lDQWdaR2x6Y0c5elpTZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWthWE53YjNObFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnZlZ4dUlDQWdJSFJ5WVc1emFYUnBiMjVKYmlncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1MGNtRnVjMmwwYVc5dVUzUmhkR1VnUFNCVFkyVnVaVlJ5WVc1emFYUnBiMjVUZEdGMFpTNUpianRjYmlBZ0lDQjlYRzRnSUNBZ2RISmhibk5wZEdsdmJrOTFkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwY21GdWMybDBhVzl1VTNSaGRHVWdQU0JUWTJWdVpWUnlZVzV6YVhScGIyNVRkR0YwWlM1UGRYUTdYRzRnSUNBZ2ZWeHVJQ0FnSUhWd1pHRjBaVlJ5WVc1emFYUnBiMjRvWkhRcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1lXMXZkVzUwSUQwZ1pIUWdMeUIwYUdsekxuUnlZVzV6YVhScGIyNVVhVzFsTzF4dUlDQWdJQ0FnSUNBdkx5QlVjbUZ1YzJsMGFXOXVhVzVuSUdsdVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuUnlZVzV6YVhScGIyNVRkR0YwWlNBOVBUMGdVMk5sYm1WVWNtRnVjMmwwYVc5dVUzUmhkR1V1U1c0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5SeVlXNXphWFJwYjI1QmJXOTFiblFnUENBeEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1MGNtRnVjMmwwYVc5dVFXMXZkVzUwSUQwZ1kyeGhiWEFvZEdocGN5NTBjbUZ1YzJsMGFXOXVRVzF2ZFc1MElDc2dZVzF2ZFc1MEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11ZEhKaGJuTnBkR2x2YmxOMFlYUmxJRDBnVTJObGJtVlVjbUZ1YzJsMGFXOXVVM1JoZEdVdVRtOXVaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0F2THlCVWNtRnVjMmwwYVc5dWFXNW5JRzkxZEZ4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1MGNtRnVjMmwwYVc5dVUzUmhkR1VnUFQwOUlGTmpaVzVsVkhKaGJuTnBkR2x2YmxOMFlYUmxMazkxZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11ZEhKaGJuTnBkR2x2YmtGdGIzVnVkQ0ErSURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5SeVlXNXphWFJwYjI1QmJXOTFiblFnUFNCamJHRnRjQ2gwYUdsekxuUnlZVzV6YVhScGIyNUJiVzkxYm5RZ0xTQmhiVzkxYm5RcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVrYVhOd2IzTmxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzU5WEc1bGVIQnZjblJ6TGxOalpXNWxJRDBnVTJObGJtVTdYRzR2THlNZ2MyOTFjbU5sVFdGd2NHbHVaMVZTVEQxa1lYUmhPbUZ3Y0d4cFkyRjBhVzl1TDJwemIyNDdZbUZ6WlRZMExHVjVTakphV0VwNllWYzVkVWxxYjNwTVEwcHRZVmQ0YkVscWIybGhWelZyV2xobmRXRnVUV2xNUTBwNllqTldlVmt5VmxOaU1qa3dTV3B2YVVscGQybGpNamt4WTIxT2JHTjVTVFpYZVVsMVRHazVjR0p0VW14bFF6VXdZM2xLWkV4RFNuVlpWekZzWTNsSk5sY3hNSE5KYlRGb1kwaENjR0p0WkhwSmFtOXBUM3B6TjFGVlJscFJVM2hLVVZWR1dreEhPVU5SVld4WlR6QkdRbE5yVVhOV01FWkNWMU40ZGxGclJrSmlNRWszVTFWR1JFOVZTWE5OYTFKQ1VWVlZjMUV3UmtKUlZIUktVVlZPUjB4RVdrVlJWVVpJVEVWT1FsRlZSVGRUVlVaRVUwTjNjbEpGUmtKVFUzaEVVVlZHUWs4d1JrSlJNRFJ6VVRCR1FsRjVlRVpSVlhCWVRFYzVRMUZWUm5aUmFYaElVVlZHZDFGcGR6QlJhMFpDWWpCSmMxTXdSa0pqUlVselRrVktRbEZYT1VOTVJrWkNVMU01UTA4d1JrSlNWVkZ6VlRCR1FsVjVlRXhSVlVaTVRFVk9RbEZWVFhOUk1FWkNWWGw0UmxGVlJrWk1SV1JDVVZWamMxSXdSa0pTZVhoRVVWVkdSRXhGVmtKUlZWVnpVakJHUWxKNWVFaFJWVVpJVEVWT1FsRlZUVGRUVlVaRVpVVk5jMVF3UmtKVWVYaEVVVlZHUkV4RlpFSlJWV056VWpCR1FsSjVlRVJSVlVaRVRFVk9RbEZWVFhOUk1FWkNVWGw0U0ZGVlJraE1SVTVDVVZWTmMxRXdSa0pSZVhoRVVWVkdSRXhGVGtKUlZVMXpVVEJHUWxGNWVFaFJWVVpJVEVWa1FsRlZZM05STUVaQ1VYbDRSRkZWUmtSTVJVNUNVVlZOYzFJd1JrSlNlWGhFVVZWR1JFeEZUa0pSVlUxelVUQkdRbEY1ZUVSUlZVWkVURVZPUWxGVlRYTlJNRVpDVVhwMFFsRlZUVE5SZVhoRVVWVkdSRTh3UmtKU1ZWRnpWRlZHUW1OVlNYTlhWVVpDVjFSMFNsRlZjM1pSYW5SU1VWVmFVa3hHWkVKUlZUQnpVakJHUWxkVGVFWlJWVVpHVEVWT1FsRlZUVGRUVlVaR1ZHbDRSRkZWUmtSUE1HeENVbGhvUTA5NmRGQlJWVlpJVHpCc1FsRXdhM05VVlVaQ1ZGTjRSRkZWUmtSTVJsWkNVVlpWTjFWVlJrUmtSVWx6VTFWR1FsTlRlRnBSVlVaYVRFVk9RbEZWVFhOVlZVWkNWVk40UmxGVlJrWlBNV3hDVVROd1EweEZNVUpSVlRCelUxVkdRbE5UZUV4UlZVWk1URVZPUWxGVlRYTmhNRTVDVVZkMFJFeEZUa0pSVlUxelVUQkdRbEY2ZEZSUlZVNTVVa1IwVWxGVlRrVk1SbXhDVVZacmMxRXdSa0pSZVhoU1VWVkdVa3hGWkVKUlZXTnpVMVZHUWxOVGVGcFJWVVphVEVWV1FsRlZWWE5STUVaQ1VYcDBTbEZWVFROUmVYaEVVVlZHUkU4d2JFSlNWVGh6VkZWR1FsUlRlRVJSVlVaRVRFWmtRbEZXWXpkVlZVWkVaVVZKYzFOVlJrSlRVM2hFVVZWR1JFeEdiRUpSVm10elVUQkdRbEY1ZUZKUlZVWlNURVZXUWxGVlZUZFhWVVpFVFZWSmMxUlZSa0pVVTNoS1VWVkdTa3hGZEVKUlZYTnpVVEJHUWxGNWVERlJNRVpDWkZWTmMxRXdSa0pSZVhoRVVWVkdSRTh4VGtKUmVrWkZUekZHUWxKVlVYTlVNRVpDVkhsNFdsRlZSbHBNUlU1Q1VWVk5jMVZWUmtKVlUzaEVVVlZHUkU4d2JFSlJlVGxEVEVWT1FsRlZUVGRUVlVaR1VrUnpOMVF3UmtaU2VuUktVVlZPU2t4Rk1VSlJWVEJ6VVRCR1FsRjVlRXBSVlVaS1RFVk9RbEZWVFhOVE1FWkNWMVIwVWxGVlRUTlJhWGhPVVZWR1RreEdSa0pSVmtWelVqQkdRbEo1ZUZwUlZVWmFURVZPUWxGVlRYTldNRVpDVm5sNFJsRlZSa1pNUlU1Q1VWVk5OMVZWUmtaT1ZVMXpWVlZHUWxWVGVFUlJWVVpFVEVVeFFsRlZNSE5STUVaQ1VYbDRTbEZWUmtwTVJVNUNVVlZOYzFNd1JrSlRlWGhFVVZWR1JFeEZUa0pSVlUwM1ZWVkdSazVWU1hOYU1GSkNVVmRrUlU4eFJrSlJNbWhGVEVWMFFsRlZjM05STUVaQ1VYbDRWbEZWUmxaTVJWWkNVVlZWYzFFd1JrSlJlblJTVVZWT2RWRnBlRXhSVlVaTVRFVk9RbEZWVFhOWFZVWkNWMU40UmxGVlJrWk1SVTVDVVZWTk4xVlZSa1JqYTBselZEQkdRbFI1ZUV4UlZVWk1URVZPUWxGVlRUZFRWVVpFV21sNFJGRlZSa1JQTUd4Q1VsVlJOMDh3T1VKU1ZXTTNVMVZHUkZOVGVFNVJWVVpPVEVWT1FsRlZUWE5TTUVaQ1VucDBVbEZWVG0xTVJURkNVVlV3YzFWVlJrSlZVM2hJVVZWR1NFeEdiRUpSVm10elVUQkdRbEY1ZUZoUlZVWllURVZXUWxGVlZYTlJNRVpDVVhwMFVsRlZWVEZSZVhoS1VWVkdTa3hHUmtKUlZrVnpVVEJHUWxGNWVFNVJWVVpPVEVWT1FsRlZUWE5VVlVaQ1ZGTjRTRkZWUmtoTVJVNUNVVlZOYzFKVlJrSlNWSFJhVVZWTk5WRnBlRXBSVlVaS1RFVnNRbEZWYTNOU01FWkNWbmw0VWxGVlJsSk1SVTVDVVZWTmMxUlZSa0pVVTNoRVVWVkdSRXhGTVVKUlZUQnpVakJHUWxKNWVFUlJWVVpFVEVWT1FsRlZUVGRYVlVaR1QxVk5jMkpWVmtKUlZ6RkdUekZzUWxFeU5VWk1SVGxDVVRCVmMxTlZSa0pUVTNoSVVWVkdTRXhGVGtKUlZVMDNXakJLUWxFeFNYTlZWVVpDVlZONFJGRlZSa1JNUlRGQ1VWVXdjMUV3UmtKUmVYaEtVVlZHU2t4RlRrSlJWVTF6VVRCR1FsRjVlR3hSVlVac1RFVjBRbEZWYzNOaU1FcENVVmM1UTB4RlRrSlJWVTF6VWpCR1FsSjVlRVpSVlU1elVsUjBibEZyUmtSUlUzaEtVVlZHU2t4RlZrSlJWVlZ6VVRCR1FsRjZkR2hSVlU1VFR6RnNRbEV3VVhOVFZVWkNVMU40U2xGVlJrcE1SV3hDVVZWcmMxRXdSa0pSZVhoR1VWVkdSazh5WkVOUlZVNXBURVV4UWxGVk1ITlRNRVpDVTNsNFNGRlZSa2hNUmtaQ1VWWkZjMUV3UmtKUmVYaE9VVlZHVGt4RlRrSlJWVTF6VTFWR1FsTlRlRVJSVlVaRVRFVk9RbEZWVFRkYU1FcENVbGhDUkV4RVFrTlJWVVYzVVdwMGJsRnJSa1JOVlVselV6QkdRbE41ZUVSUlZVWkVURWRHUWxGWFJYTlNWVVpDVWxONFJGRlZSa1JQTW1SRFVWVk9NRkZwZUZCUlZVWlFURVYwUWxGVmMzTlJNRVpDVVhwMGFGRlZUbXRQTVU1Q1VUQlpOMVZWUmtaU1EzaFFVVlZHVUV4R1RrSlJWazF6VVRCR1FsRjZkRXBSVlU1MVVXbDRSRkZWUmtSUE1HeENVbFZSTjA4d09VSlNWV00zVTFWR1JGTlRlRTVSVlVaT1RFVk9RbEZWVFhOVE1FWkNVM3AwVWxGVlRuRlJhWGhPVVZWR1RreEdSa0pSVmtWelVqQkdRbEo1ZUZwUlZVWmFURVZPUWxGVlRYTldNRVpDVm5sNFJsRlZSa1pNUlU1Q1VWVk5OMVZWUmtaT1ZVMXpWVlZHUWxWVGVFUlJWVVpFVEVVeFFsRlZNSE5STUVaQ1VYbDRVRkZWUmxCTVJVNUNVVlZOYzFNd1JrSlRlWGhFVVZWR1JFeEZWa0pSVlZVM1YxVkdSRTlWU1hOVFZVWkNVMU40VEZGVlJreE1SVTVDVVZWTmMxcFZSa0phVTNoTVVWVkdURXhIT1VOUlZVWjJVV2w0UkZGVlJrUk1SV1JDVVZWamMxSlZSa0pTVkhSdVVXdEdSR1JGVVhOVE1FWkNVM2w0UkZGVlJrUk1SMFpDVVZkRmMxSlZSa0pTVTNoRVVWVkdSRTh5UmtKUk0xcERUekZHUWxFd1ozTlJNRVpDVVhsNFJGRlZSa1JNUlU1Q1VWVk5OMU5WUmtSVVEzaEVVVlZHUkU4d2JFSlNWVkUzVHpBNVFsSlZZemRUVlVaRVUxTjRUbEZWUms1TVJVNUNVVlZOYzFSVlJrSlVVM2hFVVZWR1JFeEZWa0pSVmxWelVsVkdRbEpUZUVoUlZVWklURVZzUWxGV1l6ZFZWVVpFVGpCTmMxUlZSa0pVVTNoU1VWVkdVa3hGWkVKUlZXTnpWMVZHUWxkVGVFUlJWVVpFVEVaa1FsRldZM05TVlVaQ1VsTjRSRkZWUmtSUE1VWkNVbFJXUkV4RmJFSlJWV3R6VlZWR1FsVlRlRVJSVlVaRVRFVXhRbEZWTUhOUk1FWkNVWGw0VGxGVlJrNU1SV1JDVVZWamMxRXdSa0pSZVhoR1VWVkdSazh4YkVKUmVteERURWhrUmxGVlJqTlNWSFJhVVZWT05GSlRlRXhSVlVaTVRFVnNRbEZWYTNOUk1FWkNVWGw0U0ZGVlJraE1Sa1pDVVZaRmMxRXdSa0pSZVhoT1VWVkdUa3hGVGtKUlZVMXpWRlZHUWxSVGVFWlJWVVpHVEVWT1FsRlZUWE5TVlVaQ1VsTjRTRkZWUmtoUE1tUkRVVlZPTmxGNWVFcFJWVVpLVEVaR1FsRldSWE5STUVaQ1VYbDRUbEZWUms1TVJVNUNVVlZOYzFFd1JrSlJlWGhFVVZWR1JFeEZUa0pSVlUxeldsVkdRbHBUZUV4UlZVWk1URWM1UTFGVlJuWlJhWGhFVVZWR1JFeEZaRUpSVldOelVsVkdRbEpVZEhaUmEwWkVZbXRWYzFWVlJrSlZVM2hFVVZWR1JFeEZNVUpSVlRCelVUQkdRbEY1ZUVSUlZVWkVURVZPUWxGVlRYTlJNRVpDVVhsNFRsRlZSazVNUlU1Q1VWVk5jMUpWUmtKU1UzaEdVVlZHUmt4RlpFSlJWV056VTFWR1FsTlRlRVJSVlVaRVRFVk9RbEZWVFRkaU1FcENVVE5hUkV4Rk1VSlJWVEEzWVZWS1FsRXhRVGRaVlVaRVVtcDBXbEZWVmtWTVEzUkRVVlZGY2xGcWRGcFJWVTEyVVdsNFVsRlZSbEpNUlU1Q1VWVk5jMVJWUmtKVVUzaEVVVlZHUkV4Rk9VSlJWVGh6VVRCR1FsRjVlRXhSVlVaTVRFVk9RbEZWVFhOU1ZVWkNVbFIwYmxGclJrUlBWVWx6VXpCR1FsTjVlRVJSVlVaRVRFZGtRMUZWUm01UmFYaEVVVlZHUkV4RlZrSlJWVlZ6VVRCR1FsRjVlRVJSVlVaRVR6RnNRbEY2WkVOTVJVNUNVVlZOYzFFd1JrSlJlWGhFVVZWR1JFOHhiRUpTVldkelRtdEtRbEZVV2tOUE1XeENVWHBrUTB4R1JrSlJWa1Z6VVRCR1FsRjVlRTVSVlVaT1RFVmtRbEZWWTNOVlZVWkNWVk40UkZGVlJrUk1SVEZDVVZVd2MxRXdSa0pSZVhoT1VWVkdUa3hGVGtKUlZVMXpVekJHUWxONWVFUlJWVVpFVEVWV1FsRlZWWE5STUVaQ1VYbDRSRkZWUmtSTVJYUkNVVlZ6YzFFd1JrSlJlWGhTVVZWR1VreEZUa0pSVlUxelVUQkdRbEY2ZEZSUlZVNTNVbFIwU2xGVlRrbE1SVTVDVVZWTk4xTlZSa1pTUkhNM1ZEQkdSbEo2ZEVwUlZVNUtURVV4UWxGVk1ITlJNRVpDVVhsNFNsRlZSa3BNUlU1Q1VWVk5jMVF3UmtKaFZVMXpVbFZHUWxKVGVFaFJWVVpJVEVWc1FsRldZemRWVlVaRVlrVlZjMVJWUmtKVVUzaFNVVlZHVWt4RlpFSlJWV056VjFWR1FsZFRlRVJSVlVaRVRFWmtRbEZXWTNOU1ZVWkNVbE40UkZGVlJrUlBNVVpDVWxSV1JFeEVRa1JSVlVWM1VYcDBVbEZWVFhoUmVYaE9VVlZHVGt4R1JrSlJWa1Z6VWpCR1FsZFRlRVpSVlVaR1RFVk9RbEZWVFRkVlZVWkVUakJKYzFNd1JrSlRlWGhLVVZWR1NreEZUa0pSVlUxelVqQkdRbEo1ZUZKUlZVWlNURVZPUWxGVlRYTlVWVVpDVkZONFJGRlZSa1JNUlRGQ1VWVXdjMUpWUmtKU1UzaEVVVlZHUkV4RlZrSlJWVlZ6VWpCR1FsSjZkRnBSVlU0MlVYbDRUbEZWUms1TVJYUkNVVlZ6YzFJd1JrSlNlWGhTVVZWR1VreEZUa0pSVlUxelZGVkdRbFJUZUVSUlZVWkVURVZPUWxGVlRYTlJNRVpDVVhsNFJGRlZSa1JQTVd4Q1VUSndSRXhHUmtKUlZrVnpVVEJHUWxGNWVFcFJWVVpLVEVWT1FsRlZUWE5UTUVaQ1UzbDRSRkZWUmtSTVJVNUNVVlZOTjFkVlJrWmphMGx6VGtWU1FsRlVVa1ZQTVd4Q1VYcFdSVXhFUWtaUlZVVjNVbFIwV2xGVlRYaFNVM2hLVVZWT1JreEZUa0pSVlUxelV6QkdRbE41ZUVSUlZVWkVURVprUWxGV1l6ZGFNRXBDVVRKNFEweEZkRUpSVlhOelVUQkdRbEY1ZUd4UlZVWnNURVYwUWxGVmMzTmlNRXBDVVZjNVEweEZUa0pSVlUxelUxVkdRbE5UZUVaUlZVNTFVa1IwYmxGclJrUlJVM2hPVVZWR1RrOHlSa0pSTVVFM1ZUQkdSRkpxZEZKUlZWWkZURWhzUkZGVlJqVlJlblJTVVZWT05sRjVlRkpSVlVaU1RFVk9RbEZWVFhOVU1FWkNWSGw0UmxGVlJrWk1SVTVDVVZWTmMxUXdSa0pVZVhoRVVWVkdSRXhGZEVKUlZYTnpVVEJHUWxGNWVFWlJWVVpHVHpGc1FsRXljRVJNUlhSQ1VWVnpjMUV3UmtKUmVYaEtVVlZHU2t4RlRrSlJWVTF6VkRCR1FsUjVlRVpSVlVaR1RFVmtRbEZWWTNOVFZVWkNVMU40UkZGVlJrUk1SVTVDVVZWTk4xVlZSa1JNTUVselVUQkdRbEY1ZUVSUlZVWkVURVZPUWxGVlRUZFRWVVpFVkVONFJGRlZSa1JQTUU1Q1VUQlpOMUZWUm5kVFZWRnpTekJLUW1Jd2JFUlBNRVpDVWxWUmMxUlZSa0pqTUVselV6QkdRbE42ZEVwUlYyUkRaV3RKYzFkVlJrSmlWVWx6VkRCR1Frc3dTVGRWVlVadFlXdE5jMkpWU2tKUlYwMXpVakJHUW1GVlNUZFhWVVpFVDFWTmMxa3dSa0paZVhoR1VWVkdSa3hGVGtKUlZVMDNWMVZHUkdGclNYTldNRVpDVm5sNFJsRlZSa1pNUld4Q1VWVnJOMVV3UmtSaVJVbHpVVEJHUWxGNmRGSlJWVlpNVEVjNVExRlZSbXhNUldSQ1VWaHNRMHhIT1VOUlZVWjJVV2w0UkZGVlJrUk1SV3hDVVZWcmMxRXdSa0pSZW5SU1VWVldjMUpUZUhoUmEwWkNXakJKYzFJd1JrSldlWGhFVVZWR1JFeEZUa0pSVlUwM1ZWVkdSazR3U1hOaVZVcENVVmROYzFJd1JrSldlWGhFVVZWR1JFeEZUa0pSVlUwM1ZWVkdSazB3U1hOYU1FcENVVlpqYzFJd1JrSlhVM2hNVVZWR1RFeEZUa0pSVlUwM1ZWVkdSazR3U1hOWlZVWkNWVk40U0ZGVlJscE1SWFJDVVZWemMxRXdSa0pSZW5SU1VWVmpkbEZwZUU1UlZVWk9URWRHUWxGWFJYTlNNRVpDVW5sNFRsRlZSazVNUlU1Q1VWVk5jMVJWUmtKVVUzaEVVVlZHUkV4RlZrSlJWVlZ6VWxWR1FsSlRlRXBSVlVaS1RFVk9RbEZWVFhOWk1FWkNXWGw0UmxGVlJrWk1SVGxDVVZVNGMxRXdSa0pSZVhoRVVWVkdSRTh4UmtKUk0xSkdURVZzUWxGVmEzTlJNRVpDVVhsNGFsRlZSbXBNUldSQ1VWVmpjMWxWUmtKWlUzaEVVVlZHUkV4SFRrSlJWMDF6VVRCR1FsRjZkRkpSVlU1MVVrTjRTbEZWUmtwTVJVNUNVVlZOYzFZd1JrSldlWGhJVVZWR1NFeEhSa0pSVjBWelVUQkdRbEY1ZUZoUlZVWllURVZPUWxGVlRUZFRWVVpFVERCTmMxRXdSa0pSZW5SS1VWVldUa3hGT1VKUlZUZzNWVlZHUkZkcGVFcFJWVVpLVEVWT1FsRlZUWE5WVlVaQ1ZWTjRTRkZWUmtoTVJXeENVVlZyYzFFd1JrSlJlblJLVVZWT01sRnBlRVJSVlVaRVR6QnNRbEpWTUhOWFZVWkNWMVIwVWxGVlRuRlJhWGhLVVZWR1NreEZUa0pSVlUxeldsVkdRbHBUZUVoUlZVWklURWM1UTFGVlJuWlJhWGhFVVZWR1JFeEZWa0pSVlZWelVUQkdRbEY2ZEVwUlZVNXhVa040UkZGVlJrUlBNR3hDVWxVd2MxbFZSa0paVkhSU1VWVk9jMUZwZUVwUlZVWktURVZPUWxGVlRYTmFWVVpDV2xONFNGRlZSa2hNUnpsRFVWVkdkbEZwZUVSUlZVWkVURVZrUWxGVlkzTlJNRVpDVVhwMFNsRlZUbk5TUTNoRVVWVkdSRTh3YkVKU1ZUQnpXakJLUWxGWFpFTk1SVTVDVVZWTmMxSlZSa0pXVkhSU1VWVk9iMUY1ZUU1UlZVWk9URVV4UWxGVk1ITlNNRVpDVm5sNFJsRlZSa1pNUldSQ1VWVmpjMU5WUmtKVFUzaEVVVlZHUkV4SFRrSlJWMDF6VVRCR1FsRjZkRkpSVlZadlVrTjRkRkZyUmtKaVZVazNWVlZHUkdKclNYTlRWVVpDVTFONFNsRlZSa3BNUlU1Q1VWVk5jMXBWUmtKYVUzaE1VVlZHVEV4SE9VTlJWVVoyVVdsNFJGRlZSa1JNUlZaQ1VWVlZjMUpWUmtKU1ZIUmFVVlZPZDFKRGVFcFJWVVpLVEVWc1FsRlZhM05STUVaQ1VYbDRibEZyUmtKYU1FbHpVakJHUWxKNWVFUlJWVVpFVEVWV1FsRlZWVGRhTUVwQ1VYcGtRMHhGYkVKUlZXdHpVVEJHUWxGNWVHNVJhMFpDV2pCSmMxSXdSa0pTZVhoTVVWVkdURXhGVGtKUlZVMXpVMVZHUWxOVGVFUlJWVVpFVEVka1ExRlZSbTVSYVhoSVVWVkdTRXhGTVVKUlZUQnpVVEJHUWxGNWVFUlJWVVpFVHpKR1FsRjVPVVZQTW14RFVWVkdUazh5WkVOUlZVNU5URVZzUWxGVmEzTlJNRVpDVVhsNGJGRlZSbXhNUldSQ1VWVmpjMkl3U2tKUlZ6bERURVZPUWxGVlRYTlRWVVpDVTFONFJGRlZSa1JQTWtaQ1VUSjRSVTh4VGtKUk1GazNWVlZHUmxKRGVIWlJhMFpDWWpCSk4xVlZSa1JqUlVselUxVkdRbE5UZUVwUlZVWktURVZPUWxGVlRYTmFWVVpDV2xONFRGRlZSa3hNUnpsRFVWVkdkbEZwZUVSUlZVWkVURVZrUWxGVlkzTlNWVVpDVWxSMFdsRlZUbmxTUTNoS1VWVkdTa3hGYkVKUlZXdHpVVEJHUWxGNWVHNVJhMFpDV2pCSmMxSXdSa0pTZVhoRVVWVkdSRXhGVmtKUlZWVTNXakJLUWxGNlpFTk1SV3hDVVZWcmMxRXdSa0pSZVhodVVXdEdRbG93U1hOU01FWkNVbmw0VEZGVlJreE1SVTVDVVZWTmMxTlZSa0pUVTNoRVVWVkdSRXhIWkVOUlZVWnVVV2w0U0ZGVlJraE1SVEZDVVZVd2MxRXdSa0pSZVhoRVVWVkdSRTh5UmtKUmVUbEZUekpzUTFGVlJrNVBNbVJEVVZWT1RVeEZiRUpSVld0elVUQkdRbEY1ZUZCUlZVWlFURVZXUWxGVlZYTlJNRVpDVVhwMGFGRlZUbTlSYW5SVVVWVk9SMDh3YkVKUk1HZHpVVEJHUWxGNmRFUlJWVGxIVHpCR1FrNHdVa1ZNU0U1RFVWUmFSVkY1U2praUxDSWlMQ0l2THlCemRHRnlkSFZ3WEc0dkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaTh2SUZSb2FYTWdaVzUwY25rZ2JXOWtkV3hsSUdseklISmxabVZ5Wlc1alpXUWdZbmtnYjNSb1pYSWdiVzlrZFd4bGN5QnpieUJwZENCallXNG5kQ0JpWlNCcGJteHBibVZrWEc1MllYSWdYMTkzWldKd1lXTnJYMlY0Y0c5eWRITmZYeUE5SUh0OU8xeHVYMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYMXRjSWk0dmFXNWtaWGd1ZEhOY0lsMG9NQ3dnWDE5M1pXSndZV05yWDJWNGNHOXlkSE5mWHlrN1hHNGlMQ0lpWFN3aWJtRnRaWE1pT2x0ZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPSIsIi8qKlxuICogQG92ZXJ2aWV3IEEgbGlicmFyeSBvZiB1c2VmdWwgZnVuY3Rpb25zXG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIG51bWJlcnMgYXJlIGFwcHJveGltYXRlbHkgZXF1YWxcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIE51bWJlciBhXG4gKiBAcGFyYW0ge251bWJlcn0gYiBOdW1iZXIgYlxuICogQHBhcmFtIHtudW1iZXJ9IFtwPU51bWJlci5FUFNJTE9OXSBUaGUgcHJlY2lzaW9uIHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG51bWJlcnMgYSBhbmQgYiBhcmUgYXBwcm94aW1hdGVseSBlcXVhbFxuICovXG5jb25zdCBmbG9hdEVxdWFscyA9IChhLCBiLCBwID0gTnVtYmVyLkVQU0lMT04pID0+IE1hdGguYWJzKGEgLSBiKSA8IHA7XG5cbi8qKlxuICogQ2xhbXAgYSBudW1iZXIgYmV0d2VlbiBtaW4gYW5kIG1heFxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG51bWJlciB0byBjbGFtcFxuICogQHBhcmFtIHtudW1iZXJ9IFttaW49MF0gVGhlIG1pbmltdW0gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4PTFdIFRoZSBtYXhpbXVtIHZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgY2xhbXBlZCBudW1iZXJcbiAqL1xuY29uc3QgY2xhbXAgPSAoYSwgbWluID0gMCwgbWF4ID0gMSkgPT4gYSA8IG1pbiA/IG1pbiA6IChhID4gbWF4ID8gbWF4IDogYSk7XG5cbi8qKlxuICogR2V0IHRoZSBmcmFjdGlvbmFsIHBhcnQgb2YgYSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBudW1iZXIgZnJvbSB3aGljaCB0byBnZXQgdGhlIGZyYWN0aW9uYWwgcGFydFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgZnJhY3Rpb25hbCBwYXJ0IG9mIHRoZSBudW1iZXJcbiAqL1xuY29uc3QgZnJhYyA9IGEgPT4gYSA+PSAwID8gYSAtIE1hdGguZmxvb3IoYSkgOiBhIC0gTWF0aC5jZWlsKGEpO1xuXG4vKipcbiAqIFJvdW5kIG4gdG8gZCBkZWNpbWFsIHBsYWNlc1xuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciB0byByb3VuZFxuICogQHBhcmFtIHtudW1iZXJ9IFtkPTBdIFRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgdG8gcm91bmQgdG9cbiAqIEByZXR1cm4ge251bWJlcn0gQSByb3VuZGVkIG51bWJlclxuICovXG5jb25zdCByb3VuZCA9IChuLCBkID0gMCkgPT4ge1xuICBjb25zdCBwID0gTWF0aC5wb3coMTAsIGQpO1xuICByZXR1cm4gTWF0aC5yb3VuZChuICogcCArIE51bWJlci5FUFNJTE9OKSAvIHA7XG59XG5cbi8qKlxuICogRG8gYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZSwgc2hvdWxkIGJlIGluIHRoZSBpbnRlcnZhbCBbMCwgMV1cbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuY29uc3QgbGVycCA9IChhLCBiLCBpKSA9PiBhICsgKGIgLSBhKSAqIGk7XG5cbi8qKlxuICogR2V0IHRoZSBwb3NpdGlvbiBvZiBpIGJldHdlZW4gYSBhbmQgYlxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgcG9zaXRpb24gb2YgaSBiZXR3ZWVuIGEgYW5kIGJcbiAqL1xuY29uc3QgdW5sZXJwID0gKGEsIGIsIGkpID0+IChpIC0gYSkgLyAoYiAtIGEpO1xuXG4vKipcbiAqIERvIGEgYmlsaW5lYXIgaW50ZXJwb2xhdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGMwMCBUb3AtbGVmdCB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGMxMCBUb3AtcmlnaHQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMDEgQm90dG9tLWxlZnQgdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjMTEgQm90dG9tLXJpZ2h0IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gaXggSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB4XG4gKiBAcGFyYW0ge251bWJlcn0gaXkgSW50ZXJwb2xhdGlvbiB2YWx1ZSBhbG9uZyB5XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgYmlsaW5lYXIgaW50ZXJwb2xhdGVkIHZhbHVlXG4gKi9cbmNvbnN0IGJsZXJwID0gKGMwMCwgYzEwLCBjMDEsIGMxMSwgaXgsIGl5KSA9PiBsZXJwKGxlcnAoYzAwLCBjMTAsIGl4KSwgbGVycChjMDEsIGMxMSwgaXgpLCBpeSk7XG5cbi8qKlxuICogUmUtbWFwIGEgbnVtYmVyIGkgZnJvbSByYW5nZSBhMS4uLmEyIHRvIGIxLi4uYjJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBudW1iZXIgdG8gcmUtbWFwXG4gKiBAcGFyYW0ge251bWJlcn0gYTFcbiAqIEBwYXJhbSB7bnVtYmVyfSBhMlxuICogQHBhcmFtIHtudW1iZXJ9IGIxXG4gKiBAcGFyYW0ge251bWJlcn0gYjJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuY29uc3QgcmVtYXAgPSAoaSwgYTEsIGEyLCBiMSwgYjIpID0+IGIxICsgKGkgLSBhMSkgKiAoYjIgLSBiMSkgLyAoYTIgLSBhMSk7XG5cbi8qKlxuICogRG8gYSBzbW9vdGggaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIGEgYW5kIGJcbiAqIEBwYXJhbSB7bnVtYmVyfSBhIFRoZSBtaW5pbXVtIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGIgVGhlIG1heGltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgaW50ZXJwb2xhdGlvbiB2YWx1ZVxuICogQHJldHVybiB7bnVtYmVyfSBBbiBpbnRlcnBvbGF0ZWQgdmFsdWUgaW4gdGhlIGludGVydmFsIFthLCBiXVxuICovXG5jb25zdCBzbW9vdGhzdGVwID0gKGEsIGIsIGkpID0+IGxlcnAoYSwgYiwgMyAqIE1hdGgucG93KGksIDIpIC0gMiAqIE1hdGgucG93KGksIDMpKTtcblxuLyoqXG4gKiBHZXQgYW4gYW5nbGUgaW4gcmFkaWFuc1xuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXMgVGhlIGFuZ2xlIGluIGRlZ3JlZXNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqL1xuY29uc3QgcmFkaWFucyA9IGRlZ3JlZXMgPT4gKE1hdGguUEkgLyAxODApICogZGVncmVlcztcblxuLyoqXG4gKiBHZXQgYW4gYW5nbGUgaW4gZGVncmVlc1xuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnMgVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIGRlZ3JlZXNcbiAqL1xuY29uc3QgZGVncmVlcyA9IHJhZGlhbnMgPT4gKDE4MCAvIE1hdGguUEkpICogcmFkaWFucztcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gZmxvYXQgaW4gdGhlIGludGVydmFsIFttaW4sIG1heClcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gSW5jbHVzaXZlIG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBFeGNsdXNpdmUgbWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9IEEgcmFuZG9tIGZsb2F0IGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXgpXG4gKi9cbmNvbnN0IHJhbmRvbUJldHdlZW4gPSAobWluLCBtYXgpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcblxuLyoqXG4gKiBHZXQgYSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBJbmNsdXNpdmUgbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IEluY2x1c2l2ZSBtYXhcbiAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gaW50ZWdlciBpbiB0aGUgaW50ZXJ2YWwgW21pbiwgbWF4XVxuICovXG5jb25zdCByYW5kb21JbnRCZXR3ZWVuID0gKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuXG4vKipcbiAqIEdldCBhIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbXU9MC41XSBUaGUgbWVhbiB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IFtzaWdtYT0wLjVdIFRoZSBzdGFuZGFyZCBkZXZpYXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc2FtcGxlcz0yXSBUaGUgbnVtYmVyIG9mIHNhbXBsZXNcbiAqIEByZXR1cm4ge251bWJlcn0gQSBub3JtYWxseS1kaXN0cmlidXRlZCByYW5kb20gbnVtYmVyXG4gKi9cbmNvbnN0IGNsdFJhbmRvbSA9IChtdSA9IDAuNSwgc2lnbWEgPSAwLjUsIHNhbXBsZXMgPSAyKSA9PiB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAobGV0IGkgPSBzYW1wbGVzOyBpLS07KSB7XG4gICAgdG90YWwgKz0gTWF0aC5yYW5kb20oKTtcbiAgfVxuICByZXR1cm4gbXUgKyAodG90YWwgLSBzYW1wbGVzIC8gMikgLyAoc2FtcGxlcyAvIDIpICogc2lnbWE7XG59O1xuXG4vKipcbiAqIEdldCBhIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSBpbnRlcnZhbCBbbWluLCBtYXhdXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIEluY2x1c2l2ZSBtaW5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggSW5jbHVzaXZlIG1heFxuICogQHJldHVybiB7bnVtYmVyfSBBIG5vcm1hbGx5LWRpc3RyaWJ1dGVkIHJhbmRvbSBpbnRlZ2VyXG4gKi9cbmNvbnN0IGNsdFJhbmRvbUludCA9IChtaW4sIG1heCkgPT4gTWF0aC5mbG9vcihtaW4gKyBjbHRSYW5kb20oMC41LCAwLjUsIDIpICogKG1heCArIDEgLSBtaW4pKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB3ZWlnaHRlZCByYW5kb20gaW50ZWdlclxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB3IEFuIGFycmF5IG9mIHdlaWdodHNcbiAqIEByZXR1cm4ge251bWJlcn0gQW4gaW5kZXggZnJvbSB3XG4gKi9cbmNvbnN0IHdlaWdodGVkUmFuZG9tID0gdyA9PiB7XG4gIGxldCB0b3RhbCA9IHcucmVkdWNlKChhLCBpKSA9PiBhICsgaSwgMCksIG4gPSAwO1xuICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsO1xuICB3aGlsZSAodG90YWwgPiByKSB7XG4gICAgdG90YWwgLT0gd1tuKytdO1xuICB9XG4gIHJldHVybiBuIC0gMTtcbn07XG5cbi8qKlxuICogQW4gaW50ZXJwb2xhdGlvbiBmdW5jdGlvblxuICogQGNhbGxiYWNrIEludGVycG9sYXRpb25GdW5jdGlvblxuICogQHBhcmFtIHtudW1iZXJ9IGEgVGhlIG1pbmltdW0gbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYiBUaGUgbWF4aW11bSBudW1iZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBpbnRlcnBvbGF0aW9uIHZhbHVlLCBzaG91bGQgYmUgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgaW50ZXJwb2xhdGVkIHZhbHVlIGluIHRoZSBpbnRlcnZhbCBbYSwgYl1cbiAqL1xuXG4vKipcbiAqIFJldHVybiBhbiBpbnRlcnBvbGF0ZWQgdmFsdWUgZnJvbSBhbiBhcnJheVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBhIEFuIGFycmF5IG9mIHZhbHVlcyBpbnRlcnBvbGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGkgQSBudW1iZXIgaW4gdGhlIGludGVydmFsIFswLCAxXVxuICogQHBhcmFtIHtJbnRlcnBvbGF0aW9uRnVuY3Rpb259IFtmPU1hdGgubGVycF0gVGhlIGludGVycG9sYXRpb24gZnVuY3Rpb24gdG8gdXNlXG4gKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVycG9sYXRlZCB2YWx1ZSBpbiB0aGUgaW50ZXJ2YWwgW21pbihhKSwgbWF4KGEpXVxuICovXG5jb25zdCBsZXJwQXJyYXkgPSAoYSwgaSwgZiA9IGxlcnApID0+IHtcbiAgY29uc3QgcyA9IGkgKiAoYS5sZW5ndGggLSAxKTtcbiAgY29uc3QgcCA9IGNsYW1wKE1hdGgudHJ1bmMocyksIDAsIGEubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBmKGFbcF0gfHwgMCwgYVtwICsgMV0gfHwgMCwgZnJhYyhzKSk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gYSBWZWN0b3IgYVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xuY29uc3QgZG90ID0gKGEsIGIpID0+IGEucmVkdWNlKChuLCB2LCBpKSA9PiBuICsgdiAqIGJbaV0sIDApO1xuXG4vKipcbiAqIEdldCB0aGUgZmFjdG9yaWFsIG9mIGEgbnVtYmVyXG4gKiBAcGFyYW0ge251bWJlcn0gYVxuICogQHJldHVybiB7bnVtYmVyfSBhIVxuICovXG5jb25zdCBmYWN0b3JpYWwgPSBhID0+IHtcbiAgbGV0IHJlc3VsdCA9IDE7XG4gIGZvciAobGV0IGkgPSAyOyBpIDw9IGE7IGkrKykge1xuICAgIHJlc3VsdCAqPSBpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgbnVtYmVyIG9mIHBlcm11dGF0aW9ucyBvZiByIGVsZW1lbnRzIGZyb20gYSBzZXQgb2YgbiBlbGVtZW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEBwYXJhbSB7bnVtYmVyfSByXG4gKiBAcmV0dXJuIHtudW1iZXJ9IG5QclxuICovXG5jb25zdCBucHIgPSAobiwgcikgPT4gZmFjdG9yaWFsKG4pIC8gZmFjdG9yaWFsKG4gLSByKTtcblxuLyoqXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjb21iaW5hdGlvbnMgb2YgciBlbGVtZW50cyBmcm9tIGEgc2V0IG9mIG4gZWxlbWVudHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuXG4gKiBAcGFyYW0ge251bWJlcn0gclxuICogQHJldHVybiB7bnVtYmVyfSBuQ3JcbiAqL1xuY29uc3QgbmNyID0gKG4sIHIpID0+IGZhY3RvcmlhbChuKSAvIChmYWN0b3JpYWwocikgKiBmYWN0b3JpYWwobiAtIHIpKTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhbGwgY29tYmluYXRpb25zIG9mIHIgZWxlbWVudHMgZnJvbSBhbiBhcnJheVxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogY29tYmluYXRpb25zKFsxLCAyLCAzXSwgMik7XG4gKiBgYGBcbiAqXG4gKiBPdXRwdXQ6XG4gKiBgYGBqc29uXG4gKiBbXG4gKiAgIFsxLCAyXSxcbiAqICAgWzEsIDNdLFxuICogICBbMiwgM11cbiAqIF1cbiAqIGBgYFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IHIgVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBjaG9vc2UgaW4gZWFjaCBjb21iaW5hdGlvblxuICogQHJldHVybiB7QXJyYXk8QXJyYXk8Kj4+fSBBbiBhcnJheSBvZiBjb21iaW5hdGlvbiBhcnJheXNcbiAqL1xuY29uc3QgY29tYmluYXRpb25zID0gKGEsIHIpID0+IHtcbiAgaWYgKHIgPT09IDEpIHtcbiAgICByZXR1cm4gYS5tYXAoaXRlbSA9PiBbaXRlbV0pO1xuICB9XG5cbiAgcmV0dXJuIGEucmVkdWNlKFxuICAgIChhY2MsIGl0ZW0sIGkpID0+IFtcbiAgICAgIC4uLmFjYyxcbiAgICAgIC4uLmNvbWJpbmF0aW9ucyhhLnNsaWNlKGkgKyAxKSwgciAtIDEpLm1hcChjID0+IFtpdGVtLCAuLi5jXSksXG4gICAgXSxcbiAgICBbXVxuICApO1xufTtcblxuLyoqXG4gKiBHZXQgYSBjYXJ0ZXNpYW4gcHJvZHVjdCBvZiBhcnJheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIGNhcnRlc2lhbihbMSwgMiwgM10sIFsnYScsICdiJ10pO1xuICogYGBgXG4gKlxuICogT3V0cHV0OlxuICogYGBganNvblxuICogW1xuICogICBbMSwgXCJhXCJdLFxuICogICBbMSwgXCJiXCJdLFxuICogICBbMiwgXCJhXCJdLFxuICogICBbMiwgXCJiXCJdLFxuICogICBbMywgXCJhXCJdLFxuICogICBbMywgXCJiXCJdXG4gKiBdXG4gKiBgYGBcbiAqL1xuY29uc3QgY2FydGVzaWFuID0gKC4uLmFycikgPT5cbiAgYXJyLnJlZHVjZShcbiAgICAoYSwgYikgPT4gYS5mbGF0TWFwKGMgPT4gYi5tYXAoZCA9PiBbLi4uYywgZF0pKSxcbiAgICBbW11dXG4gICk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiBmb3IgZ2VuZXJhdGluZyBhcnJheSB2YWx1ZXNcbiAqIEBjYWxsYmFjayBUaW1lc0Z1bmN0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgYXJyYXkgaW5kZXhcbiAqIEByZXR1cm4geyp9IFRoZSBhcnJheSB2YWx1ZVxuICovXG5cbi8qKlxuICogUmV0dXJuIGEgbmV3IGFycmF5IHdpdGggbGVuZ3RoIG4gYnkgY2FsbGluZyBmdW5jdGlvbiBmKGkpIG9uIGVhY2ggZWxlbWVudFxuICogQHBhcmFtIHtUaW1lc0Z1bmN0aW9ufSBmXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PCo+fVxuICovXG5jb25zdCB0aW1lcyA9IChmLCBuKSA9PiBBcnJheShuKS5maWxsKDApLm1hcCgoXywgaSkgPT4gZihpKSk7XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGNvbnRhaW5pbmcgbnVtYmVycyAwLT4obiAtIDEpXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IEFuIGFycmF5IG9mIGludGVnZXJzIDAtPihuIC0gMSlcbiAqL1xuY29uc3QgcmFuZ2UgPSBuID0+IHRpbWVzKGkgPT4gaSwgbik7XG5cbi8qKlxuICogWmlwIDIgYXJyYXlzIHRvZ2V0aGVyLCBpLmUuIChbMSwgMiwgM10sIFthLCBiLCBjXSkgPT4gW1sxLCBhXSwgWzIsIGJdLCBbMywgY11dXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBiXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59XG4gKi9cbmNvbnN0IHppcCA9IChhLCBiKSA9PiBhLm1hcCgoaywgaSkgPT4gW2ssIGJbaV1dKTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXlbaV0gd2l0aCBwb3NpdGl2ZSBhbmQgbmVnYXRpdmUgd3JhcHBpbmdcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSBwb3NpdGl2ZWx5L25lZ2F0aXZlbHkgd3JhcHBlZCBhcnJheSBpbmRleFxuICogQHJldHVybiB7Kn0gQW4gZWxlbWVudCBmcm9tIHRoZSBhcnJheVxuICovXG5jb25zdCBhdCA9IChhLCBpKSA9PiBhW2kgPCAwID8gYS5sZW5ndGggLSAoTWF0aC5hYnMoaSArIDEpICUgYS5sZW5ndGgpIC0gMSA6IGkgJSBhLmxlbmd0aF07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBsYXN0IGVsZW1lbnQgb2YgYW4gYXJyYXkgd2l0aG91dCByZW1vdmluZyBpdFxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHJldHVybiB7Kn0gVGhlIGxhc3QgZWxlbWVudCBmcm9tIHRoZSBhcnJheVxuICovXG5jb25zdCBwZWVrID0gKGEpID0+IHtcbiAgaWYgKCFhLmxlbmd0aCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gYVthLmxlbmd0aCAtIDFdO1xufTtcblxuLyoqXG4gKiBDaG9wIGFuIGFycmF5IGludG8gY2h1bmtzIG9mIHNpemUgblxuICogQHBhcmFtIHtBcnJheTwqPn0gYVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIGNodW5rIHNpemVcbiAqIEByZXR1cm4ge0FycmF5PEFycmF5PCo+Pn0gQW4gYXJyYXkgb2YgYXJyYXkgY2h1bmtzXG4gKi9cbmNvbnN0IGNodW5rID0gKGEsIG4pID0+IHRpbWVzKGkgPT4gYS5zbGljZShpICogbiwgaSAqIG4gKyBuKSwgTWF0aC5jZWlsKGEubGVuZ3RoIC8gbikpO1xuXG4vKipcbiAqIFJhbmRvbWx5IHNodWZmbGUgYSBzaGFsbG93IGNvcHkgb2YgYW4gYXJyYXlcbiAqIEBwYXJhbSB7QXJyYXk8Kj59IGFcbiAqIEByZXR1cm4ge0FycmF5PCo+fSBUaGUgc2h1ZmZsZWQgYXJyYXlcbiAqL1xuY29uc3Qgc2h1ZmZsZSA9IGEgPT4gYS5zbGljZSgpLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG5cbi8qKlxuICogRmxhdHRlbiBhbiBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gKiBAcGFyYW0ge3N0cmluZ30gY29uY2F0ZW5hdG9yIFRoZSBzdHJpbmcgdG8gdXNlIGZvciBjb25jYXRlbmF0aW5nIGtleXNcbiAqIEByZXR1cm4ge29iamVjdH0gQSBmbGF0dGVuZWQgb2JqZWN0XG4gKi9cbmNvbnN0IGZsYXQgPSAobywgY29uY2F0ZW5hdG9yID0gJy4nKSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgaWYgKG9ba2V5XSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgW2tleV06IG9ba2V5XS50b0lTT1N0cmluZygpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9ba2V5XSAhPT0gJ29iamVjdCcgfHwgIW9ba2V5XSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICBba2V5XTogb1trZXldLFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgZmxhdHRlbmVkID0gZmxhdChvW2tleV0sIGNvbmNhdGVuYXRvcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWNjLFxuICAgICAgLi4uT2JqZWN0LmtleXMoZmxhdHRlbmVkKS5yZWR1Y2UoXG4gICAgICAgIChjaGlsZEFjYywgY2hpbGRLZXkpID0+ICh7XG4gICAgICAgICAgLi4uY2hpbGRBY2MsXG4gICAgICAgICAgW2Ake2tleX0ke2NvbmNhdGVuYXRvcn0ke2NoaWxkS2V5fWBdOiBmbGF0dGVuZWRbY2hpbGRLZXldLFxuICAgICAgICB9KSxcbiAgICAgICAge31cbiAgICAgICksXG4gICAgfTtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBVbmZsYXR0ZW4gYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHtzdHJpbmd9IGNvbmNhdGVuYXRvciBUaGUgc3RyaW5nIHRvIGNoZWNrIGZvciBpbiBjb25jYXRlbmF0ZWQga2V5c1xuICogQHJldHVybiB7b2JqZWN0fSBBbiB1bi1mbGF0dGVuZWQgb2JqZWN0XG4gKi9cbmNvbnN0IHVuZmxhdCA9IChvLCBjb25jYXRlbmF0b3IgPSAnLicpID0+IHtcbiAgbGV0IHJlc3VsdCA9IHt9LCB0ZW1wLCBzdWJzdHJpbmdzLCBwcm9wZXJ0eSwgaTtcblxuICBmb3IgKHByb3BlcnR5IGluIG8pIHtcbiAgICBzdWJzdHJpbmdzID0gcHJvcGVydHkuc3BsaXQoY29uY2F0ZW5hdG9yKTtcbiAgICB0ZW1wID0gcmVzdWx0O1xuICAgIGZvciAoaSA9IDA7IGkgPCBzdWJzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgaWYgKCEoc3Vic3RyaW5nc1tpXSBpbiB0ZW1wKSkge1xuICAgICAgICBpZiAoaXNGaW5pdGUoc3Vic3RyaW5nc1tpICsgMV0pKSB7XG4gICAgICAgICAgdGVtcFtzdWJzdHJpbmdzW2ldXSA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBbc3Vic3RyaW5nc1tpXV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGVtcCA9IHRlbXBbc3Vic3RyaW5nc1tpXV07XG4gICAgfVxuICAgIHRlbXBbc3Vic3RyaW5nc1tzdWJzdHJpbmdzLmxlbmd0aCAtIDFdXSA9IG9bcHJvcGVydHldO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQSBzcGxpdCBwcmVkaWNhdGVcbiAqIEBjYWxsYmFjayBTcGxpdFByZWRpY2F0ZVxuICogQHBhcmFtIHthbnl9IHZhbHVlIFRoZSBjdXJyZW50IHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcnJheSBzaG91bGQgc3BsaXQgYXQgdGhpcyBpbmRleFxuICovXG5cbi8qKlxuICogU3BsaXQgYW4gYXJyYXkgaW50byBzdWItYXJyYXlzIGJhc2VkIG9uIGEgcHJlZGljYXRlXG4gKiBAcGFyYW0ge0FycmF5PCo+fSBhcnJheVxuICogQHBhcmFtIHtTcGxpdFByZWRpY2F0ZX0gcHJlZGljYXRlXG4gKiBAcmV0dXJuIHtBcnJheTxBcnJheTwqPj59IEFuIGFycmF5IG9mIGFycmF5c1xuICovXG5jb25zdCBzcGxpdCA9IChhcnJheSwgcHJlZGljYXRlKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBsZXQgY3VycmVudCA9IFtdO1xuICBmb3IgKGNvbnN0IHZhbHVlIG9mIGFycmF5KSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCkge1xuICAgICAgICByZXN1bHQucHVzaChjdXJyZW50KTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBbdmFsdWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXN1bHQucHVzaChjdXJyZW50KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBQbHVjayBrZXlzIGZyb20gYW4gb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb1xuICogQHBhcmFtIHsuLi5zdHJpbmd9IGtleXMgVGhlIGtleXMgdG8gcGx1Y2sgZnJvbSB0aGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBwbHVja2VkIGtleXNcbiAqL1xuY29uc3QgcGx1Y2sgPSAobywgLi4ua2V5cykgPT4ge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoXG4gICAgKHJlc3VsdCwga2V5KSA9PiBPYmplY3QuYXNzaWduKHJlc3VsdCwgeyBba2V5XTogb1trZXldIH0pLFxuICAgIHt9XG4gICk7XG59O1xuXG4vKipcbiAqIEV4Y2x1ZGUga2V5cyBmcm9tIGFuIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9cbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBrZXlzIFRoZSBrZXlzIHRvIGV4Y2x1ZGUgZnJvbSB0aGUgb2JqZWN0XG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBrZXlzIGV4Y2VwdCBleGNsdWRlZCBrZXlzXG4gKi9cbmNvbnN0IGV4Y2x1ZGUgPSAobywgLi4ua2V5cykgPT4ge1xuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKG8pLmZpbHRlcigoW2tleV0pID0+ICFrZXlzLmluY2x1ZGVzKGtleSkpXG4gICk7XG59O1xuXG4vKipcbiAqIERlZXAtbWVyZ2Ugb2JqZWN0c1xuICogQHBhcmFtIHtvYmplY3R9IGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmNvbnN0IG1lcmdlID0gKGEsIGIpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0geyAuLi5hIH07XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGIpKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmIGtleSBpbiBhKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKGFba2V5XSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZmxvYXRFcXVhbHMsXG4gICAgY2xhbXAsXG4gICAgZnJhYyxcbiAgICByb3VuZCxcbiAgICBsZXJwLFxuICAgIHVubGVycCxcbiAgICBibGVycCxcbiAgICByZW1hcCxcbiAgICBzbW9vdGhzdGVwLFxuICAgIHJhZGlhbnMsXG4gICAgZGVncmVlcyxcbiAgICByYW5kb21CZXR3ZWVuLFxuICAgIHJhbmRvbUludEJldHdlZW4sXG4gICAgY2x0UmFuZG9tLFxuICAgIGNsdFJhbmRvbUludCxcbiAgICB3ZWlnaHRlZFJhbmRvbSxcbiAgICBsZXJwQXJyYXksXG4gICAgZG90LFxuICAgIGZhY3RvcmlhbCxcbiAgICBucHIsXG4gICAgbmNyLFxuICAgIGNvbWJpbmF0aW9ucyxcbiAgICBjYXJ0ZXNpYW4sXG4gICAgdGltZXMsXG4gICAgcmFuZ2UsXG4gICAgemlwLFxuICAgIGF0LFxuICAgIHBlZWssXG4gICAgY2h1bmssXG4gICAgc2h1ZmZsZSxcbiAgICBmbGF0LFxuICAgIHVuZmxhdCxcbiAgICBzcGxpdCxcbiAgICBwbHVjayxcbiAgICBleGNsdWRlLFxuICAgIG1lcmdlLFxuICB9O1xufVxuIiwiY29uc3QgeyB0aW1lcywgY2h1bmssIGRvdCB9ID0gcmVxdWlyZSgnQGJhc2VtZW50dW5pdmVyc2UvdXRpbHMnKTtcblxuLyoqXG4gKiBAb3ZlcnZpZXcgQSBzbWFsbCB2ZWN0b3IgYW5kIG1hdHJpeCBsaWJyYXJ5XG4gKiBAYXV0aG9yIEdvcmRvbiBMYXJyaWdhblxuICovXG5cbi8qKlxuICogQSAyZCB2ZWN0b3JcbiAqIEB0eXBlZGVmIHtPYmplY3R9IHZlY1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHggVGhlIHggY29tcG9uZW50IG9mIHRoZSB2ZWN0b3JcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB5IFRoZSB5IGNvbXBvbmVudCBvZiB0aGUgdmVjdG9yXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgdmVjdG9yXG4gKiBAcGFyYW0ge251bWJlcnx2ZWN9IFt4XSBUaGUgeCBjb21wb25lbnQgb2YgdGhlIHZlY3Rvciwgb3IgYSB2ZWN0b3IgdG8gY29weVxuICogQHBhcmFtIHtudW1iZXJ9IFt5XSBUaGUgeSBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjfSBBIG5ldyB2ZWN0b3JcbiAqIEBleGFtcGxlIDxjYXB0aW9uPlZhcmlvdXMgd2F5cyB0byBpbml0aWFsaXNlIGEgdmVjdG9yPC9jYXB0aW9uPlxuICogbGV0IGEgPSB2ZWMoMywgMik7ICAvLyAoMywgMilcbiAqIGxldCBiID0gdmVjKDQpOyAgICAgLy8gKDQsIDQpXG4gKiBsZXQgYyA9IHZlYyhhKTsgICAgIC8vICgzLCAyKVxuICogbGV0IGQgPSB2ZWMoKTsgICAgICAvLyAoMCwgMClcbiAqL1xuY29uc3QgdmVjID0gKHgsIHkpID0+ICgheCAmJiAheSA/XG4gIHsgeDogMCwgeTogMCB9IDogKHR5cGVvZiB4ID09PSAnb2JqZWN0JyA/XG4gICAgeyB4OiB4LnggfHwgMCwgeTogeC55IHx8IDAgfSA6ICh5ID09PSBudWxsIHx8IHkgPT09IHVuZGVmaW5lZCA/XG4gICAgICB7IHg6IHgsIHk6IHggfSA6IHsgeDogeCwgeTogeSB9KVxuICApXG4pO1xuXG4vKipcbiAqIEdldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlY3RvciBhcyBhbiBhcnJheVxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBnZXQgY29tcG9uZW50cyBmcm9tXG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBUaGUgdmVjdG9yIGNvbXBvbmVudHMgYXMgYW4gYXJyYXlcbiAqL1xudmVjLmNvbXBvbmVudHMgPSBhID0+IFthLngsIGEueV07XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pdCB2ZWN0b3IgKDEsIDApXG4gKiBAcmV0dXJuIHt2ZWN9IEEgdW5pdCB2ZWN0b3IgKDEsIDApXG4gKi9cbnZlYy51eCA9ICgpID0+IHZlYygxLCAwKTtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bml0IHZlY3RvciAoMCwgMSlcbiAqIEByZXR1cm4ge3ZlY30gQSB1bml0IHZlY3RvciAoMCwgMSlcbiAqL1xudmVjLnV5ID0gKCkgPT4gdmVjKDAsIDEpO1xuXG4vKipcbiAqIEFkZCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge3ZlY30gYSArIGJcbiAqL1xudmVjLmFkZCA9IChhLCBiKSA9PiAoeyB4OiBhLnggKyBiLngsIHk6IGEueSArIGIueSB9KTtcblxuLyoqXG4gKiBTY2FsZSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBiIFNjYWxhciBiXG4gKiBAcmV0dXJuIHt2ZWN9IGEgKiBiXG4gKi9cbnZlYy5tdWwgPSAoYSwgYikgPT4gKHsgeDogYS54ICogYiwgeTogYS55ICogYiB9KTtcblxuLyoqXG4gKiBTdWJ0cmFjdCB2ZWN0b3JzXG4gKiBAcGFyYW0ge3ZlY30gYSBWZWN0b3IgYVxuICogQHBhcmFtIHt2ZWN9IGIgVmVjdG9yIGJcbiAqIEByZXR1cm4ge3ZlY30gYSAtIGJcbiAqL1xudmVjLnN1YiA9IChhLCBiKSA9PiAoeyB4OiBhLnggLSBiLngsIHk6IGEueSAtIGIueSB9KTtcblxuLyoqXG4gKiBHZXQgdGhlIGxlbmd0aCBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gfGF8XG4gKi9cbnZlYy5sZW4gPSBhID0+IE1hdGguc3FydChhLnggKiBhLnggKyBhLnkgKiBhLnkpO1xuXG4vKipcbiAqIEdldCB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yIHVzaW5nIHRheGljYWIgZ2VvbWV0cnlcbiAqIEBwYXJhbSB7dmVjfSBhIFZlY3RvciBhXG4gKiBAcmV0dXJuIHtudW1iZXJ9IHxhfFxuICovXG52ZWMubWFuaGF0dGFuID0gYSA9PiBNYXRoLmFicyhhLngpICsgTWF0aC5hYnMoYS55KTtcblxuLyoqXG4gKiBOb3JtYWxpc2UgYSB2ZWN0b3JcbiAqIEBwYXJhbSB7dmVjfSBhIFRoZSB2ZWN0b3IgdG8gbm9ybWFsaXNlXG4gKiBAcmV0dXJuIHt2ZWN9IF5hXG4gKi9cbnZlYy5ub3IgPSBhID0+IHtcbiAgbGV0IGxlbiA9IHZlYy5sZW4oYSk7XG4gIHJldHVybiBsZW4gPyB7IHg6IGEueCAvIGxlbiwgeTogYS55IC8gbGVuIH0gOiB2ZWMoKTtcbn07XG5cbi8qKlxuICogR2V0IGEgZG90IHByb2R1Y3Qgb2YgdmVjdG9yc1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGEg4oiZIGJcbiAqL1xudmVjLmRvdCA9IChhLCBiKSA9PiBhLnggKiBiLnggKyBhLnkgKiBiLnk7XG5cbi8qKlxuICogUm90YXRlIGEgdmVjdG9yIGJ5IHIgcmFkaWFuc1xuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByIFRoZSBhbmdsZSB0byByb3RhdGUgYnksIG1lYXN1cmVkIGluIHJhZGlhbnNcbiAqIEByZXR1cm4ge3ZlY30gQSByb3RhdGVkIHZlY3RvclxuICovXG52ZWMucm90ID0gKGEsIHIpID0+IHtcbiAgbGV0IHMgPSBNYXRoLnNpbihyKSxcbiAgICBjID0gTWF0aC5jb3Mocik7XG4gIHJldHVybiB7IHg6IGMgKiBhLnggLSBzICogYS55LCB5OiBzICogYS54ICsgYyAqIGEueSB9O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2ZWN0b3JzIGFyZSBlcXVhbFxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjfSBiIFZlY3RvciBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZlY3RvcnMgYSBhbmQgYiBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZVxuICovXG52ZWMuZXEgPSAoYSwgYikgPT4gYS54ID09PSBiLnggJiYgYS55ID09PSBiLnk7XG5cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBvZiBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIG9mIHZlY3RvciBhIGluIHJhZGlhbnNcbiAqL1xudmVjLnJhZCA9IGEgPT4gTWF0aC5hdGFuMihhLnksIGEueCk7XG5cbi8qKlxuICogQ29weSBhIHZlY3RvclxuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb3B5XG4gKiBAcmV0dXJuIHt2ZWN9IEEgY29weSBvZiB2ZWN0b3IgYVxuICovXG52ZWMuY3B5ID0gYSA9PiB2ZWMoYSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yXG4gKiBAY2FsbGJhY2sgdmVjdG9yTWFwQ2FsbGJhY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgY29tcG9uZW50IHZhbHVlXG4gKiBAcGFyYW0geyd4JyB8ICd5J30gbGFiZWwgVGhlIGNvbXBvbmVudCBsYWJlbCAoeCBvciB5KVxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGNvbXBvbmVudFxuICovXG5cbi8qKlxuICogQ2FsbCBhIGZ1bmN0aW9uIG9uIGVhY2ggY29tcG9uZW50IG9mIGEgdmVjdG9yIGFuZCBidWlsZCBhIG5ldyB2ZWN0b3IgZnJvbSB0aGUgcmVzdWx0c1xuICogQHBhcmFtIHt2ZWN9IGEgVmVjdG9yIGFcbiAqIEBwYXJhbSB7dmVjdG9yTWFwQ2FsbGJhY2t9IGYgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgb24gZWFjaCBjb21wb25lbnQgb2YgdGhlIHZlY3RvclxuICogQHJldHVybiB7dmVjfSBWZWN0b3IgYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbnZlYy5tYXAgPSAoYSwgZikgPT4gKHsgeDogZihhLngsICd4JyksIHk6IGYoYS55LCAneScpIH0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSB2ZWN0b3IgaW50byBhIHN0cmluZ1xuICogQHBhcmFtIHt2ZWN9IGEgVGhlIHZlY3RvciB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge3N0cmluZ30gW3M9JywgJ10gVGhlIHNlcGFyYXRvciBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3RvclxuICovXG52ZWMuc3RyID0gKGEsIHMgPSAnLCAnKSA9PiBgJHthLnh9JHtzfSR7YS55fWA7XG5cbi8qKlxuICogQSBtYXRyaXhcbiAqIEB0eXBlZGVmIHtPYmplY3R9IG1hdFxuICogQHByb3BlcnR5IHtudW1iZXJ9IG0gVGhlIG51bWJlciBvZiByb3dzIGluIHRoZSBtYXRyaXhcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgbWF0cml4XG4gKiBAcHJvcGVydHkge0FycmF5PG51bWJlcj59IGVudHJpZXMgVGhlIG1hdHJpeCB2YWx1ZXNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBtYXRyaXhcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbT00XSBUaGUgbnVtYmVyIG9mIHJvd3NcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbj00XSBUaGUgbnVtYmVyIG9mIGNvbHVtbnNcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gW2VudHJpZXM9W11dIE1hdHJpeCB2YWx1ZXMgaW4gcmVhZGluZyBvcmRlclxuICogQHJldHVybiB7bWF0fSBBIG5ldyBtYXRyaXhcbiAqL1xuY29uc3QgbWF0ID0gKG0gPSA0LCBuID0gNCwgZW50cmllcyA9IFtdKSA9PiAoe1xuICBtLCBuLFxuICBlbnRyaWVzOiBlbnRyaWVzLmNvbmNhdChBcnJheShtICogbikuZmlsbCgwKSkuc2xpY2UoMCwgbSAqIG4pXG59KTtcblxuLyoqXG4gKiBHZXQgYW4gaWRlbnRpdHkgbWF0cml4IG9mIHNpemUgblxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIHNpemUgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybiB7bWF0fSBBbiBpZGVudGl0eSBtYXRyaXhcbiAqL1xubWF0LmlkZW50aXR5ID0gbiA9PiBtYXQobiwgbiwgQXJyYXkobiAqIG4pLmZpbGwoMCkubWFwKCh2LCBpKSA9PiArKE1hdGguZmxvb3IoaSAvIG4pID09PSBpICUgbikpKTtcblxuLyoqXG4gKiBHZXQgYW4gZW50cnkgZnJvbSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBpIFRoZSByb3cgb2Zmc2V0XG4gKiBAcGFyYW0ge251bWJlcn0gaiBUaGUgY29sdW1uIG9mZnNldFxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgdmFsdWUgYXQgcG9zaXRpb24gKGksIGopIGluIG1hdHJpeCBhXG4gKi9cbm1hdC5nZXQgPSAoYSwgaSwgaikgPT4gYS5lbnRyaWVzWyhqIC0gMSkgKyAoaSAtIDEpICogYS5uXTtcblxuLyoqXG4gKiBTZXQgYW4gZW50cnkgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge251bWJlcn0gaSBUaGUgcm93IG9mZnNldFxuICogQHBhcmFtIHtudW1iZXJ9IGogVGhlIGNvbHVtbiBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB2IFRoZSB2YWx1ZSB0byBzZXQgaW4gbWF0cml4IGFcbiAqL1xubWF0LnNldCA9IChhLCBpLCBqLCB2KSA9PiB7IGEuZW50cmllc1soaiAtIDEpICsgKGkgLSAxKSAqIGEubl0gPSB2OyB9O1xuXG4vKipcbiAqIEdldCBhIHJvdyBmcm9tIGEgbWF0cml4IGFzIGFuIGFycmF5XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IG0gVGhlIHJvdyBvZmZzZXRcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IFJvdyBtIGZyb20gbWF0cml4IGFcbiAqL1xubWF0LnJvdyA9IChhLCBtKSA9PiB7XG4gIGNvbnN0IHMgPSAobSAtIDEpICogYS5uO1xuICByZXR1cm4gYS5lbnRyaWVzLnNsaWNlKHMsIHMgKyBhLm4pO1xufTtcblxuLyoqXG4gKiBHZXQgYSBjb2x1bW4gZnJvbSBhIG1hdHJpeCBhcyBhbiBhcnJheVxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHtBcnJheTxudW1iZXI+fSBDb2x1bW4gbiBmcm9tIG1hdHJpeCBhXG4gKi9cbm1hdC5jb2wgPSAoYSwgbikgPT4gdGltZXMoaSA9PiBtYXQuZ2V0KGEsIChpICsgMSksIG4pLCBhLm0pO1xuXG4vKipcbiAqIEFkZCBtYXRyaWNlc1xuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHttYXR9IGEgKyBiXG4gKi9cbm1hdC5hZGQgPSAoYSwgYikgPT4gYS5tID09PSBiLm0gJiYgYS5uID09PSBiLm4gJiYgbWF0Lm1hcChhLCAodiwgaSkgPT4gdiArIGIuZW50cmllc1tpXSk7XG5cbi8qKlxuICogU3VidHJhY3QgbWF0cmljZXNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdH0gYiBNYXRyaXggYlxuICogQHJldHVybiB7bWF0fSBhIC0gYlxuICovXG5tYXQuc3ViID0gKGEsIGIpID0+IGEubSA9PT0gYi5tICYmIGEubiA9PT0gYi5uICYmIG1hdC5tYXAoYSwgKHYsIGkpID0+IHYgLSBiLmVudHJpZXNbaV0pO1xuXG4vKipcbiAqIE11bHRpcGx5IG1hdHJpY2VzXG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHttYXR9IGIgTWF0cml4IGJcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBhYiBvciBmYWxzZSBpZiB0aGUgbWF0cmljZXMgY2Fubm90IGJlIG11bHRpcGxpZWRcbiAqL1xubWF0Lm11bCA9IChhLCBiKSA9PiB7XG4gIGlmIChhLm4gIT09IGIubSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgcmVzdWx0ID0gbWF0KGEubSwgYi5uKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gYS5tOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSBiLm47IGorKykge1xuICAgICAgbWF0LnNldChyZXN1bHQsIGksIGosIGRvdChtYXQucm93KGEsIGkpLCBtYXQuY29sKGIsIGopKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFNjYWxlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGIgU2NhbGFyIGJcbiAqIEByZXR1cm4ge21hdH0gYSAqIGJcbiAqL1xubWF0LnNjYWxlID0gKGEsIGIpID0+IG1hdC5tYXAoYSwgdiA9PiB2ICogYik7XG5cbi8qKlxuICogVHJhbnNwb3NlIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIHRyYW5zcG9zZVxuICogQHJldHVybiB7bWF0fSBBIHRyYW5zcG9zZWQgbWF0cml4XG4gKi9cbm1hdC50cmFucyA9IGEgPT4gbWF0KGEubiwgYS5tLCB0aW1lcyhpID0+IG1hdC5jb2woYSwgKGkgKyAxKSksIGEubikuZmxhdCgpKTtcblxuLyoqXG4gKiBHZXQgdGhlIG1pbm9yIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBNYXRyaXggYVxuICogQHBhcmFtIHtudW1iZXJ9IGkgVGhlIHJvdyBvZmZzZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBqIFRoZSBjb2x1bW4gb2Zmc2V0XG4gKiBAcmV0dXJuIHttYXR8Ym9vbGVhbn0gVGhlIChpLCBqKSBtaW5vciBvZiBtYXRyaXggYSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0Lm1pbm9yID0gKGEsIGksIGopID0+IHtcbiAgaWYgKGEubSAhPT0gYS5uKSB7IHJldHVybiBmYWxzZTsgfVxuICBjb25zdCBlbnRyaWVzID0gW107XG4gIGZvciAobGV0IGlpID0gMTsgaWkgPD0gYS5tOyBpaSsrKSB7XG4gICAgaWYgKGlpID09PSBpKSB7IGNvbnRpbnVlOyB9XG4gICAgZm9yIChsZXQgamogPSAxOyBqaiA8PSBhLm47IGpqKyspIHtcbiAgICAgIGlmIChqaiA9PT0gaikgeyBjb250aW51ZTsgfVxuICAgICAgZW50cmllcy5wdXNoKG1hdC5nZXQoYSwgaWksIGpqKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXQoYS5tIC0gMSwgYS5uIC0gMSwgZW50cmllcyk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgZGV0ZXJtaW5hbnQgb2YgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcmV0dXJuIHtudW1iZXJ8Ym9vbGVhbn0gfGF8IG9yIGZhbHNlIGlmIHRoZSBtYXRyaXggaXMgbm90IHNxdWFyZVxuICovXG5tYXQuZGV0ID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKGEubSA9PT0gMSkge1xuICAgIHJldHVybiBhLmVudHJpZXNbMF07XG4gIH1cbiAgaWYgKGEubSA9PT0gMikge1xuICAgIHJldHVybiBhLmVudHJpZXNbMF0gKiBhLmVudHJpZXNbM10gLSBhLmVudHJpZXNbMV0gKiBhLmVudHJpZXNbMl07XG4gIH1cbiAgbGV0IHRvdGFsID0gMCwgc2lnbiA9IDE7XG4gIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XG4gICAgdG90YWwgKz0gc2lnbiAqIGEuZW50cmllc1tqIC0gMV0gKiBtYXQuZGV0KG1hdC5taW5vcihhLCAxLCBqKSk7XG4gICAgc2lnbiAqPSAtMTtcbiAgfVxuICByZXR1cm4gdG90YWw7XG59O1xuXG4vKipcbiAqIE5vcm1hbGlzZSBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCB0byBub3JtYWxpc2VcbiAqIEByZXR1cm4ge21hdHxib29sZWFufSBeYSBvciBmYWxzZSBpZiB0aGUgbWF0cml4IGlzIG5vdCBzcXVhcmVcbiAqL1xubWF0Lm5vciA9IGEgPT4ge1xuICBpZiAoYS5tICE9PSBhLm4pIHsgcmV0dXJuIGZhbHNlOyB9XG4gIGNvbnN0IGQgPSBtYXQuZGV0KGEpO1xuICByZXR1cm4gbWF0Lm1hcChhLCBpID0+IGkgKiBkKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBhZGp1Z2F0ZSBvZiBhIG1hdHJpeFxuICogQHBhcmFtIHttYXR9IGEgVGhlIG1hdHJpeCBmcm9tIHdoaWNoIHRvIGdldCB0aGUgYWRqdWdhdGVcbiAqIEByZXR1cm4ge21hdH0gVGhlIGFkanVnYXRlIG9mIGFcbiAqL1xubWF0LmFkaiA9IGEgPT4ge1xuICBjb25zdCBtaW5vcnMgPSBtYXQoYS5tLCBhLm4pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBhLm07IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGEubjsgaisrKSB7XG4gICAgICBtYXQuc2V0KG1pbm9ycywgaSwgaiwgbWF0LmRldChtYXQubWlub3IoYSwgaSwgaikpKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY29mYWN0b3JzID0gbWF0Lm1hcChtaW5vcnMsICh2LCBpKSA9PiB2ICogKGkgJSAyID8gLTEgOiAxKSk7XG4gIHJldHVybiBtYXQudHJhbnMoY29mYWN0b3JzKTtcbn07XG5cbi8qKlxuICogR2V0IHRoZSBpbnZlcnNlIG9mIGEgbWF0cml4XG4gKiBAcGFyYW0ge21hdH0gYSBUaGUgbWF0cml4IHRvIGludmVydFxuICogQHJldHVybiB7bWF0fGJvb2xlYW59IGFeLTEgb3IgZmFsc2UgaWYgdGhlIG1hdHJpeCBoYXMgbm8gaW52ZXJzZVxuICovXG5tYXQuaW52ID0gYSA9PiB7XG4gIGlmIChhLm0gIT09IGEubikgeyByZXR1cm4gZmFsc2U7IH1cbiAgY29uc3QgZCA9IG1hdC5kZXQoYSk7XG4gIGlmIChkID09PSAwKSB7IHJldHVybiBmYWxzZTsgfVxuICByZXR1cm4gbWF0LnNjYWxlKG1hdC5hZGooYSksIDEgLyBkKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIG1hdHJpY2VzIGFyZSBlcXVhbFxuICogQHBhcmFtIHttYXR9IGEgTWF0cml4IGFcbiAqIEBwYXJhbSB7bWF0fSBiIE1hdHJpeCBiXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1hdHJpY2VzIGEgYW5kIGIgYXJlIGlkZW50aWNhbCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbm1hdC5lcSA9IChhLCBiKSA9PiBhLm0gPT09IGIubSAmJiBhLm4gPT09IGIubiAmJiBtYXQuc3RyKGEpID09PSBtYXQuc3RyKGIpO1xuXG4vKipcbiAqIENvcHkgYSBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29weVxuICogQHJldHVybiB7bWF0fSBBIGNvcHkgb2YgbWF0cml4IGFcbiAqL1xubWF0LmNweSA9IGEgPT4gbWF0KGEubSwgYS5uLCBbLi4uYS5lbnRyaWVzXSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgYSBtYXRyaXhcbiAqIEBjYWxsYmFjayBtYXRyaXhNYXBDYWxsYmFja1xuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSBlbnRyeSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBlbnRyeSBpbmRleFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBlbnRyaWVzIFRoZSBhcnJheSBvZiBtYXRyaXggZW50cmllc1xuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbWFwcGVkIGVudHJ5XG4gKi9cblxuLyoqXG4gKiBDYWxsIGEgZnVuY3Rpb24gb24gZWFjaCBlbnRyeSBvZiBhIG1hdHJpeCBhbmQgYnVpbGQgYSBuZXcgbWF0cml4IGZyb20gdGhlIHJlc3VsdHNcbiAqIEBwYXJhbSB7bWF0fSBhIE1hdHJpeCBhXG4gKiBAcGFyYW0ge21hdHJpeE1hcENhbGxiYWNrfSBmIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggZW50cnkgb2YgdGhlIG1hdHJpeFxuICogQHJldHVybiB7bWF0fSBNYXRyaXggYSBtYXBwZWQgdGhyb3VnaCBmXG4gKi9cbm1hdC5tYXAgPSAoYSwgZikgPT4gbWF0KGEubSwgYS5uLCBhLmVudHJpZXMubWFwKGYpKTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgbWF0cml4IGludG8gYSBzdHJpbmdcbiAqIEBwYXJhbSB7bWF0fSBhIFRoZSBtYXRyaXggdG8gY29udmVydFxuICogQHBhcmFtIHtzdHJpbmd9IFttcz0nLCAnXSBUaGUgc2VwYXJhdG9yIHN0cmluZyBmb3IgY29sdW1uc1xuICogQHBhcmFtIHtzdHJpbmd9IFtucz0nXFxuJ10gVGhlIHNlcGFyYXRvciBzdHJpbmcgZm9yIHJvd3NcbiAqIEByZXR1cm4ge3N0cmluZ30gQSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5tYXQuc3RyID0gKGEsIG1zID0gJywgJywgbnMgPSAnXFxuJykgPT4gY2h1bmsoYS5lbnRyaWVzLCBhLm4pLm1hcChyID0+IHIuam9pbihtcykpLmpvaW4obnMpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IHZlYywgbWF0IH07XG59XG4iLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9HYW1lU2NlbmUnO1xuaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFjdG9yIHtcbiAgcHVibGljIHBvc2l0aW9uOiB2ZWM7XG4gIHB1YmxpYyBkaXNwb3NlZDogYm9vbGVhbjtcblxuICBwdWJsaWMgYWJzdHJhY3QgdXBkYXRlKGR0OiBudW1iZXIsIGdhbWU6IEdhbWVTY2VuZSwgYm91bmRzOiBCb3VuZHMsIC4uLmFyZ3M6IGFueVtdKTogdm9pZDtcblxuICBwdWJsaWMgYWJzdHJhY3QgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIC4uLmFyZ3M6IGFueVtdKTogdm9pZDtcbn1cbiIsImltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgQWN0b3IgZnJvbSAnLi9BY3Rvcic7XG5pbXBvcnQgeyBDYW1lcmFCb3VuZHMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9jYW1lcmEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBeGVzIGV4dGVuZHMgQWN0b3Ige1xuICBwcml2YXRlIHJlYWRvbmx5IEJBQ0tHUk9VTkQgPSAnd2hpdGUnO1xuICBwcml2YXRlIHJlYWRvbmx5IENPTE9VUiA9ICcjMzMzJztcbiAgcHJpdmF0ZSByZWFkb25seSBTVFJPS0UgPSAyO1xuICBwcml2YXRlIHJlYWRvbmx5IEdBUCA9IDEwMDtcbiAgcHJpdmF0ZSByZWFkb25seSBCT1JERVIgPSAxMDA7XG4gIHByaXZhdGUgcmVhZG9ubHkgRk9OVCA9ICcxNnB4IHNhbnMtc2VyaWYnO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSgpIHt9XG5cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBib3VuZHM6IENhbWVyYUJvdW5kcykge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgLy8gQm9yZGVyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLkJBQ0tHUk9VTkQ7XG4gICAgY29uc3QgaGVpZ2h0ID0gYm91bmRzLmJvdHRvbSAtIGJvdW5kcy50b3A7XG4gICAgY29uc3Qgd2lkdGggPSBib3VuZHMucmlnaHQgLSBib3VuZHMubGVmdDtcbiAgICBjb250ZXh0LmZpbGxSZWN0KGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wLCB0aGlzLkJPUkRFUiwgaGVpZ2h0KTtcbiAgICBjb250ZXh0LmZpbGxSZWN0KGJvdW5kcy5sZWZ0LCBib3VuZHMuYm90dG9tIC0gdGhpcy5CT1JERVIsIHdpZHRoLCB0aGlzLkJPUkRFUik7XG4gICAgY29udGV4dC5maWxsUmVjdChib3VuZHMucmlnaHQgLSB0aGlzLkJPUkRFUiwgYm91bmRzLnRvcCwgdGhpcy5CT1JERVIsIGhlaWdodCk7XG4gICAgY29udGV4dC5maWxsUmVjdChib3VuZHMubGVmdCArIHRoaXMuQk9SREVSLCBib3VuZHMudG9wLCB3aWR0aCAtIHRoaXMuQk9SREVSLCB0aGlzLkJPUkRFUik7XG5cbiAgICAvLyBBeGVzXG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuQ09MT1VSO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gdGhpcy5TVFJPS0U7XG5cbiAgICB0aGlzLmRyYXdMaW5lKFxuICAgICAgY29udGV4dCxcbiAgICAgIHZlYyhcbiAgICAgICAgYm91bmRzLmxlZnQgKyB0aGlzLkJPUkRFUixcbiAgICAgICAgYm91bmRzLnRvcCArIHRoaXMuQk9SREVSXG4gICAgICApLFxuICAgICAgdmVjKFxuICAgICAgICBib3VuZHMubGVmdCArIHRoaXMuQk9SREVSLFxuICAgICAgICBib3VuZHMuYm90dG9tIC0gdGhpcy5CT1JERVJcbiAgICAgIClcbiAgICApO1xuXG4gICAgdGhpcy5kcmF3TGluZShcbiAgICAgIGNvbnRleHQsXG4gICAgICB2ZWMoXG4gICAgICAgIGJvdW5kcy5sZWZ0ICsgdGhpcy5CT1JERVIsXG4gICAgICAgIGJvdW5kcy5ib3R0b20gLSB0aGlzLkJPUkRFUlxuICAgICAgKSxcbiAgICAgIHZlYyhcbiAgICAgICAgYm91bmRzLnJpZ2h0IC0gdGhpcy5CT1JERVIsXG4gICAgICAgIGJvdW5kcy5ib3R0b20gLSB0aGlzLkJPUkRFUlxuICAgICAgKVxuICAgICk7XG5cbiAgICAvLyBMYWJlbHNcbiAgICBjb25zdCB0b3BMZWZ0ID0gdmVjKFxuICAgICAgTWF0aC5mbG9vcihib3VuZHMubGVmdCAvIHRoaXMuR0FQKSAqIHRoaXMuR0FQLFxuICAgICAgTWF0aC5mbG9vcihib3VuZHMudG9wIC8gdGhpcy5HQVApICogdGhpcy5HQVBcbiAgICApO1xuICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gdmVjKFxuICAgICAgTWF0aC5jZWlsKGJvdW5kcy5yaWdodCAvIHRoaXMuR0FQKSAqIHRoaXMuR0FQLFxuICAgICAgTWF0aC5jZWlsKGJvdW5kcy5ib3R0b20gLyB0aGlzLkdBUCkgKiB0aGlzLkdBUFxuICAgICk7XG5cbiAgICBjb250ZXh0LmZvbnQgPSB0aGlzLkZPTlQ7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLkNPTE9VUjtcblxuICAgIGZvciAobGV0IHggPSB0b3BMZWZ0Lng7IHggPD0gYm90dG9tUmlnaHQueDsgeCArPSB0aGlzLkdBUCkge1xuICAgICAgaWYgKHggPj0gYm91bmRzLmxlZnQgKyB0aGlzLkJPUkRFUiAmJiB4IDw9IGJvdW5kcy5yaWdodCAtIHRoaXMuQk9SREVSKSB7XG4gICAgICAgIGNvbnN0IHQgPSBNYXRoLnJvdW5kKCh4IC0gMTAwKSAvIHRoaXMuR0FQKS50b1N0cmluZygpO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHQsIHgsIGJvdW5kcy5ib3R0b20gLSB0aGlzLkJPUkRFUiAvIDIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IHkgPSB0b3BMZWZ0Lnk7IHkgPD0gYm90dG9tUmlnaHQueTsgeSArPSB0aGlzLkdBUCkge1xuICAgICAgaWYgKHkgPj0gdGhpcy5CT1JERVIgJiYgeSA8PSBib3VuZHMuYm90dG9tIC0gdGhpcy5CT1JERVIpIHtcbiAgICAgICAgY29uc3QgdCA9IE1hdGgucm91bmQoKGJvdW5kcy5ib3R0b20gLSB5IC0gMTAwKSAvIHRoaXMuR0FQKS50b1N0cmluZygpO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHQsIGJvdW5kcy5sZWZ0ICsgdGhpcy5CT1JERVIgLyAyLCB5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd0xpbmUoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBhOiB2ZWMsIGI6IHZlYykge1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5tb3ZlVG8oYS54LCBhLnkpO1xuICAgIGNvbnRleHQubGluZVRvKGIueCwgYi55KTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBDYW1lcmFCb3VuZHMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9jYW1lcmEnO1xuaW1wb3J0IHsgU2ltcGxleE5vaXNlIH0gZnJvbSAndHMtcGVybGluLXNpbXBsZXgnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCBBY3RvciBmcm9tICcuL0FjdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcnQgZXh0ZW5kcyBBY3RvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgQVZHX0NPTE9VUiA9ICdyZ2JhKDY0LCAxMjgsIDI1NSwgMC42KSc7XG4gIHByaXZhdGUgcmVhZG9ubHkgTUlOX0NPTE9VUiA9ICdyZ2JhKDI1NSwgMCwgMCwgMC44KSc7XG4gIHByaXZhdGUgcmVhZG9ubHkgTUFYX0NPTE9VUiA9ICdyZ2JhKDI1NSwgMTI4LCAwLCAwLjgpJztcbiAgcHJpdmF0ZSByZWFkb25seSBTVFJPS0UgPSAyO1xuICBwcml2YXRlIHJlYWRvbmx5IFNJWkUgPSA1MDtcblxuICBwcml2YXRlIHJlYWRvbmx5IE1JTl9TQ0FMRV9YID0gMC4wMDM7XG4gIHByaXZhdGUgcmVhZG9ubHkgTUlOX1NDQUxFX1kgPSAwLjI7XG4gIHByaXZhdGUgcmVhZG9ubHkgTUlOX09GRlNFVCA9IDAuNzU7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBNQVhfU0NBTEVfWCA9IDAuMDAzO1xuICBwcml2YXRlIHJlYWRvbmx5IE1BWF9TQ0FMRV9ZID0gMC43O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgQVZHX1NDQUxFX1ggPSAwLjAwNTtcbiAgcHJpdmF0ZSByZWFkb25seSBBVkdfU0NBTEVfWSA9IDAuMztcbiAgcHJpdmF0ZSByZWFkb25seSBBVkdfT0ZGU0VUID0gMC4xNTtcblxuICBwcml2YXRlIHNpbXBsZXg6IFNpbXBsZXhOb2lzZTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2ltcGxleCA9IG5ldyBTaW1wbGV4Tm9pc2UoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoKSB7fVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgYm91bmRzOiBDYW1lcmFCb3VuZHMpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMuU1RST0tFO1xuXG4gICAgY29uc3QgbGVmdCA9IE1hdGguZmxvb3IoYm91bmRzLmxlZnQgLyB0aGlzLlNJWkUpO1xuICAgIGNvbnN0IHJpZ2h0ID0gTWF0aC5jZWlsKGJvdW5kcy5yaWdodCAvIHRoaXMuU0laRSk7XG5cbiAgICBjb25zdCBtaW46IG51bWJlcltdID0gW107XG4gICAgY29uc3QgbWF4OiBudW1iZXJbXSA9IFtdO1xuICAgIGNvbnN0IGF2ZzogbnVtYmVyW10gPSBbXTtcblxuICAgIGZvciAobGV0IHggPSBsZWZ0OyB4IDw9IHJpZ2h0OyB4KyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmYoeCAqIHRoaXMuU0laRSk7XG4gICAgICBtaW4ucHVzaChjdXJyZW50Lm1pbik7XG4gICAgICBtYXgucHVzaChjdXJyZW50Lm1heCk7XG4gICAgICBhdmcucHVzaChjdXJyZW50LmF2Zyk7XG4gICAgfVxuXG4gICAgLy8gTWluIGxpbmVcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5NSU5fQ09MT1VSO1xuICAgIGNvbnRleHQuc2V0TGluZURhc2goW10pO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5tb3ZlVG8obGVmdCAqIHRoaXMuU0laRSwgbWluWzBdKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbWluLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb250ZXh0LmxpbmVUbygobGVmdCArIGkpICogdGhpcy5TSVpFLCBtaW5baV0pO1xuICAgIH1cblxuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcblxuICAgIC8vIE1heCBsaW5lXG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuTUFYX0NPTE9VUjtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQubW92ZVRvKGxlZnQgKiB0aGlzLlNJWkUsIG1heFswXSk7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1heC5sZW5ndGg7IGkrKykge1xuICAgICAgY29udGV4dC5saW5lVG8oKGxlZnQgKyBpKSAqIHRoaXMuU0laRSwgbWF4W2ldKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG5cbiAgICAvLyBBdmcgbGluZVxuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLkFWR19DT0xPVVI7XG4gICAgY29udGV4dC5zZXRMaW5lRGFzaChbOF0pO1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5tb3ZlVG8obGVmdCAqIHRoaXMuU0laRSwgYXZnWzBdKTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXZnLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb250ZXh0LmxpbmVUbygobGVmdCArIGkpICogdGhpcy5TSVpFLCBhdmdbaV0pO1xuICAgIH1cblxuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHVibGljIGYoeDogbnVtYmVyKToge1xuICAgIG1pbjogbnVtYmVyO1xuICAgIG1heDogbnVtYmVyO1xuICAgIGF2ZzogbnVtYmVyO1xuICB9IHtcbiAgICBjb25zdCBtaW4gPSBHYW1lLnNjcmVlbi55ICogKHRoaXMuc2ltcGxleC5ub2lzZSh4ICogdGhpcy5NSU5fU0NBTEVfWCwgMCkgKiB0aGlzLk1JTl9TQ0FMRV9ZICsgdGhpcy5NSU5fT0ZGU0VUKTtcbiAgICBjb25zdCBtYXggPSBtaW4gLSAoKEdhbWUuc2NyZWVuLnkgKiAwLjc1KSAqICgwLjUgKyAodGhpcy5zaW1wbGV4Lm5vaXNlKHggKiB0aGlzLk1BWF9TQ0FMRV9YLCAxMDAwKSAqIHRoaXMuTUFYX1NDQUxFX1kpIC8gMikpO1xuICAgIGNvbnN0IGF2ZyA9IEdhbWUuc2NyZWVuLnkgKiAoMC41ICsgKHRoaXMuc2ltcGxleC5ub2lzZSh4ICogdGhpcy5BVkdfU0NBTEVfWCwgMC41KSAqIHRoaXMuQVZHX1NDQUxFX1kgKyB0aGlzLkFWR19PRkZTRVQpIC8gMik7XG5cbiAgICByZXR1cm4geyBtaW4sIG1heCwgYXZnIH07XG4gIH1cbn1cbiIsImltcG9ydCBEZWJ1ZyBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9kZWJ1Zyc7XG5pbXBvcnQgSW5wdXRNYW5hZ2VyIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2lucHV0LW1hbmFnZXInO1xuaW1wb3J0IFNjZW5lTWFuYWdlciBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9zY2VuZS1tYW5hZ2VyJztcbmltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgeyBNZW51U2NlbmUgfSBmcm9tICcuL01lbnVTY2VuZSc7XG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi9jb25maWcuanNvbic7XG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgcHVibGljIHN0YXRpYyBzY3JlZW46IHZlYztcblxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBwcml2YXRlIGxhc3RGcmFtZVRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBsYXN0RnJhbWVDb3VudFRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBmcmFtZVJhdGU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgZnJhbWVDb3VudDogbnVtYmVyID0gMDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAoY29udGFpbmVyID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgdmFsaWQgY29udGFpbmVyIGVsZW1lbnQgbXVzdCBiZSBzcGVjaWZpZWQuJyk7XG4gICAgfVxuICAgIGlmIChjb250YWluZXIudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnY2FudmFzJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb250YWluZXIgZWxlbWVudCBtdXN0IGJlIGEgY2FudmFzLicpO1xuICAgIH1cbiAgICB0aGlzLmNhbnZhcyA9IGNvbnRhaW5lciBhcyBIVE1MQ2FudmFzRWxlbWVudDtcblxuICAgIC8vIEdldCBhIDJkIGNvbnRleHRcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoY29udGV4dCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZ2V0IGEgMmQgY29udGV4dC5cIik7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHJlc2l6ZVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgdGhpcy5yZXNpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzaXplKCkge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpc2UoKSB7XG4gICAgLy8gSW5pdGlhbGlzZSBzdWJzeXN0ZW1zXG4gICAgRGVidWcuaW5pdGlhbGlzZSgpO1xuICAgIElucHV0TWFuYWdlci5pbml0aWFsaXNlKCk7XG4gICAgU2NlbmVNYW5hZ2VyLmluaXRpYWxpc2UoKTtcblxuICAgIC8vIFN0YXJ0IGdhbWUgbG9vcFxuICAgIHRoaXMubGFzdEZyYW1lVGltZSA9IHRoaXMubGFzdEZyYW1lQ291bnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgdGhpcy5sb29wKCk7XG5cbiAgICAvLyBQdXNoIHRoZSBpbml0aWFsIHNjZW5lXG4gICAgU2NlbmVNYW5hZ2VyLnB1c2gobmV3IE1lbnVTY2VuZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9vcCgpIHtcbiAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBjb25zdCBlbGFwc2VkVGltZSA9IE1hdGgubWluKG5vdyAtIHRoaXMubGFzdEZyYW1lVGltZSwgY29uc3RhbnRzLkZQU19NSU4pO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGZyYW1lcmF0ZVxuICAgIGlmIChub3cgLSB0aGlzLmxhc3RGcmFtZUNvdW50VGltZSA+PSBjb25zdGFudHMuU0VDT05EKSB7XG4gICAgICB0aGlzLmxhc3RGcmFtZUNvdW50VGltZSA9IG5vdztcbiAgICAgIHRoaXMuZnJhbWVSYXRlID0gdGhpcy5mcmFtZUNvdW50O1xuICAgICAgdGhpcy5mcmFtZUNvdW50ID0gMDtcbiAgICB9XG4gICAgdGhpcy5mcmFtZUNvdW50Kys7XG4gICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gbm93O1xuICAgIGlmIChjb25maWcuc2hvd0ZQUykge1xuICAgICAgRGVidWcudmFsdWUoJ0ZQUycsIHRoaXMuZnJhbWVSYXRlLCB7IGFsaWduOiAncmlnaHQnIH0pO1xuICAgIH1cblxuICAgIC8vIERvIGdhbWUgbG9vcFxuICAgIHRoaXMudXBkYXRlKGVsYXBzZWRUaW1lKTtcbiAgICB0aGlzLmRyYXcoKTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgR2FtZS5zY3JlZW4gPSB2ZWModGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgU2NlbmVNYW5hZ2VyLnVwZGF0ZShkdCk7XG4gICAgSW5wdXRNYW5hZ2VyLnVwZGF0ZSgpO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIFNjZW5lTWFuYWdlci5kcmF3KHRoaXMuY29udGV4dCk7XG4gICAgRGVidWcuZHJhdyh0aGlzLmNvbnRleHQpO1xuICB9XG59XG4iLCJpbXBvcnQgSW5wdXRNYW5hZ2VyIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2lucHV0LW1hbmFnZXInO1xuaW1wb3J0IFNjZW5lTWFuYWdlciwge1xuICBTY2VuZSxcbiAgU2NlbmVUcmFuc2l0aW9uU3RhdGUsXG59IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3NjZW5lLW1hbmFnZXInO1xuaW1wb3J0IHsgbGVycCB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL0dhbWVTY2VuZSc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lT3ZlclNjZW5lIGV4dGVuZHMgU2NlbmUge1xuICBwcml2YXRlIHg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgdHRsOiBudW1iZXIgPSAxO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIpIHtcbiAgICBzdXBlcih7XG4gICAgICB0cmFuc2l0aW9uVGltZTogMSxcbiAgICB9KTtcblxuICAgIHRoaXMueCA9IHg7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGlzZSgpIHt9XG5cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgdGhpcy50dGwgLT0gZHQ7XG5cbiAgICBpZiAodGhpcy50dGwgPD0gMCAmJiBJbnB1dE1hbmFnZXIua2V5UHJlc3NlZCgpKSB7XG4gICAgICBTY2VuZU1hbmFnZXIucG9wKCk7XG4gICAgICBTY2VuZU1hbmFnZXIucHVzaChuZXcgR2FtZVNjZW5lKCkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGlmICh0aGlzLnRyYW5zaXRpb25TdGF0ZSAhPT0gU2NlbmVUcmFuc2l0aW9uU3RhdGUuTm9uZSkge1xuICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IHRoaXMudHJhbnNpdGlvbkFtb3VudDtcbiAgICB9XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBHYW1lLnNjcmVlbi54LCBHYW1lLnNjcmVlbi55KTtcblxuICAgIGNvbnN0IHkgPSBsZXJwKC0yMDAsIEdhbWUuc2NyZWVuLnkgLyAyLCB0aGlzLnRyYW5zaXRpb25BbW91bnQpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYHJnYmEoMjU1LCAwLCAwLCAke01hdGguZmxvb3IodGhpcy50cmFuc2l0aW9uQW1vdW50ICogMTAwKSAvIDEwMH0pYDtcbiAgICBjb250ZXh0LmZvbnQgPSAnNDhweCBUaW1lcyBOZXcgUm9tYW4nO1xuICAgIGNvbnRleHQudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBjb250ZXh0LmZpbGxUZXh0KCdZb3UgZGllZCEnLCBHYW1lLnNjcmVlbi54IC8gMiwgeSk7XG4gICAgY29udGV4dC5mb250ID0gJzM2cHggVGltZXMgTmV3IFJvbWFuJztcbiAgICBjb250ZXh0LmZpbGxUZXh0KGBTY29yZTogJHtNYXRoLnJvdW5kKHRoaXMueCl9YCwgR2FtZS5zY3JlZW4ueCAvIDIsIHkgKyA3MCk7XG5cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IENhbWVyYSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9jYW1lcmEnO1xuaW1wb3J0IElucHV0TWFuYWdlciBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9pbnB1dC1tYW5hZ2VyJztcbmltcG9ydCBTY2VuZU1hbmFnZXIsIHtcbiAgU2NlbmUsXG4gIFNjZW5lVHJhbnNpdGlvblN0YXRlLFxufSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9zY2VuZS1tYW5hZ2VyJztcbmltcG9ydCB7IHZlYyB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3ZlYyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi9HcmlkJztcbmltcG9ydCBBeGVzIGZyb20gJy4vQXhlcyc7XG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi9DaGFydCc7XG5pbXBvcnQgUm9ja2V0IGZyb20gJy4vUm9ja2V0JztcbmltcG9ydCB7IEdhbWVPdmVyU2NlbmUgfSBmcm9tICcuL0dhbWVPdmVyU2NlbmUnO1xuaW1wb3J0IHsgTWVudVNjZW5lIH0gZnJvbSAnLi9NZW51U2NlbmUnO1xuaW1wb3J0IHsgUGF1c2VTY2VuZSB9IGZyb20gJy4vUGF1c2VTY2VuZSc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBTY2VuZSB7XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRSQU5TSVRJT05fVElNRTogbnVtYmVyID0gMTtcblxuICBwcml2YXRlIGNhbWVyYTogQ2FtZXJhO1xuICBwcml2YXRlIGdyaWQ6IEdyaWQ7XG4gIHByaXZhdGUgYXhlczogQXhlcztcbiAgcHJpdmF0ZSBjaGFydDogQ2hhcnQ7XG4gIHByaXZhdGUgcm9ja2V0OiBSb2NrZXQ7XG5cbiAgcHJpdmF0ZSBsYXN0UG9pbnRzVGltZSA9IDA7XG4gIHByaXZhdGUgcG9pbnRzOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIHByZXZpb3VzUG9zaXRpb246IG51bWJlciA9IDA7XG4gIHByaXZhdGUgcHJldmlvdXNQb2ludHM6IG51bWJlciA9IDA7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIHRyYW5zaXRpb25UaW1lOiBHYW1lU2NlbmUuVFJBTlNJVElPTl9USU1FLFxuICAgICAgdHJhbnNwYXJlbnQ6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgY2VudGVyID0gdmVjLm11bChHYW1lLnNjcmVlbiwgMSAvIDIpO1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYShjZW50ZXIsIHtcbiAgICAgIG1vdmVFYXNlQW1vdW50OiAwLjgsXG4gICAgfSk7XG5cbiAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCgpO1xuICAgIHRoaXMuYXhlcyA9IG5ldyBBeGVzKCk7XG4gICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydCgpO1xuXG4gICAgY29uc3QgeyBtaW4sIG1heCB9ID0gdGhpcy5jaGFydC5mKGNlbnRlci54KTtcbiAgICB0aGlzLnJvY2tldCA9IG5ldyBSb2NrZXQodmVjKGNlbnRlci54LCAobWluICsgbWF4KSAvIDIpKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgIGNvbnN0IGNlbnRlciA9IHZlYy5tdWwoR2FtZS5zY3JlZW4sIDEgLyAyKTtcbiAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleVByZXNzZWQoJ0VzY2FwZScpKSB7XG4gICAgICBTY2VuZU1hbmFnZXIucG9wKCk7XG4gICAgICBTY2VuZU1hbmFnZXIucHVzaChuZXcgTWVudVNjZW5lKCkpO1xuICAgIH1cblxuICAgIGlmIChJbnB1dE1hbmFnZXIua2V5UHJlc3NlZCgnU3BhY2UnKSkge1xuICAgICAgU2NlbmVNYW5hZ2VyLnB1c2gobmV3IFBhdXNlU2NlbmUoKSk7XG4gICAgfVxuXG4gICAgdGhpcy5yb2NrZXQudXBkYXRlKGR0KTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbiA9IHZlYyh0aGlzLnJvY2tldC5wb3NpdGlvbi54LCBjZW50ZXIueSk7XG5cbiAgICBjb25zdCB7IG1pbiwgbWF4LCBhdmcgfSA9IHRoaXMuY2hhcnQuZih0aGlzLnJvY2tldC5wb3NpdGlvbi54KTtcblxuICAgIHRoaXMubGFzdFBvaW50c1RpbWUgKz0gZHQ7XG4gICAgaWYgKHRoaXMubGFzdFBvaW50c1RpbWUgPiAxKSB7XG4gICAgICB0aGlzLnByZXZpb3VzUG9zaXRpb24gPSB0aGlzLnJvY2tldC5wb3NpdGlvbi55O1xuICAgICAgdGhpcy5wcmV2aW91c1BvaW50cyA9IHRoaXMucG9pbnRzO1xuICAgICAgdGhpcy5wb2ludHMgKz0gKDEwMCAtIE1hdGguYWJzKHRoaXMucm9ja2V0LnBvc2l0aW9uLnkgLSBhdmcpKTtcbiAgICAgIHRoaXMubGFzdFBvaW50c1RpbWUgPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJvY2tldC5wb3NpdGlvbi55ID49IG1pbiB8fCB0aGlzLnJvY2tldC5wb3NpdGlvbi55IDw9IG1heCkge1xuICAgICAgU2NlbmVNYW5hZ2VyLnBvcCgpO1xuICAgICAgU2NlbmVNYW5hZ2VyLnB1c2gobmV3IEdhbWVPdmVyU2NlbmUodGhpcy5yb2NrZXQucG9zaXRpb24ueCArIHRoaXMucG9pbnRzKSk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5yb2NrZXQucG9zaXRpb24ueSA8PSAwIHx8XG4gICAgICB0aGlzLnJvY2tldC5wb3NpdGlvbi55ID49IEdhbWUuc2NyZWVuLnlcbiAgICApIHtcbiAgICAgIFNjZW5lTWFuYWdlci5wb3AoKTtcbiAgICAgIFNjZW5lTWFuYWdlci5wdXNoKG5ldyBHYW1lT3ZlclNjZW5lKHRoaXMucm9ja2V0LnBvc2l0aW9uLnggKyB0aGlzLnBvaW50cykpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGlmICh0aGlzLnRyYW5zaXRpb25TdGF0ZSAhPT0gU2NlbmVUcmFuc2l0aW9uU3RhdGUuTm9uZSkge1xuICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IHRoaXMudHJhbnNpdGlvbkFtb3VudDtcbiAgICB9XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBHYW1lLnNjcmVlbi54LCBHYW1lLnNjcmVlbi55KTtcblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMuY2FtZXJhLmRyYXcoY29udGV4dCwgR2FtZS5zY3JlZW4ueCwgR2FtZS5zY3JlZW4ueSk7XG5cbiAgICB0aGlzLmdyaWQuZHJhdyhjb250ZXh0LCB0aGlzLmNhbWVyYS5ib3VuZHMpO1xuICAgIHRoaXMuY2hhcnQuZHJhdyhjb250ZXh0LCB0aGlzLmNhbWVyYS5ib3VuZHMpO1xuICAgIHRoaXMuYXhlcy5kcmF3KGNvbnRleHQsIHRoaXMuY2FtZXJhLmJvdW5kcyk7XG4gICAgdGhpcy5yb2NrZXQuZHJhdyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLnJvY2tldC5wb3NpdGlvbi54IDwgdGhpcy5wcmV2aW91c1Bvc2l0aW9uID8gJ3JlZCcgOiAnYmx1ZSc7XG4gICAgY29udGV4dC5maWxsUmVjdCgzMCwgMzAsIDIwMCwgMzApO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBjb250ZXh0LmZvbnQgPSAnYm9sZCAxNnB4IHNhbnMtc2VyaWYnO1xuICAgIGNvbnN0IHBvc2l0aW9uU3ltYm9sID0gdGhpcy5yb2NrZXQucG9zaXRpb24ueCA8IHRoaXMucHJldmlvdXNQb3NpdGlvbiA/ICdcXHV7MjVCQ30nIDogJ1xcdXsyNUIyfSc7XG4gICAgY29udGV4dC5maWxsVGV4dChgJHtwb3NpdGlvblN5bWJvbH0gUE9TICR7TWF0aC5yb3VuZCh0aGlzLnJvY2tldC5wb3NpdGlvbi54KX1gLCA0MCwgNTApO1xuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLnBvaW50cyA8IHRoaXMucHJldmlvdXNQb2ludHMgPyAncmVkJyA6ICdncmVlbic7XG4gICAgY29udGV4dC5maWxsUmVjdCgyNDAsIDMwLCAyMDAsIDMwKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgY29udGV4dC5mb250ID0gJ2JvbGQgMTZweCBzYW5zLXNlcmlmJztcbiAgICBjb25zdCBwb2ludHNTeW1ib2wgPSB0aGlzLnBvaW50cyA8IHRoaXMucHJldmlvdXNQb2ludHMgPyAnXFx1ezI1QkN9JyA6ICdcXHV7MjVCMn0nO1xuICAgIGNvbnRleHQuZmlsbFRleHQoYCR7cG9pbnRzU3ltYm9sfSBQVFMgJHtNYXRoLnJvdW5kKHRoaXMucG9pbnRzKX1gLCAyNTAsIDUwKTtcblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IEFjdG9yIGZyb20gJy4vQWN0b3InO1xuaW1wb3J0IHsgQ2FtZXJhQm91bmRzIH0gZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvY2FtZXJhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCBleHRlbmRzIEFjdG9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSBDT0xPVVIgPSAnI2NjYyc7XG4gIHByaXZhdGUgcmVhZG9ubHkgU1RST0tFID0gMTtcbiAgcHJpdmF0ZSByZWFkb25seSBTSVpFID0gMTAwO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSgpIHt9XG5cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBib3VuZHM6IENhbWVyYUJvdW5kcykge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLkNPTE9VUjtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMuU1RST0tFO1xuXG4gICAgLy8gR3JpZFxuICAgIGNvbnN0IHRvcExlZnQgPSB2ZWMoXG4gICAgICBNYXRoLmZsb29yKGJvdW5kcy5sZWZ0IC8gdGhpcy5TSVpFKSAqIHRoaXMuU0laRSxcbiAgICAgIE1hdGguZmxvb3IoYm91bmRzLnRvcCAvIHRoaXMuU0laRSkgKiB0aGlzLlNJWkVcbiAgICApO1xuICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gdmVjKFxuICAgICAgTWF0aC5jZWlsKGJvdW5kcy5yaWdodCAvIHRoaXMuU0laRSkgKiB0aGlzLlNJWkUsXG4gICAgICBNYXRoLmNlaWwoYm91bmRzLmJvdHRvbSAvIHRoaXMuU0laRSkgKiB0aGlzLlNJWkVcbiAgICApO1xuXG4gICAgZm9yIChsZXQgeCA9IHRvcExlZnQueDsgeCA8PSBib3R0b21SaWdodC54OyB4ICs9IHRoaXMuU0laRSkge1xuICAgICAgdGhpcy5kcmF3TGluZShjb250ZXh0LCB2ZWMoeCwgdG9wTGVmdC55KSwgdmVjKHgsIGJvdHRvbVJpZ2h0LnkpKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCB5ID0gdG9wTGVmdC55OyB5IDw9IGJvdHRvbVJpZ2h0Lnk7IHkgKz0gdGhpcy5TSVpFKSB7XG4gICAgICB0aGlzLmRyYXdMaW5lKGNvbnRleHQsIHZlYyh0b3BMZWZ0LngsIHkpLCB2ZWMoYm90dG9tUmlnaHQueCwgeSkpO1xuICAgIH1cblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3TGluZShjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGE6IHZlYywgYjogdmVjKSB7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb250ZXh0Lm1vdmVUbyhhLngsIGEueSk7XG4gICAgY29udGV4dC5saW5lVG8oYi54LCBiLnkpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgfVxufVxuIiwiaW1wb3J0IElucHV0TWFuYWdlciBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9pbnB1dC1tYW5hZ2VyJztcbmltcG9ydCBTY2VuZU1hbmFnZXIsIHtcbiAgU2NlbmUsXG4gIFNjZW5lVHJhbnNpdGlvblN0YXRlLFxufSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS9zY2VuZS1tYW5hZ2VyJztcbmltcG9ydCB7IGxlcnAgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS91dGlscyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9HYW1lU2NlbmUnO1xuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzb24nO1xuXG5leHBvcnQgY2xhc3MgTWVudVNjZW5lIGV4dGVuZHMgU2NlbmUge1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgdHJhbnNpdGlvblRpbWU6IDEsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGlzZSgpIHt9XG5cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgaWYgKElucHV0TWFuYWdlci5rZXlQcmVzc2VkKCkpIHtcbiAgICAgIFNjZW5lTWFuYWdlci5wb3AoKTtcbiAgICAgIFNjZW5lTWFuYWdlci5wdXNoKG5ldyBHYW1lU2NlbmUoKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvblN0YXRlICE9PSBTY2VuZVRyYW5zaXRpb25TdGF0ZS5Ob25lKSB7XG4gICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gdGhpcy50cmFuc2l0aW9uQW1vdW50O1xuICAgIH1cblxuICAgIGNvbnN0IHkgPSBsZXJwKC0yMDAsIEdhbWUuc2NyZWVuLnkgLyAyLCB0aGlzLnRyYW5zaXRpb25BbW91bnQpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYHJnYmEoMCwgMCwgMCwgJHtNYXRoLmZsb29yKHRoaXMudHJhbnNpdGlvbkFtb3VudCAqIDEwMCkgLyAxMDB9KWA7XG4gICAgY29udGV4dC5mb250ID0gJzQ4cHggVGltZXMgTmV3IFJvbWFuJztcbiAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgY29udGV4dC5maWxsVGV4dChjb25maWcudGl0bGUsIEdhbWUuc2NyZWVuLnggLyAyLCB5KTtcbiAgICBjb250ZXh0LmZvbnQgPSAnMzZweCBUaW1lcyBOZXcgUm9tYW4nO1xuICAgIGNvbnRleHQuZmlsbFRleHQoJ1ByZXNzIGFueSBrZXknLCBHYW1lLnNjcmVlbi54IC8gMiwgeSArIDcwKTtcblxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgSW5wdXRNYW5hZ2VyIGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL2lucHV0LW1hbmFnZXInO1xuaW1wb3J0IFNjZW5lTWFuYWdlciwge1xuICBTY2VuZSxcbiAgU2NlbmVUcmFuc2l0aW9uU3RhdGUsXG59IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3NjZW5lLW1hbmFnZXInO1xuaW1wb3J0IHsgbGVycCB9IGZyb20gJ0BiYXNlbWVudHVuaXZlcnNlL3V0aWxzJztcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL0dhbWVTY2VuZSc7XG5cbmV4cG9ydCBjbGFzcyBQYXVzZVNjZW5lIGV4dGVuZHMgU2NlbmUge1xuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgdHJhbnNpdGlvblRpbWU6IDEsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGlzZSgpIHt9XG5cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgaWYgKElucHV0TWFuYWdlci5rZXlQcmVzc2VkKCkpIHtcbiAgICAgIFNjZW5lTWFuYWdlci5wb3AoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBpZiAodGhpcy50cmFuc2l0aW9uU3RhdGUgIT09IFNjZW5lVHJhbnNpdGlvblN0YXRlLk5vbmUpIHtcbiAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSB0aGlzLnRyYW5zaXRpb25BbW91bnQ7XG4gICAgfVxuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSc7XG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBHYW1lLnNjcmVlbi54LCBHYW1lLnNjcmVlbi55KTtcblxuICAgIGNvbnN0IHkgPSBsZXJwKC0yMDAsIEdhbWUuc2NyZWVuLnkgLyAyLCB0aGlzLnRyYW5zaXRpb25BbW91bnQpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYHJnYmEoMCwgMCwgMCwgJHtNYXRoLmZsb29yKHRoaXMudHJhbnNpdGlvbkFtb3VudCAqIDEwMCkgLyAxMDB9KWA7XG4gICAgY29udGV4dC5mb250ID0gJzQ4cHggVGltZXMgTmV3IFJvbWFuJztcbiAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgY29udGV4dC5maWxsVGV4dCgnUGF1c2VkJywgR2FtZS5zY3JlZW4ueCAvIDIsIHkpO1xuXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG4gIH1cbn1cbiIsImltcG9ydCBJbnB1dE1hbmFnZXIgZnJvbSAnQGJhc2VtZW50dW5pdmVyc2UvaW5wdXQtbWFuYWdlcic7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICdAYmFzZW1lbnR1bml2ZXJzZS92ZWMnO1xuaW1wb3J0IEFjdG9yIGZyb20gJy4vQWN0b3InO1xuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzb24nO1xuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9HYW1lU2NlbmUnO1xuaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvY2tldCBleHRlbmRzIEFjdG9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSBGSUxMX0NPTE9VUiA9ICd3aGl0ZSc7XG4gIHByaXZhdGUgcmVhZG9ubHkgU1RST0tFX0NPTE9VUiA9ICdibGFjayc7XG4gIHByaXZhdGUgcmVhZG9ubHkgU0laRSA9IDMyO1xuICBwcml2YXRlIHJlYWRvbmx5IFNUUk9LRSA9IDI7XG4gIHByaXZhdGUgcmVhZG9ubHkgVEhSVVNUID0gNTtcbiAgcHJpdmF0ZSByZWFkb25seSBUVVJOX1NQRUVEID0gMS44O1xuICBwcml2YXRlIHJlYWRvbmx5IEZSSUNUSU9OID0gMC45OTI7XG4gIHByaXZhdGUgcmVhZG9ubHkgR1JBVklUWSA9IDAuODtcblxuICBwdWJsaWMgcG9zaXRpb246IHZlYyA9IHZlYygpO1xuICBwdWJsaWMgdmVsb2NpdHk6IHZlYyA9IHZlYygpO1xuICBwdWJsaWMgZGlyZWN0aW9uOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgc2l6ZTogdmVjID0gdmVjKHRoaXMuU0laRSwgdGhpcy5TSVpFKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocG9zaXRpb246IHZlYykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgLy8gVHVybmluZ1xuICAgIGlmIChJbnB1dE1hbmFnZXIua2V5RG93bihjb25maWcuY29udHJvbHMubGVmdCkpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uIC09IHRoaXMuVFVSTl9TUEVFRCAqIGR0O1xuICAgIH0gZWxzZSBpZiAoSW5wdXRNYW5hZ2VyLmtleURvd24oY29uZmlnLmNvbnRyb2xzLnJpZ2h0KSkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gKz0gdGhpcy5UVVJOX1NQRUVEICogZHQ7XG4gICAgfVxuXG4gICAgLy8gVGhydXN0XG4gICAgbGV0IG1vdmVWZWN0b3IgPSB2ZWMoKTtcbiAgICBpZiAoSW5wdXRNYW5hZ2VyLmtleURvd24oY29uZmlnLmNvbnRyb2xzLnVwKSkge1xuICAgICAgbW92ZVZlY3RvciA9IHZlYyh0aGlzLlRIUlVTVCwgMCk7XG4gICAgfSBlbHNlIGlmIChJbnB1dE1hbmFnZXIua2V5RG93bihjb25maWcuY29udHJvbHMuZG93bikpIHtcbiAgICAgIG1vdmVWZWN0b3IgPSB2ZWMoLXRoaXMuVEhSVVNULCAwKTtcbiAgICB9XG4gICAgbW92ZVZlY3RvciA9IHZlYy5yb3QobW92ZVZlY3RvciwgdGhpcy5kaXJlY3Rpb24pO1xuXG4gICAgLy8gR3Jhdml0eVxuICAgIG1vdmVWZWN0b3IgPSB2ZWMuYWRkKG1vdmVWZWN0b3IsIHZlYygwLCB0aGlzLkdSQVZJVFkpKTtcblxuICAgIC8vIEludGVncmF0ZVxuICAgIHRoaXMudmVsb2NpdHkgPSB2ZWMuYWRkKHRoaXMudmVsb2NpdHksIG1vdmVWZWN0b3IpO1xuICAgIHRoaXMudmVsb2NpdHkgPSB2ZWMubXVsKHRoaXMudmVsb2NpdHksIHRoaXMuRlJJQ1RJT04pO1xuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMuYWRkKHRoaXMucG9zaXRpb24sIHZlYy5tdWwodGhpcy52ZWxvY2l0eSwgZHQpKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICBjb250ZXh0LnJvdGF0ZSh0aGlzLmRpcmVjdGlvbik7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuU1RST0tFX0NPTE9VUjtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuRklMTF9DT0xPVVI7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSB0aGlzLlNUUk9LRTtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQubW92ZVRvKC10aGlzLnNpemUueCAvIDIsIC10aGlzLnNpemUueSAvIDIpO1xuICAgIGNvbnRleHQubGluZVRvKHRoaXMuc2l6ZS54IC8gMiwgMCk7XG4gICAgY29udGV4dC5saW5lVG8oLXRoaXMuc2l6ZS54IC8gMiwgdGhpcy5zaXplLnkgLyAyKTtcbiAgICBjb250ZXh0LmxpbmVUbygtdGhpcy5zaXplLnggLyAyLCB0aGlzLnNpemUueSAqIDAuMSk7XG4gICAgY29udGV4dC5saW5lVG8oLXRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSAqIDAuMSk7XG4gICAgY29udGV4dC5saW5lVG8oLXRoaXMuc2l6ZS54LCAtdGhpcy5zaXplLnkgKiAwLjEpO1xuICAgIGNvbnRleHQubGluZVRvKC10aGlzLnNpemUueCAvIDIsIC10aGlzLnNpemUueSAqIDAuMSk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgREVCVUcgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBGUFNfTUlOID0gMSAvIDMwO1xuZXhwb3J0IGNvbnN0IFNFQ09ORCA9IDEwMDA7XG4iLCIvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9iYW5rc2Vhbi8zMDQ1MjJcbi8vXG4vLyBQb3J0ZWQgZnJvbSBTdGVmYW4gR3VzdGF2c29uJ3MgamF2YSBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cDovL3N0YWZmd3d3Lml0bi5saXUuc2UvfnN0ZWd1L3NpbXBsZXhub2lzZS9zaW1wbGV4bm9pc2UucGRmXG4vLyBSZWFkIFN0ZWZhbidzIGV4Y2VsbGVudCBwYXBlciBmb3IgZGV0YWlscyBvbiBob3cgdGhpcyBjb2RlIHdvcmtzLlxuLy9cbi8vIFNlYW4gTWNDdWxsb3VnaCBiYW5rc2VhbkBnbWFpbC5jb21cblxuLyoqXG4gKiBZb3UgY2FuIHBhc3MgaW4gYSByYW5kb20gbnVtYmVyIGdlbmVyYXRvciBvYmplY3QgaWYgeW91IGxpa2UuXG4gKiBJdCBpcyBhc3N1bWVkIHRvIGhhdmUgYSByYW5kb20oKSBtZXRob2QuXG4gKi9cblxuTm9pc2UgPSB7fVxuXG5Ob2lzZS5TaW1wbGV4Tm9pc2UgPSBmdW5jdGlvbihyKSB7XG4gIGlmIChyID09IHVuZGVmaW5lZCkgciA9IE1hdGg7XG4gIHRoaXMuZ3JhZDMgPSBbWzEsMSwwXSxbLTEsMSwwXSxbMSwtMSwwXSxbLTEsLTEsMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbMSwwLDFdLFstMSwwLDFdLFsxLDAsLTFdLFstMSwwLC0xXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFswLDEsMV0sWzAsLTEsMV0sWzAsMSwtMV0sWzAsLTEsLTFdXTtcbiAgdGhpcy5wID0gW107XG4gIGZvciAodmFyIGk9MDsgaTwyNTY7IGkrKykge1xuICAgIHRoaXMucFtpXSA9IE1hdGguZmxvb3Ioci5yYW5kb20oKSoyNTYpO1xuICB9XG4gIC8vIFRvIHJlbW92ZSB0aGUgbmVlZCBmb3IgaW5kZXggd3JhcHBpbmcsIGRvdWJsZSB0aGUgcGVybXV0YXRpb24gdGFibGUgbGVuZ3RoXG4gIHRoaXMucGVybSA9IFtdO1xuICBmb3IodmFyIGk9MDsgaTw1MTI7IGkrKykge1xuICAgIHRoaXMucGVybVtpXT10aGlzLnBbaSAmIDI1NV07XG4gIH1cblxuICAvLyBBIGxvb2t1cCB0YWJsZSB0byB0cmF2ZXJzZSB0aGUgc2ltcGxleCBhcm91bmQgYSBnaXZlbiBwb2ludCBpbiA0RC5cbiAgLy8gRGV0YWlscyBjYW4gYmUgZm91bmQgd2hlcmUgdGhpcyB0YWJsZSBpcyB1c2VkLCBpbiB0aGUgNEQgbm9pc2UgbWV0aG9kLlxuICB0aGlzLnNpbXBsZXggPSBbXG4gICAgWzAsMSwyLDNdLFswLDEsMywyXSxbMCwwLDAsMF0sWzAsMiwzLDFdLFswLDAsMCwwXSxbMCwwLDAsMF0sWzAsMCwwLDBdLFsxLDIsMywwXSxcbiAgICBbMCwyLDEsM10sWzAsMCwwLDBdLFswLDMsMSwyXSxbMCwzLDIsMV0sWzAsMCwwLDBdLFswLDAsMCwwXSxbMCwwLDAsMF0sWzEsMywyLDBdLFxuICAgIFswLDAsMCwwXSxbMCwwLDAsMF0sWzAsMCwwLDBdLFswLDAsMCwwXSxbMCwwLDAsMF0sWzAsMCwwLDBdLFswLDAsMCwwXSxbMCwwLDAsMF0sXG4gICAgWzEsMiwwLDNdLFswLDAsMCwwXSxbMSwzLDAsMl0sWzAsMCwwLDBdLFswLDAsMCwwXSxbMCwwLDAsMF0sWzIsMywwLDFdLFsyLDMsMSwwXSxcbiAgICBbMSwwLDIsM10sWzEsMCwzLDJdLFswLDAsMCwwXSxbMCwwLDAsMF0sWzAsMCwwLDBdLFsyLDAsMywxXSxbMCwwLDAsMF0sWzIsMSwzLDBdLFxuICAgIFswLDAsMCwwXSxbMCwwLDAsMF0sWzAsMCwwLDBdLFswLDAsMCwwXSxbMCwwLDAsMF0sWzAsMCwwLDBdLFswLDAsMCwwXSxbMCwwLDAsMF0sXG4gICAgWzIsMCwxLDNdLFswLDAsMCwwXSxbMCwwLDAsMF0sWzAsMCwwLDBdLFszLDAsMSwyXSxbMywwLDIsMV0sWzAsMCwwLDBdLFszLDEsMiwwXSxcbiAgICBbMiwxLDAsM10sWzAsMCwwLDBdLFswLDAsMCwwXSxbMCwwLDAsMF0sWzMsMSwwLDJdLFswLDAsMCwwXSxbMywyLDAsMV0sWzMsMiwxLDBdXTtcbn07XG5cbk5vaXNlLlNpbXBsZXhOb2lzZS5wcm90b3R5cGUuZG90ID0gZnVuY3Rpb24oZywgeCwgeSkge1xuICByZXR1cm4gZ1swXSp4ICsgZ1sxXSp5O1xufTtcblxuTm9pc2UuU2ltcGxleE5vaXNlLnByb3RvdHlwZS5kb3QzID0gZnVuY3Rpb24oZywgeCwgeSwgeikge1xuICByZXR1cm4gZ1swXSp4ICsgZ1sxXSp5ICsgZ1syXSp6O1xufTtcblxuTm9pc2UuU2ltcGxleE5vaXNlLnByb3RvdHlwZS5ub2lzZSA9IGZ1bmN0aW9uKHhpbiwgeWluKSB7XG4gIHZhciBuMCwgbjEsIG4yOyAvLyBOb2lzZSBjb250cmlidXRpb25zIGZyb20gdGhlIHRocmVlIGNvcm5lcnNcbiAgLy8gU2tldyB0aGUgaW5wdXQgc3BhY2UgdG8gZGV0ZXJtaW5lIHdoaWNoIHNpbXBsZXggY2VsbCB3ZSdyZSBpblxuICB2YXIgRjIgPSAwLjUqKE1hdGguc3FydCgzLjApLTEuMCk7XG4gIHZhciBzID0gKHhpbit5aW4pKkYyOyAvLyBIYWlyeSBmYWN0b3IgZm9yIDJEXG4gIHZhciBpID0gTWF0aC5mbG9vcih4aW4rcyk7XG4gIHZhciBqID0gTWF0aC5mbG9vcih5aW4rcyk7XG4gIHZhciBHMiA9ICgzLjAtTWF0aC5zcXJ0KDMuMCkpLzYuMDtcbiAgdmFyIHQgPSAoaStqKSpHMjtcbiAgdmFyIFgwID0gaS10OyAvLyBVbnNrZXcgdGhlIGNlbGwgb3JpZ2luIGJhY2sgdG8gKHgseSkgc3BhY2VcbiAgdmFyIFkwID0gai10O1xuICB2YXIgeDAgPSB4aW4tWDA7IC8vIFRoZSB4LHkgZGlzdGFuY2VzIGZyb20gdGhlIGNlbGwgb3JpZ2luXG4gIHZhciB5MCA9IHlpbi1ZMDtcbiAgLy8gRm9yIHRoZSAyRCBjYXNlLCB0aGUgc2ltcGxleCBzaGFwZSBpcyBhbiBlcXVpbGF0ZXJhbCB0cmlhbmdsZS5cbiAgLy8gRGV0ZXJtaW5lIHdoaWNoIHNpbXBsZXggd2UgYXJlIGluLlxuICB2YXIgaTEsIGoxOyAvLyBPZmZzZXRzIGZvciBzZWNvbmQgKG1pZGRsZSkgY29ybmVyIG9mIHNpbXBsZXggaW4gKGksaikgY29vcmRzXG4gIGlmKHgwPnkwKSB7aTE9MTsgajE9MDt9IC8vIGxvd2VyIHRyaWFuZ2xlLCBYWSBvcmRlcjogKDAsMCktPigxLDApLT4oMSwxKVxuICBlbHNlIHtpMT0wOyBqMT0xO30gICAgICAvLyB1cHBlciB0cmlhbmdsZSwgWVggb3JkZXI6ICgwLDApLT4oMCwxKS0+KDEsMSlcbiAgLy8gQSBzdGVwIG9mICgxLDApIGluIChpLGopIG1lYW5zIGEgc3RlcCBvZiAoMS1jLC1jKSBpbiAoeCx5KSwgYW5kXG4gIC8vIGEgc3RlcCBvZiAoMCwxKSBpbiAoaSxqKSBtZWFucyBhIHN0ZXAgb2YgKC1jLDEtYykgaW4gKHgseSksIHdoZXJlXG4gIC8vIGMgPSAoMy1zcXJ0KDMpKS82XG4gIHZhciB4MSA9IHgwIC0gaTEgKyBHMjsgLy8gT2Zmc2V0cyBmb3IgbWlkZGxlIGNvcm5lciBpbiAoeCx5KSB1bnNrZXdlZCBjb29yZHNcbiAgdmFyIHkxID0geTAgLSBqMSArIEcyO1xuICB2YXIgeDIgPSB4MCAtIDEuMCArIDIuMCAqIEcyOyAvLyBPZmZzZXRzIGZvciBsYXN0IGNvcm5lciBpbiAoeCx5KSB1bnNrZXdlZCBjb29yZHNcbiAgdmFyIHkyID0geTAgLSAxLjAgKyAyLjAgKiBHMjtcbiAgLy8gV29yayBvdXQgdGhlIGhhc2hlZCBncmFkaWVudCBpbmRpY2VzIG9mIHRoZSB0aHJlZSBzaW1wbGV4IGNvcm5lcnNcbiAgdmFyIGlpID0gaSAmIDI1NTtcbiAgdmFyIGpqID0gaiAmIDI1NTtcbiAgdmFyIGdpMCA9IHRoaXMucGVybVtpaSt0aGlzLnBlcm1bampdXSAlIDEyO1xuICB2YXIgZ2kxID0gdGhpcy5wZXJtW2lpK2kxK3RoaXMucGVybVtqaitqMV1dICUgMTI7XG4gIHZhciBnaTIgPSB0aGlzLnBlcm1baWkrMSt0aGlzLnBlcm1bamorMV1dICUgMTI7XG4gIC8vIENhbGN1bGF0ZSB0aGUgY29udHJpYnV0aW9uIGZyb20gdGhlIHRocmVlIGNvcm5lcnNcbiAgdmFyIHQwID0gMC41IC0geDAqeDAteTAqeTA7XG4gIGlmKHQwPDApIG4wID0gMC4wO1xuICBlbHNlIHtcbiAgICB0MCAqPSB0MDtcbiAgICBuMCA9IHQwICogdDAgKiB0aGlzLmRvdCh0aGlzLmdyYWQzW2dpMF0sIHgwLCB5MCk7ICAvLyAoeCx5KSBvZiBncmFkMyB1c2VkIGZvciAyRCBncmFkaWVudFxuICB9XG4gIHZhciB0MSA9IDAuNSAtIHgxKngxLXkxKnkxO1xuICBpZih0MTwwKSBuMSA9IDAuMDtcbiAgZWxzZSB7XG4gICAgdDEgKj0gdDE7XG4gICAgbjEgPSB0MSAqIHQxICogdGhpcy5kb3QodGhpcy5ncmFkM1tnaTFdLCB4MSwgeTEpO1xuICB9XG4gIHZhciB0MiA9IDAuNSAtIHgyKngyLXkyKnkyO1xuICBpZih0MjwwKSBuMiA9IDAuMDtcbiAgZWxzZSB7XG4gICAgdDIgKj0gdDI7XG4gICAgbjIgPSB0MiAqIHQyICogdGhpcy5kb3QodGhpcy5ncmFkM1tnaTJdLCB4MiwgeTIpO1xuICB9XG4gIC8vIEFkZCBjb250cmlidXRpb25zIGZyb20gZWFjaCBjb3JuZXIgdG8gZ2V0IHRoZSBmaW5hbCBub2lzZSB2YWx1ZS5cbiAgLy8gVGhlIHJlc3VsdCBpcyBzY2FsZWQgdG8gcmV0dXJuIHZhbHVlcyBpbiB0aGUgaW50ZXJ2YWwgWy0xLDFdLlxuICByZXR1cm4gNzAuMCAqIChuMCArIG4xICsgbjIpO1xufTtcblxuLy8gM0Qgc2ltcGxleCBub2lzZVxuTm9pc2UuU2ltcGxleE5vaXNlLnByb3RvdHlwZS5ub2lzZTNkID0gZnVuY3Rpb24oeGluLCB5aW4sIHppbikge1xuICB2YXIgbjAsIG4xLCBuMiwgbjM7IC8vIE5vaXNlIGNvbnRyaWJ1dGlvbnMgZnJvbSB0aGUgZm91ciBjb3JuZXJzXG4gIC8vIFNrZXcgdGhlIGlucHV0IHNwYWNlIHRvIGRldGVybWluZSB3aGljaCBzaW1wbGV4IGNlbGwgd2UncmUgaW5cbiAgdmFyIEYzID0gMS4wLzMuMDtcbiAgdmFyIHMgPSAoeGluK3lpbit6aW4pKkYzOyAvLyBWZXJ5IG5pY2UgYW5kIHNpbXBsZSBza2V3IGZhY3RvciBmb3IgM0RcbiAgdmFyIGkgPSBNYXRoLmZsb29yKHhpbitzKTtcbiAgdmFyIGogPSBNYXRoLmZsb29yKHlpbitzKTtcbiAgdmFyIGsgPSBNYXRoLmZsb29yKHppbitzKTtcbiAgdmFyIEczID0gMS4wLzYuMDsgLy8gVmVyeSBuaWNlIGFuZCBzaW1wbGUgdW5za2V3IGZhY3RvciwgdG9vXG4gIHZhciB0ID0gKGkraitrKSpHMztcbiAgdmFyIFgwID0gaS10OyAvLyBVbnNrZXcgdGhlIGNlbGwgb3JpZ2luIGJhY2sgdG8gKHgseSx6KSBzcGFjZVxuICB2YXIgWTAgPSBqLXQ7XG4gIHZhciBaMCA9IGstdDtcbiAgdmFyIHgwID0geGluLVgwOyAvLyBUaGUgeCx5LHogZGlzdGFuY2VzIGZyb20gdGhlIGNlbGwgb3JpZ2luXG4gIHZhciB5MCA9IHlpbi1ZMDtcbiAgdmFyIHowID0gemluLVowO1xuICAvLyBGb3IgdGhlIDNEIGNhc2UsIHRoZSBzaW1wbGV4IHNoYXBlIGlzIGEgc2xpZ2h0bHkgaXJyZWd1bGFyIHRldHJhaGVkcm9uLlxuICAvLyBEZXRlcm1pbmUgd2hpY2ggc2ltcGxleCB3ZSBhcmUgaW4uXG4gIHZhciBpMSwgajEsIGsxOyAvLyBPZmZzZXRzIGZvciBzZWNvbmQgY29ybmVyIG9mIHNpbXBsZXggaW4gKGksaixrKSBjb29yZHNcbiAgdmFyIGkyLCBqMiwgazI7IC8vIE9mZnNldHMgZm9yIHRoaXJkIGNvcm5lciBvZiBzaW1wbGV4IGluIChpLGosaykgY29vcmRzXG4gIGlmKHgwPj15MCkge1xuICAgIGlmKHkwPj16MClcbiAgICAgIHsgaTE9MTsgajE9MDsgazE9MDsgaTI9MTsgajI9MTsgazI9MDsgfSAvLyBYIFkgWiBvcmRlclxuICAgICAgZWxzZSBpZih4MD49ejApIHsgaTE9MTsgajE9MDsgazE9MDsgaTI9MTsgajI9MDsgazI9MTsgfSAvLyBYIFogWSBvcmRlclxuICAgICAgZWxzZSB7IGkxPTA7IGoxPTA7IGsxPTE7IGkyPTE7IGoyPTA7IGsyPTE7IH0gLy8gWiBYIFkgb3JkZXJcbiAgICB9XG4gIGVsc2UgeyAvLyB4MDx5MFxuICAgIGlmKHkwPHowKSB7IGkxPTA7IGoxPTA7IGsxPTE7IGkyPTA7IGoyPTE7IGsyPTE7IH0gLy8gWiBZIFggb3JkZXJcbiAgICBlbHNlIGlmKHgwPHowKSB7IGkxPTA7IGoxPTE7IGsxPTA7IGkyPTA7IGoyPTE7IGsyPTE7IH0gLy8gWSBaIFggb3JkZXJcbiAgICBlbHNlIHsgaTE9MDsgajE9MTsgazE9MDsgaTI9MTsgajI9MTsgazI9MDsgfSAvLyBZIFggWiBvcmRlclxuICB9XG4gIC8vIEEgc3RlcCBvZiAoMSwwLDApIGluIChpLGosaykgbWVhbnMgYSBzdGVwIG9mICgxLWMsLWMsLWMpIGluICh4LHkseiksXG4gIC8vIGEgc3RlcCBvZiAoMCwxLDApIGluIChpLGosaykgbWVhbnMgYSBzdGVwIG9mICgtYywxLWMsLWMpIGluICh4LHkseiksIGFuZFxuICAvLyBhIHN0ZXAgb2YgKDAsMCwxKSBpbiAoaSxqLGspIG1lYW5zIGEgc3RlcCBvZiAoLWMsLWMsMS1jKSBpbiAoeCx5LHopLCB3aGVyZVxuICAvLyBjID0gMS82LlxuICB2YXIgeDEgPSB4MCAtIGkxICsgRzM7IC8vIE9mZnNldHMgZm9yIHNlY29uZCBjb3JuZXIgaW4gKHgseSx6KSBjb29yZHNcbiAgdmFyIHkxID0geTAgLSBqMSArIEczO1xuICB2YXIgejEgPSB6MCAtIGsxICsgRzM7XG4gIHZhciB4MiA9IHgwIC0gaTIgKyAyLjAqRzM7IC8vIE9mZnNldHMgZm9yIHRoaXJkIGNvcm5lciBpbiAoeCx5LHopIGNvb3Jkc1xuICB2YXIgeTIgPSB5MCAtIGoyICsgMi4wKkczO1xuICB2YXIgejIgPSB6MCAtIGsyICsgMi4wKkczO1xuICB2YXIgeDMgPSB4MCAtIDEuMCArIDMuMCpHMzsgLy8gT2Zmc2V0cyBmb3IgbGFzdCBjb3JuZXIgaW4gKHgseSx6KSBjb29yZHNcbiAgdmFyIHkzID0geTAgLSAxLjAgKyAzLjAqRzM7XG4gIHZhciB6MyA9IHowIC0gMS4wICsgMy4wKkczO1xuICAvLyBXb3JrIG91dCB0aGUgaGFzaGVkIGdyYWRpZW50IGluZGljZXMgb2YgdGhlIGZvdXIgc2ltcGxleCBjb3JuZXJzXG4gIHZhciBpaSA9IGkgJiAyNTU7XG4gIHZhciBqaiA9IGogJiAyNTU7XG4gIHZhciBrayA9IGsgJiAyNTU7XG4gIHZhciBnaTAgPSB0aGlzLnBlcm1baWkrdGhpcy5wZXJtW2pqK3RoaXMucGVybVtra11dXSAlIDEyO1xuICB2YXIgZ2kxID0gdGhpcy5wZXJtW2lpK2kxK3RoaXMucGVybVtqaitqMSt0aGlzLnBlcm1ba2srazFdXV0gJSAxMjtcbiAgdmFyIGdpMiA9IHRoaXMucGVybVtpaStpMit0aGlzLnBlcm1bamorajIrdGhpcy5wZXJtW2trK2syXV1dICUgMTI7XG4gIHZhciBnaTMgPSB0aGlzLnBlcm1baWkrMSt0aGlzLnBlcm1bamorMSt0aGlzLnBlcm1ba2srMV1dXSAlIDEyO1xuICAvLyBDYWxjdWxhdGUgdGhlIGNvbnRyaWJ1dGlvbiBmcm9tIHRoZSBmb3VyIGNvcm5lcnNcbiAgdmFyIHQwID0gMC42IC0geDAqeDAgLSB5MCp5MCAtIHowKnowO1xuICBpZih0MDwwKSBuMCA9IDAuMDtcbiAgZWxzZSB7XG4gICAgdDAgKj0gdDA7XG4gICAgbjAgPSB0MCAqIHQwICogdGhpcy5kb3QzKHRoaXMuZ3JhZDNbZ2kwXSwgeDAsIHkwLCB6MCk7XG4gIH1cbiAgdmFyIHQxID0gMC42IC0geDEqeDEgLSB5MSp5MSAtIHoxKnoxO1xuICBpZih0MTwwKSBuMSA9IDAuMDtcbiAgZWxzZSB7XG4gICAgdDEgKj0gdDE7XG4gICAgbjEgPSB0MSAqIHQxICogdGhpcy5kb3QzKHRoaXMuZ3JhZDNbZ2kxXSwgeDEsIHkxLCB6MSk7XG4gIH1cbiAgdmFyIHQyID0gMC42IC0geDIqeDIgLSB5Mip5MiAtIHoyKnoyO1xuICBpZih0MjwwKSBuMiA9IDAuMDtcbiAgZWxzZSB7XG4gICAgdDIgKj0gdDI7XG4gICAgbjIgPSB0MiAqIHQyICogdGhpcy5kb3QzKHRoaXMuZ3JhZDNbZ2kyXSwgeDIsIHkyLCB6Mik7XG4gIH1cbiAgdmFyIHQzID0gMC42IC0geDMqeDMgLSB5Myp5MyAtIHozKnozO1xuICBpZih0MzwwKSBuMyA9IDAuMDtcbiAgZWxzZSB7XG4gICAgdDMgKj0gdDM7XG4gICAgbjMgPSB0MyAqIHQzICogdGhpcy5kb3QzKHRoaXMuZ3JhZDNbZ2kzXSwgeDMsIHkzLCB6Myk7XG4gIH1cbiAgLy8gQWRkIGNvbnRyaWJ1dGlvbnMgZnJvbSBlYWNoIGNvcm5lciB0byBnZXQgdGhlIGZpbmFsIG5vaXNlIHZhbHVlLlxuICAvLyBUaGUgcmVzdWx0IGlzIHNjYWxlZCB0byBzdGF5IGp1c3QgaW5zaWRlIFstMSwxXVxuICByZXR1cm4gMzIuMCoobjAgKyBuMSArIG4yICsgbjMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOb2lzZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lJykpO1xuICBnYW1lLmluaXRpYWxpc2UoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=