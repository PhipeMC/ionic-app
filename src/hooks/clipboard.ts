import { Clipboard } from '@capacitor/clipboard';

export function usageClipboard() {
    const writeToClipboard = async () => {
        await Clipboard.write({});
    };
}



const checkClipboard = async () => {
    const { value } = await Clipboard.read();

    console.log(`${value}`);
};