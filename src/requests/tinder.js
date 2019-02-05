import 'isomorphic-fetch';

export function getRecommendations(tags) {
    const url = 'https://amishin.pythonanywhere.com/api/v1/model/predict';
    const requestConfig = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'omit',
      body: JSON.stringify(tags)
    };
    return fetch(url, requestConfig).then(response => {
        const dataPromise = response.json();
        if (response.status === 200) return dataPromise;
        return Promise.reject('Server error');
    });
  }