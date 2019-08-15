function password_is_ok(password)
{
        var i = 0;
        if (password.length < 8)
                return (false);
        if (!password)
                return (false);
        while (i < password.length)
        {
                if (password[i] >= 'A' && password[i] <= 'Z')
                        return (true);
                else if (password[i] >= 'a' && password[i] <= 'z')
                        return (true);
                else if (password[i] >= 0 && password[i] <= 9)
                        return (true);
                i++;
        }
        return (false);
}

