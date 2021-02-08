describe('two', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('works', async () => {
    await detoxExpect(element(by.id('debug'))).toExist();
  });
});
