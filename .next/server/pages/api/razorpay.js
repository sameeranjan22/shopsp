"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/razorpay";
exports.ids = ["pages/api/razorpay"];
exports.modules = {

/***/ "razorpay":
/*!***************************!*\
  !*** external "razorpay" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("razorpay");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("shortid");

/***/ }),

/***/ "(api)/./pages/api/razorpay.js":
/*!*******************************!*\
  !*** ./pages/api/razorpay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst Razorpay = __webpack_require__(/*! razorpay */ \"razorpay\");\nconst shortid = __webpack_require__(/*! shortid */ \"shortid\");\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        // Initialize razorpay object\n        const razorpay = new Razorpay({\n            key_id: 'rzp_test_qANyBXD74BxAM9',\n            key_secret: 'gAIjwVK9vbRwNLbdwPnwGdrA'\n        });\n        // Create an order -> generate the OrderID -> Send it to the Front-end\n        // Also, check the amount and currency on the backend (Security measure)\n        const payment_capture = 1;\n        const amount = req.body.amount;\n        const currency = \"INR\";\n        const options = {\n            amount: amount * 100,\n            currency,\n            receipt: shortid.generate(),\n            payment_capture\n        };\n        try {\n            const response = await razorpay.orders.create(options);\n            res.status(200).json({\n                id: response.id,\n                currency: response.currency,\n                amount: response.amount\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(400).json(err);\n        }\n    } else {\n    // Handle any other HTTP method\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmF6b3JwYXkuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEtBQUssQ0FBQ0EsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLDBCQUFVO0FBQ25DLEtBQUssQ0FBQ0MsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLHdCQUFTO0FBSWxCLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUMvQyxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQU0sT0FBRSxDQUFDO1FBQzFCLEVBQTZCO1FBQzdCLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEdBQUcsQ0FBQ1AsUUFBUSxDQUFDLENBQUM7WUFDN0JRLE1BQU0sRUFBRSxDQUF5QjtZQUNqQ0MsVUFBVSxFQUFFLENBQTBCO1FBQ3hDLENBQUM7UUFDRCxFQUFzRTtRQUN0RSxFQUF3RTtRQUN4RSxLQUFLLENBQUNDLGVBQWUsR0FBRyxDQUFDO1FBQ3pCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHUCxHQUFHLENBQUNRLElBQUksQ0FBQ0QsTUFBTTtRQUM5QixLQUFLLENBQUNFLFFBQVEsR0FBRyxDQUFLO1FBRXRCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUM7WUFDZkgsTUFBTSxFQUFFQSxNQUFNLEdBQUMsR0FBRztZQUNsQkUsUUFBUTtZQUNSRSxPQUFPLEVBQUViLE9BQU8sQ0FBQ2MsUUFBUTtZQUN6Qk4sZUFBZTtRQUNqQixDQUFDO1FBRUQsR0FBRyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUNPLFFBQVEsR0FBRyxLQUFLLENBQUNWLFFBQVEsQ0FBQ1csTUFBTSxDQUFDQyxNQUFNLENBQUNMLE9BQU87WUFDckRULEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCQyxFQUFFLEVBQUVMLFFBQVEsQ0FBQ0ssRUFBRTtnQkFDZlQsUUFBUSxFQUFFSSxRQUFRLENBQUNKLFFBQVE7Z0JBQzNCRixNQUFNLEVBQUVNLFFBQVEsQ0FBQ04sTUFBTTtZQUN6QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRVksR0FBRyxFQUFFLENBQUM7WUFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUc7WUFDZmxCLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDRSxHQUFHO1FBQzFCLENBQUM7SUFDSCxDQUFDLE1BQU0sQ0FBQztJQUNOLEVBQStCO0lBQ2pDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcF9zb2x1dGlvbnNwb2ludC8uL3BhZ2VzL2FwaS9yYXpvcnBheS5qcz9lYjY2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJhem9ycGF5ID0gcmVxdWlyZShcInJhem9ycGF5XCIpO1xuY29uc3Qgc2hvcnRpZCA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICAvLyBJbml0aWFsaXplIHJhem9ycGF5IG9iamVjdFxuICAgIGNvbnN0IHJhem9ycGF5ID0gbmV3IFJhem9ycGF5KHtcbiAgICAgIGtleV9pZDogJ3J6cF90ZXN0X3FBTnlCWEQ3NEJ4QU05JyxcbiAgICAgIGtleV9zZWNyZXQ6ICdnQUlqd1ZLOXZiUndOTGJkd1Bud0dkckEnLFxuICAgIH0pO1xuICAgIC8vIENyZWF0ZSBhbiBvcmRlciAtPiBnZW5lcmF0ZSB0aGUgT3JkZXJJRCAtPiBTZW5kIGl0IHRvIHRoZSBGcm9udC1lbmRcbiAgICAvLyBBbHNvLCBjaGVjayB0aGUgYW1vdW50IGFuZCBjdXJyZW5jeSBvbiB0aGUgYmFja2VuZCAoU2VjdXJpdHkgbWVhc3VyZSlcbiAgICBjb25zdCBwYXltZW50X2NhcHR1cmUgPSAxO1xuICAgIGNvbnN0IGFtb3VudCA9IHJlcS5ib2R5LmFtb3VudDtcbiAgICBjb25zdCBjdXJyZW5jeSA9IFwiSU5SXCI7XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgYW1vdW50OiBhbW91bnQqMTAwLFxuICAgICAgY3VycmVuY3ksXG4gICAgICByZWNlaXB0OiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gICAgICBwYXltZW50X2NhcHR1cmUsXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJhem9ycGF5Lm9yZGVycy5jcmVhdGUob3B0aW9ucyk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIGlkOiByZXNwb25zZS5pZCxcbiAgICAgICAgY3VycmVuY3k6IHJlc3BvbnNlLmN1cnJlbmN5LFxuICAgICAgICBhbW91bnQ6IHJlc3BvbnNlLmFtb3VudCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEhhbmRsZSBhbnkgb3RoZXIgSFRUUCBtZXRob2RcbiAgfVxufSJdLCJuYW1lcyI6WyJSYXpvcnBheSIsInJlcXVpcmUiLCJzaG9ydGlkIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInJhem9ycGF5Iiwia2V5X2lkIiwia2V5X3NlY3JldCIsInBheW1lbnRfY2FwdHVyZSIsImFtb3VudCIsImJvZHkiLCJjdXJyZW5jeSIsIm9wdGlvbnMiLCJyZWNlaXB0IiwiZ2VuZXJhdGUiLCJyZXNwb25zZSIsIm9yZGVycyIsImNyZWF0ZSIsInN0YXR1cyIsImpzb24iLCJpZCIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/razorpay.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/razorpay.js"));
module.exports = __webpack_exports__;

})();