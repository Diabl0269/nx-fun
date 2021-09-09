import { render } from '@testing-library/react';

import SharedBgButton from './shared-bg-button';

describe('SharedBgButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedBgButton />);
    expect(baseElement).toBeTruthy();
  });
});
