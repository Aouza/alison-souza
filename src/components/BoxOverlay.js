import React, { forwardRef } from "react";

import { Container } from "styles/components/BoxOverlay";

const BoxOverlay = forwardRef((props, ref) => {
  return <Container ref={ref} {...props} />;
});

export default BoxOverlay;
