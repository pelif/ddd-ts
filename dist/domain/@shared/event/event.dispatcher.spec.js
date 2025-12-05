import SendEmailWhenProductIsCreatedHandler from "../../product/event/handler/send-email-when-product-is-created.handler";
import ProductCreatedEvent from "../../product/event/product-created.event";
import EventDispatcher from "./event-dispatcher";
describe("Domain Event Dispatcher unit tests", function() {
    it("should register an event handler", function() {
        var eventDispatcher = new EventDispatcher();
        var eventHandler = new SendEmailWhenProductIsCreatedHandler();
        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(1);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);
    });
    it("should unregister an event handler", function() {
        var eventDispatcher = new EventDispatcher();
        var eventHandler = new SendEmailWhenProductIsCreatedHandler();
        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);
        eventDispatcher.unregister("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"].length).toBe(0);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeDefined();
    });
    it("should unregister all event handlers", function() {
        var eventDispatcher = new EventDispatcher();
        var eventHandler = new SendEmailWhenProductIsCreatedHandler();
        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);
        eventDispatcher.unregisterAll();
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"]).toBeUndefined();
    });
    it("should notify an event", function() {
        var eventDispatcher = new EventDispatcher();
        var eventHandler = new SendEmailWhenProductIsCreatedHandler();
        var spyEventHandler = jest.spyOn(eventHandler, "handle");
        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.getEventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);
        var productCreatedEvent = new ProductCreatedEvent({
            id: "1",
            name: "Product 1",
            description: "Product 1 description",
            price: 10
        });
        eventDispatcher.notify(productCreatedEvent);
        expect(spyEventHandler).toHaveBeenCalled();
    });
});

//# sourceMappingURL=event.dispatcher.spec.js.map