import { Clerk } from './clerk.domain-entity';


describe('Change Employee Status', () => {

    it('Changes the current employee status to the given value', () =>{

        let clerk = new Clerk();
        const newStatus = false;
        const result = clerk.changeEmployeeStatus(newStatus);
        expect(result).toBe(newStatus);
    });
});