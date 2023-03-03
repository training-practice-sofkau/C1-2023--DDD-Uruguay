export function validateUUID(uuid: string): boolean{
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89aAbB][0-9a-f]{3}-[0-9a-f]{12}$/;

    return uuidRegex.test(uuid);
}