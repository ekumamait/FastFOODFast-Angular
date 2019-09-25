// import { jasmine } from 'jasmine-core';

export const resetSpies = (spies: any[]) => {
    spies.forEach(spyObj => {
      Object.keys(spyObj).forEach(prop => {
        if (typeof spyObj[prop] === 'function') {
          spyObj[prop].calls.reset();
        }
      });
    });
  };
  
const createSpyObj = (name: string, methods: string[]) => {
    return jasmine.createSpyObj(name, methods);
  };

export const httpClientSpy = createSpyObj('HttpClient', [
    'post',
    'get',
    'put',
    'delete',
  ]);

export const toasterServiceSpy = createSpyObj('ToasterService', 
    ['showSuccess', 'showError', 'showWarning']);

export const httpServiceSpy = createSpyObj('HttpService', [
    'makeRequestWithData',
  ]);

export const AuthServiceSpy = createSpyObj('AuthService', [
    'sendRequest',
    'sendRegData'
  ]);