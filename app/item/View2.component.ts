import { Component } from "@angular/core";
@Component({
    selector: "view2",
    moduleId: module.id,

    template: `<StackLayout rows="auto *">
                        <Label row="0" text="This is Tab 2"></Label>
                        <GridLayout row="1">
                            <Label text="Tab 2"></Label>
                        </GridLayout>
                </StackLayout>`,

})
export class View2Component {

    constructor() {
        console.log("Currently in View 2 Component");
    }
}