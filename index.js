const { Writable } = require('stream');


async function waitFor(job) {
	while (job.done != true) { await new Promise(r => setTimeout(r, 100)); }
}

class WritableBufferStream extends Writable {
	constructor(options) {
		super(options);
		this._chunks = [];
	}
	_write(chunk, enc, callback) {
		this._chunks.push(chunk);
		return callback(null);
	}
	toBuffer() {
		return Buffer.concat(this._chunks);
	}
}

module.exports = {
	waitFor,
	WritableBufferStream
};
