const { GENESIS_DATA } = require('./config');
const cryptohash = require('./crypto-hash')

class Block {
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;

  }

  static genesis() {
    return new this(GENESIS_DATA);
  }

  static mineBlock({lastblock,data}){
    const timestamp = Date.now();
    const lastHash = lastblock.hash;

    return new this({
      timestamp,
      lastHash,
      data,
      hash : cryptohash(timestamp,lastHash,data)
    });
  }
}

module.exports = Block;
