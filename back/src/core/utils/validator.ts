export const validateEmail = (email: string): boolean => {
    if (!email) {
        return false;
    }
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(email.trim());
};

export const validateType = (type: string): boolean => {
    if (!type) {
        return false;
    }
    const reg = /^.{1,25}$/;
    return reg.test(type.trim());
};

export const validateAuthor = (author: string): boolean => {
    if (!author) {
        return false;
    }
    const reg = /^.{1,30}$/;
    return reg.test(author.trim());
};

export const validateContent = (content: string): boolean => {
    if (!content) {
        return false;
    }
    const reg = /^.{40,240}$/;
    return reg.test(content.trim());
};

export const validateTitle = (title: string): boolean => {
    if (!title) {
        return false;
    }
    const reg: RegExp = /^.{1,40}$/;
    return reg.test(title.trim());
};

export const validateLink = (link: string): boolean => {
    if (!link) {
        return false;
    }
    const reg: RegExp = new RegExp('^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$');
    return reg.test(link.trim());
};

export const validateInterventionForm = async (type: string, author: string, content: string, title: string, avatar: string, email: string): Promise<boolean> => {
    try {
        if (!validateEmail(email)) {
            throw new Error("Invalid format: email");
        } else if (!validateType(type)) {
            throw new Error("Invalid format: type");
        } else if (!validateAuthor(author)) {
            throw new Error("Invalid format: author");
        } else if (!validateContent(content)) {
            throw new Error("Invalid format: content");
        } else if (!validateTitle(title)) {
            throw new Error("Invalid format: title");
        } else if (!validateLink(avatar)) {
            throw new Error("Invalid format: avatar");
        }
        return true;
    } catch (e) {
        throw e;
    }
};