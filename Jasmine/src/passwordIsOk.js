function passwordIsOk(password)
{
	var pass = password;
	var passAtThree = 0;
	var i = 0;
	var check1, check2, checked3, check4;
	check1 = false;
	check2 = false;
	check3 = false;
	check4 = false;

        if (!(pass === "") || (pass === undefined))
		passAtThree++;
        else if (password.length >= 8)
                passAtThree++;

        while (i < pass.length)
        {
		if (passAtThree === 3)
			return (true);
		else if((pass[i] >= 'a' && pass[i] <= 'z') && check1 === false)
		{
			passAtThree++;
			check1 = true;
		}
                else if ((pass[i] >= 'A' && pass[i] <= 'Z') && check2 === false)
                {
			passAtThree++;
			check2 = true;
		}
                else if ((pass[i] >= '0' && pass[i] <= '9') && check3 === false)
                {
			passAtThree++;
			check3 = true;
		}
                else if ((check4 === false) && (pass[i] >= 33 && pass[i] <= 47) || (pass[i] >= 58 && pass[i] <= 64) || (pass[i] >= 92 && pass[i] <= 96) || (pass[i] >= 123 && pass[i] <= 126))
                 {
			 passAtThree++;
			 check4 = true;
		}
                i++;
        }
	return (false);
}

console.log(passwordIsOk("aaaaas"));
