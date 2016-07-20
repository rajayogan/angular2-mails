/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { UserService } from './user.service';

describe('User Service', () => {
  beforeEachProviders(() => [UserService]);

  it('should ...',
      inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
