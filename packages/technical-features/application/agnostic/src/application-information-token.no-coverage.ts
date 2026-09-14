/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectionToken, InjectionToken } from "@ogre-tools/injectable";

export type ApplicationInformation = {
  name: string;
  version: string;
  productName: string;
  copyright: string;
  description: string;
  k8sProxyVersion: string;
  bundledKubectlVersion: string;
  bundledHelmVersion: string;
  sentryDsn: string;
  contentSecurityPolicy: string;
  welcomeRoute: string;
  updatingIsEnabled: boolean;
  dependencies: Partial<Record<string, string>>;
};

export const applicationInformationToken: InjectionToken<ApplicationInformation, void> =
  getInjectionToken<ApplicationInformation>({
    id: "application-information-token",
  });
