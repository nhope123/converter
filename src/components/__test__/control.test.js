import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {Convert} from './../convert';
import {Button} from './../control';

test("Button Component", () => {

  const {getByText, getByLabelText} = render(<Button label={'Length'}/>);
  getByText('Length');

  
});
