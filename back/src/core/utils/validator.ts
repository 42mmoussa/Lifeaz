export const validateSignin = async(opt: {type: string, author: string, content: string, title: string, avatar: string}): Promise<string[]> => {
    console.log(opt)
    return ["ok", "lplp"]
}