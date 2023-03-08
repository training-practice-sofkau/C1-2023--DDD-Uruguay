import { IssueValueObject } from '../../../../value-objects/device';
import { UUIDValueObject } from '../../../../value-objects/common';

export interface IAddIssueCommand{

    deviceID: string;
    issueToAdd: string;
}