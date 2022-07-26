export class ConfigService {

    private readonly envConfig: {[key: string]: any} = null;

    constructor () {
        this.envConfig = {
            port: 9001,
            host: '0.0.0.0',
            api_key: 'cbfaa70bc648c82785884c816ccb2ae7'
        };
      
    }

    get(key: string): any {
        return this.envConfig[key];
    }
}