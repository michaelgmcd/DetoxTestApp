module.exports = {
  testRunner: 'jest',
  runnerConfig: 'test/jest.detox-config.js',
  behavior: {
    init: {
      exposeGlobals: false,
    },
  },
  configurations: {
    'android.emu.debug': {
      binaryPath:
        'android/app/build/outputs/apk/appbuild/debug/app-appbuild-debug.apk',
      build:
        '(export APP_ROOT=$PWD && cd android && bundle exec fastlane android build_e2e configuration:Debug)',
      type: 'android.emulator',
      device: {
        avdName: 'Nexus_6_API_28',
      },
    },
    'android.emu.release': {
      binaryPath:
        'android/app/build/outputs/apk/appbuild/release/app-appbuild-release.apk',
      build:
        '(export APP_ROOT=$PWD && cd android && bundle exec fastlane android build_e2e configuration:Release)',
      type: 'android.emulator',
      device: {
        avdName: 'Nexus_6_API_28',
      },
    },
    'ios.sim.debug': {
      binaryPath:
        'ios/build/Build/Products/Debug-iphonesimulator/DetoxTestApp.app',
      build:
        '(export APP_ROOT=$PWD && cd ios && bundle exec fastlane ios build_e2e configuration:Debug)',
      type: 'ios.simulator',
      name: 'iPhone 11 Pro',
    },
    'ios.sim.release': {
      binaryPath:
        'ios/build/Build/Products/Release-iphonesimulator/DetoxTestApp.app',
      build:
        '(export APP_ROOT=$PWD && cd ios && bundle exec fastlane ios build_e2e configuration:Release)',
      type: 'ios.simulator',
      name: 'iPhone 11 Pro',
    },
    'sanity.ios.sim.release': {
      binaryPath:
        'ios/build/Build/Products/Release-iphonesimulator/DetoxTestApp.app',
      build:
        '(export APP_ROOT=$PWD && cd ios && bundle exec fastlane ios build_sanity configuration:Release)',
      type: 'ios.simulator',
      name: 'iPhone 11 Pro',
    },
  },
};
