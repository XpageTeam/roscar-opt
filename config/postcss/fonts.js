module.exports = {
	formats: 'local woff woff2',
	display: "swap",
	custom: {
		"SFUIDisplay": {
			variants: {
				normal: {
					400: {
						url: {
							woff: "../fonts/SFUIDisplayRegular.woff",
							woff2: "../fonts/SFUIDisplayRegular.woff2"
						}
					},
					500: {
						url: {
							woff: "../fonts/SFUIDisplayMedium.woff",
							woff2: "../fonts/SFUIDisplayMedium.woff2"
						}
					}, 
					600: {
						url: {
							woff: "../fonts/SFUIDisplaySemibold.woff",
							woff2: "../fonts/SFUIDisplaySemibold.woff2"
						}
					}, 
					700: {
						url: {
							woff: "../fonts/SFUIDisplayBold.woff",
							woff2: "../fonts/SFUIDisplayBold.woff2"
						}
					}
				}
			}
		},
	}
}