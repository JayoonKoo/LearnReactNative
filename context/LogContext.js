import React, {createContext, useEffect, useRef, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import localStorage from '../storage/localStorage';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const initailLogsRef = useRef(null);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    (async () => {
      const savedLogs = await localStorage.get();
      if (savedLogs) {
        initailLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);

  useEffect(() => {
    if (logs === initailLogsRef.current) {
      return;
    }
    localStorage.set(logs);
  }, [logs]);

  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  const onModify = modified => {
    const nextLogs = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLogs);
  };

  const onRemove = id => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };

  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
