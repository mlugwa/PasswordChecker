function passwordIsValid(password)
{
	var pass = password;
	if (password === "" || !password)
                throw new Error("Password should exist.");
        else if (password.length < 8)
                throw new Error("Password should be longer than 8 characters.");

	var i = 0;
	var isLower = false;
	var isUpper = false;
	var isDigit = false;
	var isSpecial = false;

	while (i < pass.length)
	{
		if (pass[i] >= 'a' && pass[i] <= 'z')
			isLower = true;
		else if (password[i] >= 'A' && pass[i] <= 'Z')
			isUpper = true;
		else if (pass[i] >= '0' && pass[i] <= '9')
			isDigit = true;
		else if ((pass[i] >= 33 && pass[i] <= 47) || (pass[i] >= 58 && pass[i] <= 64) || (pass[i] >= 92 && pass[i] <= 96) || (pass[i] >= 123 && pass[i] <= 126))
			isSpecial = true;
		i++;
	}
		

		if (isLower === false)
                        throw new Error("Password should have at least one lowercase letter.");
                else if(isUpper === false)
                        throw new Error("Password should have at least one uppercase letter.");
                else if(isDigit === false)
			throw new Error("Password should have at least one digit");
		else if(isSpecial === false)
			throw new Error("Password should have at least one special character");

}
