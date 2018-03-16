// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define({colorRamps:{none:"\u0907\u0928\u092e\u0947\u0902 \u0938\u0947 \u0915\u094b\u0908 \u0928\u0939\u0940\u0902",blackToWhite_predefined:"\u0915\u093e\u0932\u0947 \u0938\u0947 \u0938\u095e\u0947\u0926",yellowToRed_predefined:"\u092a\u0940\u0932\u0947 \u0938\u0947 \u0932\u093e\u0932",slope_predefined:"\u0922\u0932\u093e\u0928",aspect_predefined:"\u092a\u0939\u0932\u0942",errors_predefined:"\u0924\u094d\u0930\u0941\u091f\u093f\u092f\u093e\u0901",heatmap1_predefined:"\u0939\u0940\u091f\u092e\u0948\u092a #1",
elevation1_predefined:"\u0909\u0928\u094d\u0928\u092f\u0928 #1",elevation2_predefined:"\u0909\u0928\u094d\u0928\u092f\u0928 #2",blueBright_predefined:"\u0928\u0940\u0932\u093e \u0909\u091c\u094d\u091c\u0935\u0932",blueLightToDark_predefined:"\u0928\u0940\u0932\u093e \u0939\u0932\u094d\u0915\u0947 \u0938\u0947 \u0917\u0939\u0930\u093e",blueGreenBright_predefined:"\u0928\u0940\u0932\u093e-\u0939\u0930\u093e \u0909\u091c\u094d\u091c\u0935\u0932",blueGreenLightToDark_predefined:"\u0928\u0940\u0932\u093e-\u0939\u0930\u093e \u0939\u0932\u094d\u0915\u0947 \u0938\u0947 \u0917\u0939\u0930\u093e",
brownLightToDark_predefined:"\u092d\u0942\u0930\u093e \u0939\u0932\u094d\u0915\u0947 \u0938\u0947 \u0917\u0939\u0930\u093e",brownToBlueGreenDivergingBright_predefined:"\u092d\u0942\u0930\u0947 \u0938\u0947 \u0928\u0940\u0932\u0947 \u0939\u0930\u0947 \u092e\u0947\u0902 \u092b\u0948\u0932\u0924\u093e \u0939\u0941\u0906, \u0909\u091c\u094d\u091c\u0935\u0932",brownToBlueGreenDivergingDark_predefined:"\u092d\u0942\u0930\u0947 \u0938\u0947 \u0928\u0940\u0932\u0947 \u0939\u0930\u0947 \u092e\u0947\u0902 \u092b\u0948\u0932\u0924\u093e \u0939\u0941\u0906, \u0917\u0939\u0930\u093e",
coefficientBias_predefined:"\u0917\u0941\u0923\u093e\u0902\u0915 \u091d\u0941\u0915\u093e\u0935",coldToHotDiverging_predefined:"\u0936\u0940\u0924\u0932 \u0938\u0947 \u0917\u0930\u094d\u092e \u092e\u0947\u0902 \u092b\u0948\u0932\u0924\u093e \u0939\u0941\u0906",conditionNumber_predefined:"\u0938\u094d\u0925\u093f\u0924\u093f \u0938\u0902\u0916\u094d\u092f\u093e",cyanToPurple_predefined:"\u0928\u0940\u0932\u093e\u0939\u0930\u093e \u0938\u0947 \u092c\u0948\u0902\u0917\u0928\u0940",cyanLightToBlueDark_predefined:"\u0928\u0940\u0932\u093e\u0939\u0930\u093e-\u0939\u0932\u094d\u0915\u0947 \u0938\u0947 \u0928\u0940\u0932\u093e-\u0917\u0939\u0930\u093e",
distance_predefined:"\u0926\u0942\u0930\u0940",grayLightToDark_predefined:"\u0927\u0942\u0938\u0930 \u0939\u0932\u094d\u0915\u0947 \u0938\u0947 \u0917\u0939\u0930\u093e",greenBright_predefined:"\u0939\u0930\u093e \u0909\u091c\u094d\u091c\u0935\u0932",greenLightToDark_predefined:"\u0939\u0930\u093e \u0939\u0932\u094d\u0915\u0947 \u0938\u0947 \u0917\u0939\u0930\u093e",greenToBlue_predefined:"\u0939\u0930\u0947 \u0938\u0947 \u0928\u0940\u0932\u093e",orangeBright_predefined:"\u0928\u093e\u0930\u0902\u0917\u0940 \u0909\u091c\u094d\u091c\u0935\u0932",
orangeLightToDark_predefined:"\u0928\u093e\u0930\u0902\u0917\u0940 \u0939\u0932\u094d\u0915\u0947 \u0938\u0947 \u0917\u0939\u0930\u093e",partialSpectrum_predefined:"\u0906\u0902\u0936\u093f\u0915 \u0938\u094d\u092a\u0947\u0915\u094d\u091f\u094d\u0930\u092e",partialSpectrum1Diverging_predefined:"\u0906\u0902\u0936\u093f\u0915 \u0938\u094d\u092a\u0947\u0915\u094d\u091f\u094d\u0930\u092e 1 \u092b\u0948\u0932\u0924\u093e \u0939\u0941\u0906",partialSpectrum2Diverging_predefined:"\u0906\u0902\u0936\u093f\u0915 \u0938\u094d\u092a\u0947\u0915\u094d\u091f\u094d\u0930\u092e 2 \u092b\u0948\u0932\u0924\u093e \u0939\u0941\u0906",
pinkToYellowGreenDivergingBright_predefined:"\u0917\u0941\u0932\u093e\u092c\u0940 \u0938\u0947 \u092a\u0940\u0932\u093e\u0939\u0930\u093e \u092b\u0948\u0932\u0924\u093e \u0939\u0941\u0906, \u0909\u091c\u094d\u091c\u0935\u0932",pinkToYellowGreenDivergingDark_predefined:"\u0917\u0941\u0932\u093e\u092c\u0940 \u0938\u0947 \u092a\u0940\u0932\u093e\u0939\u0930\u093e \u092b\u0948\u0932\u0924\u093e \u0939\u0941\u0906, \u0917\u0939\u0930\u093e",precipitation_predefined:"\u0936\u0940\u0918\u094d\u0930 \u0917\u0924\u093f",
prediction_predefined:"\u092d\u0935\u093f\u0937\u094d\u092f \u0915\u0925\u0928",purpleBright_predefined:"\u092c\u0948\u0902\u0917\u0928\u0940 \u0909\u091c\u094d\u091c\u0935\u0932",purpleToGreenDivergingBright_predefined:"\u092c\u0948\u0902\u0917\u0928\u0940 \u0938\u0947 \u0939\u0930\u0947 \u092e\u0947\u0902 \u092b\u0948\u0932\u0924\u093e \u0939\u0941\u0906, \u0909\u091c\u094d\u091c\u0935\u0932",purpleToGreenDivergingDark_predefined:"\u092c\u0948\u0902\u0917\u0928\u0940 \u0938\u0947 \u0939\u0930\u0947 \u092e\u0947\u0902 \u092b\u0948\u0932\u0924\u093e \u0939\u0941\u0906, \u0917\u0939\u0930\u093e",
purpleBlueBright_predefined:"\u092c\u0948\u0902\u0917\u0928\u0940-\u0928\u0940\u0932\u093e \u0909\u091c\u094d\u091c\u0935\u0932",purpleBlueLightToDark_predefined:"\u092c\u0948\u0902\u0917\u0928\u0940-\u0928\u0940\u0932\u093e \u0939\u0932\u094d\u0915\u0947 \u0938\u0947 \u0917\u0939\u0930\u093e",purpleRedBright_predefined:"\u092c\u0948\u0902\u0917\u0928\u0940-\u0932\u093e\u0932 \u0909\u091c\u094d\u091c\u0935\u0932",purpleRedLightToDark_predefined:"\u092c\u0948\u0902\u0917\u0928\u0940-\u0932\u093e\u0932 \u0939\u0932\u094d\u0915\u0947 \u0938\u0947 \u0917\u0939\u0930\u093e",
redBright_predefined:"\u0932\u093e\u0932 \u0909\u091c\u094d\u091c\u0935\u0932",redLightToDark_predefined:"\u0932\u093e\u0932 \u0939\u0932\u094d\u0915\u0947 \u0938\u0947 \u0917\u0939\u0930\u093e",redToBlueDivergingBright_predefined:"\u0932\u093e\u0932 \u0938\u0947 \u0928\u0940\u0932\u0947 \u092e\u0947\u0902 \u092b\u0948\u0932\u0924\u093e \u0939\u0941\u0906, \u0909\u091c\u094d\u091c\u0935\u0932",redToBlueDivergingDark_predefined:"\u0932\u093e\u0932 \u0938\u0947 \u0928\u0940\u0932\u0947 \u092e\u0947\u0902 \u092b\u0948\u0932\u0924\u093e \u0939\u0941\u0906, \u0917\u0939\u0930\u093e",
redToGreen_predefined:"\u0932\u093e\u0932 \u0938\u0947 \u0928\u0940\u0932\u093e",redToGreenDivergingBright_predefined:"\u0932\u093e\u0932 \u0938\u0947 \u0939\u0930\u0947 \u092e\u0947\u0902 \u092b\u0948\u0932\u0924\u093e \u0939\u0941\u0906, \u0909\u091c\u094d\u091c\u0935\u0932",redToGreenDivergingDark_predefined:"\u0932\u093e\u0932 \u0938\u0947 \u0939\u0930\u0947 \u092e\u0947\u0902 \u092b\u0948\u0932\u0924\u093e \u0939\u0941\u0906, \u0917\u0939\u0930\u093e",spectrumFullBright_predefined:"\u0938\u094d\u092a\u0947\u0915\u094d\u091f\u094d\u0930\u092e-\u092a\u0942\u0930\u094d\u0923 \u0909\u091c\u094d\u091c\u0935\u0932",
spectrumFullDark_predefined:"\u0938\u094d\u092a\u0947\u0915\u094d\u091f\u094d\u0930\u092e-\u092a\u0942\u0930\u094d\u0923 \u0917\u0939\u0930\u093e",spectrumFullLight_predefined:"\u0938\u094d\u092a\u0947\u0915\u094d\u091f\u094d\u0930\u092e-\u092a\u0942\u0930\u094d\u0923 \u0939\u0932\u094d\u0915\u093e",surface_predefined:"\u0938\u0924\u0939",temperature_predefined:"\u0924\u093e\u092a\u092e\u093e\u0928",whiteToBlack_predefined:"\u0938\u095e\u0947\u0926 \u0938\u0947 \u0915\u093e\u0932\u093e",yellowToDarkRed_predefined:"\u092a\u0940\u0932\u0947 \u0938\u0947 \u0917\u0939\u0930\u093e \u0932\u093e\u0932",
yellowToGreenToDarkBlue_predefined:"\u092a\u0940\u0932\u0947 \u0938\u0947 \u0939\u0930\u0947 \u0938\u0947 \u0917\u0939\u0930\u093e \u0928\u0940\u0932\u093e",yellowGreenBright_predefined:"\u092a\u0940\u0932\u093e-\u0939\u0930\u093e \u0909\u091c\u094d\u091c\u0935\u0932",yellowGreenLightToDark_predefined:"\u092a\u0940\u0932\u093e-\u0939\u0930\u093e \u0939\u0932\u094d\u0915\u0947 \u0938\u0947 \u0917\u0939\u0930\u093e"}});