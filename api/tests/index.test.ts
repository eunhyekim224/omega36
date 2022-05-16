import axios from 'axios';

describe('Express server', () => {
    it('should return "Welcome to Omega36"', async () => {
        const response = await axios.get(`http://localhost:8080/`);
        const serverMsg = await JSON.stringify(response.data).trim();
        console.log(serverMsg)

        expect(serverMsg).toEqual('"Welcome to Omega36"')
    })
})