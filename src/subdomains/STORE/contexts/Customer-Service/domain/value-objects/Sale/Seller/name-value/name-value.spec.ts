import { NameSellerValue } from "../name-value";

  describe("validate Name", () => {
    it("test name" , () => {

      const value = "Franco Torres";

      const nameSellerValue = new NameSellerValue(value);

      nameSellerValue.validateData();

      expect(nameSellerValue.hasErrors()).toBeTruthy();

    });

    it("prueba name con numeros " , () => {

        const value = "Fr4nc0 Torres";
  
        const nameSellerValue = new NameSellerValue(value);
  
        nameSellerValue.validateData();
  
        expect(nameSellerValue.hasErrors()).toBeFalsy()
        
      });

      it("prueba con espacios " , () => {

        const value = "F R A N C O ";
  
        const nameSellerValue = new NameSellerValue(value);
  
        nameSellerValue.validateData();
  
        expect(nameSellerValue.hasErrors()).toBeFalsy();
      
      });
  });
