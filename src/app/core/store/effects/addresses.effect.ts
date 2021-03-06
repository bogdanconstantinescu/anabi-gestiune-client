import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { map, mapTo } from 'rxjs/operators';

import { Address } from '../../models';
import * as addressesActions from '../actions/addresses.action';
import * as assetPropertiesActions from '../actions/asset-properties.action';

@Injectable()
export class AddressesEffect {

  @Effect()
  createAddress$ = this.actions$
    .pipe(
      ofType(addressesActions.ADDRESS_CREATE),
      map((action: addressesActions.CreateAddress) => action.payload),
      map(aPayload => new addressesActions.CreateAddressSuccess(aPayload))
    );

  @Effect()
  createAddressSuccess$ = this.actions$
    .pipe(
      ofType(addressesActions.ADDRESS_CREATE_SUCCESS),
      map((action: addressesActions.CreateAddressSuccess) => action.payload),
      map((aAddress: Address) => new assetPropertiesActions.DeleteProperty(aAddress.getAsset().id))
    );

  constructor(private actions$: Actions) {
  }
}
