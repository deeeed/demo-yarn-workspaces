'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var common = require('@demo/common');

console.debug(`demo plop ${common.ConnectionStatus.DISCONNECTED} `, common.demo());
console.debug(`_WEB`);
const test = "some value";

exports.default = test;
Object.keys(common).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return common[k]; }
	});
});
