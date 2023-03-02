/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const slider = document.querySelector('.slider');\nconst leftButton = document.querySelector('.left');\nconst rightButton = document.querySelector('.right');\nconst dotContainer = document.querySelector('.dotcontainer');\n\nconst imgCount = slider.childElementCount;\nlet position = 0;\n\nleftButton.addEventListener('click', () => {\n    if (position > 0) {\n        position -= 1;\n        draw();\n    }\n});\n\nrightButton.addEventListener('click', () => {\n    if (position < imgCount - 1) {\n        position += 1;\n        draw();\n    }\n});\n\nfor (let i = 0; i < imgCount; i++) {\n    const dot = document.createElement('div');\n    dot.classList.add('dot');\n    dot.addEventListener('click', (e) => {\n        position = i;\n        draw();\n    });\n    dotContainer.appendChild(dot);\n}\n\nfunction draw () {\n    slider.style.transform = `translate(${-position * 800}px, 0px)`;\n\n    dotContainer.childNodes.forEach(element => {\n        element.style.transform = 'scale(1)';\n        element.style.margin = '8px 8px'\n        element.style.backgroundColor = 'rgba(200, 200, 200, 0.8';\n    });\n\n    dotContainer.childNodes[position].style.transform = 'scale(1.5)';\n    dotContainer.childNodes[position].style.margin = '8px 16px'\n    dotContainer.childNodes[position].style.backgroundColor = 'rgba(255, 255, 255, 1';\n\n    leftButton.style.opacity = position < 1 ? '0' : '1';\n    rightButton.style.opacity = position >= (imgCount - 1) ? '0' : '1';\n}\n\ndraw();\n\n\n//# sourceURL=webpack://slideshow/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;