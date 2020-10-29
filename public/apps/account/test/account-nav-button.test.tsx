/*
 *   Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import { shallow } from 'enzyme';
import React from 'react';
import { AccountNavButton } from '../account-nav-button';

describe('Account navigation button', () => {
  const mockCoreStart = {
    http: 1,
  };

  const config = {
    multitenancy: {
      enabled: 'true',
      tenants: {
        enable_private: 'true',
        enable_global: 'true',
      },
    },
    auth: {
      type: 'dummy',
    },
  };

  const userName = 'user1';

  let component;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    component = shallow(
      <AccountNavButton
        coreStart={mockCoreStart}
        isInternalUser={true}
        username={userName}
        tenant="tenant1"
        config={config as any}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const handleClose = jest.fn();

  it('renders', () => {
    expect(component).toMatchSnapshot();
  });
});