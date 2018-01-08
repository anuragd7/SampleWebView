import { Component, OnInit, Input } from "@angular/core";
// import { RouterExtensions } from "nativescript-angular";
import { Router } from "@angular/router";
// import { Subscription } from "rxjs";

@Component({
    selector: "maintab",
    moduleId: module.id,
    template: `<StackLayout class="hr-line"> </StackLayout>
             <GridLayout columns="25*, 25*, 25*, 25*" backgroundColor="#ffffff">
                <GridLayout col="0" (tap)="setTab(0)" rows="* auto" class="m-t-2">
                    <Label row="0" text="Tab0"></Label>
                    <Label row="1" col ="0" text="Test"></Label>
                </GridLayout>
                <GridLayout col="1" (tap)="setTab(1)" rows="* auto" class="m-t-2">
                    <Label row="0" text="Tab1"></Label>
                        <Label row="1" col="1" text="Create"></Label>
                </GridLayout>
                <GridLayout col="2" (tap)="setTab(2)" rows="* auto" class="m-t-2">
                    <Label row= "0" text="Tab2"></Label>
                    <Label row="1" col="2" text="Messages"></Label>
                </GridLayout>
                <GridLayout col="3" (tap)="setTab(3)" rows="* auto" class="m-t-2">
                    <Label row="0" text="Tab3"></Label>
                    <Label row="1" col="3" text="You"></Label>
                </GridLayout>
            </GridLayout>`,


})
export class MainTabComponent implements OnInit {

    selected: number = 0;
    // public routerSubscriber: Subscription;

    constructor(
        // private routerExtensions: RouterExtensions,
        private router: Router) {
        console.log("Constructor of maintab is called");
        this.selected = 0;

    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log("+++++++++++++++++++++++++++ On init of maintab bar is called +++++++++++++++++++++++++");
        this.InitiallySelectTabOnLoded();
    }

    InitiallySelectTabOnLoded() {
        const currentRouterUrl = this.router.url;
        if (currentRouterUrl.indexOf("/main/tab") !== -1) {
            const getTabFromUrl = currentRouterUrl.charAt(currentRouterUrl.length - 1);
            const textToNumber = parseInt(getTabFromUrl);
            this.changeTab(textToNumber);
        }
    }

    setTab(tab: number): void {
        console.log("%%%%%%%%%%%%% inside maintab settab method %%%%%%%%%%%%%");
        if (tab !== this.selected) {
            this.selected = tab;
            console.log("in settab Current tab selected in maintab is: " + this.selected);
            this.router.navigate(["main/tab/" + this.selected]);
        }
    }

    changeTab(tab: number) {
        console.log("%%%%%%%%%%%%% inside maintab changetab method %%%%%%%%%%%%%");
        console.log("in changetab Current tab selected in maintab is: " + this.selected);
        if (tab !== this.selected) {
            this.selected = tab;
        }
    }
}

@Component({
    selector: "main",
    moduleId: module.id,

    template: `<StackLayout>
                    <GridLayout rows="*, auto">
                    <GridLayout row="0">

                            <router-outlet></router-outlet>

                    </GridLayout>
                    <GridLayout row="1" backgroundColor="#ff515e">
                        <StackLayout>
                            <maintab></maintab>
                        </StackLayout>
                    </GridLayout>
                </GridLayout>
                </StackLayout>`,

})
export class MainComponent {

    constructor() {
        console.log("Currently in Main Component");
    }
}