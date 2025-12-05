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
var EventDispatcher = /*#__PURE__*/ function() {
    "use strict";
    function EventDispatcher() {
        _class_call_check(this, EventDispatcher);
        _define_property(this, "eventHandlers", {});
    }
    _create_class(EventDispatcher, [
        {
            key: "getEventHandlers",
            get: function get() {
                return this.eventHandlers;
            }
        },
        {
            key: "notify",
            value: function notify(event) {
                var eventName = event.constructor.name;
                if (this.eventHandlers[eventName]) {
                    this.eventHandlers[eventName].forEach(function(eventHandler) {
                        eventHandler.handle(event);
                    });
                }
            }
        },
        {
            key: "register",
            value: function register(eventName, eventHandler) {
                if (!this.eventHandlers[eventName]) {
                    this.eventHandlers[eventName] = [];
                }
                this.eventHandlers[eventName].push(eventHandler);
            }
        },
        {
            key: "unregister",
            value: function unregister(eventName, eventHandler) {
                if (this.eventHandlers[eventName]) {
                    var index = this.eventHandlers[eventName].indexOf(eventHandler);
                    if (index !== -1) {
                        this.eventHandlers[eventName].splice(index, 1);
                    }
                }
            }
        },
        {
            key: "unregisterAll",
            value: function unregisterAll() {
                this.eventHandlers = {};
            }
        }
    ]);
    return EventDispatcher;
}();
export { EventDispatcher as default };

//# sourceMappingURL=event-dispatcher.js.map