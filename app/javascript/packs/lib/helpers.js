const getCSRFToken = () => {
  let token;
  const cTag = document.querySelector('meta[name=csrf-token]');
  if (cTag) {
    token = cTag.content;
  } else {
    console.log('Token was not able to be retreived from DOM.');
    return '';
  }
  return token;
};

export const makeFetchInit = (method = 'get', body = false) => {
  let headers = new Headers();
  headers.append('Cookie', document.cookie);
  headers.append('Content-Type', 'application/json; charset=UTF-8');
  headers.append('Accept', 'application/json');
  // Token not needed for GET request
  if (method.toLowerCase() !== 'get') {
    headers.append('X-CSRF-Token', getCSRFToken());
    headers.append('X-Requested-With', 'XMLHttpRequest');
  }
  let fetchObject = {
    method: method.toUpperCase(),
    credentials: 'include',
    headers,
  };
  // Include anybody to go along with non GET requests
  if (body) {
    fetchObject.body = JSON.stringify(body);
  }
  return fetchObject;
};

export const makeAjaxHeaders = () => {
  return {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json',
    'X-CSRF-Token': getCSRFToken(),
    'X-Requested-With': 'XMLHttpRequest',
  };
};

export const makeAjaxHeadersOnlyCsrf = () => {
  return {
    'X-CSRF-Token': getCSRFToken(),
    'X-Requested-With': 'XMLHttpRequest',
  };
};

export const isEmpty = obj => {
  return Object.keys(obj).length === 0;
};

export const validateUrl = value =>
  /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );

export const getCookie = cname => {
  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArr = decodedCookie.split(';');
  let cookie;
  for (let i = 0; i < cookieArr.length; i++) {
    cookie = cookieArr[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return '';
};
