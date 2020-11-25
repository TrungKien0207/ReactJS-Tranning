import React, { useEffect, useState } from 'react';
import useClock from '../../hooks/useClock';

Clock.propTypes = {};


function Clock() {
  const { timeString } = useClock();

  return (
    <p className="" style={{fontSize: '42px'}}>{ timeString }</p>
  );
}

export default Clock;