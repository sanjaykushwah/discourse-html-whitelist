import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features["..."] = true;
});

export function setup(helper) {
  helper.whiteList(['ul[class]']);
}
