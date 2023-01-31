export default {
    async tokenCheck() {
        try {
            let res = await fetch('/get_token', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let result = await res.json();
            if (result.code == 1000) {
                console.log(result);
            } else {
                alert('โปรด login');
                window.location.href = '/login';
            }
        } catch (e) {
            alert('โปรด login');
            window.location.href = '/login';
            console.log(e);
        }
    }
};
