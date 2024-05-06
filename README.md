# Sine Wave demo app (Nuxt 3 + ApexCharts + Pinia + TailWindCSS)

## Table of Contents

1. [Installation](#installation)
2. [Project structure](#project-structure)
3. [Settings](#settings)
4. [Manuals](#manuals)

To see the complete readme contents use the outline icon **☰** on the top right .

## Installation
```bash
git clone https://github.com/itu-fe/test-nuxt3-app.git
docker load -i test-nuxt3-app.tar
docker run -p 3000:3000 test-nuxt3-app
```
[Open test-nuxt3-app in browser (localhost:3000)](http://localhost:3000)


# Technical info 
## Project structure
- app.vue
  + SineWaveView.vue (/components)
    * [settings.js](#settingsjs)
    * useSineStore.js (/stores)
      - storeSettings.js 
    * @ vue3-apexcharts
    * @ pinia
    * [/api/sine-wave.js](#get-apisine-wavejs)
		
## GET /api/sine-wave.js

This endpoint retrieves JSON data for 100 datapoints of a sine wave function.

### Parameters

None

### Response
```JSON
{
  "data": [
    { "x": 0, "y": -0.8937377757650987 },
    { "x": 1, "y": -0.9340570596790904 },
    { "x": 2, "y": -0.9650435542109823 }
  ]
}
```
## Settings

### settings.js
```JavaScript
SineWaveSettings = {
   refreshInterval  : 500              	 // request interval, ms
  ,display          : 'refresh'          // (refresh | any) dynamic or static graph display
  ,chart            : { /* ... */ }      // ApexChart options, see link below [1]
  }
```
[1] - [ApexChart options](https://apexcharts.com/docs/options/)

### storeSettings.js 
```JavaScript
storeSettings = {
  'sineStore' : {                  // Sine wave storage settings
    'maxStoredDatasets' : 5        // Maximum number of stored datasets
    }
  };
```

## Known issues
0 items 

## Manuals

| Manuals       | URL |
|---------------|-----|
| ApexCharts    | https://apexcharts.com/docs/ |
| NUXT	        | https://nuxt.com/docs/ |
| TailWindCSS	| https://tailwindcss.com/docs/font-size |
| Pinia	        | https://pinia.vuejs.org/ |

