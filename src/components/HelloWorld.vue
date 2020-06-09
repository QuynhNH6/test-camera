<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<video class="camera__view" autoplay playsinline></video>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		},
		data() {
			return {
				cameraView: '',
				stream: '',
				frameSize: {},
				capturedImage: '',
				stepPercent: 50,
				isOcr: '',
				isOcrSuccess: '',
				isLoading: '',
				isError: ''

			};
		},
		mounted() {
			this.cameraView = document.querySelector('video');
			this.frameSize = this.calculateSquare();
			this.openCamera();
		},
		methods: {
			async openCamera() {
				let stream = null;
				try {
					// console.log('--- openCamera ---');
					const constraints = {
						audio: false,
						// video: { facingMode: "user" }
						video: {facingMode: {exact: 'environment'}}
					};
					stream = await navigator.mediaDevices.getUserMedia(constraints);
					this.stream = stream;
					this.cameraView.srcObject = stream;
				} catch (e) {
					console.error('Oops. Something is broken.', e);
				}

			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
