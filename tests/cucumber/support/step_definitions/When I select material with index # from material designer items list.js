import {materialDesignerPage} from "../widgets/material_designer_page";

export default function () {
    this.Then(/^I select material with index "([^"]*)" from material designer items list$/, function (index) {
        materialDesignerPage.designerWidget.itemsList.selectItemByIndex(parseInt(index));
    });
};
