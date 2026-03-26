/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import type { IComputedValue } from "mobx";
import { getInjectable } from "@ogre-tools/injectable";
import kubeconfigSyncManagerInjectable from "../../../catalog-sources/kubeconfig-sync/manager.injectable";
import catalogEntityRegistryInjectable from "../../../catalog/entity-registry.injectable";
import { afterApplicationIsLoadedInjectionToken } from "@openlens/application";
import type { CatalogEntity } from "../../../../common/catalog";

const addKubeconfigSyncAsEntitySourceInjectable = getInjectable({
  id: "add-kubeconfig-sync-as-entity-source",
  instantiate: (di) => ({
    run: () => {
      const kubeConfigSyncManager = di.inject(kubeconfigSyncManagerInjectable);
      const entityRegistry = di.inject(catalogEntityRegistryInjectable);

      entityRegistry.addComputedSource("kubeconfig-sync", kubeConfigSyncManager.source as unknown as IComputedValue<CatalogEntity[]>);
    },
  }),
  injectionToken: afterApplicationIsLoadedInjectionToken,
});

export default addKubeconfigSyncAsEntitySourceInjectable;
