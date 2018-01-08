import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { MainTabComponent } from "./item/maintab.component";
import { MainComponent } from "./item/maintab.component";
import { View1Component } from "./item/view1.component";
import { View2Component } from "./item/view2.component";
import { View3Component } from "./item/view3.component";


const routes: Routes = [
    { path: "", redirectTo: "main", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "detailed", loadChildren: './item/detailed.module#DetailedModule' },
    // { path: "detailed", component: DetailedComponent },    
    { path: "item/:id", component: ItemDetailComponent },

    {
        path: "main", component: MainComponent,
        children: [
            { path:"", redirectTo: "tab/0", pathMatch: "full"},
            { path: "tab/0", component: ItemsComponent },
            { path: "tab/1", component: View1Component },
            { path: "tab/2", component: View2Component },
            { path: "tab/3", component: View3Component },
        ],
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }