import { newE2EPage } from '@stencil/core/testing';

describe('ele-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ele-button></ele-button>');

    const element = await page.find('ele-button');
    expect(element).toHaveClass('hydrated');
  });
});
