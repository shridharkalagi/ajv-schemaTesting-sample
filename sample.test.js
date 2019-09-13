import schema from './userSchema.json';
import data from './userData.json';
import Ajv from 'ajv';

let ajv = new Ajv({allErrors: true});

test('Validate the schema', () => {
    let validate = ajv.compile(schema);

    var valid = validate(data);

    if (valid) console.log('Valid!');
    else console.log('Invalid: ' + ajv.errorsText(validate.errors));
    expect(valid).toBe(true);
})