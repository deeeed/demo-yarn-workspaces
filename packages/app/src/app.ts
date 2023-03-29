import {ConnectionStatus, demo} from "@demo/common";

export * from '@demo/common';

console.debug(`demo plop ${ConnectionStatus.DISCONNECTED} `, demo());
/* #if _WEB
console.debug(`_WEB`);
//#elif _NODEJS
console.debug(`_NODEJS`);
//#else */
console.debug(`_OTHER default`);
// #endif
const test = "some value";

export default test;