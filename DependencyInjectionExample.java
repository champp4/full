public class DependencyInjectionExample {
    public static void main(String[] args) {
        // Injecting EmailService dependency into MessageProcessor
        MessageService emailService = new EmailService();
        MessageProcessor emailProcessor = new MessageProcessor(emailService);
        emailProcessor.processMessage("Hello, Email!", "email@example.com");

        // Injecting SMSService dependency into MessageProcessor
        MessageService smsService = new SMSService();
        MessageProcessor smsProcessor = new MessageProcessor(smsService);
        smsProcessor.processMessage("Hello, SMS!", "123-456-7890");
    }
}

// Consumer class that depends on the service
class MessageProcessor {
    private MessageService messageService;

    // Constructor-based Dependency Injection
    public MessageProcessor(MessageService messageService) {
        this.messageService = messageService;
    }

    public void processMessage(String message, String receiver) {
        messageService.sendMessage(message, receiver);
    }
}
