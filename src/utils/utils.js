export const createCode = ({ data, prefix, code_field }) => {
    let newCode = prefix + '1';

    if (data.length) {
        const obj = data[0];
        const code = parseInt(obj[code_field].replace(prefix, '')) + 1;
        newCode = prefix + code;
    }

    return newCode;
}
