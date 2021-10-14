import { render } from '@testing-library/react';

import SharedComponentsTest4 from './shared-components-test4';

describe('SharedComponentsTest4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponentsTest4 />);
    expect(baseElement).toBeTruthy();
  });
});
