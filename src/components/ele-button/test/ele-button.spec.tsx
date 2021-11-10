import { newSpecPage } from '@stencil/core/testing';
import { EleButton } from '../ele-button';

describe('ele-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EleButton],
      html: `<ele-button></ele-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ele-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ele-button>
    `);
  });
});
