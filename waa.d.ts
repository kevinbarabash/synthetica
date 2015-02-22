interface AudioDestinationNode {

}

interface AudioListener {

}

interface AudioContextState {

}

interface EventHandler {

}

interface AudioBuffer {

}

interface DecodeSuccessCallback {
    (decodedData: ArrayBuffer)
}

interface DecodeErrorCallback {
    (error: DOMException)
}

interface AudioBufferSourceNode {

}

interface MediaElementAudioSourceNode {

}

interface MediaStreamAudioSourceNode {

}

interface MediaStream {

}

interface MediaStreamAudioDestinationNode {

}

interface DOMString extends String {

}

interface AudioWorkerNode {

}

interface ScriptProcessorNode {

}

interface AnalyserNode {

}

interface GainNode {

}

interface DelayNode {

}

interface BiquadFilterNode {

}

interface WaveShaperNode {

}

interface PannerNode {

}

interface StereoPannerNode {

}

interface ConvolverNode {

}

interface ChannelSplitterNode {

}

interface ChannelMergerNode {

}

interface DynamicsCompressorNode {

}

interface OscillatorNode {

}

interface PeriodicWave {

}


interface AudioContext {
    destination: AudioDestinationNode;
    sampleRate: number;
    currentTime: number;
    listener: AudioListener;
    state: AudioContextState;

    suspend(): Promise;
    resume(): Promise;
    close(): Promise;

    onstatechange: EventHandler;

    createBuffer(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer;
    decodeAudioData(audioData: ArrayBuffer, successCallback?: DecodeSuccessCallback, errorCallback?: DecodeErrorCallback): Promise<AudioBuffer>;

    createBufferSource(): AudioBufferSourceNode;
    createMediaElementSource(mediaElement: HTMLMediaElement): MediaElementAudioSourceNode;
    createMediaStreamSource(mediaStream: MediaStream): MediaStreamAudioSourceNode;
    createMediaStreamDestination(): MediaStreamAudioDestinationNode;
    createAudioWorker(scriptURL:DOMString, numberOfInputChannels = 2, numberOfOutputChannels = 2): AudioWorkerNode;
    createScriptProcessor(bufferSize = 0, numberOfInputChannels = 2, numberOfOutputChannels = 2): ScriptProcessorNode;
    createAnalyser(): AnalyserNode;
    createGain(): GainNode;
    createDelay(maxDelayTime = 1.0): DelayNode;
    createBiquadFilter(): BiquadFilterNode;
    createWaveShaper(): WaveShaperNode;
    createPanner(): PannerNode;
    createStereoPanner(): StereoPannerNode;
    createConvolver(): ConvolverNode;
    createChannelSplitter(numberOfOutputs = 6): ChannelSplitterNode;
    createChannelMerger(numberOfInputs = 6): ChannelMergerNode;
    createDynamicsCompressor(): DynamicsCompressorNode;
    createOscillator(): OscillatorNode;
    createPeriodicWave(real: Float32Array, imag: Float32Array): PeriodicWave;
}
