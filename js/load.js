const createLoader = (modalError) => fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw Error(`${response.status} ${response.statusText}`);
  }).catch((errorMessage) => modalError(errorMessage));

export {createLoader};
