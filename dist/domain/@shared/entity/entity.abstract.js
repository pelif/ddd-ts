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
import Notification from "../notification/notification";
var Entity = /*#__PURE__*/ function() {
    "use strict";
    function Entity() {
        _class_call_check(this, Entity);
        _define_property(this, "_id", void 0);
        _define_property(this, "notification", void 0);
        this.notification = new Notification();
    }
    _create_class(Entity, [
        {
            key: "id",
            get: function get() {
                return this._id;
            }
        }
    ]);
    return Entity;
}();
export { Entity as default };

//# sourceMappingURL=entity.abstract.js.map