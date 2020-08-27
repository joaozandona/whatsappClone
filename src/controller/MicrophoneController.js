export class MicrophoneController {
  constructor(audioEl) {
    this._audioEl = audioEl;
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then((stream) => {
        this._stream = stream;

        let audio = new Audio();

        audio.srcObject = stream;

        audio.play();
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
