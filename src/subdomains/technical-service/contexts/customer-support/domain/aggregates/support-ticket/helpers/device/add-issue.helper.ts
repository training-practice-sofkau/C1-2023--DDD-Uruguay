import { IssueAddedEventPublisherBase } from "../../../../events/publishers/support-ticket";
import { IDeviceDomainService } from "../../../../services";
import { IAddIssueCommand } from '../../../../interfaces/commands/support-ticket/device/add-issue.command';

export const AddIssue = async (
    issue: IAddIssueCommand,
    deviceService: IDeviceDomainService,
    issueAddedEventPublisherBase: IssueAddedEventPublisherBase
): Promise<boolean> => {

    const result = await deviceService.AddIssue(issue);
    issueAddedEventPublisherBase.response = result;
    issueAddedEventPublisherBase.publish();

    return result;
}
