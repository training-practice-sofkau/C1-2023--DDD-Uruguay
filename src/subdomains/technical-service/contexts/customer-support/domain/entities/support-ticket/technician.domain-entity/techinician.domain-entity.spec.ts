import { Technician } from './technician.domain-entity';


describe('Change Employee Status', () => {


    it('Changes the current employee status to the given value', () =>{

        let technician = new Technician();
        const newStatus = false;
        const result = technician.changeEmployeeStatus(newStatus);
        expect(result).toBe(newStatus);
    });
});