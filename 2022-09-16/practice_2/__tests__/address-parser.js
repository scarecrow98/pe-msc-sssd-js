const { parse } = require('../address-parser');

describe('Address parser', () => {
    test('should parse correctly', () => {
        expect(
            parse(
                "I want to to order: 12 cows to address: 32 veszprem city here is my payment info: 666"
            )
        ).toEqual({
            order: "12 cows",
            address: "32 veszprem city",
            payment: "666",
        });
    })
})