// Trabajar arrays y objetos fusionados entre si

// Un ejemplo: Mirar la capacidad máxima de todos los vehiculos

const getMaxCapacityFromVehicles = (vehicles) => {
  let maxCapacity = 0;

  for (let i = 0; i < vehicles.length; i++) {
    const vehicle = vehicles[i];

    if (vehicle.capacity > maxCapacity) {
      maxCapacity = vehicle.capacity;
    }
  }

  return maxCapacity;
};

const getTotalCapacityFromVehicles = (vehicles) => {
  let totalCapacity = 0;
  for (let i = 0; i < vehicles.length; i++) {
    const vehicle = vehicles[i];
    totalCapacity += vehicle.capacity;
  }

  return totalCapacity;
};

const getFavortiteVehicle = (vehicles) => {
  for (let i = 0; i < vehicles.length; i++) {
    const vehicle = vehicles[i];
    if (vehicle.favorite === true) {
      return vehicle;
    }
  }
};

const getMaxCapacityModelFromVehicles = (vehicles) => {
    let maxCapacity = 0;
    let maxCapacityModel = '';
  
    for (let i = 0; i < vehicles.length; i++) {
      const vehicle = vehicles[i];
  
      if (vehicle.capacity > maxCapacity) {
        maxCapacity = vehicle.capacity;
        maxCapacityModel = vehicle.model;
      }
    }
  
    return maxCapacityModel;
  };

const person = {
  // Ahora queremos añadir el vehiculo favortio de person
  name: "Marc",
};
const vehicles = [
  {
    model: "Seat Ibiza",
    capacity: 5,
    favorite: false,
  },
  {
    model: "Mercedes Vito",
    capacity: 8,
    favorite: false,
  },
  {
    model: "Kawasaki Ninja",
    capacity: 2,
    favorite: true,
  },
];



const maxCapacity=getMaxCapacityFromVehicles(vehicles);
const maxCapacityModel=getMaxCapacityModelFromVehicles(vehicles);
const totalCapacity=getTotalCapacityFromVehicles(vehicles);
const favoriteVehcle=getFavortiteVehicle(vehicles);
person.favorite=favoriteVehcle;
console.log(`En mis vehiculo ${maxCapacityModel} es el que tien más capacidad con un total de ${maxCapacity} personas`);
console.log(`La capacidad total de mis vehiculos es: ${totalCapacity} personas` );
console.log(`${person.name} tiene como vehiculo favortio ${favoriteVehcle.model}`)
