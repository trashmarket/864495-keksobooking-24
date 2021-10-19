export const validRoomNumber = (roomNumber, capacityChildren) => {
  const valueRooms = +roomNumber.value;

  for (let i = 0; i < capacityChildren.length; i++) {
    if (capacityChildren[i].value > valueRooms) {
      capacityChildren[i].disabled = true;
    } else {
      capacityChildren[i].disabled = false;
    }
  }
};
