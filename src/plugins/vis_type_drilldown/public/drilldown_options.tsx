/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, Fragment, useState, useEffect } from 'react';
import {
  EuiPanel,
  EuiTitle,
  EuiTextArea,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFieldText,
  EuiAccordion,
  EuiSuperSelect,
  EuiText,
} from '@elastic/eui';

import { VisOptionsProps } from 'src/plugins/vis_default_editor/public';
import { useOpenSearchDashboards } from 'src/plugins/opensearch_dashboards_react/public';
import { DrilldownServices, DrilldownVisParams } from './types';

function DrilldownOptions({ stateParams, setValue }: VisOptionsProps<DrilldownVisParams>) {
  const onMarkdownUpdate = useCallback(
    (value: DrilldownVisParams['cardName']) => setValue('cardName', value),
    [setValue]
  );

  const {
    services: { savedObjectsClient },
  } = useOpenSearchDashboards<DrilldownServices>();

  useEffect(() => {
    const saved = savedObjectsClient.find({
      type: 'dashboard',
    });
  });

  const onDescriptionUpdate = useCallback(
    (value: DrilldownVisParams['cardDescription']) => setValue('cardDescription', value),
    [setValue]
  );

  const activeVisName = '';
  const handleVisTypeChange = () => {};
  const options = [
    {
      value: '1',
      inputDisplay: 'Option 1',
      dropdownDisplay: (
        <Fragment>
          <strong>Name</strong>
          <EuiText size="s" color="subdued">
            <p className="euiTextColor--subdued">
              id
              <br />
              text
            </p>
          </EuiText>
        </Fragment>
      ),
    },
    {
      value: '2',
      inputDisplay: 'Option 2',
      dropdownDisplay: (
        <Fragment>
          <strong>Name</strong>
          <EuiText size="s" color="subdued">
            <p className="euiTextColor--subdued">
              id
              <br />
              text
            </p>
          </EuiText>
        </Fragment>
      ),
    },
  ];

  return (
    <EuiAccordion buttonContent="Drilldown 1">
      <EuiPanel paddingSize="s">
        <EuiFlexGroup direction="column" gutterSize="m" className="eui-fullHeight">
          <EuiFlexItem>
            <EuiTitle size="xs">
              <h2>
                <label htmlFor="drilldownVisInput">Card Name</label>
              </h2>
            </EuiTitle>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiFieldText
              id="drilldownVisInput"
              placeholder="Placeholder text"
              className="eui-fullHeight"
              value={stateParams.cardName}
              onChange={({ target: { value } }) => onMarkdownUpdate(value)}
              fullWidth={true}
            />
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiTitle size="xs">
              <h2>
                <label htmlFor="drilldownVisInput">Description</label>
              </h2>
            </EuiTitle>
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiTextArea
              id="markdownVisInput"
              className="eui-fullHeight"
              value={stateParams.cardDescription}
              onChange={({ target: { value } }) => onDescriptionUpdate(value)}
              fullWidth={true}
              data-test-subj="markdownTextarea"
            />
          </EuiFlexItem>

          <EuiFlexItem>
            <EuiTitle size="xs">
              <h2>
                <label htmlFor="drilldownVisInput">Select a Destination</label>
              </h2>
            </EuiTitle>
          </EuiFlexItem>

          <EuiSuperSelect
            options={options}
            valueOfSelected={activeVisName}
            onChange={handleVisTypeChange}
            fullWidth
            data-test-subj="chartPicker"
          />
        </EuiFlexGroup>
      </EuiPanel>
    </EuiAccordion>
  );
}

export { DrilldownOptions };
