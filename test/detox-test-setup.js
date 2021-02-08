// Based on https://github.com/wix/Detox/blob/master/detox/test/e2e/init.js

import constants from './constants';

jest.setTimeout(120000);

// https://github.com/wix/Detox/issues/1861#issuecomment-586958984
const buildDetoxURLBlacklistRegex = () =>
  `(${constants.BLACKLISTED_URLS.map((urlRegex) => `\\"${urlRegex}\\"`).join(
    ',',
  )})`;

beforeAll(async () => {
  await device.launchApp({
    newInstance: true,
    launchArgs: {
      detoxPrintBusyIdleResources: 'YES',
      detoxURLBlacklistRegex: buildDetoxURLBlacklistRegex(),
    },
  });
  await device.enableSynchronization();
  await device.setURLBlacklist(constants.BLACKLISTED_URLS);
});

beforeEach(async () => {
  await device.enableSynchronization();
  await device.setURLBlacklist(constants.BLACKLISTED_URLS);
});

process.on('unhandledRejection', (reason, p) => {
  // eslint-disable-next-line no-console
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});
