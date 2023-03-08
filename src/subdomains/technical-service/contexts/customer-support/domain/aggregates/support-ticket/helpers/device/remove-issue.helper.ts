import { IDeviceDomainService } from "../../../../services";
import { IRemoveIssueCommand } from '../../../../interfaces/commands/support-ticket/device/';
import { IssueRemovedEventPublisherBase } from "../../../../events/publishers/support-ticket/device/issue-removed.event-publisher";


export const RemoveIssue = async (
    issue: IRemoveIssueCommand,
    deviceService: IDeviceDomainService,
    issueRemovedEventPublisherBase: IssueRemovedEventPublisherBase
): Promise<boolean> => {

    const result = await deviceService.RemoveIssue(issue);
    issueRemovedEventPublisherBase.response = result;
    issueRemovedEventPublisherBase.publish();

    return result;
}
