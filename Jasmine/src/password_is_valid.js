function password_is_valid(password)
{
	if (password.length < 8)
		console.log("Error: password is too short");
	if (!password)
		console.log("Error: you have not entered a password.");
	var i = 0;
	if (password.length >= 8)
	{
		while (i < password.length)
		{
			if (password[i] >= 'A' && password[i] <= 'Z')
			{
				var j = 0;
				
				while (j < password.length)
				{
					if (password[j] >= 'a' && password[j] <= 'z')
					{
						var k = 0;

						while (k < password.length)
						{
							if (password[k] >= 0 && password[k] <= 9)
								return ("password is valid");
							k++;
						}
					}
					j++;
				}
			}
			i++;
		}
	}
	else
		return ("password is not valid");
}
