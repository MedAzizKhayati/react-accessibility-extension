import { useEffect } from 'react';

type Callback = (text: string) => void;

export default function useHover(shouldTrigger: boolean, callback: Callback) {
  useEffect(() => {
    if (shouldTrigger) {
      const handleMouseOver = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        const text = target.innerText;

        if (text) {
          target.setAttribute(
            'default-background-color',
            target.style.backgroundColor
          );
          target.style.backgroundColor = 'lightblue';
          callback(text);
        }
      };

      const handleMouseOut = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        target.style.backgroundColor =
          target.getAttribute('default-background-color') || '';
      };
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);

      return () => {
        document.removeEventListener('mouseover', handleMouseOver);
        document.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [shouldTrigger, callback]);
}
