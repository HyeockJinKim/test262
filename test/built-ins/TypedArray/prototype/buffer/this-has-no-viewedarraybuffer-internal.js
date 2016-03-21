// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.1
description: |
  Throws a TypeError exception when `this` does not have a [[ViewedArrayBuffer]]
  internal slot
info: >
  22.2.3.1 get %TypedArray%.prototype.buffer

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
  3. If O does not have a [[ViewedArrayBuffer]] internal slot, throw a TypeError
  exception.
  ...
includes: [testTypedArray.js]
---*/

var TypedArrayPrototype = TypedArray.prototype;
var getter = Object.getOwnPropertyDescriptor(
  TypedArrayPrototype, "buffer"
).get;

assert.throws(TypeError, function() {
  getter.call({});
});

assert.throws(TypeError, function() {
  getter.call([]);
});

var ab = new ArrayBuffer(8);
assert.throws(TypeError, function() {
  getter.call(ab);
});