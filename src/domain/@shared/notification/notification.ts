import NotificationError from "./notification.error";

export type NotificationErrorProps = {
    message: string;
    context: string;
}

export default class Notification {
    private errors: NotificationErrorProps[] = [];

    addError(error: NotificationErrorProps): void {
        this.errors.push(error);
    }

    getErrors(): NotificationErrorProps[] {
        return this.errors;
    }

    hasErrors(): boolean {
        return this.errors.length > 0;
    }

    messages(context?: string): string {
        let message = "";

        this.errors.forEach((error) => {
            if (error.context === context || context === undefined)
                message += `${error.context}: ${error.message},`;
        });

        return message;
    }

}