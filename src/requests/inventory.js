import 'isomorphic-fetch';

const zipCode = 44241;
const radius = 500;
const pagesize = 3;

export function findInventories(make, model) {
    const url = `https://www.edmunds.com/api/inventory/v5/find?zip=${zipCode}&sortby=_geo&radius=${radius}&pagenum=1&pagesize=${pagesize}&vehicleInfo.styleInfo.make=${make}&vehicleInfo.styleInfo.model=${model}&fields=vin,type,vehicleInfo,prices`;
    const requestConfig = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      credentials: 'omit',
    };
    return fetch(url, requestConfig).then(response => {
        const dataPromise = response.json();
        if (response.status === 200) return dataPromise;
        return Promise.reject('Server error');
    });
  }