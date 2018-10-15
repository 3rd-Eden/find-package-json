declare module "find-package-json" {
    interface IResult {
        value: object;
        filename: string;
        done: boolean;
    }
    interface Iterator {
        next(): IResult;
    }
    interface IModule {
        filename: string;
    }

    function finder(path?: string | IModule): Iterator;
    namespace finder { }
    export = finder;
}
