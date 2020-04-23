import { Component } from "@angular/core";

import json from "../../assets/survey.json";

@Component({
  selector: "creator-page",
  templateUrl: "./creator.page.html",
})
export class CreatorPage {
  json = json;
  onSurveySaved(survey) {
    this.json = survey;
  }
}
