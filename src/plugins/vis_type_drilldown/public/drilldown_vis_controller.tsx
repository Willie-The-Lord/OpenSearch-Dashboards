/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { EuiCard, EuiFlexItem, EuiIcon } from '@elastic/eui';
import { DrilldownVisParams } from './types';

interface DrilldownVisComponentProps extends DrilldownVisParams {
  renderComplete: () => void;
}

const DrilldownVisComponent = ({
  cardName,
  cardDescription,
  renderComplete,
}: DrilldownVisComponentProps) => {
  useEffect(renderComplete); // renderComplete will be called after each render to signal, that we are done with rendering.

  return (
    <EuiFlexItem>
      <EuiCard
        layout="horizontal"
        icon={<EuiIcon size="xl" type={'dashboardApp'} />}
        title={cardName}
        description={cardDescription}
        onClick={() => {}}
      />
    </EuiFlexItem>
  );
};

// default export required for React.Lazy
// eslint-disable-next-line import/no-default-export
export { DrilldownVisComponent as default };
