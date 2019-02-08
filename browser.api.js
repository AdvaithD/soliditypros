import React from "react";

import {
  LocationProvider,
  createMemorySource,
  createHistory
} from "react-location";

export default () => ({
  Router: () => ({ children, basepath, staticInfo }) => {
    let history;
    if (typeof document === "undefined") {
      const source = createMemorySource(staticInfo.path);
      history = createHistory(source);
    }
    return (
      <LocationProvider basepath={basepath} history={history}>
        {children}
      </LocationProvider>
    );
  }
});
