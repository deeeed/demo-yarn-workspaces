import { AutoConnectOptions } from '@demo/common';

export interface SDKLoggingOptions extends AutoConnectOptions {
  // automatically switch all logging options on
  developerMode?: boolean;
  sdk?: boolean;
}
