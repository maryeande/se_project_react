import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnit: "",
  handleToggleChange: () => {},
});

export { CurrentTemperatureUnitContext };
