/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { i18n } from '@osd/i18n';
import { ExpressionFunctionDefinition, Render } from '../../expressions/public';
import { DrilldownVisParams, DrilldownArguments } from './types';

export interface DrilldownVisRenderValue {
  visType: 'drilldown';
  visParams: DrilldownVisParams;
}

export type DrilldownVisExpressionFunctionDefinition = ExpressionFunctionDefinition<
  'drilldownVis',
  unknown,
  DrilldownArguments,
  Render<DrilldownVisRenderValue>
>;

export const createDrilldownVisFn = (): DrilldownVisExpressionFunctionDefinition => ({
  name: 'drilldownVis',
  type: 'render',
  inputTypes: [],
  help: i18n.translate('visDrilldown.function.help', {
    defaultMessage: 'Drilldown visualization',
  }),
  args: {
    // font: {
    //   types: ['style'],
    //   help: i18n.translate('visTypeMarkdown.function.font.help', {
    //     defaultMessage: 'Font settings.',
    //   }),
    //   default: `{font size=12}`,
    // },
    // openLinksInNewTab: {
    //   types: ['boolean'],
    //   default: false,
    //   help: i18n.translate('visTypeMarkdown.function.openLinksInNewTab.help', {
    //     defaultMessage: 'Opens links in new tab',
    //   }),
    // },
    cardName: {
      types: ['string'],
      aliases: ['_'],
      required: true,
      help: i18n.translate('visTypeDrilldown.function.cardName.help', {
        defaultMessage: 'Card name',
      }),
    },
    cardDescription: {
      types: ['string'],
      aliases: ['_'],
      required: true,
      help: i18n.translate('visTypeDrilldown.function.cardDescription.help', {
        defaultMessage: 'Card description',
      }),
    },
  },
  fn(input, args) {
    return {
      type: 'render',
      as: 'drilldown_vis',
      value: {
        visType: 'drilldown',
        visParams: {
          cardName: args.cardName,
          cardDescription: args.cardDescription,
          // openLinksInNewTab: args.openLinksInNewTab,
          // fontSize: parseInt(args.font.spec.fontSize || '12', 10),
        },
      },
    };
  },
});
