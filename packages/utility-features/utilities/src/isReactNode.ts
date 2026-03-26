/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import React from "react";

// ref: https://changelog.com/posts/the-react-reactnode-type-is-a-black-hole

export type StrictReactNode = React.ReactNode;

export function isReactNode(node: unknown): node is StrictReactNode {
  return (typeof node === "object" && React.isValidElement(node))
    || (Array.isArray(node) && node.every(isReactNode))
    || node == null
    || typeof node !== "object";
}
