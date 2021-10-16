const rewire = require("rewire")
const index = rewire("./index")
const capitalize = index.__get__("capitalize")
const truncate = index.__get__("truncate")
// @ponicode
describe("capitalize", () => {
    test("0", () => {
        let callFunction = () => {
            capitalize("<?xml version=\"1.0\" ?><a b=\"c\"/>")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            capitalize("<?xml version=\"1.0\" ?>\n<a b=\"c\"/>\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            capitalize(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("truncate", () => {
    test("0", () => {
        let callFunction = () => {
            truncate({ length: 16, slice: () => "Foo bar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            truncate({ length: 64, slice: () => "This is a Text" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            truncate({ length: 10, slice: () => "This is a Text" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            truncate({ length: 16, slice: () => "foo bar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            truncate({ length: 0, slice: () => "Foo bar" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            truncate(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
