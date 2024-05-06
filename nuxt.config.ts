// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	 devtools	: { enabled: true } 
	,css			: [
					 '~/assets/css/main.css'
					]
	,plugins : []
	,postcss : {
		plugins: {
			 tailwindcss			: {}
			,autoprefixer			: {}
			,'postcss-preset-env' 	: {
				stage		: 3
				,features	: {
					"nesting-rules"	: true
					}
				}
			}
		}
	});

	