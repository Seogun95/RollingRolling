import { useState, useCallback } from 'react';

const useLoginInput = (value, initial, reject, success, Reg, samePw) => {
  const [input, setInput] = useState(value);
  const [alert, setAlert] = useState(initial);
  const [checkReg, setCheckReg] = useState(false);

  const setInputHandler = useCallback(
    (e) => {
      setInput(e.target.value);
      if (!Reg.test(e.target.value)) {
        setAlert(reject);
        setCheckReg(false);
      } else {
        setAlert(success);
        setCheckReg(true);
      }
    },
    [Reg, reject, success]
  );

  const checkSamePw = (e) => {
    setInput(e.target.value);
    if (e.target.value === samePw && e.target.value !== '') {
      setAlert(success);
      setCheckReg(true);
    } else if (e.target.value === '' || samePw === '') {
      setAlert(reject);
      setCheckReg(false);
    } else {
      setAlert(reject);
      setCheckReg(false);
    }
  };

  return [input, setInputHandler, alert, checkReg, checkSamePw];
};

export default useLoginInput;
