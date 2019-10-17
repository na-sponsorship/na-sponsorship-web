import { extend, configure, setInteractionMode, } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en";

for (let rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: en.messages[rule],
  });
}

configure({
  classes: {
    valid: "is-valid",
    invalid: "has-error",
  },
});

setInteractionMode("eager");
