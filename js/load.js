const createLoader = (modalError) => fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw Error(`${response.status} ${response.statusText}`);
  }).catch((errorMessage) => modalError(errorMessage, 'red'));

const sendData = (alertModal, body) => {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      alertModal('Form is send', 'green');
    } else{throw Error(`${response.status} ${response.statusText}`);}
  }).catch((errorMessage) => alertModal(errorMessage, 'red'));
};

export {createLoader, sendData};
