import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ChartsModule } from "@carbon/charts-angular";
import { AppComponent } from "./app.component";
@NgModule({
  imports: [BrowserModule, ChartsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
