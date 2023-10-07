import { triggerSignLanguageAnimation } from '../../../services/sign-language.service';

function containsDirectText(element: HTMLElement): boolean {
    const childNodes = element.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
        const node = childNodes[i];
        if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
            return true;
        }
    }
    return false;
}

let videoEl: HTMLVideoElement | null = null;
function handleMouseOver(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const text = target.textContent;
    if (text && containsDirectText(target)) {
        target.setAttribute(
            'default-background-color',
            target.style.backgroundColor
        );
        target.style.backgroundColor = 'lightblue';
        triggerSignLanguageAnimation(text);
        const video1 = "https://cdn.filestackcontent.com/ARVNFDkIFTCy2nOXvYSoLz/security=policy:eyJleHBpcnkiOjE3MDQwNjcxOTl9,signature:4fecf6745f34d9885337fa2a9eb893d128ff3b0c08cc704ccd36ae482e31c9c0/h7tLvJ0mRlaVUuoGTiQT";
        // const video2 = "https://scontent.xx.fbcdn.net/v/t42.3356-2/336065636_6851411081552113_3431090678580757220_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=060d78&_nc_ohc=hq6KYmL-j-AAX8pyeK3&_nc_ht=scontent.xx&oh=03_AdS1Gw8pE2HJOqM-Tz-C0z4bMZSfAYJ6-n_SeVMnb5Ae7Q&oe=6415E3A1&dl=1"
        const video3 = "https://cdn.filestackcontent.com/ARVNFDkIFTCy2nOXvYSoLz/security=policy:eyJleHBpcnkiOjE3MDQwNjcxOTl9,signature:4fecf6745f34d9885337fa2a9eb893d128ff3b0c08cc704ccd36ae482e31c9c0/lh07YdpMRvyLEIci4zNw";
        videoEl = playVideo(
            // Math.random() > 0.5 ? video1 : video2
            video3
        );
    }
};

const handleMouseOut = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    target.style.backgroundColor =
        target.getAttribute('default-background-color') || '';
    if (videoEl) {
        videoEl.remove();
    }
};


export const handleSignLanguageEvents = (active: boolean) => {
    document.removeEventListener('mouseover', handleMouseOver);
    document.removeEventListener('mouseout', handleMouseOut);
    if (active) {
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);
    }
}

function playVideo(video: string) {
    const videoEl = document.createElement('video');
    videoEl.src = video;
    videoEl.autoplay = true;
    videoEl.style.position = 'fixed';
    videoEl.style.bottom = '-30px';
    videoEl.style.left = '-10px';
    videoEl.style.width = '250px';
    videoEl.style.height = '180px';
    videoEl.style.zIndex = '999';

    document.body.appendChild(videoEl);
    videoEl.play();
    videoEl.onended = () => {
        document.body.removeChild(videoEl);
    }
    return videoEl;
}