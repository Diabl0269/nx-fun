import { render } from '@testing-library/react';

import SharedComponentsTest2 from './shared-components-test2';

describe('SharedComponentsTest2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponentsTest2 />);
    expect(baseElement).toBeTruthy();
  });
});
