import { Component } from "@angular/core";
// import { SearchBarComponent } from "../searchbar/searchbar.component";
@Component({
    selector: "view3",
    moduleId: module.id,

    template: `<StackLayout rows="auto *">
                        <Label row="0" text="This is Tab 3"></Label>
                        <GridLayout row="1">
                            <Label text="Tab 3"></Label>
                        </GridLayout>
                </StackLayout>`,

})
export class View3Component {

    constructor() {
        console.log("Currently in View 3 Component");
    }
}