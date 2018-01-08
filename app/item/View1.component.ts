import { Component } from "@angular/core";
@Component({
    selector: "view1",
    moduleId: module.id,

    template: `<StackLayout rows="auto *">
                        <Label row="0" text="This is Tab 1"></Label>
                        <GridLayout row="1">
                            <Label text="Tab 1"></Label>
                        </GridLayout>
                </StackLayout>`,

})
export class View1Component {

    constructor() {
        console.log("Currently in View 1 Component");
    }
}
