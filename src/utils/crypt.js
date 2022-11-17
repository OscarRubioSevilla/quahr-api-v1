import bcrypt from 'bcrypt';
const saltRounds = 10;

export const encriptar = async(password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
}
export const comparar = async(password, contrasenaUsuario) => await bcrypt.compare(password, contrasenaUsuario);