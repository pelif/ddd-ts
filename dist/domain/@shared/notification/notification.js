function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var Notification = /*#__PURE__*/ function() {
    "use strict";
    function Notification() {
        _class_call_check(this, Notification);
        _define_property(this, "errors", []);
    }
    _create_class(Notification, [
        {
            key: "addError",
            value: function addError(error) {
                this.errors.push(error);
            }
        },
        {
            key: "getErrors",
            value: function getErrors() {
                return this.errors;
            }
        },
        {
            key: "hasErrors",
            value: function hasErrors() {
                return this.errors.length > 0;
            }
        },
        {
            key: "messages",
            value: function messages(context) {
                var message = "";
                this.errors.forEach(function(error) {
                    if (error.context === context || context === undefined) message += "".concat(error.context, ": ").concat(error.message, ",");
                });
                return message;
            }
        }
    ]);
    return Notification;
}();
export { Notification as default };

//# sourceMappingURL=notification.js.map