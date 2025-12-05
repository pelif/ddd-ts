import Notification from "./notification";
describe("Unit Test for Notification", function() {
    it("Should create errors", function() {
        var notification = new Notification();
        var error = {
            message: "error message",
            context: "customer"
        };
        notification.addError(error);
        expect(notification.messages("customer")).toBe("customer: error message,");
        var error2 = {
            message: "error message 2",
            context: "customer"
        };
        notification.addError(error2);
        expect(notification.messages("customer")).toBe("customer: error message,customer: error message 2,");
        var error3 = {
            message: "error message 3",
            context: "order"
        };
        notification.addError(error3);
        expect(notification.messages("customer")).toBe("customer: error message,customer: error message 2,");
        expect(notification.messages()).toBe("customer: error message,customer: error message 2,order: error message 3,");
    });
// it("Should check if notification has at least one error", () => {
//     const notification = new Notification();
//     const error = {
//         message: "error message",
//         context: "customer"
//     }
//     notification.addError(error);
//     expect(notification.hasErrors()).toBe(true);
// });
});

//# sourceMappingURL=notification.spec.js.map