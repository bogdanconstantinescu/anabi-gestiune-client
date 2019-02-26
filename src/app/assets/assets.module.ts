import { NgModule } from '@angular/core';
import { EditAssetComponent } from '@app/assets/components/edit-asset/edit-asset.component';

// modules
import { SharedModule } from '../shared/shared.module';
import { AssetsRoutingModule } from './assets-routing.module';

// services
import * as fromServices from './services';

// guards
import * as fromGuards from './guards';

// components
import { AssetsComponent } from './assets.component';
import { AddAssetComponent } from './components/add-asset/add-asset.component';
import { AddStorageSpaceComponent } from './components/add-storage/add-storage.component';
import { AssetDetailComponent } from './components/asset-detail/asset-detail.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { EditSolutionComponent } from './components/edit-solution/edit-solution.component';

@NgModule({
  imports: [
    SharedModule,
    AssetsRoutingModule,
  ],
  declarations: [
    AddStorageSpaceComponent,
    AddAssetComponent,
    AssetDetailComponent,
    AssetsComponent,
    EditAssetComponent,
    EditSolutionComponent,
    EditAddressComponent,
  ],
  entryComponents: [
    AddAssetComponent,
  ],
  providers: [
    ...fromServices.services,
    ...fromGuards.guards,
  ],
})
export class AssetsModule {}
