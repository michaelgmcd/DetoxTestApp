describe('one', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('works', async () => {
    await detoxExpect(element(by.id('see-your-changes'))).toExist();
  });
});
