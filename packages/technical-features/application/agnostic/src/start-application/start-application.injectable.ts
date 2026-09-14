import { getInjectable, getInjectionToken, Injectable, InjectionToken } from "@ogre-tools/injectable";
import { runManyFor } from "@openlens/run-many";
import * as timeSlots from "./time-slots";

export type StartApplication = () => Promise<void>;

export const startApplicationInjectionToken: InjectionToken<StartApplication, void> =
  getInjectionToken<StartApplication>({
    id: "start-application-injection-token",
  });

const startApplicationInjectable: Injectable<StartApplication, unknown, void> = getInjectable({
  id: "start-application",

  instantiate: (di): StartApplication => {
    const runManyAsync = runManyFor(di);
    const beforeApplicationIsLoading = runManyAsync(timeSlots.beforeApplicationIsLoadingInjectionToken);
    const onLoadOfApplication = runManyAsync(timeSlots.onLoadOfApplicationInjectionToken);
    const afterApplicationIsLoaded = runManyAsync(timeSlots.afterApplicationIsLoadedInjectionToken);

    return async () => {
      await beforeApplicationIsLoading();
      await onLoadOfApplication();
      await afterApplicationIsLoaded();
    };
  },

  injectionToken: startApplicationInjectionToken,
});

export default startApplicationInjectable;
