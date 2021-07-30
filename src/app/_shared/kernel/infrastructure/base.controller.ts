import * as hapi from "@hapi/hapi";
import { Boom } from "@hapi/boom";

export abstract class BaseController {
    protected req!: hapi.Request;
    protected res!: hapi.ResponseToolkit;

    protected abstract executeImpl (): Promise<void | any>;

    public async execute(req: hapi.Request, res: hapi.ResponseToolkit): Promise<void | any> {
        this.req = req;
        this.res = res;

        return await this.executeImpl();
    }

    public ok<T> (res: hapi.ResponseToolkit, dto?: T) {
        if (!!dto) {
            return res.response(dto as any).code(200);
        } else {
            return res.response('success').code(200);
        }
    }

    public created (res: hapi.ResponseToolkit) {
        return res.response('created').code(201);
    }

    public fail (error: Error) {
        console.log(error);
        return this.res.response({
            message: error.toString()
        }).code(500);
    }
}
