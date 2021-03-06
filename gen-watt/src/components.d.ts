/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Modes } from "./components/idlog-product-configurator/idlog-product-configurator";
import { ICard, IOption, IUser, IWattChangeEvent } from "./components/idlog-product-configurator/interfaces";
export namespace Components {
    interface IdlogProductConfigurator {
        /**
          * The iDialogue API URL that the configurator would communicate with.
          * @type {string}
         */
        "apiUrl": string;
        /**
          * The base URL of the assets used by the configurator.
          * @type {string}
         */
        "baseUrl": string;
        /**
          * The ID of the template or configuration that the configurator would use to load the initial configuration options.
          * @type {string}
         */
        "configId": string;
        /**
          * The Lead ID. If empty, it'll auto-create one when the user interacts with the configurator for the first time.
          * @type {string}
         */
        "crmId": string;
        /**
          * Force mobile layout view, primarily used by the portal builder to preview the mobile view of the configurator.
          * @type {boolean}
         */
        "forceMobile": boolean;
        /**
          * If preview mode is enabled, the configurator will not send any events/requests to the API endpoint
          * @type {boolean}
         */
        "isPreviewMode": boolean;
        /**
          * The item ID of the configuration plugin that is loaded in a particular room.
          * @type {string}
         */
        "itemId": string;
        /**
          * The member ID of the current user in the room.
          * @type {string}
         */
        "memberId": string;
        /**
          * The configurator mode. Note: 3D models are not included in this repository.
          * @type {Modes}
         */
        "mode": Modes;
        /**
          * The Salesforce OrgID that the configurator would use to fetch configurations, and the Salesforce Org that the configurator would save leads.
          * @type {string}
         */
        "orgId": string;
        /**
          * The room ID to associate the configuration with.
          * @type {string}
         */
        "roomId": string;
        /**
          * A string representation of a JSON object that contains the current user's details, which would be used to pre-fill the Quotation Form.
          * @type {string}
         */
        "user": string;
    }
    interface IntakeForm {
        "isOpen": boolean;
        "user": IUser;
    }
    interface LivePreview {
        "assetBaseUrl": string;
        "color": string;
        "mode": string;
    }
    interface PricePreview {
    }
    interface TabColors {
        "mode": string;
        "options": IOption[];
    }
    interface TabFuel {
        "options": IOption[];
    }
    interface TabWatts {
        "fuel": string;
        "options": IOption[];
    }
    interface TabsContainer {
        "cards": ICard[];
        "forceMobile": boolean;
        "fuel": string;
        "mode": string;
    }
}
declare global {
    interface HTMLIdlogProductConfiguratorElement extends Components.IdlogProductConfigurator, HTMLStencilElement {
    }
    var HTMLIdlogProductConfiguratorElement: {
        prototype: HTMLIdlogProductConfiguratorElement;
        new (): HTMLIdlogProductConfiguratorElement;
    };
    interface HTMLIntakeFormElement extends Components.IntakeForm, HTMLStencilElement {
    }
    var HTMLIntakeFormElement: {
        prototype: HTMLIntakeFormElement;
        new (): HTMLIntakeFormElement;
    };
    interface HTMLLivePreviewElement extends Components.LivePreview, HTMLStencilElement {
    }
    var HTMLLivePreviewElement: {
        prototype: HTMLLivePreviewElement;
        new (): HTMLLivePreviewElement;
    };
    interface HTMLPricePreviewElement extends Components.PricePreview, HTMLStencilElement {
    }
    var HTMLPricePreviewElement: {
        prototype: HTMLPricePreviewElement;
        new (): HTMLPricePreviewElement;
    };
    interface HTMLTabColorsElement extends Components.TabColors, HTMLStencilElement {
    }
    var HTMLTabColorsElement: {
        prototype: HTMLTabColorsElement;
        new (): HTMLTabColorsElement;
    };
    interface HTMLTabFuelElement extends Components.TabFuel, HTMLStencilElement {
    }
    var HTMLTabFuelElement: {
        prototype: HTMLTabFuelElement;
        new (): HTMLTabFuelElement;
    };
    interface HTMLTabWattsElement extends Components.TabWatts, HTMLStencilElement {
    }
    var HTMLTabWattsElement: {
        prototype: HTMLTabWattsElement;
        new (): HTMLTabWattsElement;
    };
    interface HTMLTabsContainerElement extends Components.TabsContainer, HTMLStencilElement {
    }
    var HTMLTabsContainerElement: {
        prototype: HTMLTabsContainerElement;
        new (): HTMLTabsContainerElement;
    };
    interface HTMLElementTagNameMap {
        "idlog-product-configurator": HTMLIdlogProductConfiguratorElement;
        "intake-form": HTMLIntakeFormElement;
        "live-preview": HTMLLivePreviewElement;
        "price-preview": HTMLPricePreviewElement;
        "tab-colors": HTMLTabColorsElement;
        "tab-fuel": HTMLTabFuelElement;
        "tab-watts": HTMLTabWattsElement;
        "tabs-container": HTMLTabsContainerElement;
    }
}
declare namespace LocalJSX {
    interface IdlogProductConfigurator {
        /**
          * The iDialogue API URL that the configurator would communicate with.
          * @type {string}
         */
        "apiUrl"?: string;
        /**
          * The base URL of the assets used by the configurator.
          * @type {string}
         */
        "baseUrl": string;
        /**
          * The ID of the template or configuration that the configurator would use to load the initial configuration options.
          * @type {string}
         */
        "configId": string;
        /**
          * The Lead ID. If empty, it'll auto-create one when the user interacts with the configurator for the first time.
          * @type {string}
         */
        "crmId"?: string;
        /**
          * Force mobile layout view, primarily used by the portal builder to preview the mobile view of the configurator.
          * @type {boolean}
         */
        "forceMobile"?: boolean;
        /**
          * If preview mode is enabled, the configurator will not send any events/requests to the API endpoint
          * @type {boolean}
         */
        "isPreviewMode"?: boolean;
        /**
          * The item ID of the configuration plugin that is loaded in a particular room.
          * @type {string}
         */
        "itemId"?: string;
        /**
          * The member ID of the current user in the room.
          * @type {string}
         */
        "memberId"?: string;
        /**
          * The configurator mode. Note: 3D models are not included in this repository.
          * @type {Modes}
         */
        "mode"?: Modes;
        /**
          * The Salesforce OrgID that the configurator would use to fetch configurations, and the Salesforce Org that the configurator would save leads.
          * @type {string}
         */
        "orgId": string;
        /**
          * The room ID to associate the configuration with.
          * @type {string}
         */
        "roomId"?: string;
        /**
          * A string representation of a JSON object that contains the current user's details, which would be used to pre-fill the Quotation Form.
          * @type {string}
         */
        "user"?: string;
    }
    interface IntakeForm {
        "isOpen"?: boolean;
        "onRequestHide"?: (event: CustomEvent<any>) => void;
        "onRequestSave"?: (event: CustomEvent<IUser>) => void;
        "user"?: IUser;
    }
    interface LivePreview {
        "assetBaseUrl"?: string;
        "color"?: string;
        "mode"?: string;
    }
    interface PricePreview {
    }
    interface TabColors {
        "mode"?: string;
        "onColorChange"?: (event: CustomEvent<string>) => void;
        "options"?: IOption[];
    }
    interface TabFuel {
        "onFuelChange"?: (event: CustomEvent<string>) => void;
        "options"?: IOption[];
    }
    interface TabWatts {
        "fuel"?: string;
        "onWattsChange"?: (event: CustomEvent<IWattChangeEvent>) => void;
        "options"?: IOption[];
    }
    interface TabsContainer {
        "cards"?: ICard[];
        "forceMobile"?: boolean;
        "fuel"?: string;
        "mode"?: string;
    }
    interface IntrinsicElements {
        "idlog-product-configurator": IdlogProductConfigurator;
        "intake-form": IntakeForm;
        "live-preview": LivePreview;
        "price-preview": PricePreview;
        "tab-colors": TabColors;
        "tab-fuel": TabFuel;
        "tab-watts": TabWatts;
        "tabs-container": TabsContainer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "idlog-product-configurator": LocalJSX.IdlogProductConfigurator & JSXBase.HTMLAttributes<HTMLIdlogProductConfiguratorElement>;
            "intake-form": LocalJSX.IntakeForm & JSXBase.HTMLAttributes<HTMLIntakeFormElement>;
            "live-preview": LocalJSX.LivePreview & JSXBase.HTMLAttributes<HTMLLivePreviewElement>;
            "price-preview": LocalJSX.PricePreview & JSXBase.HTMLAttributes<HTMLPricePreviewElement>;
            "tab-colors": LocalJSX.TabColors & JSXBase.HTMLAttributes<HTMLTabColorsElement>;
            "tab-fuel": LocalJSX.TabFuel & JSXBase.HTMLAttributes<HTMLTabFuelElement>;
            "tab-watts": LocalJSX.TabWatts & JSXBase.HTMLAttributes<HTMLTabWattsElement>;
            "tabs-container": LocalJSX.TabsContainer & JSXBase.HTMLAttributes<HTMLTabsContainerElement>;
        }
    }
}
