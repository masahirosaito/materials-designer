import {Widget} from "../widget";
import {SELECTORS} from "../selectors";

export class ItemsListWidget extends Widget {

    constructor(selector) {
        super(selector);
        this._selectors = SELECTORS.itemsList;
    }

    setItemName(itemIndex, name) {
        const selector = this.getSelectorPerItem(itemIndex, this._selectors.nameInput);
        exabrowser.waitForValue(selector);
        this.selectItemByIndex(itemIndex);
        exabrowser.setValue(selector, name);
        // TODO: remove the need for pause below
        exabrowser.pause(1000);
    };

    getSelectorPerItem(itemIndex, selectorName) {
        return this.getWrappedSelector(`${this._selectors.itemByIndex(itemIndex)} ${selectorName}`);
    }

    selectItemByIndex(index) {
        exabrowser.scrollAndClick(this.getSelectorPerItem(index, ""));
    }

    deleteMaterialByIndex(index) {
        exabrowser.scrollAndClick(this.getSelectorPerItem(index, this._selectors.iconButtonDelete));
        // TODO: add check for disappear instead of pause below
        exabrowser.pause(1000);
    };

}
