import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from '@common/main/main.component';
import {LoginComponent} from '@auth/login/login.component';
import {HeaderComponent} from '@common/main/header/header.component';
import {FooterComponent} from '@common/main/footer/footer.component';
import {MenuSidebarComponent} from '@common/main/menu-sidebar/menu-sidebar.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from '@auth/register/register.component';
import {ToastrModule} from 'ngx-toastr';
import {MessagesComponent} from '@common/main/header/messages/messages.component';
import {NotificationsComponent} from '@common/main/header/notifications/notifications.component';

import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {UserComponent} from '@common/main/header/user/user.component';
import {ForgotPasswordComponent} from '@auth/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@auth/recover-password/recover-password.component';
import {LanguageComponent} from '@common/main/header/language/language.component';
import {MenuItemComponent} from './components/menu-item/menu-item.component';
import {ControlSidebarComponent} from './common/main/control-sidebar/control-sidebar.component';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './store/auth/reducer';
import {uiReducer} from './store/ui/reducer';
import {ProfabricComponentsModule} from '@profabric/angular-components';
import {defineCustomElements} from '@profabric/web-components/loader';

import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonFunctionService } from './services/common-function.service';
// import { TrendingComponent } from './modules/dashboard/trending/trending.component';
// import { SharedModule } from "./shared/shared.module";
// import { PaymentinfoComponent } from './modules/dashboard/paymentinfo/paymentinfo.component';
// import { MonetizationComponent } from './modules/dashboard/monetization/monetization.component';
// import { OverviewComponent } from './modules/dashboard/overview/overview.component';
// import { UserActivityComponent } from './modules/dashboard/user-activity/user-activity.component';
// import { ManageContentSectionComponent } from './modules/manage-content/manage-content-section/manage-content-section.component';
// import { ManageContentSectionPopupComponent } from './modules/manage-content/manage-content-section/manage-content-section-popup/manage-content-section-popup.component';
// import { ManageContentSectionAddnewContentComponent } from './modules/manage-content/manage-content-section/manage-content-section-addnew-content/manage-content-section-addnew-content.component';

defineCustomElements();
registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        RegisterComponent,
        MessagesComponent,
        NotificationsComponent,
        UserComponent,
        ForgotPasswordComponent,
        RecoverPasswordComponent,
        LanguageComponent,
        MenuItemComponent,
        ControlSidebarComponent,
        // TrendingComponent,
        // PaymentinfoComponent,
        // MonetizationComponent,
        // OverviewComponent,
        // UserActivityComponent,
        // ManageContentSectionComponent,
        // ManageContentSectionPopupComponent,
        // ManageContentSectionAddnewContentComponent,
        
       
    ],
    providers: [CommonFunctionService],
    bootstrap: [AppComponent],
    exports: [FeatherModule],
    imports: [
        BrowserModule,
        StoreModule.forRoot({ auth: authReducer, ui: uiReducer }),
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-center'
        }),
        ProfabricComponentsModule,
        MatTableModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatIconModule,
        FormsModule,
        MatButtonModule,
        MatDatepickerModule,
        MatInputModule,
        MatNativeDateModule,
        MatTabsModule,
        MatDialogModule,
        MatRadioModule,
        MatSelectModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        FeatherModule.pick(allIcons),
        // SharedModule
    ]
})
export class AppModule {}