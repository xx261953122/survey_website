var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
(function() {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.textContent = "*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}/*\n! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden=\"until-found\"])) {\n  display: none;\n}\n  :root { \n    --background:0 0% 100%; \n    --foreground:240 10% 3.9%; \n    --card:0 0% 100%; \n    --card-foreground:240 10% 3.9%; \n    --popover:0 0% 100%; \n    --popover-foreground:240 10% 3.9%; \n    --primary:240 5.9% 10%; \n    --primary-foreground:0 0% 98%; \n    --secondary:240 4.8% 95.9%; \n    --secondary-foreground:240 5.9% 10%; \n    --muted:240 4.8% 95.9%; \n    --muted-foreground:240 3.8% 46.1%; \n    --accent:240 4.8% 95.9%; \n    --accent-foreground:240 5.9% 10%; \n    --destructive:0 84.2% 60.2%; \n    --destructive-foreground:0 0% 98%; \n    --border:240 5.9% 90%; \n    --input:240 5.9% 90%; \n    --ring:240 10% 3.9%; \n    --chart-1:12 76% 61%; \n    --chart-2:173 58% 39%; \n    --chart-3:197 37% 24%; \n    --chart-4:43 74% 66%; \n    --chart-5:27 87% 67%; \n    --radius:0.5rem;\n  }\n  * {\n    border-color: hsl(var(--border));\n  }\n  body {\n    background-color: hsl(var(--background));\n    color: hsl(var(--foreground));\n  }\n.invisible {\n  visibility: hidden;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  inset: 0px;\n}\n.-bottom-1 {\n  bottom: -0.25rem;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.bottom-1\\/3 {\n  bottom: 33.333333%;\n}\n.bottom-1\\/4 {\n  bottom: 25%;\n}\n.left-0 {\n  left: 0px;\n}\n.left-1\\/2 {\n  left: 50%;\n}\n.left-1\\/3 {\n  left: 33.333333%;\n}\n.left-1\\/4 {\n  left: 25%;\n}\n.right-0 {\n  right: 0px;\n}\n.right-1\\/3 {\n  right: 33.333333%;\n}\n.right-1\\/4 {\n  right: 25%;\n}\n.top-0 {\n  top: 0px;\n}\n.top-1\\/2 {\n  top: 50%;\n}\n.top-1\\/3 {\n  top: 33.333333%;\n}\n.top-1\\/4 {\n  top: 25%;\n}\n.top-full {\n  top: 100%;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-50 {\n  z-index: 50;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.mb-12 {\n  margin-bottom: 3rem;\n}\n.mb-16 {\n  margin-bottom: 4rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-20 {\n  margin-bottom: 5rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.ml-1 {\n  margin-left: 0.25rem;\n}\n.ml-\\[150px\\] {\n  margin-left: 150px;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mt-12 {\n  margin-top: 3rem;\n}\n.mt-16 {\n  margin-top: 4rem;\n}\n.mt-2 {\n  margin-top: 0.5rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mt-6 {\n  margin-top: 1.5rem;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.grid {\n  display: grid;\n}\n.inline-grid {\n  display: inline-grid;\n}\n.hidden {\n  display: none;\n}\n.h-0\\.5 {\n  height: 0.125rem;\n}\n.h-1 {\n  height: 0.25rem;\n}\n.h-1\\.5 {\n  height: 0.375rem;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-12 {\n  height: 3rem;\n}\n.h-16 {\n  height: 4rem;\n}\n.h-2 {\n  height: 0.5rem;\n}\n.h-20 {\n  height: 5rem;\n}\n.h-24 {\n  height: 6rem;\n}\n.h-3 {\n  height: 0.75rem;\n}\n.h-32 {\n  height: 8rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-9 {\n  height: 2.25rem;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.w-1 {\n  width: 0.25rem;\n}\n.w-1\\.5 {\n  width: 0.375rem;\n}\n.w-12 {\n  width: 3rem;\n}\n.w-16 {\n  width: 4rem;\n}\n.w-2 {\n  width: 0.5rem;\n}\n.w-20 {\n  width: 5rem;\n}\n.w-24 {\n  width: 6rem;\n}\n.w-3 {\n  width: 0.75rem;\n}\n.w-32 {\n  width: 8rem;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-48 {\n  width: 12rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-8 {\n  width: 2rem;\n}\n.w-9 {\n  width: 2.25rem;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-2xl {\n  max-width: 42rem;\n}\n.max-w-3xl {\n  max-width: 48rem;\n}\n.max-w-4xl {\n  max-width: 56rem;\n}\n.max-w-5xl {\n  max-width: 64rem;\n}\n.max-w-6xl {\n  max-width: 72rem;\n}\n.max-w-7xl {\n  max-width: 80rem;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.-translate-x-16 {\n  --tw-translate-x: -4rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-16 {\n  --tw-translate-y: -4rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-12 {\n  --tw-translate-x: 3rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-12 {\n  --tw-translate-y: 3rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-45 {\n  --tw-rotate: 45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes bounce {\n\n  0%, 100% {\n    transform: translateY(-25%);\n    animation-timing-function: cubic-bezier(0.8,0,1,1);\n  }\n\n  50% {\n    transform: none;\n    animation-timing-function: cubic-bezier(0,0,0.2,1);\n  }\n}\n.animate-bounce {\n  animation: bounce 1s infinite;\n}\n@keyframes ping {\n\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n.animate-ping {\n  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n@keyframes pulse {\n\n  50% {\n    opacity: .5;\n  }\n}\n.animate-pulse {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n@keyframes spin {\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-1 {\n  gap: 0.25rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-3 {\n  gap: 0.75rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.gap-8 {\n  gap: 2rem;\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.75rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.space-y-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-2xl {\n  border-radius: 1rem;\n}\n.rounded-3xl {\n  border-radius: 1.5rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: var(--radius);\n}\n.rounded-md {\n  border-radius: calc(var(--radius) - 2px);\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.rounded-b-lg {\n  border-bottom-right-radius: var(--radius);\n  border-bottom-left-radius: var(--radius);\n}\n.rounded-t-lg {\n  border-top-left-radius: var(--radius);\n  border-top-right-radius: var(--radius);\n}\n.border {\n  border-width: 1px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-\\[\\#6D25BE\\]\\/30 {\n  border-color: rgb(109 37 190 / 0.3);\n}\n.border-gray-100 {\n  --tw-border-opacity: 1;\n  border-color: rgb(243 244 246 / var(--tw-border-opacity, 1));\n}\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));\n}\n.border-gray-800 {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 41 55 / var(--tw-border-opacity, 1));\n}\n.border-green-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(187 247 208 / var(--tw-border-opacity, 1));\n}\n.border-green-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(134 239 172 / var(--tw-border-opacity, 1));\n}\n.border-green-400\\/30 {\n  border-color: rgb(74 222 128 / 0.3);\n}\n.border-input {\n  border-color: hsl(var(--input));\n}\n.border-purple-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(233 213 255 / var(--tw-border-opacity, 1));\n}\n.border-purple-400\\/30 {\n  border-color: rgb(192 132 252 / 0.3);\n}\n.border-red-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(252 165 165 / var(--tw-border-opacity, 1));\n}\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity, 1));\n}\n.border-white\\/20 {\n  border-color: rgb(255 255 255 / 0.2);\n}\n.bg-background {\n  background-color: hsl(var(--background));\n}\n.bg-blue-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(96 165 250 / var(--tw-bg-opacity, 1));\n}\n.bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));\n}\n.bg-destructive {\n  background-color: hsl(var(--destructive));\n}\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1));\n}\n.bg-green-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(74 222 128 / var(--tw-bg-opacity, 1));\n}\n.bg-green-400\\/20 {\n  background-color: rgb(74 222 128 / 0.2);\n}\n.bg-green-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(240 253 244 / var(--tw-bg-opacity, 1));\n}\n.bg-primary {\n  background-color: hsl(var(--primary));\n}\n.bg-purple-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 232 255 / var(--tw-bg-opacity, 1));\n}\n.bg-purple-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(192 132 252 / var(--tw-bg-opacity, 1));\n}\n.bg-purple-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 245 255 / var(--tw-bg-opacity, 1));\n}\n.bg-purple-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));\n}\n.bg-red-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 113 113 / var(--tw-bg-opacity, 1));\n}\n.bg-secondary {\n  background-color: hsl(var(--secondary));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.bg-white\\/10 {\n  background-color: rgb(255 255 255 / 0.1);\n}\n.bg-white\\/20 {\n  background-color: rgb(255 255 255 / 0.2);\n}\n.bg-white\\/25 {\n  background-color: rgb(255 255 255 / 0.25);\n}\n.bg-white\\/30 {\n  background-color: rgb(255 255 255 / 0.3);\n}\n.bg-white\\/40 {\n  background-color: rgb(255 255 255 / 0.4);\n}\n.bg-white\\/50 {\n  background-color: rgb(255 255 255 / 0.5);\n}\n.bg-white\\/60 {\n  background-color: rgb(255 255 255 / 0.6);\n}\n.bg-white\\/95 {\n  background-color: rgb(255 255 255 / 0.95);\n}\n.bg-gradient-to-br {\n  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));\n}\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n.from-\\[\\#6D25BE\\] {\n  --tw-gradient-from: #6D25BE var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(109 37 190 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-blue-500 {\n  --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-gray-50 {\n  --tw-gradient-from: #f9fafb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(249 250 251 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-gray-900 {\n  --tw-gradient-from: #111827 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(17 24 39 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-green-400 {\n  --tw-gradient-from: #4ade80 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(74 222 128 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-green-50\\/40 {\n  --tw-gradient-from: rgb(240 253 244 / 0.4) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(240 253 244 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-purple-100 {\n  --tw-gradient-from: #f3e8ff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(243 232 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-purple-400 {\n  --tw-gradient-from: #c084fc var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(192 132 252 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-purple-400\\/20 {\n  --tw-gradient-from: rgb(192 132 252 / 0.2) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(192 132 252 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-purple-500 {\n  --tw-gradient-from: #a855f7 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(168 85 247 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-purple-600 {\n  --tw-gradient-from: #9333ea var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(147 51 234 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-transparent {\n  --tw-gradient-from: transparent var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-white {\n  --tw-gradient-from: #fff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.via-blue-900 {\n  --tw-gradient-to: rgb(30 58 138 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #1e3a8a var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n.via-purple-50\\/30 {\n  --tw-gradient-to: rgb(250 245 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(250 245 255 / 0.3) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n.via-white\\/20 {\n  --tw-gradient-to: rgb(255 255 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(255 255 255 / 0.2) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n.via-white\\/30 {\n  --tw-gradient-to: rgb(255 255 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(255 255 255 / 0.3) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n.to-\\[\\#45EA24\\] {\n  --tw-gradient-to: #45EA24 var(--tw-gradient-to-position);\n}\n.to-blue-100 {\n  --tw-gradient-to: #dbeafe var(--tw-gradient-to-position);\n}\n.to-blue-400 {\n  --tw-gradient-to: #60a5fa var(--tw-gradient-to-position);\n}\n.to-blue-400\\/20 {\n  --tw-gradient-to: rgb(96 165 250 / 0.2) var(--tw-gradient-to-position);\n}\n.to-blue-500 {\n  --tw-gradient-to: #3b82f6 var(--tw-gradient-to-position);\n}\n.to-blue-600 {\n  --tw-gradient-to: #2563eb var(--tw-gradient-to-position);\n}\n.to-cyan-500 {\n  --tw-gradient-to: #06b6d4 var(--tw-gradient-to-position);\n}\n.to-purple-100\\/20 {\n  --tw-gradient-to: rgb(243 232 255 / 0.2) var(--tw-gradient-to-position);\n}\n.to-purple-50 {\n  --tw-gradient-to: #faf5ff var(--tw-gradient-to-position);\n}\n.to-purple-500 {\n  --tw-gradient-to: #a855f7 var(--tw-gradient-to-position);\n}\n.to-purple-900 {\n  --tw-gradient-to: #581c87 var(--tw-gradient-to-position);\n}\n.to-transparent {\n  --tw-gradient-to: transparent var(--tw-gradient-to-position);\n}\n.to-white {\n  --tw-gradient-to: #fff var(--tw-gradient-to-position);\n}\n.bg-clip-text {\n  -webkit-background-clip: text;\n          background-clip: text;\n}\n.fill-current {\n  fill: currentColor;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.p-8 {\n  padding: 2rem;\n}\n.px-10 {\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-20 {\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.pb-16 {\n  padding-bottom: 4rem;\n}\n.pl-4 {\n  padding-left: 1rem;\n}\n.pt-20 {\n  padding-top: 5rem;\n}\n.pt-4 {\n  padding-top: 1rem;\n}\n.pt-6 {\n  padding-top: 1.5rem;\n}\n.pt-\\[25px\\] {\n  padding-top: 25px;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n.text-6xl {\n  font-size: 3.75rem;\n  line-height: 1;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.italic {\n  font-style: italic;\n}\n.leading-relaxed {\n  line-height: 1.625;\n}\n.leading-tight {\n  line-height: 1.25;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.text-cyan-100 {\n  --tw-text-opacity: 1;\n  color: rgb(207 250 254 / var(--tw-text-opacity, 1));\n}\n.text-destructive-foreground {\n  color: hsl(var(--destructive-foreground));\n}\n.text-gray-100 {\n  --tw-text-opacity: 1;\n  color: rgb(243 244 246 / var(--tw-text-opacity, 1));\n}\n.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity, 1));\n}\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity, 1));\n}\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity, 1));\n}\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity, 1));\n}\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.text-green-100 {\n  --tw-text-opacity: 1;\n  color: rgb(220 252 231 / var(--tw-text-opacity, 1));\n}\n.text-green-400 {\n  --tw-text-opacity: 1;\n  color: rgb(74 222 128 / var(--tw-text-opacity, 1));\n}\n.text-green-600 {\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity, 1));\n}\n.text-green-700 {\n  --tw-text-opacity: 1;\n  color: rgb(21 128 61 / var(--tw-text-opacity, 1));\n}\n.text-green-900 {\n  --tw-text-opacity: 1;\n  color: rgb(20 83 45 / var(--tw-text-opacity, 1));\n}\n.text-primary {\n  color: hsl(var(--primary));\n}\n.text-primary-foreground {\n  color: hsl(var(--primary-foreground));\n}\n.text-purple-100 {\n  --tw-text-opacity: 1;\n  color: rgb(243 232 255 / var(--tw-text-opacity, 1));\n}\n.text-purple-200 {\n  --tw-text-opacity: 1;\n  color: rgb(233 213 255 / var(--tw-text-opacity, 1));\n}\n.text-purple-600 {\n  --tw-text-opacity: 1;\n  color: rgb(147 51 234 / var(--tw-text-opacity, 1));\n}\n.text-purple-700 {\n  --tw-text-opacity: 1;\n  color: rgb(126 34 206 / var(--tw-text-opacity, 1));\n}\n.text-purple-800 {\n  --tw-text-opacity: 1;\n  color: rgb(107 33 168 / var(--tw-text-opacity, 1));\n}\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity, 1));\n}\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity, 1));\n}\n.text-secondary-foreground {\n  color: hsl(var(--secondary-foreground));\n}\n.text-transparent {\n  color: transparent;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.text-white\\/70 {\n  color: rgb(255 255 255 / 0.7);\n}\n.text-white\\/80 {\n  color: rgb(255 255 255 / 0.8);\n}\n.text-white\\/90 {\n  color: rgb(255 255 255 / 0.9);\n}\n.text-yellow-500 {\n  --tw-text-opacity: 1;\n  color: rgb(234 179 8 / var(--tw-text-opacity, 1));\n}\n.underline-offset-4 {\n  text-underline-offset: 4px;\n}\n.opacity-0 {\n  opacity: 0;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-2xl {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.drop-shadow {\n  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.drop-shadow-lg {\n  --tw-drop-shadow: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.drop-shadow-md {\n  --tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.drop-shadow-sm {\n  --tw-drop-shadow: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.backdrop-blur-sm {\n  --tw-backdrop-blur: blur(4px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.duration-500 {\n  transition-duration: 500ms;\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes enter {\n\n  from {\n    opacity: var(--tw-enter-opacity, 1);\n    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));\n  }\n}\n@keyframes exit {\n\n  to {\n    opacity: var(--tw-exit-opacity, 1);\n    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));\n  }\n}\n.duration-200 {\n  animation-duration: 200ms;\n}\n.duration-300 {\n  animation-duration: 300ms;\n}\n.duration-500 {\n  animation-duration: 500ms;\n}\n.ease-in-out {\n  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\nhtml,body { \n  height:100%; \n  scroll-behavior: smooth;\n}\n\n/* Full screen scroll container */\n.fullscreen-scroll {\n  height: 100vh;\n  overflow-y: scroll;\n  scroll-snap-type: y mandatory;\n}\n\n.fullscreen-section {\n  scroll-snap-align: start;\n  height: 100vh;\n  width: 100%;\n}\n\n/* Custom animations */\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n\n@keyframes bounce {\n  0%, 20%, 53%, 80%, 100% {\n    transform: translate3d(0,0,0);\n  }\n  40%, 43% {\n    transform: translate3d(0, -30px, 0);\n  }\n  70% {\n    transform: translate3d(0, -15px, 0);\n  }\n  90% {\n    transform: translate3d(0, -4px, 0);\n  }\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n/* New animations for Hero section */\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0px);\n    opacity: 0.8;\n  }\n  50% {\n    transform: translateY(-20px);\n    opacity: 1;\n  }\n}\n\n@keyframes glow {\n  0%, 100% {\n    opacity: 0.3;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.6;\n    transform: scale(1.1);\n  }\n}\n\n@keyframes slideDown {\n  0% {\n    transform: translateY(-50px);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(50px);\n    opacity: 0;\n  }\n}\n\n@keyframes slideRight {\n  0% {\n    transform: translateX(-50px);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(50px);\n    opacity: 0;\n  }\n}\n\n@keyframes breathe {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.05);\n  }\n}\n\n@keyframes flash {\n  0%, 50% { opacity: 1; }\n  25%, 75% { opacity: 0.3; }\n}\n\n@keyframes color-flash {\n  0%, 100% { background: linear-gradient(to right, #10b981, #06b6d4); }\n  25% { background: linear-gradient(to right, #059669, #0891b2); }\n  50% { background: linear-gradient(to right, #047857, #0e7490); }\n  75% { background: linear-gradient(to right, #065f46, #155e75); }\n}\n\n@keyframes neon-flash {\n  0%, 100% { \n    box-shadow: 0 0 5px #10b981, 0 0 10px #10b981, 0 0 15px #10b981, 0 0 20px #10b981;\n    opacity: 1;\n  }\n  50% { \n    box-shadow: 0 0 20px #10b981, 0 0 30px #10b981, 0 0 40px #10b981, 0 0 50px #10b981;\n    opacity: 0.8;\n  }\n}\n\n@keyframes gradient-shift {\n  0% { background: linear-gradient(to right, #10b981, #06b6d4); }\n  25% { background: linear-gradient(to right, #06b6d4, #10b981); }\n  50% { background: linear-gradient(to right, #0891b2, #059669); }\n  75% { background: linear-gradient(to right, #059669, #0891b2); }\n  100% { background: linear-gradient(to right, #10b981, #06b6d4); }\n}\n\n@keyframes bounce-flash {\n  0%, 100% { \n    opacity: 1; \n    transform: scale(1) translateY(0);\n  }\n  25% { \n    opacity: 0.5; \n    transform: scale(1.1) translateY(-8px);\n  }\n  50% { \n    opacity: 0.8; \n    transform: scale(0.95) translateY(5px);\n  }\n  75% { \n    opacity: 0.3; \n    transform: scale(1.05) translateY(-3px);\n  }\n}\n\n@keyframes three-body-flash {\n  0% { \n    opacity: 1; \n    transform: scale(1);\n    box-shadow: 0 0 10px #10b981;\n  }\n  20% { \n    opacity: 0.4; \n    transform: scale(0.9);\n    box-shadow: 0 0 5px #10b981;\n  }\n  40% { \n    opacity: 0.8; \n    transform: scale(1.1);\n    box-shadow: 0 0 15px #10b981;\n  }\n  60% { \n    opacity: 0.3; \n    transform: scale(0.95);\n    box-shadow: 0 0 8px #10b981;\n  }\n  80% { \n    opacity: 0.7; \n    transform: scale(1.05);\n    box-shadow: 0 0 12px #10b981;\n  }\n  100% { \n    opacity: 1; \n    transform: scale(1);\n    box-shadow: 0 0 10px #10b981;\n  }\n}\n\n@keyframes simple-flash {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.3; }\n}\n\n@keyframes metal-shine {\n  0% {\n    background: linear-gradient(to right, #10b981, #06b6d4);\n  }\n  10% {\n    background: linear-gradient(to right, #10b981, #06b6d4),\n                linear-gradient(90deg, transparent 0%, rgba(255,255,255,1) 50%, transparent 100%);\n    background-size: 100% 100%, 20% 100%;\n    background-position: 0 0, -20% 0;\n  }\n  20% {\n    background: linear-gradient(to right, #10b981, #06b6d4),\n                linear-gradient(90deg, transparent 0%, rgba(255,255,255,1) 50%, transparent 100%);\n    background-size: 100% 100%, 20% 100%;\n    background-position: 0 0, 0% 0;\n  }\n  30% {\n    background: linear-gradient(to right, #10b981, #06b6d4),\n                linear-gradient(90deg, transparent 0%, rgba(255,255,255,1) 50%, transparent 100%);\n    background-size: 100% 100%, 20% 100%;\n    background-position: 0 0, 20% 0;\n  }\n  40% {\n    background: linear-gradient(to right, #10b981, #06b6d4),\n                linear-gradient(90deg, transparent 0%, rgba(255,255,255,1) 50%, transparent 100%);\n    background-size: 100% 100%, 20% 100%;\n    background-position: 0 0, 40% 0;\n  }\n  50% {\n    background: linear-gradient(to right, #10b981, #06b6d4),\n                linear-gradient(90deg, transparent 0%, rgba(255,255,255,1) 50%, transparent 100%);\n    background-size: 100% 100%, 20% 100%;\n    background-position: 0 0, 60% 0;\n  }\n  60% {\n    background: linear-gradient(to right, #10b981, #06b6d4),\n                linear-gradient(90deg, transparent 0%, rgba(255,255,255,1) 50%, transparent 100%);\n    background-size: 100% 100%, 20% 100%;\n    background-position: 0 0, 80% 0;\n  }\n  70% {\n    background: linear-gradient(to right, #10b981, #06b6d4),\n                linear-gradient(90deg, transparent 0%, rgba(255,255,255,1) 50%, transparent 100%);\n    background-size: 100% 100%, 20% 100%;\n    background-position: 0 0, 100% 0;\n  }\n  80% {\n    background: linear-gradient(to right, #10b981, #06b6d4),\n                linear-gradient(90deg, transparent 0%, rgba(255,255,255,1) 50%, transparent 100%);\n    background-size: 100% 100%, 20% 100%;\n    background-position: 0 0, 120% 0;\n  }\n  90% {\n    background: linear-gradient(to right, #10b981, #06b6d4);\n  }\n  100% {\n    background: linear-gradient(to right, #10b981, #06b6d4);\n  }\n}\n\n@keyframes simple-shine {\n  0% { opacity: 1; }\n  50% { opacity: 0.5; }\n  100% { opacity: 1; }\n}\n\n@keyframes metal-shine {\n  0% {\n    background: linear-gradient(to right, #10b981, #06b6d4);\n  }\n  10% {\n    background: linear-gradient(to right, #10b981, #06b6d4),\n                linear-gradient(90deg, transparent 0%, rgba(255,255,255,1) 50%, transparent 100%);\n    background-size: 100% 100%, 40% 100%;\n    background-position: 0 0, -40% 0;\n  }\n  20% {\n    background: linear-gradient(to right, #10b981, #06b6d4),\n                linear-gradient(90deg, transparent 0%, rgba(255,255,255,1) 50%, transparent 100%);\n    background-size: 100% 100%, 40% 100%;\n    background-position: 0 0, 0% 0;\n  }\n  30% {\n    background: linear-gradient(to right, #10b981, #06b6d4),\n                linear-gradient(90deg, transparent 0%, rgba(255,255,255,1) 50%, transparent 100%);\n    background-size: 100% 100%, 40% 100%;\n    background-position: 0 0, 40% 0;\n  }\n  40% {\n    background: linear-gradient(to right, #10b981, #06b6d4),\n                linear-gradient(90deg, transparent 0%, rgba(255,255,255,1) 50%, transparent 100%);\n    background-size: 100% 100%, 40% 100%;\n    background-position: 0 0, 80% 0;\n  }\n  50% {\n    background: linear-gradient(to right, #10b981, #06b6d4),\n                linear-gradient(90deg, transparent 0%, rgba(255,255,255,1) 50%, transparent 100%);\n    background-size: 100% 100%, 40% 100%;\n    background-position: 0 0, 120% 0;\n  }\n  60% {\n    background: linear-gradient(to right, #10b981, #06b6d4);\n  }\n  70% {\n    background: linear-gradient(to right, #10b981, #06b6d4);\n  }\n  80% {\n    background: linear-gradient(to right, #10b981, #06b6d4);\n  }\n  90% {\n    background: linear-gradient(to right, #10b981, #06b6d4);\n  }\n  100% {\n    background: linear-gradient(to right, #10b981, #06b6d4);\n  }\n}\n\n@keyframes slow-pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n\n/* Tech-themed animations */\n@keyframes neuralPulse {\n  0%, 100% {\n    opacity: 0.7;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n}\n\n@keyframes dataFlow {\n  0% {\n    opacity: 0;\n    transform: translateX(-20px) rotate(45deg);\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(20px) rotate(45deg);\n  }\n}\n\n@keyframes binaryRain {\n  0% {\n    transform: translateY(-30px);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n}\n\n@keyframes circuitGlow {\n  0%, 100% {\n    opacity: 0.3;\n    border-color: rgba(255, 255, 255, 0.3);\n  }\n  50% {\n    opacity: 0.6;\n    border-color: rgba(255, 255, 255, 0.6);\n  }\n}\n\n@keyframes dataPoint {\n  0%, 100% {\n    opacity: 0.7;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.3);\n  }\n}\n\n/* Scroll animations */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes slideInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n@keyframes slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(50px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n.animate-on-scroll {\n  animation: fadeInUp 0.8s ease-out;\n}\n\n.slide-in-left {\n  animation: slideInLeft 0.8s ease-out;\n}\n\n.slide-in-right {\n  animation: slideInRight 0.8s ease-out;\n}\n\n.hover\\:scale-105:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:border-gray-200:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));\n}\n\n.hover\\:border-purple-200:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(233 213 255 / var(--tw-border-opacity, 1));\n}\n\n.hover\\:bg-accent:hover {\n  background-color: hsl(var(--accent));\n}\n\n.hover\\:bg-blue-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-destructive\\/90:hover {\n  background-color: hsl(var(--destructive) / 0.9);\n}\n\n.hover\\:bg-gray-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-green-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 252 231 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-primary\\/90:hover {\n  background-color: hsl(var(--primary) / 0.9);\n}\n\n.hover\\:bg-purple-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 245 255 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-secondary\\/80:hover {\n  background-color: hsl(var(--secondary) / 0.8);\n}\n\n.hover\\:bg-white:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:bg-white\\/10:hover {\n  background-color: rgb(255 255 255 / 0.1);\n}\n\n.hover\\:bg-white\\/15:hover {\n  background-color: rgb(255 255 255 / 0.15);\n}\n\n.hover\\:from-blue-600:hover {\n  --tw-gradient-from: #2563eb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(37 99 235 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-purple-600:hover {\n  --tw-gradient-from: #9333ea var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(147 51 234 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:from-purple-700:hover {\n  --tw-gradient-from: #7e22ce var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(126 34 206 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.hover\\:to-blue-600:hover {\n  --tw-gradient-to: #2563eb var(--tw-gradient-to-position);\n}\n\n.hover\\:to-blue-700:hover {\n  --tw-gradient-to: #1d4ed8 var(--tw-gradient-to-position);\n}\n\n.hover\\:to-purple-600:hover {\n  --tw-gradient-to: #9333ea var(--tw-gradient-to-position);\n}\n\n.hover\\:text-accent-foreground:hover {\n  color: hsl(var(--accent-foreground));\n}\n\n.hover\\:text-gray-100:hover {\n  --tw-text-opacity: 1;\n  color: rgb(243 244 246 / var(--tw-text-opacity, 1));\n}\n\n.hover\\:text-purple-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(147 51 234 / var(--tw-text-opacity, 1));\n}\n\n.hover\\:text-purple-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(126 34 206 / var(--tw-text-opacity, 1));\n}\n\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\n\n.hover\\:opacity-80:hover {\n  opacity: 0.8;\n}\n\n.hover\\:shadow-lg:hover {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:shadow-md:hover {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-purple-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(168 85 247 / var(--tw-ring-opacity, 1));\n}\n\n.focus\\:ring-white\\/50:focus {\n  --tw-ring-color: rgb(255 255 255 / 0.5);\n}\n\n.focus\\:ring-offset-2:focus {\n  --tw-ring-offset-width: 2px;\n}\n\n.focus\\:ring-offset-transparent:focus {\n  --tw-ring-offset-color: transparent;\n}\n\n.focus-visible\\:outline-none:focus-visible {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.focus-visible\\:ring-1:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus-visible\\:ring-ring:focus-visible {\n  --tw-ring-color: hsl(var(--ring));\n}\n\n.disabled\\:pointer-events-none:disabled {\n  pointer-events: none;\n}\n\n.disabled\\:opacity-50:disabled {\n  opacity: 0.5;\n}\n\n.group:hover .group-hover\\:visible {\n  visibility: visible;\n}\n\n.group:hover .group-hover\\:rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.group:hover .group-hover\\:bg-purple-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 232 255 / var(--tw-bg-opacity, 1));\n}\n\n.group:hover .group-hover\\:bg-purple-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 245 255 / var(--tw-bg-opacity, 1));\n}\n\n.group:hover .group-hover\\:from-purple-200 {\n  --tw-gradient-from: #e9d5ff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(233 213 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.group:hover .group-hover\\:to-blue-200 {\n  --tw-gradient-to: #bfdbfe var(--tw-gradient-to-position);\n}\n\n.group:hover .group-hover\\:text-purple-500 {\n  --tw-text-opacity: 1;\n  color: rgb(168 85 247 / var(--tw-text-opacity, 1));\n}\n\n.group:hover .group-hover\\:text-purple-700 {\n  --tw-text-opacity: 1;\n  color: rgb(126 34 206 / var(--tw-text-opacity, 1));\n}\n\n.group:hover .group-hover\\:text-purple-800 {\n  --tw-text-opacity: 1;\n  color: rgb(107 33 168 / var(--tw-text-opacity, 1));\n}\n\n.group:hover .group-hover\\:opacity-100 {\n  opacity: 1;\n}\n\n@media (min-width: 640px) {\n\n  .sm\\:mb-12 {\n    margin-bottom: 3rem;\n  }\n\n  .sm\\:mb-16 {\n    margin-bottom: 4rem;\n  }\n\n  .sm\\:mb-4 {\n    margin-bottom: 1rem;\n  }\n\n  .sm\\:mb-6 {\n    margin-bottom: 1.5rem;\n  }\n\n  .sm\\:mb-8 {\n    margin-bottom: 2rem;\n  }\n\n  .sm\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .sm\\:mt-20 {\n    margin-top: 5rem;\n  }\n\n  .sm\\:mt-8 {\n    margin-top: 2rem;\n  }\n\n  .sm\\:inline {\n    display: inline;\n  }\n\n  .sm\\:h-16 {\n    height: 4rem;\n  }\n\n  .sm\\:w-16 {\n    width: 4rem;\n  }\n\n  .sm\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:gap-12 {\n    gap: 3rem;\n  }\n\n  .sm\\:gap-2 {\n    gap: 0.5rem;\n  }\n\n  .sm\\:gap-4 {\n    gap: 1rem;\n  }\n\n  .sm\\:gap-6 {\n    gap: 1.5rem;\n  }\n\n  .sm\\:gap-8 {\n    gap: 2rem;\n  }\n\n  .sm\\:space-y-2 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n  }\n\n  .sm\\:space-y-4 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n  }\n\n  .sm\\:space-y-6 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n  }\n\n  .sm\\:p-4 {\n    padding: 1rem;\n  }\n\n  .sm\\:p-8 {\n    padding: 2rem;\n  }\n\n  .sm\\:px-3 {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n\n  .sm\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .sm\\:py-12 {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n\n  .sm\\:py-20 {\n    padding-top: 5rem;\n    padding-bottom: 5rem;\n  }\n\n  .sm\\:py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n\n  .sm\\:py-8 {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\n\n  .sm\\:pt-8 {\n    padding-top: 2rem;\n  }\n\n  .sm\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .sm\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n\n  .sm\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .sm\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n\n  .sm\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .sm\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .sm\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n\n  .sm\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .md\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .md\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n\n  .md\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .md\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .lg\\:col-span-5 {\n    grid-column: span 5 / span 5;\n  }\n\n  .lg\\:col-span-7 {\n    grid-column: span 7 / span 7;\n  }\n\n  .lg\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n\n  .lg\\:flex {\n    display: flex;\n  }\n\n  .lg\\:hidden {\n    display: none;\n  }\n\n  .lg\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n\n  .lg\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .lg\\:gap-16 {\n    gap: 4rem;\n  }\n\n  .lg\\:gap-8 {\n    gap: 2rem;\n  }\n\n  .lg\\:p-12 {\n    padding: 3rem;\n  }\n\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n\n  .lg\\:py-24 {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n\n  .lg\\:text-left {\n    text-align: left;\n  }\n\n  .lg\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .lg\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .lg\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n}\n\n.\\[\\&_svg\\]\\:pointer-events-none svg {\n  pointer-events: none;\n}\n\n.\\[\\&_svg\\]\\:size-4 svg {\n  width: 1rem;\n  height: 1rem;\n}\n\n.\\[\\&_svg\\]\\:shrink-0 svg {\n  flex-shrink: 0;\n}\n";
  document.head.appendChild(__vite_style__);
  function getDefaultExportFromCjs(x2) {
    return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
  }
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  var react = { exports: {} };
  var react_production_min = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r$2 = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
  function A$1(a) {
    if (null === a || "object" !== typeof a)
      return null;
    a = z$1 && a[z$1] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var B$1 = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C$1 = Object.assign, D$1 = {};
  function E$1(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D$1;
    this.updater = e || B$1;
  }
  E$1.prototype.isReactComponent = {};
  E$1.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  E$1.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function F() {
  }
  F.prototype = E$1.prototype;
  function G$1(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D$1;
    this.updater = e || B$1;
  }
  var H$1 = G$1.prototype = new F();
  H$1.constructor = G$1;
  C$1(H$1, E$1.prototype);
  H$1.isPureReactComponent = true;
  var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
  function M$1(a, b, e) {
    var d, c = {}, k2 = null, h = null;
    if (null != b)
      for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
        J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g)
      c.children = e;
    else if (1 < g) {
      for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
        f2[m2] = arguments[m2 + 2];
      c.children = f2;
    }
    if (a && a.defaultProps)
      for (d in g = a.defaultProps, g)
        void 0 === c[d] && (c[d] = g[d]);
    return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
  }
  function N$1(a, b) {
    return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function O$1(a) {
    return "object" === typeof a && null !== a && a.$$typeof === l$1;
  }
  function escape(a) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b[a2];
    });
  }
  var P$1 = /\/+/g;
  function Q$1(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
  }
  function R$1(a, b, e, d, c) {
    var k2 = typeof a;
    if ("undefined" === k2 || "boolean" === k2)
      a = null;
    var h = false;
    if (null === a)
      h = true;
    else
      switch (k2) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l$1:
            case n$1:
              h = true;
          }
      }
    if (h)
      return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if (I$1(a))
      for (var g = 0; g < a.length; g++) {
        k2 = a[g];
        var f2 = d + Q$1(k2, g);
        h += R$1(k2, b, e, f2, c);
      }
    else if (f2 = A$1(a), "function" === typeof f2)
      for (a = f2.call(a), g = 0; !(k2 = a.next()).done; )
        k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
    else if ("object" === k2)
      throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
  }
  function S$1(a, b, e) {
    if (null == a)
      return a;
    var d = [], c = 0;
    R$1(a, d, "", "", function(a2) {
      return b.call(e, a2, c++);
    });
    return d;
  }
  function T$1(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      b.then(function(b2) {
        if (0 === a._status || -1 === a._status)
          a._status = 1, a._result = b2;
      }, function(b2) {
        if (0 === a._status || -1 === a._status)
          a._status = 2, a._result = b2;
      });
      -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status)
      return a._result.default;
    throw a._result;
  }
  var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
  function X$1() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
    S$1(a, function() {
      b.apply(this, arguments);
    }, e);
  }, count: function(a) {
    var b = 0;
    S$1(a, function() {
      b++;
    });
    return b;
  }, toArray: function(a) {
    return S$1(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!O$1(a))
      throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } };
  react_production_min.Component = E$1;
  react_production_min.Fragment = p$2;
  react_production_min.Profiler = r$2;
  react_production_min.PureComponent = G$1;
  react_production_min.StrictMode = q$1;
  react_production_min.Suspense = w;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
  react_production_min.act = X$1;
  react_production_min.cloneElement = function(a, b, e) {
    if (null === a || void 0 === a)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
    if (null != b) {
      void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
      void 0 !== b.key && (c = "" + b.key);
      if (a.type && a.type.defaultProps)
        var g = a.type.defaultProps;
      for (f2 in b)
        J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
    }
    var f2 = arguments.length - 2;
    if (1 === f2)
      d.children = e;
    else if (1 < f2) {
      g = Array(f2);
      for (var m2 = 0; m2 < f2; m2++)
        g[m2] = arguments[m2 + 2];
      d.children = g;
    }
    return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
  };
  react_production_min.createContext = function(a) {
    a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a.Provider = { $$typeof: t, _context: a };
    return a.Consumer = a;
  };
  react_production_min.createElement = M$1;
  react_production_min.createFactory = function(a) {
    var b = M$1.bind(null, a);
    b.type = a;
    return b;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a) {
    return { $$typeof: v$1, render: a };
  };
  react_production_min.isValidElement = O$1;
  react_production_min.lazy = function(a) {
    return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
  };
  react_production_min.memo = function(a, b) {
    return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
  };
  react_production_min.startTransition = function(a) {
    var b = V$1.transition;
    V$1.transition = {};
    try {
      a();
    } finally {
      V$1.transition = b;
    }
  };
  react_production_min.unstable_act = X$1;
  react_production_min.useCallback = function(a, b) {
    return U$1.current.useCallback(a, b);
  };
  react_production_min.useContext = function(a) {
    return U$1.current.useContext(a);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a) {
    return U$1.current.useDeferredValue(a);
  };
  react_production_min.useEffect = function(a, b) {
    return U$1.current.useEffect(a, b);
  };
  react_production_min.useId = function() {
    return U$1.current.useId();
  };
  react_production_min.useImperativeHandle = function(a, b, e) {
    return U$1.current.useImperativeHandle(a, b, e);
  };
  react_production_min.useInsertionEffect = function(a, b) {
    return U$1.current.useInsertionEffect(a, b);
  };
  react_production_min.useLayoutEffect = function(a, b) {
    return U$1.current.useLayoutEffect(a, b);
  };
  react_production_min.useMemo = function(a, b) {
    return U$1.current.useMemo(a, b);
  };
  react_production_min.useReducer = function(a, b, e) {
    return U$1.current.useReducer(a, b, e);
  };
  react_production_min.useRef = function(a) {
    return U$1.current.useRef(a);
  };
  react_production_min.useState = function(a) {
    return U$1.current.useState(a);
  };
  react_production_min.useSyncExternalStore = function(a, b, e) {
    return U$1.current.useSyncExternalStore(a, b, e);
  };
  react_production_min.useTransition = function() {
    return U$1.current.useTransition();
  };
  react_production_min.version = "18.3.1";
  {
    react.exports = react_production_min;
  }
  var reactExports = react.exports;
  const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a)
      m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  var reactDom = { exports: {} };
  var reactDom_production_min = {};
  var scheduler = { exports: {} };
  var scheduler_production_min = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function(exports) {
    function f2(a, b) {
      var c = a.length;
      a.push(b);
      a:
        for (; 0 < c; ) {
          var d = c - 1 >>> 1, e = a[d];
          if (0 < g(e, b))
            a[d] = b, a[c] = e, c = d;
          else
            break a;
        }
    }
    function h(a) {
      return 0 === a.length ? null : a[0];
    }
    function k2(a) {
      if (0 === a.length)
        return null;
      var b = a[0], c = a.pop();
      if (c !== b) {
        a[0] = c;
        a:
          for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
            var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
            if (0 > g(C2, c))
              n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
            else if (n2 < e && 0 > g(x2, c))
              a[d] = x2, a[n2] = c, d = n2;
            else
              break a;
          }
      }
      return b;
    }
    function g(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      var l2 = performance;
      exports.unstable_now = function() {
        return l2.now();
      };
    } else {
      var p2 = Date, q2 = p2.now();
      exports.unstable_now = function() {
        return p2.now() - q2;
      };
    }
    var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G2(a) {
      for (var b = h(t2); null !== b; ) {
        if (null === b.callback)
          k2(t2);
        else if (b.startTime <= a)
          k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
        else
          break;
        b = h(t2);
      }
    }
    function H2(a) {
      B2 = false;
      G2(a);
      if (!A2)
        if (null !== h(r2))
          A2 = true, I2(J2);
        else {
          var b = h(t2);
          null !== b && K2(H2, b.startTime - a);
        }
    }
    function J2(a, b) {
      A2 = false;
      B2 && (B2 = false, E2(L2), L2 = -1);
      z2 = true;
      var c = y2;
      try {
        G2(b);
        for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
          var d = v2.callback;
          if ("function" === typeof d) {
            v2.callback = null;
            y2 = v2.priorityLevel;
            var e = d(v2.expirationTime <= b);
            b = exports.unstable_now();
            "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
            G2(b);
          } else
            k2(r2);
          v2 = h(r2);
        }
        if (null !== v2)
          var w2 = true;
        else {
          var m2 = h(t2);
          null !== m2 && K2(H2, m2.startTime - b);
          w2 = false;
        }
        return w2;
      } finally {
        v2 = null, y2 = c, z2 = false;
      }
    }
    var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
    function M2() {
      return exports.unstable_now() - Q2 < P2 ? false : true;
    }
    function R2() {
      if (null !== O2) {
        var a = exports.unstable_now();
        Q2 = a;
        var b = true;
        try {
          b = O2(true, a);
        } finally {
          b ? S2() : (N2 = false, O2 = null);
        }
      } else
        N2 = false;
    }
    var S2;
    if ("function" === typeof F2)
      S2 = function() {
        F2(R2);
      };
    else if ("undefined" !== typeof MessageChannel) {
      var T2 = new MessageChannel(), U2 = T2.port2;
      T2.port1.onmessage = R2;
      S2 = function() {
        U2.postMessage(null);
      };
    } else
      S2 = function() {
        D2(R2, 0);
      };
    function I2(a) {
      O2 = a;
      N2 || (N2 = true, S2());
    }
    function K2(a, b) {
      L2 = D2(function() {
        a(exports.unstable_now());
      }, b);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A2 || z2 || (A2 = true, I2(J2));
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y2;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h(r2);
    };
    exports.unstable_next = function(a) {
      switch (y2) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = y2;
      }
      var c = y2;
      y2 = b;
      try {
        return a();
      } finally {
        y2 = c;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = y2;
      y2 = a;
      try {
        return b();
      } finally {
        y2 = c;
      }
    };
    exports.unstable_scheduleCallback = function(a, b, c) {
      var d = exports.unstable_now();
      "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
      c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
      return a;
    };
    exports.unstable_shouldYield = M2;
    exports.unstable_wrapCallback = function(a) {
      var b = y2;
      return function() {
        var c = y2;
        y2 = b;
        try {
          return a.apply(this, arguments);
        } finally {
          y2 = c;
        }
      };
    };
  })(scheduler_production_min);
  {
    scheduler.exports = scheduler_production_min;
  }
  var schedulerExports = scheduler.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var aa = reactExports, ca = schedulerExports;
  function p(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a, b) {
    ha(a, b);
    ha(a + "Capture", b);
  }
  function ha(a, b) {
    ea[a] = b;
    for (a = 0; a < b.length; a++)
      da.add(b[a]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a) {
    if (ja.call(ma, a))
      return true;
    if (ja.call(la, a))
      return false;
    if (ka.test(a))
      return ma[a] = true;
    la[a] = true;
    return false;
  }
  function pa(a, b, c, d) {
    if (null !== c && 0 === c.type)
      return false;
    switch (typeof b) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d)
          return false;
        if (null !== c)
          return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return "data-" !== a && "aria-" !== a;
      default:
        return false;
    }
  }
  function qa(a, b, c, d) {
    if (null === b || "undefined" === typeof b || pa(a, b, c, d))
      return true;
    if (d)
      return false;
    if (null !== c)
      switch (c.type) {
        case 3:
          return !b;
        case 4:
          return false === b;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
    return false;
  }
  function v(a, b, c, d, e, f2, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f2;
    this.removeEmptyString = g;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    z[a] = new v(a, 0, false, a, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var b = a[0];
    z[b] = new v(b, 1, false, a[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    z[a] = new v(a, 2, false, a, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    z[a] = new v(a, 3, true, a, null, false, false);
  });
  ["capture", "download"].forEach(function(a) {
    z[a] = new v(a, 4, false, a, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a) {
    z[a] = new v(a, 6, false, a, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a) {
    z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(
      ra,
      sa
    );
    z[b] = new v(b, 1, false, a, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
  });
  z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
  });
  function ta(a, b, c, d) {
    var e = z.hasOwnProperty(b) ? z[b] : null;
    if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
      qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a) {
    if (null === a || "object" !== typeof a)
      return null;
    a = Ja && a[Ja] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var A = Object.assign, La;
  function Ma(a) {
    if (void 0 === La)
      try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        La = b && b[1] || "";
      }
    return "\n" + La + a;
  }
  var Na = false;
  function Oa(a, b) {
    if (!a || Na)
      return "";
    Na = true;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b)
        if (b = function() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", { set: function() {
          throw Error();
        } }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (l2) {
            var d = l2;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l2) {
            d = l2;
          }
          a.call(b.prototype);
        }
      else {
        try {
          throw Error();
        } catch (l2) {
          d = l2;
        }
        a();
      }
    } catch (l2) {
      if (l2 && d && "string" === typeof l2.stack) {
        for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; )
          h--;
        for (; 1 <= g && 0 <= h; g--, h--)
          if (e[g] !== f2[h]) {
            if (1 !== g || 1 !== h) {
              do
                if (g--, h--, 0 > h || e[g] !== f2[h]) {
                  var k2 = "\n" + e[g].replace(" at new ", " at ");
                  a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                  return k2;
                }
              while (1 <= g && 0 <= h);
            }
            break;
          }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
  }
  function Pa(a) {
    switch (a.tag) {
      case 5:
        return Ma(a.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = Oa(a.type, false), a;
      case 11:
        return a = Oa(a.type.render, false), a;
      case 1:
        return a = Oa(a.type, true), a;
      default:
        return "";
    }
  }
  function Qa(a) {
    if (null == a)
      return null;
    if ("function" === typeof a)
      return a.displayName || a.name || null;
    if ("string" === typeof a)
      return a;
    switch (a) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a)
      switch (a.$$typeof) {
        case Ca:
          return (a.displayName || "Context") + ".Consumer";
        case Ba:
          return (a._context.displayName || "Context") + ".Provider";
        case Da:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Ga:
          return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
        case Ha:
          b = a._payload;
          a = a._init;
          try {
            return Qa(a(b));
          } catch (c) {
          }
      }
    return null;
  }
  function Ra(a) {
    var b = a.type;
    switch (a.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b.displayName || "Context") + ".Consumer";
      case 10:
        return (b._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b);
      case 8:
        return b === za ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b)
          return b.displayName || b.name || null;
        if ("string" === typeof b)
          return b;
    }
    return null;
  }
  function Sa(a) {
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a;
      case "object":
        return a;
      default:
        return "";
    }
  }
  function Ta(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
  }
  function Ua(a) {
    var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
      var e = c.get, f2 = c.set;
      Object.defineProperty(a, b, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a2) {
        d = "" + a2;
        f2.call(this, a2);
      } });
      Object.defineProperty(a, b, { enumerable: c.enumerable });
      return { getValue: function() {
        return d;
      }, setValue: function(a2) {
        d = "" + a2;
      }, stopTracking: function() {
        a._valueTracker = null;
        delete a[b];
      } };
    }
  }
  function Va(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
  }
  function Wa(a) {
    if (!a)
      return false;
    var b = a._valueTracker;
    if (!b)
      return true;
    var c = b.getValue();
    var d = "";
    a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), true) : false;
  }
  function Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a)
      return null;
    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  }
  function Ya(a, b) {
    var c = b.checked;
    return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
  }
  function Za(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
    c = Sa(null != b.value ? b.value : c);
    a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
  }
  function ab(a, b) {
    b = b.checked;
    null != b && ta(a, "checked", b, false);
  }
  function bb(a, b) {
    ab(a, b);
    var c = Sa(b.value), d = b.type;
    if (null != c)
      if ("number" === d) {
        if (0 === c && "" === a.value || a.value != c)
          a.value = "" + c;
      } else
        a.value !== "" + c && (a.value = "" + c);
    else if ("submit" === d || "reset" === d) {
      a.removeAttribute("value");
      return;
    }
    b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
  }
  function db(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
      var d = b.type;
      if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
        return;
      b = "" + a._wrapperState.initialValue;
      c || b === a.value || (a.value = b);
      a.defaultValue = b;
    }
    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
  }
  function cb(a, b, c) {
    if ("number" !== b || Xa(a.ownerDocument) !== a)
      null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
  }
  var eb = Array.isArray;
  function fb(a, b, c, d) {
    a = a.options;
    if (b) {
      b = {};
      for (var e = 0; e < c.length; e++)
        b["$" + c[e]] = true;
      for (c = 0; c < a.length; c++)
        e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
    } else {
      c = "" + Sa(c);
      b = null;
      for (e = 0; e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = true;
          d && (a[e].defaultSelected = true);
          return;
        }
        null !== b || a[e].disabled || (b = a[e]);
      }
      null !== b && (b.selected = true);
    }
  }
  function gb(a, b) {
    if (null != b.dangerouslySetInnerHTML)
      throw Error(p(91));
    return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
  }
  function hb(a, b) {
    var c = b.value;
    if (null == c) {
      c = b.children;
      b = b.defaultValue;
      if (null != c) {
        if (null != b)
          throw Error(p(92));
        if (eb(c)) {
          if (1 < c.length)
            throw Error(p(93));
          c = c[0];
        }
        b = c;
      }
      null == b && (b = "");
      c = b;
    }
    a._wrapperState = { initialValue: Sa(c) };
  }
  function ib(a, b) {
    var c = Sa(b.value), d = Sa(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
  }
  function jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
  }
  function kb(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
  }
  var mb, nb = function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a(b, c, d, e);
      });
    } : a;
  }(function(a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
      a.innerHTML = b;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
      for (b = mb.firstChild; a.firstChild; )
        a.removeChild(a.firstChild);
      for (; b.firstChild; )
        a.appendChild(b.firstChild);
    }
  });
  function ob(a, b) {
    if (b) {
      var c = a.firstChild;
      if (c && c === a.lastChild && 3 === c.nodeType) {
        c.nodeValue = b;
        return;
      }
    }
    a.textContent = b;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a) {
    qb.forEach(function(b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      pb[b] = pb[a];
    });
  });
  function rb(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
  }
  function sb(a, b) {
    a = a.style;
    for (var c in b)
      if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
      }
  }
  var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a, b) {
    if (b) {
      if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
        throw Error(p(137, a));
      if (null != b.dangerouslySetInnerHTML) {
        if (null != b.children)
          throw Error(p(60));
        if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
          throw Error(p(61));
      }
      if (null != b.style && "object" !== typeof b.style)
        throw Error(p(62));
    }
  }
  function vb(a, b) {
    if (-1 === a.indexOf("-"))
      return "string" === typeof b.is;
    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a) {
    if (a = Cb(a)) {
      if ("function" !== typeof yb)
        throw Error(p(280));
      var b = a.stateNode;
      b && (b = Db(b), yb(a.stateNode, a.type, b));
    }
  }
  function Eb(a) {
    zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
  }
  function Fb() {
    if (zb) {
      var a = zb, b = Ab;
      Ab = zb = null;
      Bb(a);
      if (b)
        for (a = 0; a < b.length; a++)
          Bb(b[a]);
    }
  }
  function Gb(a, b) {
    return a(b);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a, b, c) {
    if (Ib)
      return a(b, c);
    Ib = true;
    try {
      return Gb(a, b, c);
    } finally {
      if (Ib = false, null !== zb || null !== Ab)
        Hb(), Fb();
    }
  }
  function Kb(a, b) {
    var c = a.stateNode;
    if (null === c)
      return null;
    var d = Db(c);
    if (null === d)
      return null;
    c = d[b];
    a:
      switch (b) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
          a = !d;
          break a;
        default:
          a = false;
      }
    if (a)
      return null;
    if (c && "function" !== typeof c)
      throw Error(p(231, b, typeof c));
    return c;
  }
  var Lb = false;
  if (ia)
    try {
      var Mb = {};
      Object.defineProperty(Mb, "passive", { get: function() {
        Lb = true;
      } });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a) {
      Lb = false;
    }
  function Nb(a, b, c, d, e, f2, g, h, k2) {
    var l2 = Array.prototype.slice.call(arguments, 3);
    try {
      b.apply(c, l2);
    } catch (m2) {
      this.onError(m2);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
    Ob = true;
    Pb = a;
  } };
  function Tb(a, b, c, d, e, f2, g, h, k2) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a, b, c, d, e, f2, g, h, k2) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l2 = Pb;
        Ob = false;
        Pb = null;
      } else
        throw Error(p(198));
      Qb || (Qb = true, Rb = l2);
    }
  }
  function Vb(a) {
    var b = a, c = a;
    if (a.alternate)
      for (; b.return; )
        b = b.return;
    else {
      a = b;
      do
        b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
      while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function Wb(a) {
    if (13 === a.tag) {
      var b = a.memoizedState;
      null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
      if (null !== b)
        return b.dehydrated;
    }
    return null;
  }
  function Xb(a) {
    if (Vb(a) !== a)
      throw Error(p(188));
  }
  function Yb(a) {
    var b = a.alternate;
    if (!b) {
      b = Vb(a);
      if (null === b)
        throw Error(p(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b; ; ) {
      var e = c.return;
      if (null === e)
        break;
      var f2 = e.alternate;
      if (null === f2) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f2.child) {
        for (f2 = e.child; f2; ) {
          if (f2 === c)
            return Xb(e), a;
          if (f2 === d)
            return Xb(e), b;
          f2 = f2.sibling;
        }
        throw Error(p(188));
      }
      if (c.return !== d.return)
        c = e, d = f2;
      else {
        for (var g = false, h = e.child; h; ) {
          if (h === c) {
            g = true;
            c = e;
            d = f2;
            break;
          }
          if (h === d) {
            g = true;
            d = e;
            c = f2;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f2.child; h; ) {
            if (h === c) {
              g = true;
              c = f2;
              d = e;
              break;
            }
            if (h === d) {
              g = true;
              d = f2;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g)
            throw Error(p(189));
        }
      }
      if (c.alternate !== d)
        throw Error(p(190));
    }
    if (3 !== c.tag)
      throw Error(p(188));
    return c.stateNode.current === c ? a : b;
  }
  function Zb(a) {
    a = Yb(a);
    return null !== a ? $b(a) : null;
  }
  function $b(a) {
    if (5 === a.tag || 6 === a.tag)
      return a;
    for (a = a.child; null !== a; ) {
      var b = $b(a);
      if (null !== b)
        return b;
      a = a.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a) {
    if (lc && "function" === typeof lc.onCommitFiberRoot)
      try {
        lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
      } catch (b) {
      }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a) {
    switch (a & -a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a;
    }
  }
  function uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c)
      return 0;
    var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
    if (0 !== g) {
      var h = g & ~e;
      0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
    } else
      g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
    if (0 === d)
      return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240)))
      return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b)
      for (a = a.entanglements, b &= d; 0 < b; )
        c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
  }
  function vc(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wc(a, b) {
    for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
      var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
      if (-1 === k2) {
        if (0 === (h & c) || 0 !== (h & d))
          e[g] = vc(h, b);
      } else
        k2 <= b && (a.expiredLanes |= h);
      f2 &= ~h;
    }
  }
  function xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a;
  }
  function zc(a) {
    for (var b = [], c = 0; 31 > c; c++)
      b.push(a);
    return b;
  }
  function Ac(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - oc(b);
    a[b] = c;
  }
  function Bc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for (a = a.expirationTimes; 0 < c; ) {
      var e = 31 - oc(c), f2 = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f2;
    }
  }
  function Cc(a, b) {
    var c = a.entangledLanes |= b;
    for (a = a.entanglements; c; ) {
      var d = 31 - oc(c), e = 1 << d;
      e & b | a[d] & b && (a[d] |= b);
      c &= ~e;
    }
  }
  var C = 0;
  function Dc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a, b) {
    switch (a) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b.pointerId);
    }
  }
  function Tc(a, b, c, d, e, f2) {
    if (null === a || a.nativeEvent !== f2)
      return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
  }
  function Uc(a, b, c, d, e) {
    switch (b) {
      case "focusin":
        return Lc = Tc(Lc, a, b, c, d, e), true;
      case "dragenter":
        return Mc = Tc(Mc, a, b, c, d, e), true;
      case "mouseover":
        return Nc = Tc(Nc, a, b, c, d, e), true;
      case "pointerover":
        var f2 = e.pointerId;
        Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
        return true;
      case "gotpointercapture":
        return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
    }
    return false;
  }
  function Vc(a) {
    var b = Wc(a.target);
    if (null !== b) {
      var c = Vb(b);
      if (null !== c) {
        if (b = c.tag, 13 === b) {
          if (b = Wb(c), null !== b) {
            a.blockedOn = b;
            Ic(a.priority, function() {
              Gc(c);
            });
            return;
          }
        } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
          a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  }
  function Xc(a) {
    if (null !== a.blockedOn)
      return false;
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (null === c) {
        c = a.nativeEvent;
        var d = new c.constructor(c.type, c);
        wb = d;
        c.target.dispatchEvent(d);
        wb = null;
      } else
        return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
      b.shift();
    }
    return true;
  }
  function Zc(a, b, c) {
    Xc(a) && c.delete(b);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a, b) {
    a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a) {
    function b(b2) {
      return ad(b2, a);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a);
      for (var c = 1; c < Kc.length; c++) {
        var d = Kc[c];
        d.blockedOn === a && (d.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a);
    null !== Mc && ad(Mc, a);
    null !== Nc && ad(Nc, a);
    Oc.forEach(b);
    Pc.forEach(b);
    for (c = 0; c < Qc.length; c++)
      d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
    for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
      Vc(c), null === c.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a, b, c, d) {
    var e = C, f2 = cd.transition;
    cd.transition = null;
    try {
      C = 1, fd(a, b, c, d);
    } finally {
      C = e, cd.transition = f2;
    }
  }
  function gd(a, b, c, d) {
    var e = C, f2 = cd.transition;
    cd.transition = null;
    try {
      C = 4, fd(a, b, c, d);
    } finally {
      C = e, cd.transition = f2;
    }
  }
  function fd(a, b, c, d) {
    if (dd) {
      var e = Yc(a, b, c, d);
      if (null === e)
        hd(a, b, d, id, c), Sc(a, d);
      else if (Uc(e, a, b, c, d))
        d.stopPropagation();
      else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
        for (; null !== e; ) {
          var f2 = Cb(e);
          null !== f2 && Ec(f2);
          f2 = Yc(a, b, c, d);
          null === f2 && hd(a, b, d, id, c);
          if (f2 === e)
            break;
          e = f2;
        }
        null !== e && d.stopPropagation();
      } else
        hd(a, b, d, null, c);
    }
  }
  var id = null;
  function Yc(a, b, c, d) {
    id = null;
    a = xb(d);
    a = Wc(a);
    if (null !== a)
      if (b = Vb(a), null === b)
        a = null;
      else if (c = b.tag, 13 === c) {
        a = Wb(b);
        if (null !== a)
          return a;
        a = null;
      } else if (3 === c) {
        if (b.stateNode.current.memoizedState.isDehydrated)
          return 3 === b.tag ? b.stateNode.containerInfo : null;
        a = null;
      } else
        b !== a && (a = null);
    id = a;
    return null;
  }
  function jd(a) {
    switch (a) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md)
      return md;
    var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
    for (a = 0; a < c && b[a] === e[a]; a++)
      ;
    var g = c - a;
    for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++)
      ;
    return md = e.slice(a, 1 < d ? 1 - d : void 0);
  }
  function od(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a) {
    function b(b2, d, e, f2, g) {
      this._reactName = b2;
      this._targetInst = e;
      this.type = d;
      this.nativeEvent = f2;
      this.target = g;
      this.currentTarget = null;
      for (var c in a)
        a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
      this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A(b.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a2 = this.nativeEvent;
      a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a2 = this.nativeEvent;
      a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
    return a.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
  }, movementX: function(a) {
    if ("movementX" in a)
      return a.movementX;
    a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
    return wd;
  }, movementY: function(a) {
    return "movementY" in a ? a.movementY : xd;
  } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A({}, ud, { key: function(a) {
    if (a.key) {
      var b = Md[a.key] || a.key;
      if ("Unidentified" !== b)
        return b;
    }
    return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
    return "keypress" === a.type ? od(a) : 0;
  }, keyCode: function(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }, which: function(a) {
    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
  ia && "documentMode" in document && (be = document.documentMode);
  var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
  function ge(a, b) {
    switch (a) {
      case "keyup":
        return -1 !== $d.indexOf(b.keyCode);
      case "keydown":
        return 229 !== b.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
  }
  var ie = false;
  function je(a, b) {
    switch (a) {
      case "compositionend":
        return he(b);
      case "keypress":
        if (32 !== b.which)
          return null;
        fe = true;
        return ee;
      case "textInput":
        return a = b.data, a === ee && fe ? null : a;
      default:
        return null;
    }
  }
  function ke(a, b) {
    if (ie)
      return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
          if (b.char && 1 < b.char.length)
            return b.char;
          if (b.which)
            return String.fromCharCode(b.which);
        }
        return null;
      case "compositionend":
        return de && "ko" !== b.locale ? null : b.data;
      default:
        return null;
    }
  }
  var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
  }
  function ne(a, b, c, d) {
    Eb(d);
    b = oe(b, "onChange");
    0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
  }
  var pe = null, qe = null;
  function re(a) {
    se(a, 0);
  }
  function te(a) {
    var b = ue(a);
    if (Wa(b))
      return a;
  }
  function ve(a, b) {
    if ("change" === a)
      return b;
  }
  var we = false;
  if (ia) {
    var xe;
    if (ia) {
      var ye = "oninput" in document;
      if (!ye) {
        var ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye = "function" === typeof ze.oninput;
      }
      xe = ye;
    } else
      xe = false;
    we = xe && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
  }
  function Be(a) {
    if ("value" === a.propertyName && te(qe)) {
      var b = [];
      ne(b, qe, a, xb(a));
      Jb(re, b);
    }
  }
  function Ce(a, b, c) {
    "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
  }
  function De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a)
      return te(qe);
  }
  function Ee(a, b) {
    if ("click" === a)
      return te(b);
  }
  function Fe(a, b) {
    if ("input" === a || "change" === a)
      return te(b);
  }
  function Ge(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var He = "function" === typeof Object.is ? Object.is : Ge;
  function Ie(a, b) {
    if (He(a, b))
      return true;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
      return false;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length)
      return false;
    for (d = 0; d < c.length; d++) {
      var e = c[d];
      if (!ja.call(b, e) || !He(a[e], b[e]))
        return false;
    }
    return true;
  }
  function Je(a) {
    for (; a && a.firstChild; )
      a = a.firstChild;
    return a;
  }
  function Ke(a, b) {
    var c = Je(a);
    a = 0;
    for (var d; c; ) {
      if (3 === c.nodeType) {
        d = a + c.textContent.length;
        if (a <= b && d >= b)
          return { node: c, offset: b - a };
        a = d;
      }
      a: {
        for (; c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }
          c = c.parentNode;
        }
        c = void 0;
      }
      c = Je(c);
    }
  }
  function Le(a, b) {
    return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
  }
  function Me() {
    for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
      try {
        var c = "string" === typeof b.contentWindow.location.href;
      } catch (d) {
        c = false;
      }
      if (c)
        a = b.contentWindow;
      else
        break;
      b = Xa(a.document);
    }
    return b;
  }
  function Ne(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
  }
  function Oe(a) {
    var b = Me(), c = a.focusedElem, d = a.selectionRange;
    if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
      if (null !== d && Ne(c)) {
        if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
          c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
        else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
          a = a.getSelection();
          var e = c.textContent.length, f2 = Math.min(d.start, e);
          d = void 0 === d.end ? f2 : Math.min(d.end, e);
          !a.extend && f2 > d && (e = d, d = f2, f2 = e);
          e = Ke(c, f2);
          var g = Ke(
            c,
            d
          );
          e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
        }
      }
      b = [];
      for (a = c; a = a.parentNode; )
        1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      "function" === typeof c.focus && c.focus();
      for (c = 0; c < b.length; c++)
        a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
  }
  var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
  function Ue(a, b, c) {
    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
  }
  function Ve(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
  }
  var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
  function Ze(a) {
    if (Xe[a])
      return Xe[a];
    if (!We[a])
      return a;
    var b = We[a], c;
    for (c in b)
      if (b.hasOwnProperty(c) && c in Ye)
        return Xe[a] = b[c];
    return a;
  }
  var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a, b) {
    df.set(a, b);
    fa(b, [a]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    Ub(d, b, void 0, a);
    a.currentTarget = null;
  }
  function se(a, b) {
    b = 0 !== (b & 4);
    for (var c = 0; c < a.length; c++) {
      var d = a[c], e = d.event;
      d = d.listeners;
      a: {
        var f2 = void 0;
        if (b)
          for (var g = d.length - 1; 0 <= g; g--) {
            var h = d[g], k2 = h.instance, l2 = h.currentTarget;
            h = h.listener;
            if (k2 !== f2 && e.isPropagationStopped())
              break a;
            nf(e, h, l2);
            f2 = k2;
          }
        else
          for (g = 0; g < d.length; g++) {
            h = d[g];
            k2 = h.instance;
            l2 = h.currentTarget;
            h = h.listener;
            if (k2 !== f2 && e.isPropagationStopped())
              break a;
            nf(e, h, l2);
            f2 = k2;
          }
      }
    }
    if (Qb)
      throw a = Rb, Qb = false, Rb = null, a;
  }
  function D(a, b) {
    var c = b[of];
    void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
    var d = a + "__bubble";
    c.has(d) || (pf(b, a, 2, false), c.add(d));
  }
  function qf(a, b, c) {
    var d = 0;
    b && (d |= 4);
    pf(c, a, d, b);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a) {
    if (!a[rf]) {
      a[rf] = true;
      da.forEach(function(b2) {
        "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
      });
      var b = 9 === a.nodeType ? a : a.ownerDocument;
      null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
    }
  }
  function pf(a, b, c, d) {
    switch (jd(b)) {
      case 1:
        var e = ed;
        break;
      case 4:
        e = gd;
        break;
      default:
        e = fd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
    d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
  }
  function hd(a, b, c, d, e) {
    var f2 = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d)
      a:
        for (; ; ) {
          if (null === d)
            return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e || 8 === h.nodeType && h.parentNode === e)
              break;
            if (4 === g)
              for (g = d.return; null !== g; ) {
                var k2 = g.tag;
                if (3 === k2 || 4 === k2) {
                  if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                    return;
                }
                g = g.return;
              }
            for (; null !== h; ) {
              g = Wc(h);
              if (null === g)
                return;
              k2 = g.tag;
              if (5 === k2 || 6 === k2) {
                d = f2 = g;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
    Jb(function() {
      var d2 = f2, e2 = xb(c), g2 = [];
      a: {
        var h2 = df.get(a);
        if (void 0 !== h2) {
          var k3 = td, n2 = a;
          switch (a) {
            case "keypress":
              if (0 === od(c))
                break a;
            case "keydown":
            case "keyup":
              k3 = Rd;
              break;
            case "focusin":
              n2 = "focus";
              k3 = Fd;
              break;
            case "focusout":
              n2 = "blur";
              k3 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k3 = Fd;
              break;
            case "click":
              if (2 === c.button)
                break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k3 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k3 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k3 = Vd;
              break;
            case $e:
            case af:
            case bf:
              k3 = Hd;
              break;
            case cf:
              k3 = Xd;
              break;
            case "scroll":
              k3 = vd;
              break;
            case "wheel":
              k3 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k3 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k3 = Td;
          }
          var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
          t2 = [];
          for (var w2 = d2, u2; null !== w2; ) {
            u2 = w2;
            var F2 = u2.stateNode;
            5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
            if (J2)
              break;
            w2 = w2.return;
          }
          0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
        }
      }
      if (0 === (b & 7)) {
        a: {
          h2 = "mouseover" === a || "pointerover" === a;
          k3 = "mouseout" === a || "pointerout" === a;
          if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
            break a;
          if (k3 || h2) {
            h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
            if (k3) {
              if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
                n2 = null;
            } else
              k3 = null, n2 = d2;
            if (k3 !== n2) {
              t2 = Bd;
              F2 = "onMouseLeave";
              x2 = "onMouseEnter";
              w2 = "mouse";
              if ("pointerout" === a || "pointerover" === a)
                t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
              J2 = null == k3 ? h2 : ue(k3);
              u2 = null == n2 ? h2 : ue(n2);
              h2 = new t2(F2, w2 + "leave", k3, c, e2);
              h2.target = J2;
              h2.relatedTarget = u2;
              F2 = null;
              Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
              J2 = F2;
              if (k3 && n2)
                b: {
                  t2 = k3;
                  x2 = n2;
                  w2 = 0;
                  for (u2 = t2; u2; u2 = vf(u2))
                    w2++;
                  u2 = 0;
                  for (F2 = x2; F2; F2 = vf(F2))
                    u2++;
                  for (; 0 < w2 - u2; )
                    t2 = vf(t2), w2--;
                  for (; 0 < u2 - w2; )
                    x2 = vf(x2), u2--;
                  for (; w2--; ) {
                    if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                      break b;
                    t2 = vf(t2);
                    x2 = vf(x2);
                  }
                  t2 = null;
                }
              else
                t2 = null;
              null !== k3 && wf(g2, h2, k3, t2, false);
              null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
            }
          }
        }
        a: {
          h2 = d2 ? ue(d2) : window;
          k3 = h2.nodeName && h2.nodeName.toLowerCase();
          if ("select" === k3 || "input" === k3 && "file" === h2.type)
            var na = ve;
          else if (me(h2))
            if (we)
              na = Fe;
            else {
              na = De;
              var xa = Ce;
            }
          else
            (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
          if (na && (na = na(a, d2))) {
            ne(g2, na, c, e2);
            break a;
          }
          xa && xa(a, h2, d2);
          "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
        }
        xa = d2 ? ue(d2) : window;
        switch (a) {
          case "focusin":
            if (me(xa) || "true" === xa.contentEditable)
              Qe = xa, Re = d2, Se = null;
            break;
          case "focusout":
            Se = Re = Qe = null;
            break;
          case "mousedown":
            Te = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te = false;
            Ue(g2, c, e2);
            break;
          case "selectionchange":
            if (Pe)
              break;
          case "keydown":
          case "keyup":
            Ue(g2, c, e2);
        }
        var $a;
        if (ae)
          b: {
            switch (a) {
              case "compositionstart":
                var ba = "onCompositionStart";
                break b;
              case "compositionend":
                ba = "onCompositionEnd";
                break b;
              case "compositionupdate":
                ba = "onCompositionUpdate";
                break b;
            }
            ba = void 0;
          }
        else
          ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
        ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
        if ($a = ce ? je(a, c) : ke(a, c))
          d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
      }
      se(g2, b);
    });
  }
  function tf(a, b, c) {
    return { instance: a, listener: b, currentTarget: c };
  }
  function oe(a, b) {
    for (var c = b + "Capture", d = []; null !== a; ) {
      var e = a, f2 = e.stateNode;
      5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
      a = a.return;
    }
    return d;
  }
  function vf(a) {
    if (null === a)
      return null;
    do
      a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
  }
  function wf(a, b, c, d, e) {
    for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
      var h = c, k2 = h.alternate, l2 = h.stateNode;
      if (null !== k2 && k2 === d)
        break;
      5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
      c = c.return;
    }
    0 !== g.length && a.push({ event: b, listeners: g });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a) {
    return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
  }
  function Af(a, b, c) {
    b = zf(b);
    if (zf(a) !== b && c)
      throw Error(p(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a, b) {
    return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
    return Hf.resolve(null).then(a).catch(If);
  } : Ff;
  function If(a) {
    setTimeout(function() {
      throw a;
    });
  }
  function Kf(a, b) {
    var c = b, d = 0;
    do {
      var e = c.nextSibling;
      a.removeChild(c);
      if (e && 8 === e.nodeType)
        if (c = e.data, "/$" === c) {
          if (0 === d) {
            a.removeChild(e);
            bd(b);
            return;
          }
          d--;
        } else
          "$" !== c && "$?" !== c && "$!" !== c || d++;
      c = e;
    } while (c);
    bd(b);
  }
  function Lf(a) {
    for (; null != a; a = a.nextSibling) {
      var b = a.nodeType;
      if (1 === b || 3 === b)
        break;
      if (8 === b) {
        b = a.data;
        if ("$" === b || "$!" === b || "$?" === b)
          break;
        if ("/$" === b)
          return null;
      }
    }
    return a;
  }
  function Mf(a) {
    a = a.previousSibling;
    for (var b = 0; a; ) {
      if (8 === a.nodeType) {
        var c = a.data;
        if ("$" === c || "$!" === c || "$?" === c) {
          if (0 === b)
            return a;
          b--;
        } else
          "/$" === c && b++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a) {
    var b = a[Of];
    if (b)
      return b;
    for (var c = a.parentNode; c; ) {
      if (b = c[uf] || c[Of]) {
        c = b.alternate;
        if (null !== b.child || null !== c && null !== c.child)
          for (a = Mf(a); null !== a; ) {
            if (c = a[Of])
              return c;
            a = Mf(a);
          }
        return b;
      }
      a = c;
      c = a.parentNode;
    }
    return null;
  }
  function Cb(a) {
    a = a[Of] || a[uf];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
  }
  function ue(a) {
    if (5 === a.tag || 6 === a.tag)
      return a.stateNode;
    throw Error(p(33));
  }
  function Db(a) {
    return a[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a) {
    return { current: a };
  }
  function E(a) {
    0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G(a, b) {
    Tf++;
    Sf[Tf] = a.current;
    a.current = b;
  }
  var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a, b) {
    var c = a.type.contextTypes;
    if (!c)
      return Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
      return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f2;
    for (f2 in c)
      e[f2] = b[f2];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function $f() {
    E(Wf);
    E(H);
  }
  function ag(a, b, c) {
    if (H.current !== Vf)
      throw Error(p(168));
    G(H, b);
    G(Wf, c);
  }
  function bg(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext)
      return c;
    d = d.getChildContext();
    for (var e in d)
      if (!(e in b))
        throw Error(p(108, Ra(a) || "Unknown", e));
    return A({}, c, d);
  }
  function cg(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H.current;
    G(H, a);
    G(Wf, Wf.current);
    return true;
  }
  function dg(a, b, c) {
    var d = a.stateNode;
    if (!d)
      throw Error(p(169));
    c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
    G(Wf, c);
  }
  var eg = null, fg = false, gg = false;
  function hg(a) {
    null === eg ? eg = [a] : eg.push(a);
  }
  function ig(a) {
    fg = true;
    hg(a);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a = 0, b = C;
      try {
        var c = eg;
        for (C = 1; a < c.length; a++) {
          var d = c[a];
          do
            d = d(true);
          while (null !== d);
        }
        eg = null;
        fg = false;
      } catch (e) {
        throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
      } finally {
        C = b, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a, b) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a;
    ng = b;
  }
  function ug(a, b, c) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a;
    var d = rg;
    a = sg;
    var e = 32 - oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f2 = 32 - oc(b) + e;
    if (30 < f2) {
      var g = e - e % 5;
      f2 = (d & (1 << g) - 1).toString(32);
      d >>= g;
      e -= g;
      rg = 1 << 32 - oc(b) + e | c << e | d;
      sg = f2 + a;
    } else
      rg = 1 << f2 | c << e | d, sg = a;
  }
  function vg(a) {
    null !== a.return && (tg(a, 1), ug(a, 1, 0));
  }
  function wg(a) {
    for (; a === mg; )
      mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a === qg; )
      qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I = false, zg = null;
  function Ag(a, b) {
    var c = Bg(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
  }
  function Cg(a, b) {
    switch (a.tag) {
      case 5:
        var c = a.type;
        b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
        return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
      case 6:
        return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
      case 13:
        return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }
  function Eg(a) {
    if (I) {
      var b = yg;
      if (b) {
        var c = b;
        if (!Cg(a, b)) {
          if (Dg(a))
            throw Error(p(418));
          b = Lf(c.nextSibling);
          var d = xg;
          b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
        }
      } else {
        if (Dg(a))
          throw Error(p(418));
        a.flags = a.flags & -4097 | 2;
        I = false;
        xg = a;
      }
    }
  }
  function Fg(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
      a = a.return;
    xg = a;
  }
  function Gg(a) {
    if (a !== xg)
      return false;
    if (!I)
      return Fg(a), I = true, false;
    var b;
    (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
    if (b && (b = yg)) {
      if (Dg(a))
        throw Hg(), Error(p(418));
      for (; b; )
        Ag(a, b), b = Lf(b.nextSibling);
    }
    Fg(a);
    if (13 === a.tag) {
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a)
        throw Error(p(317));
      a: {
        a = a.nextSibling;
        for (b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("/$" === c) {
              if (0 === b) {
                yg = Lf(a.nextSibling);
                break a;
              }
              b--;
            } else
              "$" !== c && "$!" !== c && "$?" !== c || b++;
          }
          a = a.nextSibling;
        }
        yg = null;
      }
    } else
      yg = xg ? Lf(a.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a = yg; a; )
      a = Lf(a.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I = false;
  }
  function Jg(a) {
    null === zg ? zg = [a] : zg.push(a);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag)
            throw Error(p(309));
          var d = c.stateNode;
        }
        if (!d)
          throw Error(p(147, a));
        var e = d, f2 = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
          return b.ref;
        b = function(a2) {
          var b2 = e.refs;
          null === a2 ? delete b2[f2] : b2[f2] = a2;
        };
        b._stringRef = f2;
        return b;
      }
      if ("string" !== typeof a)
        throw Error(p(284));
      if (!c._owner)
        throw Error(p(290, a));
    }
    return a;
  }
  function Mg(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
  }
  function Ng(a) {
    var b = a._init;
    return b(a._payload);
  }
  function Og(a) {
    function b(b2, c2) {
      if (a) {
        var d2 = b2.deletions;
        null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
      }
    }
    function c(c2, d2) {
      if (!a)
        return null;
      for (; null !== d2; )
        b(c2, d2), d2 = d2.sibling;
      return null;
    }
    function d(a2, b2) {
      for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
        null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
      return a2;
    }
    function e(a2, b2) {
      a2 = Pg(a2, b2);
      a2.index = 0;
      a2.sibling = null;
      return a2;
    }
    function f2(b2, c2, d2) {
      b2.index = d2;
      if (!a)
        return b2.flags |= 1048576, c2;
      d2 = b2.alternate;
      if (null !== d2)
        return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
      b2.flags |= 2;
      return c2;
    }
    function g(b2) {
      a && null === b2.alternate && (b2.flags |= 2);
      return b2;
    }
    function h(a2, b2, c2, d2) {
      if (null === b2 || 6 !== b2.tag)
        return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function k2(a2, b2, c2, d2) {
      var f3 = c2.type;
      if (f3 === ya)
        return m2(a2, b2, c2.props.children, d2, c2.key);
      if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b2.type))
        return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
      d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
      d2.ref = Lg(a2, b2, c2);
      d2.return = a2;
      return d2;
    }
    function l2(a2, b2, c2, d2) {
      if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
        return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2.children || []);
      b2.return = a2;
      return b2;
    }
    function m2(a2, b2, c2, d2, f3) {
      if (null === b2 || 7 !== b2.tag)
        return b2 = Tg(c2, a2.mode, d2, f3), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function q2(a2, b2, c2) {
      if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
        return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
      if ("object" === typeof b2 && null !== b2) {
        switch (b2.$$typeof) {
          case va:
            return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
          case wa:
            return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
          case Ha:
            var d2 = b2._init;
            return q2(a2, d2(b2._payload), c2);
        }
        if (eb(b2) || Ka(b2))
          return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
        Mg(a2, b2);
      }
      return null;
    }
    function r2(a2, b2, c2, d2) {
      var e2 = null !== b2 ? b2.key : null;
      if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
        return null !== e2 ? null : h(a2, b2, "" + c2, d2);
      if ("object" === typeof c2 && null !== c2) {
        switch (c2.$$typeof) {
          case va:
            return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
          case wa:
            return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
          case Ha:
            return e2 = c2._init, r2(
              a2,
              b2,
              e2(c2._payload),
              d2
            );
        }
        if (eb(c2) || Ka(c2))
          return null !== e2 ? null : m2(a2, b2, c2, d2, null);
        Mg(a2, c2);
      }
      return null;
    }
    function y2(a2, b2, c2, d2, e2) {
      if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
        return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
      if ("object" === typeof d2 && null !== d2) {
        switch (d2.$$typeof) {
          case va:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
          case wa:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
          case Ha:
            var f3 = d2._init;
            return y2(a2, b2, c2, f3(d2._payload), e2);
        }
        if (eb(d2) || Ka(d2))
          return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
        Mg(b2, d2);
      }
      return null;
    }
    function n2(e2, g2, h2, k3) {
      for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
        u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
        var n3 = r2(e2, u2, h2[w2], k3);
        if (null === n3) {
          null === u2 && (u2 = x2);
          break;
        }
        a && u2 && null === n3.alternate && b(e2, u2);
        g2 = f2(n3, g2, w2);
        null === m3 ? l3 = n3 : m3.sibling = n3;
        m3 = n3;
        u2 = x2;
      }
      if (w2 === h2.length)
        return c(e2, u2), I && tg(e2, w2), l3;
      if (null === u2) {
        for (; w2 < h2.length; w2++)
          u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
        I && tg(e2, w2);
        return l3;
      }
      for (u2 = d(e2, u2); w2 < h2.length; w2++)
        x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
      a && u2.forEach(function(a2) {
        return b(e2, a2);
      });
      I && tg(e2, w2);
      return l3;
    }
    function t2(e2, g2, h2, k3) {
      var l3 = Ka(h2);
      if ("function" !== typeof l3)
        throw Error(p(150));
      h2 = l3.call(h2);
      if (null == h2)
        throw Error(p(151));
      for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
        m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
        var t3 = r2(e2, m3, n3.value, k3);
        if (null === t3) {
          null === m3 && (m3 = x2);
          break;
        }
        a && m3 && null === t3.alternate && b(e2, m3);
        g2 = f2(t3, g2, w2);
        null === u2 ? l3 = t3 : u2.sibling = t3;
        u2 = t3;
        m3 = x2;
      }
      if (n3.done)
        return c(
          e2,
          m3
        ), I && tg(e2, w2), l3;
      if (null === m3) {
        for (; !n3.done; w2++, n3 = h2.next())
          n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        I && tg(e2, w2);
        return l3;
      }
      for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next())
        n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      a && m3.forEach(function(a2) {
        return b(e2, a2);
      });
      I && tg(e2, w2);
      return l3;
    }
    function J2(a2, d2, f3, h2) {
      "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
      if ("object" === typeof f3 && null !== f3) {
        switch (f3.$$typeof) {
          case va:
            a: {
              for (var k3 = f3.key, l3 = d2; null !== l3; ) {
                if (l3.key === k3) {
                  k3 = f3.type;
                  if (k3 === ya) {
                    if (7 === l3.tag) {
                      c(a2, l3.sibling);
                      d2 = e(l3, f3.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                  } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props);
                    d2.ref = Lg(a2, l3, f3);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                  c(a2, l3);
                  break;
                } else
                  b(a2, l3);
                l3 = l3.sibling;
              }
              f3.type === ya ? (d2 = Tg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f3), h2.return = a2, a2 = h2);
            }
            return g(a2);
          case wa:
            a: {
              for (l3 = f3.key; null !== d2; ) {
                if (d2.key === l3)
                  if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                    c(a2, d2.sibling);
                    d2 = e(d2, f3.children || []);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  } else {
                    c(a2, d2);
                    break;
                  }
                else
                  b(a2, d2);
                d2 = d2.sibling;
              }
              d2 = Sg(f3, a2.mode, h2);
              d2.return = a2;
              a2 = d2;
            }
            return g(a2);
          case Ha:
            return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
        }
        if (eb(f3))
          return n2(a2, d2, f3, h2);
        if (Ka(f3))
          return t2(a2, d2, f3, h2);
        Mg(a2, f3);
      }
      return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
    }
    return J2;
  }
  var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
  function $g() {
    Zg = Yg = Xg = null;
  }
  function ah(a) {
    var b = Wg.current;
    E(Wg);
    a._currentValue = b;
  }
  function bh(a, b, c) {
    for (; null !== a; ) {
      var d = a.alternate;
      (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c)
        break;
      a = a.return;
    }
  }
  function ch(a, b) {
    Xg = a;
    Zg = Yg = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
  }
  function eh(a) {
    var b = a._currentValue;
    if (Zg !== a)
      if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
        if (null === Xg)
          throw Error(p(308));
        Yg = a;
        Xg.dependencies = { lanes: 0, firstContext: a };
      } else
        Yg = Yg.next = a;
    return b;
  }
  var fh = null;
  function gh(a) {
    null === fh ? fh = [a] : fh.push(a);
  }
  function hh(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return ih(a, d);
  }
  function ih(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for (a = a.return; null !== a; )
      a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
  }
  var jh = false;
  function kh(a) {
    a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function lh(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
  }
  function mh(a, b) {
    return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
  }
  function nh(a, b, c) {
    var d = a.updateQueue;
    if (null === d)
      return null;
    d = d.shared;
    if (0 !== (K & 2)) {
      var e = d.pending;
      null === e ? b.next = b : (b.next = e.next, e.next = b);
      d.pending = b;
      return ih(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return ih(a, c);
  }
  function oh(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  function ph(a, b) {
    var c = a.updateQueue, d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null, f2 = null;
      c = c.firstBaseUpdate;
      if (null !== c) {
        do {
          var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          null === f2 ? e = f2 = g : f2 = f2.next = g;
          c = c.next;
        } while (null !== c);
        null === f2 ? e = f2 = b : f2 = f2.next = b;
      } else
        e = f2 = b;
      c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }
  function qh(a, b, c, d) {
    var e = a.updateQueue;
    jh = false;
    var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (null !== h) {
      e.shared.pending = null;
      var k2 = h, l2 = k2.next;
      k2.next = null;
      null === g ? f2 = l2 : g.next = l2;
      g = k2;
      var m2 = a.alternate;
      null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
    }
    if (null !== f2) {
      var q2 = e.baseState;
      g = 0;
      m2 = l2 = k2 = null;
      h = f2;
      do {
        var r2 = h.lane, y2 = h.eventTime;
        if ((d & r2) === r2) {
          null !== m2 && (m2 = m2.next = {
            eventTime: y2,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          a: {
            var n2 = a, t2 = h;
            r2 = b;
            y2 = c;
            switch (t2.tag) {
              case 1:
                n2 = t2.payload;
                if ("function" === typeof n2) {
                  q2 = n2.call(y2, q2, r2);
                  break a;
                }
                q2 = n2;
                break a;
              case 3:
                n2.flags = n2.flags & -65537 | 128;
              case 0:
                n2 = t2.payload;
                r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                if (null === r2 || void 0 === r2)
                  break a;
                q2 = A({}, q2, r2);
                break a;
              case 2:
                jh = true;
            }
          }
          null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
        } else
          y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
        h = h.next;
        if (null === h)
          if (h = e.shared.pending, null === h)
            break;
          else
            r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
      } while (1);
      null === m2 && (k2 = q2);
      e.baseState = k2;
      e.firstBaseUpdate = l2;
      e.lastBaseUpdate = m2;
      b = e.shared.interleaved;
      if (null !== b) {
        e = b;
        do
          g |= e.lane, e = e.next;
        while (e !== b);
      } else
        null === f2 && (e.shared.lanes = 0);
      rh |= g;
      a.lanes = g;
      a.memoizedState = q2;
    }
  }
  function sh(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a)
      for (b = 0; b < a.length; b++) {
        var d = a[b], e = d.callback;
        if (null !== e) {
          d.callback = null;
          d = c;
          if ("function" !== typeof e)
            throw Error(p(191, e));
          e.call(d);
        }
      }
  }
  var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
  function xh(a) {
    if (a === th)
      throw Error(p(174));
    return a;
  }
  function yh(a, b) {
    G(wh, b);
    G(vh, a);
    G(uh, th);
    a = b.nodeType;
    switch (a) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
        break;
      default:
        a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
    }
    E(uh);
    G(uh, b);
  }
  function zh() {
    E(uh);
    E(vh);
    E(wh);
  }
  function Ah(a) {
    xh(wh.current);
    var b = xh(uh.current);
    var c = lb(b, a.type);
    b !== c && (G(vh, a), G(uh, c));
  }
  function Bh(a) {
    vh.current === a && (E(uh), E(vh));
  }
  var L = Uf(0);
  function Ch(a) {
    for (var b = a; null !== b; ) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
          return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 128))
          return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a)
        break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  var Dh = [];
  function Eh() {
    for (var a = 0; a < Dh.length; a++)
      Dh[a]._workInProgressVersionPrimary = null;
    Dh.length = 0;
  }
  var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
  function P() {
    throw Error(p(321));
  }
  function Mh(a, b) {
    if (null === b)
      return false;
    for (var c = 0; c < b.length && c < a.length; c++)
      if (!He(a[c], b[c]))
        return false;
    return true;
  }
  function Nh(a, b, c, d, e, f2) {
    Hh = f2;
    M = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
    a = c(d, e);
    if (Jh) {
      f2 = 0;
      do {
        Jh = false;
        Kh = 0;
        if (25 <= f2)
          throw Error(p(301));
        f2 += 1;
        O = N = null;
        b.updateQueue = null;
        Fh.current = Qh;
        a = c(d, e);
      } while (Jh);
    }
    Fh.current = Rh;
    b = null !== N && null !== N.next;
    Hh = 0;
    O = N = M = null;
    Ih = false;
    if (b)
      throw Error(p(300));
    return a;
  }
  function Sh() {
    var a = 0 !== Kh;
    Kh = 0;
    return a;
  }
  function Th() {
    var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === O ? M.memoizedState = O = a : O = O.next = a;
    return O;
  }
  function Uh() {
    if (null === N) {
      var a = M.alternate;
      a = null !== a ? a.memoizedState : null;
    } else
      a = N.next;
    var b = null === O ? M.memoizedState : O.next;
    if (null !== b)
      O = b, N = a;
    else {
      if (null === a)
        throw Error(p(310));
      N = a;
      a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
    }
    return O;
  }
  function Vh(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function Wh(a) {
    var b = Uh(), c = b.queue;
    if (null === c)
      throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = N, e = d.baseQueue, f2 = c.pending;
    if (null !== f2) {
      if (null !== e) {
        var g = e.next;
        e.next = f2.next;
        f2.next = g;
      }
      d.baseQueue = e = f2;
      c.pending = null;
    }
    if (null !== e) {
      f2 = e.next;
      d = d.baseState;
      var h = g = null, k2 = null, l2 = f2;
      do {
        var m2 = l2.lane;
        if ((Hh & m2) === m2)
          null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
        else {
          var q2 = {
            lane: m2,
            action: l2.action,
            hasEagerState: l2.hasEagerState,
            eagerState: l2.eagerState,
            next: null
          };
          null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
          M.lanes |= m2;
          rh |= m2;
        }
        l2 = l2.next;
      } while (null !== l2 && l2 !== f2);
      null === k2 ? g = d : k2.next = h;
      He(d, b.memoizedState) || (dh = true);
      b.memoizedState = d;
      b.baseState = g;
      b.baseQueue = k2;
      c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
      e = a;
      do
        f2 = e.lane, M.lanes |= f2, rh |= f2, e = e.next;
      while (e !== a);
    } else
      null === e && (c.lanes = 0);
    return [b.memoizedState, c.dispatch];
  }
  function Xh(a) {
    var b = Uh(), c = b.queue;
    if (null === c)
      throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g = e = e.next;
      do
        f2 = a(f2, g.action), g = g.next;
      while (g !== e);
      He(f2, b.memoizedState) || (dh = true);
      b.memoizedState = f2;
      null === b.baseQueue && (b.baseState = f2);
      c.lastRenderedState = f2;
    }
    return [f2, d];
  }
  function Yh() {
  }
  function Zh(a, b) {
    var c = M, d = Uh(), e = b(), f2 = !He(d.memoizedState, e);
    f2 && (d.memoizedState = e, dh = true);
    d = d.queue;
    $h(ai.bind(null, c, d, a), [a]);
    if (d.getSnapshot !== b || f2 || null !== O && O.memoizedState.tag & 1) {
      c.flags |= 2048;
      bi(9, ci.bind(null, c, d, e, b), void 0, null);
      if (null === Q)
        throw Error(p(349));
      0 !== (Hh & 30) || di(c, b, e);
    }
    return e;
  }
  function di(a, b, c) {
    a.flags |= 16384;
    a = { getSnapshot: b, value: c };
    b = M.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
  }
  function ci(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    ei(b) && fi(a);
  }
  function ai(a, b, c) {
    return c(function() {
      ei(b) && fi(a);
    });
  }
  function ei(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var c = b();
      return !He(a, c);
    } catch (d) {
      return true;
    }
  }
  function fi(a) {
    var b = ih(a, 1);
    null !== b && gi(b, a, 1, -1);
  }
  function hi(a) {
    var b = Th();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
    b.queue = a;
    a = a.dispatch = ii.bind(null, M, a);
    return [b.memoizedState, a];
  }
  function bi(a, b, c, d) {
    a = { tag: a, create: b, destroy: c, deps: d, next: null };
    b = M.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }
  function ji() {
    return Uh().memoizedState;
  }
  function ki(a, b, c, d) {
    var e = Th();
    M.flags |= a;
    e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
  }
  function li(a, b, c, d) {
    var e = Uh();
    d = void 0 === d ? null : d;
    var f2 = void 0;
    if (null !== N) {
      var g = N.memoizedState;
      f2 = g.destroy;
      if (null !== d && Mh(d, g.deps)) {
        e.memoizedState = bi(b, c, f2, d);
        return;
      }
    }
    M.flags |= a;
    e.memoizedState = bi(1 | b, c, f2, d);
  }
  function mi(a, b) {
    return ki(8390656, 8, a, b);
  }
  function $h(a, b) {
    return li(2048, 8, a, b);
  }
  function ni(a, b) {
    return li(4, 2, a, b);
  }
  function oi(a, b) {
    return li(4, 4, a, b);
  }
  function pi(a, b) {
    if ("function" === typeof b)
      return a = a(), b(a), function() {
        b(null);
      };
    if (null !== b && void 0 !== b)
      return a = a(), b.current = a, function() {
        b.current = null;
      };
  }
  function qi(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return li(4, 4, pi.bind(null, b, a), c);
  }
  function ri() {
  }
  function si(a, b) {
    var c = Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Mh(b, d[1]))
      return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function ti(a, b) {
    var c = Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Mh(b, d[1]))
      return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function ui(a, b, c) {
    if (0 === (Hh & 21))
      return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
    He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
    return b;
  }
  function vi(a, b) {
    var c = C;
    C = 0 !== c && 4 > c ? c : 4;
    a(true);
    var d = Gh.transition;
    Gh.transition = {};
    try {
      a(false), b();
    } finally {
      C = c, Gh.transition = d;
    }
  }
  function wi() {
    return Uh().memoizedState;
  }
  function xi(a, b, c) {
    var d = yi(a);
    c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (zi(a))
      Ai(b, c);
    else if (c = hh(a, b, c, d), null !== c) {
      var e = R();
      gi(c, a, d, e);
      Bi(c, b, d);
    }
  }
  function ii(a, b, c) {
    var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (zi(a))
      Ai(b, e);
    else {
      var f2 = a.alternate;
      if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
        try {
          var g = b.lastRenderedState, h = f2(g, c);
          e.hasEagerState = true;
          e.eagerState = h;
          if (He(h, g)) {
            var k2 = b.interleaved;
            null === k2 ? (e.next = e, gh(b)) : (e.next = k2.next, k2.next = e);
            b.interleaved = e;
            return;
          }
        } catch (l2) {
        } finally {
        }
      c = hh(a, b, e, d);
      null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
    }
  }
  function zi(a) {
    var b = a.alternate;
    return a === M || null !== b && b === M;
  }
  function Ai(a, b) {
    Jh = Ih = true;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
  function Bi(a, b, c) {
    if (0 !== (c & 4194240)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
    Th().memoizedState = [a, void 0 === b ? null : b];
    return a;
  }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return ki(
      4194308,
      4,
      pi.bind(null, b, a),
      c
    );
  }, useLayoutEffect: function(a, b) {
    return ki(4194308, 4, a, b);
  }, useInsertionEffect: function(a, b) {
    return ki(4, 2, a, b);
  }, useMemo: function(a, b) {
    var c = Th();
    b = void 0 === b ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  }, useReducer: function(a, b, c) {
    var d = Th();
    b = void 0 !== c ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
    d.queue = a;
    a = a.dispatch = xi.bind(null, M, a);
    return [d.memoizedState, a];
  }, useRef: function(a) {
    var b = Th();
    a = { current: a };
    return b.memoizedState = a;
  }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
    return Th().memoizedState = a;
  }, useTransition: function() {
    var a = hi(false), b = a[0];
    a = vi.bind(null, a[1]);
    Th().memoizedState = a;
    return [b, a];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a, b, c) {
    var d = M, e = Th();
    if (I) {
      if (void 0 === c)
        throw Error(p(407));
      c = c();
    } else {
      c = b();
      if (null === Q)
        throw Error(p(349));
      0 !== (Hh & 30) || di(d, b, c);
    }
    e.memoizedState = c;
    var f2 = { value: c, getSnapshot: b };
    e.queue = f2;
    mi(ai.bind(
      null,
      d,
      f2,
      a
    ), [a]);
    d.flags |= 2048;
    bi(9, ci.bind(null, d, f2, c, b), void 0, null);
    return c;
  }, useId: function() {
    var a = Th(), b = Q.identifierPrefix;
    if (I) {
      var c = sg;
      var d = rg;
      c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
      b = ":" + b + "R" + c;
      c = Kh++;
      0 < c && (b += "H" + c.toString(32));
      b += ":";
    } else
      c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
    return a.memoizedState = b;
  }, unstable_isNewReconciler: false }, Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function() {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function(a) {
      var b = Uh();
      return ui(b, N.memoizedState, a);
    },
    useTransition: function() {
      var a = Wh(Vh)[0], b = Uh().memoizedState;
      return [a, b];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: false
  }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
    return Xh(Vh);
  }, useDebugValue: ri, useDeferredValue: function(a) {
    var b = Uh();
    return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
  }, useTransition: function() {
    var a = Xh(Vh)[0], b = Uh().memoizedState;
    return [a, b];
  }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
  function Ci(a, b) {
    if (a && a.defaultProps) {
      b = A({}, b);
      a = a.defaultProps;
      for (var c in a)
        void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  function Di(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : A({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }
  var Ei = { isMounted: function(a) {
    return (a = a._reactInternals) ? Vb(a) === a : false;
  }, enqueueSetState: function(a, b, c) {
    a = a._reactInternals;
    var d = R(), e = yi(a), f2 = mh(d, e);
    f2.payload = b;
    void 0 !== c && null !== c && (f2.callback = c);
    b = nh(a, f2, e);
    null !== b && (gi(b, a, e, d), oh(b, a, e));
  }, enqueueReplaceState: function(a, b, c) {
    a = a._reactInternals;
    var d = R(), e = yi(a), f2 = mh(d, e);
    f2.tag = 1;
    f2.payload = b;
    void 0 !== c && null !== c && (f2.callback = c);
    b = nh(a, f2, e);
    null !== b && (gi(b, a, e, d), oh(b, a, e));
  }, enqueueForceUpdate: function(a, b) {
    a = a._reactInternals;
    var c = R(), d = yi(a), e = mh(c, d);
    e.tag = 2;
    void 0 !== b && null !== b && (e.callback = b);
    b = nh(a, e, d);
    null !== b && (gi(b, a, d, c), oh(b, a, d));
  } };
  function Fi(a, b, c, d, e, f2, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
  }
  function Gi(a, b, c) {
    var d = false, e = Vf;
    var f2 = b.contextType;
    "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
    b = new b(c, f2);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = Ei;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
    return b;
  }
  function Hi(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
  }
  function Ii(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = {};
    kh(a);
    var f2 = b.contextType;
    "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
    e.state = a.memoizedState;
    f2 = b.getDerivedStateFromProps;
    "function" === typeof f2 && (Di(a, b, f2, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
  }
  function Ji(a, b) {
    try {
      var c = "", d = b;
      do
        c += Pa(d), d = d.return;
      while (d);
      var e = c;
    } catch (f2) {
      e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
    }
    return { value: a, source: b, stack: e, digest: null };
  }
  function Ki(a, b, c) {
    return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
  }
  function Li(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var Mi = "function" === typeof WeakMap ? WeakMap : Map;
  function Ni(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function() {
      Oi || (Oi = true, Pi = d);
      Li(a, b);
    };
    return c;
  }
  function Qi(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b.value;
      c.payload = function() {
        return d(e);
      };
      c.callback = function() {
        Li(a, b);
      };
    }
    var f2 = a.stateNode;
    null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
      Li(a, b);
      "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
      var c2 = b.stack;
      this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
    });
    return c;
  }
  function Si(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
      d = a.pingCache = new Mi();
      var e = /* @__PURE__ */ new Set();
      d.set(b, e);
    } else
      e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
    e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
  }
  function Ui(a) {
    do {
      var b;
      if (b = 13 === a.tag)
        b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
      if (b)
        return a;
      a = a.return;
    } while (null !== a);
    return null;
  }
  function Vi(a, b, c, d, e) {
    if (0 === (a.mode & 1))
      return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }
  var Wi = ua.ReactCurrentOwner, dh = false;
  function Xi(a, b, c, d) {
    b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
  }
  function Yi(a, b, c, d, e) {
    c = c.render;
    var f2 = b.ref;
    ch(b, e);
    d = Nh(a, b, c, d, f2, e);
    c = Sh();
    if (null !== a && !dh)
      return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
    I && c && vg(b);
    b.flags |= 1;
    Xi(a, b, d, e);
    return b.child;
  }
  function $i(a, b, c, d, e) {
    if (null === a) {
      var f2 = c.type;
      if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
        return b.tag = 15, b.type = f2, bj(a, b, f2, d, e);
      a = Rg(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    f2 = a.child;
    if (0 === (a.lanes & e)) {
      var g = f2.memoizedProps;
      c = c.compare;
      c = null !== c ? c : Ie;
      if (c(g, d) && a.ref === b.ref)
        return Zi(a, b, e);
    }
    b.flags |= 1;
    a = Pg(f2, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  function bj(a, b, c, d, e) {
    if (null !== a) {
      var f2 = a.memoizedProps;
      if (Ie(f2, d) && a.ref === b.ref)
        if (dh = false, b.pendingProps = d = f2, 0 !== (a.lanes & e))
          0 !== (a.flags & 131072) && (dh = true);
        else
          return b.lanes = a.lanes, Zi(a, b, e);
    }
    return cj(a, b, c, d, e);
  }
  function dj(a, b, c) {
    var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode)
      if (0 === (b.mode & 1))
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
      else {
        if (0 === (c & 1073741824))
          return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d = null !== f2 ? f2.baseLanes : c;
        G(ej, fj);
        fj |= d;
      }
    else
      null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
    Xi(a, b, e, c);
    return b.child;
  }
  function gj(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c)
      b.flags |= 512, b.flags |= 2097152;
  }
  function cj(a, b, c, d, e) {
    var f2 = Zf(c) ? Xf : H.current;
    f2 = Yf(b, f2);
    ch(b, e);
    c = Nh(a, b, c, d, f2, e);
    d = Sh();
    if (null !== a && !dh)
      return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
    I && d && vg(b);
    b.flags |= 1;
    Xi(a, b, c, e);
    return b.child;
  }
  function hj(a, b, c, d, e) {
    if (Zf(c)) {
      var f2 = true;
      cg(b);
    } else
      f2 = false;
    ch(b, e);
    if (null === b.stateNode)
      ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
    else if (null === a) {
      var g = b.stateNode, h = b.memoizedProps;
      g.props = h;
      var k2 = g.context, l2 = c.contextType;
      "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
      var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
      q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Hi(b, g, d, l2);
      jh = false;
      var r2 = b.memoizedState;
      g.state = r2;
      qh(b, d, g, e);
      k2 = b.memoizedState;
      h !== d || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b, c, m2, d), k2 = b.memoizedState), (h = jh || Fi(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
    } else {
      g = b.stateNode;
      lh(a, b);
      h = b.memoizedProps;
      l2 = b.type === b.elementType ? h : Ci(b.type, h);
      g.props = l2;
      q2 = b.pendingProps;
      r2 = g.context;
      k2 = c.contextType;
      "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
      var y2 = c.getDerivedStateFromProps;
      (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && Hi(b, g, d, k2);
      jh = false;
      r2 = b.memoizedState;
      g.state = r2;
      qh(b, d, g, e);
      var n2 = b.memoizedState;
      h !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b, c, y2, d), n2 = b.memoizedState), (l2 = jh || Fi(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
    }
    return jj(a, b, c, d, f2, e);
  }
  function jj(a, b, c, d, e, f2) {
    gj(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g)
      return e && dg(b, c, false), Zi(a, b, f2);
    d = b.stateNode;
    Wi.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Ug(b, a.child, null, f2), b.child = Ug(b, null, h, f2)) : Xi(a, b, h, f2);
    b.memoizedState = d.state;
    e && dg(b, c, true);
    return b.child;
  }
  function kj(a) {
    var b = a.stateNode;
    b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
    yh(a, b.containerInfo);
  }
  function lj(a, b, c, d, e) {
    Ig();
    Jg(e);
    b.flags |= 256;
    Xi(a, b, c, d);
    return b.child;
  }
  var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nj(a) {
    return { baseLanes: a, cachePool: null, transitions: null };
  }
  function oj(a, b, c) {
    var d = b.pendingProps, e = L.current, f2 = false, g = 0 !== (b.flags & 128), h;
    (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
    if (h)
      f2 = true, b.flags &= -129;
    else if (null === a || null !== a.memoizedState)
      e |= 1;
    G(L, e & 1);
    if (null === a) {
      Eg(b);
      a = b.memoizedState;
      if (null !== a && (a = a.dehydrated, null !== a))
        return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
      g = d.children;
      a = d.fallback;
      return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h))
      return rj(a, b, g, d, h, e, c);
    if (f2) {
      f2 = d.fallback;
      g = b.mode;
      e = a.child;
      h = e.sibling;
      var k2 = { mode: "hidden", children: d.children };
      0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = Pg(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
      null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
      f2.return = b;
      d.return = b;
      d.sibling = f2;
      b.child = d;
      d = f2;
      f2 = b.child;
      g = a.child.memoizedState;
      g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
      f2.memoizedState = g;
      f2.childLanes = a.childLanes & ~c;
      b.memoizedState = mj;
      return d;
    }
    f2 = a.child;
    a = f2.sibling;
    d = Pg(f2, { mode: "visible", children: d.children });
    0 === (b.mode & 1) && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
  }
  function qj(a, b) {
    b = pj({ mode: "visible", children: b }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
  }
  function sj(a, b, c, d) {
    null !== d && Jg(d);
    Ug(b, a.child, null, c);
    a = qj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  }
  function rj(a, b, c, d, e, f2, g) {
    if (c) {
      if (b.flags & 256)
        return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
      if (null !== b.memoizedState)
        return b.child = a.child, b.flags |= 128, null;
      f2 = d.fallback;
      e = b.mode;
      d = pj({ mode: "visible", children: d.children }, e, 0, null);
      f2 = Tg(f2, e, g, null);
      f2.flags |= 2;
      d.return = b;
      f2.return = b;
      d.sibling = f2;
      b.child = d;
      0 !== (b.mode & 1) && Ug(b, a.child, null, g);
      b.child.memoizedState = nj(g);
      b.memoizedState = mj;
      return f2;
    }
    if (0 === (b.mode & 1))
      return sj(a, b, g, null);
    if ("$!" === e.data) {
      d = e.nextSibling && e.nextSibling.dataset;
      if (d)
        var h = d.dgst;
      d = h;
      f2 = Error(p(419));
      d = Ki(f2, d, void 0);
      return sj(a, b, g, d);
    }
    h = 0 !== (g & a.childLanes);
    if (dh || h) {
      d = Q;
      if (null !== d) {
        switch (g & -g) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
        0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a, e), gi(d, a, e, -1));
      }
      tj();
      d = Ki(Error(p(421)));
      return sj(a, b, g, d);
    }
    if ("$?" === e.data)
      return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
    a = f2.treeContext;
    yg = Lf(e.nextSibling);
    xg = b;
    I = true;
    zg = null;
    null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
    b = qj(b, d.children);
    b.flags |= 4096;
    return b;
  }
  function vj(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    bh(a.return, b, c);
  }
  function wj(a, b, c, d, e) {
    var f2 = a.memoizedState;
    null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
  }
  function xj(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
    Xi(a, b, d.children, c);
    d = L.current;
    if (0 !== (d & 2))
      d = d & 1 | 2, b.flags |= 128;
    else {
      if (null !== a && 0 !== (a.flags & 128))
        a:
          for (a = b.child; null !== a; ) {
            if (13 === a.tag)
              null !== a.memoizedState && vj(a, c, b);
            else if (19 === a.tag)
              vj(a, c, b);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b)
              break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b)
                break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
      d &= 1;
    }
    G(L, d);
    if (0 === (b.mode & 1))
      b.memoizedState = null;
    else
      switch (e) {
        case "forwards":
          c = b.child;
          for (e = null; null !== c; )
            a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
          c = e;
          null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
          wj(b, false, e, c, f2);
          break;
        case "backwards":
          c = null;
          e = b.child;
          for (b.child = null; null !== e; ) {
            a = e.alternate;
            if (null !== a && null === Ch(a)) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          wj(b, true, c, null, f2);
          break;
        case "together":
          wj(b, false, null, null, void 0);
          break;
        default:
          b.memoizedState = null;
      }
    return b.child;
  }
  function ij(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
  }
  function Zi(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    rh |= b.lanes;
    if (0 === (c & b.childLanes))
      return null;
    if (null !== a && b.child !== a.child)
      throw Error(p(153));
    if (null !== b.child) {
      a = b.child;
      c = Pg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; null !== a.sibling; )
        a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  function yj(a, b, c) {
    switch (b.tag) {
      case 3:
        kj(b);
        Ig();
        break;
      case 5:
        Ah(b);
        break;
      case 1:
        Zf(b.type) && cg(b);
        break;
      case 4:
        yh(b, b.stateNode.containerInfo);
        break;
      case 10:
        var d = b.type._context, e = b.memoizedProps.value;
        G(Wg, d._currentValue);
        d._currentValue = e;
        break;
      case 13:
        d = b.memoizedState;
        if (null !== d) {
          if (null !== d.dehydrated)
            return G(L, L.current & 1), b.flags |= 128, null;
          if (0 !== (c & b.child.childLanes))
            return oj(a, b, c);
          G(L, L.current & 1);
          a = Zi(a, b, c);
          return null !== a ? a.sibling : null;
        }
        G(L, L.current & 1);
        break;
      case 19:
        d = 0 !== (c & b.childLanes);
        if (0 !== (a.flags & 128)) {
          if (d)
            return xj(a, b, c);
          b.flags |= 128;
        }
        e = b.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        G(L, L.current);
        if (d)
          break;
        else
          return null;
      case 22:
      case 23:
        return b.lanes = 0, dj(a, b, c);
    }
    return Zi(a, b, c);
  }
  var zj, Aj, Bj, Cj;
  zj = function(a, b) {
    for (var c = b.child; null !== c; ) {
      if (5 === c.tag || 6 === c.tag)
        a.appendChild(c.stateNode);
      else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b)
        break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === b)
          return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  };
  Aj = function() {
  };
  Bj = function(a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
      a = b.stateNode;
      xh(uh.current);
      var f2 = null;
      switch (c) {
        case "input":
          e = Ya(a, e);
          d = Ya(a, d);
          f2 = [];
          break;
        case "select":
          e = A({}, e, { value: void 0 });
          d = A({}, d, { value: void 0 });
          f2 = [];
          break;
        case "textarea":
          e = gb(a, e);
          d = gb(a, d);
          f2 = [];
          break;
        default:
          "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
      }
      ub(c, d);
      var g;
      c = null;
      for (l2 in e)
        if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
          if ("style" === l2) {
            var h = e[l2];
            for (g in h)
              h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
          } else
            "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
      for (l2 in d) {
        var k2 = d[l2];
        h = null != e ? e[l2] : void 0;
        if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h))
          if ("style" === l2)
            if (h) {
              for (g in h)
                !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
              for (g in k2)
                k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
            } else
              c || (f2 || (f2 = []), f2.push(
                l2,
                c
              )), c = k2;
          else
            "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
      }
      c && (f2 = f2 || []).push("style", c);
      var l2 = f2;
      if (b.updateQueue = l2)
        b.flags |= 4;
    }
  };
  Cj = function(a, b, c, d) {
    c !== d && (b.flags |= 4);
  };
  function Dj(a, b) {
    if (!I)
      switch (a.tailMode) {
        case "hidden":
          b = a.tail;
          for (var c = null; null !== b; )
            null !== b.alternate && (c = b), b = b.sibling;
          null === c ? a.tail = null : c.sibling = null;
          break;
        case "collapsed":
          c = a.tail;
          for (var d = null; null !== c; )
            null !== c.alternate && (d = c), c = c.sibling;
          null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
      }
  }
  function S(a) {
    var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
    if (b)
      for (var e = a.child; null !== e; )
        c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else
      for (e = a.child; null !== e; )
        c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  }
  function Ej(a, b, c) {
    var d = b.pendingProps;
    wg(b);
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S(b), null;
      case 1:
        return Zf(b.type) && $f(), S(b), null;
      case 3:
        d = b.stateNode;
        zh();
        E(Wf);
        E(H);
        Eh();
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a || null === a.child)
          Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
        Aj(a, b);
        S(b);
        return null;
      case 5:
        Bh(b);
        var e = xh(wh.current);
        c = b.type;
        if (null !== a && null != b.stateNode)
          Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        else {
          if (!d) {
            if (null === b.stateNode)
              throw Error(p(166));
            S(b);
            return null;
          }
          a = xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.type;
            var f2 = b.memoizedProps;
            d[Of] = b;
            d[Pf] = f2;
            a = 0 !== (b.mode & 1);
            switch (c) {
              case "dialog":
                D("cancel", d);
                D("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", d);
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++)
                  D(lf[e], d);
                break;
              case "source":
                D("error", d);
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  d
                );
                D("load", d);
                break;
              case "details":
                D("toggle", d);
                break;
              case "input":
                Za(d, f2);
                D("invalid", d);
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!f2.multiple };
                D("invalid", d);
                break;
              case "textarea":
                hb(d, f2), D("invalid", d);
            }
            ub(c, f2);
            e = null;
            for (var g in f2)
              if (f2.hasOwnProperty(g)) {
                var h = f2[g];
                "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                  d.textContent,
                  h,
                  a
                ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
              }
            switch (c) {
              case "input":
                Va(d);
                db(d, f2, true);
                break;
              case "textarea":
                Va(d);
                jb(d);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f2.onClick && (d.onclick = Bf);
            }
            d = e;
            b.updateQueue = d;
            null !== d && (b.flags |= 4);
          } else {
            g = 9 === e.nodeType ? e : e.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
            "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
            a[Of] = b;
            a[Pf] = d;
            zj(a, b, false, false);
            b.stateNode = a;
            a: {
              g = vb(c, d);
              switch (c) {
                case "dialog":
                  D("cancel", a);
                  D("close", a);
                  e = d;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", a);
                  e = d;
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++)
                    D(lf[e], a);
                  e = d;
                  break;
                case "source":
                  D("error", a);
                  e = d;
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    a
                  );
                  D("load", a);
                  e = d;
                  break;
                case "details":
                  D("toggle", a);
                  e = d;
                  break;
                case "input":
                  Za(a, d);
                  e = Ya(a, d);
                  D("invalid", a);
                  break;
                case "option":
                  e = d;
                  break;
                case "select":
                  a._wrapperState = { wasMultiple: !!d.multiple };
                  e = A({}, d, { value: void 0 });
                  D("invalid", a);
                  break;
                case "textarea":
                  hb(a, d);
                  e = gb(a, d);
                  D("invalid", a);
                  break;
                default:
                  e = d;
              }
              ub(c, e);
              h = e;
              for (f2 in h)
                if (h.hasOwnProperty(f2)) {
                  var k2 = h[f2];
                  "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
                }
              switch (c) {
                case "input":
                  Va(a);
                  db(a, d, false);
                  break;
                case "textarea":
                  Va(a);
                  jb(a);
                  break;
                case "option":
                  null != d.value && a.setAttribute("value", "" + Sa(d.value));
                  break;
                case "select":
                  a.multiple = !!d.multiple;
                  f2 = d.value;
                  null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                    a,
                    !!d.multiple,
                    d.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e.onClick && (a.onclick = Bf);
              }
              switch (c) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d = !!d.autoFocus;
                  break a;
                case "img":
                  d = true;
                  break a;
                default:
                  d = false;
              }
            }
            d && (b.flags |= 4);
          }
          null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        }
        S(b);
        return null;
      case 6:
        if (a && null != b.stateNode)
          Cj(a, b, a.memoizedProps, d);
        else {
          if ("string" !== typeof d && null === b.stateNode)
            throw Error(p(166));
          c = xh(wh.current);
          xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.memoizedProps;
            d[Of] = b;
            if (f2 = d.nodeValue !== c) {
              if (a = xg, null !== a)
                switch (a.tag) {
                  case 3:
                    Af(d.nodeValue, c, 0 !== (a.mode & 1));
                    break;
                  case 5:
                    true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                }
            }
            f2 && (b.flags |= 4);
          } else
            d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
        }
        S(b);
        return null;
      case 13:
        E(L);
        d = b.memoizedState;
        if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
          if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
            Hg(), Ig(), b.flags |= 98560, f2 = false;
          else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
            if (null === a) {
              if (!f2)
                throw Error(p(318));
              f2 = b.memoizedState;
              f2 = null !== f2 ? f2.dehydrated : null;
              if (!f2)
                throw Error(p(317));
              f2[Of] = b;
            } else
              Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
            S(b);
            f2 = false;
          } else
            null !== zg && (Fj(zg), zg = null), f2 = true;
          if (!f2)
            return b.flags & 65536 ? b : null;
        }
        if (0 !== (b.flags & 128))
          return b.lanes = c, b;
        d = null !== d;
        d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
        null !== b.updateQueue && (b.flags |= 4);
        S(b);
        return null;
      case 4:
        return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
      case 10:
        return ah(b.type._context), S(b), null;
      case 17:
        return Zf(b.type) && $f(), S(b), null;
      case 19:
        E(L);
        f2 = b.memoizedState;
        if (null === f2)
          return S(b), null;
        d = 0 !== (b.flags & 128);
        g = f2.rendering;
        if (null === g)
          if (d)
            Dj(f2, false);
          else {
            if (0 !== T || null !== a && 0 !== (a.flags & 128))
              for (a = b.child; null !== a; ) {
                g = Ch(a);
                if (null !== g) {
                  b.flags |= 128;
                  Dj(f2, false);
                  d = g.updateQueue;
                  null !== d && (b.updateQueue = d, b.flags |= 4);
                  b.subtreeFlags = 0;
                  d = c;
                  for (c = b.child; null !== c; )
                    f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                  G(L, L.current & 1 | 2);
                  return b.child;
                }
                a = a.sibling;
              }
            null !== f2.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
          }
        else {
          if (!d)
            if (a = Ch(g), null !== a) {
              if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I)
                return S(b), null;
            } else
              2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
          f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
        }
        if (null !== f2.tail)
          return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
        S(b);
        return null;
      case 22:
      case 23:
        return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, b.tag));
  }
  function Ij(a, b) {
    wg(b);
    switch (b.tag) {
      case 1:
        return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 3:
        return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
      case 5:
        return Bh(b), null;
      case 13:
        E(L);
        a = b.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          if (null === b.alternate)
            throw Error(p(340));
          Ig();
        }
        a = b.flags;
        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 19:
        return E(L), null;
      case 4:
        return zh(), null;
      case 10:
        return ah(b.type._context), null;
      case 22:
      case 23:
        return Hj(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
  function Lj(a, b) {
    var c = a.ref;
    if (null !== c)
      if ("function" === typeof c)
        try {
          c(null);
        } catch (d) {
          W(a, b, d);
        }
      else
        c.current = null;
  }
  function Mj(a, b, c) {
    try {
      c();
    } catch (d) {
      W(a, b, d);
    }
  }
  var Nj = false;
  function Oj(a, b) {
    Cf = dd;
    a = Me();
    if (Ne(a)) {
      if ("selectionStart" in a)
        var c = { start: a.selectionStart, end: a.selectionEnd };
      else
        a: {
          c = (c = a.ownerDocument) && c.defaultView || window;
          var d = c.getSelection && c.getSelection();
          if (d && 0 !== d.rangeCount) {
            c = d.anchorNode;
            var e = d.anchorOffset, f2 = d.focusNode;
            d = d.focusOffset;
            try {
              c.nodeType, f2.nodeType;
            } catch (F2) {
              c = null;
              break a;
            }
            var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
            b:
              for (; ; ) {
                for (var y2; ; ) {
                  q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
                  q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                  3 === q2.nodeType && (g += q2.nodeValue.length);
                  if (null === (y2 = q2.firstChild))
                    break;
                  r2 = q2;
                  q2 = y2;
                }
                for (; ; ) {
                  if (q2 === a)
                    break b;
                  r2 === c && ++l2 === e && (h = g);
                  r2 === f2 && ++m2 === d && (k2 = g);
                  if (null !== (y2 = q2.nextSibling))
                    break;
                  q2 = r2;
                  r2 = q2.parentNode;
                }
                q2 = y2;
              }
            c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
          } else
            c = null;
        }
      c = c || { start: 0, end: 0 };
    } else
      c = null;
    Df = { focusedElem: a, selectionRange: c };
    dd = false;
    for (V = b; null !== V; )
      if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
        a.return = b, V = a;
      else
        for (; null !== V; ) {
          b = V;
          try {
            var n2 = b.alternate;
            if (0 !== (b.flags & 1024))
              switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (null !== n2) {
                    var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Ci(b.type, t2), J2);
                    x2.__reactInternalSnapshotBeforeUpdate = w2;
                  }
                  break;
                case 3:
                  var u2 = b.stateNode.containerInfo;
                  1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(p(163));
              }
          } catch (F2) {
            W(b, b.return, F2);
          }
          a = b.sibling;
          if (null !== a) {
            a.return = b.return;
            V = a;
            break;
          }
          V = b.return;
        }
    n2 = Nj;
    Nj = false;
    return n2;
  }
  function Pj(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
      var e = d = d.next;
      do {
        if ((e.tag & a) === a) {
          var f2 = e.destroy;
          e.destroy = void 0;
          void 0 !== f2 && Mj(b, c, f2);
        }
        e = e.next;
      } while (e !== d);
    }
  }
  function Qj(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
      var c = b = b.next;
      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }
        c = c.next;
      } while (c !== b);
    }
  }
  function Rj(a) {
    var b = a.ref;
    if (null !== b) {
      var c = a.stateNode;
      switch (a.tag) {
        case 5:
          a = c;
          break;
        default:
          a = c;
      }
      "function" === typeof b ? b(a) : b.current = a;
    }
  }
  function Sj(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, Sj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  }
  function Tj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Uj(a) {
    a:
      for (; ; ) {
        for (; null === a.sibling; ) {
          if (null === a.return || Tj(a.return))
            return null;
          a = a.return;
        }
        a.sibling.return = a.return;
        for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
          if (a.flags & 2)
            continue a;
          if (null === a.child || 4 === a.tag)
            continue a;
          else
            a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2))
          return a.stateNode;
      }
  }
  function Vj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d)
      a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
    else if (4 !== d && (a = a.child, null !== a))
      for (Vj(a, b, c), a = a.sibling; null !== a; )
        Vj(a, b, c), a = a.sibling;
  }
  function Wj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d)
      a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && (a = a.child, null !== a))
      for (Wj(a, b, c), a = a.sibling; null !== a; )
        Wj(a, b, c), a = a.sibling;
  }
  var X = null, Xj = false;
  function Yj(a, b, c) {
    for (c = c.child; null !== c; )
      Zj(a, b, c), c = c.sibling;
  }
  function Zj(a, b, c) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount)
      try {
        lc.onCommitFiberUnmount(kc, c);
      } catch (h) {
      }
    switch (c.tag) {
      case 5:
        U || Lj(c, b);
      case 6:
        var d = X, e = Xj;
        X = null;
        Yj(a, b, c);
        X = d;
        Xj = e;
        null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
        break;
      case 18:
        null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
        break;
      case 4:
        d = X;
        e = Xj;
        X = c.stateNode.containerInfo;
        Xj = true;
        Yj(a, b, c);
        X = d;
        Xj = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
          e = d = d.next;
          do {
            var f2 = e, g = f2.destroy;
            f2 = f2.tag;
            void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b, g) : 0 !== (f2 & 4) && Mj(c, b, g));
            e = e.next;
          } while (e !== d);
        }
        Yj(a, b, c);
        break;
      case 1:
        if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
          try {
            d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
          } catch (h) {
            W(c, b, h);
          }
        Yj(a, b, c);
        break;
      case 21:
        Yj(a, b, c);
        break;
      case 22:
        c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
        break;
      default:
        Yj(a, b, c);
    }
  }
  function ak(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Kj());
      b.forEach(function(b2) {
        var d = bk.bind(null, a, b2);
        c.has(b2) || (c.add(b2), b2.then(d, d));
      });
    }
  }
  function ck(a, b) {
    var c = b.deletions;
    if (null !== c)
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        try {
          var f2 = a, g = b, h = g;
          a:
            for (; null !== h; ) {
              switch (h.tag) {
                case 5:
                  X = h.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h = h.return;
            }
          if (null === X)
            throw Error(p(160));
          Zj(f2, g, e);
          X = null;
          Xj = false;
          var k2 = e.alternate;
          null !== k2 && (k2.return = null);
          e.return = null;
        } catch (l2) {
          W(e, b, l2);
        }
      }
    if (b.subtreeFlags & 12854)
      for (b = b.child; null !== b; )
        dk(b, a), b = b.sibling;
  }
  function dk(a, b) {
    var c = a.alternate, d = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ck(b, a);
        ek(a);
        if (d & 4) {
          try {
            Pj(3, a, a.return), Qj(3, a);
          } catch (t2) {
            W(a, a.return, t2);
          }
          try {
            Pj(5, a, a.return);
          } catch (t2) {
            W(a, a.return, t2);
          }
        }
        break;
      case 1:
        ck(b, a);
        ek(a);
        d & 512 && null !== c && Lj(c, c.return);
        break;
      case 5:
        ck(b, a);
        ek(a);
        d & 512 && null !== c && Lj(c, c.return);
        if (a.flags & 32) {
          var e = a.stateNode;
          try {
            ob(e, "");
          } catch (t2) {
            W(a, a.return, t2);
          }
        }
        if (d & 4 && (e = a.stateNode, null != e)) {
          var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
          a.updateQueue = null;
          if (null !== k2)
            try {
              "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
              vb(h, g);
              var l2 = vb(h, f2);
              for (g = 0; g < k2.length; g += 2) {
                var m2 = k2[g], q2 = k2[g + 1];
                "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
              }
              switch (h) {
                case "input":
                  bb(e, f2);
                  break;
                case "textarea":
                  ib(e, f2);
                  break;
                case "select":
                  var r2 = e._wrapperState.wasMultiple;
                  e._wrapperState.wasMultiple = !!f2.multiple;
                  var y2 = f2.value;
                  null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                    e,
                    !!f2.multiple,
                    f2.defaultValue,
                    true
                  ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
              }
              e[Pf] = f2;
            } catch (t2) {
              W(a, a.return, t2);
            }
        }
        break;
      case 6:
        ck(b, a);
        ek(a);
        if (d & 4) {
          if (null === a.stateNode)
            throw Error(p(162));
          e = a.stateNode;
          f2 = a.memoizedProps;
          try {
            e.nodeValue = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
        }
        break;
      case 3:
        ck(b, a);
        ek(a);
        if (d & 4 && null !== c && c.memoizedState.isDehydrated)
          try {
            bd(b.containerInfo);
          } catch (t2) {
            W(a, a.return, t2);
          }
        break;
      case 4:
        ck(b, a);
        ek(a);
        break;
      case 13:
        ck(b, a);
        ek(a);
        e = a.child;
        e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
        d & 4 && ak(a);
        break;
      case 22:
        m2 = null !== c && null !== c.memoizedState;
        a.mode & 1 ? (U = (l2 = U) || m2, ck(b, a), U = l2) : ck(b, a);
        ek(a);
        if (d & 8192) {
          l2 = null !== a.memoizedState;
          if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
            for (V = a, m2 = a.child; null !== m2; ) {
              for (q2 = V = m2; null !== V; ) {
                r2 = V;
                y2 = r2.child;
                switch (r2.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pj(4, r2, r2.return);
                    break;
                  case 1:
                    Lj(r2, r2.return);
                    var n2 = r2.stateNode;
                    if ("function" === typeof n2.componentWillUnmount) {
                      d = r2;
                      c = r2.return;
                      try {
                        b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                      } catch (t2) {
                        W(d, c, t2);
                      }
                    }
                    break;
                  case 5:
                    Lj(r2, r2.return);
                    break;
                  case 22:
                    if (null !== r2.memoizedState) {
                      gk(q2);
                      continue;
                    }
                }
                null !== y2 ? (y2.return = r2, V = y2) : gk(q2);
              }
              m2 = m2.sibling;
            }
          a:
            for (m2 = null, q2 = a; ; ) {
              if (5 === q2.tag) {
                if (null === m2) {
                  m2 = q2;
                  try {
                    e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                  } catch (t2) {
                    W(a, a.return, t2);
                  }
                }
              } else if (6 === q2.tag) {
                if (null === m2)
                  try {
                    q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                  } catch (t2) {
                    W(a, a.return, t2);
                  }
              } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                q2.child.return = q2;
                q2 = q2.child;
                continue;
              }
              if (q2 === a)
                break a;
              for (; null === q2.sibling; ) {
                if (null === q2.return || q2.return === a)
                  break a;
                m2 === q2 && (m2 = null);
                q2 = q2.return;
              }
              m2 === q2 && (m2 = null);
              q2.sibling.return = q2.return;
              q2 = q2.sibling;
            }
        }
        break;
      case 19:
        ck(b, a);
        ek(a);
        d & 4 && ak(a);
        break;
      case 21:
        break;
      default:
        ck(
          b,
          a
        ), ek(a);
    }
  }
  function ek(a) {
    var b = a.flags;
    if (b & 2) {
      try {
        a: {
          for (var c = a.return; null !== c; ) {
            if (Tj(c)) {
              var d = c;
              break a;
            }
            c = c.return;
          }
          throw Error(p(160));
        }
        switch (d.tag) {
          case 5:
            var e = d.stateNode;
            d.flags & 32 && (ob(e, ""), d.flags &= -33);
            var f2 = Uj(a);
            Wj(a, f2, e);
            break;
          case 3:
          case 4:
            var g = d.stateNode.containerInfo, h = Uj(a);
            Vj(a, h, g);
            break;
          default:
            throw Error(p(161));
        }
      } catch (k2) {
        W(a, a.return, k2);
      }
      a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
  }
  function hk(a, b, c) {
    V = a;
    ik(a);
  }
  function ik(a, b, c) {
    for (var d = 0 !== (a.mode & 1); null !== V; ) {
      var e = V, f2 = e.child;
      if (22 === e.tag && d) {
        var g = null !== e.memoizedState || Jj;
        if (!g) {
          var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
          h = Jj;
          var l2 = U;
          Jj = g;
          if ((U = k2) && !l2)
            for (V = e; null !== V; )
              g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k2 ? (k2.return = g, V = k2) : jk(e);
          for (; null !== f2; )
            V = f2, ik(f2), f2 = f2.sibling;
          V = e;
          Jj = h;
          U = l2;
        }
        kk(a);
      } else
        0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : kk(a);
    }
  }
  function kk(a) {
    for (; null !== V; ) {
      var b = V;
      if (0 !== (b.flags & 8772)) {
        var c = b.alternate;
        try {
          if (0 !== (b.flags & 8772))
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                U || Qj(5, b);
                break;
              case 1:
                var d = b.stateNode;
                if (b.flags & 4 && !U)
                  if (null === c)
                    d.componentDidMount();
                  else {
                    var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                    d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                var f2 = b.updateQueue;
                null !== f2 && sh(b, f2, d);
                break;
              case 3:
                var g = b.updateQueue;
                if (null !== g) {
                  c = null;
                  if (null !== b.child)
                    switch (b.child.tag) {
                      case 5:
                        c = b.child.stateNode;
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                  sh(b, g, c);
                }
                break;
              case 5:
                var h = b.stateNode;
                if (null === c && b.flags & 4) {
                  c = h;
                  var k2 = b.memoizedProps;
                  switch (b.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k2.autoFocus && c.focus();
                      break;
                    case "img":
                      k2.src && (c.src = k2.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (null === b.memoizedState) {
                  var l2 = b.alternate;
                  if (null !== l2) {
                    var m2 = l2.memoizedState;
                    if (null !== m2) {
                      var q2 = m2.dehydrated;
                      null !== q2 && bd(q2);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p(163));
            }
          U || b.flags & 512 && Rj(b);
        } catch (r2) {
          W(b, b.return, r2);
        }
      }
      if (b === a) {
        V = null;
        break;
      }
      c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function gk(a) {
    for (; null !== V; ) {
      var b = V;
      if (b === a) {
        V = null;
        break;
      }
      var c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function jk(a) {
    for (; null !== V; ) {
      var b = V;
      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b.return;
            try {
              Qj(4, b);
            } catch (k2) {
              W(b, c, k2);
            }
            break;
          case 1:
            var d = b.stateNode;
            if ("function" === typeof d.componentDidMount) {
              var e = b.return;
              try {
                d.componentDidMount();
              } catch (k2) {
                W(b, e, k2);
              }
            }
            var f2 = b.return;
            try {
              Rj(b);
            } catch (k2) {
              W(b, f2, k2);
            }
            break;
          case 5:
            var g = b.return;
            try {
              Rj(b);
            } catch (k2) {
              W(b, g, k2);
            }
        }
      } catch (k2) {
        W(b, b.return, k2);
      }
      if (b === a) {
        V = null;
        break;
      }
      var h = b.sibling;
      if (null !== h) {
        h.return = b.return;
        V = h;
        break;
      }
      V = b.return;
    }
  }
  var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
  function R() {
    return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
  }
  function yi(a) {
    if (0 === (a.mode & 1))
      return 1;
    if (0 !== (K & 2) && 0 !== Z)
      return Z & -Z;
    if (null !== Kg.transition)
      return 0 === Bk && (Bk = yc()), Bk;
    a = C;
    if (0 !== a)
      return a;
    a = window.event;
    a = void 0 === a ? 16 : jd(a.type);
    return a;
  }
  function gi(a, b, c, d) {
    if (50 < yk)
      throw yk = 0, zk = null, Error(p(185));
    Ac(a, c, d);
    if (0 === (K & 2) || a !== Q)
      a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
  }
  function Dk(a, b) {
    var c = a.callbackNode;
    wc(a, b);
    var d = uc(a, a === Q ? Z : 0);
    if (0 === d)
      null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
      null != c && bc(c);
      if (1 === b)
        0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
          0 === (K & 6) && jg();
        }), c = null;
      else {
        switch (Dc(d)) {
          case 1:
            c = fc;
            break;
          case 4:
            c = gc;
            break;
          case 16:
            c = hc;
            break;
          case 536870912:
            c = jc;
            break;
          default:
            c = hc;
        }
        c = Fk(c, Gk.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }
  function Gk(a, b) {
    Ak = -1;
    Bk = 0;
    if (0 !== (K & 6))
      throw Error(p(327));
    var c = a.callbackNode;
    if (Hk() && a.callbackNode !== c)
      return null;
    var d = uc(a, a === Q ? Z : 0);
    if (0 === d)
      return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
      b = Ik(a, d);
    else {
      b = d;
      var e = K;
      K |= 2;
      var f2 = Jk();
      if (Q !== a || Z !== b)
        uk = null, Gj = B() + 500, Kk(a, b);
      do
        try {
          Lk();
          break;
        } catch (h) {
          Mk(a, h);
        }
      while (1);
      $g();
      mk.current = f2;
      K = e;
      null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
    }
    if (0 !== b) {
      2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
      if (1 === b)
        throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
      if (6 === b)
        Ck(a, d);
      else {
        e = a.current.alternate;
        if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Nk(a, f2))), 1 === b))
          throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
        a.finishedWork = e;
        a.finishedLanes = d;
        switch (b) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Pk(a, tk, uk);
            break;
          case 3:
            Ck(a, d);
            if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
              if (0 !== uc(a, 0))
                break;
              e = a.suspendedLanes;
              if ((e & d) !== d) {
                R();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 4:
            Ck(a, d);
            if ((d & 4194240) === d)
              break;
            b = a.eventTimes;
            for (e = -1; 0 < d; ) {
              var g = 31 - oc(d);
              f2 = 1 << g;
              g = b[g];
              g > e && (e = g);
              d &= ~f2;
            }
            d = e;
            d = B() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
            if (10 < d) {
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 5:
            Pk(a, tk, uk);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    Dk(a, B());
    return a.callbackNode === c ? Gk.bind(null, a) : null;
  }
  function Nk(a, b) {
    var c = sk;
    a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
    a = Ik(a, b);
    2 !== a && (b = tk, tk = c, null !== b && Fj(b));
    return a;
  }
  function Fj(a) {
    null === tk ? tk = a : tk.push.apply(tk, a);
  }
  function Ok(a) {
    for (var b = a; ; ) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (null !== c && (c = c.stores, null !== c))
          for (var d = 0; d < c.length; d++) {
            var e = c[d], f2 = e.getSnapshot;
            e = e.value;
            try {
              if (!He(f2(), e))
                return false;
            } catch (g) {
              return false;
            }
          }
      }
      c = b.child;
      if (b.subtreeFlags & 16384 && null !== c)
        c.return = b, b = c;
      else {
        if (b === a)
          break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a)
            return true;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return true;
  }
  function Ck(a, b) {
    b &= ~rk;
    b &= ~qk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes; 0 < b; ) {
      var c = 31 - oc(b), d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }
  function Ek(a) {
    if (0 !== (K & 6))
      throw Error(p(327));
    Hk();
    var b = uc(a, 0);
    if (0 === (b & 1))
      return Dk(a, B()), null;
    var c = Ik(a, b);
    if (0 !== a.tag && 2 === c) {
      var d = xc(a);
      0 !== d && (b = d, c = Nk(a, d));
    }
    if (1 === c)
      throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
    if (6 === c)
      throw Error(p(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Pk(a, tk, uk);
    Dk(a, B());
    return null;
  }
  function Qk(a, b) {
    var c = K;
    K |= 1;
    try {
      return a(b);
    } finally {
      K = c, 0 === K && (Gj = B() + 500, fg && jg());
    }
  }
  function Rk(a) {
    null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
    var b = K;
    K |= 1;
    var c = ok.transition, d = C;
    try {
      if (ok.transition = null, C = 1, a)
        return a();
    } finally {
      C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
    }
  }
  function Hj() {
    fj = ej.current;
    E(ej);
  }
  function Kk(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, Gf(c));
    if (null !== Y)
      for (c = Y.return; null !== c; ) {
        var d = c;
        wg(d);
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            null !== d && void 0 !== d && $f();
            break;
          case 3:
            zh();
            E(Wf);
            E(H);
            Eh();
            break;
          case 5:
            Bh(d);
            break;
          case 4:
            zh();
            break;
          case 13:
            E(L);
            break;
          case 19:
            E(L);
            break;
          case 10:
            ah(d.type._context);
            break;
          case 22:
          case 23:
            Hj();
        }
        c = c.return;
      }
    Q = a;
    Y = a = Pg(a.current, null);
    Z = fj = b;
    T = 0;
    pk = null;
    rk = qk = rh = 0;
    tk = sk = null;
    if (null !== fh) {
      for (b = 0; b < fh.length; b++)
        if (c = fh[b], d = c.interleaved, null !== d) {
          c.interleaved = null;
          var e = d.next, f2 = c.pending;
          if (null !== f2) {
            var g = f2.next;
            f2.next = e;
            d.next = g;
          }
          c.pending = d;
        }
      fh = null;
    }
    return a;
  }
  function Mk(a, b) {
    do {
      var c = Y;
      try {
        $g();
        Fh.current = Rh;
        if (Ih) {
          for (var d = M.memoizedState; null !== d; ) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          Ih = false;
        }
        Hh = 0;
        O = N = M = null;
        Jh = false;
        Kh = 0;
        nk.current = null;
        if (null === c || null === c.return) {
          T = 1;
          pk = b;
          Y = null;
          break;
        }
        a: {
          var f2 = a, g = c.return, h = c, k2 = b;
          b = Z;
          h.flags |= 32768;
          if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
            var l2 = k2, m2 = h, q2 = m2.tag;
            if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
              var r2 = m2.alternate;
              r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
            }
            var y2 = Ui(g);
            if (null !== y2) {
              y2.flags &= -257;
              Vi(y2, g, h, f2, b);
              y2.mode & 1 && Si(f2, l2, b);
              b = y2;
              k2 = l2;
              var n2 = b.updateQueue;
              if (null === n2) {
                var t2 = /* @__PURE__ */ new Set();
                t2.add(k2);
                b.updateQueue = t2;
              } else
                n2.add(k2);
              break a;
            } else {
              if (0 === (b & 1)) {
                Si(f2, l2, b);
                tj();
                break a;
              }
              k2 = Error(p(426));
            }
          } else if (I && h.mode & 1) {
            var J2 = Ui(g);
            if (null !== J2) {
              0 === (J2.flags & 65536) && (J2.flags |= 256);
              Vi(J2, g, h, f2, b);
              Jg(Ji(k2, h));
              break a;
            }
          }
          f2 = k2 = Ji(k2, h);
          4 !== T && (T = 2);
          null === sk ? sk = [f2] : sk.push(f2);
          f2 = g;
          do {
            switch (f2.tag) {
              case 3:
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var x2 = Ni(f2, k2, b);
                ph(f2, x2);
                break a;
              case 1:
                h = k2;
                var w2 = f2.type, u2 = f2.stateNode;
                if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                  f2.flags |= 65536;
                  b &= -b;
                  f2.lanes |= b;
                  var F2 = Qi(f2, h, b);
                  ph(f2, F2);
                  break a;
                }
            }
            f2 = f2.return;
          } while (null !== f2);
        }
        Sk(c);
      } catch (na) {
        b = na;
        Y === c && null !== c && (Y = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jk() {
    var a = mk.current;
    mk.current = Rh;
    return null === a ? Rh : a;
  }
  function tj() {
    if (0 === T || 3 === T || 2 === T)
      T = 4;
    null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
  }
  function Ik(a, b) {
    var c = K;
    K |= 2;
    var d = Jk();
    if (Q !== a || Z !== b)
      uk = null, Kk(a, b);
    do
      try {
        Tk();
        break;
      } catch (e) {
        Mk(a, e);
      }
    while (1);
    $g();
    K = c;
    mk.current = d;
    if (null !== Y)
      throw Error(p(261));
    Q = null;
    Z = 0;
    return T;
  }
  function Tk() {
    for (; null !== Y; )
      Uk(Y);
  }
  function Lk() {
    for (; null !== Y && !cc(); )
      Uk(Y);
  }
  function Uk(a) {
    var b = Vk(a.alternate, a, fj);
    a.memoizedProps = a.pendingProps;
    null === b ? Sk(a) : Y = b;
    nk.current = null;
  }
  function Sk(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if (0 === (b.flags & 32768)) {
        if (c = Ej(c, b, fj), null !== c) {
          Y = c;
          return;
        }
      } else {
        c = Ij(c, b);
        if (null !== c) {
          c.flags &= 32767;
          Y = c;
          return;
        }
        if (null !== a)
          a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
        else {
          T = 6;
          Y = null;
          return;
        }
      }
      b = b.sibling;
      if (null !== b) {
        Y = b;
        return;
      }
      Y = b = a;
    } while (null !== b);
    0 === T && (T = 5);
  }
  function Pk(a, b, c) {
    var d = C, e = ok.transition;
    try {
      ok.transition = null, C = 1, Wk(a, b, c, d);
    } finally {
      ok.transition = e, C = d;
    }
    return null;
  }
  function Wk(a, b, c, d) {
    do
      Hk();
    while (null !== wk);
    if (0 !== (K & 6))
      throw Error(p(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c)
      return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current)
      throw Error(p(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f2 = c.lanes | c.childLanes;
    Bc(a, f2);
    a === Q && (Y = Q = null, Z = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
      Hk();
      return null;
    }));
    f2 = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f2) {
      f2 = ok.transition;
      ok.transition = null;
      var g = C;
      C = 1;
      var h = K;
      K |= 4;
      nk.current = null;
      Oj(a, c);
      dk(c, a);
      Oe(Df);
      dd = !!Cf;
      Df = Cf = null;
      a.current = c;
      hk(c);
      dc();
      K = h;
      C = g;
      ok.transition = f2;
    } else
      a.current = c;
    vk && (vk = false, wk = a, xk = e);
    f2 = a.pendingLanes;
    0 === f2 && (Ri = null);
    mc(c.stateNode);
    Dk(a, B());
    if (null !== b)
      for (d = a.onRecoverableError, c = 0; c < b.length; c++)
        e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
    if (Oi)
      throw Oi = false, a = Pi, Pi = null, a;
    0 !== (xk & 1) && 0 !== a.tag && Hk();
    f2 = a.pendingLanes;
    0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
    jg();
    return null;
  }
  function Hk() {
    if (null !== wk) {
      var a = Dc(xk), b = ok.transition, c = C;
      try {
        ok.transition = null;
        C = 16 > a ? 16 : a;
        if (null === wk)
          var d = false;
        else {
          a = wk;
          wk = null;
          xk = 0;
          if (0 !== (K & 6))
            throw Error(p(331));
          var e = K;
          K |= 4;
          for (V = a.current; null !== V; ) {
            var f2 = V, g = f2.child;
            if (0 !== (V.flags & 16)) {
              var h = f2.deletions;
              if (null !== h) {
                for (var k2 = 0; k2 < h.length; k2++) {
                  var l2 = h[k2];
                  for (V = l2; null !== V; ) {
                    var m2 = V;
                    switch (m2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(8, m2, f2);
                    }
                    var q2 = m2.child;
                    if (null !== q2)
                      q2.return = m2, V = q2;
                    else
                      for (; null !== V; ) {
                        m2 = V;
                        var r2 = m2.sibling, y2 = m2.return;
                        Sj(m2);
                        if (m2 === l2) {
                          V = null;
                          break;
                        }
                        if (null !== r2) {
                          r2.return = y2;
                          V = r2;
                          break;
                        }
                        V = y2;
                      }
                  }
                }
                var n2 = f2.alternate;
                if (null !== n2) {
                  var t2 = n2.child;
                  if (null !== t2) {
                    n2.child = null;
                    do {
                      var J2 = t2.sibling;
                      t2.sibling = null;
                      t2 = J2;
                    } while (null !== t2);
                  }
                }
                V = f2;
              }
            }
            if (0 !== (f2.subtreeFlags & 2064) && null !== g)
              g.return = f2, V = g;
            else
              b:
                for (; null !== V; ) {
                  f2 = V;
                  if (0 !== (f2.flags & 2048))
                    switch (f2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(9, f2, f2.return);
                    }
                  var x2 = f2.sibling;
                  if (null !== x2) {
                    x2.return = f2.return;
                    V = x2;
                    break b;
                  }
                  V = f2.return;
                }
          }
          var w2 = a.current;
          for (V = w2; null !== V; ) {
            g = V;
            var u2 = g.child;
            if (0 !== (g.subtreeFlags & 2064) && null !== u2)
              u2.return = g, V = u2;
            else
              b:
                for (g = w2; null !== V; ) {
                  h = V;
                  if (0 !== (h.flags & 2048))
                    try {
                      switch (h.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Qj(9, h);
                      }
                    } catch (na) {
                      W(h, h.return, na);
                    }
                  if (h === g) {
                    V = null;
                    break b;
                  }
                  var F2 = h.sibling;
                  if (null !== F2) {
                    F2.return = h.return;
                    V = F2;
                    break b;
                  }
                  V = h.return;
                }
          }
          K = e;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot)
            try {
              lc.onPostCommitFiberRoot(kc, a);
            } catch (na) {
            }
          d = true;
        }
        return d;
      } finally {
        C = c, ok.transition = b;
      }
    }
    return false;
  }
  function Xk(a, b, c) {
    b = Ji(c, b);
    b = Ni(a, b, 1);
    a = nh(a, b, 1);
    b = R();
    null !== a && (Ac(a, 1, b), Dk(a, b));
  }
  function W(a, b, c) {
    if (3 === a.tag)
      Xk(a, a, c);
    else
      for (; null !== b; ) {
        if (3 === b.tag) {
          Xk(b, a, c);
          break;
        } else if (1 === b.tag) {
          var d = b.stateNode;
          if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
            a = Ji(c, a);
            a = Qi(b, a, 1);
            b = nh(b, a, 1);
            a = R();
            null !== b && (Ac(b, 1, a), Dk(b, a));
            break;
          }
        }
        b = b.return;
      }
  }
  function Ti(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = R();
    a.pingedLanes |= a.suspendedLanes & c;
    Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
    Dk(a, b);
  }
  function Yk(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c = R();
    a = ih(a, b);
    null !== a && (Ac(a, b, c), Dk(a, c));
  }
  function uj(a) {
    var b = a.memoizedState, c = 0;
    null !== b && (c = b.retryLane);
    Yk(a, c);
  }
  function bk(a, b) {
    var c = 0;
    switch (a.tag) {
      case 13:
        var d = a.stateNode;
        var e = a.memoizedState;
        null !== e && (c = e.retryLane);
        break;
      case 19:
        d = a.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    null !== d && d.delete(b);
    Yk(a, c);
  }
  var Vk;
  Vk = function(a, b, c) {
    if (null !== a)
      if (a.memoizedProps !== b.pendingProps || Wf.current)
        dh = true;
      else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128))
          return dh = false, yj(a, b, c);
        dh = 0 !== (a.flags & 131072) ? true : false;
      }
    else
      dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        var d = b.type;
        ij(a, b);
        a = b.pendingProps;
        var e = Yf(b, H.current);
        ch(b, c);
        e = Nh(null, b, d, a, e, c);
        var f2 = Sh();
        b.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Xi(null, b, e, c), b = b.child);
        return b;
      case 16:
        d = b.elementType;
        a: {
          ij(a, b);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = Zk(d);
          a = Ci(d, a);
          switch (e) {
            case 0:
              b = cj(null, b, d, a, c);
              break a;
            case 1:
              b = hj(null, b, d, a, c);
              break a;
            case 11:
              b = Yi(null, b, d, a, c);
              break a;
            case 14:
              b = $i(null, b, d, Ci(d.type, a), c);
              break a;
          }
          throw Error(p(
            306,
            d,
            ""
          ));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
      case 3:
        a: {
          kj(b);
          if (null === a)
            throw Error(p(387));
          d = b.pendingProps;
          f2 = b.memoizedState;
          e = f2.element;
          lh(a, b);
          qh(b, d, null, c);
          var g = b.memoizedState;
          d = g.element;
          if (f2.isDehydrated)
            if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
              e = Ji(Error(p(423)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Ji(Error(p(424)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else
              for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; )
                c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            Ig();
            if (d === e) {
              b = Zi(a, b, c);
              break a;
            }
            Xi(a, b, d, c);
          }
          b = b.child;
        }
        return b;
      case 5:
        return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
      case 6:
        return null === a && Eg(b), null;
      case 13:
        return oj(a, b, c);
      case 4:
        return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
      case 7:
        return Xi(a, b, b.pendingProps, c), b.child;
      case 8:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f2 = b.memoizedProps;
          g = e.value;
          G(Wg, d._currentValue);
          d._currentValue = g;
          if (null !== f2)
            if (He(f2.value, g)) {
              if (f2.children === e.children && !Wf.current) {
                b = Zi(a, b, c);
                break a;
              }
            } else
              for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
                var h = f2.dependencies;
                if (null !== h) {
                  g = f2.child;
                  for (var k2 = h.firstContext; null !== k2; ) {
                    if (k2.context === d) {
                      if (1 === f2.tag) {
                        k2 = mh(-1, c & -c);
                        k2.tag = 2;
                        var l2 = f2.updateQueue;
                        if (null !== l2) {
                          l2 = l2.shared;
                          var m2 = l2.pending;
                          null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                          l2.pending = k2;
                        }
                      }
                      f2.lanes |= c;
                      k2 = f2.alternate;
                      null !== k2 && (k2.lanes |= c);
                      bh(
                        f2.return,
                        c,
                        b
                      );
                      h.lanes |= c;
                      break;
                    }
                    k2 = k2.next;
                  }
                } else if (10 === f2.tag)
                  g = f2.type === b.type ? null : f2.child;
                else if (18 === f2.tag) {
                  g = f2.return;
                  if (null === g)
                    throw Error(p(341));
                  g.lanes |= c;
                  h = g.alternate;
                  null !== h && (h.lanes |= c);
                  bh(g, c, b);
                  g = f2.sibling;
                } else
                  g = f2.child;
                if (null !== g)
                  g.return = f2;
                else
                  for (g = f2; null !== g; ) {
                    if (g === b) {
                      g = null;
                      break;
                    }
                    f2 = g.sibling;
                    if (null !== f2) {
                      f2.return = g.return;
                      g = f2;
                      break;
                    }
                    g = g.return;
                  }
                f2 = g;
              }
          Xi(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
      case 14:
        return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
      case 15:
        return bj(a, b, b.type, b.pendingProps, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
      case 19:
        return xj(a, b, c);
      case 22:
        return dj(a, b, c);
    }
    throw Error(p(156, b.tag));
  };
  function Fk(a, b) {
    return ac(a, b);
  }
  function $k(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a, b, c, d) {
    return new $k(a, b, c, d);
  }
  function aj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function Zk(a) {
    if ("function" === typeof a)
      return aj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === Da)
        return 11;
      if (a === Ga)
        return 14;
    }
    return 2;
  }
  function Pg(a, b) {
    var c = a.alternate;
    null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function Rg(a, b, c, d, e, f2) {
    var g = 2;
    d = a;
    if ("function" === typeof a)
      aj(a) && (g = 1);
    else if ("string" === typeof a)
      g = 5;
    else
      a:
        switch (a) {
          case ya:
            return Tg(c.children, e, f2, b);
          case za:
            g = 8;
            e |= 8;
            break;
          case Aa:
            return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
          case Ea:
            return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
          case Fa:
            return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
          case Ia:
            return pj(c, e, f2, b);
          default:
            if ("object" === typeof a && null !== a)
              switch (a.$$typeof) {
                case Ba:
                  g = 10;
                  break a;
                case Ca:
                  g = 9;
                  break a;
                case Da:
                  g = 11;
                  break a;
                case Ga:
                  g = 14;
                  break a;
                case Ha:
                  g = 16;
                  d = null;
                  break a;
              }
            throw Error(p(130, null == a ? a : typeof a, ""));
        }
    b = Bg(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f2;
    return b;
  }
  function Tg(a, b, c, d) {
    a = Bg(7, a, d, b);
    a.lanes = c;
    return a;
  }
  function pj(a, b, c, d) {
    a = Bg(22, a, d, b);
    a.elementType = Ia;
    a.lanes = c;
    a.stateNode = { isHidden: false };
    return a;
  }
  function Qg(a, b, c) {
    a = Bg(6, a, null, b);
    a.lanes = c;
    return a;
  }
  function Sg(a, b, c) {
    b = Bg(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
    return b;
  }
  function al(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
  }
  function bl(a, b, c, d, e, f2, g, h, k2) {
    a = new al(a, b, c, h, k2);
    1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
    f2 = Bg(3, null, null, b);
    a.current = f2;
    f2.stateNode = a;
    f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    kh(f2);
    return a;
  }
  function cl(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
  }
  function dl(a) {
    if (!a)
      return Vf;
    a = a._reactInternals;
    a: {
      if (Vb(a) !== a || 1 !== a.tag)
        throw Error(p(170));
      var b = a;
      do {
        switch (b.tag) {
          case 3:
            b = b.stateNode.context;
            break a;
          case 1:
            if (Zf(b.type)) {
              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b = b.return;
      } while (null !== b);
      throw Error(p(171));
    }
    if (1 === a.tag) {
      var c = a.type;
      if (Zf(c))
        return bg(a, c, b);
    }
    return b;
  }
  function el(a, b, c, d, e, f2, g, h, k2) {
    a = bl(c, d, true, a, e, f2, g, h, k2);
    a.context = dl(null);
    c = a.current;
    d = R();
    e = yi(c);
    f2 = mh(d, e);
    f2.callback = void 0 !== b && null !== b ? b : null;
    nh(c, f2, e);
    a.current.lanes = e;
    Ac(a, e, d);
    Dk(a, d);
    return a;
  }
  function fl(a, b, c, d) {
    var e = b.current, f2 = R(), g = yi(e);
    c = dl(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = mh(f2, g);
    b.payload = { element: a };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = nh(e, b, g);
    null !== a && (gi(a, e, g, f2), oh(a, e, g));
    return g;
  }
  function gl(a) {
    a = a.current;
    if (!a.child)
      return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  }
  function hl(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }
  function il(a, b) {
    hl(a, b);
    (a = a.alternate) && hl(a, b);
  }
  function jl() {
    return null;
  }
  var kl = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
  };
  function ll(a) {
    this._internalRoot = a;
  }
  ml.prototype.render = ll.prototype.render = function(a) {
    var b = this._internalRoot;
    if (null === b)
      throw Error(p(409));
    fl(a, b, null, null);
  };
  ml.prototype.unmount = ll.prototype.unmount = function() {
    var a = this._internalRoot;
    if (null !== a) {
      this._internalRoot = null;
      var b = a.containerInfo;
      Rk(function() {
        fl(null, a, null, null);
      });
      b[uf] = null;
    }
  };
  function ml(a) {
    this._internalRoot = a;
  }
  ml.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
      var b = Hc();
      a = { blockedOn: null, target: a, priority: b };
      for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++)
        ;
      Qc.splice(c, 0, a);
      0 === c && Vc(a);
    }
  };
  function nl(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
  }
  function ol(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
  }
  function pl() {
  }
  function ql(a, b, c, d, e) {
    if (e) {
      if ("function" === typeof d) {
        var f2 = d;
        d = function() {
          var a2 = gl(g);
          f2.call(a2);
        };
      }
      var g = el(b, d, a, 0, null, false, false, "", pl);
      a._reactRootContainer = g;
      a[uf] = g.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk();
      return g;
    }
    for (; e = a.lastChild; )
      a.removeChild(e);
    if ("function" === typeof d) {
      var h = d;
      d = function() {
        var a2 = gl(k2);
        h.call(a2);
      };
    }
    var k2 = bl(a, 0, false, null, null, false, false, "", pl);
    a._reactRootContainer = k2;
    a[uf] = k2.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk(function() {
      fl(b, k2, c, d);
    });
    return k2;
  }
  function rl(a, b, c, d, e) {
    var f2 = c._reactRootContainer;
    if (f2) {
      var g = f2;
      if ("function" === typeof e) {
        var h = e;
        e = function() {
          var a2 = gl(g);
          h.call(a2);
        };
      }
      fl(b, g, a, e);
    } else
      g = ql(c, b, a, e, d);
    return gl(g);
  }
  Ec = function(a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.current.memoizedState.isDehydrated) {
          var c = tc(b.pendingLanes);
          0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
        }
        break;
      case 13:
        Rk(function() {
          var b2 = ih(a, 1);
          if (null !== b2) {
            var c2 = R();
            gi(b2, a, 1, c2);
          }
        }), il(a, 1);
    }
  };
  Fc = function(a) {
    if (13 === a.tag) {
      var b = ih(a, 134217728);
      if (null !== b) {
        var c = R();
        gi(b, a, 134217728, c);
      }
      il(a, 134217728);
    }
  };
  Gc = function(a) {
    if (13 === a.tag) {
      var b = yi(a), c = ih(a, b);
      if (null !== c) {
        var d = R();
        gi(c, a, b, d);
      }
      il(a, b);
    }
  };
  Hc = function() {
    return C;
  };
  Ic = function(a, b) {
    var c = C;
    try {
      return C = a, b();
    } finally {
      C = c;
    }
  };
  yb = function(a, b, c) {
    switch (b) {
      case "input":
        bb(a, c);
        b = c.name;
        if ("radio" === c.type && null != b) {
          for (c = a; c.parentNode; )
            c = c.parentNode;
          c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
          for (b = 0; b < c.length; b++) {
            var d = c[b];
            if (d !== a && d.form === a.form) {
              var e = Db(d);
              if (!e)
                throw Error(p(90));
              Wa(d);
              bb(d, e);
            }
          }
        }
        break;
      case "textarea":
        ib(a, c);
        break;
      case "select":
        b = c.value, null != b && fb(a, !!c.multiple, b, false);
    }
  };
  Gb = Qk;
  Hb = Rk;
  var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
  var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
    a = Zb(a);
    return null === a ? null : a.stateNode;
  }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber)
      try {
        kc = vl.inject(ul), lc = vl;
      } catch (a) {
      }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
  reactDom_production_min.createPortal = function(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!nl(b))
      throw Error(p(200));
    return cl(a, b, null, c);
  };
  reactDom_production_min.createRoot = function(a, b) {
    if (!nl(a))
      throw Error(p(299));
    var c = false, d = "", e = kl;
    null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
    b = bl(a, 1, false, null, null, c, false, d, e);
    a[uf] = b.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    return new ll(b);
  };
  reactDom_production_min.findDOMNode = function(a) {
    if (null == a)
      return null;
    if (1 === a.nodeType)
      return a;
    var b = a._reactInternals;
    if (void 0 === b) {
      if ("function" === typeof a.render)
        throw Error(p(188));
      a = Object.keys(a).join(",");
      throw Error(p(268, a));
    }
    a = Zb(b);
    a = null === a ? null : a.stateNode;
    return a;
  };
  reactDom_production_min.flushSync = function(a) {
    return Rk(a);
  };
  reactDom_production_min.hydrate = function(a, b, c) {
    if (!ol(b))
      throw Error(p(200));
    return rl(null, a, b, true, c);
  };
  reactDom_production_min.hydrateRoot = function(a, b, c) {
    if (!nl(a))
      throw Error(p(405));
    var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = kl;
    null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
    b = el(b, null, a, 1, null != c ? c : null, e, false, f2, g);
    a[uf] = b.current;
    sf(a);
    if (d)
      for (a = 0; a < d.length; a++)
        c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
          c,
          e
        );
    return new ml(b);
  };
  reactDom_production_min.render = function(a, b, c) {
    if (!ol(b))
      throw Error(p(200));
    return rl(null, a, b, false, c);
  };
  reactDom_production_min.unmountComponentAtNode = function(a) {
    if (!ol(a))
      throw Error(p(40));
    return a._reactRootContainer ? (Rk(function() {
      rl(null, null, a, false, function() {
        a._reactRootContainer = null;
        a[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Qk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
    if (!ol(c))
      throw Error(p(200));
    if (null == a || void 0 === a._reactInternals)
      throw Error(p(38));
    return rl(a, b, c, false, d);
  };
  reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    reactDom.exports = reactDom_production_min;
  }
  var reactDomExports = reactDom.exports;
  var createRoot;
  var m = reactDomExports;
  {
    createRoot = m.createRoot;
    m.hydrateRoot;
  }
  const scriptRel = "modulepreload";
  const assetsURL = function(dep) {
    return "/survey_website/" + dep;
  };
  const seen = {};
  const __vitePreload = function preload(baseModule, deps, importerUrl) {
    if (true) {
      return baseModule();
    }
    const links = document.getElementsByTagName("link");
    return Promise.all(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen)
        return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      const isBaseRelative = !!importerUrl;
      if (isBaseRelative) {
        for (let i = links.length - 1; i >= 0; i--) {
          const link2 = links[i];
          if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
            return;
          }
        }
      } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
        });
      }
    })).then(() => baseModule()).catch((err) => {
      const e = new Event("vite:preloadError", { cancelable: true });
      e.payload = err;
      window.dispatchEvent(e);
      if (!e.defaultPrevented) {
        throw err;
      }
    });
  };
  var PopStateEventType = "popstate";
  function createBrowserHistory(options = {}) {
    function createBrowserLocation(window2, globalHistory) {
      let { pathname, search, hash } = window2.location;
      return createLocation(
        "",
        { pathname, search, hash },
        // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null,
        globalHistory.state && globalHistory.state.key || "default"
      );
    }
    function createBrowserHref(window2, to) {
      return typeof to === "string" ? to : createPath(to);
    }
    return getUrlBasedHistory(
      createBrowserLocation,
      createBrowserHref,
      null,
      options
    );
  }
  function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function warning(cond, message) {
    if (!cond) {
      if (typeof console !== "undefined")
        console.warn(message);
      try {
        throw new Error(message);
      } catch (e) {
      }
    }
  }
  function createKey() {
    return Math.random().toString(36).substring(2, 10);
  }
  function getHistoryState(location, index2) {
    return {
      usr: location.state,
      key: location.key,
      idx: index2
    };
  }
  function createLocation(current, to, state = null, key) {
    let location = __spreadProps(__spreadValues({
      pathname: typeof current === "string" ? current : current.pathname,
      search: "",
      hash: ""
    }, typeof to === "string" ? parsePath(to) : to), {
      state,
      // TODO: This could be cleaned up.  push/replace should probably just take
      // full Locations now and avoid the need to run through this flow at all
      // But that's a pretty big refactor to the current test suite so going to
      // keep as is for the time being and just let any incoming keys take precedence
      key: to && to.key || key || createKey()
    });
    return location;
  }
  function createPath({
    pathname = "/",
    search = "",
    hash = ""
  }) {
    if (search && search !== "?")
      pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#")
      pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
  }
  function parsePath(path) {
    let parsedPath = {};
    if (path) {
      let hashIndex = path.indexOf("#");
      if (hashIndex >= 0) {
        parsedPath.hash = path.substring(hashIndex);
        path = path.substring(0, hashIndex);
      }
      let searchIndex = path.indexOf("?");
      if (searchIndex >= 0) {
        parsedPath.search = path.substring(searchIndex);
        path = path.substring(0, searchIndex);
      }
      if (path) {
        parsedPath.pathname = path;
      }
    }
    return parsedPath;
  }
  function getUrlBasedHistory(getLocation, createHref2, validateLocation, options = {}) {
    let { window: window2 = document.defaultView, v5Compat = false } = options;
    let globalHistory = window2.history;
    let action = "POP";
    let listener = null;
    let index2 = getIndex();
    if (index2 == null) {
      index2 = 0;
      globalHistory.replaceState(__spreadProps(__spreadValues({}, globalHistory.state), { idx: index2 }), "");
    }
    function getIndex() {
      let state = globalHistory.state || { idx: null };
      return state.idx;
    }
    function handlePop() {
      action = "POP";
      let nextIndex = getIndex();
      let delta = nextIndex == null ? null : nextIndex - index2;
      index2 = nextIndex;
      if (listener) {
        listener({ action, location: history.location, delta });
      }
    }
    function push(to, state) {
      action = "PUSH";
      let location = createLocation(history.location, to, state);
      if (validateLocation)
        validateLocation(location, to);
      index2 = getIndex() + 1;
      let historyState = getHistoryState(location, index2);
      let url = history.createHref(location);
      try {
        globalHistory.pushState(historyState, "", url);
      } catch (error) {
        if (error instanceof DOMException && error.name === "DataCloneError") {
          throw error;
        }
        window2.location.assign(url);
      }
      if (v5Compat && listener) {
        listener({ action, location: history.location, delta: 1 });
      }
    }
    function replace2(to, state) {
      action = "REPLACE";
      let location = createLocation(history.location, to, state);
      if (validateLocation)
        validateLocation(location, to);
      index2 = getIndex();
      let historyState = getHistoryState(location, index2);
      let url = history.createHref(location);
      globalHistory.replaceState(historyState, "", url);
      if (v5Compat && listener) {
        listener({ action, location: history.location, delta: 0 });
      }
    }
    function createURL(to) {
      return createBrowserURLImpl(to);
    }
    let history = {
      get action() {
        return action;
      },
      get location() {
        return getLocation(window2, globalHistory);
      },
      listen(fn) {
        if (listener) {
          throw new Error("A history only accepts one active listener");
        }
        window2.addEventListener(PopStateEventType, handlePop);
        listener = fn;
        return () => {
          window2.removeEventListener(PopStateEventType, handlePop);
          listener = null;
        };
      },
      createHref(to) {
        return createHref2(window2, to);
      },
      createURL,
      encodeLocation(to) {
        let url = createURL(to);
        return {
          pathname: url.pathname,
          search: url.search,
          hash: url.hash
        };
      },
      push,
      replace: replace2,
      go(n2) {
        return globalHistory.go(n2);
      }
    };
    return history;
  }
  function createBrowserURLImpl(to, isAbsolute = false) {
    let base = "http://localhost";
    if (typeof window !== "undefined") {
      base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    }
    invariant(base, "No window.location.(origin|href) available to create URL");
    let href = typeof to === "string" ? to : createPath(to);
    href = href.replace(/ $/, "%20");
    if (!isAbsolute && href.startsWith("//")) {
      href = base + href;
    }
    return new URL(href, base);
  }
  function matchRoutes(routes, locationArg, basename = "/") {
    return matchRoutesImpl(routes, locationArg, basename, false);
  }
  function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
    let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    let pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
      return null;
    }
    let branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    let matches = null;
    for (let i = 0; matches == null && i < branches.length; ++i) {
      let decoded = decodePath(pathname);
      matches = matchRouteBranch(
        branches[i],
        decoded,
        allowPartial
      );
    }
    return matches;
  }
  function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "") {
    let flattenRoute = (route, index2, relativePath) => {
      let meta = {
        relativePath: relativePath === void 0 ? route.path || "" : relativePath,
        caseSensitive: route.caseSensitive === true,
        childrenIndex: index2,
        route
      };
      if (meta.relativePath.startsWith("/")) {
        invariant(
          meta.relativePath.startsWith(parentPath),
          `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
        );
        meta.relativePath = meta.relativePath.slice(parentPath.length);
      }
      let path = joinPaths([parentPath, meta.relativePath]);
      let routesMeta = parentsMeta.concat(meta);
      if (route.children && route.children.length > 0) {
        invariant(
          // Our types know better, but runtime JS may not!
          // @ts-expect-error
          route.index !== true,
          `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
        );
        flattenRoutes(route.children, branches, routesMeta, path);
      }
      if (route.path == null && !route.index) {
        return;
      }
      branches.push({
        path,
        score: computeScore(path, route.index),
        routesMeta
      });
    };
    routes.forEach((route, index2) => {
      var _a;
      if (route.path === "" || !((_a = route.path) == null ? void 0 : _a.includes("?"))) {
        flattenRoute(route, index2);
      } else {
        for (let exploded of explodeOptionalSegments(route.path)) {
          flattenRoute(route, index2, exploded);
        }
      }
    });
    return branches;
  }
  function explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0)
      return [];
    let [first, ...rest] = segments;
    let isOptional = first.endsWith("?");
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) {
      return isOptional ? [required, ""] : [required];
    }
    let restExploded = explodeOptionalSegments(rest.join("/"));
    let result = [];
    result.push(
      ...restExploded.map(
        (subpath) => subpath === "" ? required : [required, subpath].join("/")
      )
    );
    if (isOptional) {
      result.push(...restExploded);
    }
    return result.map(
      (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
    );
  }
  function rankRouteBranches(branches) {
    branches.sort(
      (a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(
        a.routesMeta.map((meta) => meta.childrenIndex),
        b.routesMeta.map((meta) => meta.childrenIndex)
      )
    );
  }
  var paramRe = /^:[\w-]+$/;
  var dynamicSegmentValue = 3;
  var indexRouteValue = 2;
  var emptySegmentValue = 1;
  var staticSegmentValue = 10;
  var splatPenalty = -2;
  var isSplat = (s) => s === "*";
  function computeScore(path, index2) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some(isSplat)) {
      initialScore += splatPenalty;
    }
    if (index2) {
      initialScore += indexRouteValue;
    }
    return segments.filter((s) => !isSplat(s)).reduce(
      (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
      initialScore
    );
  }
  function compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n2, i) => n2 === b[i]);
    return siblings ? (
      // If two routes are siblings, we should try to match the earlier sibling
      // first. This allows people to have fine-grained control over the matching
      // behavior by simply putting routes with identical paths in the order they
      // want them tried.
      a[a.length - 1] - b[b.length - 1]
    ) : (
      // Otherwise, it doesn't really make sense to rank non-siblings by index,
      // so they sort equally.
      0
    );
  }
  function matchRouteBranch(branch, pathname, allowPartial = false) {
    let { routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for (let i = 0; i < routesMeta.length; ++i) {
      let meta = routesMeta[i];
      let end = i === routesMeta.length - 1;
      let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
      let match = matchPath(
        { path: meta.relativePath, caseSensitive: meta.caseSensitive, end },
        remainingPathname
      );
      let route = meta.route;
      if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
        match = matchPath(
          {
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: false
          },
          remainingPathname
        );
      }
      if (!match) {
        return null;
      }
      Object.assign(matchedParams, match.params);
      matches.push({
        // TODO: Can this as be avoided?
        params: matchedParams,
        pathname: joinPaths([matchedPathname, match.pathname]),
        pathnameBase: normalizePathname(
          joinPaths([matchedPathname, match.pathnameBase])
        ),
        route
      });
      if (match.pathnameBase !== "/") {
        matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
      }
    }
    return matches;
  }
  function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
      pattern = { path: pattern, caseSensitive: false, end: true };
    }
    let [matcher, compiledParams] = compilePath(
      pattern.path,
      pattern.caseSensitive,
      pattern.end
    );
    let match = pathname.match(matcher);
    if (!match)
      return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = compiledParams.reduce(
      (memo2, { paramName, isOptional }, index2) => {
        if (paramName === "*") {
          let splatValue = captureGroups[index2] || "";
          pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        const value = captureGroups[index2];
        if (isOptional && !value) {
          memo2[paramName] = void 0;
        } else {
          memo2[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo2;
      },
      {}
    );
    return {
      params,
      pathname: matchedPathname,
      pathnameBase,
      pattern
    };
  }
  function compilePath(path, caseSensitive = false, end = true) {
    warning(
      path === "*" || !path.endsWith("*") || path.endsWith("/*"),
      `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
    );
    let params = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
      /\/:([\w-]+)(\?)?/g,
      (_, paramName, isOptional) => {
        params.push({ paramName, isOptional: isOptional != null });
        return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
      }
    );
    if (path.endsWith("*")) {
      params.push({ paramName: "*" });
      regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
    } else if (end) {
      regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
      regexpSource += "(?:(?=\\/|$))";
    } else
      ;
    let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
    return [matcher, params];
  }
  function decodePath(value) {
    try {
      return value.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
    } catch (error) {
      warning(
        false,
        `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
      );
      return value;
    }
  }
  function stripBasename(pathname, basename) {
    if (basename === "/")
      return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
      return null;
    }
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
      return null;
    }
    return pathname.slice(startIndex) || "/";
  }
  function resolvePath(to, fromPathname = "/") {
    let {
      pathname: toPathname,
      search = "",
      hash = ""
    } = typeof to === "string" ? parsePath(to) : to;
    let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
      pathname,
      search: normalizeSearch(search),
      hash: normalizeHash(hash)
    };
  }
  function resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment) => {
      if (segment === "..") {
        if (segments.length > 1)
          segments.pop();
      } else if (segment !== ".") {
        segments.push(segment);
      }
    });
    return segments.length > 1 ? segments.join("/") : "/";
  }
  function getInvalidPathError(char, field, dest, path) {
    return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
      path
    )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function getPathContributingMatches(matches) {
    return matches.filter(
      (match, index2) => index2 === 0 || match.route.path && match.route.path.length > 0
    );
  }
  function getResolveToMatches(matches) {
    let pathMatches = getPathContributingMatches(matches);
    return pathMatches.map(
      (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
    );
  }
  function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
    let to;
    if (typeof toArg === "string") {
      to = parsePath(toArg);
    } else {
      to = __spreadValues({}, toArg);
      invariant(
        !to.pathname || !to.pathname.includes("?"),
        getInvalidPathError("?", "pathname", "search", to)
      );
      invariant(
        !to.pathname || !to.pathname.includes("#"),
        getInvalidPathError("#", "pathname", "hash", to)
      );
      invariant(
        !to.search || !to.search.includes("#"),
        getInvalidPathError("#", "search", "hash", to)
      );
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from;
    if (toPathname == null) {
      from = locationPathname;
    } else {
      let routePathnameIndex = routePathnames.length - 1;
      if (!isPathRelative && toPathname.startsWith("..")) {
        let toSegments = toPathname.split("/");
        while (toSegments[0] === "..") {
          toSegments.shift();
          routePathnameIndex -= 1;
        }
        to.pathname = toSegments.join("/");
      }
      from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = resolvePath(to, from);
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
      path.pathname += "/";
    }
    return path;
  }
  var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
  var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
  var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
  var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
  function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
  }
  var validMutationMethodsArr = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  new Set(
    validMutationMethodsArr
  );
  var validRequestMethodsArr = [
    "GET",
    ...validMutationMethodsArr
  ];
  new Set(validRequestMethodsArr);
  var DataRouterContext = reactExports.createContext(null);
  DataRouterContext.displayName = "DataRouter";
  var DataRouterStateContext = reactExports.createContext(null);
  DataRouterStateContext.displayName = "DataRouterState";
  reactExports.createContext(false);
  var ViewTransitionContext = reactExports.createContext({
    isTransitioning: false
  });
  ViewTransitionContext.displayName = "ViewTransition";
  var FetchersContext = reactExports.createContext(
    /* @__PURE__ */ new Map()
  );
  FetchersContext.displayName = "Fetchers";
  var AwaitContext = reactExports.createContext(null);
  AwaitContext.displayName = "Await";
  var NavigationContext = reactExports.createContext(
    null
  );
  NavigationContext.displayName = "Navigation";
  var LocationContext = reactExports.createContext(
    null
  );
  LocationContext.displayName = "Location";
  var RouteContext = reactExports.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  RouteContext.displayName = "Route";
  var RouteErrorContext = reactExports.createContext(null);
  RouteErrorContext.displayName = "RouteError";
  function useHref(to, { relative } = {}) {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useHref() may be used only in the context of a <Router> component.`
    );
    let { basename, navigator: navigator2 } = reactExports.useContext(NavigationContext);
    let { hash, pathname, search } = useResolvedPath(to, { relative });
    let joinedPathname = pathname;
    if (basename !== "/") {
      joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
    }
    return navigator2.createHref({ pathname: joinedPathname, search, hash });
  }
  function useInRouterContext() {
    return reactExports.useContext(LocationContext) != null;
  }
  function useLocation() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useLocation() may be used only in the context of a <Router> component.`
    );
    return reactExports.useContext(LocationContext).location;
  }
  var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
  function useIsomorphicLayoutEffect(cb2) {
    let isStatic = reactExports.useContext(NavigationContext).static;
    if (!isStatic) {
      reactExports.useLayoutEffect(cb2);
    }
  }
  function useNavigate() {
    let { isDataRoute } = reactExports.useContext(RouteContext);
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
  }
  function useNavigateUnstable() {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useNavigate() may be used only in the context of a <Router> component.`
    );
    let dataRouterContext = reactExports.useContext(DataRouterContext);
    let { basename, navigator: navigator2 } = reactExports.useContext(NavigationContext);
    let { matches } = reactExports.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    let activeRef = reactExports.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = reactExports.useCallback(
      (to, options = {}) => {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current)
          return;
        if (typeof to === "number") {
          navigator2.go(to);
          return;
        }
        let path = resolveTo(
          to,
          JSON.parse(routePathnamesJson),
          locationPathname,
          options.relative === "path"
        );
        if (dataRouterContext == null && basename !== "/") {
          path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
        }
        (!!options.replace ? navigator2.replace : navigator2.push)(
          path,
          options.state,
          options
        );
      },
      [
        basename,
        navigator2,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
      ]
    );
    return navigate;
  }
  reactExports.createContext(null);
  function useResolvedPath(to, { relative } = {}) {
    let { matches } = reactExports.useContext(RouteContext);
    let { pathname: locationPathname } = useLocation();
    let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
    return reactExports.useMemo(
      () => resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        relative === "path"
      ),
      [to, routePathnamesJson, locationPathname, relative]
    );
  }
  function useRoutes(routes, locationArg) {
    return useRoutesImpl(routes, locationArg);
  }
  function useRoutesImpl(routes, locationArg, dataRouterState, future) {
    var _a;
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that.
      `useRoutes() may be used only in the context of a <Router> component.`
    );
    let { navigator: navigator2 } = reactExports.useContext(NavigationContext);
    let { matches: parentMatches } = reactExports.useContext(RouteContext);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    {
      let parentPath = parentRoute && parentRoute.path || "";
      warningOnce(
        parentPathname,
        !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
      );
    }
    let locationFromContext = useLocation();
    let location;
    if (locationArg) {
      let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
      invariant(
        parentPathnameBase === "/" || ((_a = parsedLocationArg.pathname) == null ? void 0 : _a.startsWith(parentPathnameBase)),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
      );
      location = parsedLocationArg;
    } else {
      location = locationFromContext;
    }
    let pathname = location.pathname || "/";
    let remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
      let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
      let segments = pathname.replace(/^\//, "").split("/");
      remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    let matches = matchRoutes(routes, { pathname: remainingPathname });
    {
      warning(
        parentRoute || matches != null,
        `No routes matched location "${location.pathname}${location.search}${location.hash}" `
      );
      warning(
        matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      );
    }
    let renderedMatches = _renderMatches(
      matches && matches.map(
        (match) => Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes
            navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
          ]),
          pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
            parentPathnameBase,
            // Re-encode pathnames that were decoded inside matchRoutes
            navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
          ])
        })
      ),
      parentMatches,
      dataRouterState,
      future
    );
    if (locationArg && renderedMatches) {
      return /* @__PURE__ */ reactExports.createElement(
        LocationContext.Provider,
        {
          value: {
            location: __spreadValues({
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default"
            }, location),
            navigationType: "POP"
            /* Pop */
          }
        },
        renderedMatches
      );
    }
    return renderedMatches;
  }
  function DefaultErrorComponent() {
    let error = useRouteError();
    let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
    let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
    let devInfo = null;
    {
      console.error(
        "Error handled by React Router default ErrorBoundary:",
        error
      );
      devInfo = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ reactExports.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ reactExports.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ reactExports.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
    }
    return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", { style: preStyles }, stack) : null, devInfo);
  }
  var defaultErrorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
  var RenderErrorBoundary = class extends reactExports.Component {
    constructor(props) {
      super(props);
      this.state = {
        location: props.location,
        revalidation: props.revalidation,
        error: props.error
      };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    static getDerivedStateFromProps(props, state) {
      if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
        return {
          error: props.error,
          location: props.location,
          revalidation: props.revalidation
        };
      }
      return {
        error: props.error !== void 0 ? props.error : state.error,
        location: state.location,
        revalidation: props.revalidation || state.revalidation
      };
    }
    componentDidCatch(error, errorInfo) {
      console.error(
        "React Router caught the following error during render",
        error,
        errorInfo
      );
    }
    render() {
      return this.state.error !== void 0 ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ reactExports.createElement(
        RouteErrorContext.Provider,
        {
          value: this.state.error,
          children: this.props.component
        }
      )) : this.props.children;
    }
  };
  function RenderedRoute({ routeContext, match, children }) {
    let dataRouterContext = reactExports.useContext(DataRouterContext);
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
      dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, { value: routeContext }, children);
  }
  function _renderMatches(matches, parentMatches = [], dataRouterState = null, future = null) {
    if (matches == null) {
      if (!dataRouterState) {
        return null;
      }
      if (dataRouterState.errors) {
        matches = dataRouterState.matches;
      } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
        matches = dataRouterState.matches;
      } else {
        return null;
      }
    }
    let renderedMatches = matches;
    let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
    if (errors != null) {
      let errorIndex = renderedMatches.findIndex(
        (m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]) !== void 0
      );
      invariant(
        errorIndex >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(
          errors
        ).join(",")}`
      );
      renderedMatches = renderedMatches.slice(
        0,
        Math.min(renderedMatches.length, errorIndex + 1)
      );
    }
    let renderFallback = false;
    let fallbackIndex = -1;
    if (dataRouterState) {
      for (let i = 0; i < renderedMatches.length; i++) {
        let match = renderedMatches[i];
        if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
          fallbackIndex = i;
        }
        if (match.route.id) {
          let { loaderData, errors: errors2 } = dataRouterState;
          let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
          if (match.route.lazy || needsToRunLoader) {
            renderFallback = true;
            if (fallbackIndex >= 0) {
              renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
            } else {
              renderedMatches = [renderedMatches[0]];
            }
            break;
          }
        }
      }
    }
    return renderedMatches.reduceRight(
      (outlet, match, index2) => {
        let error;
        let shouldRenderHydrateFallback = false;
        let errorElement = null;
        let hydrateFallbackElement = null;
        if (dataRouterState) {
          error = errors && match.route.id ? errors[match.route.id] : void 0;
          errorElement = match.route.errorElement || defaultErrorElement;
          if (renderFallback) {
            if (fallbackIndex < 0 && index2 === 0) {
              warningOnce(
                "route-fallback",
                false,
                "No `HydrateFallback` element provided to render during initial hydration"
              );
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = null;
            } else if (fallbackIndex === index2) {
              shouldRenderHydrateFallback = true;
              hydrateFallbackElement = match.route.hydrateFallbackElement || null;
            }
          }
        }
        let matches2 = parentMatches.concat(renderedMatches.slice(0, index2 + 1));
        let getChildren = () => {
          let children;
          if (error) {
            children = errorElement;
          } else if (shouldRenderHydrateFallback) {
            children = hydrateFallbackElement;
          } else if (match.route.Component) {
            children = /* @__PURE__ */ reactExports.createElement(match.route.Component, null);
          } else if (match.route.element) {
            children = match.route.element;
          } else {
            children = outlet;
          }
          return /* @__PURE__ */ reactExports.createElement(
            RenderedRoute,
            {
              match,
              routeContext: {
                outlet,
                matches: matches2,
                isDataRoute: dataRouterState != null
              },
              children
            }
          );
        };
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index2 === 0) ? /* @__PURE__ */ reactExports.createElement(
          RenderErrorBoundary,
          {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error,
            children: getChildren(),
            routeContext: { outlet: null, matches: matches2, isDataRoute: true }
          }
        ) : getChildren();
      },
      null
    );
  }
  function getDataRouterConsoleError(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext(hookName) {
    let ctx = reactExports.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError(hookName));
    return ctx;
  }
  function useDataRouterState(hookName) {
    let state = reactExports.useContext(DataRouterStateContext);
    invariant(state, getDataRouterConsoleError(hookName));
    return state;
  }
  function useRouteContext(hookName) {
    let route = reactExports.useContext(RouteContext);
    invariant(route, getDataRouterConsoleError(hookName));
    return route;
  }
  function useCurrentRouteId(hookName) {
    let route = useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    invariant(
      thisRoute.route.id,
      `${hookName} can only be used on routes that contain a unique "id"`
    );
    return thisRoute.route.id;
  }
  function useRouteId() {
    return useCurrentRouteId(
      "useRouteId"
      /* UseRouteId */
    );
  }
  function useRouteError() {
    var _a;
    let error = reactExports.useContext(RouteErrorContext);
    let state = useDataRouterState(
      "useRouteError"
      /* UseRouteError */
    );
    let routeId = useCurrentRouteId(
      "useRouteError"
      /* UseRouteError */
    );
    if (error !== void 0) {
      return error;
    }
    return (_a = state.errors) == null ? void 0 : _a[routeId];
  }
  function useNavigateStable() {
    let { router } = useDataRouterContext(
      "useNavigate"
      /* UseNavigateStable */
    );
    let id2 = useCurrentRouteId(
      "useNavigate"
      /* UseNavigateStable */
    );
    let activeRef = reactExports.useRef(false);
    useIsomorphicLayoutEffect(() => {
      activeRef.current = true;
    });
    let navigate = reactExports.useCallback(
      (_0, ..._1) => __async(this, [_0, ..._1], function* (to, options = {}) {
        warning(activeRef.current, navigateEffectWarning);
        if (!activeRef.current)
          return;
        if (typeof to === "number") {
          router.navigate(to);
        } else {
          yield router.navigate(to, __spreadValues({ fromRouteId: id2 }, options));
        }
      }),
      [router, id2]
    );
    return navigate;
  }
  var alreadyWarned = {};
  function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
      alreadyWarned[key] = true;
      warning(false, message);
    }
  }
  reactExports.memo(DataRoutes);
  function DataRoutes({
    routes,
    future,
    state
  }) {
    return useRoutesImpl(routes, void 0, state, future);
  }
  function Route(props) {
    invariant(
      false,
      `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`
    );
  }
  function Router({
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = "POP",
    navigator: navigator2,
    static: staticProp = false
  }) {
    invariant(
      !useInRouterContext(),
      `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
    );
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = reactExports.useMemo(
      () => ({
        basename,
        navigator: navigator2,
        static: staticProp,
        future: {}
      }),
      [basename, navigator2, staticProp]
    );
    if (typeof locationProp === "string") {
      locationProp = parsePath(locationProp);
    }
    let {
      pathname = "/",
      search = "",
      hash = "",
      state = null,
      key = "default"
    } = locationProp;
    let locationContext = reactExports.useMemo(() => {
      let trailingPathname = stripBasename(pathname, basename);
      if (trailingPathname == null) {
        return null;
      }
      return {
        location: {
          pathname: trailingPathname,
          search,
          hash,
          state,
          key
        },
        navigationType
      };
    }, [basename, pathname, search, hash, state, key, navigationType]);
    warning(
      locationContext != null,
      `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
    );
    if (locationContext == null) {
      return null;
    }
    return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, { children, value: locationContext }));
  }
  function Routes({
    children,
    location
  }) {
    return useRoutes(createRoutesFromChildren(children), location);
  }
  function createRoutesFromChildren(children, parentPath = []) {
    let routes = [];
    reactExports.Children.forEach(children, (element, index2) => {
      if (!reactExports.isValidElement(element)) {
        return;
      }
      let treePath = [...parentPath, index2];
      if (element.type === reactExports.Fragment) {
        routes.push.apply(
          routes,
          createRoutesFromChildren(element.props.children, treePath)
        );
        return;
      }
      invariant(
        element.type === Route,
        `[${typeof element.type === "string" ? element.type : element.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      );
      invariant(
        !element.props.index || !element.props.children,
        "An index route cannot have child routes."
      );
      let route = {
        id: element.props.id || treePath.join("-"),
        caseSensitive: element.props.caseSensitive,
        element: element.props.element,
        Component: element.props.Component,
        index: element.props.index,
        path: element.props.path,
        loader: element.props.loader,
        action: element.props.action,
        hydrateFallbackElement: element.props.hydrateFallbackElement,
        HydrateFallback: element.props.HydrateFallback,
        errorElement: element.props.errorElement,
        ErrorBoundary: element.props.ErrorBoundary,
        hasErrorBoundary: element.props.hasErrorBoundary === true || element.props.ErrorBoundary != null || element.props.errorElement != null,
        shouldRevalidate: element.props.shouldRevalidate,
        handle: element.props.handle,
        lazy: element.props.lazy
      };
      if (element.props.children) {
        route.children = createRoutesFromChildren(
          element.props.children,
          treePath
        );
      }
      routes.push(route);
    });
    return routes;
  }
  var defaultMethod = "get";
  var defaultEncType = "application/x-www-form-urlencoded";
  function isHtmlElement(object) {
    return object != null && typeof object.tagName === "string";
  }
  function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
  }
  function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
  }
  function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
  }
  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }
  function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event);
  }
  var _formDataSupportsSubmitter = null;
  function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) {
      try {
        new FormData(
          document.createElement("form"),
          // @ts-expect-error if FormData supports the submitter parameter, this will throw
          0
        );
        _formDataSupportsSubmitter = false;
      } catch (e) {
        _formDataSupportsSubmitter = true;
      }
    }
    return _formDataSupportsSubmitter;
  }
  var supportedFormEncTypes = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
      warning(
        false,
        `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
      );
      return null;
    }
    return encType;
  }
  function getFormSubmissionInfo(target, basename) {
    let method;
    let action;
    let encType;
    let formData;
    let body;
    if (isFormElement(target)) {
      let attr = target.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(
          `Cannot submit a <button> or <input type="submit"> without a <form>`
        );
      }
      let attr = target.getAttribute("formaction") || form.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
      method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
      encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
      formData = new FormData(form, target);
      if (!isFormDataSubmitterSupported()) {
        let { name, type, value } = target;
        if (type === "image") {
          let prefix = name ? `${name}.` : "";
          formData.append(`${prefix}x`, "0");
          formData.append(`${prefix}y`, "0");
        } else if (name) {
          formData.append(name, value);
        }
      }
    } else if (isHtmlElement(target)) {
      throw new Error(
        `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
      );
    } else {
      method = defaultMethod;
      action = null;
      encType = defaultEncType;
      body = target;
    }
    if (formData && encType === "text/plain") {
      body = formData;
      formData = void 0;
    }
    return { action, method: method.toLowerCase(), encType, formData, body };
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  function invariant2(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
      throw new Error(message);
    }
  }
  function singleFetchUrl(reqUrl, basename, extension) {
    let url = typeof reqUrl === "string" ? new URL(
      reqUrl,
      // This can be called during the SSR flow via PrefetchPageLinksImpl so
      // don't assume window is available
      typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
    ) : reqUrl;
    if (url.pathname === "/") {
      url.pathname = `_root.${extension}`;
    } else if (basename && stripBasename(url.pathname, basename) === "/") {
      url.pathname = `${basename.replace(/\/$/, "")}/_root.${extension}`;
    } else {
      url.pathname = `${url.pathname.replace(/\/$/, "")}.${extension}`;
    }
    return url;
  }
  function loadRouteModule(route, routeModulesCache) {
    return __async(this, null, function* () {
      if (route.id in routeModulesCache) {
        return routeModulesCache[route.id];
      }
      try {
        let routeModule = yield __vitePreload(() => import(
          /* @vite-ignore */
          /* webpackIgnore: true */
          route.module
        ), false ? "__VITE_PRELOAD__" : void 0);
        routeModulesCache[route.id] = routeModule;
        return routeModule;
      } catch (error) {
        console.error(
          `Error loading route module \`${route.module}\`, reloading page...`
        );
        console.error(error);
        if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
        void 0) {
          throw error;
        }
        window.location.reload();
        return new Promise(() => {
        });
      }
    });
  }
  function isPageLinkDescriptor(object) {
    return object != null && typeof object.page === "string";
  }
  function isHtmlLinkDescriptor(object) {
    if (object == null) {
      return false;
    }
    if (object.href == null) {
      return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
    }
    return typeof object.rel === "string" && typeof object.href === "string";
  }
  function getKeyedPrefetchLinks(matches, manifest, routeModules) {
    return __async(this, null, function* () {
      let links = yield Promise.all(
        matches.map((match) => __async(this, null, function* () {
          let route = manifest.routes[match.route.id];
          if (route) {
            let mod = yield loadRouteModule(route, routeModules);
            return mod.links ? mod.links() : [];
          }
          return [];
        }))
      );
      return dedupeLinkDescriptors(
        links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
          (link) => link.rel === "stylesheet" ? __spreadProps(__spreadValues({}, link), { rel: "prefetch", as: "style" }) : __spreadProps(__spreadValues({}, link), { rel: "prefetch" })
        )
      );
    });
  }
  function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
    let isNew = (match, index2) => {
      if (!currentMatches[index2])
        return true;
      return match.route.id !== currentMatches[index2].route.id;
    };
    let matchPathChanged = (match, index2) => {
      var _a;
      return (
        // param change, /users/123 -> /users/456
        currentMatches[index2].pathname !== match.pathname || // splat param changed, which is not present in match.path
        // e.g. /files/images/avatar.jpg -> files/finances.xls
        ((_a = currentMatches[index2].route.path) == null ? void 0 : _a.endsWith("*")) && currentMatches[index2].params["*"] !== match.params["*"]
      );
    };
    if (mode === "assets") {
      return nextMatches.filter(
        (match, index2) => isNew(match, index2) || matchPathChanged(match, index2)
      );
    }
    if (mode === "data") {
      return nextMatches.filter((match, index2) => {
        var _a;
        let manifestRoute = manifest.routes[match.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return false;
        }
        if (isNew(match, index2) || matchPathChanged(match, index2)) {
          return true;
        }
        if (match.route.shouldRevalidate) {
          let routeChoice = match.route.shouldRevalidate({
            currentUrl: new URL(
              location.pathname + location.search + location.hash,
              window.origin
            ),
            currentParams: ((_a = currentMatches[0]) == null ? void 0 : _a.params) || {},
            nextUrl: new URL(page, window.origin),
            nextParams: match.params,
            defaultShouldRevalidate: true
          });
          if (typeof routeChoice === "boolean") {
            return routeChoice;
          }
        }
        return true;
      });
    }
    return [];
  }
  function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
    return dedupeHrefs(
      matches.map((match) => {
        let route = manifest.routes[match.route.id];
        if (!route)
          return [];
        let hrefs = [route.module];
        if (route.clientActionModule) {
          hrefs = hrefs.concat(route.clientActionModule);
        }
        if (route.clientLoaderModule) {
          hrefs = hrefs.concat(route.clientLoaderModule);
        }
        if (includeHydrateFallback && route.hydrateFallbackModule) {
          hrefs = hrefs.concat(route.hydrateFallbackModule);
        }
        if (route.imports) {
          hrefs = hrefs.concat(route.imports);
        }
        return hrefs;
      }).flat(1)
    );
  }
  function dedupeHrefs(hrefs) {
    return [...new Set(hrefs)];
  }
  function sortKeys(obj) {
    let sorted = {};
    let keys = Object.keys(obj).sort();
    for (let key of keys) {
      sorted[key] = obj[key];
    }
    return sorted;
  }
  function dedupeLinkDescriptors(descriptors, preloads) {
    let set = /* @__PURE__ */ new Set();
    let preloadsSet = new Set(preloads);
    return descriptors.reduce((deduped, descriptor) => {
      let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
      if (alreadyModulePreload) {
        return deduped;
      }
      let key = JSON.stringify(sortKeys(descriptor));
      if (!set.has(key)) {
        set.add(key);
        deduped.push({ key, link: descriptor });
      }
      return deduped;
    }, []);
  }
  function useDataRouterContext2() {
    let context = reactExports.useContext(DataRouterContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterContext.Provider> element"
    );
    return context;
  }
  function useDataRouterStateContext() {
    let context = reactExports.useContext(DataRouterStateContext);
    invariant2(
      context,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    );
    return context;
  }
  var FrameworkContext = reactExports.createContext(void 0);
  FrameworkContext.displayName = "FrameworkContext";
  function useFrameworkContext() {
    let context = reactExports.useContext(FrameworkContext);
    invariant2(
      context,
      "You must render this element inside a <HydratedRouter> element"
    );
    return context;
  }
  function usePrefetchBehavior(prefetch, theirElementProps) {
    let frameworkContext = reactExports.useContext(FrameworkContext);
    let [maybePrefetch, setMaybePrefetch] = reactExports.useState(false);
    let [shouldPrefetch, setShouldPrefetch] = reactExports.useState(false);
    let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
    let ref = reactExports.useRef(null);
    reactExports.useEffect(() => {
      if (prefetch === "render") {
        setShouldPrefetch(true);
      }
      if (prefetch === "viewport") {
        let callback = (entries) => {
          entries.forEach((entry) => {
            setShouldPrefetch(entry.isIntersecting);
          });
        };
        let observer = new IntersectionObserver(callback, { threshold: 0.5 });
        if (ref.current)
          observer.observe(ref.current);
        return () => {
          observer.disconnect();
        };
      }
    }, [prefetch]);
    reactExports.useEffect(() => {
      if (maybePrefetch) {
        let id2 = setTimeout(() => {
          setShouldPrefetch(true);
        }, 100);
        return () => {
          clearTimeout(id2);
        };
      }
    }, [maybePrefetch]);
    let setIntent = () => {
      setMaybePrefetch(true);
    };
    let cancelIntent = () => {
      setMaybePrefetch(false);
      setShouldPrefetch(false);
    };
    if (!frameworkContext) {
      return [false, ref, {}];
    }
    if (prefetch !== "intent") {
      return [shouldPrefetch, ref, {}];
    }
    return [
      shouldPrefetch,
      ref,
      {
        onFocus: composeEventHandlers(onFocus, setIntent),
        onBlur: composeEventHandlers(onBlur, cancelIntent),
        onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
        onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
        onTouchStart: composeEventHandlers(onTouchStart, setIntent)
      }
    ];
  }
  function composeEventHandlers(theirHandler, ourHandler) {
    return (event) => {
      theirHandler && theirHandler(event);
      if (!event.defaultPrevented) {
        ourHandler(event);
      }
    };
  }
  function PrefetchPageLinks(_a) {
    var _b = _a, { page } = _b, linkProps = __objRest(_b, ["page"]);
    let { router } = useDataRouterContext2();
    let matches = reactExports.useMemo(
      () => matchRoutes(router.routes, page, router.basename),
      [router.routes, page, router.basename]
    );
    if (!matches) {
      return null;
    }
    return /* @__PURE__ */ reactExports.createElement(PrefetchPageLinksImpl, __spreadValues({ page, matches }, linkProps));
  }
  function useKeyedPrefetchLinks(matches) {
    let { manifest, routeModules } = useFrameworkContext();
    let [keyedPrefetchLinks, setKeyedPrefetchLinks] = reactExports.useState([]);
    reactExports.useEffect(() => {
      let interrupted = false;
      void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
        (links) => {
          if (!interrupted) {
            setKeyedPrefetchLinks(links);
          }
        }
      );
      return () => {
        interrupted = true;
      };
    }, [matches, manifest, routeModules]);
    return keyedPrefetchLinks;
  }
  function PrefetchPageLinksImpl(_c) {
    var _d = _c, {
      page,
      matches: nextMatches
    } = _d, linkProps = __objRest(_d, [
      "page",
      "matches"
    ]);
    let location = useLocation();
    let { manifest, routeModules } = useFrameworkContext();
    let { basename } = useDataRouterContext2();
    let { loaderData, matches } = useDataRouterStateContext();
    let newMatchesForData = reactExports.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "data"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let newMatchesForAssets = reactExports.useMemo(
      () => getNewMatchesForLinks(
        page,
        nextMatches,
        matches,
        manifest,
        location,
        "assets"
      ),
      [page, nextMatches, matches, manifest, location]
    );
    let dataHrefs = reactExports.useMemo(() => {
      if (page === location.pathname + location.search + location.hash) {
        return [];
      }
      let routesParams = /* @__PURE__ */ new Set();
      let foundOptOutRoute = false;
      nextMatches.forEach((m2) => {
        var _a;
        let manifestRoute = manifest.routes[m2.route.id];
        if (!manifestRoute || !manifestRoute.hasLoader) {
          return;
        }
        if (!newMatchesForData.some((m22) => m22.route.id === m2.route.id) && m2.route.id in loaderData && ((_a = routeModules[m2.route.id]) == null ? void 0 : _a.shouldRevalidate)) {
          foundOptOutRoute = true;
        } else if (manifestRoute.hasClientLoader) {
          foundOptOutRoute = true;
        } else {
          routesParams.add(m2.route.id);
        }
      });
      if (routesParams.size === 0) {
        return [];
      }
      let url = singleFetchUrl(page, basename, "data");
      if (foundOptOutRoute && routesParams.size > 0) {
        url.searchParams.set(
          "_routes",
          nextMatches.filter((m2) => routesParams.has(m2.route.id)).map((m2) => m2.route.id).join(",")
        );
      }
      return [url.pathname + url.search];
    }, [
      basename,
      loaderData,
      location,
      manifest,
      newMatchesForData,
      nextMatches,
      page,
      routeModules
    ]);
    let moduleHrefs = reactExports.useMemo(
      () => getModuleLinkHrefs(newMatchesForAssets, manifest),
      [newMatchesForAssets, manifest]
    );
    let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
    return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ reactExports.createElement("link", __spreadValues({ key: href, rel: "prefetch", as: "fetch", href }, linkProps))), moduleHrefs.map((href) => /* @__PURE__ */ reactExports.createElement("link", __spreadValues({ key: href, rel: "modulepreload", href }, linkProps))), keyedPrefetchLinks.map(({ key, link }) => (
      // these don't spread `linkProps` because they are full link descriptors
      // already with their own props
      /* @__PURE__ */ reactExports.createElement("link", __spreadValues({ key, nonce: linkProps.nonce }, link))
    )));
  }
  function mergeRefs(...refs) {
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }
  var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
  try {
    if (isBrowser) {
      window.__reactRouterVersion = // @ts-expect-error
      "7.8.0";
    }
  } catch (e) {
  }
  function BrowserRouter({
    basename,
    children,
    window: window2
  }) {
    let historyRef = reactExports.useRef();
    if (historyRef.current == null) {
      historyRef.current = createBrowserHistory({ window: window2, v5Compat: true });
    }
    let history = historyRef.current;
    let [state, setStateImpl] = reactExports.useState({
      action: history.action,
      location: history.location
    });
    let setState = reactExports.useCallback(
      (newState) => {
        reactExports.startTransition(() => setStateImpl(newState));
      },
      [setStateImpl]
    );
    reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
    return /* @__PURE__ */ reactExports.createElement(
      Router,
      {
        basename,
        children,
        location: state.location,
        navigationType: state.action,
        navigator: history
      }
    );
  }
  var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  var Link = reactExports.forwardRef(
    function LinkWithRef(_e, forwardedRef) {
      var _f = _e, {
        onClick,
        discover = "render",
        prefetch = "none",
        relative,
        reloadDocument,
        replace: replace2,
        state,
        target,
        to,
        preventScrollReset,
        viewTransition
      } = _f, rest = __objRest(_f, [
        "onClick",
        "discover",
        "prefetch",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "viewTransition"
      ]);
      let { basename } = reactExports.useContext(NavigationContext);
      let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
      let absoluteHref;
      let isExternal = false;
      if (typeof to === "string" && isAbsolute) {
        absoluteHref = to;
        if (isBrowser) {
          try {
            let currentUrl = new URL(window.location.href);
            let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
            let path = stripBasename(targetUrl.pathname, basename);
            if (targetUrl.origin === currentUrl.origin && path != null) {
              to = path + targetUrl.search + targetUrl.hash;
            } else {
              isExternal = true;
            }
          } catch (e) {
            warning(
              false,
              `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
            );
          }
        }
      }
      let href = useHref(to, { relative });
      let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
        prefetch,
        rest
      );
      let internalOnClick = useLinkClickHandler(to, {
        replace: replace2,
        state,
        target,
        preventScrollReset,
        relative,
        viewTransition
      });
      function handleClick(event) {
        if (onClick)
          onClick(event);
        if (!event.defaultPrevented) {
          internalOnClick(event);
        }
      }
      let link = (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        /* @__PURE__ */ reactExports.createElement(
          "a",
          __spreadProps(__spreadValues(__spreadValues({}, rest), prefetchHandlers), {
            href: absoluteHref || href,
            onClick: isExternal || reloadDocument ? onClick : handleClick,
            ref: mergeRefs(forwardedRef, prefetchRef),
            target,
            "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
          })
        )
      );
      return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, link, /* @__PURE__ */ reactExports.createElement(PrefetchPageLinks, { page: href })) : link;
    }
  );
  Link.displayName = "Link";
  var NavLink = reactExports.forwardRef(
    function NavLinkWithRef(_g, ref) {
      var _h = _g, {
        "aria-current": ariaCurrentProp = "page",
        caseSensitive = false,
        className: classNameProp = "",
        end = false,
        style: styleProp,
        to,
        viewTransition,
        children
      } = _h, rest = __objRest(_h, [
        "aria-current",
        "caseSensitive",
        "className",
        "end",
        "style",
        "to",
        "viewTransition",
        "children"
      ]);
      let path = useResolvedPath(to, { relative: rest.relative });
      let location = useLocation();
      let routerState = reactExports.useContext(DataRouterStateContext);
      let { navigator: navigator2, basename } = reactExports.useContext(NavigationContext);
      let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useViewTransitionState(path) && viewTransition === true;
      let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
      let locationPathname = location.pathname;
      let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
      if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
      }
      if (nextLocationPathname && basename) {
        nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
      }
      const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
      let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
      let renderProps = {
        isActive,
        isPending,
        isTransitioning
      };
      let ariaCurrent = isActive ? ariaCurrentProp : void 0;
      let className;
      if (typeof classNameProp === "function") {
        className = classNameProp(renderProps);
      } else {
        className = [
          classNameProp,
          isActive ? "active" : null,
          isPending ? "pending" : null,
          isTransitioning ? "transitioning" : null
        ].filter(Boolean).join(" ");
      }
      let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
      return /* @__PURE__ */ reactExports.createElement(
        Link,
        __spreadProps(__spreadValues({}, rest), {
          "aria-current": ariaCurrent,
          className,
          ref,
          style,
          to,
          viewTransition
        }),
        typeof children === "function" ? children(renderProps) : children
      );
    }
  );
  NavLink.displayName = "NavLink";
  var Form = reactExports.forwardRef(
    (_i, forwardedRef) => {
      var _j = _i, {
        discover = "render",
        fetcherKey,
        navigate,
        reloadDocument,
        replace: replace2,
        state,
        method = defaultMethod,
        action,
        onSubmit,
        relative,
        preventScrollReset,
        viewTransition
      } = _j, props = __objRest(_j, [
        "discover",
        "fetcherKey",
        "navigate",
        "reloadDocument",
        "replace",
        "state",
        "method",
        "action",
        "onSubmit",
        "relative",
        "preventScrollReset",
        "viewTransition"
      ]);
      let submit = useSubmit();
      let formAction = useFormAction(action, { relative });
      let formMethod = method.toLowerCase() === "get" ? "get" : "post";
      let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
      let submitHandler = (event) => {
        onSubmit && onSubmit(event);
        if (event.defaultPrevented)
          return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
        submit(submitter || event.currentTarget, {
          fetcherKey,
          method: submitMethod,
          navigate,
          replace: replace2,
          state,
          relative,
          preventScrollReset,
          viewTransition
        });
      };
      return /* @__PURE__ */ reactExports.createElement(
        "form",
        __spreadProps(__spreadValues({
          ref: forwardedRef,
          method: formMethod,
          action: formAction,
          onSubmit: reloadDocument ? onSubmit : submitHandler
        }, props), {
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        })
      );
    }
  );
  Form.displayName = "Form";
  function getDataRouterConsoleError2(hookName) {
    return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function useDataRouterContext3(hookName) {
    let ctx = reactExports.useContext(DataRouterContext);
    invariant(ctx, getDataRouterConsoleError2(hookName));
    return ctx;
  }
  function useLinkClickHandler(to, {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    viewTransition
  } = {}) {
    let navigate = useNavigate();
    let location = useLocation();
    let path = useResolvedPath(to, { relative });
    return reactExports.useCallback(
      (event) => {
        if (shouldProcessLinkClick(event, target)) {
          event.preventDefault();
          let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
          navigate(to, {
            replace: replace2,
            state,
            preventScrollReset,
            relative,
            viewTransition
          });
        }
      },
      [
        location,
        navigate,
        path,
        replaceProp,
        state,
        target,
        to,
        preventScrollReset,
        relative,
        viewTransition
      ]
    );
  }
  var fetcherId = 0;
  var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
  function useSubmit() {
    let { router } = useDataRouterContext3(
      "useSubmit"
      /* UseSubmit */
    );
    let { basename } = reactExports.useContext(NavigationContext);
    let currentRouteId = useRouteId();
    return reactExports.useCallback(
      (_0, ..._1) => __async(this, [_0, ..._1], function* (target, options = {}) {
        let { action, method, encType, formData, body } = getFormSubmissionInfo(
          target,
          basename
        );
        if (options.navigate === false) {
          let key = options.fetcherKey || getUniqueFetcherId();
          yield router.fetch(key, currentRouteId, options.action || action, {
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            flushSync: options.flushSync
          });
        } else {
          yield router.navigate(options.action || action, {
            preventScrollReset: options.preventScrollReset,
            formData,
            body,
            formMethod: options.method || method,
            formEncType: options.encType || encType,
            replace: options.replace,
            state: options.state,
            fromRouteId: currentRouteId,
            flushSync: options.flushSync,
            viewTransition: options.viewTransition
          });
        }
      }),
      [router, basename, currentRouteId]
    );
  }
  function useFormAction(action, { relative } = {}) {
    let { basename } = reactExports.useContext(NavigationContext);
    let routeContext = reactExports.useContext(RouteContext);
    invariant(routeContext, "useFormAction must be used inside a RouteContext");
    let [match] = routeContext.matches.slice(-1);
    let path = __spreadValues({}, useResolvedPath(action ? action : ".", { relative }));
    let location = useLocation();
    if (action == null) {
      path.search = location.search;
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      let hasNakedIndexParam = indexValues.some((v2) => v2 === "");
      if (hasNakedIndexParam) {
        params.delete("index");
        indexValues.filter((v2) => v2).forEach((v2) => params.append("index", v2));
        let qs = params.toString();
        path.search = qs ? `?${qs}` : "";
      }
    }
    if ((!action || action === ".") && match.route.index) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    return createPath(path);
  }
  function useViewTransitionState(to, { relative } = {}) {
    let vtContext = reactExports.useContext(ViewTransitionContext);
    invariant(
      vtContext != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let { basename } = useDataRouterContext3(
      "useViewTransitionState"
      /* useViewTransitionState */
    );
    let path = useResolvedPath(to, { relative });
    if (!vtContext.isTransitioning) {
      return false;
    }
    let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
  }
  const translations = {
    en: {
      nav: {
        home: "Home",
        solutions: "Solutions",
        whyUs: "Why Us",
        aiAnalysis: "AI Analysis",
        contact: "Contact",
        resources: "Resources",
        joinPanel: "Join Our Panel",
        signIn: "Sign In",
        panelBook: "Panel Book",
        esomar37: "ESOMAR 37"
      },
      hero: {
        title: "High-Quality Global Survey Panel",
        subtitle: "Scale your market research with diverse, verified respondents and seamless survey operations.",
        description: "We deliver fast, reliable, and compliant survey distribution worldwide.",
        dashboard: {
          online: "Online",
          activeSurveys: "Active Surveys",
          availableRespondents: "Available Respondents",
          responseRate: "Response Rate",
          globalCoverage: "Global Coverage",
          countries: "Countries",
          languages: "Languages",
          industries: "Industries",
          fraudDetection: "Fraud Detection",
          memberSatisfaction: "Member Satisfaction",
          comingSoon: "Coming Soon",
          aiAnalysis: "AI Analysis",
          aiDescription: "Transform your survey data into actionable insights with our advanced AI analysis tools designed specifically for market research.",
          createSurvey: "Create Survey",
          reports: "Reports",
          connected: "Connected",
          learnMore: "Learn More"
        }
      },
      features: {
        title: "Why Trust Us",
        badge: "Trusted by 100+ Companies",
        accuracyRate: "Accuracy Rate",
        activeRespondents: "Active Respondents",
        countriesCovered: "Countries Covered",
        features: [
          {
            icon: "lightning",
            title: "Response Fast",
            description: "Get qualified respondents in hours, not days. Our AI-powered matching system ensures rapid response times."
          },
          {
            icon: "shield",
            title: "Quality Assured",
            description: "Rigorous quality control with double opt-in verification and fraud detection ensures reliable data."
          },
          {
            icon: "target",
            title: "Target Coverage",
            description: "Precise demographic, professional, and behavioral targeting for your specific survey needs."
          },
          {
            icon: "globe",
            title: "Countries Coverage",
            description: "Global reach across 30+ countries with localized respondent pools and multi-language support."
          }
        ]
      },
      solutions: {
        title: "Industry-Specific Solutions",
        subtitle: "Tailored research solutions for 20+ industries with specialized respondent pools",
        completeCoverage: "Complete Industry Coverage",
        servingIndustries: "Serving 20+ industries with specialized respondent pools"
      },
      trustQuality: {
        title: "Trust & Quality",
        subtitle: "Precise, fast and cost-effective. Our panel members are satisfied and motivated, delivering excellent response quality.",
        ourValues: "Our Values",
        features: [
          {
            icon: "check",
            title: "Double Opt-in Verification",
            description: "All members are verified through double opt-in process, ensuring genuine and engaged respondents.",
            highlight: "60% referrals"
          },
          {
            icon: "users",
            title: "Highly Profiled Members",
            description: "Detailed demographic, professional, and behavioral profiling for precise targeting.",
            highlight: "0.3% fraud rate"
          },
          {
            icon: "clock",
            title: "Live Support",
            description: "Round-the-clock support team to ensure smooth project execution and member satisfaction.",
            highlight: "24/7 online"
          },
          {
            icon: "heart",
            title: "Member Satisfaction",
            description: "Happy and engaged members provide better quality responses and higher completion rates.",
            highlight: "98% satisfaction"
          }
        ],
        values: [
          {
            title: "Value to Customers",
            description: "Delivering exceptional research insights that drive business decisions with 95% accuracy rate and actionable recommendations"
          },
          {
            title: "Fair Reward to Members",
            description: "Ensuring our panel members are fairly compensated with competitive rates and transparent payment systems"
          },
          {
            title: "Happy Employees",
            description: "Building a team that's passionate about research and customer success with continuous learning and growth opportunities"
          }
        ]
      },
      contact: {
        title: "Ready to Get Started?",
        subtitle: "Join thousands of research teams who trust LoopX for their sample needs.",
        placeholder: "Enter your email address",
        buttonText: "Get Started",
        submitting: "Submitting...",
        thankYou: "Thank You!",
        receivedMessage: "We've received your request and will be in touch soon.",
        submitAnother: "Submit Another Request"
      },
      footer: {
        description: "AI-driven sample distribution for modern research teams.",
        copyright: "© 2025 LoopX. All rights reserved."
      },
      aiAnalysis: {
        badge: "AI-Powered Insights",
        title: "Intelligent Survey Analysis",
        subtitle: "Transform your survey data into actionable insights with our advanced AI analysis tools designed specifically for market research.",
        stats: {
          accuracy: "Accuracy Rate",
          accuracyDesc: "AI-powered quality detection",
          efficiency: "Efficiency Gain",
          efficiencyDesc: "Faster analysis turnaround",
          monitoring: "Real-time Monitoring",
          monitoringDesc: "Continuous quality assurance",
          languages: "Languages Supported",
          languagesDesc: "Multi-language analysis"
        },
        qualityAnalysis: {
          title: "Smart Data Quality Analysis",
          description: "Automatically detect and flag suspicious response patterns, ensuring data integrity and reliability.",
          benefit1: "Real-time fraud detection and prevention",
          benefit2: "Automated response pattern analysis",
          benefit3: "Quality scoring for each respondent"
        },
        trendAnalysis: {
          title: "Real-time Response Trends",
          description: "Monitor survey completion rates and response quality in real-time with predictive analytics.",
          benefit1: "Predict completion rates before launch",
          benefit2: "Identify optimal survey timing",
          benefit3: "Track response quality trends"
        },
        audienceMatching: {
          title: "AI-Driven Audience Matching",
          description: "Intelligent respondent selection based on demographic, behavioral, and contextual factors.",
          benefit1: "Precision targeting with 95%+ accuracy",
          benefit2: "Behavioral pattern recognition",
          benefit3: "Dynamic quota optimization"
        },
        sentimentAnalysis: {
          title: "Multi-language Sentiment Analysis",
          description: "Analyze emotional responses and sentiment across multiple languages and cultures.",
          benefit1: "Cross-cultural sentiment insights",
          benefit2: "Emotional response tracking",
          benefit3: "Cultural context understanding"
        },
        predictiveInsights: {
          title: "Predictive Market Insights",
          description: "Leverage historical data to predict market trends and consumer behavior patterns.",
          benefit1: "Market trend forecasting",
          benefit2: "Consumer behavior prediction",
          benefit3: "Risk assessment and mitigation"
        },
        quotaManagement: {
          title: "Intelligent Quota Management",
          description: "Automatically balance sample distribution across different demographic segments.",
          benefit1: "Real-time quota monitoring",
          benefit2: "Automatic sample rebalancing",
          benefit3: "Demographic representation optimization"
        },
        cta: {
          title: "Ready to Experience AI-Powered Survey Analysis?",
          description: "Join leading research teams who are already leveraging our AI capabilities to gain deeper insights faster.",
          demoButton: "Request Demo",
          contactButton: "Contact Sales"
        }
      }
    },
    zh: {
      nav: {
        home: "首页",
        solutions: "解决方案",
        whyUs: "为什么选择我们",
        aiAnalysis: "AI分析",
        contact: "联系我们",
        resources: "资源",
        joinPanel: "加入我们的面板",
        signIn: "登录",
        panelBook: "面板手册",
        esomar37: "ESOMAR 37"
      },
      hero: {
        title: "高质量全球调研面板",
        subtitle: "通过多样化的验证受访者和无缝调研运营扩展您的市场研究。",
        description: "我们在全球范围内提供快速、可靠和合规的调研分发服务。",
        dashboard: {
          online: "在线",
          activeSurveys: "活跃调研",
          availableRespondents: "可用受访者",
          responseRate: "响应率",
          globalCoverage: "全球覆盖",
          countries: "国家",
          languages: "语言",
          industries: "行业",
          fraudDetection: "欺诈检测",
          memberSatisfaction: "成员满意度",
          comingSoon: "即将推出",
          aiAnalysis: "AI分析",
          aiDescription: "通过专为市场研究设计的高级AI分析工具，将您的调研数据转化为可操作的洞察。",
          createSurvey: "创建调研",
          reports: "查看报告",
          connected: "已连接",
          learnMore: "了解更多"
        }
      },
      features: {
        title: "为什么信任我们",
        badge: "100+ 公司信赖",
        accuracyRate: "准确率",
        activeRespondents: "活跃受访者",
        countriesCovered: "覆盖国家",
        features: [
          {
            icon: "lightning",
            title: "快速响应",
            description: "在数小时内获得合格受访者，而非数天。我们的AI驱动匹配系统确保快速响应时间。"
          },
          {
            icon: "shield",
            title: "质量保证",
            description: "严格的质量控制，包括双重确认验证和欺诈检测，确保可靠数据。"
          },
          {
            icon: "target",
            title: "精准覆盖",
            description: "精确的人口统计、专业和行为定位，满足您的特定调研需求。"
          },
          {
            icon: "globe",
            title: "国家覆盖",
            description: "覆盖30多个国家的全球影响力，拥有本地化受访者池和多语言支持。"
          }
        ]
      },
      solutions: {
        title: "行业特定解决方案",
        subtitle: "为20多个行业量身定制的研究解决方案，拥有专业受访者池",
        completeCoverage: "完整行业覆盖",
        servingIndustries: "为20多个行业提供专业受访者池服务"
      },
      trustQuality: {
        title: "信任与质量",
        subtitle: "精确、快速且经济高效。我们的面板成员满意且积极，提供出色的响应质量。",
        ourValues: "我们的价值观",
        features: [
          {
            icon: "check",
            title: "双重确认验证",
            description: "所有成员都通过双重确认流程进行验证，确保真实和积极参与的受访者。",
            highlight: "60% 推荐率"
          },
          {
            icon: "users",
            title: "高度档案化成员",
            description: "详细的人口统计、专业和行为档案，实现精准定位。",
            highlight: "0.3% 欺诈率"
          },
          {
            icon: "clock",
            title: "实时支持",
            description: "全天候支持团队确保项目顺利执行和成员满意度。",
            highlight: "24/7 在线"
          },
          {
            icon: "heart",
            title: "成员满意度",
            description: "快乐和积极参与的成员提供更好的质量响应和更高的完成率。",
            highlight: "98% 满意度"
          }
        ],
        values: [
          {
            title: "为客户创造价值",
            description: "提供卓越的研究洞察，以95%的准确率和可操作的建议推动商业决策"
          },
          {
            title: "公平奖励成员",
            description: "确保我们的面板成员通过竞争性费率和透明支付系统获得公平补偿"
          },
          {
            title: "快乐的员工",
            description: "建立一支对研究和客户成功充满热情，并拥有持续学习和成长机会的团队"
          }
        ]
      },
      contact: {
        title: "准备开始了吗？",
        subtitle: "加入数千个信任LoopX样本需求的研究团队。",
        placeholder: "输入您的邮箱地址",
        buttonText: "开始使用",
        submitting: "提交中...",
        thankYou: "谢谢！",
        receivedMessage: "我们已收到您的请求，将很快与您联系。",
        submitAnother: "提交另一个请求"
      },
      footer: {
        description: "面向现代研究团队的AI驱动样本分发。",
        copyright: "© 2025 LoopX. 保留所有权利。"
      },
      aiAnalysis: {
        badge: "AI驱动洞察",
        title: "智能调研分析",
        subtitle: "通过专为市场研究设计的高级AI分析工具，将您的调研数据转化为可操作的洞察。",
        stats: {
          accuracy: "准确率",
          accuracyDesc: "AI驱动的质量检测",
          efficiency: "效率提升",
          efficiencyDesc: "更快的分析周转",
          monitoring: "实时监控",
          monitoringDesc: "持续质量保证",
          languages: "支持语言",
          languagesDesc: "多语言分析"
        },
        qualityAnalysis: {
          title: "智能数据质量分析",
          description: "自动检测和标记可疑的回答模式，确保数据完整性和可靠性。",
          benefit1: "实时欺诈检测和预防",
          benefit2: "自动化回答模式分析",
          benefit3: "每个受访者的质量评分"
        },
        trendAnalysis: {
          title: "实时回答趋势",
          description: "通过预测分析实时监控调研完成率和回答质量。",
          benefit1: "在启动前预测完成率",
          benefit2: "识别最佳调研时机",
          benefit3: "跟踪回答质量趋势"
        },
        audienceMatching: {
          title: "AI驱动受众匹配",
          description: "基于人口统计、行为和上下文因素的智能受访者选择。",
          benefit1: "95%+精度的精准定位",
          benefit2: "行为模式识别",
          benefit3: "动态配额优化"
        },
        sentimentAnalysis: {
          title: "多语言情感分析",
          description: "分析多种语言和文化中的情感回答和情感倾向。",
          benefit1: "跨文化情感洞察",
          benefit2: "情感回答跟踪",
          benefit3: "文化背景理解"
        },
        predictiveInsights: {
          title: "预测性市场洞察",
          description: "利用历史数据预测市场趋势和消费者行为模式。",
          benefit1: "市场趋势预测",
          benefit2: "消费者行为预测",
          benefit3: "风险评估和缓解"
        },
        quotaManagement: {
          title: "智能配额管理",
          description: "自动平衡不同人口统计段的样本分布。",
          benefit1: "实时配额监控",
          benefit2: "自动样本重新平衡",
          benefit3: "人口统计代表性优化"
        },
        cta: {
          title: "准备体验AI驱动的调研分析？",
          description: "加入已经利用我们AI能力更快获得深度洞察的领先研究团队。",
          demoButton: "申请演示",
          contactButton: "联系销售"
        }
      }
    },
    fr: {
      nav: {
        home: "Accueil",
        solutions: "Solutions",
        whyUs: "Pourquoi Nous",
        aiAnalysis: "Analyse IA",
        contact: "Contact",
        resources: "Ressources",
        joinPanel: "Rejoindre notre Panel",
        signIn: "Se connecter",
        panelBook: "Livre du Panel",
        esomar37: "ESOMAR 37"
      },
      hero: {
        title: "Panel d'Enquêtes Global de Haute Qualité",
        subtitle: "Développez vos études de marché avec des répondants diversifiés et vérifiés et des opérations d'enquête transparentes.",
        description: "Nous fournissons une distribution d'enquêtes rapide, fiable et conforme dans le monde entier.",
        dashboard: {
          online: "En ligne",
          activeSurveys: "Enquêtes Actives",
          availableRespondents: "Répondants Disponibles",
          responseRate: "Taux de Réponse",
          globalCoverage: "Couverture Mondiale",
          countries: "Pays",
          languages: "Langues",
          industries: "Secteurs",
          fraudDetection: "Détection de Fraude",
          memberSatisfaction: "Satisfaction des Membres",
          comingSoon: "Prochainement",
          aiAnalysis: "Analyse IA",
          aiDescription: "Transformez vos données d'enquête en insights exploitables avec nos outils d'analyse IA avancés conçus spécifiquement pour les études de marché.",
          createSurvey: "Créer Enquête",
          reports: "Rapports",
          connected: "Connecté",
          learnMore: "En savoir plus"
        }
      },
      features: {
        title: "Pourquoi Nous Faire Confiance",
        badge: "Approuvé par 100+ Entreprises",
        accuracyRate: "Taux de Précision",
        activeRespondents: "Répondants Actifs",
        countriesCovered: "Pays Couverts",
        features: [
          {
            icon: "lightning",
            title: "Réponse Rapide",
            description: "Obtenez des répondants qualifiés en heures, pas en jours. Notre système de correspondance alimenté par l'IA garantit des temps de réponse rapides."
          },
          {
            icon: "shield",
            title: "Qualité Assurée",
            description: "Contrôle qualité rigoureux avec vérification double opt-in et détection de fraude garantit des données fiables."
          },
          {
            icon: "target",
            title: "Couverture Ciblée",
            description: "Ciblage précis démographique, professionnel et comportemental pour vos besoins d'enquête spécifiques."
          },
          {
            icon: "globe",
            title: "Couverture des Pays",
            description: "Portée mondiale dans plus de 30 pays avec des pools de répondants localisés et support multilingue."
          }
        ]
      },
      solutions: {
        title: "Solutions Spécifiques à l'Industrie",
        subtitle: "Solutions de recherche sur mesure pour 20+ industries avec des pools de répondants spécialisés",
        completeCoverage: "Couverture Complète de l'Industrie",
        servingIndustries: "Servir 20+ industries avec des pools de répondants spécialisés"
      },
      trustQuality: {
        title: "Confiance et Qualité",
        subtitle: "Précis, rapide et rentable. Nos membres du panel sont satisfaits et motivés, offrant une excellente qualité de réponse.",
        ourValues: "Nos Valeurs",
        features: [
          {
            icon: "check",
            title: "Vérification Double Opt-in",
            description: "Tous les membres sont vérifiés par processus double opt-in, garantissant des répondants authentiques et engagés.",
            highlight: "60% recommandations"
          },
          {
            icon: "users",
            title: "Membres Hautement Profilés",
            description: "Profilage détaillé démographique, professionnel et comportemental pour un ciblage précis.",
            highlight: "0.3% taux de fraude"
          },
          {
            icon: "clock",
            title: "Support en Direct",
            description: "Équipe de support 24h/24 pour assurer l'exécution fluide des projets et la satisfaction des membres.",
            highlight: "24/7 en ligne"
          },
          {
            icon: "heart",
            title: "Satisfaction des Membres",
            description: "Des membres heureux et engagés fournissent des réponses de meilleure qualité et des taux de completion plus élevés.",
            highlight: "98% satisfaction"
          }
        ],
        values: [
          {
            title: "Valeur pour les Clients",
            description: "Fournir des insights de recherche exceptionnels qui stimulent les décisions commerciales avec un taux de précision de 95% et des recommandations actionnables"
          },
          {
            title: "Récompense Équitable aux Membres",
            description: "S'assurer que nos membres du panel sont équitablement compensés avec des tarifs compétitifs et des systèmes de paiement transparents"
          },
          {
            title: "Employés Heureux",
            description: "Construire une équipe passionnée par la recherche et le succès client avec des opportunités d'apprentissage et de croissance continues"
          }
        ]
      },
      contact: {
        title: "Prêt à Commencer ?",
        subtitle: "Rejoignez des milliers d'équipes de recherche qui font confiance à LoopX pour leurs besoins d'échantillons.",
        placeholder: "Entrez votre adresse e-mail",
        buttonText: "Commencer",
        submitting: "Soumission...",
        thankYou: "Merci !",
        receivedMessage: "Nous avons reçu votre demande et vous contacterons bientôt.",
        submitAnother: "Soumettre une Autre Demande"
      },
      footer: {
        description: "Distribution d'échantillons pilotée par l'IA pour les équipes de recherche modernes.",
        copyright: "© 2025 LoopX. Tous droits réservés."
      },
      aiAnalysis: {
        badge: "Insights Pilotés par l'IA",
        title: "Analyse d'Enquêtes Intelligente",
        subtitle: "Transformez vos données d'enquête en insights exploitables avec nos outils d'analyse IA avancés conçus spécifiquement pour les études de marché.",
        stats: {
          accuracy: "Taux de Précision",
          accuracyDesc: "Détection de qualité pilotée par l'IA",
          efficiency: "Gain d'Efficacité",
          efficiencyDesc: "Analyse plus rapide",
          monitoring: "Surveillance en Temps Réel",
          monitoringDesc: "Assurance qualité continue",
          languages: "Langues Supportées",
          languagesDesc: "Analyse multilingue"
        },
        qualityAnalysis: {
          title: "Analyse Intelligente de la Qualité des Données",
          description: "Détectez et signalez automatiquement les modèles de réponse suspects, garantissant l'intégrité et la fiabilité des données.",
          benefit1: "Détection et prévention de fraude en temps réel",
          benefit2: "Analyse automatisée des modèles de réponse",
          benefit3: "Score de qualité pour chaque répondant"
        },
        trendAnalysis: {
          title: "Tendances de Réponse en Temps Réel",
          description: "Surveillez les taux de completion d'enquête et la qualité de réponse en temps réel avec l'analyse prédictive.",
          benefit1: "Prédire les taux de completion avant le lancement",
          benefit2: "Identifier le timing optimal d'enquête",
          benefit3: "Suivre les tendances de qualité de réponse"
        },
        audienceMatching: {
          title: "Correspondance d'Audience Pilotée par l'IA",
          description: "Sélection intelligente de répondants basée sur des facteurs démographiques, comportementaux et contextuels.",
          benefit1: "Ciblage de précision avec 95%+ d'exactitude",
          benefit2: "Reconnaissance de modèles comportementaux",
          benefit3: "Optimisation dynamique des quotas"
        },
        sentimentAnalysis: {
          title: "Analyse de Sentiment Multilingue",
          description: "Analysez les réponses émotionnelles et les sentiments à travers plusieurs langues et cultures.",
          benefit1: "Insights de sentiment interculturels",
          benefit2: "Suivi des réponses émotionnelles",
          benefit3: "Compréhension du contexte culturel"
        },
        predictiveInsights: {
          title: "Insights Prédictifs du Marché",
          description: "Exploitez les données historiques pour prédire les tendances du marché et les modèles de comportement des consommateurs.",
          benefit1: "Prévision des tendances du marché",
          benefit2: "Prédiction du comportement des consommateurs",
          benefit3: "Évaluation et atténuation des risques"
        },
        quotaManagement: {
          title: "Gestion Intelligente des Quotas",
          description: "Équilibrez automatiquement la distribution d'échantillons à travers différents segments démographiques.",
          benefit1: "Surveillance des quotas en temps réel",
          benefit2: "Rééquilibrage automatique des échantillons",
          benefit3: "Optimisation de la représentation démographique"
        },
        cta: {
          title: "Prêt à Expérimenter l'Analyse d'Enquêtes Pilotée par l'IA ?",
          description: "Rejoignez les équipes de recherche leaders qui exploitent déjà nos capacités IA pour obtenir des insights plus profonds plus rapidement.",
          demoButton: "Demander une Démo",
          contactButton: "Contacter les Ventes"
        }
      }
    },
    de: {
      nav: {
        home: "Startseite",
        solutions: "Lösungen",
        whyUs: "Warum Wir",
        aiAnalysis: "KI-Analyse",
        contact: "Kontakt",
        resources: "Ressourcen",
        joinPanel: "Unserem Panel beitreten",
        signIn: "Anmelden",
        panelBook: "Panel Buch",
        esomar37: "ESOMAR 37"
      },
      hero: {
        title: "Hochwertiges Globales Umfrage-Panel",
        subtitle: "Skalieren Sie Ihre Marktforschung mit vielfältigen, verifizierten Befragten und nahtlosen Umfrageoperationen.",
        description: "Wir liefern schnelle, zuverlässige und konforme Umfrageverteilung weltweit.",
        dashboard: {
          online: "Online",
          activeSurveys: "Aktive Umfragen",
          availableRespondents: "Verfügbare Befragte",
          responseRate: "Antwortrate",
          globalCoverage: "Globale Abdeckung",
          countries: "Länder",
          languages: "Sprachen",
          industries: "Branchen",
          fraudDetection: "Betrugserkennung",
          memberSatisfaction: "Mitgliedszufriedenheit",
          comingSoon: "Bald verfügbar",
          aiAnalysis: "KI-Analyse",
          aiDescription: "Transformieren Sie Ihre Umfragedaten in umsetzbare Erkenntnisse mit unseren fortschrittlichen KI-Analysetools, die speziell für Marktforschung entwickelt wurden.",
          createSurvey: "Umfrage erstellen",
          reports: "Berichte",
          connected: "Verbunden",
          learnMore: "Mehr erfahren"
        }
      },
      features: {
        title: "Warum uns Vertrauen",
        badge: "Vertraut von 100+ Unternehmen",
        accuracyRate: "Genauigkeitsrate",
        activeRespondents: "Aktive Befragte",
        countriesCovered: "Abgedeckte Länder",
        features: [
          {
            icon: "lightning",
            title: "Schnelle Antwort",
            description: "Erhalten Sie qualifizierte Befragte in Stunden, nicht in Tagen. Unser KI-gestütztes Matching-System gewährleistet schnelle Antwortzeiten."
          },
          {
            icon: "shield",
            title: "Qualität Garantiert",
            description: "Rigorose Qualitätskontrolle mit Double-Opt-in-Verifizierung und Betrugserkennung gewährleistet zuverlässige Daten."
          },
          {
            icon: "target",
            title: "Zielgruppenabdeckung",
            description: "Präzises demografisches, berufliches und verhaltensbezogenes Targeting für Ihre spezifischen Umfrageanforderungen."
          },
          {
            icon: "globe",
            title: "Länderabdeckung",
            description: "Globale Reichweite in über 30 Ländern mit lokalen Befragtenpools und mehrsprachiger Unterstützung."
          }
        ]
      },
      solutions: {
        title: "Branchenspezifische Lösungen",
        subtitle: "Maßgeschneiderte Forschungs Lösungen für 20+ Branchen mit spezialisierten Befragtenpools",
        completeCoverage: "Vollständige Branchenabdeckung",
        servingIndustries: "Bedienung von 20+ Branchen mit spezialisierten Befragtenpools"
      },
      trustQuality: {
        title: "Vertrauen und Qualität",
        subtitle: "Präzise, schnell und kostengünstig. Unsere Panel-Mitglieder sind zufrieden und motiviert und liefern ausgezeichnete Antwortqualität.",
        ourValues: "Unsere Werte",
        features: [
          {
            icon: "check",
            title: "Doppelte Opt-in-Verifizierung",
            description: "Alle Mitglieder werden durch einen doppelten Opt-in-Prozess verifiziert, um echte und engagierte Befragte zu gewährleisten.",
            highlight: "60% Empfehlungen"
          },
          {
            icon: "users",
            title: "Hochprofiliert Mitglieder",
            description: "Detaillierte demografische, berufliche und verhaltensbezogene Profilierung für präzises Targeting.",
            highlight: "0.3% Betrugsrate"
          },
          {
            icon: "clock",
            title: "Live-Support",
            description: "Rund-um-die-Uhr-Supportteam für reibungslose Projektdurchführung und Mitgliederzufriedenheit.",
            highlight: "24/7 online"
          },
          {
            icon: "heart",
            title: "Mitgliederzufriedenheit",
            description: "Glückliche und engagierte Mitglieder liefern bessere Antwortqualität und höhere Abschlussraten.",
            highlight: "98% Zufriedenheit"
          }
        ],
        values: [
          {
            title: "Wert für Kunden",
            description: "Außergewöhnliche Forschungserkenntnisse liefern, die Geschäftsentscheidungen mit 95% Genauigkeitsrate und umsetzbaren Empfehlungen vorantreiben"
          },
          {
            title: "Faire Belohnung für Mitglieder",
            description: "Sicherstellen, dass unsere Panel-Mitglieder mit wettbewerbsfähigen Tarifen und transparenten Zahlungssystemen fair entschädigt werden"
          },
          {
            title: "Glückliche Mitarbeiter",
            description: "Ein Team aufbauen, das leidenschaftlich an Forschung und Kundenerfolg mit kontinuierlichem Lernen und Wachstumsmöglichkeiten arbeitet"
          }
        ]
      },
      contact: {
        title: "Bereit zu Starten?",
        subtitle: "Schließen Sie sich Tausenden von Forschungsteams an, die LoopX für ihre Stichprobenanforderungen vertrauen.",
        placeholder: "Geben Sie Ihre E-Mail-Adresse ein",
        buttonText: "Loslegen",
        submitting: "Wird übermittelt...",
        thankYou: "Vielen Dank!",
        receivedMessage: "Wir haben Ihre Anfrage erhalten und werden uns bald bei Ihnen melden.",
        submitAnother: "Weitere Anfrage übermitteln"
      },
      footer: {
        description: "KI-gesteuerte Stichprobenverteilung für moderne Forschungsteams.",
        copyright: "© 2025 LoopX. Alle Rechte vorbehalten."
      },
      aiAnalysis: {
        badge: "KI-gestützte Einblicke",
        title: "Intelligente Umfrageanalyse",
        subtitle: "Transformieren Sie Ihre Umfragedaten in umsetzbare Erkenntnisse mit unseren fortschrittlichen KI-Analysetools, die speziell für Marktforschung entwickelt wurden.",
        stats: {
          accuracy: "Genauigkeitsrate",
          accuracyDesc: "KI-gestützte Qualitätserkennung",
          efficiency: "Effizienzgewinn",
          efficiencyDesc: "Schnellere Analyse",
          monitoring: "Echtzeit-Überwachung",
          monitoringDesc: "Kontinuierliche Qualitätssicherung",
          languages: "Unterstützte Sprachen",
          languagesDesc: "Mehrsprachige Analyse"
        },
        qualityAnalysis: {
          title: "Intelligente Datenqualitätsanalyse",
          description: "Erkennen und markieren Sie automatisch verdächtige Antwortmuster und gewährleisten Sie Datenintegrität und -zuverlässigkeit.",
          benefit1: "Echtzeit-Betrugserkennung und -prävention",
          benefit2: "Automatisierte Antwortmusteranalyse",
          benefit3: "Qualitätsbewertung für jeden Befragten"
        },
        trendAnalysis: {
          title: "Echtzeit-Antworttrends",
          description: "Überwachen Sie Umfragevollständigkeitsraten und Antwortqualität in Echtzeit mit prädiktiver Analytik.",
          benefit1: "Vollständigkeitsraten vor dem Start vorhersagen",
          benefit2: "Optimalen Umfragezeitpunkt identifizieren",
          benefit3: "Antwortqualitätstrends verfolgen"
        },
        audienceMatching: {
          title: "KI-gestütztes Publikums-Matching",
          description: "Intelligente Befragtenauswahl basierend auf demografischen, verhaltensbezogenen und kontextuellen Faktoren.",
          benefit1: "Präzises Targeting mit 95%+ Genauigkeit",
          benefit2: "Verhaltensmustererkennung",
          benefit3: "Dynamische Quotenoptimierung"
        },
        sentimentAnalysis: {
          title: "Mehrsprachige Sentiment-Analyse",
          description: "Analysieren Sie emotionale Antworten und Stimmungen in mehreren Sprachen und Kulturen.",
          benefit1: "Interkulturelle Sentiment-Einblicke",
          benefit2: "Emotionale Antwortverfolgung",
          benefit3: "Kulturelles Kontextverständnis"
        },
        predictiveInsights: {
          title: "Prädiktive Markteinblicke",
          description: "Nutzen Sie historische Daten, um Markttrends und Verbraucherverhaltensmuster vorherzusagen.",
          benefit1: "Markttrend-Prognose",
          benefit2: "Verbraucherverhaltensvorhersage",
          benefit3: "Risikobewertung und -minderung"
        },
        quotaManagement: {
          title: "Intelligentes Quotenmanagement",
          description: "Balancieren Sie automatiquement die Stichprobenverteilung über verschiedene demografische Segmente.",
          benefit1: "Echtzeit-Quotenüberwachung",
          benefit2: "Automatische Stichproben-Neubalancierung",
          benefit3: "Demografische Repräsentationsoptimierung"
        },
        cta: {
          title: "Bereit für KI-gestützte Umfrageanalyse?",
          description: "Schließen Sie sich führenden Forschungsteams an, die bereits unsere KI-Fähigkeiten nutzen, um schnellere, tiefere Einblicke zu gewinnen.",
          demoButton: "Demo Anfordern",
          contactButton: "Vertrieb Kontaktieren"
        }
      }
    },
    ko: {
      nav: {
        home: "홈",
        solutions: "솔루션",
        whyUs: "왜 우리인가",
        aiAnalysis: "AI 분석",
        contact: "연락처",
        resources: "리소스",
        joinPanel: "패널 참여하기",
        signIn: "로그인",
        panelBook: "패널 북",
        esomar37: "ESOMAR 37"
      },
      hero: {
        title: "고품질 글로벌 설문조사 패널",
        subtitle: "다양하고 검증된 응답자와 원활한 설문조사 운영으로 시장조사를 확장하세요.",
        description: "저희는 전 세계적으로 빠르고 신뢰할 수 있으며 규정을 준수하는 설문조사 배포를 제공합니다.",
        dashboard: {
          online: "온라인",
          activeSurveys: "활성 설문조사",
          availableRespondents: "사용 가능한 응답자",
          responseRate: "응답률",
          globalCoverage: "전 세계 커버리지",
          countries: "국가",
          languages: "언어",
          industries: "산업",
          fraudDetection: "사기 탐지",
          memberSatisfaction: "멤버 만족도",
          comingSoon: "출시 예정",
          aiAnalysis: "AI 분석",
          aiDescription: "시장조사를 위해 특별히 설계된 고급 AI 분석 도구로 설문조사 데이터를 실행 가능한 인사이트로 변환하세요.",
          createSurvey: "설문 생성",
          reports: "보고서",
          connected: "연결됨",
          learnMore: "더 알아보기"
        }
      },
      features: {
        title: "왜 저희를 신뢰해야 할까요",
        badge: "100+ 기업이 신뢰",
        accuracyRate: "정확도",
        activeRespondents: "활성 응답자",
        countriesCovered: "포함된 국가",
        features: [
          {
            icon: "lightning",
            title: "빠른 응답",
            description: "며칠이 아닌 몇 시간 내에 자격을 갖춘 응답자를 확보하세요. AI 기반 매칭 시스템이 빠른 응답 시간을 보장합니다."
          },
          {
            icon: "shield",
            title: "품질 보장",
            description: "이중 확인 검증과 사기 탐지가 포함된 엄격한 품질 관리로 신뢰할 수 있는 데이터를 보장합니다."
          },
          {
            icon: "target",
            title: "타겟 커버리지",
            description: "특정 설문조사 요구사항에 대한 정확한 인구통계학적, 전문적 및 행동적 타겟팅."
          },
          {
            icon: "globe",
            title: "국가 커버리지",
            description: "30개 이상의 국가에서 현지화된 응답자 풀과 다국어 지원을 통한 글로벌 도달."
          }
        ]
      },
      solutions: {
        title: "산업별 맞춤 솔루션",
        subtitle: "전문 응답자 풀을 갖춘 20개 이상의 산업을 위한 맞춤형 연구 솔루션",
        completeCoverage: "완전한 산업 커버리지",
        servingIndustries: "전문 응답자 풀로 20개 이상의 산업 서비스"
      },
      trustQuality: {
        title: "신뢰와 품질",
        subtitle: "정확하고 빠르며 비용 효율적입니다. 저희 패널 멤버들은 만족하고 동기부여되어 있으며 우수한 응답 품질을 제공합니다.",
        ourValues: "저희 가치",
        features: [
          {
            icon: "check",
            title: "이중 옵트인 검증",
            description: "모든 멤버는 이중 옵트인 프로세스를 통해 검증되어 진정성 있고 참여적인 응답자를 보장합니다.",
            highlight: "60% 추천"
          },
          {
            icon: "users",
            title: "고도로 프로파일링된 멤버",
            description: "정확한 타겟팅을 위한 상세한 인구통계학적, 전문적, 행동적 프로파일링.",
            highlight: "0.3% 사기율"
          },
          {
            icon: "clock",
            title: "실시간 지원",
            description: "원활한 프로젝트 실행과 멤버 만족을 위한 24시간 지원팀.",
            highlight: "24/7 온라인"
          },
          {
            icon: "heart",
            title: "멤버 만족도",
            description: "행복하고 참여적인 멤버들이 더 나은 품질의 응답과 높은 완료율을 제공합니다.",
            highlight: "98% 만족도"
          }
        ],
        values: [
          {
            title: "고객에게 가치 제공",
            description: "95% 정확도와 실행 가능한 권장사항으로 비즈니스 결정을 주도하는 탁월한 연구 인사이트 제공"
          },
          {
            title: "멤버에게 공정한 보상",
            description: "경쟁력 있는 요금과 투명한 결제 시스템으로 패널 멤버들이 공정하게 보상받도록 보장"
          },
          {
            title: "행복한 직원",
            description: "지속적인 학습과 성장 기회를 통해 연구와 고객 성공에 열정을 가진 팀 구축"
          }
        ]
      },
      contact: {
        title: "시작할 준비가 되셨나요?",
        subtitle: "샘플 요구사항에 LoopX를 신뢰하는 수천 개의 연구팀에 참여하세요.",
        placeholder: "이메일 주소를 입력하세요",
        buttonText: "시작하기",
        submitting: "제출 중...",
        thankYou: "감사합니다!",
        receivedMessage: "요청을 받았으며 곧 연락드리겠습니다.",
        submitAnother: "다른 요청 제출"
      },
      footer: {
        description: "현대적인 연구팀을 위한 AI 기반 샘플 배포.",
        copyright: "© 2025 LoopX. 모든 권리 보유."
      },
      aiAnalysis: {
        badge: "AI 기반 인사이트",
        title: "지능형 설문조사 분석",
        subtitle: "시장조사를 위해 특별히 설계된 고급 AI 분석 도구로 설문조사 데이터를 실행 가능한 인사이트로 변환하세요.",
        stats: {
          accuracy: "정확도",
          accuracyDesc: "AI 기반 품질 감지",
          efficiency: "효율성 향상",
          efficiencyDesc: "더 빠른 분석",
          monitoring: "실시간 모니터링",
          monitoringDesc: "지속적인 품질 보증",
          languages: "지원 언어",
          languagesDesc: "다국어 분석"
        },
        qualityAnalysis: {
          title: "스마트 데이터 품질 분석",
          description: "의심스러운 응답 패턴을 자동으로 감지하고 표시하여 데이터 무결성과 신뢰성을 보장합니다.",
          benefit1: "실시간 사기 감지 및 예방",
          benefit2: "자동화된 응답 패턴 분석",
          benefit3: "각 응답자에 대한 품질 점수"
        },
        trendAnalysis: {
          title: "실시간 응답 트렌드",
          description: "예측 분석을 통해 설문조사 완료율과 응답 품질을 실시간으로 모니터링합니다.",
          benefit1: "출시 전 완료율 예측",
          benefit2: "최적의 설문조사 타이밍 식별",
          benefit3: "回答 품질 트렌드 추적"
        },
        audienceMatching: {
          title: "AI 기반 대상자 매칭",
          description: "인구통계학적, 행동적, 맥락적 요인을 기반으로 한 지능형 응답자 선택.",
          benefit1: "95%+ 정확도의 정밀 타겟팅",
          benefit2: "행동 패턴 인식",
          benefit3: "동적 할당량 최적화"
        },
        sentimentAnalysis: {
          title: "다국어 감정 분석",
          description: "여러 언어와 문화에서 감정적 응답과 감정을 분석합니다.",
          benefit1: "문화간 감정 인사이트",
          benefit2: "감정적 응답 추적",
          benefit3: "문화적 맥락 이해"
        },
        predictiveInsights: {
          title: "예측적 시장 인사이트",
          description: "역사적 데이터를 활용하여 시장 트렌드와 소비자 행동 패턴을 예측합니다.",
          benefit1: "시장 트렌드 예측",
          benefit2: "소비자 행동 예측",
          benefit3: "위험 평가 및 완화"
        },
        quotaManagement: {
          title: "지능형 할당량 관리",
          description: "다양한 인구통계학적 세그먼트에서 샘플 분포를 자동으로 균형 조정합니다.",
          benefit1: "실시간 할당량 모니터링",
          benefit2: "자동 샘플 재균형",
          benefit3: "인구통계학적 대표성 최적화"
        },
        cta: {
          title: "AI 기반 설문조사 분석을 경험할 준비가 되셨나요?",
          description: "이미 우리의 AI 기능을 활용하여 더 빠르고 깊은 인사이트를 얻고 있는 선도적인 연구팀에 합류하세요.",
          demoButton: "데모 요청",
          contactButton: "영업팀 문의"
        }
      }
    },
    ja: {
      nav: {
        home: "ホーム",
        solutions: "ソリューション",
        whyUs: "なぜ私たち",
        aiAnalysis: "AI分析",
        contact: "お問い合わせ",
        resources: "リソース",
        joinPanel: "パネルに参加",
        signIn: "ログイン",
        panelBook: "パネルブック",
        esomar37: "ESOMAR 37"
      },
      hero: {
        title: "高品質グローバル調査パネル",
        subtitle: "多様で検証済みの回答者とシームレスな調査運用で市場調査を拡張しましょう。",
        description: "私たちは世界中で迅速、信頼性が高く、コンプライアンスに準拠した調査配信を提供します。",
        dashboard: {
          online: "オンライン",
          activeSurveys: "アクティブ調査",
          availableRespondents: "利用可能回答者",
          responseRate: "応答率",
          globalCoverage: "グローバルカバレッジ",
          countries: "国",
          languages: "言語",
          industries: "業界",
          fraudDetection: "不正検出",
          memberSatisfaction: "メンバー満足度",
          comingSoon: "近日公開",
          aiAnalysis: "AI分析",
          aiDescription: "市場調査のために特別に設計された高度なAI分析ツールで、調査データを実行可能なインサイトに変換します。",
          createSurvey: "調査作成",
          reports: "レポート",
          connected: "接続済み",
          learnMore: "詳細を見る"
        }
      },
      features: {
        title: "なぜ私たちを信頼するのか",
        badge: "100+企業が信頼",
        accuracyRate: "精度",
        activeRespondents: "アクティブ回答者",
        countriesCovered: "対象国",
        features: [
          {
            icon: "lightning",
            title: "迅速な回答",
            description: "数日ではなく数時間で適格な回答者を獲得。AI駆動のマッチングシステムが迅速な回答時間を保証します。"
          },
          {
            icon: "shield",
            title: "品質保証",
            description: "ダブルオプトイン検証と不正検出を含む厳格な品質管理により、信頼性の高いデータを保証します。"
          },
          {
            icon: "target",
            title: "ターゲットカバレッジ",
            description: "特定の調査ニーズに対する正確な人口統計学的、専門的、行動的ターゲティング。"
          },
          {
            icon: "globe",
            title: "国別カバレッジ",
            description: "30カ国以上でローカライズされた回答者プールと多言語サポートによるグローバルリーチ。"
          }
        ]
      },
      solutions: {
        title: "業界特化ソリューション",
        subtitle: "専門回答者プールを備えた20以上の業界向けカスタマイズ調査ソリューション",
        completeCoverage: "完全な業界カバレッジ",
        servingIndustries: "専門回答者プールで20以上の業界にサービス提供"
      },
      trustQuality: {
        title: "信頼と品質",
        subtitle: "正確、迅速、コスト効率的。私たちのパネルメンバーは満足し、モチベーションが高く、優れた回答品質を提供します。",
        ourValues: "私たちの価値",
        features: [
          {
            icon: "check",
            title: "二重オプトイン検証",
            description: "すべてのメンバーは二重オプトインプロセスを通じて検証され、真の参加型回答者を保証します。",
            highlight: "60%紹介"
          },
          {
            icon: "users",
            title: "高度にプロファイリングされたメンバー",
            description: "正確なターゲティングのための詳細な人口統計学的、専門的、行動的プロファイリング。",
            highlight: "0.3%不正率"
          },
          {
            icon: "clock",
            title: "ライブサポート",
            description: "スムーズなプロジェクト実行とメンバー満足のための24時間サポートチーム。",
            highlight: "24/7オンライン"
          },
          {
            icon: "heart",
            title: "メンバー満足度",
            description: "幸せで参加的なメンバーがより良い品質の回答と高い完了率を提供します。",
            highlight: "98%満足度"
          }
        ],
        values: [
          {
            title: "顧客への価値提供",
            description: "95%の精度と実行可能な推奨事項でビジネス決定を推進する卓越した研究洞察を提供"
          },
          {
            title: "メンバーへの公平な報酬",
            description: "競争力のある料金と透明な支払いシステムでパネルメンバーが公平に報酬を受け取ることを保証"
          },
          {
            title: "幸せな従業員",
            description: "継続的な学習と成長機会を通じて研究と顧客成功に情熱を持つチームを構築"
          }
        ]
      },
      contact: {
        title: "始める準備はできましたか？",
        subtitle: "サンプルニーズにLoopXを信頼する何千もの研究チームに参加してください。",
        placeholder: "メールアドレスを入力してください",
        buttonText: "始める",
        submitting: "送信中...",
        thankYou: "ありがとうございます！",
        receivedMessage: "リクエストを受け取りました。近日中にご連絡いたします。",
        submitAnother: "別のリクエストを送信"
      },
      footer: {
        description: "現代の研究チーム向けAI駆動サンプル配信。",
        copyright: "© 2025 LoopX. 全著作権所有。"
      },
      aiAnalysis: {
        badge: "AI駆動インサイト",
        title: "インテリジェント調査分析",
        subtitle: "市場調査のために特別に設計された高度なAI分析ツールで、調査データを実行可能なインサイトに変換します。",
        stats: {
          accuracy: "精度",
          accuracyDesc: "AI駆動品質検出",
          efficiency: "効率性向上",
          efficiencyDesc: "より高速な分析",
          monitoring: "リアルタイム監視",
          monitoringDesc: "継続的な品質保証",
          languages: "対応言語",
          languagesDesc: "多言語分析"
        },
        qualityAnalysis: {
          title: "スマートデータ品質分析",
          description: "疑わしい回答パターンを自動的に検出・フラグ付けし、データの整合性と信頼性を確保します。",
          benefit1: "リアルタイム不正検出・防止",
          benefit2: "自動化された回答パターン分析",
          benefit3: "各回答者の品質スコア"
        },
        trendAnalysis: {
          title: "リアルタイム回答トレンド",
          description: "予測分析により調査完了率と回答品質をリアルタイムで監視します。",
          benefit1: "開始前の完了率予測",
          benefit2: "最適な調査タイミングの特定",
          benefit3: "回答品質トレンドの追跡"
        },
        audienceMatching: {
          title: "AI駆動オーディエンスマッチング",
          description: "人口統計学的、行動的、文脈的要因に基づくインテリジェントな回答者選択。",
          benefit1: "95%+精度の精密ターゲティング",
          benefit2: "行動パターン認識",
          benefit3: "動的クォータ最適化"
        },
        sentimentAnalysis: {
          title: "多言語感情分析",
          description: "複数の言語と文化における感情的応答と感情を分析します。",
          benefit1: "異文化間感情インサイト",
          benefit2: "感情的応答追跡",
          benefit3: "文化的文脈理解"
        },
        predictiveInsights: {
          title: "予測的市場インサイト",
          description: "履歴データを活用して市場トレンドと消費者行動パターンを予測します。",
          benefit1: "市場トレンド予測",
          benefit2: "消費者行動予測",
          benefit3: "リスク評価と軽減"
        },
        quotaManagement: {
          title: "インテリジェントクォータ管理",
          description: "異なる人口統計学的セグメント間でサンプル分布を自動的にバランス調整します。",
          benefit1: "リアルタイムクォータ監視",
          benefit2: "自動サンプル再バランス",
          benefit3: "人口統計学的代表性最適化"
        },
        cta: {
          title: "AI駆動調査分析を体験する準備はできていますか？",
          description: "既に私たちのAI機能を活用してより迅速で深いインサイトを得ているリーディング研究チームに参加してください。",
          demoButton: "デモリクエスト",
          contactButton: "営業チームに連絡"
        }
      }
    }
  };
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ko", name: "한국어", flag: "🇰🇷" },
    { code: "ja", name: "日本語", flag: "🇯🇵" }
  ];
  const LanguageContext = reactExports.createContext(void 0);
  function LanguageProvider({ children }) {
    const [language, setLanguage] = reactExports.useState("en");
    reactExports.useEffect(() => {
      const savedLanguage = localStorage.getItem("language");
      if (savedLanguage && languages.some((lang) => lang.code === savedLanguage)) {
        setLanguage(savedLanguage);
      }
    }, []);
    const handleLanguageChange = (newLanguage) => {
      setLanguage(newLanguage);
      localStorage.setItem("language", newLanguage);
    };
    const getTranslation = (path) => {
      const keys = path.split(".");
      let value = translations[language];
      for (const key of keys) {
        if (value && typeof value === "object" && key in value) {
          value = value[key];
        } else {
          return path;
        }
      }
      return value;
    };
    const t2 = (key) => {
      const translation = getTranslation(key);
      return typeof translation === "string" ? translation : key;
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      LanguageContext.Provider,
      {
        value: {
          language,
          setLanguage: handleLanguageChange,
          t: t2,
          getTranslation
        },
        children
      }
    );
  }
  function useLanguage() {
    const context = reactExports.useContext(LanguageContext);
    if (context === void 0) {
      throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
  }
  function setRef(ref, value) {
    if (typeof ref === "function") {
      return ref(value);
    } else if (ref !== null && ref !== void 0) {
      ref.current = value;
    }
  }
  function composeRefs(...refs) {
    return (node) => {
      let hasCleanup = false;
      const cleanups = refs.map((ref) => {
        const cleanup = setRef(ref, node);
        if (!hasCleanup && typeof cleanup == "function") {
          hasCleanup = true;
        }
        return cleanup;
      });
      if (hasCleanup) {
        return () => {
          for (let i = 0; i < cleanups.length; i++) {
            const cleanup = cleanups[i];
            if (typeof cleanup == "function") {
              cleanup();
            } else {
              setRef(refs[i], null);
            }
          }
        };
      }
    };
  }
  // @__NO_SIDE_EFFECTS__
  function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = reactExports.forwardRef((props, forwardedRef) => {
      const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
      const childrenArray = reactExports.Children.toArray(children);
      const slottable = childrenArray.find(isSlottable);
      if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child) => {
          if (child === slottable) {
            if (reactExports.Children.count(newElement) > 1)
              return reactExports.Children.only(null);
            return reactExports.isValidElement(newElement) ? newElement.props.children : null;
          } else {
            return child;
          }
        });
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, __spreadProps(__spreadValues({}, slotProps), { ref: forwardedRef, children: reactExports.isValidElement(newElement) ? reactExports.cloneElement(newElement, void 0, newChildren) : null }));
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(SlotClone, __spreadProps(__spreadValues({}, slotProps), { ref: forwardedRef, children }));
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
  }
  var Slot = /* @__PURE__ */ createSlot("Slot");
  // @__NO_SIDE_EFFECTS__
  function createSlotClone(ownerName) {
    const SlotClone = reactExports.forwardRef((props, forwardedRef) => {
      const _a = props, { children } = _a, slotProps = __objRest(_a, ["children"]);
      if (reactExports.isValidElement(children)) {
        const childrenRef = getElementRef(children);
        const props2 = mergeProps(slotProps, children.props);
        if (children.type !== reactExports.Fragment) {
          props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
        }
        return reactExports.cloneElement(children, props2);
      }
      return reactExports.Children.count(children) > 1 ? reactExports.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
  }
  var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
  function isSlottable(child) {
    return reactExports.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
  }
  function mergeProps(slotProps, childProps) {
    const overrideProps = __spreadValues({}, childProps);
    for (const propName in childProps) {
      const slotPropValue = slotProps[propName];
      const childPropValue = childProps[propName];
      const isHandler = /^on[A-Z]/.test(propName);
      if (isHandler) {
        if (slotPropValue && childPropValue) {
          overrideProps[propName] = (...args) => {
            const result = childPropValue(...args);
            slotPropValue(...args);
            return result;
          };
        } else if (slotPropValue) {
          overrideProps[propName] = slotPropValue;
        }
      } else if (propName === "style") {
        overrideProps[propName] = __spreadValues(__spreadValues({}, slotPropValue), childPropValue);
      } else if (propName === "className") {
        overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
      }
    }
    return __spreadValues(__spreadValues({}, slotProps), overrideProps);
  }
  function getElementRef(element) {
    var _a, _b;
    let getter = (_a = Object.getOwnPropertyDescriptor(element.props, "ref")) == null ? void 0 : _a.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.ref;
    }
    getter = (_b = Object.getOwnPropertyDescriptor(element, "ref")) == null ? void 0 : _b.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
      return element.props.ref;
    }
    return element.props.ref || element.ref;
  }
  function r$1(e) {
    var t2, f2, n2 = "";
    if ("string" == typeof e || "number" == typeof e)
      n2 += e;
    else if ("object" == typeof e)
      if (Array.isArray(e)) {
        var o = e.length;
        for (t2 = 0; t2 < o; t2++)
          e[t2] && (f2 = r$1(e[t2])) && (n2 && (n2 += " "), n2 += f2);
      } else
        for (f2 in e)
          e[f2] && (n2 && (n2 += " "), n2 += f2);
    return n2;
  }
  function clsx$1() {
    for (var e, t2, f2 = 0, n2 = "", o = arguments.length; f2 < o; f2++)
      (e = arguments[f2]) && (t2 = r$1(e)) && (n2 && (n2 += " "), n2 += t2);
    return n2;
  }
  const falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
  const cx = clsx$1;
  const cva = (base, config) => (props) => {
    var _config_compoundVariants;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null)
      return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null)
        return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
      let _a = param, { class: cvClass, className: cvClassName } = _a, compoundVariantOptions = __objRest(_a, ["class", "className"]);
      return Object.entries(compoundVariantOptions).every((param2) => {
        let [key, value] = param2;
        return Array.isArray(value) ? value.includes(__spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key]) : __spreadValues(__spreadValues({}, defaultVariants), propsWithoutUndefined)[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };
  function r(e) {
    var t2, f2, n2 = "";
    if ("string" == typeof e || "number" == typeof e)
      n2 += e;
    else if ("object" == typeof e)
      if (Array.isArray(e))
        for (t2 = 0; t2 < e.length; t2++)
          e[t2] && (f2 = r(e[t2])) && (n2 && (n2 += " "), n2 += f2);
      else
        for (t2 in e)
          e[t2] && (n2 && (n2 += " "), n2 += t2);
    return n2;
  }
  function clsx() {
    for (var e, t2, f2 = 0, n2 = ""; f2 < arguments.length; )
      (e = arguments[f2++]) && (t2 = r(e)) && (n2 && (n2 += " "), n2 += t2);
    return n2;
  }
  const CLASS_PART_SEPARATOR = "-";
  const createClassGroupUtils = (config) => {
    const classMap = createClassMap(config);
    const {
      conflictingClassGroups,
      conflictingClassGroupModifiers
    } = config;
    const getClassGroupId = (className) => {
      const classParts = className.split(CLASS_PART_SEPARATOR);
      if (classParts[0] === "" && classParts.length !== 1) {
        classParts.shift();
      }
      return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
      const conflicts = conflictingClassGroups[classGroupId] || [];
      if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
        return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
      }
      return conflicts;
    };
    return {
      getClassGroupId,
      getConflictingClassGroupIds
    };
  };
  const getGroupRecursive = (classParts, classPartObject) => {
    var _a;
    if (classParts.length === 0) {
      return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[0];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
    if (classGroupFromNextClassPart) {
      return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
      return void 0;
    }
    const classRest = classParts.join(CLASS_PART_SEPARATOR);
    return (_a = classPartObject.validators.find(({
      validator
    }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
  };
  const arbitraryPropertyRegex = /^\[(.+)\]$/;
  const getGroupIdForArbitraryProperty = (className) => {
    if (arbitraryPropertyRegex.test(className)) {
      const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
      const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
      if (property) {
        return "arbitrary.." + property;
      }
    }
  };
  const createClassMap = (config) => {
    const {
      theme,
      classGroups
    } = config;
    const classMap = {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    };
    for (const classGroupId in classGroups) {
      processClassesRecursively(classGroups[classGroupId], classMap, classGroupId, theme);
    }
    return classMap;
  };
  const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
    classGroup.forEach((classDefinition) => {
      if (typeof classDefinition === "string") {
        const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
        classPartObjectToEdit.classGroupId = classGroupId;
        return;
      }
      if (typeof classDefinition === "function") {
        if (isThemeGetter(classDefinition)) {
          processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
          return;
        }
        classPartObject.validators.push({
          validator: classDefinition,
          classGroupId
        });
        return;
      }
      Object.entries(classDefinition).forEach(([key, classGroup2]) => {
        processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
      });
    });
  };
  const getPart = (classPartObject, path) => {
    let currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
      if (!currentClassPartObject.nextPart.has(pathPart)) {
        currentClassPartObject.nextPart.set(pathPart, {
          nextPart: /* @__PURE__ */ new Map(),
          validators: []
        });
      }
      currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
  };
  const isThemeGetter = (func) => func.isThemeGetter;
  const createLruCache = (maxCacheSize) => {
    if (maxCacheSize < 1) {
      return {
        get: () => void 0,
        set: () => {
        }
      };
    }
    let cacheSize = 0;
    let cache = /* @__PURE__ */ new Map();
    let previousCache = /* @__PURE__ */ new Map();
    const update = (key, value) => {
      cache.set(key, value);
      cacheSize++;
      if (cacheSize > maxCacheSize) {
        cacheSize = 0;
        previousCache = cache;
        cache = /* @__PURE__ */ new Map();
      }
    };
    return {
      get(key) {
        let value = cache.get(key);
        if (value !== void 0) {
          return value;
        }
        if ((value = previousCache.get(key)) !== void 0) {
          update(key, value);
          return value;
        }
      },
      set(key, value) {
        if (cache.has(key)) {
          cache.set(key, value);
        } else {
          update(key, value);
        }
      }
    };
  };
  const IMPORTANT_MODIFIER = "!";
  const MODIFIER_SEPARATOR = ":";
  const MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length;
  const createParseClassName = (config) => {
    const {
      prefix,
      experimentalParseClassName
    } = config;
    let parseClassName = (className) => {
      const modifiers = [];
      let bracketDepth = 0;
      let parenDepth = 0;
      let modifierStart = 0;
      let postfixModifierPosition;
      for (let index2 = 0; index2 < className.length; index2++) {
        let currentCharacter = className[index2];
        if (bracketDepth === 0 && parenDepth === 0) {
          if (currentCharacter === MODIFIER_SEPARATOR) {
            modifiers.push(className.slice(modifierStart, index2));
            modifierStart = index2 + MODIFIER_SEPARATOR_LENGTH;
            continue;
          }
          if (currentCharacter === "/") {
            postfixModifierPosition = index2;
            continue;
          }
        }
        if (currentCharacter === "[") {
          bracketDepth++;
        } else if (currentCharacter === "]") {
          bracketDepth--;
        } else if (currentCharacter === "(") {
          parenDepth++;
        } else if (currentCharacter === ")") {
          parenDepth--;
        }
      }
      const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
      const baseClassName = stripImportantModifier(baseClassNameWithImportantModifier);
      const hasImportantModifier = baseClassName !== baseClassNameWithImportantModifier;
      const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
      return {
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition
      };
    };
    if (prefix) {
      const fullPrefix = prefix + MODIFIER_SEPARATOR;
      const parseClassNameOriginal = parseClassName;
      parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.substring(fullPrefix.length)) : {
        isExternal: true,
        modifiers: [],
        hasImportantModifier: false,
        baseClassName: className,
        maybePostfixModifierPosition: void 0
      };
    }
    if (experimentalParseClassName) {
      const parseClassNameOriginal = parseClassName;
      parseClassName = (className) => experimentalParseClassName({
        className,
        parseClassName: parseClassNameOriginal
      });
    }
    return parseClassName;
  };
  const stripImportantModifier = (baseClassName) => {
    if (baseClassName.endsWith(IMPORTANT_MODIFIER)) {
      return baseClassName.substring(0, baseClassName.length - 1);
    }
    if (baseClassName.startsWith(IMPORTANT_MODIFIER)) {
      return baseClassName.substring(1);
    }
    return baseClassName;
  };
  const createSortModifiers = (config) => {
    const orderSensitiveModifiers = Object.fromEntries(config.orderSensitiveModifiers.map((modifier) => [modifier, true]));
    const sortModifiers = (modifiers) => {
      if (modifiers.length <= 1) {
        return modifiers;
      }
      const sortedModifiers = [];
      let unsortedModifiers = [];
      modifiers.forEach((modifier) => {
        const isPositionSensitive = modifier[0] === "[" || orderSensitiveModifiers[modifier];
        if (isPositionSensitive) {
          sortedModifiers.push(...unsortedModifiers.sort(), modifier);
          unsortedModifiers = [];
        } else {
          unsortedModifiers.push(modifier);
        }
      });
      sortedModifiers.push(...unsortedModifiers.sort());
      return sortedModifiers;
    };
    return sortModifiers;
  };
  const createConfigUtils = (config) => __spreadValues({
    cache: createLruCache(config.cacheSize),
    parseClassName: createParseClassName(config),
    sortModifiers: createSortModifiers(config)
  }, createClassGroupUtils(config));
  const SPLIT_CLASSES_REGEX = /\s+/;
  const mergeClassList = (classList, configUtils) => {
    const {
      parseClassName,
      getClassGroupId,
      getConflictingClassGroupIds,
      sortModifiers
    } = configUtils;
    const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = "";
    for (let index2 = classNames.length - 1; index2 >= 0; index2 -= 1) {
      const originalClassName = classNames[index2];
      const {
        isExternal,
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition
      } = parseClassName(originalClassName);
      if (isExternal) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      let hasPostfixModifier = !!maybePostfixModifierPosition;
      let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
      if (!classGroupId) {
        if (!hasPostfixModifier) {
          result = originalClassName + (result.length > 0 ? " " + result : result);
          continue;
        }
        classGroupId = getClassGroupId(baseClassName);
        if (!classGroupId) {
          result = originalClassName + (result.length > 0 ? " " + result : result);
          continue;
        }
        hasPostfixModifier = false;
      }
      const variantModifier = sortModifiers(modifiers).join(":");
      const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
      const classId = modifierId + classGroupId;
      if (classGroupsInConflict.includes(classId)) {
        continue;
      }
      classGroupsInConflict.push(classId);
      const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
      for (let i = 0; i < conflictGroups.length; ++i) {
        const group = conflictGroups[i];
        classGroupsInConflict.push(modifierId + group);
      }
      result = originalClassName + (result.length > 0 ? " " + result : result);
    }
    return result;
  };
  function twJoin() {
    let index2 = 0;
    let argument;
    let resolvedValue;
    let string = "";
    while (index2 < arguments.length) {
      if (argument = arguments[index2++]) {
        if (resolvedValue = toValue(argument)) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  }
  const toValue = (mix) => {
    if (typeof mix === "string") {
      return mix;
    }
    let resolvedValue;
    let string = "";
    for (let k2 = 0; k2 < mix.length; k2++) {
      if (mix[k2]) {
        if (resolvedValue = toValue(mix[k2])) {
          string && (string += " ");
          string += resolvedValue;
        }
      }
    }
    return string;
  };
  function createTailwindMerge(createConfigFirst, ...createConfigRest) {
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
      const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
      configUtils = createConfigUtils(config);
      cacheGet = configUtils.cache.get;
      cacheSet = configUtils.cache.set;
      functionToCall = tailwindMerge;
      return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
      const cachedResult = cacheGet(classList);
      if (cachedResult) {
        return cachedResult;
      }
      const result = mergeClassList(classList, configUtils);
      cacheSet(classList, result);
      return result;
    }
    return function callTailwindMerge() {
      return functionToCall(twJoin.apply(null, arguments));
    };
  }
  const fromTheme = (key) => {
    const themeGetter = (theme) => theme[key] || [];
    themeGetter.isThemeGetter = true;
    return themeGetter;
  };
  const arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
  const arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
  const fractionRegex = /^\d+\/\d+$/;
  const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
  const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  const isFraction = (value) => fractionRegex.test(value);
  const isNumber = (value) => !!value && !Number.isNaN(Number(value));
  const isInteger = (value) => !!value && Number.isInteger(Number(value));
  const isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
  const isTshirtSize = (value) => tshirtUnitRegex.test(value);
  const isAny = () => true;
  const isLengthOnly = (value) => (
    // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
  );
  const isNever = () => false;
  const isShadow = (value) => shadowRegex.test(value);
  const isImage = (value) => imageRegex.test(value);
  const isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
  const isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
  const isArbitraryValue = (value) => arbitraryValueRegex.test(value);
  const isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
  const isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
  const isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
  const isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
  const isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
  const isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
  const isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
  const isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
  const isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
  const isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
  const isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
  const isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
  const getIsArbitraryValue = (value, testLabel, testValue) => {
    const result = arbitraryValueRegex.exec(value);
    if (result) {
      if (result[1]) {
        return testLabel(result[1]);
      }
      return testValue(result[2]);
    }
    return false;
  };
  const getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
    const result = arbitraryVariableRegex.exec(value);
    if (result) {
      if (result[1]) {
        return testLabel(result[1]);
      }
      return shouldMatchNoLabel;
    }
    return false;
  };
  const isLabelPosition = (label) => label === "position" || label === "percentage";
  const isLabelImage = (label) => label === "image" || label === "url";
  const isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
  const isLabelLength = (label) => label === "length";
  const isLabelNumber = (label) => label === "number";
  const isLabelFamilyName = (label) => label === "family-name";
  const isLabelShadow = (label) => label === "shadow";
  const getDefaultConfig = () => {
    const themeColor = fromTheme("color");
    const themeFont = fromTheme("font");
    const themeText = fromTheme("text");
    const themeFontWeight = fromTheme("font-weight");
    const themeTracking = fromTheme("tracking");
    const themeLeading = fromTheme("leading");
    const themeBreakpoint = fromTheme("breakpoint");
    const themeContainer = fromTheme("container");
    const themeSpacing = fromTheme("spacing");
    const themeRadius = fromTheme("radius");
    const themeShadow = fromTheme("shadow");
    const themeInsetShadow = fromTheme("inset-shadow");
    const themeTextShadow = fromTheme("text-shadow");
    const themeDropShadow = fromTheme("drop-shadow");
    const themeBlur = fromTheme("blur");
    const themePerspective = fromTheme("perspective");
    const themeAspect = fromTheme("aspect");
    const themeEase = fromTheme("ease");
    const themeAnimate = fromTheme("animate");
    const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
    const scalePosition = () => [
      "center",
      "top",
      "bottom",
      "left",
      "right",
      "top-left",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "left-top",
      "top-right",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "right-top",
      "bottom-right",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "right-bottom",
      "bottom-left",
      // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
      "left-bottom"
    ];
    const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable, isArbitraryValue];
    const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
    const scaleOverscroll = () => ["auto", "contain", "none"];
    const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
    const scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()];
    const scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue];
    const scaleGridColRowStartAndEnd = () => ["auto", {
      span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
    }, isInteger, isArbitraryVariable, isArbitraryValue];
    const scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue];
    const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue];
    const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
    const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
    const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
    const scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
    const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
    const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition, {
      position: [isArbitraryVariable, isArbitraryValue]
    }];
    const scaleBgRepeat = () => ["no-repeat", {
      repeat: ["", "x", "y", "space", "round"]
    }];
    const scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize, {
      size: [isArbitraryVariable, isArbitraryValue]
    }];
    const scaleGradientStopPosition = () => [isPercent, isArbitraryVariableLength, isArbitraryLength];
    const scaleRadius = () => [
      // Deprecated since Tailwind CSS v4.0.0
      "",
      "none",
      "full",
      themeRadius,
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength];
    const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
    const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
    const scaleMaskImagePosition = () => [isNumber, isPercent, isArbitraryVariablePosition, isArbitraryPosition];
    const scaleBlur = () => [
      // Deprecated since Tailwind CSS v4.0.0
      "",
      "none",
      themeBlur,
      isArbitraryVariable,
      isArbitraryValue
    ];
    const scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
    const scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
    const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
    const scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [isTshirtSize],
        breakpoint: [isTshirtSize],
        color: [isAny],
        container: [isTshirtSize],
        "drop-shadow": [isTshirtSize],
        ease: ["in", "out", "in-out"],
        font: [isAnyNonArbitrary],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [isTshirtSize],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [isTshirtSize],
        shadow: [isTshirtSize],
        spacing: ["px", isNumber],
        text: [isTshirtSize],
        "text-shadow": [isTshirtSize],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        // --------------
        // --- Layout ---
        // --------------
        /**
         * Aspect Ratio
         * @see https://tailwindcss.com/docs/aspect-ratio
         */
        aspect: [{
          aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
        }],
        /**
         * Container
         * @see https://tailwindcss.com/docs/container
         * @deprecated since Tailwind CSS v4.0.0
         */
        container: ["container"],
        /**
         * Columns
         * @see https://tailwindcss.com/docs/columns
         */
        columns: [{
          columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
        }],
        /**
         * Break After
         * @see https://tailwindcss.com/docs/break-after
         */
        "break-after": [{
          "break-after": scaleBreak()
        }],
        /**
         * Break Before
         * @see https://tailwindcss.com/docs/break-before
         */
        "break-before": [{
          "break-before": scaleBreak()
        }],
        /**
         * Break Inside
         * @see https://tailwindcss.com/docs/break-inside
         */
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        /**
         * Box Decoration Break
         * @see https://tailwindcss.com/docs/box-decoration-break
         */
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        /**
         * Box Sizing
         * @see https://tailwindcss.com/docs/box-sizing
         */
        box: [{
          box: ["border", "content"]
        }],
        /**
         * Display
         * @see https://tailwindcss.com/docs/display
         */
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        /**
         * Screen Reader Only
         * @see https://tailwindcss.com/docs/display#screen-reader-only
         */
        sr: ["sr-only", "not-sr-only"],
        /**
         * Floats
         * @see https://tailwindcss.com/docs/float
         */
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        /**
         * Clear
         * @see https://tailwindcss.com/docs/clear
         */
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        /**
         * Isolation
         * @see https://tailwindcss.com/docs/isolation
         */
        isolation: ["isolate", "isolation-auto"],
        /**
         * Object Fit
         * @see https://tailwindcss.com/docs/object-fit
         */
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        /**
         * Object Position
         * @see https://tailwindcss.com/docs/object-position
         */
        "object-position": [{
          object: scalePositionWithArbitrary()
        }],
        /**
         * Overflow
         * @see https://tailwindcss.com/docs/overflow
         */
        overflow: [{
          overflow: scaleOverflow()
        }],
        /**
         * Overflow X
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-x": [{
          "overflow-x": scaleOverflow()
        }],
        /**
         * Overflow Y
         * @see https://tailwindcss.com/docs/overflow
         */
        "overflow-y": [{
          "overflow-y": scaleOverflow()
        }],
        /**
         * Overscroll Behavior
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        overscroll: [{
          overscroll: scaleOverscroll()
        }],
        /**
         * Overscroll Behavior X
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-x": [{
          "overscroll-x": scaleOverscroll()
        }],
        /**
         * Overscroll Behavior Y
         * @see https://tailwindcss.com/docs/overscroll-behavior
         */
        "overscroll-y": [{
          "overscroll-y": scaleOverscroll()
        }],
        /**
         * Position
         * @see https://tailwindcss.com/docs/position
         */
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        /**
         * Top / Right / Bottom / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        inset: [{
          inset: scaleInset()
        }],
        /**
         * Right / Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-x": [{
          "inset-x": scaleInset()
        }],
        /**
         * Top / Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        "inset-y": [{
          "inset-y": scaleInset()
        }],
        /**
         * Start
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        start: [{
          start: scaleInset()
        }],
        /**
         * End
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        end: [{
          end: scaleInset()
        }],
        /**
         * Top
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        top: [{
          top: scaleInset()
        }],
        /**
         * Right
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        right: [{
          right: scaleInset()
        }],
        /**
         * Bottom
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        bottom: [{
          bottom: scaleInset()
        }],
        /**
         * Left
         * @see https://tailwindcss.com/docs/top-right-bottom-left
         */
        left: [{
          left: scaleInset()
        }],
        /**
         * Visibility
         * @see https://tailwindcss.com/docs/visibility
         */
        visibility: ["visible", "invisible", "collapse"],
        /**
         * Z-Index
         * @see https://tailwindcss.com/docs/z-index
         */
        z: [{
          z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
        }],
        // ------------------------
        // --- Flexbox and Grid ---
        // ------------------------
        /**
         * Flex Basis
         * @see https://tailwindcss.com/docs/flex-basis
         */
        basis: [{
          basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
        }],
        /**
         * Flex Direction
         * @see https://tailwindcss.com/docs/flex-direction
         */
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        /**
         * Flex Wrap
         * @see https://tailwindcss.com/docs/flex-wrap
         */
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        /**
         * Flex
         * @see https://tailwindcss.com/docs/flex
         */
        flex: [{
          flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
        }],
        /**
         * Flex Grow
         * @see https://tailwindcss.com/docs/flex-grow
         */
        grow: [{
          grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Flex Shrink
         * @see https://tailwindcss.com/docs/flex-shrink
         */
        shrink: [{
          shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Order
         * @see https://tailwindcss.com/docs/order
         */
        order: [{
          order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Grid Template Columns
         * @see https://tailwindcss.com/docs/grid-template-columns
         */
        "grid-cols": [{
          "grid-cols": scaleGridTemplateColsRows()
        }],
        /**
         * Grid Column Start / End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start-end": [{
          col: scaleGridColRowStartAndEnd()
        }],
        /**
         * Grid Column Start
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-start": [{
          "col-start": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Column End
         * @see https://tailwindcss.com/docs/grid-column
         */
        "col-end": [{
          "col-end": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Template Rows
         * @see https://tailwindcss.com/docs/grid-template-rows
         */
        "grid-rows": [{
          "grid-rows": scaleGridTemplateColsRows()
        }],
        /**
         * Grid Row Start / End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start-end": [{
          row: scaleGridColRowStartAndEnd()
        }],
        /**
         * Grid Row Start
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-start": [{
          "row-start": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Row End
         * @see https://tailwindcss.com/docs/grid-row
         */
        "row-end": [{
          "row-end": scaleGridColRowStartOrEnd()
        }],
        /**
         * Grid Auto Flow
         * @see https://tailwindcss.com/docs/grid-auto-flow
         */
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        /**
         * Grid Auto Columns
         * @see https://tailwindcss.com/docs/grid-auto-columns
         */
        "auto-cols": [{
          "auto-cols": scaleGridAutoColsRows()
        }],
        /**
         * Grid Auto Rows
         * @see https://tailwindcss.com/docs/grid-auto-rows
         */
        "auto-rows": [{
          "auto-rows": scaleGridAutoColsRows()
        }],
        /**
         * Gap
         * @see https://tailwindcss.com/docs/gap
         */
        gap: [{
          gap: scaleUnambiguousSpacing()
        }],
        /**
         * Gap X
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-x": [{
          "gap-x": scaleUnambiguousSpacing()
        }],
        /**
         * Gap Y
         * @see https://tailwindcss.com/docs/gap
         */
        "gap-y": [{
          "gap-y": scaleUnambiguousSpacing()
        }],
        /**
         * Justify Content
         * @see https://tailwindcss.com/docs/justify-content
         */
        "justify-content": [{
          justify: [...scaleAlignPrimaryAxis(), "normal"]
        }],
        /**
         * Justify Items
         * @see https://tailwindcss.com/docs/justify-items
         */
        "justify-items": [{
          "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
        }],
        /**
         * Justify Self
         * @see https://tailwindcss.com/docs/justify-self
         */
        "justify-self": [{
          "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
        }],
        /**
         * Align Content
         * @see https://tailwindcss.com/docs/align-content
         */
        "align-content": [{
          content: ["normal", ...scaleAlignPrimaryAxis()]
        }],
        /**
         * Align Items
         * @see https://tailwindcss.com/docs/align-items
         */
        "align-items": [{
          items: [...scaleAlignSecondaryAxis(), {
            baseline: ["", "last"]
          }]
        }],
        /**
         * Align Self
         * @see https://tailwindcss.com/docs/align-self
         */
        "align-self": [{
          self: ["auto", ...scaleAlignSecondaryAxis(), {
            baseline: ["", "last"]
          }]
        }],
        /**
         * Place Content
         * @see https://tailwindcss.com/docs/place-content
         */
        "place-content": [{
          "place-content": scaleAlignPrimaryAxis()
        }],
        /**
         * Place Items
         * @see https://tailwindcss.com/docs/place-items
         */
        "place-items": [{
          "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
        }],
        /**
         * Place Self
         * @see https://tailwindcss.com/docs/place-self
         */
        "place-self": [{
          "place-self": ["auto", ...scaleAlignSecondaryAxis()]
        }],
        // Spacing
        /**
         * Padding
         * @see https://tailwindcss.com/docs/padding
         */
        p: [{
          p: scaleUnambiguousSpacing()
        }],
        /**
         * Padding X
         * @see https://tailwindcss.com/docs/padding
         */
        px: [{
          px: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Y
         * @see https://tailwindcss.com/docs/padding
         */
        py: [{
          py: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Start
         * @see https://tailwindcss.com/docs/padding
         */
        ps: [{
          ps: scaleUnambiguousSpacing()
        }],
        /**
         * Padding End
         * @see https://tailwindcss.com/docs/padding
         */
        pe: [{
          pe: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Top
         * @see https://tailwindcss.com/docs/padding
         */
        pt: [{
          pt: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Right
         * @see https://tailwindcss.com/docs/padding
         */
        pr: [{
          pr: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Bottom
         * @see https://tailwindcss.com/docs/padding
         */
        pb: [{
          pb: scaleUnambiguousSpacing()
        }],
        /**
         * Padding Left
         * @see https://tailwindcss.com/docs/padding
         */
        pl: [{
          pl: scaleUnambiguousSpacing()
        }],
        /**
         * Margin
         * @see https://tailwindcss.com/docs/margin
         */
        m: [{
          m: scaleMargin()
        }],
        /**
         * Margin X
         * @see https://tailwindcss.com/docs/margin
         */
        mx: [{
          mx: scaleMargin()
        }],
        /**
         * Margin Y
         * @see https://tailwindcss.com/docs/margin
         */
        my: [{
          my: scaleMargin()
        }],
        /**
         * Margin Start
         * @see https://tailwindcss.com/docs/margin
         */
        ms: [{
          ms: scaleMargin()
        }],
        /**
         * Margin End
         * @see https://tailwindcss.com/docs/margin
         */
        me: [{
          me: scaleMargin()
        }],
        /**
         * Margin Top
         * @see https://tailwindcss.com/docs/margin
         */
        mt: [{
          mt: scaleMargin()
        }],
        /**
         * Margin Right
         * @see https://tailwindcss.com/docs/margin
         */
        mr: [{
          mr: scaleMargin()
        }],
        /**
         * Margin Bottom
         * @see https://tailwindcss.com/docs/margin
         */
        mb: [{
          mb: scaleMargin()
        }],
        /**
         * Margin Left
         * @see https://tailwindcss.com/docs/margin
         */
        ml: [{
          ml: scaleMargin()
        }],
        /**
         * Space Between X
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-x": [{
          "space-x": scaleUnambiguousSpacing()
        }],
        /**
         * Space Between X Reverse
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-x-reverse": ["space-x-reverse"],
        /**
         * Space Between Y
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-y": [{
          "space-y": scaleUnambiguousSpacing()
        }],
        /**
         * Space Between Y Reverse
         * @see https://tailwindcss.com/docs/margin#adding-space-between-children
         */
        "space-y-reverse": ["space-y-reverse"],
        // --------------
        // --- Sizing ---
        // --------------
        /**
         * Size
         * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
         */
        size: [{
          size: scaleSizing()
        }],
        /**
         * Width
         * @see https://tailwindcss.com/docs/width
         */
        w: [{
          w: [themeContainer, "screen", ...scaleSizing()]
        }],
        /**
         * Min-Width
         * @see https://tailwindcss.com/docs/min-width
         */
        "min-w": [{
          "min-w": [
            themeContainer,
            "screen",
            /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            "none",
            ...scaleSizing()
          ]
        }],
        /**
         * Max-Width
         * @see https://tailwindcss.com/docs/max-width
         */
        "max-w": [{
          "max-w": [
            themeContainer,
            "screen",
            "none",
            /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            "prose",
            /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            {
              screen: [themeBreakpoint]
            },
            ...scaleSizing()
          ]
        }],
        /**
         * Height
         * @see https://tailwindcss.com/docs/height
         */
        h: [{
          h: ["screen", "lh", ...scaleSizing()]
        }],
        /**
         * Min-Height
         * @see https://tailwindcss.com/docs/min-height
         */
        "min-h": [{
          "min-h": ["screen", "lh", "none", ...scaleSizing()]
        }],
        /**
         * Max-Height
         * @see https://tailwindcss.com/docs/max-height
         */
        "max-h": [{
          "max-h": ["screen", "lh", ...scaleSizing()]
        }],
        // ------------------
        // --- Typography ---
        // ------------------
        /**
         * Font Size
         * @see https://tailwindcss.com/docs/font-size
         */
        "font-size": [{
          text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
        }],
        /**
         * Font Smoothing
         * @see https://tailwindcss.com/docs/font-smoothing
         */
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        /**
         * Font Style
         * @see https://tailwindcss.com/docs/font-style
         */
        "font-style": ["italic", "not-italic"],
        /**
         * Font Weight
         * @see https://tailwindcss.com/docs/font-weight
         */
        "font-weight": [{
          font: [themeFontWeight, isArbitraryVariable, isArbitraryNumber]
        }],
        /**
         * Font Stretch
         * @see https://tailwindcss.com/docs/font-stretch
         */
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
        }],
        /**
         * Font Family
         * @see https://tailwindcss.com/docs/font-family
         */
        "font-family": [{
          font: [isArbitraryVariableFamilyName, isArbitraryValue, themeFont]
        }],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-normal": ["normal-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-ordinal": ["ordinal"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-slashed-zero": ["slashed-zero"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        /**
         * Font Variant Numeric
         * @see https://tailwindcss.com/docs/font-variant-numeric
         */
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        /**
         * Letter Spacing
         * @see https://tailwindcss.com/docs/letter-spacing
         */
        tracking: [{
          tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Line Clamp
         * @see https://tailwindcss.com/docs/line-clamp
         */
        "line-clamp": [{
          "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
        }],
        /**
         * Line Height
         * @see https://tailwindcss.com/docs/line-height
         */
        leading: [{
          leading: [
            /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
            themeLeading,
            ...scaleUnambiguousSpacing()
          ]
        }],
        /**
         * List Style Image
         * @see https://tailwindcss.com/docs/list-style-image
         */
        "list-image": [{
          "list-image": ["none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * List Style Position
         * @see https://tailwindcss.com/docs/list-style-position
         */
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        /**
         * List Style Type
         * @see https://tailwindcss.com/docs/list-style-type
         */
        "list-style-type": [{
          list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Text Alignment
         * @see https://tailwindcss.com/docs/text-align
         */
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        /**
         * Placeholder Color
         * @deprecated since Tailwind CSS v3.0.0
         * @see https://v3.tailwindcss.com/docs/placeholder-color
         */
        "placeholder-color": [{
          placeholder: scaleColor()
        }],
        /**
         * Text Color
         * @see https://tailwindcss.com/docs/text-color
         */
        "text-color": [{
          text: scaleColor()
        }],
        /**
         * Text Decoration
         * @see https://tailwindcss.com/docs/text-decoration
         */
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        /**
         * Text Decoration Style
         * @see https://tailwindcss.com/docs/text-decoration-style
         */
        "text-decoration-style": [{
          decoration: [...scaleLineStyle(), "wavy"]
        }],
        /**
         * Text Decoration Thickness
         * @see https://tailwindcss.com/docs/text-decoration-thickness
         */
        "text-decoration-thickness": [{
          decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
        }],
        /**
         * Text Decoration Color
         * @see https://tailwindcss.com/docs/text-decoration-color
         */
        "text-decoration-color": [{
          decoration: scaleColor()
        }],
        /**
         * Text Underline Offset
         * @see https://tailwindcss.com/docs/text-underline-offset
         */
        "underline-offset": [{
          "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Text Transform
         * @see https://tailwindcss.com/docs/text-transform
         */
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        /**
         * Text Overflow
         * @see https://tailwindcss.com/docs/text-overflow
         */
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        /**
         * Text Wrap
         * @see https://tailwindcss.com/docs/text-wrap
         */
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        /**
         * Text Indent
         * @see https://tailwindcss.com/docs/text-indent
         */
        indent: [{
          indent: scaleUnambiguousSpacing()
        }],
        /**
         * Vertical Alignment
         * @see https://tailwindcss.com/docs/vertical-align
         */
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Whitespace
         * @see https://tailwindcss.com/docs/whitespace
         */
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        /**
         * Word Break
         * @see https://tailwindcss.com/docs/word-break
         */
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        /**
         * Overflow Wrap
         * @see https://tailwindcss.com/docs/overflow-wrap
         */
        wrap: [{
          wrap: ["break-word", "anywhere", "normal"]
        }],
        /**
         * Hyphens
         * @see https://tailwindcss.com/docs/hyphens
         */
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        /**
         * Content
         * @see https://tailwindcss.com/docs/content
         */
        content: [{
          content: ["none", isArbitraryVariable, isArbitraryValue]
        }],
        // -------------------
        // --- Backgrounds ---
        // -------------------
        /**
         * Background Attachment
         * @see https://tailwindcss.com/docs/background-attachment
         */
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        /**
         * Background Clip
         * @see https://tailwindcss.com/docs/background-clip
         */
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        /**
         * Background Origin
         * @see https://tailwindcss.com/docs/background-origin
         */
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        /**
         * Background Position
         * @see https://tailwindcss.com/docs/background-position
         */
        "bg-position": [{
          bg: scaleBgPosition()
        }],
        /**
         * Background Repeat
         * @see https://tailwindcss.com/docs/background-repeat
         */
        "bg-repeat": [{
          bg: scaleBgRepeat()
        }],
        /**
         * Background Size
         * @see https://tailwindcss.com/docs/background-size
         */
        "bg-size": [{
          bg: scaleBgSize()
        }],
        /**
         * Background Image
         * @see https://tailwindcss.com/docs/background-image
         */
        "bg-image": [{
          bg: ["none", {
            linear: [{
              to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, isInteger, isArbitraryVariable, isArbitraryValue],
            radial: ["", isArbitraryVariable, isArbitraryValue],
            conic: [isInteger, isArbitraryVariable, isArbitraryValue]
          }, isArbitraryVariableImage, isArbitraryImage]
        }],
        /**
         * Background Color
         * @see https://tailwindcss.com/docs/background-color
         */
        "bg-color": [{
          bg: scaleColor()
        }],
        /**
         * Gradient Color Stops From Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from-pos": [{
          from: scaleGradientStopPosition()
        }],
        /**
         * Gradient Color Stops Via Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via-pos": [{
          via: scaleGradientStopPosition()
        }],
        /**
         * Gradient Color Stops To Position
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to-pos": [{
          to: scaleGradientStopPosition()
        }],
        /**
         * Gradient Color Stops From
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-from": [{
          from: scaleColor()
        }],
        /**
         * Gradient Color Stops Via
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-via": [{
          via: scaleColor()
        }],
        /**
         * Gradient Color Stops To
         * @see https://tailwindcss.com/docs/gradient-color-stops
         */
        "gradient-to": [{
          to: scaleColor()
        }],
        // ---------------
        // --- Borders ---
        // ---------------
        /**
         * Border Radius
         * @see https://tailwindcss.com/docs/border-radius
         */
        rounded: [{
          rounded: scaleRadius()
        }],
        /**
         * Border Radius Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-s": [{
          "rounded-s": scaleRadius()
        }],
        /**
         * Border Radius End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-e": [{
          "rounded-e": scaleRadius()
        }],
        /**
         * Border Radius Top
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-t": [{
          "rounded-t": scaleRadius()
        }],
        /**
         * Border Radius Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-r": [{
          "rounded-r": scaleRadius()
        }],
        /**
         * Border Radius Bottom
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-b": [{
          "rounded-b": scaleRadius()
        }],
        /**
         * Border Radius Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-l": [{
          "rounded-l": scaleRadius()
        }],
        /**
         * Border Radius Start Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ss": [{
          "rounded-ss": scaleRadius()
        }],
        /**
         * Border Radius Start End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-se": [{
          "rounded-se": scaleRadius()
        }],
        /**
         * Border Radius End End
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-ee": [{
          "rounded-ee": scaleRadius()
        }],
        /**
         * Border Radius End Start
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-es": [{
          "rounded-es": scaleRadius()
        }],
        /**
         * Border Radius Top Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tl": [{
          "rounded-tl": scaleRadius()
        }],
        /**
         * Border Radius Top Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-tr": [{
          "rounded-tr": scaleRadius()
        }],
        /**
         * Border Radius Bottom Right
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-br": [{
          "rounded-br": scaleRadius()
        }],
        /**
         * Border Radius Bottom Left
         * @see https://tailwindcss.com/docs/border-radius
         */
        "rounded-bl": [{
          "rounded-bl": scaleRadius()
        }],
        /**
         * Border Width
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w": [{
          border: scaleBorderWidth()
        }],
        /**
         * Border Width X
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-x": [{
          "border-x": scaleBorderWidth()
        }],
        /**
         * Border Width Y
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-y": [{
          "border-y": scaleBorderWidth()
        }],
        /**
         * Border Width Start
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-s": [{
          "border-s": scaleBorderWidth()
        }],
        /**
         * Border Width End
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-e": [{
          "border-e": scaleBorderWidth()
        }],
        /**
         * Border Width Top
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-t": [{
          "border-t": scaleBorderWidth()
        }],
        /**
         * Border Width Right
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-r": [{
          "border-r": scaleBorderWidth()
        }],
        /**
         * Border Width Bottom
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-b": [{
          "border-b": scaleBorderWidth()
        }],
        /**
         * Border Width Left
         * @see https://tailwindcss.com/docs/border-width
         */
        "border-w-l": [{
          "border-l": scaleBorderWidth()
        }],
        /**
         * Divide Width X
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-x": [{
          "divide-x": scaleBorderWidth()
        }],
        /**
         * Divide Width X Reverse
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-x-reverse": ["divide-x-reverse"],
        /**
         * Divide Width Y
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-y": [{
          "divide-y": scaleBorderWidth()
        }],
        /**
         * Divide Width Y Reverse
         * @see https://tailwindcss.com/docs/border-width#between-children
         */
        "divide-y-reverse": ["divide-y-reverse"],
        /**
         * Border Style
         * @see https://tailwindcss.com/docs/border-style
         */
        "border-style": [{
          border: [...scaleLineStyle(), "hidden", "none"]
        }],
        /**
         * Divide Style
         * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
         */
        "divide-style": [{
          divide: [...scaleLineStyle(), "hidden", "none"]
        }],
        /**
         * Border Color
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color": [{
          border: scaleColor()
        }],
        /**
         * Border Color X
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-x": [{
          "border-x": scaleColor()
        }],
        /**
         * Border Color Y
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-y": [{
          "border-y": scaleColor()
        }],
        /**
         * Border Color S
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-s": [{
          "border-s": scaleColor()
        }],
        /**
         * Border Color E
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-e": [{
          "border-e": scaleColor()
        }],
        /**
         * Border Color Top
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-t": [{
          "border-t": scaleColor()
        }],
        /**
         * Border Color Right
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-r": [{
          "border-r": scaleColor()
        }],
        /**
         * Border Color Bottom
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-b": [{
          "border-b": scaleColor()
        }],
        /**
         * Border Color Left
         * @see https://tailwindcss.com/docs/border-color
         */
        "border-color-l": [{
          "border-l": scaleColor()
        }],
        /**
         * Divide Color
         * @see https://tailwindcss.com/docs/divide-color
         */
        "divide-color": [{
          divide: scaleColor()
        }],
        /**
         * Outline Style
         * @see https://tailwindcss.com/docs/outline-style
         */
        "outline-style": [{
          outline: [...scaleLineStyle(), "none", "hidden"]
        }],
        /**
         * Outline Offset
         * @see https://tailwindcss.com/docs/outline-offset
         */
        "outline-offset": [{
          "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Outline Width
         * @see https://tailwindcss.com/docs/outline-width
         */
        "outline-w": [{
          outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
        }],
        /**
         * Outline Color
         * @see https://tailwindcss.com/docs/outline-color
         */
        "outline-color": [{
          outline: scaleColor()
        }],
        // ---------------
        // --- Effects ---
        // ---------------
        /**
         * Box Shadow
         * @see https://tailwindcss.com/docs/box-shadow
         */
        shadow: [{
          shadow: [
            // Deprecated since Tailwind CSS v4.0.0
            "",
            "none",
            themeShadow,
            isArbitraryVariableShadow,
            isArbitraryShadow
          ]
        }],
        /**
         * Box Shadow Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
         */
        "shadow-color": [{
          shadow: scaleColor()
        }],
        /**
         * Inset Box Shadow
         * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
         */
        "inset-shadow": [{
          "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow, isArbitraryShadow]
        }],
        /**
         * Inset Box Shadow Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
         */
        "inset-shadow-color": [{
          "inset-shadow": scaleColor()
        }],
        /**
         * Ring Width
         * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
         */
        "ring-w": [{
          ring: scaleBorderWidth()
        }],
        /**
         * Ring Width Inset
         * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
         * @deprecated since Tailwind CSS v4.0.0
         * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
         */
        "ring-w-inset": ["ring-inset"],
        /**
         * Ring Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
         */
        "ring-color": [{
          ring: scaleColor()
        }],
        /**
         * Ring Offset Width
         * @see https://v3.tailwindcss.com/docs/ring-offset-width
         * @deprecated since Tailwind CSS v4.0.0
         * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
         */
        "ring-offset-w": [{
          "ring-offset": [isNumber, isArbitraryLength]
        }],
        /**
         * Ring Offset Color
         * @see https://v3.tailwindcss.com/docs/ring-offset-color
         * @deprecated since Tailwind CSS v4.0.0
         * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
         */
        "ring-offset-color": [{
          "ring-offset": scaleColor()
        }],
        /**
         * Inset Ring Width
         * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
         */
        "inset-ring-w": [{
          "inset-ring": scaleBorderWidth()
        }],
        /**
         * Inset Ring Color
         * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
         */
        "inset-ring-color": [{
          "inset-ring": scaleColor()
        }],
        /**
         * Text Shadow
         * @see https://tailwindcss.com/docs/text-shadow
         */
        "text-shadow": [{
          "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow, isArbitraryShadow]
        }],
        /**
         * Text Shadow Color
         * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
         */
        "text-shadow-color": [{
          "text-shadow": scaleColor()
        }],
        /**
         * Opacity
         * @see https://tailwindcss.com/docs/opacity
         */
        opacity: [{
          opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Mix Blend Mode
         * @see https://tailwindcss.com/docs/mix-blend-mode
         */
        "mix-blend": [{
          "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
        }],
        /**
         * Background Blend Mode
         * @see https://tailwindcss.com/docs/background-blend-mode
         */
        "bg-blend": [{
          "bg-blend": scaleBlendMode()
        }],
        /**
         * Mask Clip
         * @see https://tailwindcss.com/docs/mask-clip
         */
        "mask-clip": [{
          "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
        }, "mask-no-clip"],
        /**
         * Mask Composite
         * @see https://tailwindcss.com/docs/mask-composite
         */
        "mask-composite": [{
          mask: ["add", "subtract", "intersect", "exclude"]
        }],
        /**
         * Mask Image
         * @see https://tailwindcss.com/docs/mask-image
         */
        "mask-image-linear-pos": [{
          "mask-linear": [isNumber]
        }],
        "mask-image-linear-from-pos": [{
          "mask-linear-from": scaleMaskImagePosition()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": scaleMaskImagePosition()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": scaleColor()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": scaleColor()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": scaleMaskImagePosition()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": scaleMaskImagePosition()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": scaleColor()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": scaleColor()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": scaleMaskImagePosition()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": scaleMaskImagePosition()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": scaleColor()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": scaleColor()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": scaleMaskImagePosition()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": scaleMaskImagePosition()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": scaleColor()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": scaleColor()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": scaleMaskImagePosition()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": scaleMaskImagePosition()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": scaleColor()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": scaleColor()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": scaleMaskImagePosition()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": scaleMaskImagePosition()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": scaleColor()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": scaleColor()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": scaleMaskImagePosition()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": scaleMaskImagePosition()
        }],
        "mask-image-y-from-color": [{
          "mask-y-from": scaleColor()
        }],
        "mask-image-y-to-color": [{
          "mask-y-to": scaleColor()
        }],
        "mask-image-radial": [{
          "mask-radial": [isArbitraryVariable, isArbitraryValue]
        }],
        "mask-image-radial-from-pos": [{
          "mask-radial-from": scaleMaskImagePosition()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": scaleMaskImagePosition()
        }],
        "mask-image-radial-from-color": [{
          "mask-radial-from": scaleColor()
        }],
        "mask-image-radial-to-color": [{
          "mask-radial-to": scaleColor()
        }],
        "mask-image-radial-shape": [{
          "mask-radial": ["circle", "ellipse"]
        }],
        "mask-image-radial-size": [{
          "mask-radial": [{
            closest: ["side", "corner"],
            farthest: ["side", "corner"]
          }]
        }],
        "mask-image-radial-pos": [{
          "mask-radial-at": scalePosition()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [isNumber]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": scaleMaskImagePosition()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": scaleMaskImagePosition()
        }],
        "mask-image-conic-from-color": [{
          "mask-conic-from": scaleColor()
        }],
        "mask-image-conic-to-color": [{
          "mask-conic-to": scaleColor()
        }],
        /**
         * Mask Mode
         * @see https://tailwindcss.com/docs/mask-mode
         */
        "mask-mode": [{
          mask: ["alpha", "luminance", "match"]
        }],
        /**
         * Mask Origin
         * @see https://tailwindcss.com/docs/mask-origin
         */
        "mask-origin": [{
          "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
        }],
        /**
         * Mask Position
         * @see https://tailwindcss.com/docs/mask-position
         */
        "mask-position": [{
          mask: scaleBgPosition()
        }],
        /**
         * Mask Repeat
         * @see https://tailwindcss.com/docs/mask-repeat
         */
        "mask-repeat": [{
          mask: scaleBgRepeat()
        }],
        /**
         * Mask Size
         * @see https://tailwindcss.com/docs/mask-size
         */
        "mask-size": [{
          mask: scaleBgSize()
        }],
        /**
         * Mask Type
         * @see https://tailwindcss.com/docs/mask-type
         */
        "mask-type": [{
          "mask-type": ["alpha", "luminance"]
        }],
        /**
         * Mask Image
         * @see https://tailwindcss.com/docs/mask-image
         */
        "mask-image": [{
          mask: ["none", isArbitraryVariable, isArbitraryValue]
        }],
        // ---------------
        // --- Filters ---
        // ---------------
        /**
         * Filter
         * @see https://tailwindcss.com/docs/filter
         */
        filter: [{
          filter: [
            // Deprecated since Tailwind CSS v3.0.0
            "",
            "none",
            isArbitraryVariable,
            isArbitraryValue
          ]
        }],
        /**
         * Blur
         * @see https://tailwindcss.com/docs/blur
         */
        blur: [{
          blur: scaleBlur()
        }],
        /**
         * Brightness
         * @see https://tailwindcss.com/docs/brightness
         */
        brightness: [{
          brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Contrast
         * @see https://tailwindcss.com/docs/contrast
         */
        contrast: [{
          contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Drop Shadow
         * @see https://tailwindcss.com/docs/drop-shadow
         */
        "drop-shadow": [{
          "drop-shadow": [
            // Deprecated since Tailwind CSS v4.0.0
            "",
            "none",
            themeDropShadow,
            isArbitraryVariableShadow,
            isArbitraryShadow
          ]
        }],
        /**
         * Drop Shadow Color
         * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
         */
        "drop-shadow-color": [{
          "drop-shadow": scaleColor()
        }],
        /**
         * Grayscale
         * @see https://tailwindcss.com/docs/grayscale
         */
        grayscale: [{
          grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Hue Rotate
         * @see https://tailwindcss.com/docs/hue-rotate
         */
        "hue-rotate": [{
          "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Invert
         * @see https://tailwindcss.com/docs/invert
         */
        invert: [{
          invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Saturate
         * @see https://tailwindcss.com/docs/saturate
         */
        saturate: [{
          saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Sepia
         * @see https://tailwindcss.com/docs/sepia
         */
        sepia: [{
          sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Filter
         * @see https://tailwindcss.com/docs/backdrop-filter
         */
        "backdrop-filter": [{
          "backdrop-filter": [
            // Deprecated since Tailwind CSS v3.0.0
            "",
            "none",
            isArbitraryVariable,
            isArbitraryValue
          ]
        }],
        /**
         * Backdrop Blur
         * @see https://tailwindcss.com/docs/backdrop-blur
         */
        "backdrop-blur": [{
          "backdrop-blur": scaleBlur()
        }],
        /**
         * Backdrop Brightness
         * @see https://tailwindcss.com/docs/backdrop-brightness
         */
        "backdrop-brightness": [{
          "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Contrast
         * @see https://tailwindcss.com/docs/backdrop-contrast
         */
        "backdrop-contrast": [{
          "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Grayscale
         * @see https://tailwindcss.com/docs/backdrop-grayscale
         */
        "backdrop-grayscale": [{
          "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Hue Rotate
         * @see https://tailwindcss.com/docs/backdrop-hue-rotate
         */
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Invert
         * @see https://tailwindcss.com/docs/backdrop-invert
         */
        "backdrop-invert": [{
          "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Opacity
         * @see https://tailwindcss.com/docs/backdrop-opacity
         */
        "backdrop-opacity": [{
          "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Saturate
         * @see https://tailwindcss.com/docs/backdrop-saturate
         */
        "backdrop-saturate": [{
          "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Backdrop Sepia
         * @see https://tailwindcss.com/docs/backdrop-sepia
         */
        "backdrop-sepia": [{
          "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        // --------------
        // --- Tables ---
        // --------------
        /**
         * Border Collapse
         * @see https://tailwindcss.com/docs/border-collapse
         */
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        /**
         * Border Spacing
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing": [{
          "border-spacing": scaleUnambiguousSpacing()
        }],
        /**
         * Border Spacing X
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-x": [{
          "border-spacing-x": scaleUnambiguousSpacing()
        }],
        /**
         * Border Spacing Y
         * @see https://tailwindcss.com/docs/border-spacing
         */
        "border-spacing-y": [{
          "border-spacing-y": scaleUnambiguousSpacing()
        }],
        /**
         * Table Layout
         * @see https://tailwindcss.com/docs/table-layout
         */
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        /**
         * Caption Side
         * @see https://tailwindcss.com/docs/caption-side
         */
        caption: [{
          caption: ["top", "bottom"]
        }],
        // ---------------------------------
        // --- Transitions and Animation ---
        // ---------------------------------
        /**
         * Transition Property
         * @see https://tailwindcss.com/docs/transition-property
         */
        transition: [{
          transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Transition Behavior
         * @see https://tailwindcss.com/docs/transition-behavior
         */
        "transition-behavior": [{
          transition: ["normal", "discrete"]
        }],
        /**
         * Transition Duration
         * @see https://tailwindcss.com/docs/transition-duration
         */
        duration: [{
          duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Transition Timing Function
         * @see https://tailwindcss.com/docs/transition-timing-function
         */
        ease: [{
          ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Transition Delay
         * @see https://tailwindcss.com/docs/transition-delay
         */
        delay: [{
          delay: [isNumber, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Animation
         * @see https://tailwindcss.com/docs/animation
         */
        animate: [{
          animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
        }],
        // ------------------
        // --- Transforms ---
        // ------------------
        /**
         * Backface Visibility
         * @see https://tailwindcss.com/docs/backface-visibility
         */
        backface: [{
          backface: ["hidden", "visible"]
        }],
        /**
         * Perspective
         * @see https://tailwindcss.com/docs/perspective
         */
        perspective: [{
          perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Perspective Origin
         * @see https://tailwindcss.com/docs/perspective-origin
         */
        "perspective-origin": [{
          "perspective-origin": scalePositionWithArbitrary()
        }],
        /**
         * Rotate
         * @see https://tailwindcss.com/docs/rotate
         */
        rotate: [{
          rotate: scaleRotate()
        }],
        /**
         * Rotate X
         * @see https://tailwindcss.com/docs/rotate
         */
        "rotate-x": [{
          "rotate-x": scaleRotate()
        }],
        /**
         * Rotate Y
         * @see https://tailwindcss.com/docs/rotate
         */
        "rotate-y": [{
          "rotate-y": scaleRotate()
        }],
        /**
         * Rotate Z
         * @see https://tailwindcss.com/docs/rotate
         */
        "rotate-z": [{
          "rotate-z": scaleRotate()
        }],
        /**
         * Scale
         * @see https://tailwindcss.com/docs/scale
         */
        scale: [{
          scale: scaleScale()
        }],
        /**
         * Scale X
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-x": [{
          "scale-x": scaleScale()
        }],
        /**
         * Scale Y
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-y": [{
          "scale-y": scaleScale()
        }],
        /**
         * Scale Z
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-z": [{
          "scale-z": scaleScale()
        }],
        /**
         * Scale 3D
         * @see https://tailwindcss.com/docs/scale
         */
        "scale-3d": ["scale-3d"],
        /**
         * Skew
         * @see https://tailwindcss.com/docs/skew
         */
        skew: [{
          skew: scaleSkew()
        }],
        /**
         * Skew X
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-x": [{
          "skew-x": scaleSkew()
        }],
        /**
         * Skew Y
         * @see https://tailwindcss.com/docs/skew
         */
        "skew-y": [{
          "skew-y": scaleSkew()
        }],
        /**
         * Transform
         * @see https://tailwindcss.com/docs/transform
         */
        transform: [{
          transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
        }],
        /**
         * Transform Origin
         * @see https://tailwindcss.com/docs/transform-origin
         */
        "transform-origin": [{
          origin: scalePositionWithArbitrary()
        }],
        /**
         * Transform Style
         * @see https://tailwindcss.com/docs/transform-style
         */
        "transform-style": [{
          transform: ["3d", "flat"]
        }],
        /**
         * Translate
         * @see https://tailwindcss.com/docs/translate
         */
        translate: [{
          translate: scaleTranslate()
        }],
        /**
         * Translate X
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-x": [{
          "translate-x": scaleTranslate()
        }],
        /**
         * Translate Y
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-y": [{
          "translate-y": scaleTranslate()
        }],
        /**
         * Translate Z
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-z": [{
          "translate-z": scaleTranslate()
        }],
        /**
         * Translate None
         * @see https://tailwindcss.com/docs/translate
         */
        "translate-none": ["translate-none"],
        // ---------------------
        // --- Interactivity ---
        // ---------------------
        /**
         * Accent Color
         * @see https://tailwindcss.com/docs/accent-color
         */
        accent: [{
          accent: scaleColor()
        }],
        /**
         * Appearance
         * @see https://tailwindcss.com/docs/appearance
         */
        appearance: [{
          appearance: ["none", "auto"]
        }],
        /**
         * Caret Color
         * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
         */
        "caret-color": [{
          caret: scaleColor()
        }],
        /**
         * Color Scheme
         * @see https://tailwindcss.com/docs/color-scheme
         */
        "color-scheme": [{
          scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
        }],
        /**
         * Cursor
         * @see https://tailwindcss.com/docs/cursor
         */
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
        }],
        /**
         * Field Sizing
         * @see https://tailwindcss.com/docs/field-sizing
         */
        "field-sizing": [{
          "field-sizing": ["fixed", "content"]
        }],
        /**
         * Pointer Events
         * @see https://tailwindcss.com/docs/pointer-events
         */
        "pointer-events": [{
          "pointer-events": ["auto", "none"]
        }],
        /**
         * Resize
         * @see https://tailwindcss.com/docs/resize
         */
        resize: [{
          resize: ["none", "", "y", "x"]
        }],
        /**
         * Scroll Behavior
         * @see https://tailwindcss.com/docs/scroll-behavior
         */
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        /**
         * Scroll Margin
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-m": [{
          "scroll-m": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin X
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mx": [{
          "scroll-mx": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Y
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-my": [{
          "scroll-my": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Start
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ms": [{
          "scroll-ms": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin End
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-me": [{
          "scroll-me": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Top
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mt": [{
          "scroll-mt": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Right
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mr": [{
          "scroll-mr": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Bottom
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-mb": [{
          "scroll-mb": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Margin Left
         * @see https://tailwindcss.com/docs/scroll-margin
         */
        "scroll-ml": [{
          "scroll-ml": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-p": [{
          "scroll-p": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding X
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-px": [{
          "scroll-px": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Y
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-py": [{
          "scroll-py": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Start
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-ps": [{
          "scroll-ps": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding End
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pe": [{
          "scroll-pe": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Top
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pt": [{
          "scroll-pt": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Right
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pr": [{
          "scroll-pr": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Bottom
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pb": [{
          "scroll-pb": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Padding Left
         * @see https://tailwindcss.com/docs/scroll-padding
         */
        "scroll-pl": [{
          "scroll-pl": scaleUnambiguousSpacing()
        }],
        /**
         * Scroll Snap Align
         * @see https://tailwindcss.com/docs/scroll-snap-align
         */
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        /**
         * Scroll Snap Stop
         * @see https://tailwindcss.com/docs/scroll-snap-stop
         */
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        /**
         * Scroll Snap Type
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        /**
         * Scroll Snap Type Strictness
         * @see https://tailwindcss.com/docs/scroll-snap-type
         */
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        /**
         * Touch Action
         * @see https://tailwindcss.com/docs/touch-action
         */
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        /**
         * Touch Action X
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        /**
         * Touch Action Y
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        /**
         * Touch Action Pinch Zoom
         * @see https://tailwindcss.com/docs/touch-action
         */
        "touch-pz": ["touch-pinch-zoom"],
        /**
         * User Select
         * @see https://tailwindcss.com/docs/user-select
         */
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        /**
         * Will Change
         * @see https://tailwindcss.com/docs/will-change
         */
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
        }],
        // -----------
        // --- SVG ---
        // -----------
        /**
         * Fill
         * @see https://tailwindcss.com/docs/fill
         */
        fill: [{
          fill: ["none", ...scaleColor()]
        }],
        /**
         * Stroke Width
         * @see https://tailwindcss.com/docs/stroke-width
         */
        "stroke-w": [{
          stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
        }],
        /**
         * Stroke
         * @see https://tailwindcss.com/docs/stroke
         */
        stroke: [{
          stroke: ["none", ...scaleColor()]
        }],
        // ---------------------
        // --- Accessibility ---
        // ---------------------
        /**
         * Forced Color Adjust
         * @see https://tailwindcss.com/docs/forced-color-adjust
         */
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      },
      orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    };
  };
  const twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
  function cn(...inputs) {
    return twMerge(clsx(inputs));
  }
  const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9"
        }
      },
      defaultVariants: {
        variant: "default",
        size: "default"
      }
    }
  );
  const Button = reactExports.forwardRef(
    (_k, ref) => {
      var _l = _k, { className, variant, size, asChild = false } = _l, props = __objRest(_l, ["className", "variant", "size", "asChild"]);
      const Comp = asChild ? Slot : "button";
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Comp,
        __spreadValues({
          className: cn(buttonVariants({ variant, size, className })),
          ref
        }, props)
      );
    }
  );
  Button.displayName = "Button";
  function LanguageSwitcher({
    currentLanguage,
    onLanguageChange,
    className = ""
  }) {
    const [isOpen, setIsOpen] = reactExports.useState(false);
    const dropdownRef = reactExports.useRef(null);
    const currentLang = languages.find((lang) => lang.code === currentLanguage);
    reactExports.useEffect(() => {
      let timeoutId;
      const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setIsOpen(true);
      };
      const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
          setIsOpen(false);
        }, 100);
      };
      const dropdown = dropdownRef.current;
      if (dropdown) {
        dropdown.addEventListener("mouseenter", handleMouseEnter);
        dropdown.addEventListener("mouseleave", handleMouseLeave);
        return () => {
          dropdown.removeEventListener("mouseenter", handleMouseEnter);
          dropdown.removeEventListener("mouseleave", handleMouseLeave);
          clearTimeout(timeoutId);
        };
      }
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative ${className}`, ref: dropdownRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "flex items-center space-x-2 px-3 py-2 text-white font-medium rounded-lg hover:text-gray-100 transition-all duration-200",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: currentLang == null ? void 0 : currentLang.flag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-sm", children: currentLang == null ? void 0 : currentLang.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                className: `w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`,
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
              }
            )
          ]
        }
      ),
      isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full right-0 mt-2 w-32 bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50", children: languages.map((language) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            onLanguageChange(language.code);
            setIsOpen(false);
          },
          className: `w-full flex items-center space-x-3 px-4 py-2 text-sm transition-all duration-200 ${currentLanguage === language.code ? "bg-purple-100 text-purple-800" : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: language.flag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: language.name })
          ]
        },
        language.code
      )) })
    ] });
  }
  function NavigationBar({
    logo = "LoopX",
    navItems = [
      { label: "Home", href: "#home" },
      { label: "Solutions", href: "#solutions" },
      { label: "About Us", href: "#about" }
    ],
    dropdownItems = [
      { label: "Panel Book", href: "#" },
      { label: "ESOMAR 37", href: "#" }
    ],
    ctaButton = {
      label: "Join our Panel"
    }
  }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState("home");
    const location = useLocation();
    const navigate = useNavigate();
    const { language, setLanguage, getTranslation } = useLanguage();
    React.useEffect(() => {
      if (location.pathname === "/ai-analysis") {
        setActiveSection("ai-analysis");
      } else {
        setActiveSection("home");
      }
    }, [location.pathname]);
    React.useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 50);
        if (location.pathname === "/ai-analysis") {
          setActiveSection("ai-analysis");
          return;
        }
        const sections = ["home", "features", "solutions", "contact"];
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (currentSection) {
          setActiveSection(currentSection);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleNavClick = (section) => {
      if (location.pathname === "/ai-analysis") {
        if (section === "ai-analysis") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          navigate("/");
          setTimeout(() => {
            if (section === "home") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              const element = document.getElementById(section);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }
          }, 100);
        }
      } else {
        if (section === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (section === "ai-analysis") {
          navigate("/ai-analysis");
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "auto" });
          }, 0);
        } else {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: `fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${activeSection === "home" && !isScrolled ? "bg-transparent" : "bg-gradient-to-r from-[#6D25BE] to-[#45EA24] border-b border-[#6D25BE]/30"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center h-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity", children: logo }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center space-x-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleNavClick("home"),
              className: `font-medium transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 ${activeSection === "home" ? "text-gray-100" : "text-white hover:text-gray-100"}`,
              children: [
                getTranslation("nav.home"),
                activeSection === "home" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleNavClick("features"),
              className: `font-medium transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 ${activeSection === "features" ? "text-gray-100" : "text-white hover:text-gray-100"}`,
              children: [
                getTranslation("nav.whyUs"),
                activeSection === "features" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleNavClick("solutions"),
              className: `font-medium transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 ${activeSection === "solutions" ? "text-gray-100" : "text-white hover:text-gray-100"}`,
              children: [
                getTranslation("nav.solutions"),
                activeSection === "solutions" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleNavClick("ai-analysis"),
              className: `font-medium transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 ${activeSection === "ai-analysis" ? "text-gray-100" : "text-white hover:text-gray-100"}`,
              children: [
                getTranslation("nav.aiAnalysis"),
                activeSection === "ai-analysis" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handleNavClick("contact"),
              className: `font-medium transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 ${activeSection === "contact" ? "text-gray-100" : "text-white hover:text-gray-100"}`,
              children: [
                getTranslation("nav.contact"),
                activeSection === "contact" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "text-white flex items-center font-medium hover:text-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1", children: [
              getTranslation("nav.resources"),
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "ml-1 w-4 h-4 group-hover:rotate-180 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#",
                  className: "block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 rounded-t-lg",
                  children: getTranslation("nav.panelBook")
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#",
                  className: "block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 rounded-b-lg",
                  children: getTranslation("nav.esomar37")
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            LanguageSwitcher,
            {
              currentLanguage: language,
              onLanguageChange: setLanguage
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-white font-medium hover:text-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1", children: getTranslation("nav.signIn") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: ctaButton.onClick,
              className: "bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg",
              children: getTranslation("nav.joinPanel")
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden flex items-center space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            LanguageSwitcher,
            {
              currentLanguage: language,
              onLanguageChange: setLanguage
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-white font-medium text-sm hover:text-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1", children: getTranslation("nav.signIn") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
              className: "p-2 rounded-lg hover:bg-white/10 transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-6 h-6 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }) })
            }
          )
        ] })
      ] }),
      isMobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-white/20 bg-white/10 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              handleNavClick("home");
              setIsMobileMenuOpen(false);
            },
            className: `block font-medium py-2 rounded-lg px-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent w-full text-left ${activeSection === "home" ? "text-gray-100 bg-white/25" : "text-white hover:text-gray-100 hover:bg-white/15"}`,
            children: getTranslation("nav.home")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              handleNavClick("features");
              setIsMobileMenuOpen(false);
            },
            className: `block font-medium py-2 rounded-lg px-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent w-full text-left ${activeSection === "features" ? "text-gray-100 bg-white/25" : "text-white hover:text-gray-100 hover:bg-white/15"}`,
            children: getTranslation("nav.whyUs")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              handleNavClick("solutions");
              setIsMobileMenuOpen(false);
            },
            className: `block font-medium py-2 rounded-lg px-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent w-full text-left ${activeSection === "solutions" ? "text-gray-100 bg-white/25" : "text-white hover:text-gray-100 hover:bg-white/15"}`,
            children: getTranslation("nav.solutions")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              handleNavClick("ai-analysis");
              setIsMobileMenuOpen(false);
            },
            className: `block font-medium py-2 rounded-lg px-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent w-full text-left ${activeSection === "ai-analysis" ? "text-gray-100 bg-white/25" : "text-white hover:text-gray-100 hover:bg-white/15"}`,
            children: getTranslation("nav.aiAnalysis")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              handleNavClick("contact");
              setIsMobileMenuOpen(false);
            },
            className: `block font-medium py-2 rounded-lg px-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent w-full text-left ${activeSection === "contact" ? "text-gray-100 bg-white/25" : "text-white hover:text-gray-100 hover:bg-white/15"}`,
            children: getTranslation("nav.contact")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/20 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-white mb-2", children: getTranslation("nav.resources") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "block text-white py-2 pl-4 rounded-lg hover:text-gray-100 hover:bg-white/15 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent",
              onClick: () => setIsMobileMenuOpen(false),
              children: getTranslation("nav.panelBook")
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "block text-white py-2 pl-4 rounded-lg hover:text-gray-100 hover:bg-white/15 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent",
              onClick: () => setIsMobileMenuOpen(false),
              children: getTranslation("nav.esomar37")
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/20 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: ctaButton.onClick,
            className: "w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg",
            children: getTranslation("nav.joinPanel")
          }
        ) })
      ] }) })
    ] }) });
  }
  function AnimatedBackground({ className = "" }) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `absolute inset-0 overflow-hidden ${className}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-2 h-2 bg-white/30 rounded-full top-1/4 left-1/4 animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-1 h-1 bg-white/40 rounded-full top-1/3 right-1/3 animate-pulse", style: { animationDelay: "1s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-1.5 h-1.5 bg-white/25 rounded-full bottom-1/4 left-1/3 animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-16 h-16 border border-white/20 rounded-lg top-1/4 right-1/4 transform rotate-45 animate-spin", style: { animationDuration: "20s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-12 h-12 bg-white/10 rounded-full bottom-1/3 left-1/4 animate-bounce", style: { animationDuration: "3s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-20 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent top-1/2 left-1/6 transform rotate-45 animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-16 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent bottom-1/3 right-1/6 transform -rotate-30 animate-pulse", style: { animationDelay: "1s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-3 h-3 bg-white/40 rounded-full top-1/3 left-1/2 animate-ping", style: { animationDuration: "2s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-2 h-2 bg-white/50 rounded-full bottom-1/4 right-1/4 animate-ping", style: { animationDuration: "2s", animationDelay: "1s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12" })
    ] });
  }
  function generateGalaxyParticles(stars, arms, core, fade, discRadius = 42, centerX = 50, centerY = 50) {
    const arr = [];
    for (let i = 0; i < stars; i++) {
      const t2 = i / Math.max(1, stars - 1);
      const r2 = core + (1 - core) * Math.pow(t2, 0.9);
      const base = 6.2 * t2;
      const armOffset = i % arms / arms * Math.PI * 2;
      const noise = (Math.random() - 0.5) * 0.22;
      const theta = base + armOffset + noise;
      const R2 = discRadius * r2;
      const x2 = centerX + R2 * Math.cos(theta);
      const y2 = centerY + R2 * Math.sin(theta);
      const a = Math.min(1, (1 - t2) * fade + 0.22);
      const sz = 0.55 + 1.9 * (1 - t2) * (Math.random() * 0.9 + 0.1);
      arr.push({ x: x2, y: y2, a, sz });
    }
    return arr;
  }
  function generateDefaultPlanets() {
    return [
      { x: 1, y: 48, r: 2, delay: 0 },
      { x: 4, y: 1, r: 2, delay: 0 },
      { x: 32, y: 48, r: 1.5, delay: 2 },
      { x: 48, y: 64, r: 1.8, delay: 4 },
      { x: 100, y: 80, r: 1.8, delay: 4 },
      { x: 80, y: 80, r: 1.8, delay: 4 },
      { x: 80, y: 80, r: 1.8, delay: 4 },
      { x: 80, y: 80, r: 3, delay: 4 }
    ];
  }
  function generateDefaultStars() {
    return [
      { x: 56, y: 40, r: 0.8, opacity: 0.8, duration: 2, delay: 0 },
      { x: 56, y: 40, r: 0.8, opacity: 0.8, duration: 2, delay: 0 },
      { x: 56, y: 40, r: 0.8, opacity: 0.8, duration: 2, delay: 0 },
      { x: 56, y: 40, r: 0.8, opacity: 0.8, duration: 2, delay: 0 },
      { x: 56, y: 100, r: 0.8, opacity: 0.8, duration: 2, delay: 0 },
      { x: 70, y: 10, r: 3, opacity: 0.7, duration: 2.5, delay: 1 },
      { x: 70, y: 30, r: 0.5, opacity: 0.7, duration: 1.8, delay: 0.5 },
      { x: 30, y: 70, r: 0.7, opacity: 0.5, duration: 3, delay: 1.5 }
    ];
  }
  function renderPlanets(planets) {
    return planets.map((planet, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "circle",
      {
        cx: planet.x,
        cy: planet.y,
        r: planet.r,
        fill: "url(#star-glow)",
        style: {
          animation: `planet-orbit 8s linear infinite ${planet.delay}s`
        }
      },
      `planet-${index2}`
    ));
  }
  function renderStars(stars) {
    return stars.map((star, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "circle",
      {
        cx: star.x,
        cy: star.y,
        r: star.r,
        fill: "white",
        opacity: star.opacity,
        style: {
          animation: `star-twinkle ${star.duration}s ease-in-out infinite ${star.delay}s`
        }
      },
      `star-${index2}`
    ));
  }
  function generateAnimationStyles(spin) {
    return `
    @media (prefers-reduced-motion: reduce) {
      .galaxy-outer svg { animation: none !important; }
    }
    @keyframes galaxy-spin {
      0%   { transform: rotateZ(0deg); }
      100% { transform: rotateZ(360deg); }
    }
    @keyframes galaxy-breathe {
      0%, 100% { filter: brightness(1); }
      50%      { filter: brightness(1.08); }
    }
    @keyframes planet-orbit {
      0%   { transform: rotate(0deg) translateX(0px) rotate(0deg); }
      100% { transform: rotate(360deg) translateX(0px) rotate(-360deg); }
    }
            @keyframes star-twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%      { opacity: 1; transform: scale(1.2); }
        }
        @keyframes core-pulse {
          0%, 100% { 
            opacity: 0.95; 
            filter: brightness(1);
          }
          25% { 
            opacity: 1; 
            filter: brightness(1.3);
          }
          50% { 
            opacity: 0.8; 
            filter: brightness(0.8);
          }
          75% { 
            opacity: 1; 
            filter: brightness(1.2);
          }
        }
    .galaxy-outer:hover svg[style*="galaxy-spin"] {
      animation-duration: ${Math.max(10, spin * 0.7)}s;
    }
  `;
  }
  function LogoGalaxy({
    size = 72,
    arms = 3,
    starCount = 280,
    spin = 28,
    core = 0.16,
    fade = 0.35,
    breathe = true,
    tiltX = 55,
    tiltY = 30,
    planets = generateDefaultPlanets(),
    starPoints = generateDefaultStars(),
    label = "Galaxy logo",
    className
  }) {
    const S2 = size;
    const Cx = 50, Cy = 50;
    const discRadius = 42;
    const spinAnim = `galaxy-spin ${spin}s linear infinite`;
    const breatheAnim = breathe ? `, galaxy-breathe 6.5s ease-in-out infinite` : "";
    const pts = reactExports.useMemo(
      () => generateGalaxyParticles(starCount, arms, core, fade, discRadius, Cx, Cy),
      [starCount, arms, core, fade]
    );
    const [t2, setT] = reactExports.useState(0);
    const rafRef = reactExports.useRef(null);
    reactExports.useEffect(() => {
      const start = performance.now();
      const loop = (now) => {
        setT((now - start) / 1e3);
        rafRef.current = requestAnimationFrame(loop);
      };
      rafRef.current = requestAnimationFrame(loop);
      return () => {
        if (rafRef.current)
          cancelAnimationFrame(rafRef.current);
      };
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "aria-label": label,
        role: "img",
        className: ["galaxy-outer", className].filter(Boolean).join(" "),
        style: {
          width: S2,
          height: S2,
          display: "inline-grid",
          placeItems: "center",
          perspective: 700,
          filter: "drop-shadow(0 2px 10px rgba(255,255,255,.28))"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                width: S2,
                height: S2,
                transformStyle: "preserve-3d",
                transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  viewBox: "0 0 100 100",
                  width: S2,
                  height: S2,
                  style: { transformOrigin: "50% 50%", animation: spinAnim + breatheAnim },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "g-core", cx: "50%", cy: "50%", r: "62%", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "rgba(255,255,255,0.95)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "rgba(255,255,255,0)" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "star-glow", cx: "50%", cy: "50%", r: "50%", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "rgba(255,255,255,1)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "70%", stopColor: "rgba(255,255,255,0.8)" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "rgba(255,255,255,0)" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "circle",
                      {
                        cx: "50",
                        cy: "50",
                        r: 12,
                        fill: "url(#g-core)",
                        opacity: 0.95,
                        style: { animation: "core-pulse 4s ease-in-out infinite" }
                      }
                    ),
                    pts.map((p2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: p2.x, cy: p2.y, r: p2.sz / 2, fill: "#FFFFFF", opacity: p2.a }, i)),
                    renderPlanets(planets),
                    renderStars(starPoints)
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: generateAnimationStyles(spin) })
        ]
      }
    );
  }
  function HeroSection({
    title,
    subtitle,
    description,
    showAnimatedShapes = true
  }) {
    const { language, getTranslation } = useLanguage();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative", children: [
      showAnimatedShapes && /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBackground, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto relative z-10 px-4 pt-20 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 text-center lg:text-left space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-2xl md:text-3xl font-medium text-cyan-100 leading-relaxed drop-shadow-md", children: subtitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg sm:text-xl md:text-2xl text-green-100 leading-relaxed drop-shadow-sm max-w-2xl mx-auto lg:mx-0", children: description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center lg:justify-start items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#solutions",
                className: "bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 text-lg shadow-lg",
                children: getTranslation("hero.dashboard.learnMore")
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-[150px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoGalaxy, { size: 120, spin: 40 }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-[25px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-400/20 backdrop-blur-sm rounded-lg p-2 border border-green-400/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-400 text-sm font-medium", children: getTranslation("hero.dashboard.online") })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-3" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-xl p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/90 text-sm font-medium mb-2", children: getTranslation("hero.dashboard.activeSurveys") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-lg font-bold mb-3", children: "100+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-400 text-sm font-medium", children: "85% Complete" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/30 rounded-full h-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-400 h-1.5 rounded-full", style: { width: "85%" } }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-xl p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-sm mb-2", children: getTranslation("hero.dashboard.availableRespondents") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-2xl font-bold mb-1", children: "6M+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-400 text-sm font-medium", children: "+4% this week" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-xl p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-sm mb-2", children: getTranslation("hero.dashboard.responseRate") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-2xl font-bold mb-1", children: "98.5%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-400 text-sm font-medium", children: "High Quality" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-xl p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-sm mb-2", children: getTranslation("hero.dashboard.fraudDetection") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/30 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-400 h-2 rounded-full", style: { width: "0.5%" } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-sm font-bold mt-1", children: "0.5% Rate" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/20 rounded-xl p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-sm mb-2", children: getTranslation("hero.dashboard.memberSatisfaction") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-white/30 rounded-full h-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-400 h-2 rounded-full", style: { width: "98%" } }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-sm font-bold mt-1", children: "98% Rate" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-400/20 to-blue-400/20 border border-purple-400/30 rounded-xl p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-purple-400 rounded-full animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-purple-200 text-sm font-medium", children: getTranslation("hero.dashboard.comingSoon") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-sm", children: getTranslation("hero.dashboard.aiAnalysis") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-xs mt-1", children: getTranslation("hero.dashboard.aiDescription") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center space-x-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex space-x-1", children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 bg-white/60 rounded-full animate-pulse", style: { animationDelay: `${i * 0.2}s` } }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80 text-sm", children: getTranslation("hero.dashboard.connected") })
          ] })
        ] }) }) }) })
      ] }) })
    ] });
  }
  const iconMap = {
    // 基础图标
    lightning: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }),
    shield: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" }),
    lock: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }),
    target: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" }),
    globe: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }),
    chart: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }),
    chat: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }),
    test: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" }),
    check: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" }),
    users: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" }),
    clock: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }),
    heart: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }),
    document: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }),
    brain: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" }),
    "trending-up": /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.25 18L9 11.25l4.306 4.307a1.125 1.125 0 015.136 1.049l1.415-4.242a1.125 1.125 0 00-.317-1.283L13.5 4.5a1.125 1.125 0 00-1.591 0L9 7.5 2.25 18z" }),
    "message-circle": /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }),
    "bar-chart": /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" }),
    settings: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" }),
    zap: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }),
    star: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" })
  };
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12"
  };
  function Icon({ name, className = "", size = "md" }) {
    const iconPath = iconMap[name];
    if (!iconPath) {
      console.warn(`Icon "${name}" not found`);
      return null;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        className: `${sizeClasses[size]} ${className}`,
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        children: iconPath
      }
    );
  }
  function CounterAnimation({
    value,
    duration = 2e3,
    className = ""
  }) {
    const [displayValue, setDisplayValue] = reactExports.useState("0");
    const [isVisible, setIsVisible] = reactExports.useState(false);
    const elementRef = reactExports.useRef(null);
    const animationRef = reactExports.useRef(null);
    reactExports.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setDisplayValue("0");
          } else {
            setIsVisible(false);
            if (animationRef.current) {
              clearInterval(animationRef.current);
              animationRef.current = null;
            }
          }
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -100px 0px"
        }
      );
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
      return () => {
        observer.disconnect();
        if (animationRef.current) {
          clearInterval(animationRef.current);
        }
      };
    }, []);
    reactExports.useEffect(() => {
      const timer = setTimeout(() => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
          if (isInViewport && !isVisible) {
            setIsVisible(true);
            setDisplayValue("0");
          }
        }
      }, 500);
      return () => clearTimeout(timer);
    }, [isVisible]);
    reactExports.useEffect(() => {
      if (!isVisible)
        return;
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
      const numericValue = parseInt(value.replace(/[^\d]/g, ""));
      const suffix = value.replace(/[\d,]/g, "");
      let currentValue = 0;
      const increment = numericValue / (duration / 16);
      animationRef.current = setInterval(() => {
        currentValue += increment;
        if (currentValue >= numericValue) {
          currentValue = numericValue;
          if (animationRef.current) {
            clearInterval(animationRef.current);
            animationRef.current = null;
          }
        }
        const formattedValue = Math.floor(currentValue).toLocaleString();
        setDisplayValue(formattedValue + suffix);
      }, 16);
      return () => {
        if (animationRef.current) {
          clearInterval(animationRef.current);
          animationRef.current = null;
        }
      };
    }, [isVisible, value, duration]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: elementRef, className, children: displayValue });
  }
  function FeaturesSection({
    title = "Why Trust Us",
    className = "py-16 sm:py-20 lg:py-24 bg-white"
  }) {
    const { getTranslation } = useLanguage();
    const features = getTranslation("features.features");
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 sm:space-y-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-3 sm:px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-xs sm:text-sm font-medium border border-purple-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "star", className: "mr-2 text-yellow-500 fill-current", size: "sm" }),
            getTranslation("features.badge")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight", children: getTranslation("features.title") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                CounterAnimation,
                {
                  value: "95%+",
                  className: "text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",
                  duration: 2500
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm font-medium text-gray-700", children: getTranslation("features.accuracyRate") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                CounterAnimation,
                {
                  value: "6M+",
                  className: "text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",
                  duration: 2e3
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm font-medium text-gray-700", children: getTranslation("features.activeRespondents") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                CounterAnimation,
                {
                  value: "30+",
                  className: "text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",
                  duration: 2500
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm font-medium text-gray-700", children: getTranslation("features.countriesCovered") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6", children: features.map((feature, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: feature.icon, className: "w-6 h-6 text-purple-600 group-hover:text-purple-700" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 group-hover:text-purple-800 transition-colors duration-300 mb-2", children: feature.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 group-hover:text-purple-700 transition-colors duration-300", children: feature.description })
            ] })
          ] })
        },
        index2
      )) })
    ] }) }) });
  }
  function SolutionsSection({
    title = "Industry-Specific Solutions",
    subtitle = "Tailored research solutions for 20+ industries with specialized respondent pools",
    className = "py-16 sm:py-20 bg-gray-50"
  }) {
    const { getTranslation, language } = useLanguage();
    const solutions = [
      {
        title: language === "zh" ? "技术与数字服务" : language === "fr" ? "Technologie et Services Numériques" : language === "de" ? "Technologie & Digitale Dienste" : language === "ko" ? "기술 및 디지털 서비스" : language === "ja" ? "技術・デジタルサービス" : "Technology & Digital Services",
        description: language === "zh" ? "为软件、硬件和数字化转型提供全面的研究" : language === "fr" ? "Recherche complète pour les logiciels, matériels et transformation numérique" : language === "de" ? "Umfassende Forschung für Software, Hardware und digitale Transformation" : language === "ko" ? "소프트웨어, 하드웨어 및 디지털 전환을 위한 포괄적인 연구" : language === "ja" ? "ソフトウェア、ハードウェア、デジタル変革のための包括的な研究" : "Comprehensive research for software, hardware, and digital transformation",
        icon: "chart",
        features: language === "zh" ? ["产品可用性测试", "功能验证", "用户体验研究"] : language === "fr" ? ["Test de convivialité", "Validation des fonctionnalités", "Recherche UX"] : language === "de" ? ["Produktnutzbarkeitstest", "Funktionsvalidierung", "UX-Forschung"] : language === "ko" ? ["제품 사용성 테스트", "기능 검증", "사용자 경험 연구"] : language === "ja" ? ["製品ユーザビリティテスト", "機能検証", "UX研究"] : ["Product usability testing", "Feature validation", "User experience research"],
        industries: language === "zh" ? ["信息技术", "计算机硬件", "计算机与网络安全"] : language === "fr" ? ["Technologies de l'information", "Matériel informatique", "Sécurité informatique"] : language === "de" ? ["Informationstechnologie", "Computerhardware", "Computersicherheit"] : language === "ko" ? ["정보 기술", "컴퓨터 하드웨어", "컴퓨터 및 네트워크 보안"] : language === "ja" ? ["情報技術", "コンピュータハードウェア", "コンピュータ・ネットワークセキュリティ"] : ["Information Technology", "Computer Hardware", "Computer & Network Security"]
      },
      {
        title: language === "zh" ? "医疗保健与生命科学" : language === "fr" ? "Santé et Sciences de la Vie" : language === "de" ? "Gesundheitswesen & Biowissenschaften" : language === "ko" ? "헬스케어 및 생명과학" : language === "ja" ? "ヘルスケア・ライフサイエンス" : "Healthcare & Life Sciences",
        description: language === "zh" ? "为医疗设备、制药和医疗保健服务提供专业研究" : language === "fr" ? "Recherche spécialisée pour dispositifs médicaux, pharmaceutiques et services de santé" : language === "de" ? "Spezialisierte Forschung für Medizinprodukte, Pharmazeutika und Gesundheitsdienstleistungen" : language === "ko" ? "의료기기, 제약 및 의료 서비스를 위한 전문 연구" : language === "ja" ? "医療機器、製薬、ヘルスケアサービスのための専門研究" : "Specialized research for medical devices, pharmaceuticals, and healthcare services",
        icon: "heart",
        features: language === "zh" ? ["临床试验招募", "患者满意度", "医疗设备测试"] : language === "fr" ? ["Recrutement d'essais cliniques", "Satisfaction des patients", "Test de dispositifs médicaux"] : language === "de" ? ["Klinische Studienrekrutierung", "Patientenzufriedenheit", "Medizinproduktetest"] : language === "ko" ? ["임상시험 모집", "환자 만족도", "의료기기 테스트"] : language === "ja" ? ["臨床試験募集", "患者満足度", "医療機器テスト"] : ["Clinical trial recruitment", "Patient satisfaction", "Medical device testing"],
        industries: language === "zh" ? ["医院与医疗保健", "医疗设备", "制药"] : language === "fr" ? ["Hôpitaux et soins de santé", "Dispositifs médicaux", "Pharmaceutique"] : language === "de" ? ["Krankenhäuser & Gesundheitswesen", "Medizinprodukte", "Pharmazeutika"] : language === "ko" ? ["병원 및 의료", "의료기기", "제약"] : language === "ja" ? ["病院・ヘルスケア", "医療機器", "製薬"] : ["Hospital & Health Care", "Medical Devices", "Pharmaceuticals"]
      },
      {
        title: language === "zh" ? "金融与银行服务" : language === "fr" ? "Services Financiers et Bancaires" : language === "de" ? "Finanz- und Bankdienstleistungen" : language === "ko" ? "금융 및 은행 서비스" : language === "ja" ? "金融・銀行サービス" : "Financial & Banking Services",
        description: language === "zh" ? "为银行、保险和金融科技提供针对性研究" : language === "fr" ? "Recherche ciblée pour banques, assurances et fintech" : language === "de" ? "Zielgerichtete Forschung für Banken, Versicherungen und Fintech" : language === "ko" ? "은행, 보험 및 핀테크를 위한 타겟 연구" : language === "ja" ? "銀行、保険、フィンテックのためのターゲット研究" : "Targeted research for banking, insurance, and financial technology",
        icon: "shield",
        features: language === "zh" ? ["客户满意度", "产品采用", "风险评估"] : language === "fr" ? ["Satisfaction client", "Adoption de produits", "Évaluation des risques"] : language === "de" ? ["Kundenzufriedenheit", "Produktadoption", "Risikobewertung"] : language === "ko" ? ["고객 만족도", "제품 채택", "위험 평가"] : language === "ja" ? ["顧客満足度", "製品採用", "リスク評価"] : ["Customer satisfaction", "Product adoption", "Risk assessment"],
        industries: language === "zh" ? ["银行业", "金融服务", "投资银行"] : language === "fr" ? ["Banque", "Services financiers", "Banque d'investissement"] : language === "de" ? ["Bankwesen", "Finanzdienstleistungen", "Investmentbanking"] : language === "ko" ? ["은행업", "금융 서비스", "투자 은행"] : language === "ja" ? ["銀行業", "金融サービス", "投資銀行"] : ["Banking", "Financial Services", "Investment Banking"]
      }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "solutions", className, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 sm:mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6", children: getTranslation("solutions.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-gray-600 leading-relaxed mb-4 italic", children: getTranslation("solutions.subtitle") }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8", children: solutions.map((solution, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-4 sm:mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-3 sm:mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 sm:w-16 sm:h-16 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-purple-50 transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: solution.icon, className: "text-gray-600 group-hover:text-purple-700", size: "xl" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-800 transition-colors duration-300", children: solution.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-gray-600 group-hover:text-purple-700 transition-colors duration-300", children: solution.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 sm:space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 mb-2 text-sm sm:text-base", children: language === "zh" ? "主要功能:" : language === "fr" ? "Fonctionnalités Clés:" : language === "de" ? "Hauptfunktionen:" : language === "ko" ? "주요 기능:" : language === "ja" ? "主要機能:" : "Key Features:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: solution.features.map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs sm:text-sm text-gray-600 flex items-center group-hover:text-purple-700 transition-colors duration-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 mr-2 group-hover:text-purple-500", children: "•" }),
              feature
            ] }, idx)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 mb-2 text-sm sm:text-base", children: language === "zh" ? "适用于:" : language === "fr" ? "Idéal pour:" : language === "de" ? "Ideal für:" : language === "ko" ? "적합한 분야:" : language === "ja" ? "理想的な対象:" : "Ideal for:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 sm:gap-2", children: solution.industries.map((industry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm group-hover:bg-purple-100 group-hover:text-purple-800 transition-colors duration-300", children: industry }, idx)) })
          ] })
        ] })
      ] }, index2)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 sm:mt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8 sm:mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4", children: getTranslation("solutions.completeCoverage") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-gray-600 italic", children: getTranslation("solutions.servingIndustries") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4", children: (language === "zh" ? [
          "信息技术",
          "医院与医疗保健",
          "银行业",
          "零售业",
          "教育管理",
          "房地产",
          "金融服务",
          "建筑业",
          "消费者服务",
          "营销与广告",
          "汽车业",
          "酒店业",
          "计算机硬件",
          "医疗设备",
          "电信",
          "保险业",
          "人力资源",
          "市场研究",
          "制药",
          "消费电子"
        ] : language === "fr" ? [
          "Technologies de l'information",
          "Hôpitaux et soins de santé",
          "Banque",
          "Commerce de détail",
          "Gestion de l'éducation",
          "Immobilier",
          "Services financiers",
          "Construction",
          "Services aux consommateurs",
          "Marketing et publicité",
          "Automobile",
          "Hôtellerie",
          "Matériel informatique",
          "Dispositifs médicaux",
          "Télécommunications",
          "Assurance",
          "Ressources humaines",
          "Études de marché",
          "Pharmaceutique",
          "Électronique grand public"
        ] : language === "de" ? [
          "Informationstechnologie",
          "Krankenhäuser & Gesundheitswesen",
          "Bankwesen",
          "Einzelhandel",
          "Bildungsmanagement",
          "Immobilien",
          "Finanzdienstleistungen",
          "Bauwesen",
          "Verbraucherdienstleistungen",
          "Marketing und Werbung",
          "Automobil",
          "Gastgewerbe",
          "Computerhardware",
          "Medizinprodukte",
          "Telekommunikation",
          "Versicherung",
          "Personalwesen",
          "Marktforschung",
          "Pharmazeutika",
          "Unterhaltungselektronik"
        ] : language === "ko" ? [
          "정보 기술",
          "병원 및 의료",
          "은행업",
          "소매업",
          "교육 관리",
          "부동산",
          "금융 서비스",
          "건설업",
          "소비자 서비스",
          "마케팅 및 광고",
          "자동차",
          "호텔업",
          "컴퓨터 하드웨어",
          "의료기기",
          "통신",
          "보험",
          "인적 자원",
          "시장 조사",
          "제약",
          "소비자 전자제품"
        ] : language === "ja" ? [
          "情報技術",
          "病院・ヘルスケア",
          "銀行業",
          "小売業",
          "教育管理",
          "不動産",
          "金融サービス",
          "建設業",
          "消費者サービス",
          "マーケティング・広告",
          "自動車",
          "ホスピタリティ",
          "コンピュータハードウェア",
          "医療機器",
          "通信",
          "保険",
          "人材",
          "市場調査",
          "製薬",
          "家電"
        ] : [
          "Information Technology",
          "Hospital & Health Care",
          "Banking",
          "Retail",
          "Education Management",
          "Real Estate",
          "Financial Services",
          "Construction",
          "Consumer Services",
          "Marketing and Advertising",
          "Automotive",
          "Hospitality",
          "Computer Hardware",
          "Medical Devices",
          "Telecommunications",
          "Insurance",
          "Human Resources",
          "Market Research",
          "Pharmaceuticals",
          "Consumer Electronics"
        ]).map((industry, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-lg p-3 sm:p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 hover:border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs sm:text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors duration-300", children: industry }) }, index2)) })
      ] })
    ] }) });
  }
  function TrustQualitySection({
    title = "Trust & Quality",
    subtitle = "Precise, fast and cost-effective. Our panel members are satisfied and motivated, delivering excellent response quality.",
    className = "py-16 sm:py-20 bg-white"
  }) {
    const { getTranslation, language } = useLanguage();
    const features = language === "zh" ? [
      {
        icon: "check",
        title: "双重确认验证",
        description: "所有成员都通过双重确认流程进行验证，确保真实和积极参与的受访者。",
        highlight: "60% 推荐率"
      },
      {
        icon: "users",
        title: "高度档案化成员",
        description: "详细的人口统计、专业和行为档案，实现精准定位。",
        highlight: "0.3% 欺诈率"
      },
      {
        icon: "clock",
        title: "实时支持",
        description: "全天候支持团队确保项目顺利执行和成员满意度。",
        highlight: "24/7 在线"
      },
      {
        icon: "heart",
        title: "成员满意度",
        description: "快乐和积极参与的成员提供更好的质量响应和更高的完成率。",
        highlight: "98% 满意度"
      }
    ] : [
      {
        icon: "check",
        title: "Double Opt-in Verification",
        description: "All members are verified through double opt-in process, ensuring genuine and engaged respondents.",
        highlight: "60% referrals"
      },
      {
        icon: "users",
        title: "Highly Profiled Members",
        description: "Detailed demographic, professional, and behavioral profiling for precise targeting.",
        highlight: "0.3% fraud rate"
      },
      {
        icon: "clock",
        title: "Live Support",
        description: "Round-the-clock support team to ensure smooth project execution and member satisfaction.",
        highlight: "24/7 online"
      },
      {
        icon: "heart",
        title: "Member Satisfaction",
        description: "Happy and engaged members provide better quality responses and higher completion rates.",
        highlight: "98% satisfaction"
      }
    ];
    const values = language === "zh" ? [
      {
        title: "为客户创造价值",
        description: "提供卓越的研究洞察，以95%的准确率和可操作的建议推动商业决策",
        gradient: "from-white to-purple-50"
      },
      {
        title: "公平奖励成员",
        description: "确保我们的面板成员通过竞争性费率和透明支付系统获得公平补偿",
        gradient: "from-white to-purple-50"
      },
      {
        title: "快乐的员工",
        description: "建立一支对研究和客户成功充满热情，并拥有持续学习和成长机会的团队",
        gradient: "from-white to-purple-50"
      }
    ] : [
      {
        title: "Value to Customers",
        description: "Delivering exceptional research insights that drive business decisions with 95% accuracy rate and actionable recommendations",
        gradient: "from-white to-purple-50"
      },
      {
        title: "Fair Reward to Members",
        description: "Ensuring our panel members are fairly compensated with competitive rates and transparent payment systems",
        gradient: "from-white to-purple-50"
      },
      {
        title: "Happy Employees",
        description: "Building a team that's passionate about research and customer success with continuous learning and growth opportunities",
        gradient: "from-white to-purple-50"
      }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 sm:mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6", children: getTranslation("trustQuality.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-gray-600 leading-relaxed mb-4 italic tracking-wide", children: getTranslation("trustQuality.subtitle") }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: features.map((feature, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: feature.icon, className: "w-6 h-6 text-purple-600 group-hover:text-purple-700" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 group-hover:text-purple-800 transition-colors duration-300", children: feature.title }),
            feature.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium", children: feature.highlight })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 group-hover:text-purple-700 transition-colors duration-300", children: feature.description })
        ] })
      ] }) }, index2)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 sm:mt-16 text-center p-6 sm:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8", children: getTranslation("trustQuality.ourValues") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: values.map((value, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-4 group-hover:text-purple-800 transition-colors duration-300", children: value.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 group-hover:text-purple-700 transition-colors duration-300", children: value.description })
        ] }, index2)) })
      ] })
    ] }) });
  }
  function useContactForm(onSubmit) {
    const [email, setEmail] = reactExports.useState("");
    const [isLoading, setIsLoading] = reactExports.useState(false);
    const [isSubmitted, setIsSubmitted] = reactExports.useState(false);
    const [error, setError] = reactExports.useState(null);
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      if (error)
        setError(null);
    };
    const handleSubmit = (e) => __async(this, null, function* () {
      e.preventDefault();
      if (!email.trim()) {
        setError("Please enter your email address");
        return;
      }
      if (!email.includes("@")) {
        setError("Please enter a valid email address");
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        yield new Promise((resolve) => setTimeout(resolve, 1e3));
        if (onSubmit) {
          onSubmit(email);
        }
        setIsSubmitted(true);
        setEmail("");
      } catch (err) {
        setError("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    });
    const reset = () => {
      setEmail("");
      setIsLoading(false);
      setIsSubmitted(false);
      setError(null);
    };
    return {
      email,
      isLoading,
      isSubmitted,
      error,
      handleEmailChange,
      handleSubmit,
      reset
    };
  }
  function ContactSection({
    title = "Ready to Get Started?",
    subtitle = "Join thousands of research teams who trust LoopX for their sample needs.",
    placeholder = "Enter your email address",
    buttonText = "Get Started",
    onSubmit,
    className = "py-16 sm:py-20 bg-gradient-to-br from-green-50/40 via-purple-50/30 to-purple-100/20"
  }) {
    const { getTranslation } = useLanguage();
    const {
      email,
      isLoading,
      isSubmitted,
      error,
      handleEmailChange,
      handleSubmit,
      reset
    } = useContactForm(onSubmit);
    const handleFormSubmit = (e) => __async(this, null, function* () {
      yield handleSubmit(e);
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6", children: getTranslation("contact.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto mb-8 sm:mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-gray-600 leading-relaxed mb-4 italic tracking-wide", children: getTranslation("contact.subtitle") }) }),
      isSubmitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-green-600 text-6xl mb-4", children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-green-900 mb-2", children: getTranslation("contact.thankYou") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-700 mb-4", children: getTranslation("contact.receivedMessage") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: reset,
            variant: "outline",
            className: "border-green-300 text-green-700 hover:bg-green-100 px-10 py-4 rounded-xl text-lg",
            children: getTranslation("contact.submitAnother")
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleFormSubmit, className: "max-w-md mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              value: email,
              onChange: handleEmailChange,
              placeholder: getTranslation("contact.placeholder"),
              className: `w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base ${error ? "border-red-300" : "border-gray-300"}`,
              disabled: isLoading
            }
          ),
          error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-600 text-xs sm:text-sm mt-2 text-left", children: error })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            disabled: isLoading,
            className: "px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 text-lg rounded-xl",
            children: isLoading ? getTranslation("contact.submitting") : getTranslation("contact.buttonText")
          }
        )
      ] }) })
    ] }) });
  }
  function Footer({
    logo = "LoopX",
    description = "AI-driven sample distribution for modern research teams.",
    className = "bg-gray-900 text-white py-8 sm:py-12"
  }) {
    const { getTranslation, language } = useLanguage();
    const sections = [
      {
        title: language === "zh" ? "产品" : language === "fr" ? "Produit" : language === "de" ? "Produkt" : language === "ko" ? "제품" : language === "ja" ? "製品" : "Product",
        links: [
          {
            label: language === "zh" ? "功能" : language === "fr" ? "Fonctionnalités" : language === "de" ? "Funktionen" : language === "ko" ? "기능" : language === "ja" ? "機能" : "Features",
            href: "#"
          },
          {
            label: language === "zh" ? "定价" : language === "fr" ? "Tarifs" : language === "de" ? "Preise" : language === "ko" ? "가격" : language === "ja" ? "料金" : "Pricing",
            href: "#"
          },
          {
            label: "API",
            href: "#"
          }
        ]
      },
      {
        title: language === "zh" ? "公司" : language === "fr" ? "Entreprise" : language === "de" ? "Unternehmen" : language === "ko" ? "회사" : language === "ja" ? "会社" : "Company",
        links: [
          {
            label: language === "zh" ? "关于" : language === "fr" ? "À propos" : language === "de" ? "Über uns" : language === "ko" ? "소개" : language === "ja" ? "概要" : "About",
            href: "#"
          },
          {
            label: language === "zh" ? "博客" : language === "fr" ? "Blog" : language === "de" ? "Blog" : language === "ko" ? "블로그" : language === "ja" ? "ブログ" : "Blog",
            href: "#"
          },
          {
            label: language === "zh" ? "招聘" : language === "fr" ? "Carrières" : language === "de" ? "Karriere" : language === "ko" ? "채용" : language === "ja" ? "採用" : "Careers",
            href: "#"
          }
        ]
      },
      {
        title: language === "zh" ? "支持" : language === "fr" ? "Support" : language === "de" ? "Support" : language === "ko" ? "지원" : language === "ja" ? "サポート" : "Support",
        links: [
          {
            label: language === "zh" ? "帮助中心" : language === "fr" ? "Centre d'aide" : language === "de" ? "Hilfecenter" : language === "ko" ? "도움말 센터" : language === "ja" ? "ヘルプセンター" : "Help Center",
            href: "#"
          },
          {
            label: language === "zh" ? "联系" : language === "fr" ? "Contact" : language === "de" ? "Kontakt" : language === "ko" ? "연락처" : language === "ja" ? "お問い合わせ" : "Contact",
            href: "#"
          },
          {
            label: language === "zh" ? "状态" : language === "fr" ? "Statut" : language === "de" ? "Status" : language === "ko" ? "상태" : language === "ja" ? "ステータス" : "Status",
            href: "#"
          }
        ]
      }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base sm:text-lg font-semibold mb-3 sm:mb-4 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent", children: logo }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-gray-400", children: getTranslation("footer.description") })
        ] }),
        sections.map((section, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs sm:text-sm font-semibold mb-3 sm:mb-4", children: section.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400", children: section.links.map((link, linkIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: link.href,
              className: "hover:text-white transition-colors",
              children: link.label
            }
          ) }, linkIndex)) })
        ] }, index2))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: getTranslation("footer.copyright") }) })
    ] }) });
  }
  function MinimalLandingPage() {
    const { getTranslation } = useLanguage();
    const handleContactSubmit = (email) => {
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "min-h-screen relative overflow-hidden",
          style: {
            backgroundImage: `linear-gradient(to right, #6D25BE 0%, #45EA24 100%)`
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0",
                style: {
                  background: `
              radial-gradient(circle at 25% 25%, 
                rgba(255,255,255,0.12) 0%, 
                transparent 40%
              ),
              radial-gradient(circle at 75% 75%, 
                rgba(255,255,255,0.06) 0%, 
                transparent 35%
              )
            `
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationBar, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              HeroSection,
              {
                title: getTranslation("hero.title"),
                subtitle: getTranslation("hero.subtitle"),
                description: getTranslation("hero.description"),
                showAnimatedShapes: true
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrustQualitySection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SolutionsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ContactSection,
        {
          onSubmit: handleContactSubmit
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  function AIAnalysisSection({ className = "" }) {
    const { getTranslation } = useLanguage();
    const aiFeatures = [
      {
        icon: "brain",
        title: getTranslation("aiAnalysis.qualityAnalysis.title"),
        description: getTranslation("aiAnalysis.qualityAnalysis.description"),
        benefits: [
          getTranslation("aiAnalysis.qualityAnalysis.benefit1"),
          getTranslation("aiAnalysis.qualityAnalysis.benefit2"),
          getTranslation("aiAnalysis.qualityAnalysis.benefit3")
        ]
      },
      {
        icon: "trending-up",
        title: getTranslation("aiAnalysis.trendAnalysis.title"),
        description: getTranslation("aiAnalysis.trendAnalysis.description"),
        benefits: [
          getTranslation("aiAnalysis.trendAnalysis.benefit1"),
          getTranslation("aiAnalysis.trendAnalysis.benefit2"),
          getTranslation("aiAnalysis.trendAnalysis.benefit3")
        ]
      },
      {
        icon: "users",
        title: getTranslation("aiAnalysis.audienceMatching.title"),
        description: getTranslation("aiAnalysis.audienceMatching.description"),
        benefits: [
          getTranslation("aiAnalysis.audienceMatching.benefit1"),
          getTranslation("aiAnalysis.audienceMatching.benefit2"),
          getTranslation("aiAnalysis.audienceMatching.benefit3")
        ]
      },
      {
        icon: "message-circle",
        title: getTranslation("aiAnalysis.sentimentAnalysis.title"),
        description: getTranslation("aiAnalysis.sentimentAnalysis.description"),
        benefits: [
          getTranslation("aiAnalysis.sentimentAnalysis.benefit1"),
          getTranslation("aiAnalysis.sentimentAnalysis.benefit2"),
          getTranslation("aiAnalysis.sentimentAnalysis.benefit3")
        ]
      },
      {
        icon: "bar-chart",
        title: getTranslation("aiAnalysis.predictiveInsights.title"),
        description: getTranslation("aiAnalysis.predictiveInsights.description"),
        benefits: [
          getTranslation("aiAnalysis.predictiveInsights.benefit1"),
          getTranslation("aiAnalysis.predictiveInsights.benefit2"),
          getTranslation("aiAnalysis.predictiveInsights.benefit3")
        ]
      },
      {
        icon: "settings",
        title: getTranslation("aiAnalysis.quotaManagement.title"),
        description: getTranslation("aiAnalysis.quotaManagement.description"),
        benefits: [
          getTranslation("aiAnalysis.quotaManagement.benefit1"),
          getTranslation("aiAnalysis.quotaManagement.benefit2"),
          getTranslation("aiAnalysis.quotaManagement.benefit3")
        ]
      }
    ];
    const stats = [
      {
        number: "99.2%",
        label: getTranslation("aiAnalysis.stats.accuracy"),
        description: getTranslation("aiAnalysis.stats.accuracyDesc")
      },
      {
        number: "3.2x",
        label: getTranslation("aiAnalysis.stats.efficiency"),
        description: getTranslation("aiAnalysis.stats.efficiencyDesc")
      },
      {
        number: "24/7",
        label: getTranslation("aiAnalysis.stats.monitoring"),
        description: getTranslation("aiAnalysis.stats.monitoringDesc")
      }
    ];
    return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: `py-20 bg-gradient-to-br from-gray-50 to-white ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: "zap", className: "w-4 h-4 mr-2" }),
          getTranslation("aiAnalysis.badge")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6", children: getTranslation("aiAnalysis.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed", children: getTranslation("aiAnalysis.subtitle") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-20", children: stats.map((stat, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2", children: stat.number }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-gray-900 mb-1", children: stat.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: stat.description })
      ] }) }, index2)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4", children: "AI-Powered Features" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Discover how our advanced AI capabilities transform your survey research" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: aiFeatures.map((feature, index2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200 group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { name: feature.icon, className: "w-6 h-6 text-purple-600 group-hover:text-purple-700" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 group-hover:text-purple-800 transition-colors duration-300 mb-2", children: feature.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 group-hover:text-purple-700 transition-colors duration-300", children: feature.description })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: feature.benefits.map((benefit, benefitIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-700 group-hover:text-purple-700 transition-colors duration-300", children: benefit })
          ] }, benefitIndex)) })
        ] }, index2)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedBackground, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-4xl font-bold mb-4", children: getTranslation("aiAnalysis.cta.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-purple-100 mb-8 max-w-2xl mx-auto", children: getTranslation("aiAnalysis.cta.description") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300", children: getTranslation("aiAnalysis.cta.demoButton") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300", children: getTranslation("aiAnalysis.cta.contactButton") })
          ] })
        ] })
      ] })
    ] }) });
  }
  function AIAnalysisPage() {
    React.useEffect(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "ai-analysis", className: "min-h-screen bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(NavigationBar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AIAnalysisSection, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  function MobiusLogo({
    size = "medium",
    style = "minimal",
    animated = true,
    className = ""
  }) {
    const { dimensions, segments, radius } = reactExports.useMemo(() => {
      switch (size) {
        case "small":
          return { dimensions: 40, segments: 24, radius: 16 };
        case "large":
          return { dimensions: 120, segments: 48, radius: 50 };
        default:
          return { dimensions: 80, segments: 36, radius: 32 };
      }
    }, [size]);
    const { colors, effects } = reactExports.useMemo(() => {
      switch (style) {
        case "glow":
          return {
            colors: {
              primary: "#6366f1",
              secondary: "#8b5cf6",
              glow: "rgba(99, 102, 241, 0.3)"
            },
            effects: {
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
              filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.3))"
            }
          };
        case "gradient":
          return {
            colors: {
              primary: "linear-gradient(45deg, #6366f1, #8b5cf6)",
              secondary: "linear-gradient(45deg, #8b5cf6, #a855f7)",
              glow: "rgba(139, 92, 246, 0.2)"
            },
            effects: {
              boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
              filter: "drop-shadow(0 0 6px rgba(139, 92, 246, 0.2))"
            }
          };
        default:
          return {
            colors: {
              primary: "#6366f1",
              secondary: "#8b5cf6",
              glow: "rgba(99, 102, 241, 0.1)"
            },
            effects: {
              boxShadow: "0 0 8px rgba(99, 102, 241, 0.2)",
              filter: "none"
            }
          };
      }
    }, [style]);
    const items = Array.from({ length: segments });
    const step = 360 / segments;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `mobius-logo ${className}`,
        style: __spreadValues({
          position: "relative",
          width: dimensions,
          height: dimensions,
          display: "inline-block"
        }, effects),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                width: "100%",
                height: "100%",
                border: `2px solid ${colors.glow}`,
                borderRadius: "50%",
                opacity: 0.3
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                animation: animated ? `logo-spin 8s linear infinite` : "none"
              },
              children: items.map((_, i) => {
                const theta = i * step;
                const twist = theta / 360 * 180;
                const stripWidth = Math.max(1, dimensions / 40);
                const stripHeight = Math.max(1, dimensions / 20);
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      transformStyle: "preserve-3d"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: {
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: stripWidth,
                          height: stripHeight,
                          transform: `rotateY(${theta}deg) translateZ(${radius}px) rotateX(${twist}deg) translateY(${-stripHeight / 2}px)`,
                          background: colors.primary,
                          borderRadius: stripWidth / 2,
                          boxShadow: `0 0 ${stripWidth * 2}px ${colors.glow}`,
                          opacity: 0.8
                        }
                      }
                    )
                  },
                  i
                );
              })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                position: "absolute",
                width: dimensions / 8,
                height: dimensions / 8,
                background: colors.secondary,
                borderRadius: "50%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                boxShadow: `0 0 ${dimensions / 16}px ${colors.glow}`
              }
            }
          ),
          animated && /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
          @keyframes logo-spin {
            0% { transform: rotateX(20deg) rotateZ(-5deg) rotateY(0deg); }
            100% { transform: rotateX(20deg) rotateZ(-5deg) rotateY(360deg); }
          }
        ` })
        ]
      }
    );
  }
  const LogoPresets = {
    // 导航栏logo
    Navbar: () => /* @__PURE__ */ jsxRuntimeExports.jsx(MobiusLogo, { size: "small", style: "minimal", animated: false }),
    // 页面标题logo
    Header: () => /* @__PURE__ */ jsxRuntimeExports.jsx(MobiusLogo, { size: "medium", style: "glow", animated: true }),
    // 英雄区域logo
    Hero: () => /* @__PURE__ */ jsxRuntimeExports.jsx(MobiusLogo, { size: "large", style: "gradient", animated: true }),
    // 静态logo
    Static: () => /* @__PURE__ */ jsxRuntimeExports.jsx(MobiusLogo, { size: "medium", style: "minimal", animated: false })
  };
  function LogoShowcasePage() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold text-center mb-4", children: "Mobius Logo Showcase" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-center text-gray-300 mb-12", children: "Lightweight, customizable logo component for your brand" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Preset Styles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Navbar Logo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoPresets.Navbar, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Small, minimal, static" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Header Logo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoPresets.Header, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Medium, glow effect, animated" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Hero Logo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoPresets.Hero, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Large, gradient, animated" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Static Logo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoPresets.Static, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Medium, minimal, static" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Size Variations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Small (40px)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobiusLogo, { size: "small", style: "glow" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Perfect for navigation bars" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Medium (80px)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobiusLogo, { size: "medium", style: "glow" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Great for headers and cards" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Large (120px)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobiusLogo, { size: "large", style: "glow" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Ideal for hero sections" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Style Variations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Minimal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobiusLogo, { size: "medium", style: "minimal" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Clean and simple" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Glow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobiusLogo, { size: "medium", style: "glow" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "With glow effects" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Gradient" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobiusLogo, { size: "medium", style: "gradient" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Gradient colors" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Animation Control" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Animated" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobiusLogo, { size: "medium", style: "glow", animated: true }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "Smooth rotation animation" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Static" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobiusLogo, { size: "medium", style: "glow", animated: false }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "No animation for better performance" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Usage Examples" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "Code Examples" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-900 p-4 rounded", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-400", children: "// 基本使用" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white", children: "<MobiusLogo />" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-900 p-4 rounded", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-400", children: "// 预设样式" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white", children: "<LogoPresets.Navbar />" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white", children: "<LogoPresets.Hero />" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-900 p-4 rounded", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-400", children: "// 自定义样式" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white", children: [
                '<MobiusLogo size="large" style="gradient" animated=',
                true,
                " />"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-colors",
          children: "← Back to Home"
        }
      ) })
    ] }) });
  }
  function LogoMobius({
    size = 72,
    theme = "interstellar",
    spin = 16,
    label = "Mobius logo"
  }) {
    const palette = theme === "interstellar" ? { from: "#7C83FF", mid: "#8AE1FF", to: "#E879F9" } : theme === "singularity" ? { from: "#C6D0FF", mid: "#FFFFFF", to: "#D9E2FF" } : theme;
    const pathD = "M 10,36 C 10,20 26,12 36,28 C 46,44 62,36 62,20 C 62,7 49,4 40,10 C 34,14 30,20 36,28 C 42,36 46,42 60,42 C 74,42 86,32 86,20 C 86,6 74,2 60,8 C 52,12 44,22 36,28 C 26,36 18,40 10,36 Z";
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          width: size,
          height: size,
          display: "inline-grid",
          placeItems: "center"
        },
        "aria-label": label,
        role: "img",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              viewBox: "0 0 96 64",
              width: size,
              height: size,
              style: {
                // 轻微俯视 + 旋转，hover 微加速
                animation: `mobius-spin ${spin}s linear infinite`,
                transformOrigin: "50% 50%",
                filter: "drop-shadow(0 3px 12px rgba(124,131,255,.25))"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g1", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: palette.from }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: palette.mid }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: palette.to })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g2", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "rgba(255,255,255,0)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "40%", stopColor: "rgba(255,255,255,.8)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "60%", stopColor: "rgba(255,255,255,.8)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "rgba(255,255,255,0)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "shade", cx: "50%", cy: "50%", r: "65%", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "60%", stopColor: "white" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "rgba(0,0,0,0.65)" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("mask", { id: "m1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#shade)" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: pathD,
                    fill: "none",
                    stroke: "url(#g1)",
                    strokeWidth: "7.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    opacity: "0.9",
                    mask: "url(#m1)"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: pathD,
                    fill: "none",
                    stroke: "url(#g1)",
                    strokeWidth: "3.4",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    opacity: "0.85"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    d: pathD,
                    fill: "none",
                    stroke: "url(#g2)",
                    strokeWidth: "2.2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeDasharray: "14 120",
                    style: { animation: "gloss 2.6s linear infinite" },
                    opacity: "0.9"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media (prefers-reduced-motion: reduce) {
          svg { animation: none !important; }
          path[style*="gloss"] { animation: none !important; }
        }
        @keyframes mobius-spin {
          0%   { transform: rotateX(0deg) rotateZ(0deg); }
          100% { transform: rotateX(0deg) rotateZ(360deg); }
        }
        @keyframes gloss {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -134; }
        }
        div:hover > svg {
          animation-duration: ${Math.max(8, spin * 0.7)}s;
          filter: drop-shadow(0 6px 18px rgba(124,131,255,.35));
        }
      ` })
        ]
      }
    );
  }
  function LogoMobiusShowcasePage() {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold text-center mb-4", children: "LogoMobius Showcase" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-center text-gray-300 mb-12", children: "SVG-based animated Möbius / Infinity style logo component" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Theme Variations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Interstellar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMobius, { size: 80, theme: "interstellar", spin: 16 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "冷蓝紫渐变主题" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Singularity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMobius, { size: 80, theme: "singularity", spin: 16 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "冷白金简约主题" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Custom Gradient" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              LogoMobius,
              {
                size: 80,
                theme: { from: "#FF6B6B", mid: "#4ECDC4", to: "#45B7D1" },
                spin: 16
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "自定义渐变色彩" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Size Variations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Small (48px)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMobius, { size: 48, theme: "interstellar", spin: 12 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "适合小尺寸使用" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Medium (80px)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMobius, { size: 80, theme: "interstellar", spin: 16 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "标准尺寸" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Large (120px)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMobius, { size: 120, theme: "interstellar", spin: 20 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "大尺寸展示" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Spin Speed Variations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Fast (8s)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMobius, { size: 80, theme: "interstellar", spin: 8 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "快速旋转" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Normal (16s)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMobius, { size: 80, theme: "interstellar", spin: 16 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "标准速度" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Slow (24s)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMobius, { size: 80, theme: "interstellar", spin: 24 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "慢速旋转" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Usage Scenarios" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Navigation Bar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMobius, { size: 32, theme: "interstellar", spin: 16 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent", children: "LoopX" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "小尺寸，适合导航栏使用" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-4", children: "Hero Section" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMobius, { size: 120, theme: "interstellar", spin: 20 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "大尺寸，作为页面焦点" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Code Examples" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "Usage Examples" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-900 p-4 rounded", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-400", children: "// 基本使用" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white", children: "<LogoMobius />" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-900 p-4 rounded", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-400", children: "// 自定义主题" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white", children: [
                '<LogoMobius theme="singularity" size=',
                80,
                " spin=",
                16,
                " />"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-900 p-4 rounded", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-400", children: "// 自定义渐变" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white", children: '<LogoMobius theme={{ from: "#FF6B6B", mid: "#4ECDC4", to: "#45B7D1" }} />' })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Features" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", children: "SVG Based" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "基于SVG，矢量图形，任意缩放不失真" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", children: "Smooth Animation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "流畅的旋转动画和流光效果" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", children: "Accessible" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "支持无障碍访问，尊重用户偏好设置" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", children: "Customizable" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "多种主题和自定义选项" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", children: "Performance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "轻量级，高性能，不影响页面加载" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2", children: "Hover Effects" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-400", children: "悬停时加速和增强阴影效果" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium transition-colors",
          children: "← Back to Home"
        }
      ) })
    ] }) });
  }
  function App() {
    React.useEffect(() => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(MinimalLandingPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/ai-analysis", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AIAnalysisPage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/logo-showcase", element: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoShowcasePage, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/logo-mobius-showcase", element: /* @__PURE__ */ jsxRuntimeExports.jsx(LogoMobiusShowcasePage, {}) })
    ] }) }) });
  }
  const index = "";
  function initApp() {
    console.log("React app starting...");
    const rootElement = document.getElementById("root");
    console.log("Root element:", rootElement);
    if (!rootElement) {
      console.error("Root element not found!");
      if (document.body) {
        const newRoot = document.createElement("div");
        newRoot.id = "root";
        document.body.appendChild(newRoot);
        console.log("Created new root element");
      } else {
        console.error("document.body is null, cannot create root element");
        return;
      }
    }
    const element = document.getElementById("root");
    if (element) {
      try {
        const root = createRoot(element);
        root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
        console.log("React app rendered successfully");
      } catch (error) {
        console.error("Error rendering React app:", error);
      }
    } else {
      console.error("Still cannot find root element");
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
