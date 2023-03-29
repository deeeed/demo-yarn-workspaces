import { ConnectionStatus, demo } from "@demo/common";
export * from '@demo/common';
console.debug("demo plop ".concat(ConnectionStatus.TERMINATED, " "), demo());
/* #if _WEB
console.debug(`_WEB`);
//#elif _NODEJS
console.debug(`_NODEJS`);
//#else */
console.debug("_OTHER default");
// #endif
var poop = "lalala";
export default poop;
//# sourceMappingURL=app.js.map