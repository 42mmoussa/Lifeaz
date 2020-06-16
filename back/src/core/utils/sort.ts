const cmpWords = (a: string, b: string): number => {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return a.localeCompare(b, 'fr-FR');
};

export const sortWordsOfText = async (text: string): Promise<string> => {

    if (!text) {
        return "";
    }

    const arrayWords: string[] = text.replace(/[,.*;:/!?]/g, '').split(" ");
    const sortedArray: string[] = arrayWords.sort(cmpWords);

    return sortedArray.join(" ") + ".";
};