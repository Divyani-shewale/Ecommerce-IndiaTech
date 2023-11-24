import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@common/main/main.component';
import {LoginComponent} from '@auth/login/login.component';
import {RegisterComponent} from '@auth/register/register.component';
import {AuthGuard} from '@guards/auth.guard';
import {RoleauthGuard} from '@guards/role-auth.guard';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {ForgotPasswordComponent} from '@auth/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@auth/recover-password/recover-password.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            // {
            //     path: 'lead',
            //     canActivate: [RoleauthGuard],
            //     canActivateChild: [RoleauthGuard],
            //     loadChildren: () => import('@modules/leads/leads.module').then(m => m.LeadsModule)
            // },
            // {
            //     path: 'dashboard',
            //     canActivate: [RoleauthGuard],
            //     canActivateChild: [RoleauthGuard],
            //     loadChildren: () => import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule)
            // },
            // {
            //     path: 'users',
            //     canActivate: [RoleauthGuard],
            //     canActivateChild: [RoleauthGuard],
            //     loadChildren: () => import('@modules/users/users.module').then(m => m.UsersModule)
            // },
            // {
            //     path: 'bdbank',
            //     canActivate: [RoleauthGuard],
            //     canActivateChild: [RoleauthGuard],
            //     loadChildren: () => import('@modules/bd-bank/bd-bank.module').then(m => m.BdBankModule)
            // },
            // {
            //     path: 'bank',
            //     canActivate: [RoleauthGuard],
            //     canActivateChild: [RoleauthGuard],
            //     loadChildren: () => import('@modules/bank/bank.module').then(m => m.BankModule)
            // },
            // {
            //     path: 'client',
            //     canActivate: [RoleauthGuard],
            //     canActivateChild: [RoleauthGuard],
            //     loadChildren: () => import('@modules/client/client.module').then(m => m.ClientModule)
            // },
            // {
            //     path: 'security',
            //     canActivate: [RoleauthGuard],
            //     canActivateChild: [RoleauthGuard],
            //     loadChildren: () => import('@modules/security/security.module').then(m => m.SecurityModule)
            // },
            // {
            //     path: 'recon',
            //     canActivate: [RoleauthGuard],
            //     canActivateChild: [RoleauthGuard],
            //     loadChildren: () => import('@modules/reconciliation/reconciliation.module').then(m => m.ReconciliationModule)
            // },
            // {
            //     path: 'managereports',
            //     canActivate: [RoleauthGuard],
            //     canActivateChild: [RoleauthGuard],
            //     loadChildren: () => import('@modules/manage-reports/manage-reports.module').then(m=>m.ManageReportsModule)
            // },
           
            // {
            //     path: 'managecontent',
            //     canActivate: [RoleauthGuard],
            //     canActivateChild: [RoleauthGuard],
            //     loadChildren: () => import('@modules/manage-content/manage-content.module').then(m=>m.ManageContentModule)
            // },
            // {
            //     path: 'managesubscription',
            //     canActivate: [RoleauthGuard],
            //     canActivateChild: [RoleauthGuard],
            //     loadChildren: () => import('@modules/manage-subscription/manage-subscription.module').then(m=>m.ManageSubscriptionModule)
            // },
            // {
            //     path: 'commonsetup',
            //     // canActivate: [RoleauthGuard],
            //     // canActivateChild: [RoleauthGuard],
            //     loadChildren: () => import('@modules/common-setup/common-setup.module').then(m=>m.CommonSetupModule)
            // }
        ]
    },
       
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'change-password',
        component: RecoverPasswordComponent,
        canActivate: [AuthGuard]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
