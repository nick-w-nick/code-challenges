# 3x+1

Multiply odd numbers by 3 and add 1, divide even numbers by 2, stop when the result equals 1

> Inspired by: https://www.youtube.com/watch?v=094y1Z2wpJg (Veritasium)

## Example

**Input:** `1`

**Output:**
```js
{ iterations: 3, peak: 4, divides: 2, multiplies: 1 }
```

</br>

**Input:** `5`

**Output:**
```js
{ iterations: 5, peak: 16, divides: 4, multiplies: 1 }
```

</br>

**Input:** `26`

**Output:**
```js
{ iterations: 10, peak: 40, divides: 8, multiplies: 2 }
```

</br>

**Input:** `27`

**Output:**
```js
{ iterations: 111, peak: 9232, divides: 70, multiplies: 41 }
```