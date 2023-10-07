import React, { useEffect } from 'react';
import InputRow from '../../components/InputRow';
import { BiUserVoice } from 'react-icons/bi';
import { MdSettingsVoice } from 'react-icons/md';
import { HiOutlineHand } from 'react-icons/hi';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function Main() {
  const [signLanguage, setSignLanguage] = useLocalStorage('signLanguage');
  const [screenReader, setScreenReader] = React.useState(false);

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        action: 'triggerSignLanguage',
        triggerSignLanguage: signLanguage,
      });
    });
  });

  return (
    <main className="flex flex-col gap-3 py-4">
      <InputRow
        Icon={HiOutlineHand}
        title="Sign Language"
        enabled={signLanguage}
        setEnabled={setSignLanguage}
      />
      <InputRow
        Icon={BiUserVoice}
        title="Screen Reader"
        enabled={screenReader}
        setEnabled={setScreenReader}
        comingSoon
      />
      <InputRow Icon={MdSettingsVoice} title="Voice Assisstant" comingSoon />
    </main>
  );
}
