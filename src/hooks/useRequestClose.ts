/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


import { useEffect, useState } from "react";

const useRequestClose = (onRequestClose: () => void) => {
  const [opacity, setOpacity] = useState(1);
  let timeout:number;

  useEffect(()=>{
    if(timeout){
      clearTimeout(timeout)
    }
  },[])

  return [
    opacity,
    () => {
      setOpacity(0);
      onRequestClose();
      timeout = setTimeout(() => setOpacity(1), 0);
    },
  ] as const;
};

export default useRequestClose;
