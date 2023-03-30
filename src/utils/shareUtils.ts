const telegramShare = 'https://t.me/share/url?';

export function shareTelegram(url: string, text?: string) {
    let link = `${telegramShare}url=${encodeURIComponent(url)}`;
    if (text) {
        link += `&text=${encodeURIComponent(text)}`;
    }
    return link;
}

const vkShare = 'https://vk.com/share.php?';

export function shareVk(url: string, title?: string, image?: string) {
    let link = `${vkShare}?url=${encodeURIComponent(url)}`;
    if (title) {
        link += `&title=${encodeURIComponent(title)}`;
    }
    if (image) {
        link += `&image=${encodeURIComponent(image)}`;
    }

    return link;
}

export function copyLink(link:string) {
    return navigator.clipboard.writeText(link)
}
