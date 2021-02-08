describe('three', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('works', async () => {
    await detoxExpect(element(by.id('learn-more'))).toExist();
  });
});
