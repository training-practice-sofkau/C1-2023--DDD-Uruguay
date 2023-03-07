import { UUIDValueObject, FullnameValueObject, EmailValueObject, TrueFalseValueObject } from "../../../value-objects/common";

export class Technician {
    
    private technicianID: UUIDValueObject;
    private technicianName: FullnameValueObject;
    private technicianEmail: EmailValueObject;
    private isActive: boolean; // TrueFalseValueObject;    

    public Technician( clerkName: FullnameValueObject, clerkMail: EmailValueObject ){
        
        this.technicianID = new UUIDValueObject();
        this.technicianName = clerkName;
        this.technicianEmail = clerkMail;       
        this.isActive = true;       
    }


      /**
     * Changes the current Email address of the employee for the given new value 
     *
     * @param {EmailValueObject} newEmail new value
     * @memberof Technician
     */
      public changeEmployeeEmail(newEmail: EmailValueObject){  

        this.technicianEmail = newEmail;
        return this.technicianEmail;
      }


    /**
     * Changes the employee status to the given boolean value
     *
     * @param {boolean} status new employee status state
     * @return {*} new status
     * @memberof Technician
     */
    public changeEmployeeStatus(status: boolean){
        this.isActive = status;       
        return this.isActive;
    }   
}