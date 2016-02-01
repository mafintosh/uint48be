var UINT_32_MAX = 0xffffffff

exports.encodingLength = function () {
  return 6
}

exports.encode = function (num, buf, offset) {
  if (!buf) buf = new Buffer(6)
  if (!offset) offset = 0

  var top = Math.floor(num / UINT_32_MAX)
  var rem = num - top * UINT_32_MAX

  buf.writeUInt16BE(top, offset)
  buf.writeUInt32BE(rem, offset + 2)
  return buf
}

exports.decode = function (buf, offset) {
  if (!offset) offset = 0

  if (!buf) buf = new Buffer(6)
  if (!offset) offset = 0

  var top = buf.readUInt16BE(offset)
  var rem = buf.readUInt32BE(offset + 2)

  return top * UINT_32_MAX + rem
}

exports.encode.bytes = 6
exports.decode.bytes = 6
