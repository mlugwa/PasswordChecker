describe("Validate Password", function(){
	var password = "Ffggg88888";
	it("should be at least 8 characters long",function(){
		expect(password_is_valid(password)).toBe("password is valid");
	});
	it("should not be null",function(){
		expect(password_is_valid(password)).toBe("password is valid");
	});
	it("should contain a lowercase letter",function(){
		expect(password_is_valid(password)).toBe("password is valid");
			});
	it("should contain a uppercase letter",function(){
		expect(password_is_valid(password)).toBe("password is valid");
	});
	it("should contain a lowercase letter",function(){
		expect(password_is_valid(password)).toBe("password is valid");
});

