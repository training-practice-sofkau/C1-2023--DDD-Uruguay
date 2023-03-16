import { IEventPublisher } from "@sofka";
import { ClientDomainEntitybase } from "../../entities";
import { RegisteredClientEventPublisherBase } from './registered-client.publisher';

class EventPublisher extends RegisteredClientEventPublisherBase { }

describe('GotClientEventPublisherBase', () => {
  let eventPublisher: EventPublisher;
  let publisher: IEventPublisher;

  beforeEach(async () => {
    publisher = { emit: jest.fn(), send: jest.fn() };
    eventPublisher = new EventPublisher(publisher);
  });

  it('should be defined', () => {
    expect(eventPublisher).toBeDefined();
  });

  it('should emit event', () => {
    // Arrange
    const topic = 'consultory-system.registered-client';
    const response = new ClientDomainEntitybase();
    const data = JSON.stringify({ data: response });
    eventPublisher.response = response;
    jest.spyOn(publisher, 'emit');

    // Act
    eventPublisher.publish();

    // Assert
    expect(publisher.emit).toBeCalledWith(topic, data);
  });
});

