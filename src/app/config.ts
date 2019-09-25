function makeAppConfig() {
  return {
    base_url: 'https://ekumamaits-fastfoodfast.herokuapp.com/api/v2',
    basic_token: 'Basic dHVsYWFfd2ViX2NsaWVudDo2SF9WTGIzcTIvP1J1WUpe',
  };
}

export enum HttpMethods {
    GET = 'get',
    PUT = 'put',
    POST = 'post',
    DELETE = 'delete',
  }

export const APPCONFIG = makeAppConfig();