export const errorsFormat = errors => {
    return errors.reduce((acc, { message, type, path }) => acc = [...acc, { message, type, name: path }], []);
}

// https://youtube.com/playlist?list=PLPGEZmenarH9WzU4AWl6zGpqs_T8Z_9xH