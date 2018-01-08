import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// import { CommonModule } from "@angular/common";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { DetailedComponent } from "./detailed.component"; //CreateQuestionModule

import { detailedRoutes } from "./detailed-routing.module";

@NgModule({
    declarations: [
        DetailedComponent,
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(detailedRoutes),
        // NativeScriptFormsModule,
    ],
    exports: [
        NativeScriptRouterModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],

})

export class DetailedModule { }
