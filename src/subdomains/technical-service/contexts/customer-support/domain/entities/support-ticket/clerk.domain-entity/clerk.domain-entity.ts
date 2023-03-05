import { UUIDValueObject, FullnameValueObject, EmailValueObject, TrueFalseValueObject } from "../../../value-objects/common";




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

    public changeEmployeeEmail(){

    }

    public changeEmployeeStatus(status: boolean){
        this.isActive = status;
        return this.isActive;
    }


    
}