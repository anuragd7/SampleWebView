import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { RouterExtensions } from "nativescript-angular";
import * as fs from "file-system";
import { WebView } from "ui/web-view";



@Component({
    selector: "ns-items",
    moduleId: __filename,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(
        private itemService: ItemService,
        private routerExtensions: RouterExtensions,
    ) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    goToDetail(){
        console.log("Navigating to detailed component");
        this.routerExtensions.navigate(["detailed"]);
    }

    


onWebViewLoaded(args, text) {
    
        let path = fs.knownFolders.currentApp().path;
        console.log(path);
    
        let wv = <WebView>args.object;
            let YourTxext = text;
        let head = "<head><style>@font-face {font-family: 'Abel';src: url('file://" + path + "/fonts/Abel-Regular.ttf');}body {font-family: 'Abel';}</style></head>";
        let htmlData = "<html>" + head + "<body>" + YourTxext + "</body></html>";
    
        wv.android.loadDataWithBaseURL(null, htmlData , "text/html", "utf-8", "about:blank");
    }
}