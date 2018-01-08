import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";


@Component({
    selector: "detailed",
    moduleId: module.id,

    template: `<StackLayout rows="auto *">
                        <Label row="0" text="This is a detailed component"></Label>
                        <GridLayout row="1">
                            <Button text="Go Back" (tap)="goBack()"></Button>
                        </GridLayout>
                </StackLayout>`,

})
export class DetailedComponent {

    constructor(private routerExtensions : RouterExtensions) {
        console.log("Currently in Detailed Component");
    }

    public goBack(){
        console.log("Iam going back from Detailed Component to main component");
        this.routerExtensions.navigate(["main/tab/0"]);
    }

}
