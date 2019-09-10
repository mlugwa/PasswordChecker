describe("Validate Password", function(){
	it("should not be passed a password shorter than 8 characters",function(){
		var password = "Ffg";
		expect(password_is_valid(password)).toBe("password is too short");
	});
	it("should throw an Error if password is empty",function(){
		var password = "";
		expect(password_is_valid(password)).toBe("password cannot be empty");
	});
	it("should contain a lowercase letter",function(){
		var password = "Ffggggg88888";
		expect(password_is_valid(password)).toBe("password is valid");
			});
	it("should contain a uppercase letter",function(){
		var password = "ffffFggg4444";
		expect(password_is_valid(password)).toBe("password is valid");
	});
	it("should contain a number",function(){
		var password = "fffffFFgg99999";
		expect(password_is_valid(password)).toBe("password is valid");
	});
});

