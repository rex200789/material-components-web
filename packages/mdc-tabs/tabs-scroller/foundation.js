/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import MDCFoundation from '@material/base/foundation';

import {cssClasses, strings} from './constants';

export default class MDCTabsScrollerFoundation extends MDCFoundation {
  static get cssClasses() {
    return cssClasses;
  }

  static get strings() {
    return strings;
  }

  static get defaultAdapter() {
    return {
      isRTL: () => /* boolean */ false,
      registerLeftIndicatorInteractionHandler: (/* handler: EventListener */) => {},
      deregisterLeftIndicatorInteractionHandler: (/* handler: EventListener */) => {},
      registerRightIndicatorInteractionHandler: (/* handler: EventListener */) => {},
      deregisterRightIndicatorInteractionHandler: (/* handler: EventListener */) => {},
    }
    //return {
    //  addClass: (/* className: string */) => {},
    //  removeClass: (/* className: string */) => {},
    //  hasClass: (/* className: string */) => {}, //  registerInteractionHandler: (/* type: string, handler: EventListener, useCapture: boolean */) => {},
    //  deregisterInteractionHandler: (/* type: string, handler: EventListener */) => {},
    //  registerResizeHandler: (/* handler: EventListener */) => {},
    //  deregisterResizeHandler: (/* handler: EventListener */) => {},
    //  eventTargetHasClass: (/* target: EventTarget, className: string */) => /* boolean */ false,
    //  isEventTargetAncestorOfForwardIndicator: (/* target: EventTarget */) => /* boolean */ false,
    //  isEventTargetAncestorOfBackIndicator: (/* target: EventTarget */) => /* boolean */ false,
    //  addClassToBackIndicator: (/* className: string */) => {},
    //  removeClassFromBackIndicator: (/* className: string */) => {},
    //  backIndicatorHasClass: (/* className: string */) => {},
    //  addClassToForwardIndicator: (/* className: string */) => {},
    //  removeClassFromForwardIndicator: (/* className: string */) => {},
    //  forwardIndicatorHasClass: (/* className: string */) => {},
    //  getOffsetWidth: () => /* number */ 0,
    //  getBackIndicatorOffsetWidth: () => /* number */ 0,
    //  getForwardIndicatorOffsetWidth: () => /* number */ 0,
    //  getNumberOfTabs: () => /* number */ 0,
    //  getOffsetLeftForTabAtIndex: (/* index: number */) => /* number */ 0,
    //  getOffsetWidthForTabAtIndex: (/* index: number */) => /* number */ 0,
    //  setStyleForWrapperElement: (/* propertyName: string, value: string */) => {},
    //  isRTL: () => /* boolean */ false,
    //};
  }

  constructor(adapter) {
    super(Object.assign(MDCTabsScrollerFoundation.defaultAdapter, adapter));

    this.rightIndicatorClickHandler = () => this.scrollRight();
    this.leftIndicatorClickHandler = () => this.scrollLeft();
    // this.computedWrapperWidth_ = 0;
    // this.layoutFrame_ = 0;
    // this.pointerDownRecognized_ = false;
    // this.pointerRecognitionEvents_ = ['touchstart', 'pointerdown', 'mousedown'];
    // this.pointerRecognitionHandler_ = () => {
    //   this.pointerDownRecognized_ = true;
    // };
    // this.focusHandler_ = (evt) => this.handleFocus_(evt);
    // this.clickHandler_ = (evt) => this.handlePossibleIndicatorClick_(evt);
    // this.resizeHandler_ = () => this.layout();
  }

  init() {
    this.adapter_.registerLeftIndicatorInteractionHandler(this.forwardIndicatorClickHandler);
    // this.adapter_.registerRightIndicatorInteractionHandler(this.forwardIndicatorClickHandler);
    // this.pointerRecognitionEvents_.forEach((evtType) => {
    //   this.adapter_.registerInteractionHandler(evtType, this.pointerRecognitionHandler_, true);
    // });
    // this.adapter_.registerInteractionHandler('focus', this.focusHandler_, true);
    // this.adapter_.registerInteractionHandler('click', this.clickHandler_);
  }

  destroy() {
    this.adapter_.deregisterLeftIndicatorInteractionHandler(this.forwardIndicatorClickHandler);
    this.adapter_.deregisterRightIndicatorInteractionHandler(this.forwardIndicatorClickHandler);
    // this.pointerRecognitionEvents_.forEach((evtType) => {
    //   this.adapter_.deregisterInteractionHandler(evtType, this.pointerRecognitionHandler_);
    // });
    // this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    // this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
  }

  scrollForward() {
    console.log("forward");
    // this.adapter_.isRTL() ? this.adapter_.scrollLeft() : this.adapter_.scrollRight;
  }

  scrollBack() {
    console.log("back");
    // this.adapter_.isRTL() ? this.adapter_.scrollRight() : this.adapter_.scrollLeft;
  }

  scrollToTab(tab) {
    this.currentTranslateOffset_ = tab.computedLeft;
    requestAnimationFrame(() => this.shiftWrapper_());
  }
 
//  handleFocus_(evt) {
//    // TODO
//  }
//
//  handleBlur_(evt) {
//    // TODO
//  }

//  handlePossibleIndicatorClick_(evt) {
//    const {
//      INDICATOR_FORWARD,
//      INDICATOR_BACK,
//      INDICATOR_DISABLED,
//    } = cssClasses;
//    const {target} = evt;
//    const shouldScrollForward = (
//      this.adapter_.eventTargetHasClass(target, INDICATOR_FORWARD) &&
//      !this.adapter_.eventTargetHasClass(target, INDICATOR_DISABLED)
//    );
//    const shouldScrollBack = (
//      this.adapter_.eventTargetHasClass(target, INDICATOR_BACK) &&
//      !this.adapter_.eventTargetHasClass(target, INDICATOR_DISABLED)
//    );
// 
//    if (shouldScrollForward) {
//      this.scrollForward();
//    } else if (shouldScrollBack) {
//      this.scrollBack();
//    }
//  }
}