describe("Validate Password", function(){
	
	it("should throw an Error if password is empty or does not exist.", function(){
	try {
      		var password = "";
		passwordIsValid(password);
    	} catch (e) {
      		expect(e).toBeTruthy("Password should exist.");
    	}
	});

	it("should throw an Error if password is shorter that 8 characters.",function(){
	try {
		var password = "aabbbba";
		passwordIsValid(password);
	} catch (e) {
		expect(e).toBeTruthy("Password should be longer than 8 characters.");
	}
	});

	it("should throw an Error if password does not have a lowercase letter.",function(){
	try {
		var password = "AAAAAAAAAAA";
		passwordIsValid(password);
	} catch (e) {
		expect(e).toBeTruthy("Password should have at least one lowercase letter.");
	}
	});

	it("should throw an Error if password does not have a uppercase letter.",function(){
	try {
		var password = "aaaaaaaaaa";
		passwordIsValid(password);
	} catch (e) {
		expect(e).toBeTruthy("Password should have at least one uppercase letter.");
	}
	});

	it("should throw an Error if password does not have a digit.",function(){
	try {
		var password = "aaaAAAAA$$$";
		passwordIsValid(password);
	} catch (e) {
		expect(e).toBeTruthy("Password should have at least one digit.");
	}
	});

	it("should throw an Error if password does not have a special character.", function(){
	try {
		var password = "aaaaaAAAAA112233";
		passwordIsValid(password);
	} catch (e) {
		expect(e).toBeTruthy("Password should have at least one special character.");
	}
	});
});

describe("Password Is Ok", function(){
	it("should return false if the password does not meet three conditions.", function(){
		var password = "aaaaas";
	expect(passwordIsOk(password)).toBe(false);
	});
	it("should return true if the password meets at least three of the conditions.", function(){
		var password = "aAA1$@";
	expect(passwordIsOk(password)).toBe(true);
	});
});


