import { defineStore } 		from 'pinia'
import { storeSettings } 	from './storeSettings.js';

	
export const useSineStore = defineStore('sine', {
    state	: () => ({
         aSineData 	: []
		,max		: storeSettings.sineStore.maxStoredDatasets
		})
	,getters	: {
        getData : (state) => state.aSineData
		}
	,actions	: {
        setData(aData) {
            this.aSineData.push(aData);
			this.aSineData.splice(0, this.aSineData.length - this.max);
			}
		,clearData() {
            this.aSineData = [];
			}
		}
	});