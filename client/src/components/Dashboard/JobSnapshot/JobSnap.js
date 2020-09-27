import React, {useEffect, useState} from 'react';
import {list} from '../../../api/api-job';
import Paper  from '@material-ui/core/Paper';

export default function JobSnap() {
  const [jobList, setJobList] = useState({})

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then(data => {
      setJobList({data})
    });

    return function cleanUp() {
      abortController.abort()
    }
  }, [])

  
  
  return (
    <Paper>
      <h1>Job Snapshot</h1>
    </Paper>
  )
}
