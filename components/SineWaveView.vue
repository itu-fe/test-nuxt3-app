<template>
<div>
	<div class='sine'>
		<div class='sine__graph'>
			<client-only>
				<ApexChart :options="chartOptions" :series="series"  height="250" />
			</client-only>
			
			<div class='sine__latest'>
				Sine Latest     <button class="swbutton" @click="clearLatest">Clear</button>

				<ul class="sinestack">
				  <li  class="sinestack__col" v-for="(aSineWaveData, index) in aSineWaveLatest" :key="index"> 
					<ul>
						<li v-for="(value, index) in aSineWaveData" :key="index"> {{ padValue(value, aSineWaveData) }} {{ value.y }} </li>
					</ul>
				  </li>
				</ul>
			</div>
		</div>
		<div class='sine__data'>
			Sine Wave Data 1
			<ul>
			  <li v-for="(value, index) in aSineWaveRawData" :key="index"> {{ padValue(value, aSineWaveRawData) }} {{ value.y }} </li>
			</ul>
		</div>
	</div>
</div>
</template>


<script setup>
import ApexChart 				from 'vue3-apexcharts';
import { defineComponent
		, ref
		, onMounted
		, createApp
		} 						from 'vue';	
import { SineWaveSettings } 	from './settings.js';
import { useSineStore } 		from '~/stores/useSineStore.js';
import { createPinia } 			from 'pinia';
import App 						from '~/app.vue'

const
	 pinia 				= createPinia()
	,app 				= createApp(App)
	;
app.use(pinia);		 											// prepare storage for use

const 
	series 				= ref([{
							 name	: 'Data 1'
							,data	: []
							}])
	,chartOptions 		= ref(SineWaveSettings.chart)
	,aSineWaveRawData 	= ref([])
	,aSineWaveLatest 	= ref([])
	,sineStore			= useSineStore()
	;


function padValue(value, aArray){
	return value.x.toString().padStart((aArray.length-1).toString().length, '0');
	}
	
async function fetchSineData() {
	const oResponsePromise = fetch('/api/sine-wave')
		.then(oResponse => oResponse.json())
		.catch(e => {
			console.warn('Sine fetch failed:', e); 
			return e;
			});
		
	return oResponsePromise;
	}



const fetchAndDisplaySineWave = async () => {
	fetchSineData()
		.then(oSineResponse => {			// console.log("oSineResponse", oSineResponse);
			aSineWaveRawData.value 	= oSineResponse.data;
			series.value[0].data 	= oSineResponse.data;		// sine-wave.js
			
			sineStore.setData(oSineResponse.data);	
			aSineWaveLatest.value 	= sineStore.getData;
			// console.log("sineStore.getData aSineWaveLatest", aSineWaveLatest);		
			})
		.catch(e => {
			// fail 
			return e;
			});
	}
	
const clearLatest = ()=>{
	sineStore.clearData();
	aSineWaveLatest.value.splice(0);
	}

onMounted(async () => {
	if (SineWaveSettings.display == "refresh"){
		setInterval(fetchAndDisplaySineWave, SineWaveSettings.refreshInterval);
		}
	else {
		fetchAndDisplaySineWave();
		}
	});

</script>

<style lang="postcss">
@import 'tailwindcss/tailwind.css';

.sw_h-full_scroll {
    @apply h-full overflow-y-auto
	}

.sine {
    @apply flex w-full h-screen;
	}

.sine__graph {
    @apply w-9/12 sw_h-full_scroll 
	}

.sine__data {
    @apply 
		w-3/12 sw_h-full_scroll 
		font-mono font-bold text-base
		bg-gray-100
		;
	}

.sinestack {
	@apply 
		flex justify-end 
		text-sm font-mono
		;
	}
	
.sinestack__col {
	@apply w-1/5;
	}
	
	
.swbutton {
	@apply 
		bg-gray-200 
		text-gray-800 			
		font-semibold 
		py-0.5 px-1 
		border 
			border-gray-400 
		rounded 
		shadow
		;

	&:hover {
		@apply 
			bg-gray-300 
			text-gray-900 
			;
		}
	}

</style>