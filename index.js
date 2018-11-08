

// async function a(){
// 	// await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
// 	// await faceapi.loadFaceLandmarkModel(MODEL_URL)
// 	await faceapi.loadFaceRecognitionModel(MODEL_URL)
// }
// async function b(){
// 	await a();
// 	const input = document.getElementById('myImage')
// 	let fullFaceDescriptions = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors()
// 	fullFaceDescriptions = fullFaceDescriptions.map(fd => fd.forSize(width, height))

// 	const detectionsArray = fullFaceDescriptions.map(fd => fd.detection)
// 	faceapi.drawDetection(canvas, detectionsArray, { withScore: true })
// }
// // b();

