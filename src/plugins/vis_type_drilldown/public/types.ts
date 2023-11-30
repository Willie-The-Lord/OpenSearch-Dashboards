/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { SavedObjectsClientContract } from 'src/core/public/saved_objects/saved_objects_client';
import { CoreStart } from 'src/core/server';
import { NavigationPublicPluginStart } from '../../navigation/public';
import { VisualizationsSetup } from '../../visualizations/public';

export interface VisDrilldownPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface VisDrilldownPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
  visualizations: VisualizationsSetup;
}

// export interface Arguments {
//   markdown: string;
//   font: Style;
//   openLinksInNewTab: boolean;
// }

// export interface DrilldownVisParams {
//   markdown: Arguments['markdown'];
//   openLinksInNewTab: Arguments['openLinksInNewTab'];
//   fontSize: number;
// }

export interface DrilldownArguments {
  cardName: string;
  cardDescription: string;
}

export interface DrilldownVisParams {
  cardName: DrilldownArguments['cardName'];
  cardDescription: DrilldownArguments['cardDescription'];
}

export interface DrilldownServices extends CoreStart {
  savedObjectsClient: SavedObjectsClientContract;
}
