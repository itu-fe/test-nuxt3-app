
export default defineEventHandler((event) => {
	const dataPoints	= 100; 							// Number of data points in the sine wave
	const frequency 	= 0.1; 							// Frequency of the sine wave
	const amplitude 	= 1; 							// Amplitude of the sine wave
	const phase 		= Math.random() * Math.PI * 2; 	// Random phase to vary the sine wave
	
	const aSineWave = Array.from({ length: dataPoints }, (_, i) => {
		return { x:i, y : amplitude * Math.sin(frequency * i + phase) };
		});

	return {
	   data: aSineWave
	   };
	});
