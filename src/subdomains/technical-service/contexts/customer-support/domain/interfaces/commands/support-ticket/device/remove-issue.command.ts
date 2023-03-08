import { IssueValueObject } from '../../../../value-objects/device';
import { UUIDValueObject } from '../../../../value-objects/common';

export interface IRemoveIssueCommand{

    deviceID: string;
    issueToRemove: string;
}