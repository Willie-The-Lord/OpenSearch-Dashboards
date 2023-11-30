/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { EuiButton } from '@elastic/eui';
import { DrilldownOptions } from './drilldown_options'; // Adjust the import path as needed

function DrilldownManager() {
  const [formsCount, setFormsCount] = useState(1);

  const addNewForm = () => {
    setFormsCount(formsCount + 1);
  };

  return (
    <div>
      {[...Array(formsCount)].map((_, index) => (
        <DrilldownOptions key={index} />
      ))}
      <EuiButton onClick={addNewForm}>Add New Form</EuiButton>
    </div>
  );
}

export { DrilldownManager };
