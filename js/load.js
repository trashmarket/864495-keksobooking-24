const createLoader = (modalError) => fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw Error(`${response.status} ${response.statusText}`);
  }).catch((errorMessage) => modalError(errorMessage, 'red'));

const sendData = (alertModal, body) => {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',// <= жалуется на запрос.
    {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body,
    },
  ).then((response) => {
    if (response.ok) {
      alertModal('Form is send', 'green');
    }
    Error(`${response.status} ${response.statusText}`);
  }).catch((errorMessage) => alertModal(errorMessage, 'red'));
};

export {createLoader, sendData};
