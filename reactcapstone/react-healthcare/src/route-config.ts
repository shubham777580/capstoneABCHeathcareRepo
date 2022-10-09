import CreateCategory from "./category/CreateCategory";
import EditCategory from "./category/EditCategory";
import IndexCategory from "./category/IndexCategory";

import CreateMedicine from "./medicines/CreateMedicine";
import EditMedicine from "./medicines/EditMedicine";
import FilterMedicine from "./medicines/FilterMedicine";

import LandingPage from "./medicines/LandingPage";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
{path : '/category', component: IndexCategory, exact: true},
{path : '/category/create', component: CreateCategory},
{path : '/category/edit/:id(\\d+)', component: EditCategory},

{path : '/medicines/create', component: CreateMedicine},
{path : '/medicines/edit/:id(\\d+)', component: EditMedicine},
{path : '/medicines/filter', component: FilterMedicine},
{path : '/', component: LandingPage, exact: true},
{path : '*', component: RedirectToLandingPage}
];

export default routes;