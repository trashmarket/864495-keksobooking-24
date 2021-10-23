export const ensureAvailableCapacilty = (roomNumber, capacityChildren) => {
  const valueRooms = roomNumber.value;

  capacityChildren.forEach((child) => child.disabled = child.value > valueRooms);
};
