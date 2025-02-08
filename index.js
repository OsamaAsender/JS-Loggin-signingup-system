    // Add event listener for logout button click
    document.getElementById('logoutButton').addEventListener('click', function() {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const flagTrueUser = users.find(user => user.flag === true);
        
        if (flagTrueUser) {
            const updatedUsers = users.map(u => {
                if (u.flag === true) {
                    u.flag = false;
                }
                return u;
            });

            localStorage.setItem('users', JSON.stringify(updatedUsers));
        }

        window.location.href = "login.html";
        alert('Signed Out');
    });
