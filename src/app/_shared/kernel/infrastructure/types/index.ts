import {EventStoreNodeConnection} from "node-eventstore-client";
import * as hapi from "@hapi/hapi";

export interface ServerAppState {
    [key: string]: any;
}
export type Server = Omit<hapi.Server, 'app'> & { app: ServerAppState };
export type ServerOptions = Omit<hapi.ServerOptions, 'app'> & { app: ServerAppState };
