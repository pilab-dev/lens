/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectionToken, InjectionToken } from "@ogre-tools/injectable";

export const lensBuildEnvironmentInjectionToken: InjectionToken<string, void> = getInjectionToken<string>({
  id: "lens-build-environment-token",
});
