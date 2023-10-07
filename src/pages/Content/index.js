import { printLine } from './modules/print';
import { handleSignLanguageEvents } from './modules/sing-language.module';
import { readFromLocalStorage, writeToLocalStorage } from './helpers/utils';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'triggerSignLanguage') {
    // Get the data from the message
    const { triggerSignLanguage } = message;
    handleSignLanguageEvents(triggerSignLanguage);
    // console.log('Sign language triggered: ', triggerSignLanguage);
    writeToLocalStorage('triggerSignLanguage', triggerSignLanguage);
  }
});

// Initialize the sign language events
if (readFromLocalStorage('triggerSignLanguage')) {
  handleSignLanguageEvents(true);
}
