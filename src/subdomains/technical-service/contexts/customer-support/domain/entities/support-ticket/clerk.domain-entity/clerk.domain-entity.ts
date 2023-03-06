import { UUIDValueObject, FullnameValueObject, EmailValueObject } from "../../../value-objects/common";

export class Clerk {
    
    private clerkID: UUIDValueObject;
    private clerkName: FullnameValueObject;
    private clerkEmail: EmailValueObject;
    private isActive: boolean; // TrueFalseValueObject;    

    public Clerk( clerkName: FullnameValueObject, clerkMail: EmailValueObject ){
        
        this.clerkID = new UUIDValueObject();
        this.clerkName = clerkName;
        this.clerkEmail = clerkMail;       
        this.isActive = true;

        //TODO: asignar isActive as boolean, TrueFalseVO genera error ( ??? )
    }


    /**
     * Changes the current Email address of the employee for the given new value 
     *
     * @param {EmailValueObject} newEmail new value
     * @memberof Clerk
     */
    public changeEmployeeEmail(newEmail: EmailValueObject){

        //TODO: check validations ( ? )

        this.clerkEmail = newEmail;
        return this.clerkEmail;
    }


     /**
     * Changes the employee status to the given boolean value
     *
     * @param {boolean} status new employee status state
     * @return {*} new status
     * @memberof Clerk
     */
    public changeEmployeeStatus(status: boolean){
        this.isActive = status;       
        return this.isActive;
    }   
}