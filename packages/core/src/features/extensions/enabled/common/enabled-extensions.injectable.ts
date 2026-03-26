/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { computed } from "mobx";
import enabledExtensionsStateInjectable from "./state.injectable";

const enabledExtensionsInjectable = getInjectable({
  id: "enabled-extensions",
  instantiate: (di) => {
    const state = di.inject(enabledExtensionsStateInjectable);

    return computed((): string[] => {
      const result: string[] = [];

      for (const { name, enabled } of state.values()) {
        if (enabled) {
          result.push(name);
        }
      }

      return result;
    });
  },
});

export default enabledExtensionsInjectable;
