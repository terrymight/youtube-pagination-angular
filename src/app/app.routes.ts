import { Routes } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { BackendPaginationComponent } from './component/BackendPagination/backend-pagination/backend-pagination.component';
import { FrontendPaginationComponent } from './component/FrontendPagination/frontend-pagination/frontend-pagination.component';
import { NavgiationComponent } from './component/Navgiation/navgiation/navgiation.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            {
                path: '',
                redirectTo: 'index',
                pathMatch: 'full'
            },
            {
                path: 'index',
                component: NavgiationComponent
            },
            {
                path: 'frontend-pagination',
                component: FrontendPaginationComponent
            },
            {
                path: 'backend-pagination',
                component: BackendPaginationComponent
            }
        ]
    }
];
