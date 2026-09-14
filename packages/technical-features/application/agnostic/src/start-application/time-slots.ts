import { getInjectionToken, InjectionToken } from "@ogre-tools/injectable";
import type { Runnable } from "@openlens/run-many";

export const beforeApplicationIsLoadingInjectionToken: InjectionToken<Runnable, void> = getInjectionToken<Runnable>({
  id: "before-application-is-loading-injection-token",
});

export const onLoadOfApplicationInjectionToken: InjectionToken<Runnable, void> = getInjectionToken<Runnable>({
  id: "on-load-of-application",
});

export const afterApplicationIsLoadedInjectionToken: InjectionToken<Runnable, void> = getInjectionToken<Runnable>({
  id: "after-application-is-loaded-injection-token",
});
