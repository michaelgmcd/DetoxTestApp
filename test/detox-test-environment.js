const {
  DetoxCircusEnvironment,
  SpecReporter,
  WorkerAssignReporter,
} = require('detox/runners/jest-circus');

class CustomDetoxEnvironment extends DetoxCircusEnvironment {
  constructor(config, context) {
    super(config, context);

    // Can be safely removed, if you are content with the default value (=300000ms)
    this.initTimeout = 120000;

    // This takes care of generating status logs on a per-spec basis. By default, Jest only reports at file-level.
    // This is strictly optional.
    this.registerListeners({
      SpecReporter,
      WorkerAssignReporter,
    });
  }

  async setup() {
    await super.setup();

    this.global.detoxExpect = this.detox.expect;
    this.global.by = this.detox.by;
    this.global.element = this.detox.element;
    this.global.device = this.detox.device;
    this.global.waitFor = this.detox.waitFor;
  }
}

module.exports = CustomDetoxEnvironment;
