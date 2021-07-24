const SERVER_DATA_GET = 'https://23.javascript.pages.academy/keksobooking/data';
const SERVER_DATA_POST = 'https://23.javascript.pages.academy/keksobooking';

const fetchError = (error) => {
  // eslint-disable-next-line no-console
  console.log(error);
};

const createFetch = (onSuccess, onError) => fetch(
  SERVER_DATA_GET,
  {
    method: 'GET',
    credentials: 'same-origin',
  },
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((json) => onSuccess(json))
  .catch((err) => {
    onError(err);
  });


export {createFetch, fetchError,SERVER_DATA_POST};

