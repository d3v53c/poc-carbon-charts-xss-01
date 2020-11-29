import { Component } from "@angular/core";

import "@carbon/charts/styles.css";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
// import "/src/app/ibm-plex-font.css";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  data = [
    {
      group: "a'><img src=x onerror=alert(1)>",
      value: 20000
    },
    {
      group: "L22I P66EP L22I P66EP L22I P66EP",
      value: 65000
    },
    {
      group: "JQAI 2M4L1",
      value: 75000
    },
    {
      group: "J9DZ F37AP",
      value: 1200
    },
    {
      group: "YEL48 Q6XK YEL48",
      value: 10000
    },
    {
      group: "Misc",
      value: 25000
    }
  ];
  options = {
    title: "Pie",
    resizable: true,
    height: "400px"
  };
}
