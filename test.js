var uint48be = require('./')
var tape = require('tape')

tape('encode', function (t) {
  t.same(uint48be.encodingLength(42), 6)
  t.same(uint48be.encode(42), new Buffer([0, 0, 0, 0, 0, 42]))
  t.same(uint48be.encode(42424242424242), new Buffer([0x26, 0x95, 0xa9, 0xe6, 0x70, 0x47]))
  t.same(uint48be.encode.bytes, 6)
  t.end()
})

tape('decode', function (t) {
  t.same(uint48be.decode(new Buffer([0, 0, 0, 0, 0, 42])), 42)
  t.same(uint48be.decode(new Buffer([0x26, 0x95, 0xa9, 0xe6, 0x70, 0x47])), 42424242424242)
  t.same(uint48be.decode(new Buffer.from('ffffffffffff', 'hex')), Math.pow(2, 48) -1)
  t.same(uint48be.decode.bytes, 6)
  t.end()
})
