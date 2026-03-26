/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { computed } from "mobx";
import isExtensionEnabledInjectable from "../features/extensions/enabled/common/is-enabled.injectable";
import extensionInstancesInjectable from "./extension-loader/extension-instances.injectable";
import type { LegacyLensExtension } from "@openlens/legacy-extensions";

const extensionsInjectable = getInjectable({
  id: "extensions",
  instantiate: (di) => {
    const extensionInstances = di.inject(extensionInstancesInjectable);
    const isExtensionEnabled = di.inject(isExtensionEnabledInjectable);

    return computed((): LegacyLensExtension[] => {
      const result: LegacyLensExtension[] = [];

      for (const extension of extensionInstances.values()) {
        if (extension.isBundled || isExtensionEnabled(extension.id)) {
          result.push(extension);
        }
      }

      return result;
    });
  },
});

export default extensionsInjectable;
