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
var SendEmailWhenProductIsCreatedHandler = /*#__PURE__*/ function() {
    "use strict";
    function SendEmailWhenProductIsCreatedHandler() {
        _class_call_check(this, SendEmailWhenProductIsCreatedHandler);
    }
    _create_class(SendEmailWhenProductIsCreatedHandler, [
        {
            key: "handle",
            value: function handle(event) {
                console.log("Send email to create a new product .....");
            }
        }
    ]);
    return SendEmailWhenProductIsCreatedHandler;
}();
export { SendEmailWhenProductIsCreatedHandler as default };

//# sourceMappingURL=send-email-when-product-is-created.handler.js.map