import { useEffect, useState } from 'react';

function getConfigPath() {
  const baseUrl = window.location.origin;
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = (today.getDay() === 0)
    ? today.getDate()
    : today.getDate() + (7 - today.getDay());

  return `${baseUrl}/config/${month}-${date}-${today.getFullYear()}.json`;
}

export function useConfig() {
  const [config, setConfig] = useState(null);

  const getConfig = async () => {
    try {
      const res = await fetch(getConfigPath());
      const configData = await res.json();
      setConfig({ ...configData, hasConfig: true });
    } catch (error) {
      // TODO get prev week.
      setConfig({ hasConfig: false });
    }
  };

  useEffect(() => {
    getConfig();
  }, []);

  return config;
}