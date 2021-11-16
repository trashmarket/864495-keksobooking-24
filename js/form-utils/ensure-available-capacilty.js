const roomCountCapacitySettings = {
  1:[1],
  2:[1,2],
  3:[1,2,3],
  100: [0],
};

const ensureEnabled = (capacityArray, capacityOptions)=>{
  capacityOptions.forEach((option)=>option.disabled = capacityArray.some((c)=>c === option.value));
};

export const ensureCapacityAvailable = (roomCountInput, capacityInput)=>{
  ensureEnabled(roomCountCapacitySettings[roomCountInput.value],[...capacityInput.options]);
};

export const ensureAvailableCapacilty = (roomNumber, capacityChildren) => {
  const valueRooms = roomNumber.value;

  capacityChildren.forEach((child) => child.disabled = child.value > valueRooms);
};
