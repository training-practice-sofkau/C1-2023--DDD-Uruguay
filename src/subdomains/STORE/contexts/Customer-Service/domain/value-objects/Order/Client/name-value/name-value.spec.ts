
import { ClientNameValue } from "../name-value";

  describe("Name Client", () => {
    it("test name" , () => {

      const value = "Franco Torres";

      const NameClient = new ClientNameValue(value);

      NameClient.validateData();

      expect(NameClient.hasErrors()).toBeTruthy();

    });

    it("prueba name con numeros " , () => {

        const value = "Fr4nc0 Torres";
  
        const NameClient = new ClientNameValue(value);
  
        NameClient.validateData();
  
        expect(NameClient.hasErrors()).toBeFalsy()
        
      });

      it("prueba con espacios " , () => {

        const value = "F R A N C O ";
  
        const NameClient = new ClientNameValue(value);
  
        NameClient.validateData();
  
        expect(NameClient.hasErrors()).toBeFalsy();
      
      });
  });
