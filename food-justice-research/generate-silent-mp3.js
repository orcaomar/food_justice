const fs = require('fs');
const lame = require('lamejs');

const channels = 1; // mono
const sampleRate = 44100; // 44.1khz
const kbps = 128; // encode to 128kbps
const sampleBlockSize = 1152; //can be anything but make it a multiple of 2

const mp3encoder = new lame.Mp3Encoder(channels, sampleRate, kbps);
const pcm = new Int16Array(sampleRate); // 1 second of silence
const mp3Data = [];

for (let i = 0; i < pcm.length; i += sampleBlockSize) {
  const sampleChunk = pcm.subarray(i, i + sampleBlockSize);
  const mp3buf = mp3encoder.encodeBuffer(sampleChunk);
  if (mp3buf.length > 0) {
      mp3Data.push(mp3buf);
  }
}
const mp3buf = mp3encoder.flush();   //finish writing mp3

if (mp3buf.length > 0) {
    mp3Data.push(mp3buf);
}

const mp3 = Buffer.concat(mp3Data);

fs.writeFileSync('src/assets/audio/placeholder.mp3', mp3);
