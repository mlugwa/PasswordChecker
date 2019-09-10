describe("Validate Password", function(){
	var password = "Ffg";
	it("should not be passed a password shorter than 8 characters",function(){
		expect(password_is_valid(password)).toBe("password is too short");
	});
	password = "";
	it("should throw an Error if password is empty",function(){
		expect(password_is_valid(password)).toBe("password cannot be empty");
	});
	password = "Ffggg888888";
	it("should contain a lowercase letter",function(){
		expect(password_is_valid(password)).toBe("password is valid");
			});
	it("should contain a uppercase letter",function(){
		expect(password_is_valid(password)).toBe("password is valid");
	});
	it("should contain a number",function(){
		expect(password_is_valid(password)).toBe("password is valid");
});

