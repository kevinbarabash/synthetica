interface AudioDestinationNode extends AudioNode {

}

interface AudioListener {

}

interface AudioContextState {

}

interface EventHandler {

}

interface AudioBuffer {
    sampleRate: number;
    length: number;
    duration: number;
    numberOfChannels: number;
    getChannelData (channel: number): Float32Array;
    copyFromChannel (destination: Float32Array, channelNumber: number, startInChannel = 0): void;
    copyToChannel (source: Float32Array, channelNumber: number, startInChannel = 0): void;
}

interface DecodeSuccessCallback {
    (decodedData: ArrayBuffer)
}

interface DecodeErrorCallback {
    (error: DOMException)
}

interface AudioBufferSourceNode extends AudioNode {

}

interface MediaElementAudioSourceNode extends AudioNode {

}

interface MediaStreamAudioSourceNode extends AudioNode {

}

interface MediaStream {

}

interface MediaStreamAudioDestinationNode extends AudioNode {

}

interface DOMString extends String {

}

interface AudioWorkerNode extends AudioNode {

}

interface ScriptProcessorNode extends AudioNode {

}

interface AnalyserNode extends AudioNode {

}

interface GainNode extends AudioNode {
    gain: AudioParam;
}

// single input, single output
interface DelayNode extends AudioNode {
    delayTime: AudioParam;
}

interface BiquadFilterNode extends AudioNode {

}

interface WaveShaperNode extends AudioNode {

}

interface PannerNode extends AudioNode {

}

interface StereoPannerNode extends AudioNode {

}

interface ConvolverNode extends AudioNode {

}

interface ChannelSplitterNode extends AudioNode {

}

interface ChannelMergerNode extends AudioNode {

}

interface DynamicsCompressorNode extends AudioNode {

}

type OscillatorType = "sine" | "square" | "sawtooth" | "triangle" | "custom";

interface OscillatorNode extends AudioNode {
    type: OscillatorType;
    frequency: AudioParam;
    detune: AudioParam;
    start (when = 0): void;
    stop (when = 0): void;
    setPeriodicWave (periodicWave: PeriodicWave): void;
    onended: EventHandler;
}

interface PeriodicWave {
}

interface AudioParam {
    value: number;
    defaultValue: number;
    setValueAtTime (value: number, startTime: number): void; 
    linearRampToValueAtTime (value: number, endTime: number): void; 
    exponentialRampToValueAtTime (value: number, endTime: number): void; 
    setTargetAtTime (target: number, startTime: number, timeConstant: number): void; 
    setValueCurveAtTime (values: Float32Array, startTime: number, duration: number): void; 
    cancelScheduledValues (startTime: number): void; 
}

type ChannelCountMode = "max" | "clamped-max" | "explicit";

type ChannelInterpretation = "speakers" | "discrete";


interface AudioNode extends EventTarget {
    connect(destination: AudioNode, output = 0, input = 0): void;
    connect(destination: AudioParam, output = 0): void;
    disconnect(output = 0): void;
    context: AudioContext;
    numberOfInputs: number;
    numberOfOutputs: number;
    channelCount: number;
    channelCountMode: ChannelCountMode;
    channelInterpretation: ChannelInterpretation;
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
